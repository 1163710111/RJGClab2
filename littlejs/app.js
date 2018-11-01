//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    
  },
  globalData: {
    userInfo: null,
    questions: [
    {"question": "../../images/timu.png","option": {"A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number":"4" } ,
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
      { "question": "../../images/timu.png", "option": { "A": "../../images/A.png", "B": "../../images/B.png", "C": "../../images/C.png", "D": "../../images/D.png" }, "true": "A", "number": "4" },
    ]
  } 
})