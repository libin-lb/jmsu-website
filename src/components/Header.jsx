import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import site from '../data/site'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/about', label: '学校概况' },
  { to: '/departments', label: '院系设置' },
  { to: '/news', label: '新闻公告' },
  { to: '/admissions', label: '招生信息' },
  { to: '/contact', label: '联系我们' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="topbar">
        <div className="container">
          <div>欢迎访问{site.name}官方网站（示例站点）</div>
          <div>
            <a href={`tel:${site.phone}`}>☎ {site.phone}</a>
            <a href={`mailto:${site.email}`}>✉ {site.email}</a>
          </div>
        </div>
      </div>
      <div className="container navbar">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <div className="logo-badge">佳</div>
          <div className="logo-text">
            <strong>{site.name}</strong>
            <span>{site.nameEn}</span>
          </div>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label="打开菜单"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
