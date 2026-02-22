export interface Post {
  slug: string
  type: 'blog' | 'youtube'
  date: string
  dateObj: Date
  title: string
  excerpt: string
  tags: string[]
  url?: string
  thumbnail?: string
  likes?: number
  views?: number
  likesFormatted?: string
  viewsFormatted?: string
}

const blogPosts: Post[] = [
  {
    slug: 'keyboard',
    type: 'blog',
    date: 'Aug 22, 2025',
    dateObj: new Date('2025-08-22'),
    title: 'I Built a Custom Keyboard!',
    excerpt: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, firmware, handwiring process, and lessons learned along the way.',
    tags: ['Hardware', 'DIY'],
  },
  {
    slug: 'nvim-transition',
    type: 'blog',
    date: 'Jul 21, 2024',
    dateObj: new Date('2024-07-21'),
    title: 'My Transition from VSC*de to NeoVim',
    excerpt: 'My experience transitioning from VSC*de to NeoVim, including setting up lazy.nvim, Mason, and other plugins that improved my development workflow.',
    tags: ['Neovim', 'Development'],
  },
]

const YOUTUBE_CHANNEL_ID = 'UCRhMRc50jbl7B_dfjS5lsqw'

let cachedYouTubePosts: Promise<Post[]> | null = null

function formatNumber(num: number): string {
  if (num >= 1000000) {
    const val = num / 1000000
    return val >= 10 ? `${Math.floor(val)}M` : `${val.toFixed(1).replace(/\.0$/, '')}M`
  }
  if (num >= 1000) {
    const val = num / 1000
    return val >= 10 ? `${Math.floor(val)}k` : `${val.toFixed(1).replace(/\.0$/, '')}k`
  }
  return num.toString()
}

function mapItemToPost(item: any): Post {
  const videoId = item.guid.split(':').pop()
  const cleanDescription = item.description ? item.description.replace(/<[^>]*>/g, '') : ''
  const truncatedExcerpt = cleanDescription.length > 120 
    ? cleanDescription.slice(0, 120) + '...'
    : cleanDescription
  return {
    slug: videoId,
    type: 'youtube' as const,
    dateObj: new Date(item.pubDate),
    date: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    title: item.title,
    excerpt: truncatedExcerpt,
    tags: ['YouTube'],
    url: `https://www.youtube.com/watch?v=${videoId}`,
    thumbnail: item.thumbnail,
    ...(item.likes !== undefined && { likes: item.likes }),
    ...(item.views !== undefined && { views: item.views }),
    ...(item.likes !== undefined && { likesFormatted: formatNumber(item.likes) }),
    ...(item.views !== undefined && { viewsFormatted: formatNumber(item.views) }),
  }
}

async function fetchFromWorker(): Promise<Post[]> {
  const apiUrl = 'https://youtube-rss.corniedj.workers.dev'
  const response = await fetch(apiUrl)
  
  if (!response.ok) {
    return []
  }
  
  const data = await response.json()
  
  if (data.status === 'ok' && data.items) {
    return data.items.map(mapItemToPost)
  }
  
  return []
}

async function fetchFromRss2Json(): Promise<Post[]> {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
  
  const response = await fetch(apiUrl)
  const data = await response.json()
  
  if (data.status === 'ok' && data.items) {
    return data.items.map(mapItemToPost)
  }
  
  return []
}

export function usePosts() {
  const getBlogPosts = (): Post[] => {
    return blogPosts
  }

  const fetchYouTubePosts = async (): Promise<Post[]> => {
    if (cachedYouTubePosts) return cachedYouTubePosts
    
    cachedYouTubePosts = (async () => {
      try {
        const posts = await fetchFromWorker()
        
        if (posts.length > 0) {
          return posts
        }
        
        console.log('Worker unavailable, falling back to rss2json')
        return await fetchFromRss2Json()
      } catch (error) {
        console.error('Failed to fetch YouTube videos:', error)
        
        try {
          return await fetchFromRss2Json()
        } catch (fallbackError) {
          console.error('Fallback also failed:', fallbackError)
          return []
        }
      }
    })()
    
    return cachedYouTubePosts
  }

  const getRecentPosts = async (count: number = 4): Promise<Post[]> => {
    const youtubePosts = await fetchYouTubePosts()
    const allPosts = [...blogPosts, ...youtubePosts]
    allPosts.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())
    return allPosts.slice(0, count)
  }

  const getAllPosts = async (): Promise<Post[]> => {
    const youtubePosts = await fetchYouTubePosts()
    return [...youtubePosts, ...blogPosts]
  }

  return {
    blogPosts,
    getBlogPosts,
    fetchYouTubePosts,
    getRecentPosts,
    getAllPosts,
  }
}
