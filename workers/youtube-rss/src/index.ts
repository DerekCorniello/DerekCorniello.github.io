const YOUTUBE_CHANNEL_ID = 'UCRhMRc50jbl7B_dfjS5lsqw'

const ALLOWED_ORIGINS = [
  'https://derekcorniello.github.io',
  'https://derekcorn.dev',
]

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false
  return ALLOWED_ORIGINS.includes(origin)
}

interface VideoItem {
  guid: string
  title: string
  pubDate: string
  description: string
  thumbnail: string
  likes: number
  views: number
}

interface Rss2JsonResponse {
  status: string
  items: VideoItem[]
}

function parseYouTubeRss(xml: string): Rss2JsonResponse {
  const items: VideoItem[] = []
  
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/gi
  let entryMatch
  
  while ((entryMatch = entryRegex.exec(xml)) !== null) {
    const entry = entryMatch[1]
    
    const videoIdMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/i)
    const titleMatch = entry.match(/<media:title>([^<]*)<\/media:title>/i) || entry.match(/<title>([^<]*)<\/title>/i)
    const publishedMatch = entry.match(/<published>([^<]+)<\/published>/i)
    const thumbnailMatch = entry.match(/<media:thumbnail[^>]+url="([^"]+)"/i)
    const descriptionMatch = entry.match(/<media:description>([\s\S]*?)<\/media:description>/i)
    const starRatingMatch = entry.match(/<media:starRating[^>]+count="(\d+)"/i)
    const statisticsMatch = entry.match(/<media:statistics[^>]+views="(\d+)"/i)
    
    if (videoIdMatch && titleMatch) {
      const videoId = videoIdMatch[1]
      const description = descriptionMatch ? descriptionMatch[1].trim() : ''
      
      items.push({
        guid: `yt:video:${videoId}`,
        title: titleMatch[1].trim(),
        pubDate: publishedMatch ? publishedMatch[1] : new Date().toISOString(),
        description,
        thumbnail: thumbnailMatch ? thumbnailMatch[1] : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        likes: starRatingMatch ? parseInt(starRatingMatch[1], 10) : 0,
        views: statisticsMatch ? parseInt(statisticsMatch[1], 10) : 0,
      })
    }
  }
  
  return {
    status: 'ok',
    items,
  }
}

export default {
  async fetch(request: Request): Promise<Response> {
    const origin = request.headers.get('Origin')
    
    if (request.method === 'OPTIONS') {
      const allowOrigin = isAllowedOrigin(origin) ? origin : ALLOWED_ORIGINS[0]
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': allowOrigin,
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      })
    }
    
    if (!isAllowedOrigin(origin)) {
      return new Response(JSON.stringify({ status: 'error', message: 'Forbidden' }), {
        status: 403,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin || ALLOWED_ORIGINS[0],
        },
      })
    }
    
    try {
      const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`
      const response = await fetch(rssUrl)
      
      if (!response.ok) {
        throw new Error(`YouTube RSS returned ${response.status}`)
      }
      
      const xml = await response.text()
      const data = parseYouTubeRss(xml)
      
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin,
          'Cache-Control': 'public, s-maxage=3600',
        },
      })
    } catch (error) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown error',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': origin,
          },
        }
      )
    }
  },
}
