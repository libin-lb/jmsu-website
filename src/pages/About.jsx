import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import site from '../data/site'

const milestones = [
  { year: '1947', event: '学校前身——合江军区卫生学校创建，开启办学历史。' },
  { year: '1958', event: '组建佳木斯医学院，成为省内重要的医学人才培养基地。' },
  { year: '1986', event: '获批硕士学位授予单位，学科建设迈上新台阶。' },
  { year: '1996', event: '经教育部批准，多校合并组建佳木斯大学，成为综合性大学。' },
  { year: '2003', event: '通过教育部本科教学工作水平评估，办学质量稳步提升。' },
  { year: '2010', event: '成为黑龙江省属重点建设的综合性大学。' },
  { year: '2020', event: '获批博士学位授予单位，办学层次实现历史性突破。' },
  { year: '2026', event: '全面推进高水平应用型大学建设，内涵式发展不断深化。' },
]

const values = [
  {
    icon: '🎯',
    name: '办学定位',
    desc: '立足黑龙江、服务区域、面向全国，建设特色鲜明的高水平应用型大学。',
  },
  {
    icon: '🏛️',
    name: '校训精神',
    desc: '团结、勤奋、求实、创新——凝聚全校师生共同的价值追求。',
  },
  {
    icon: '🌏',
    name: '开放办学',
    desc: '依托东北亚区位优势，深化国际交流与合作，拓展学生发展视野。',
  },
  {
    icon: '🤝',
    name: '产教融合',
    desc: '深化校地校企合作，构建协同育人体系，培养应用型创新人才。',
  },
]

function About() {
  return (
    <>
      <PageBanner title="学校概况" crumb="学校概况" />

      {/* 学校简介 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>学校简介</h2>
            <p>ABOUT THE UNIVERSITY</p>
          </div>
          <div className="card">
            <p style={{ marginBottom: 12 }}>
              {site.name}（{site.nameEn}）坐落于三江平原腹地、美丽的松花江畔——黑龙江省佳木斯市，是黑龙江省属重点建设的综合性大学。学校始建于{site.founded}年，办学历史悠久，文化底蕴深厚。
            </p>
            <p style={{ marginBottom: 12 }}>
              学校现有{site.postalCode}学府街校区等多个校区，校园占地面积170余万平方米。设有临床医学院、口腔医学院、药学院、机械工程学院、信息电子技术学院、材料科学与工程学院、理学院、经济与管理学院、人文学院、外国语学院、教育科学学院、美术学院、音乐学院、体育学院、生命科学学院、农业与水利工程学院等17个学院（部），开设本科专业80余个，覆盖医学、工学、理学、农学、经济学、管理学、文学、法学、教育学、艺术学10大学科门类。
            </p>
            <p style={{ marginBottom: 12 }}>
              学校现有全日制在校生2.5万余人，教职工2500余人，其中高级职称教师800余人，博士、硕士研究生导师500余人。学校建有国家级、省级一流本科专业建设点20余个，省级重点学科10余个，形成了医学与工程交叉融合、基础与应用协调发展的学科专业体系。
            </p>
            <p>
              新时代，{site.shortName}人正以昂扬的姿态，坚持立德树人根本任务，深化教育教学改革，全面提升人才培养质量、科学研究水平和社会服务能力，向着建设特色鲜明的高水平应用型大学目标阔步前进。
            </p>
          </div>
        </div>
      </section>

      {/* 历史沿革 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>历史沿革</h2>
            <p>HISTORY</p>
          </div>
          <div className="timeline">
            {milestones.map((m) => (
              <div className="timeline-item" key={m.year}>
                <span className="year">{m.year}</span>
                <span className="event">　{m.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 办学理念 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>办学理念</h2>
            <p>OUR VALUES</p>
          </div>
          <div className="grid-3">
            {values.map((v) => (
              <div className="card dep-card" key={v.name}>
                <div className="icon" style={{ background: 'linear-gradient(135deg,#d9a520,#b8870f)' }}>
                  {v.icon}
                </div>
                <h3>{v.name}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/departments" className="btn btn-primary">
              查看院系设置 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
