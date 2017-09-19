var productsData=[
  //第一个产品介绍
  { title:"SIRING® 固体绝缘开关模块",
	introduce:"SIRING®系列产品是由我公司和欧洲开关技术专家合作开发的新型固体绝缘开关模块。产品一次回路全部封闭于固体绝缘材料内，且绝缘材料表面连续可靠接地，长期运行更稳定和安全。SIRING®系列产品是各项性能均满足国家电网固体绝缘开关设备标准（DL/T 1586-2016）的顶尖产品。",
	sections:[
	  {
	  	head:"通用",
        para:["严格按照GB/DL以及IEC标准要求设计。"]
	  },
	  {
	  	head:"安全",
        para:["固封绝缘模块表面涂覆导电屏蔽层，并可靠接地。",
           "三相隔离接地断口清晰可见。",
           "高压零件全绝缘密封。可在水下1米正常运行。"
          ]
	  },
	  {
	  	head:"稳定",
        para:["经过电场计算优化，1.2倍额定电压局部放电量小于5pC。",
           "低电势陷阱，确保产品内部沿面不受操作污秽影响。"]
	  },
	  {
	  	head:"紧凑",
        para:["分相设计，三相绝缘模块装配最小宽度为356mm。"]
	  },	 
	],
	imgs:[
	  {
	  	imgH:"SIRING® 固体绝缘开关模块",
	  	imgAddr:"./img/product1.png"
	  },
	   {
	  	imgH:"SIRING® 固体绝缘环网柜单元",
	  	imgAddr:"./img/product2.png"
	  }
	]
  },

  //第二个产品介绍
  { title:"SIRING®固体绝缘开关单元",
	introduce:"SIRING®系列固体绝缘开关模块配合可靠、通用、模块化的断路器弹簧操作机构及三工位操作机构，构成SIRING®系列固体绝缘开关单元。操作机构是通过型式实验，成熟可靠，并具有多年运行经验的产品，各项技术参数均达到规范要求，符合电力行业及电网标准。",
	sections:[
	  {
	  	head:"可靠、通用的操作机构",
        para:["可靠的断路器+三工位操作机构，通过断路器机构10000次/三工位机构5000次寿命实验。"]
	  },
	  {
	  	head:"整体吊装，方便装配、维护",
        para:["固体绝缘模块与机构出厂预装配好，通过整体吊装入柜体中，方便装配，维护。",
          ]
	  },
	  {
	  	head:"支持多种操作方式",
        para:["可实现断路器机构手动+电动，三工位机构手动+电动操作方式，方便实现电网自动化。",]
	  }, 
	],
	imgs:[
	  {
	  	imgH:"SIRING® 固体绝缘开关单元",
	  	imgAddr:"./img/product3.png"
	  },
	   {
	  	imgH:"SIRING® 固体绝缘环网柜单元",
	  	imgAddr:"./img/product4.png"
	  }
	]
  },
  //第三个产品介绍
  { title:"SEER全屏蔽接地固体绝缘金属封闭开关设备",
	introduce:"SEER全屏蔽接地固体绝缘金属封闭开关设备采用SIRING®固体绝缘开关单元，配合其余标准电气元件，形成紧凑型固体绝缘金属封闭开关设备。其功能完善、柜型方案丰富、符合IEC及GB/DL标准、性能处于行业领先水平，可应用于电网、工业、公用事业、建筑等各领域。",
	sections:[
	  {
	  	head:"紧凑的结构",
        para:["12kV-630A标准柜宽400mm；",
              "12kV-1250A标准柜宽500mm；",
              "极大节省配电室安装空间。"]
	  },
	  {
	  	head:"根据最新IEC和GB/DL标准设计柜型，通过严格的型式试验和内部故障电弧等试验",
        para:["",
          ]
	  },
	  {
	  	head:"完善的机械、电气“五防”系统",
        para:["完善，可靠的本柜机械、电气“五防”系统，保证柜体操作安全。",]
	  }, 
	  {
	  	head:"便捷的并柜方式，方便扩容",
        para:["插接式母线用于柜间母线连接，便于系统扩容。",]
	  }, 
	],
	imgs:[
	  {
	  	imgH:"SEER全屏蔽接地固体绝缘开关设备",
	  	imgAddr:"./img/product5.png"
	  },
	   {
	  	imgH:"SEER全屏蔽接地固体绝缘环网柜",
	  	imgAddr:"./img/product6.png"
	  }
	]
  }
];

var productsTable =[
  //第一个表格
  {title:"技术参数",
   tableAddr:[
   "./img/table1.png"]
  },
  //第二个表格
  {title:"标准方案",
   tableAddr:[
   "./img/table2.png","./img/table3.png","./img/table4.png"]
  },
  //第三个表格
  {title:"组合应用方案示例",
   tableAddr:[
   "./img/table5.png"]
  },

];

var dtuData =[{
	title:"测量、保护与配网自动化(DTU)",
	introduce:"SEER系列固体绝缘金属封闭开关设备可根据客户或项目需求配置监控、保护与配网自动化终端单元，利用通讯将各开关设备与上级调度中心连接，配合开关设备电动操作功能，实现配电系统综合自动化。配网自动化使调度运行人员足不出户地掌握整个配网的运行数据，包括测量、监视、保护和控制。当发生故障时能迅速实现故障定位，自动或人为的实现故障的隔离和网络的重构，大大缩短停电面积和时间，减少故障损失。典型配网自动化系统架构如下图。",
	imageAddr: "./img/DTU.png",
}]

var dimData =[{
	title:"产品尺寸与地基图",
	detil:[{
		head:"A、SIRING®模块尺寸图",
		imagAddr1:"./img/dim1.png",
		imagAddr2:"./img/dim2.png",
	},
    {
		head:"B、固体绝缘开关设备开孔参考图",
		imagAddr1:"./img/dim3.png",
		imagAddr2:"./img/dim4.png",
	},
	{
		head:"C、固体绝缘环网柜参考尺寸图",
		imagAddr1:"./img/dim5.png",
		imagAddr2:"./img/dim6.png",
	},
  
	]
}]

