import { Link } from 'react-router-dom'
import site from '../data/site'

const navLinks = [
  { to: '/about', label: '学校概况' },
  { to: '/departments', label: '院系设置' },
  { to: '/news', label: '新闻公告' },
  { to: '/admissions', label: '招生信息' },
  { to: '/contact', label: '联系我们' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-about">
          <div className="logo-text">
            <strong>{site.name}</strong>
            <span>{site.nameEn}</span>
          </div>
          <p className="slogan">校训：{site.slogan}</p>
          <p>
            {site.name}是黑龙江省属重点建设的综合性大学，始建于{site.founded}年。学校秉承"团结、勤奋、求实、创新"的校训精神，坚持立德树人根本任务，努力建设特色鲜明的高水平应用型大学。
          </p>
        </div>
        <div>
          <h4>网站导航</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>快速链接</h4>
          <ul>
            {site.quickLinks.map((l) => (
              <li key={l.text}>
                <a href={l.href}>{l.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>联系方式</h4>
          <ul className="footer-contact">
            <li>
              <i>📍</i> <span>{site.address}</span>
            </li>
            <li>
              <i>✉</i> <span>邮编：{site.postalCode}</span>
            </li>
            <li>
              <i>☎</i> <span>{site.phone}</span>
            </li>
            <li>
              <i>✉</i> <span>{site.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} {site.name}（示例站点）· 网站内容均为演示数据
        </div>
      </div>
    </footer>
  )
}

export default Footer
