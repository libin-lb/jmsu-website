// 院系设置数据（示例内容，可按实际情况修改）
const departments = [
  {
    id: 'medicine',
    name: '临床医学院',
    short: '医学',
    category: '医学部',
    icon: 'med',
    intro:
      '学院办学历史悠久，设有临床医学等专业，建有高水平教学医院，注重医教协同与临床实践能力培养。',
    majors: ['临床医学', '麻醉学', '医学影像学'],
    established: '1947',
  },
  {
    id: 'stomatology',
    name: '口腔医学院',
    short: '口腔',
    category: '医学部',
    icon: 'tooth',
    intro:
      '口腔医学专业实力突出，拥有先进的口腔临床教学基地，培养具备扎实口腔医学理论与临床技能的应用型人才。',
    majors: ['口腔医学', '口腔医学技术'],
    established: '1985',
  },
  {
    id: 'pharmacy',
    name: '药学院',
    short: '药学',
    category: '医学部',
    icon: 'drug',
    intro:
      '学院涵盖药学、制药工程等领域，建有药物分析、药剂学等教学科研平台，服务区域医药产业发展。',
    majors: ['药学', '制药工程', '药物制剂'],
    established: '1998',
  },
  {
    id: 'mech',
    name: '机械工程学院',
    short: '机械',
    category: '工学部',
    icon: 'gear',
    intro:
      '面向装备制造产业发展需求，设有机械设计制造及其自动化等专业，注重工程实践与创新能力培养。',
    majors: ['机械设计制造及其自动化', '机械电子工程', '车辆工程'],
    established: '1958',
  },
  {
    id: 'information',
    name: '信息电子技术学院',
    short: '信息',
    category: '工学部',
    icon: 'chip',
    intro:
      '学院以计算机与电子信息技术为特色，建有软件实验室、嵌入式系统实验室等，培养信息化领域应用型人才。',
    majors: ['计算机科学与技术', '软件工程', '电子信息工程', '通信工程'],
    established: '1999',
  },
  {
    id: 'materials',
    name: '材料科学与工程学院',
    short: '材料',
    category: '工学部',
    icon: 'atom',
    intro:
      '依托区域新材料产业，设有材料科学与工程、金属材料工程等专业，注重材料制备与成型技术研究。',
    majors: ['材料科学与工程', '金属材料工程', '焊接技术与工程'],
    established: '2002',
  },
  {
    id: 'agri',
    name: '农业与水利工程学院',
    short: '农水',
    category: '农学与理学部',
    icon: 'leaf',
    intro:
      '立足三江平原现代农业，设有农学、农业水利工程等专业，为区域农业现代化提供人才与科技支撑。',
    majors: ['农学', '园艺', '农业水利工程', '土地资源管理'],
    established: '2010',
  },
  {
    id: 'science',
    name: '理学院',
    short: '理学',
    category: '农学与理学部',
    icon: 'math',
    intro:
      '学院承担全校公共数学、物理教学，设有数学与应用数学、物理学等专业，夯实学生科学基础。',
    majors: ['数学与应用数学', '物理学', '统计学'],
    established: '1958',
  },
  {
    id: 'economy',
    name: '经济与管理学院',
    short: '经管',
    category: '人文社会科学部',
    icon: 'chart',
    intro:
      '学院面向现代服务业与区域经济，设有会计学、国际经济与贸易、旅游管理等专业，注重商务实践能力培养。',
    majors: ['会计学', '国际经济与贸易', '市场营销', '旅游管理'],
    established: '2003',
  },
  {
    id: 'humanity',
    name: '人文学院',
    short: '人文',
    category: '人文社会科学部',
    icon: 'book',
    intro:
      '学院涵盖汉语言文学、历史学、法学等专业，注重人文素养与家国情怀培育，是学校文化传承的重要阵地。',
    majors: ['汉语言文学', '历史学', '法学', '秘书学'],
    established: '1958',
  },
  {
    id: 'foreign',
    name: '外国语学院',
    short: '外语',
    category: '人文社会科学部',
    icon: 'globe',
    intro:
      '学院设有英语、俄语、日语等专业，依托东北亚区位优势，注重语言应用与跨文化交流能力培养。',
    majors: ['英语', '俄语', '日语', '商务英语'],
    established: '1997',
  },
  {
    id: 'education',
    name: '教育科学学院',
    short: '教育',
    category: '人文社会科学部',
    icon: 'edu',
    intro:
      '学院以教师教育为特色，设有教育学、学前教育、心理学等专业，为基础教育培养高素质师资。',
    majors: ['教育学', '学前教育', '心理学', '教育技术学'],
    established: '2004',
  },
  {
    id: 'art',
    name: '美术学院',
    short: '美术',
    category: '艺术与体育部',
    icon: 'art',
    intro:
      '学院设有美术学、视觉传达设计、环境设计等专业，注重艺术创作与设计实践能力培养。',
    majors: ['美术学', '视觉传达设计', '环境设计', '绘画'],
    established: '2000',
  },
  {
    id: 'music',
    name: '音乐学院',
    short: '音乐',
    category: '艺术与体育部',
    icon: 'music',
    intro:
      '学院设有音乐学、音乐表演等专业，建有琴房、音乐厅等教学场所，培养音乐教育与应用人才。',
    majors: ['音乐学', '音乐表演'],
    established: '2001',
  },
  {
    id: 'sports',
    name: '体育学院',
    short: '体育',
    category: '艺术与体育部',
    icon: 'sport',
    intro:
      '学院设有体育教育、社会体育指导与管理等专业，注重运动技能与体育教学能力培养。',
    majors: ['体育教育', '社会体育指导与管理'],
    established: '2005',
  },
  {
    id: 'life',
    name: '生命科学学院',
    short: '生科',
    category: '农学与理学部',
    icon: 'dna',
    intro:
      '学院设有生物科学、生物技术等专业，依托三江平原生态资源开展教学科研，培养生命科学领域人才。',
    majors: ['生物科学', '生物技术'],
    established: '2008',
  },
]

export default departments
