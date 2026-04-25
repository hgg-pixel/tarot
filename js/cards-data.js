// 78张塔罗牌完整数据
// 字段：id, type, suit, number, name_en, name_zh, symbol, element, planet, zodiac, numerology, upright, reversed

const CARDS = [
  // ═══════════════════════════════════════
  // 大阿卡纳 Major Arcana (0–21)
  // ═══════════════════════════════════════
  {
    id: 0, type: 'major', number: 0,
    name_en: 'The Fool', name_zh: '愚者',
    symbol: '☽', element: '风', planet: '天王星', planet_symbol: '♅', zodiac: '—', zodiac_symbol: '—', numerology: 0,
    upright: '新的开始，纯真无邪，自发的冒险，无限潜能，充满好奇地踏上未知旅程',
    reversed: '鲁莽轻率，忽视风险，缺乏计划，因天真而受骗，害怕踏出第一步'
  },
  {
    id: 1, type: 'major', number: 1,
    name_en: 'The Magician', name_zh: '魔术师',
    symbol: '☿', element: '风', planet: '水星', planet_symbol: '☿', zodiac: '—', zodiac_symbol: '—', numerology: 1,
    upright: '意志力，技巧精湛，资源丰富，创造力爆发，将潜力转化为现实的能力',
    reversed: '操纵欺骗，技能浪费，缺乏计划，空有才华却无从施展'
  },
  {
    id: 2, type: 'major', number: 2,
    name_en: 'The High Priestess', name_zh: '女祭司',
    symbol: '☽', element: '水', planet: '月亮', planet_symbol: '☽', zodiac: '—', zodiac_symbol: '—', numerology: 2,
    upright: '直觉，神秘智慧，内在知识，潜意识的声音，耐心等待时机',
    reversed: '秘密隐瞒，直觉受阻，过于内向，忽视内心的声音'
  },
  {
    id: 3, type: 'major', number: 3,
    name_en: 'The Empress', name_zh: '皇后',
    symbol: '♀', element: '土', planet: '金星', planet_symbol: '♀', zodiac: '—', zodiac_symbol: '—', numerology: 3,
    upright: '丰盛繁荣，女性能量，母性与滋养，大自然的馈赠，创造与生育',
    reversed: '创意受阻，过度依赖，控制欲过强，内心空虚'
  },
  {
    id: 4, type: 'major', number: 4,
    name_en: 'The Emperor', name_zh: '皇帝',
    symbol: '♈', element: '火', planet: '火星', planet_symbol: '♂', zodiac: '牡羊座', zodiac_symbol: '♈', numerology: 4,
    upright: '权威与稳定，父性力量，纪律与秩序，掌控结构，可靠的基础',
    reversed: '专制独裁，刚愎自用，缺乏灵活性，权力滥用'
  },
  {
    id: 5, type: 'major', number: 5,
    name_en: 'The Hierophant', name_zh: '教皇',
    symbol: '♉', element: '土', planet: '金星', planet_symbol: '♀', zodiac: '金牛座', zodiac_symbol: '♉', numerology: 5,
    upright: '传统价值，精神指引，社会规范，制度与信仰，寻求导师',
    reversed: '打破规则，叛逆传统，不拘一格，质疑权威'
  },
  {
    id: 6, type: 'major', number: 6,
    name_en: 'The Lovers', name_zh: '恋人',
    symbol: '♊', element: '风', planet: '水星', planet_symbol: '☿', zodiac: '双子座', zodiac_symbol: '♊', numerology: 6,
    upright: '爱情关系，灵魂契合，价值观的选择，和谐结合，内心的统一',
    reversed: '价值观冲突，关系不和谐，不忠，选择困难'
  },
  {
    id: 7, type: 'major', number: 7,
    name_en: 'The Chariot', name_zh: '战车',
    symbol: '♋', element: '水', planet: '月亮', planet_symbol: '☽', zodiac: '巨蟹座', zodiac_symbol: '♋', numerology: 7,
    upright: '胜利，强大意志力，克服障碍，自我控制，决心与驱动力',
    reversed: '失控，侵略性过强，缺乏自律，方向不明'
  },
  {
    id: 8, type: 'major', number: 8,
    name_en: 'Strength', name_zh: '力量',
    symbol: '♌', element: '火', planet: '太阳', planet_symbol: '☉', zodiac: '狮子座', zodiac_symbol: '♌', numerology: 8,
    upright: '内在力量，勇气与耐心，柔性的影响力，同情心，驯服本能',
    reversed: '怀疑自我，缺乏信心，内在软弱，被情绪主导'
  },
  {
    id: 9, type: 'major', number: 9,
    name_en: 'The Hermit', name_zh: '隐者',
    symbol: '♍', element: '土', planet: '水星', planet_symbol: '☿', zodiac: '处女座', zodiac_symbol: '♍', numerology: 9,
    upright: '内省与独处，内在指引，寻求真相，智慧的积累，精神旅程',
    reversed: '孤立封闭，拒绝帮助，过度隐居，迷失于自我'
  },
  {
    id: 10, type: 'major', number: 10,
    name_en: 'Wheel of Fortune', name_zh: '命运之轮',
    symbol: '♃', element: '火', planet: '木星', planet_symbol: '♃', zodiac: '—', zodiac_symbol: '—', numerology: 10,
    upright: '命运转变，好运降临，关键转折点，人生周期，顺势而为',
    reversed: '坏运气，抗拒变化，命运不顺，错失时机'
  },
  {
    id: 11, type: 'major', number: 11,
    name_en: 'Justice', name_zh: '正义',
    symbol: '♎', element: '风', planet: '金星', planet_symbol: '♀', zodiac: '天秤座', zodiac_symbol: '♎', numerology: 11,
    upright: '公平与正义，真相大白，因果律，理性决断，诚实守信',
    reversed: '不公正，诚信缺失，逃避责任，判断失误'
  },
  {
    id: 12, type: 'major', number: 12,
    name_en: 'The Hanged Man', name_zh: '倒吊人',
    symbol: '♆', element: '水', planet: '海王星', planet_symbol: '♆', zodiac: '—', zodiac_symbol: '—', numerology: 12,
    upright: '主动暂停，换个视角，放弃控制，自我牺牲，等待中的智慧',
    reversed: '拖延逃避，无意义的牺牲，不愿放手，停滞不前'
  },
  {
    id: 13, type: 'major', number: 13,
    name_en: 'Death', name_zh: '死神',
    symbol: '♏', element: '水', planet: '冥王星', planet_symbol: '♇', zodiac: '天蝎座', zodiac_symbol: '♏', numerology: 13,
    upright: '结束与重生，深刻转变，告别过去，蜕变更新，不可避免的改变',
    reversed: '抗拒改变，停滞腐朽，无法放下过去，内心的死亡恐惧'
  },
  {
    id: 14, type: 'major', number: 14,
    name_en: 'Temperance', name_zh: '节制',
    symbol: '♐', element: '火', planet: '木星', planet_symbol: '♃', zodiac: '射手座', zodiac_symbol: '♐', numerology: 14,
    upright: '平衡与调和，耐心节制，适度生活，目的感，将对立融为一体',
    reversed: '失衡过激，缺乏耐心，极端行为，内在冲突激烈'
  },
  {
    id: 15, type: 'major', number: 15,
    name_en: 'The Devil', name_zh: '恶魔',
    symbol: '♑', element: '土', planet: '土星', planet_symbol: '♄', zodiac: '摩羯座', zodiac_symbol: '♑', numerology: 15,
    upright: '束缚上瘾，物质主义，阴暗面，幻觉与执念，被欲望控制',
    reversed: '挣脱束缚，觉醒解脱，探索阴暗面，重获自由'
  },
  {
    id: 16, type: 'major', number: 16,
    name_en: 'The Tower', name_zh: '塔',
    symbol: '♂', element: '火', planet: '火星', planet_symbol: '♂', zodiac: '—', zodiac_symbol: '—', numerology: 16,
    upright: '突然的颠覆，混乱瓦解，揭示真相，重建的必要，破旧立新',
    reversed: '恐惧变化，避免灾难，推迟必然，内在的崩塌'
  },
  {
    id: 17, type: 'major', number: 17,
    name_en: 'The Star', name_zh: '星星',
    symbol: '♒', element: '风', planet: '天王星', planet_symbol: '♅', zodiac: '水瓶座', zodiac_symbol: '♒', numerology: 17,
    upright: '希望与灵感，平静更新，信念的力量，精神滋养，美好的预兆',
    reversed: '失去希望，沮丧消沉，缺乏信仰，封闭自我'
  },
  {
    id: 18, type: 'major', number: 18,
    name_en: 'The Moon', name_zh: '月亮',
    symbol: '♓', element: '水', planet: '海王星', planet_symbol: '♆', zodiac: '双鱼座', zodiac_symbol: '♓', numerology: 18,
    upright: '幻象恐惧，潜意识浮现，困惑与不确定，直觉引领，潜藏真相',
    reversed: '释放恐惧，内在困惑逐渐明朗，摆脱幻觉'
  },
  {
    id: 19, type: 'major', number: 19,
    name_en: 'The Sun', name_zh: '太阳',
    symbol: '☉', element: '火', planet: '太阳', planet_symbol: '☉', zodiac: '—', zodiac_symbol: '—', numerology: 19,
    upright: '积极乐观，成功喜悦，活力充沛，清晰透明，童心与温暖',
    reversed: '短暂的挫折，过于乐观，内心阴霾，缺乏自信'
  },
  {
    id: 20, type: 'major', number: 20,
    name_en: 'Judgement', name_zh: '审判',
    symbol: '♇', element: '火', planet: '冥王星', planet_symbol: '♇', zodiac: '—', zodiac_symbol: '—', numerology: 20,
    upright: '觉醒与重生，内在呼唤，宽恕与和解，审视过去，新的自我',
    reversed: '自我怀疑，逃避审视，拒绝成长，无法原谅自己'
  },
  {
    id: 21, type: 'major', number: 21,
    name_en: 'The World', name_zh: '世界',
    symbol: '♄', element: '土', planet: '土星', planet_symbol: '♄', zodiac: '—', zodiac_symbol: '—', numerology: 21,
    upright: '完成与圆满，整合成就，旅行世界，周期结束，超越与自由',
    reversed: '尚未完成，半途而废，停滞感，缺乏闭合'
  },

  // ═══════════════════════════════════════
  // 小阿卡纳 Minor Arcana
  // 权杖 Wands (火 · 创造·激情·行动)
  // ═══════════════════════════════════════
  {
    id: 22, type: 'minor', suit: 'wands', number: 1,
    name_en: 'Ace of Wands', name_zh: '权杖王牌',
    symbol: '🔥', element: '火', planet: '—', planet_symbol: '—', zodiac: '火象星座', zodiac_symbol: '♈♌♐', numerology: 1,
    upright: '创造力爆发，新项目萌芽，激情与灵感，潜力无限，行动的冲动',
    reversed: '创意受阻，方向迷失，缺乏动力，项目夭折'
  },
  {
    id: 23, type: 'minor', suit: 'wands', number: 2,
    name_en: 'Two of Wands', name_zh: '权杖二',
    symbol: '🔥', element: '火', planet: '火星', planet_symbol: '♂', zodiac: '牡羊座', zodiac_symbol: '♈', numerology: 2,
    upright: '未来规划，扩展视野，进取心，掌握方向，勇于探索',
    reversed: '计划受挫，优柔寡断，恐惧未知，原地踏步'
  },
  {
    id: 24, type: 'minor', suit: 'wands', number: 3,
    name_en: 'Three of Wands', name_zh: '权杖三',
    symbol: '🔥', element: '火', planet: '太阳', planet_symbol: '☉', zodiac: '牡羊座', zodiac_symbol: '♈', numerology: 3,
    upright: '扩张成长，等待收获，探索远方，事业进展，预见未来',
    reversed: '延误挫折，退路受阻，计划落空，回头重来'
  },
  {
    id: 25, type: 'minor', suit: 'wands', number: 4,
    name_en: 'Four of Wands', name_zh: '权杖四',
    symbol: '🔥', element: '火', planet: '金星', planet_symbol: '♀', zodiac: '牡羊座', zodiac_symbol: '♈', numerology: 4,
    upright: '庆祝与喜悦，家庭和谐，阶段性成功，稳定的基础，共同庆典',
    reversed: '不稳定，家庭矛盾，成就感缺失，过渡期动荡'
  },
  {
    id: 26, type: 'minor', suit: 'wands', number: 5,
    name_en: 'Five of Wands', name_zh: '权杖五',
    symbol: '🔥', element: '火', planet: '土星', planet_symbol: '♄', zodiac: '狮子座', zodiac_symbol: '♌', numerology: 5,
    upright: '竞争与冲突，挑战激励成长，不同意见碰撞，活跃的争论',
    reversed: '回避冲突，压抑愤怒，寻求和解，内部分歧'
  },
  {
    id: 27, type: 'minor', suit: 'wands', number: 6,
    name_en: 'Six of Wands', name_zh: '权杖六',
    symbol: '🔥', element: '火', planet: '木星', planet_symbol: '♃', zodiac: '狮子座', zodiac_symbol: '♌', numerology: 6,
    upright: '公众认可，胜利归来，领导力认可，自信展示，成功被看见',
    reversed: '缺乏认可，自我怀疑，失去领导地位，暂时的失败'
  },
  {
    id: 28, type: 'minor', suit: 'wands', number: 7,
    name_en: 'Seven of Wands', name_zh: '权杖七',
    symbol: '🔥', element: '火', planet: '火星', planet_symbol: '♂', zodiac: '狮子座', zodiac_symbol: '♌', numerology: 7,
    upright: '坚守立场，勇敢应对挑战，维护信念，持续努力，不屈不挠',
    reversed: '不堪重负，放弃防守，妥协退让，身心俱疲'
  },
  {
    id: 29, type: 'minor', suit: 'wands', number: 8,
    name_en: 'Eight of Wands', name_zh: '权杖八',
    symbol: '🔥', element: '火', planet: '水星', planet_symbol: '☿', zodiac: '射手座', zodiac_symbol: '♐', numerology: 8,
    upright: '速度与行动，快速进展，旅行远方，信息流通，事态急转',
    reversed: '延误阻碍，沟通受阻，行动仓促，节奏混乱'
  },
  {
    id: 30, type: 'minor', suit: 'wands', number: 9,
    name_en: 'Nine of Wands', name_zh: '权杖九',
    symbol: '🔥', element: '火', planet: '月亮', planet_symbol: '☽', zodiac: '射手座', zodiac_symbol: '♐', numerology: 9,
    upright: '坚韧与毅力，最后防线，历经磨砺，保持警惕，胜利在望',
    reversed: '偏执多疑，缺乏信任，精疲力竭，固守过去的创伤'
  },
  {
    id: 31, type: 'minor', suit: 'wands', number: 10,
    name_en: 'Ten of Wands', name_zh: '权杖十',
    symbol: '🔥', element: '火', planet: '土星', planet_symbol: '♄', zodiac: '射手座', zodiac_symbol: '♐', numerology: 10,
    upright: '负担过重，责任沉重，压力巨大，坚持到底，承担过多',
    reversed: '放下重担，学会委派，减轻压力，解脱束缚'
  },
  {
    id: 32, type: 'minor', suit: 'wands', number: 11,
    name_en: 'Page of Wands', name_zh: '权杖侍从',
    symbol: '🔥', element: '火', planet: '—', planet_symbol: '—', zodiac: '火象星座', zodiac_symbol: '♈♌♐', numerology: 11,
    upright: '热情探索，创意冒险，消息来临，充满好奇，勇于尝试',
    reversed: '缺乏方向，草率行事，创意受阻，过于冲动'
  },
  {
    id: 33, type: 'minor', suit: 'wands', number: 12,
    name_en: 'Knight of Wands', name_zh: '权杖骑士',
    symbol: '🔥', element: '火', planet: '—', planet_symbol: '—', zodiac: '射手座', zodiac_symbol: '♐', numerology: 12,
    upright: '激情冲劲，冒险精神，充满活力，行动迅速，追求刺激',
    reversed: '鲁莽冲动，缺乏耐心，虎头蛇尾，傲慢自大'
  },
  {
    id: 34, type: 'minor', suit: 'wands', number: 13,
    name_en: 'Queen of Wands', name_zh: '权杖王后',
    symbol: '🔥', element: '火', planet: '—', planet_symbol: '—', zodiac: '牡羊座', zodiac_symbol: '♈', numerology: 13,
    upright: '自信魅力，决断力强，外向热情，激励他人，独立自主',
    reversed: '支配欲强，嫉妒心重，情绪不稳，缺乏自信'
  },
  {
    id: 35, type: 'minor', suit: 'wands', number: 14,
    name_en: 'King of Wands', name_zh: '权杖国王',
    symbol: '🔥', element: '火', planet: '—', planet_symbol: '—', zodiac: '狮子座', zodiac_symbol: '♌', numerology: 14,
    upright: '远见卓识，激励领导，企业家精神，充满热情，果断执行',
    reversed: '独裁专制，控制欲强，傲慢无礼，冲动决策'
  },

  // ═══════════════════════════════════════
  // 圣杯 Cups (水 · 情感·关系·直觉)
  // ═══════════════════════════════════════
  {
    id: 36, type: 'minor', suit: 'cups', number: 1,
    name_en: 'Ace of Cups', name_zh: '圣杯王牌',
    symbol: '💧', element: '水', planet: '—', planet_symbol: '—', zodiac: '水象星座', zodiac_symbol: '♋♏♓', numerology: 1,
    upright: '新的爱情，情感觉醒，同情与慈悲，内心的喜悦，精神的丰盛',
    reversed: '情感封闭，压抑情绪，爱意受阻，内心空洞'
  },
  {
    id: 37, type: 'minor', suit: 'cups', number: 2,
    name_en: 'Two of Cups', name_zh: '圣杯二',
    symbol: '💧', element: '水', planet: '金星', planet_symbol: '♀', zodiac: '巨蟹座', zodiac_symbol: '♋', numerology: 2,
    upright: '相互吸引，伴侣关系，合作共赢，灵魂共鸣，情感契约',
    reversed: '关系不和，分离破裂，信任危机，单方面付出'
  },
  {
    id: 38, type: 'minor', suit: 'cups', number: 3,
    name_en: 'Three of Cups', name_zh: '圣杯三',
    symbol: '💧', element: '水', planet: '水星', planet_symbol: '☿', zodiac: '巨蟹座', zodiac_symbol: '♋', numerology: 3,
    upright: '庆祝友谊，社群欢聚，共同喜悦，丰收庆典，女性友情',
    reversed: '过度放纵，三角关系，友情疏远，肤浅社交'
  },
  {
    id: 39, type: 'minor', suit: 'cups', number: 4,
    name_en: 'Four of Cups', name_zh: '圣杯四',
    symbol: '💧', element: '水', planet: '月亮', planet_symbol: '☽', zodiac: '巨蟹座', zodiac_symbol: '♋', numerology: 4,
    upright: '冥想沉思，忽视机会，内省反思，情感冷漠，寻找更深意义',
    reversed: '新的觉察，重新投入，接受帮助，走出冷漠'
  },
  {
    id: 40, type: 'minor', suit: 'cups', number: 5,
    name_en: 'Five of Cups', name_zh: '圣杯五',
    symbol: '💧', element: '水', planet: '火星', planet_symbol: '♂', zodiac: '天蝎座', zodiac_symbol: '♏', numerology: 5,
    upright: '失落与悲伤，后悔遗憾，专注于失去，忽视剩余的美好',
    reversed: '放下悲伤，重新振作，接受失去，向前看'
  },
  {
    id: 41, type: 'minor', suit: 'cups', number: 6,
    name_en: 'Six of Cups', name_zh: '圣杯六',
    symbol: '💧', element: '水', planet: '太阳', planet_symbol: '☉', zodiac: '天蝎座', zodiac_symbol: '♏', numerology: 6,
    upright: '童年记忆，怀旧情怀，无私给予，纯真善良，过去的馈赠',
    reversed: '活在过去，拒绝长大，天真被利用，放不下旧日'
  },
  {
    id: 42, type: 'minor', suit: 'cups', number: 7,
    name_en: 'Seven of Cups', name_zh: '圣杯七',
    symbol: '💧', element: '水', planet: '金星', planet_symbol: '♀', zodiac: '天蝎座', zodiac_symbol: '♏', numerology: 7,
    upright: '幻想与选择，白日梦，丰富想象，选择困难，迷失在可能性中',
    reversed: '面对现实，做出决定，看清幻觉，专注目标'
  },
  {
    id: 43, type: 'minor', suit: 'cups', number: 8,
    name_en: 'Eight of Cups', name_zh: '圣杯八',
    symbol: '💧', element: '水', planet: '土星', planet_symbol: '♄', zodiac: '双鱼座', zodiac_symbol: '♓', numerology: 8,
    upright: '离开过去，追寻更深意义，放弃舒适，精神探索，勇于放手',
    reversed: '逃避而非探索，害怕孤独，留恋不舍，茫然彷徨'
  },
  {
    id: 44, type: 'minor', suit: 'cups', number: 9,
    name_en: 'Nine of Cups', name_zh: '圣杯九',
    symbol: '💧', element: '水', planet: '木星', planet_symbol: '♃', zodiac: '双鱼座', zodiac_symbol: '♓', numerology: 9,
    upright: '心愿达成，满足感，内心充盈，享受成果，情感丰盛',
    reversed: '物质主义，过度放纵，不知满足，虚假满足'
  },
  {
    id: 45, type: 'minor', suit: 'cups', number: 10,
    name_en: 'Ten of Cups', name_zh: '圣杯十',
    symbol: '💧', element: '水', planet: '火星', planet_symbol: '♂', zodiac: '双鱼座', zodiac_symbol: '♓', numerology: 10,
    upright: '家庭幸福，情感圆满，美好的人际关系，长久的和谐，理想生活',
    reversed: '家庭不和，不切实际，幸福表象下的裂痕'
  },
  {
    id: 46, type: 'minor', suit: 'cups', number: 11,
    name_en: 'Page of Cups', name_zh: '圣杯侍从',
    symbol: '💧', element: '水', planet: '—', planet_symbol: '—', zodiac: '水象星座', zodiac_symbol: '♋♏♓', numerology: 11,
    upright: '创意直觉，梦想萌芽，情感好奇，艺术天赋，内心的声音',
    reversed: '情感不成熟，多愁善感，脱离现实，创意受阻'
  },
  {
    id: 47, type: 'minor', suit: 'cups', number: 12,
    name_en: 'Knight of Cups', name_zh: '圣杯骑士',
    symbol: '💧', element: '水', planet: '—', planet_symbol: '—', zodiac: '双鱼座', zodiac_symbol: '♓', numerology: 12,
    upright: '浪漫追求，魅力十足，追逐理想，诗意情怀，情感驱动',
    reversed: '情绪化冲动，幻想主义，虚伪欺骗，优柔寡断'
  },
  {
    id: 48, type: 'minor', suit: 'cups', number: 13,
    name_en: 'Queen of Cups', name_zh: '圣杯王后',
    symbol: '💧', element: '水', planet: '—', planet_symbol: '—', zodiac: '巨蟹座', zodiac_symbol: '♋', numerology: 13,
    upright: '同情关怀，情感成熟，高度直觉，滋养包容，情感智慧',
    reversed: '情绪操控，不安全感，过度敏感，自我欺骗'
  },
  {
    id: 49, type: 'minor', suit: 'cups', number: 14,
    name_en: 'King of Cups', name_zh: '圣杯国王',
    symbol: '💧', element: '水', planet: '—', planet_symbol: '—', zodiac: '天蝎座', zodiac_symbol: '♏', numerology: 14,
    upright: '情感平衡，智慧同情，外交手腕，稳定内心，成熟领导',
    reversed: '情绪操控，冷漠疏离，情感压抑，双重人格'
  },

  // ═══════════════════════════════════════
  // 宝剑 Swords (风 · 思想·冲突·决断)
  // ═══════════════════════════════════════
  {
    id: 50, type: 'minor', suit: 'swords', number: 1,
    name_en: 'Ace of Swords', name_zh: '宝剑王牌',
    symbol: '🌬', element: '风', planet: '—', planet_symbol: '—', zodiac: '风象星座', zodiac_symbol: '♊♎♒', numerology: 1,
    upright: '真相与清晰，思维突破，新的认知，正义之剑，智识力量',
    reversed: '思维混乱，错误信息，残酷的真相，语言伤害'
  },
  {
    id: 51, type: 'minor', suit: 'swords', number: 2,
    name_en: 'Two of Swords', name_zh: '宝剑二',
    symbol: '🌬', element: '风', planet: '月亮', planet_symbol: '☽', zodiac: '天秤座', zodiac_symbol: '♎', numerology: 2,
    upright: '平衡对立，难以抉择，封闭心扉，休战协议，暂时的平静',
    reversed: '信息超载，进退两难，虚假的和平，逃避抉择'
  },
  {
    id: 52, type: 'minor', suit: 'swords', number: 3,
    name_en: 'Three of Swords', name_zh: '宝剑三',
    symbol: '🌬', element: '风', planet: '土星', planet_symbol: '♄', zodiac: '天秤座', zodiac_symbol: '♎', numerology: 3,
    upright: '心碎痛苦，悲伤失落，分离创伤，需要面对的痛苦',
    reversed: '放下痛苦，伤口愈合，原谅宽恕，走出阴影'
  },
  {
    id: 53, type: 'minor', suit: 'swords', number: 4,
    name_en: 'Four of Swords', name_zh: '宝剑四',
    symbol: '🌬', element: '风', planet: '木星', planet_symbol: '♃', zodiac: '天秤座', zodiac_symbol: '♎', numerology: 4,
    upright: '休养生息，内心沉静，恢复力量，冥想反思，暂时退守',
    reversed: '静止不动，恢复受阻，强迫休息，内心动荡'
  },
  {
    id: 54, type: 'minor', suit: 'swords', number: 5,
    name_en: 'Five of Swords', name_zh: '宝剑五',
    symbol: '🌬', element: '风', planet: '金星', planet_symbol: '♀', zodiac: '水瓶座', zodiac_symbol: '♒', numerology: 5,
    upright: '冲突失败，不道德的胜利，代价惨重的争斗，伤痛与损失',
    reversed: '和解与修复，放下敌意，走向和平，过去的伤害'
  },
  {
    id: 55, type: 'minor', suit: 'swords', number: 6,
    name_en: 'Six of Swords', name_zh: '宝剑六',
    symbol: '🌬', element: '风', planet: '水星', planet_symbol: '☿', zodiac: '水瓶座', zodiac_symbol: '♒', numerology: 6,
    upright: '过渡转变，离开困境，寻求平静，渡过难关，前往新地方',
    reversed: '阻力重重，无法逃离，强行留守，过渡困难'
  },
  {
    id: 56, type: 'minor', suit: 'swords', number: 7,
    name_en: 'Seven of Swords', name_zh: '宝剑七',
    symbol: '🌬', element: '风', planet: '月亮', planet_symbol: '☽', zodiac: '水瓶座', zodiac_symbol: '♒', numerology: 7,
    upright: '策略欺骗，独自行动，聪明变通，避免正面冲突，保存实力',
    reversed: '阴谋败露，良心发现，被迫坦白，自欺欺人'
  },
  {
    id: 57, type: 'minor', suit: 'swords', number: 8,
    name_en: 'Eight of Swords', name_zh: '宝剑八',
    symbol: '🌬', element: '风', planet: '木星', planet_symbol: '♃', zodiac: '双子座', zodiac_symbol: '♊', numerology: 8,
    upright: '自我限制，受困束缚，思维囚笼，无力感，自我加的枷锁',
    reversed: '解脱束缚，重获自由，突破思维限制，看清真相'
  },
  {
    id: 58, type: 'minor', suit: 'swords', number: 9,
    name_en: 'Nine of Swords', name_zh: '宝剑九',
    symbol: '🌬', element: '风', planet: '火星', planet_symbol: '♂', zodiac: '双子座', zodiac_symbol: '♊', numerology: 9,
    upright: '焦虑噩梦，深夜恐惧，内心痛苦，自责自咎，无休止的担忧',
    reversed: '摆脱恐惧，面对问题，寻求帮助，内心平静'
  },
  {
    id: 59, type: 'minor', suit: 'swords', number: 10,
    name_en: 'Ten of Swords', name_zh: '宝剑十',
    symbol: '🌬', element: '风', planet: '太阳', planet_symbol: '☉', zodiac: '双子座', zodiac_symbol: '♊', numerology: 10,
    upright: '彻底终结，背叛创伤，跌入谷底，旧时代画上句号',
    reversed: '从谷底回升，新生机，拒绝接受结局，垂死挣扎'
  },
  {
    id: 60, type: 'minor', suit: 'swords', number: 11,
    name_en: 'Page of Swords', name_zh: '宝剑侍从',
    symbol: '🌬', element: '风', planet: '—', planet_symbol: '—', zodiac: '风象星座', zodiac_symbol: '♊♎♒', numerology: 11,
    upright: '好奇机智，言辞敏锐，寻求真相，警觉观察，思维活跃',
    reversed: '言语伤人，散布谣言，三心二意，冲动莽撞'
  },
  {
    id: 61, type: 'minor', suit: 'swords', number: 12,
    name_en: 'Knight of Swords', name_zh: '宝剑骑士',
    symbol: '🌬', element: '风', planet: '—', planet_symbol: '—', zodiac: '双子座', zodiac_symbol: '♊', numerology: 12,
    upright: '雄心勃勃，果断行动，思维快速，追求真相，充满斗志',
    reversed: '鲁莽冲动，挑衅争斗，思虑不周，言行过激'
  },
  {
    id: 62, type: 'minor', suit: 'swords', number: 13,
    name_en: 'Queen of Swords', name_zh: '宝剑王后',
    symbol: '🌬', element: '风', planet: '—', planet_symbol: '—', zodiac: '天秤座', zodiac_symbol: '♎', numerology: 13,
    upright: '独立冷静，洞察力强，直言不讳，经历过痛苦的智慧',
    reversed: '苦涩刻薄，冷酷无情，过于依赖他人，情绪操控'
  },
  {
    id: 63, type: 'minor', suit: 'swords', number: 14,
    name_en: 'King of Swords', name_zh: '宝剑国王',
    symbol: '🌬', element: '风', planet: '—', planet_symbol: '—', zodiac: '水瓶座', zodiac_symbol: '♒', numerology: 14,
    upright: '智识权威，逻辑清晰，公正判断，理性决策，思想领袖',
    reversed: '专制操控，冷酷无情，滥用权威，思维偏激'
  },

  // ═══════════════════════════════════════
  // 星币 Pentacles (土 · 物质·工作·身体)
  // ═══════════════════════════════════════
  {
    id: 64, type: 'minor', suit: 'pentacles', number: 1,
    name_en: 'Ace of Pentacles', name_zh: '星币王牌',
    symbol: '⭐', element: '土', planet: '—', planet_symbol: '—', zodiac: '土象星座', zodiac_symbol: '♉♍♑', numerology: 1,
    upright: '新的财务机会，物质繁荣，实际投资，新事业开端，丰盛显化',
    reversed: '错失良机，财务不稳，过度物质，计划失败'
  },
  {
    id: 65, type: 'minor', suit: 'pentacles', number: 2,
    name_en: 'Two of Pentacles', name_zh: '星币二',
    symbol: '⭐', element: '土', planet: '木星', planet_symbol: '♃', zodiac: '摩羯座', zodiac_symbol: '♑', numerology: 2,
    upright: '平衡资源，适应性强，时间管理，在变化中灵活应对',
    reversed: '财务失衡，分身乏术，顾此失彼，应接不暇'
  },
  {
    id: 66, type: 'minor', suit: 'pentacles', number: 3,
    name_en: 'Three of Pentacles', name_zh: '星币三',
    symbol: '⭐', element: '土', planet: '火星', planet_symbol: '♂', zodiac: '摩羯座', zodiac_symbol: '♑', numerology: 3,
    upright: '协作共创，技艺精湛，工作质量，团队合作，得到认可',
    reversed: '工作不和谐，技能不足，缺乏合作，质量低劣'
  },
  {
    id: 67, type: 'minor', suit: 'pentacles', number: 4,
    name_en: 'Four of Pentacles', name_zh: '星币四',
    symbol: '⭐', element: '土', planet: '太阳', planet_symbol: '☉', zodiac: '摩羯座', zodiac_symbol: '♑', numerology: 4,
    upright: '物质安全感，谨慎保守，掌控资源，稳健理财，节俭积累',
    reversed: '吝啬贪婪，固执守旧，害怕失去，过度控制'
  },
  {
    id: 68, type: 'minor', suit: 'pentacles', number: 5,
    name_en: 'Five of Pentacles', name_zh: '星币五',
    symbol: '⭐', element: '土', planet: '水星', planet_symbol: '☿', zodiac: '金牛座', zodiac_symbol: '♉', numerology: 5,
    upright: '经济困难，失业窘迫，精神匮乏，逆境中坚持，寻求帮助',
    reversed: '困境好转，获得援助，重建信心，走出贫困'
  },
  {
    id: 69, type: 'minor', suit: 'pentacles', number: 6,
    name_en: 'Six of Pentacles', name_zh: '星币六',
    symbol: '⭐', element: '土', planet: '月亮', planet_symbol: '☽', zodiac: '金牛座', zodiac_symbol: '♉', numerology: 6,
    upright: '给予与接受，慷慨施予，平衡分享，财富流通，善意循环',
    reversed: '附条件给予，债务纠纷，慷慨的代价，权力失衡'
  },
  {
    id: 70, type: 'minor', suit: 'pentacles', number: 7,
    name_en: 'Seven of Pentacles', name_zh: '星币七',
    symbol: '⭐', element: '土', planet: '土星', planet_symbol: '♄', zodiac: '金牛座', zodiac_symbol: '♉', numerology: 7,
    upright: '耐心评估，长期投资，等待收获，审视成果，持续努力',
    reversed: '回报不满意，缺乏耐心，放弃太早，投入过多收获少'
  },
  {
    id: 71, type: 'minor', suit: 'pentacles', number: 8,
    name_en: 'Eight of Pentacles', name_zh: '星币八',
    symbol: '⭐', element: '土', planet: '太阳', planet_symbol: '☉', zodiac: '处女座', zodiac_symbol: '♍', numerology: 8,
    upright: '勤奋专注，技艺精进，工匠精神，持续学习，专业成长',
    reversed: '完美主义困扰，无目标勤奋，重复无进步'
  },
  {
    id: 72, type: 'minor', suit: 'pentacles', number: 9,
    name_en: 'Nine of Pentacles', name_zh: '星币九',
    symbol: '⭐', element: '土', planet: '金星', planet_symbol: '♀', zodiac: '处女座', zodiac_symbol: '♍', numerology: 9,
    upright: '自给自足，物质舒适，独立成就，优雅生活，享受劳动成果',
    reversed: '过度劳累，虚假繁荣，依赖他人，物质虚空'
  },
  {
    id: 73, type: 'minor', suit: 'pentacles', number: 10,
    name_en: 'Ten of Pentacles', name_zh: '星币十',
    symbol: '⭐', element: '土', planet: '水星', planet_symbol: '☿', zodiac: '处女座', zodiac_symbol: '♍', numerology: 10,
    upright: '财富传承，家族稳定，长期成功，物质丰盛，世代积累',
    reversed: '家族矛盾，遗产纠纷，根基不稳，财富损失'
  },
  {
    id: 74, type: 'minor', suit: 'pentacles', number: 11,
    name_en: 'Page of Pentacles', name_zh: '星币侍从',
    symbol: '⭐', element: '土', planet: '—', planet_symbol: '—', zodiac: '土象星座', zodiac_symbol: '♉♍♑', numerology: 11,
    upright: '实际机会，努力学习，新技能探索，脚踏实地，财务意识觉醒',
    reversed: '缺乏计划，好高骛远，消极怠工，浮于表面'
  },
  {
    id: 75, type: 'minor', suit: 'pentacles', number: 12,
    name_en: 'Knight of Pentacles', name_zh: '星币骑士',
    symbol: '⭐', element: '土', planet: '—', planet_symbol: '—', zodiac: '处女座', zodiac_symbol: '♍', numerology: 12,
    upright: '可靠稳重，勤奋踏实，有条不紊，坚持到底，值得信赖',
    reversed: '过于谨慎，停滞守旧，缺乏冒险，固执无趣'
  },
  {
    id: 76, type: 'minor', suit: 'pentacles', number: 13,
    name_en: 'Queen of Pentacles', name_zh: '星币王后',
    symbol: '⭐', element: '土', planet: '—', planet_symbol: '—', zodiac: '摩羯座', zodiac_symbol: '♑', numerology: 13,
    upright: '务实养育，财富管理，照顾家园，脚踏实地，丰盛慷慨',
    reversed: '过度关注物质，工作与生活失衡，嫉妒心，吝啬'
  },
  {
    id: 77, type: 'minor', suit: 'pentacles', number: 14,
    name_en: 'King of Pentacles', name_zh: '星币国王',
    symbol: '⭐', element: '土', planet: '—', planet_symbol: '—', zodiac: '金牛座', zodiac_symbol: '♉', numerology: 14,
    upright: '财富领袖，商业头脑，物质成功，稳健可靠，慷慨大方',
    reversed: '贪婪守财，物质主义，腐败堕落，过度追求安全感'
  }
]

// 方便查找的辅助函数
function getCardById(id) {
  return CARDS.find(c => c.id === id)
}

function getMajorCards() {
  return CARDS.filter(c => c.type === 'major')
}

function getCardsBysuit(suit) {
  return CARDS.filter(c => c.suit === suit)
}
