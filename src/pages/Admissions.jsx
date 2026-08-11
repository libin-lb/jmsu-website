import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import site from '../data/site'
import admissions from '../data/admissions'

function Admissions() {
  return (
    <>
      <PageBanner title="招生信息" crumb="招生信息" />

      <section className="section">
        <div className="container">
          <div className="notice-tip">
            ※ 温馨提示：以下内容为示例数据，仅供学习演示。招生政策、计划与录取规则请以黑龙江省招生考试院及学校招生办正式发布的信息为准。
          </div>

          {/* 报考流程 */}
          <div className="section-head">
            <h2>报考流程</h2>
            <p>APPLICATION GUIDE</p>
          </div>
          <div className="steps-grid">
            {admissions.steps.map((s, i) => (
              <div className="step-card" key={s.title}>
                <div className="num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* 招生专业 */}
          <div className="section-head mt-40">
            <h2>招生专业目录</h2>
            <p>MAJORS</p>
          </div>
          <div className="major-groups">
            {admissions.majors.map((g) => (
              <div className="major-group" key={g.group}>
                <h3>{g.group}</h3>
                <div className="chips">
                  {g.items.map((m) => (
                    <span className="chip" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 奖助学金 */}
          <div className="section-head mt-40">
            <h2>奖助学金体系</h2>
            <p>SCHOLARSHIPS</p>
          </div>
          <div className="scholarship-grid">
            {admissions.scholarships.map((s) => (
              <div className="card scholarship-card" key={s.name}>
                <div className="icon">🏅</div>
                <h3>{s.name}</h3>
                <span className="amount">{s.amount}</span>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* 咨询方式 */}
          <div className="section-head mt-40">
            <h2>招生咨询</h2>
            <p>CONTACT US</p>
          </div>
          <div className="card text-center">
            <p>
              招生咨询热线：<strong>{site.admission.hotline}</strong>
            </p>
            <p>
              咨询邮箱：<strong>{site.admission.email}</strong>
            </p>
            <p>
              办公地址：<strong>{site.admission.office}</strong> · {site.address}
            </p>
            <div className="mt-24">
              <Link to="/contact" className="btn btn-primary">
                在线咨询 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admissions
