import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import departments from '../data/departments'

// 分类：全部 + 各学部
const categories = ['全部', ...Array.from(new Set(departments.map((d) => d.category)))]

const iconMap = {
  med: '🩺',
  tooth: '🦷',
  drug: '💊',
  gear: '⚙️',
  chip: '💻',
  atom: '🔬',
  leaf: '🌾',
  math: '📐',
  chart: '📊',
  book: '📖',
  globe: '🌐',
  edu: '🍎',
  art: '🎨',
  music: '🎵',
  sport: '🏃',
  dna: '🧬',
}

function Departments() {
  const [active, setActive] = useState('全部')
  const list = active === '全部' ? departments : departments.filter((d) => d.category === active)

  return (
    <>
      <PageBanner title="院系设置" crumb="院系设置" />

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={active === c ? 'active' : ''}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {list.map((d) => (
              <div className="card dep-card" key={d.id}>
                <div className="icon">{iconMap[d.icon] || '🎓'}</div>
                <h3>{d.name}</h3>
                <span className="cat">
                  {d.category} · 建院{d.established}
                </span>
                <p>{d.intro}</p>
                <div className="majors">
                  <strong>主要专业：</strong>
                  {d.majors.join('、')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Departments
