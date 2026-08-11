import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import news from '../data/news'

function NewsDetail() {
  const { id } = useParams()
  const item = news.find((n) => n.id === Number(id))

  if (!item) {
    return (
      <>
        <PageBanner title="新闻公告" crumb="新闻详情" />
        <section className="section">
          <div className="container text-center">
            <h2>内容不存在</h2>
            <p className="mt-24" style={{ color: 'var(--muted)' }}>
              您访问的新闻不存在或已被删除。
            </p>
            <Link to="/news" className="btn btn-primary mt-24">
              ← 返回新闻列表
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="新闻公告" crumb="新闻详情" />
      <section className="section">
        <div className="container">
          <article className="article">
            <h1>{item.title}</h1>
            <div className="meta">
              <span>{item.categoryText}</span>
              <span>{item.date}</span>
              <span>浏览 {item.views} 次</span>
            </div>
            <div className="content">
              {item.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link to="/news" className="back">
              ← 返回新闻列表
            </Link>
          </article>
        </div>
      </section>
    </>
  )
}

export default NewsDetail
