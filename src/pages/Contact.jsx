import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import site from '../data/site'

const contactItems = [
  { icon: '📍', label: '学校地址', value: `${site.address}（邮编 ${site.postalCode}）` },
  { icon: '☎', label: '总机电话', value: site.phone },
  { icon: '✉', label: '电子邮箱', value: site.email },
  { icon: '🌐', label: '官方网站', value: site.website },
  { icon: '🎓', label: '招生热线', value: `${site.admission.hotline}（${site.admission.office}）` },
]

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageBanner title="联系我们" crumb="联系我们" />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>联系方式</h3>
              {contactItems.map((c) => (
                <div className="contact-item" key={c.label}>
                  <div className="icon">{c.icon}</div>
                  <div>
                    <div className="label">{c.label}</div>
                    <div className="value">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-form">
              <h3>在线留言</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">姓名 *</label>
                    <input id="name" name="name" required placeholder="请输入您的姓名" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">联系电话 *</label>
                    <input id="phone" name="phone" required placeholder="请输入联系电话" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">电子邮箱</label>
                  <input id="email" name="email" type="email" placeholder="请输入邮箱（选填）" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">咨询主题</label>
                  <input id="subject" name="subject" placeholder="请输入咨询主题" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">留言内容 *</label>
                  <textarea id="message" name="message" rows="5" required placeholder="请详细描述您的问题" />
                </div>
                <button type="submit" className="btn btn-primary">
                  提交留言
                </button>
                {sent && <p className="form-tip">✅ 感谢您的留言！我们将尽快与您联系（演示站点，信息不会真实提交）。</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
