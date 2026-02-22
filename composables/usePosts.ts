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

export function usePosts() {
  const getBlogPosts = (): Post[] => {
    return blogPosts
  }

  const fetchYouTubePosts = async (): Promise<Post[]> => {
    try {
      const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
      
      const response = await fetch(apiUrl)
      const data = await response.json()
      
      if (data.status === 'ok' && data.items) {
        return data.items.map((item: any) => {
          const videoId = item.guid.split(':').pop()
          return {
            slug: videoId,
            type: 'youtube' as const,
            dateObj: new Date(item.pubDate),
            date: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            title: item.title,
            excerpt: item.description ? item.description.replace(/<[^>]*>/g, '').slice(0, 120) : '',
            tags: ['YouTube'],
            url: `https://www.youtube.com/watch?v=${videoId}`,
            thumbnail: item.thumbnail,
          }
        })
      }
    } catch (error) {
      console.error('Failed to fetch YouTube videos:', error)
    }
    return []
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
