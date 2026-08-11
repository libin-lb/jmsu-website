import { Link } from 'react-router-dom'
import site from '../data/site'
import news from '../data/news'
import departments from '../data/departments'

const quickCards = [
  { to: '/about', icon: '🏫', title: '学校概况', desc: '历史沿革与办学特色' },
  { to: '/departments', icon: '🎓', title: '院系设置', desc: '17个学院与专业介绍' },
  { to: '/news', icon: '📰', title: '新闻公告', desc: '校园动态与通知信息' },
  { to: '/admissions', icon: '📋', title: '招生信息', desc: '招生简章与专业目录' },
]

const stats = [
  { value: '78', label: '余年办学历史' },
  { value: '25000+', label: '在校学生' },
  { value: '17', label: '学院（部）' },
  { value: '80+', label: '本科专业' },
]

function NewsList({ items }) {
  return (
    <ul className="news-list">
      {items.map((n) => (
        <li key={n.id}>
          <span className="tag">{n.categoryText}</span>
          <Link to={`/news/${n.id}`}>{n.title}</Link>
          <time dateTime={n.date}>{n.date.slice(5)}</time>
        </li>
      ))}
    </ul>
  )
}

function Home() {
  const schoolNews = news.filter((n) => n.category === 'school').slice(0, 5)
  const noticeNews = news
    .filter((n) => n.category !== 'school')
    .slice(0, 5)
  const topDeps = departments.slice(0, 6)

  return (
    <>
      {/* ================= 英雄区 ================= */}
      <section className="hero">
        <div className="container hero-inner">
          <h1 className="school-name">{site.name}</h1>
          <p className="school-en">{site.nameEn}</p>
          <p className="slogan">团结 · 勤奋 · 求实 · 创新</p>
          <p className="hero-desc">
            {site.name}坐落于祖国东北部黑龙江省佳木斯市，是黑龙江省属重点建设的综合性大学。学校学科门类齐全、办学特色鲜明，坚持立德树人，努力培养高素质应用型人才。
          </p>
          <div className="hero-btns">
            <Link to="/about" className="btn btn-primary">
              了解学校 →
            </Link>
            <Link to="/admissions" className="btn btn-outline">
              招生信息
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 快速入口 ================= */}
      <section className="quick-links section">
        <div className="container quick-grid">
          {quickCards.map((c) => (
            <Link to={c.to} className="quick-card" key={c.to}>
              <div className="icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= 学校概况 ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>学校概况</h2>
            <p>ABOUT JIAMUSI UNIVERSITY</p>
          </div>
          <div className="card">
            <p style={{ marginBottom: 12 }}>
              {site.name}始建于{site.founded}年，是一所以医学、工学为特色，多学科协调发展的综合性大学。学校现有{site.shortName}
              学府街校区等多个校区，占地170余万平方米，教学科研仪器设备总值5亿余元。
            </p>
            <p style={{ marginBottom: 12 }}>
              学校设有临床医学院、口腔医学院、机械工程学院、信息电子技术学院等17个学院（部），开设本科专业80余个，涵盖医学、工学、理学、农学、经济学、管理学、文学、法学、教育学、艺术学等学科门类，现有全日制在校生2.5万余人。
            </p>
            <p>
              学校坚持开放办学，先后与俄罗斯、日本、韩国、美国等多个国家和地区的高校建立校际合作关系，为学生的国际交流与深造搭建了广阔平台。
            </p>
            <div className="mt-24">
              <Link to="/about" className="btn btn-primary">
                了解更多 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 新闻动态 ================= */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>新闻动态</h2>
            <p>NEWS &amp; NOTICES</p>
          </div>
          <div className="news-grid">
            <div className="news-block">
              <div className="news-block-head">
                <h3>校园新闻</h3>
                <Link to="/news">更多 ›</Link>
              </div>
              <NewsList items={schoolNews} />
            </div>
            <div className="news-block">
              <div className="news-block-head">
                <h3>通知公告</h3>
                <Link to="/news">更多 ›</Link>
              </div>
              <NewsList items={noticeNews} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 院系预览 ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>院系设置</h2>
            <p>SCHOOLS &amp; COLLEGES</p>
          </div>
          <div className="grid-3">
            {topDeps.map((d) => (
              <div className="card dep-card" key={d.id}>
                <div className="icon">{d.icon === 'med' ? '🩺' : '⚙️'}</div>
                <h3>{d.name}</h3>
                <span className="cat">{d.category}</span>
                <p>{d.intro}</p>
                <div className="majors">
                  <strong>主要专业：</strong>
                  {d.majors.slice(0, 3).join('、')}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/departments" className="btn btn-primary">
              查看全部院系 →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 招生宣传 ================= */}
      <section className="section section-alt">
        <div className="container">
          <div className="card">
            <div className="section-head">
              <h2>招生信息</h2>
              <p>ADMISSIONS</p>
            </div>
            <p className="text-center" style={{ color: 'var(--muted)', maxWidth: 720, margin: '0 auto' }}>
              2026年招生工作现已全面启动，欢迎报考{site.name}！招生咨询热线：{site.admission.hotline}
            </p>
            <div className="text-center mt-24">
              <Link to="/admissions" className="btn btn-primary">
                查看招生简章 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
