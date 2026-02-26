const siteConfig = {
  topic: "美孚机油",
  siteName: "美孚机油知识工坊",
  itemName: "知识点",
  itemCount: 20,
  hero: {
    title: ["20个核心知识点", "全面掌握机油", "选购与保养"],
    subtitle: "从粘度等级到OEM认证，系统学习美孚机油产品知识与车辆保养要点",
    animation: { enabled: true, demoCount: 5 }
  },
  stats: [
    { value: "20", label: "核心知识点" },
    { value: "4", label: "产品系列" },
    { value: "100+", label: "应用场景" }
  ],
  footer: {
    tagline: "选对机油，守护发动机",
    description: "基于美孚机油产品体系，用20个核心知识点帮你全面理解机油选购、使用和保养。"
  },
  cta: {
    primary: "开始学习 →",
    secondary: "闪卡复习"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { siteConfig };
}
