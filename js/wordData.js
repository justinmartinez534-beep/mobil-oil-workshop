const WordRoots = [
  {
    id: 1,
    root: "美孚1号 (Mobil 1)",
    origin: "全合成机油",
    meaning: "美孚旗舰全合成机油，采用先进合成技术，提供卓越保护",
    description: "美孚1号是美孚石油公司的旗舰产品系列，采用100%全合成基础油和先进添加剂配方。它能够在极端温度条件下保持稳定的粘度，为发动机提供卓越的抗磨损保护、清洁性能和燃油经济性。",
    examples: [
      { word: "美孚1号 0W-40", meaning: "顶级全合成机油", explanation: "适用于高性能跑车和豪华车" },
      { word: "美孚1号 5W-30", meaning: "主流全合成机油", explanation: "适合大多数现代乘用车" },
      { word: "美孚1号 ESP", meaning: "环保型全合成机油", explanation: "保护三元催化器和颗粒捕集器" }
    ],
    quiz: { question: "美孚1号机油的主要优势是什么？", options: ["价格便宜", "全合成技术，极端温度保护", "颜色鲜艳", "气味芳香"], correctAnswer: 1 }
  },
  {
    id: 2,
    root: "粘度等级 (SAE)",
    origin: "技术标准",
    meaning: "美国汽车工程师学会制定的机油粘度分类标准",
    description: "SAE粘度等级是衡量机油流动性的标准。格式为'XW-XX'，W代表冬季，前面的数字越小表示低温流动性越好，后面的数字越大表示高温粘度越高。",
    examples: [
      { word: "0W-20", meaning: "超低粘度机油", explanation: "适用于新型节能发动机" },
      { word: "5W-30", meaning: "通用粘度机油", explanation: "最常用的粘度等级" },
      { word: "15W-40", meaning: "高粘度机油", explanation: "适用于老旧发动机" }
    ],
    quiz: { question: "机油标号 5W-30 中，'W' 代表什么？", options: ["重量", "冬季", "宽度", "功率"], correctAnswer: 1 }
  },
  {
    id: 3,
    root: "API 认证等级",
    origin: "行业标准",
    meaning: "美国石油学会制定的机油性能分类标准",
    description: "API认证是机油质量的重要指标。汽油发动机用'S'开头，柴油发动机用'C'开头。字母越靠后，代表性能等级越高。",
    examples: [
      { word: "API SP", meaning: "最新汽油机油标准", explanation: "2020年发布，针对涡轮增压直喷发动机" },
      { word: "API SN PLUS", meaning: "增强型汽油机油", explanation: "防止低速早燃造成的损害" },
      { word: "API CK-4", meaning: "最新柴油机油标准", explanation: "为现代低排放柴油发动机提供保护" }
    ],
    quiz: { question: "API SP 和 API SN 相比，哪个等级更高？", options: ["API SN", "API SP", "一样高", "无法比较"], correctAnswer: 1 }
  },
  {
    id: 4,
    root: "美孚速霸 (Mobil Super)",
    origin: "半合成/矿物机油",
    meaning: "美孚中端产品线，提供可靠的日常驾驶保护",
    description: "美孚速霸是美孚的中端机油系列，包括半合成和优质矿物油配方。适合日常通勤和经济型车辆，提供可靠的性价比。",
    examples: [
      { word: "美孚速霸2000", meaning: "半合成机油", explanation: "比矿物油提供更好的保护" },
      { word: "美孚速霸1000", meaning: "优质矿物机油", explanation: "经济实惠的选择" },
      { word: "美孚速霸全效保护", meaning: "增强型半合成机油", explanation: "针对城市拥堵路况设计" }
    ],
    quiz: { question: "美孚速霸系列主要面向什么需求？", options: ["赛车竞技", "日常驾驶，性价比", "航空发动机", "船舶动力"], correctAnswer: 1 }
  },
  {
    id: 5,
    root: "换油周期",
    origin: "保养知识",
    meaning: "建议的机油更换时间或里程间隔",
    description: "换油周期受机油类型、驾驶条件、车辆年龄等因素影响。全合成机油通常10000-15000公里，矿物油5000公里。",
    examples: [
      { word: "全合成机油", meaning: "10000-15000公里/1年", explanation: "抗氧化能力强，可延长换油周期" },
      { word: "半合成机油", meaning: "7500-10000公里/9个月", explanation: "换油周期介于全合成和矿物油之间" },
      { word: "恶劣工况", meaning: "缩短换油周期", explanation: "频繁短途、高温环境需提前更换" }
    ],
    quiz: { question: "全合成机油一般建议多久更换？", options: ["3000公里", "5000公里", "10000-15000公里", "50000公里"], correctAnswer: 2 }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WordRoots };
}
