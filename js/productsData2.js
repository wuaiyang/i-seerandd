var products={}
//固体柜
var productsData1=[
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

var productsTable1 =[
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

var dtuData1 =[{
	title:"测量、保护与配网自动化(DTU)",
	introduce:"SEER系列固体绝缘金属封闭开关设备可根据客户或项目需求配置监控、保护与配网自动化终端单元，利用通讯将各开关设备与上级调度中心连接，配合开关设备电动操作功能，实现配电系统综合自动化。配网自动化使调度运行人员足不出户地掌握整个配网的运行数据，包括测量、监视、保护和控制。当发生故障时能迅速实现故障定位，自动或人为的实现故障的隔离和网络的重构，大大缩短停电面积和时间，减少故障损失。典型配网自动化系统架构如下图。",
	imageAddr: "./img/DTU.png",
}]

var dimData1 =[{
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

//
var productsData2=[
  //第一个产品介绍
  { title:"OVB 智能户外真空断路器",
	introduce:"OVB智能户外真空断路器是爱启响应国网一二次融合相关文件推出的集成电压、电流传感器，环氧树脂固体绝缘，并将信号完全屏蔽输出至控制终端，单稳态永磁操作机构，具备手动合闸、手动分闸功能的一种户外智能开关。OVB系列户外开关推出以来受到海内外客户广泛关注，备受世界范围内广大用户一致好评。",
	sections:[
	  {
	  	head:"",
        para:["集成电压、电流传感器，0.5级测量精度；"]
	  },
	  {
	  	head:"",
        para:["APG整体浇注，绝缘性能高，局放低；"]
	  },
	  {
	  	head:"",
        para:["进口户外高憎水性环氧树脂，抗老化，抗紫外线能力强；"]
	  },
	  {
	  	head:"",
        para:["兼容性强（灭弧室参数、电压、电流二次参数可选），接口标准通用设计，安装连接方便、可靠；"]
	  },
	  {
	  	head:"",
        para:["满足重合器要求；"]
	  },
	  {
	  	head:"",
        para:["永磁机构+可选弹簧机构，提供可靠常规操作及手动操作；"]
	  },
	  {
	  	head:"",
        para:["铸铝一体化机箱，IP67防护等级，免维护；"]
	  },	 
	],
	imgs:[
	  {
	  	imgH:"",
	  	imgAddr:"./img/product2-1.png"
	  },
	   {
	  	imgH:"",
	  	imgAddr:"./img/product2-2.png"
	  }
	]
  },

  //第二个产品介绍
  { title:"智能户外控制器单元",
	introduce:"CFT-380系列配电自动化馈线终端是按照国家电网一二次融合技术要求，开发研制的新一代FTU终端设备。该系列终端具备电压时间型等就地馈线自动化功能，具备相间短路故障保护和接地故障保护跳闸功能，和三相自动重合闸功能。CFT-380系列FTU终端在传统配网自动化馈线终端常规保护控制功能和通信功能基础上，扩展故障时刻暂态录波功能，针对当前国内配网供电系统主要的运行模式和接地方式，自适应识别各种情况下发生的单相接地故障和短路故障，很好的解决了配网线路单相接地故障识别和故障选线的难题，其可用于各类接线方式电网中分段、分界断路器\\负荷开关中，实现配网自动化功能，提高供电可靠性和用电安全。",
	sections:[
	  {
	  	head:"遥测",
        para:["终端能够采集并计算Uab、Ubc、Uo、Ia、Ib、Ic、Io、总有功功率、总无功功率、总视在功率、功率因数、频率、蓄电池电压等遥测量，所有遥测数据按点表和通信协议要求分级上送。"]
	  },
	  {
	  	head:"遥信",
        para:["终端能够采集并监视回线开关位置、储能状态等状态量信息，采集终端电源管理的状态信息；记录遥信变位事件，具有事件顺序记录（SOE）功能。",]
	  },
	  {
	  	head:"遥控功能",
        para:["终端对外提供1个回路开关的分、合闸控制，操作人员就地通过密码进入液晶显示器界面按指示操作，终端也可接受并执行来自主站或子站的遥控命令。",]
	  }, 
	  {
	  	head:"保护功能",
        para:["三相过流保护","零序过流保护","重合闸功能","过负荷保护","PT断线检测","防涌流保护","故障录波"]
	  },
	  {
	  	head:"可调整、智能故障自适应判别与清除功能",
        para:["终端针对配网不同的故障类型，可使用基于电压-时间、可调整的判据逻辑功能，智能的进行跳闸、合闸、闭锁操作，以使设备能在发生暂时性故障时清除故障，永久性故障时隔离故障。"]
	  },
	],
	imgs:[
	  {
	  	imgH:"",
	  	imgAddr:"./img/product2-3.png"
	  },
	]
  },
  
];

var productsTable2 =[
  //第一个表格
  {title:"断路器技术参数",
   tableAddr:[
   "./img/table2-1.png"]
  },

];

products.product1={
	title:"固体柜",
	productsData:productsData1,
	productsTable:productsTable1,
	dtuData:dtuData1,
    dimData:dimData1,
}

products.product2={
	title:"柱上开关",
	productsData:productsData2,
	productsTable:productsTable2,
}

var pTab = [products.product1,products.product2]


