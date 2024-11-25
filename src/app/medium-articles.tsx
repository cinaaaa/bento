'use client'
import { useState, useEffect } from 'react'

const MediumArticles = () => {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sinafarhadi',
        )
        const data = await response.json()
        setArticles(data.items)
      } catch (error) {
        console.error('Error fetching Medium articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return (
      <div className="mt-10 text-center">
        <p className="text-xl font-base">Loading my medium articles...</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h3 className="mb-6 text-2xl font-heading">Latest Articles</h3>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <a
            key={article?.guid}
            href={article?.link}
            target="_blank"
            rel="noopener noreferrer"
            className=" 
                block w-full rounded-base border-2 border-border bg-violet-100 
                p-5 shadow-light transition-all hover:translate-x-boxShadowX 
                hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder 
                dark:shadow-dark dark:hover:shadow-none
            "
          >
            <h4 className="text-lg font-heading">{article.title}</h4>
            <p className="mt-2 text-sm font-base">
              {article.description.replace(/<[^>]*>/g, '')}
            </p>
            <p className="mt-2 text-xs text-gray-600">
              {new Date(article.pubDate).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default MediumArticles
