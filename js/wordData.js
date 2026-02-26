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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WordRoots };
}
