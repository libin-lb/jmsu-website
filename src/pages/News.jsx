import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import news from '../data/news'

const filters = [
  { key: 'all', label: '全部' },
  { key: 'school', label: '校园新闻' },
  { key: 'notice', label: '通知公告' },
  { key: 'activity', label: '学术活动' },
]

function News() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? news : news.filter((n) => n.category === filter)

  return (
    <>
      <PageBanner title="新闻公告" crumb="新闻公告" />

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                className={filter === f.key ? 'active' : ''}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="news-page-list">
            {list.map((n) => (
              <Link to={`/news/${n.id}`} className="card news-page-card" key={n.id}>
                <div className="card-top">
                  <span className={`badge ${n.category}`}>{n.categoryText}</span>
                  <time dateTime={n.date}>{n.date}</time>
                </div>
                <h3>{n.title}</h3>
                <p>{n.summary}</p>
                <span className="read-more">阅读全文 ›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
