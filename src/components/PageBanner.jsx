import { Link } from 'react-router-dom'

function PageBanner({ title, crumb = '首页' }) {
  return (
    <div className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <p className="crumb">
          <Link to="/">首页</Link> / {crumb}
        </p>
      </div>
    </div>
  )
}

export default PageBanner
