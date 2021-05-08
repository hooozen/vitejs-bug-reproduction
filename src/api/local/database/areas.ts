const areas = [
  {
    id: "130102",
    fullname: "长安区",
    location: {
      lat: 38.03647,
      lng: 114.53952,
    },
  },
  {
    id: "130104",
    fullname: "桥西区",
    location: {
      lat: 38.00407,
      lng: 114.46104,
    },
  },
  {
    id: "130105",
    fullname: "新华区",
    location: {
      lat: 38.0509,
      lng: 114.46312,
    },
  },
  {
    id: "130107",
    fullname: "井陉矿区",
    location: {
      lat: 38.06499,
      lng: 114.0623,
    },
  },
  {
    id: "130108",
    fullname: "裕华区",
    location: {
      lat: 38.0061,
      lng: 114.53122,
    },
  },
  {
    id: "130109",
    fullname: "藁城区",
    location: {
      lat: 38.02166,
      lng: 114.84676,
    },
  },
  {
    id: "130110",
    fullname: "鹿泉区",
    location: {
      lat: 38.08587,
      lng: 114.31344,
    },
  },
  {
    id: "130111",
    fullname: "栾城区",
    location: {
      lat: 37.90025,
      lng: 114.64839,
    },
  },
  {
    id: "130121",
    fullname: "井陉县",
    location: {
      lat: 38.03225,
      lng: 114.14532,
    },
  },
  {
    id: "130123",
    fullname: "正定县",
    location: {
      lat: 38.14619,
      lng: 114.57109,
    },
  },
  {
    id: "130125",
    fullname: "行唐县",
    location: {
      lat: 38.43848,
      lng: 114.55294,
    },
  },
  {
    id: "130126",
    fullname: "灵寿县",
    location: {
      lat: 38.30864,
      lng: 114.38265,
    },
  },
  {
    id: "130127",
    fullname: "高邑县",
    location: {
      lat: 37.61493,
      lng: 114.61148,
    },
  },
  {
    id: "130128",
    fullname: "深泽县",
    location: {
      lat: 38.18417,
      lng: 115.20094,
    },
  },
  {
    id: "130129",
    fullname: "赞皇县",
    location: {
      lat: 37.66579,
      lng: 114.38592,
    },
  },
  {
    id: "130130",
    fullname: "无极县",
    location: {
      lat: 38.17915,
      lng: 114.97638,
    },
  },
  {
    id: "130131",
    fullname: "平山县",
    location: {
      lat: 38.25998,
      lng: 114.18605,
    },
  },
  {
    id: "130132",
    fullname: "元氏县",
    location: {
      lat: 37.76646,
      lng: 114.52547,
    },
  },
  {
    id: "130133",
    fullname: "赵县",
    location: {
      lat: 37.75631,
      lng: 114.77616,
    },
  },
  {
    id: "130181",
    fullname: "辛集市",
    location: {
      lat: 37.94316,
      lng: 115.21792,
    },
  },
  {
    id: "130183",
    fullname: "晋州市",
    location: {
      lat: 38.02632,
      lng: 115.031199,
    },
  },
  {
    id: "130184",
    fullname: "新乐市",
    location: {
      lat: 38.34338,
      lng: 114.68384,
    },
  },
  {
    id: "130202",
    fullname: "路南区",
    location: {
      lat: 39.62509,
      lng: 118.15437,
    },
  },
  {
    id: "130203",
    fullname: "路北区",
    location: {
      lat: 39.62434,
      lng: 118.20074,
    },
  },
  {
    id: "130204",
    fullname: "古冶区",
    location: {
      lat: 39.71612,
      lng: 118.45885,
    },
  },
  {
    id: "130205",
    fullname: "开平区",
    location: {
      lat: 39.67098,
      lng: 118.26198,
    },
  },
  {
    id: "130207",
    fullname: "丰南区",
    location: {
      lat: 39.57487,
      lng: 118.08505,
    },
  },
  {
    id: "130208",
    fullname: "丰润区",
    location: {
      lat: 39.83249,
      lng: 118.16217,
    },
  },
  {
    id: "130209",
    fullname: "曹妃甸区",
    location: {
      lat: 39.27313,
      lng: 118.46023,
    },
  },
  {
    id: "130224",
    fullname: "滦南县",
    location: {
      lat: 39.503941,
      lng: 118.674139,
    },
  },
  {
    id: "130225",
    fullname: "乐亭县",
    location: {
      lat: 39.42564,
      lng: 118.91252,
    },
  },
  {
    id: "130227",
    fullname: "迁西县",
    location: {
      lat: 40.14153,
      lng: 118.3146,
    },
  },
  {
    id: "130229",
    fullname: "玉田县",
    location: {
      lat: 39.9005,
      lng: 117.73881,
    },
  },
  {
    id: "130230",
    fullname: "芦台区",
    location: {
      lat: 39.38091,
      lng: 117.74757,
    },
  },
  {
    id: "130281",
    fullname: "遵化市",
    location: {
      lat: 40.18924,
      lng: 117.96567,
    },
  },
  {
    id: "130283",
    fullname: "迁安市",
    location: {
      lat: 39.99836,
      lng: 118.70073,
    },
  },
  {
    id: "130284",
    fullname: "滦州市",
    location: {
      lat: 39.74058,
      lng: 118.70351,
    },
  },
  {
    id: "130302",
    fullname: "海港区",
    location: {
      lat: 39.9345,
      lng: 119.61063,
    },
  },
  {
    id: "130303",
    fullname: "山海关区",
    location: {
      lat: 39.97892,
      lng: 119.77606,
    },
  },
  {
    id: "130304",
    fullname: "北戴河区",
    location: {
      lat: 39.83507,
      lng: 119.48458,
    },
  },
  {
    id: "130306",
    fullname: "抚宁区",
    location: {
      lat: 39.87634,
      lng: 119.24444,
    },
  },
  {
    id: "130321",
    fullname: "青龙满族自治县",
    location: {
      lat: 40.40692,
      lng: 118.95012,
    },
  },
  {
    id: "130322",
    fullname: "昌黎县",
    location: {
      lat: 39.71284,
      lng: 119.16288,
    },
  },
  {
    id: "130324",
    fullname: "卢龙县",
    location: {
      lat: 39.8918,
      lng: 118.89294,
    },
  },
  {
    id: "130402",
    fullname: "邯山区",
    location: {
      lat: 36.6,
      lng: 114.48376,
    },
  },
  {
    id: "130403",
    fullname: "丛台区",
    location: {
      lat: 36.61853,
      lng: 114.49339,
    },
  },
  {
    id: "130404",
    fullname: "复兴区",
    location: {
      lat: 36.61693,
      lng: 114.47309,
    },
  },
  {
    id: "130406",
    fullname: "峰峰矿区",
    location: {
      lat: 36.41968,
      lng: 114.21302,
    },
  },
  {
    id: "130407",
    fullname: "肥乡区",
    location: {
      lat: 36.548102,
      lng: 114.800024,
    },
  },
  {
    id: "130408",
    fullname: "永年区",
    location: {
      lat: 36.77771,
      lng: 114.49095,
    },
  },
  {
    id: "130423",
    fullname: "临漳县",
    location: {
      lat: 36.3348,
      lng: 114.61968,
    },
  },
  {
    id: "130424",
    fullname: "成安县",
    location: {
      lat: 36.44414,
      lng: 114.66999,
    },
  },
  {
    id: "130425",
    fullname: "大名县",
    location: {
      lat: 36.28558,
      lng: 115.14788,
    },
  },
  {
    id: "130426",
    fullname: "涉县",
    location: {
      lat: 36.58544,
      lng: 113.69065,
    },
  },
  {
    id: "130427",
    fullname: "磁县",
    location: {
      lat: 36.37396,
      lng: 114.37392,
    },
  },
  {
    id: "130430",
    fullname: "邱县",
    location: {
      lat: 36.81987,
      lng: 115.17641,
    },
  },
  {
    id: "130431",
    fullname: "鸡泽县",
    location: {
      lat: 36.92031,
      lng: 114.8782,
    },
  },
  {
    id: "130432",
    fullname: "广平县",
    location: {
      lat: 36.48345,
      lng: 114.9485,
    },
  },
  {
    id: "130433",
    fullname: "馆陶县",
    location: {
      lat: 36.53529,
      lng: 115.30629,
    },
  },
  {
    id: "130434",
    fullname: "魏县",
    location: {
      lat: 36.35991,
      lng: 114.93882,
    },
  },
  {
    id: "130435",
    fullname: "曲周县",
    location: {
      lat: 36.77918,
      lng: 114.94485,
    },
  },
  {
    id: "130481",
    fullname: "武安市",
    location: {
      lat: 36.69671,
      lng: 114.20376,
    },
  },
  {
    id: "130502",
    fullname: "襄都区",
    location: {
      lat: 37.072899,
      lng: 114.506496,
    },
  },
  {
    id: "130503",
    fullname: "信都区",
    location: {
      lat: 37.059916,
      lng: 114.468457,
    },
  },
  {
    id: "130505",
    fullname: "任泽区",
    location: {
      lat: 37.120889,
      lng: 114.671323,
    },
  },
  {
    id: "130506",
    fullname: "南和区",
    location: {
      lat: 37.00495,
      lng: 114.683782,
    },
  },
  {
    id: "130522",
    fullname: "临城县",
    location: {
      lat: 37.4443,
      lng: 114.49898,
    },
  },
  {
    id: "130523",
    fullname: "内丘县",
    location: {
      lat: 37.28678,
      lng: 114.51207,
    },
  },
  {
    id: "130524",
    fullname: "柏乡县",
    location: {
      lat: 37.48244,
      lng: 114.69363,
    },
  },
  {
    id: "130525",
    fullname: "隆尧县",
    location: {
      lat: 37.35025,
      lng: 114.77031,
    },
  },
  {
    id: "130528",
    fullname: "宁晋县",
    location: {
      lat: 37.6198,
      lng: 114.91932,
    },
  },
  {
    id: "130529",
    fullname: "巨鹿县",
    location: {
      lat: 37.22107,
      lng: 115.03781,
    },
  },
  {
    id: "130530",
    fullname: "新河县",
    location: {
      lat: 37.52867,
      lng: 115.24214,
    },
  },
  {
    id: "130531",
    fullname: "广宗县",
    location: {
      lat: 37.07463,
      lng: 115.14261,
    },
  },
  {
    id: "130532",
    fullname: "平乡县",
    location: {
      lat: 37.06319,
      lng: 115.03007,
    },
  },
  {
    id: "130533",
    fullname: "威县",
    location: {
      lat: 36.97542,
      lng: 115.26669,
    },
  },
  {
    id: "130534",
    fullname: "清河县",
    location: {
      lat: 37.03993,
      lng: 115.66718,
    },
  },
  {
    id: "130535",
    fullname: "临西县",
    location: {
      lat: 36.87082,
      lng: 115.50104,
    },
  },
  {
    id: "130581",
    fullname: "南宫市",
    location: {
      lat: 37.35795,
      lng: 115.40866,
    },
  },
  {
    id: "130582",
    fullname: "沙河市",
    location: {
      lat: 36.85516,
      lng: 114.50332,
    },
  },
  {
    id: "130602",
    fullname: "竞秀区",
    location: {
      lat: 38.87757,
      lng: 115.45875,
    },
  },
  {
    id: "130606",
    fullname: "莲池区",
    location: {
      lat: 38.88353,
      lng: 115.49715,
    },
  },
  {
    id: "130607",
    fullname: "满城区",
    location: {
      lat: 38.94892,
      lng: 115.32217,
    },
  },
  {
    id: "130608",
    fullname: "清苑区",
    location: {
      lat: 38.76526,
      lng: 115.48989,
    },
  },
  {
    id: "130609",
    fullname: "徐水区",
    location: {
      lat: 39.01865,
      lng: 115.65586,
    },
  },
  {
    id: "130623",
    fullname: "涞水县",
    location: {
      lat: 39.39428,
      lng: 115.71378,
    },
  },
  {
    id: "130624",
    fullname: "阜平县",
    location: {
      lat: 38.84915,
      lng: 114.19531,
    },
  },
  {
    id: "130626",
    fullname: "定兴县",
    location: {
      lat: 39.26315,
      lng: 115.8079,
    },
  },
  {
    id: "130627",
    fullname: "唐县",
    location: {
      lat: 38.7479,
      lng: 114.98295,
    },
  },
  {
    id: "130628",
    fullname: "高阳县",
    location: {
      lat: 38.70007,
      lng: 115.77884,
    },
  },
  {
    id: "130629",
    fullname: "容城县",
    location: {
      lat: 39.042862,
      lng: 115.861633,
    },
  },
  {
    id: "130630",
    fullname: "涞源县",
    location: {
      lat: 39.36018,
      lng: 114.69424,
    },
  },
  {
    id: "130631",
    fullname: "望都县",
    location: {
      lat: 38.709,
      lng: 115.15564,
    },
  },
  {
    id: "130632",
    fullname: "安新县",
    location: {
      lat: 38.93535,
      lng: 115.93564,
    },
  },
  {
    id: "130633",
    fullname: "易县",
    location: {
      lat: 39.34926,
      lng: 115.49846,
    },
  },
  {
    id: "130634",
    fullname: "曲阳县",
    location: {
      lat: 38.62231,
      lng: 114.74501,
    },
  },
  {
    id: "130635",
    fullname: "蠡县",
    location: {
      lat: 38.48806,
      lng: 115.5836,
    },
  },
  {
    id: "130636",
    fullname: "顺平县",
    location: {
      lat: 38.83759,
      lng: 115.13543,
    },
  },
  {
    id: "130637",
    fullname: "博野县",
    location: {
      lat: 38.45766,
      lng: 115.46439,
    },
  },
  {
    id: "130638",
    fullname: "雄县",
    location: {
      lat: 38.994458,
      lng: 116.108789,
    },
  },
  {
    id: "130681",
    fullname: "涿州市",
    location: {
      lat: 39.48529,
      lng: 115.97439,
    },
  },
  {
    id: "130682",
    fullname: "定州市",
    location: {
      lat: 38.51626,
      lng: 114.99025,
    },
  },
  {
    id: "130683",
    fullname: "安国市",
    location: {
      lat: 38.41845,
      lng: 115.32664,
    },
  },
  {
    id: "130684",
    fullname: "高碑店市",
    location: {
      lat: 39.32658,
      lng: 115.87373,
    },
  },
  {
    id: "130702",
    fullname: "桥东区",
    location: {
      lat: 40.788448,
      lng: 114.894308,
    },
  },
  {
    id: "130703",
    fullname: "桥西区",
    location: {
      lat: 40.81956,
      lng: 114.86937,
    },
  },
  {
    id: "130705",
    fullname: "宣化区",
    location: {
      lat: 40.60845,
      lng: 115.09923,
    },
  },
  {
    id: "130706",
    fullname: "下花园区",
    location: {
      lat: 40.5024,
      lng: 115.28751,
    },
  },
  {
    id: "130708",
    fullname: "万全区",
    location: {
      lat: 40.76699,
      lng: 114.74055,
    },
  },
  {
    id: "130709",
    fullname: "崇礼区",
    location: {
      lat: 40.974758,
      lng: 115.282349,
    },
  },
  {
    id: "130722",
    fullname: "张北县",
    location: {
      lat: 41.15862,
      lng: 114.71987,
    },
  },
  {
    id: "130723",
    fullname: "康保县",
    location: {
      lat: 41.85228,
      lng: 114.60035,
    },
  },
  {
    id: "130724",
    fullname: "沽源县",
    location: {
      lat: 41.66964,
      lng: 115.68865,
    },
  },
  {
    id: "130725",
    fullname: "尚义县",
    location: {
      lat: 41.076242,
      lng: 113.969499,
    },
  },
  {
    id: "130726",
    fullname: "蔚县",
    location: {
      lat: 39.84072,
      lng: 114.58897,
    },
  },
  {
    id: "130727",
    fullname: "阳原县",
    location: {
      lat: 40.10366,
      lng: 114.15057,
    },
  },
  {
    id: "130728",
    fullname: "怀安县",
    location: {
      lat: 40.6743,
      lng: 114.38564,
    },
  },
  {
    id: "130730",
    fullname: "怀来县",
    location: {
      lat: 40.41538,
      lng: 115.51778,
    },
  },
  {
    id: "130731",
    fullname: "涿鹿县",
    location: {
      lat: 40.38003,
      lng: 115.21962,
    },
  },
  {
    id: "130732",
    fullname: "赤城县",
    location: {
      lat: 40.912948,
      lng: 115.831658,
    },
  },
  {
    id: "130802",
    fullname: "双桥区",
    location: {
      lat: 40.97469,
      lng: 117.94348,
    },
  },
  {
    id: "130803",
    fullname: "双滦区",
    location: {
      lat: 40.95913,
      lng: 117.80024,
    },
  },
  {
    id: "130804",
    fullname: "鹰手营子矿区",
    location: {
      lat: 40.5464,
      lng: 117.65955,
    },
  },
  {
    id: "130821",
    fullname: "承德县",
    location: {
      lat: 40.76853,
      lng: 118.17382,
    },
  },
  {
    id: "130822",
    fullname: "兴隆县",
    location: {
      lat: 40.41727,
      lng: 117.50076,
    },
  },
  {
    id: "130824",
    fullname: "滦平县",
    location: {
      lat: 40.94145,
      lng: 117.33286,
    },
  },
  {
    id: "130825",
    fullname: "隆化县",
    location: {
      lat: 41.31381,
      lng: 117.73897,
    },
  },
  {
    id: "130826",
    fullname: "丰宁满族自治县",
    location: {
      lat: 41.20894,
      lng: 116.64591,
    },
  },
  {
    id: "130827",
    fullname: "宽城满族自治县",
    location: {
      lat: 40.61139,
      lng: 118.48535,
    },
  },
  {
    id: "130828",
    fullname: "围场满族蒙古族自治县",
    location: {
      lat: 41.93846,
      lng: 117.76016,
    },
  },
  {
    id: "130881",
    fullname: "平泉市",
    location: {
      lat: 41.01797,
      lng: 118.70065,
    },
  },
  {
    id: "130902",
    fullname: "新华区",
    location: {
      lat: 38.31404,
      lng: 116.86638,
    },
  },
  {
    id: "130903",
    fullname: "运河区",
    location: {
      lat: 38.31077,
      lng: 116.83191,
    },
  },
  {
    id: "130921",
    fullname: "沧县",
    location: {
      lat: 38.32474,
      lng: 116.60718,
    },
  },
  {
    id: "130922",
    fullname: "青县",
    location: {
      lat: 38.58348,
      lng: 116.80318,
    },
  },
  {
    id: "130923",
    fullname: "东光县",
    location: {
      lat: 37.88828,
      lng: 116.5371,
    },
  },
  {
    id: "130924",
    fullname: "海兴县",
    location: {
      lat: 38.14325,
      lng: 117.49785,
    },
  },
  {
    id: "130925",
    fullname: "盐山县",
    location: {
      lat: 38.0583,
      lng: 117.23025,
    },
  },
  {
    id: "130926",
    fullname: "肃宁县",
    location: {
      lat: 38.42277,
      lng: 115.82997,
    },
  },
  {
    id: "130927",
    fullname: "南皮县",
    location: {
      lat: 38.0378,
      lng: 116.70774,
    },
  },
  {
    id: "130928",
    fullname: "吴桥县",
    location: {
      lat: 37.6277,
      lng: 116.39154,
    },
  },
  {
    id: "130929",
    fullname: "献县",
    location: {
      lat: 38.19018,
      lng: 116.12279,
    },
  },
  {
    id: "130930",
    fullname: "孟村回族自治县",
    location: {
      lat: 38.05341,
      lng: 117.10418,
    },
  },
  {
    id: "130981",
    fullname: "泊头市",
    location: {
      lat: 38.08364,
      lng: 116.57828,
    },
  },
  {
    id: "130982",
    fullname: "任丘市",
    location: {
      lat: 38.71164,
      lng: 116.09954,
    },
  },
  {
    id: "130983",
    fullname: "黄骅市",
    location: {
      lat: 38.37139,
      lng: 117.33012,
    },
  },
  {
    id: "130984",
    fullname: "河间市",
    location: {
      lat: 38.44548,
      lng: 116.099,
    },
  },
  {
    id: "131002",
    fullname: "安次区",
    location: {
      lat: 39.50311,
      lng: 116.68572,
    },
  },
  {
    id: "131003",
    fullname: "广阳区",
    location: {
      lat: 39.5228,
      lng: 116.71051,
    },
  },
  {
    id: "131022",
    fullname: "固安县",
    location: {
      lat: 39.43825,
      lng: 116.29852,
    },
  },
  {
    id: "131023",
    fullname: "永清县",
    location: {
      lat: 39.32178,
      lng: 116.49904,
    },
  },
  {
    id: "131024",
    fullname: "香河县",
    location: {
      lat: 39.76142,
      lng: 117.00645,
    },
  },
  {
    id: "131025",
    fullname: "大城县",
    location: {
      lat: 38.70469,
      lng: 116.65423,
    },
  },
  {
    id: "131026",
    fullname: "文安县",
    location: {
      lat: 38.87328,
      lng: 116.45848,
    },
  },
  {
    id: "131028",
    fullname: "大厂回族自治县",
    location: {
      lat: 39.88665,
      lng: 116.98951,
    },
  },
  {
    id: "131081",
    fullname: "霸州市",
    location: {
      lat: 39.12581,
      lng: 116.3917,
    },
  },
  {
    id: "131082",
    fullname: "三河市",
    location: {
      lat: 39.98246,
      lng: 117.07822,
    },
  },
  {
    id: "131102",
    fullname: "桃城区",
    location: {
      lat: 37.73516,
      lng: 115.67466,
    },
  },
  {
    id: "131103",
    fullname: "冀州区",
    location: {
      lat: 37.55085,
      lng: 115.57938,
    },
  },
  {
    id: "131121",
    fullname: "枣强县",
    location: {
      lat: 37.51337,
      lng: 115.72418,
    },
  },
  {
    id: "131122",
    fullname: "武邑县",
    location: {
      lat: 37.80186,
      lng: 115.88751,
    },
  },
  {
    id: "131123",
    fullname: "武强县",
    location: {
      lat: 38.0412,
      lng: 115.98253,
    },
  },
  {
    id: "131124",
    fullname: "饶阳县",
    location: {
      lat: 38.2353,
      lng: 115.7256,
    },
  },
  {
    id: "131125",
    fullname: "安平县",
    location: {
      lat: 38.23447,
      lng: 115.51912,
    },
  },
  {
    id: "131126",
    fullname: "故城县",
    location: {
      lat: 37.34748,
      lng: 115.96581,
    },
  },
  {
    id: "131127",
    fullname: "景县",
    location: {
      lat: 37.69234,
      lng: 116.2706,
    },
  },
  {
    id: "131128",
    fullname: "阜城县",
    location: {
      lat: 37.86885,
      lng: 116.14437,
    },
  },
  {
    id: "131182",
    fullname: "深州市",
    location: {
      lat: 38.00022,
      lng: 115.56001,
    },
  },
  {
    id: "140105",
    fullname: "小店区",
    location: {
      lat: 37.73605,
      lng: 112.56566,
    },
  },
  {
    id: "140106",
    fullname: "迎泽区",
    location: {
      lat: 37.8632,
      lng: 112.56346,
    },
  },
  {
    id: "140107",
    fullname: "杏花岭区",
    location: {
      lat: 37.89403,
      lng: 112.57053,
    },
  },
  {
    id: "140108",
    fullname: "尖草坪区",
    location: {
      lat: 37.94036,
      lng: 112.48699,
    },
  },
  {
    id: "140109",
    fullname: "万柏林区",
    location: {
      lat: 37.85929,
      lng: 112.51562,
    },
  },
  {
    id: "140110",
    fullname: "晋源区",
    location: {
      lat: 37.71525,
      lng: 112.4777,
    },
  },
  {
    id: "140121",
    fullname: "清徐县",
    location: {
      lat: 37.60856,
      lng: 112.35925,
    },
  },
  {
    id: "140122",
    fullname: "阳曲县",
    location: {
      lat: 38.05828,
      lng: 112.67292,
    },
  },
  {
    id: "140123",
    fullname: "娄烦县",
    location: {
      lat: 38.0672,
      lng: 111.79745,
    },
  },
  {
    id: "140181",
    fullname: "古交市",
    location: {
      lat: 37.90714,
      lng: 112.17588,
    },
  },
  {
    id: "140212",
    fullname: "新荣区",
    location: {
      lat: 40.25585,
      lng: 113.14013,
    },
  },
  {
    id: "140213",
    fullname: "平城区",
    location: {
      lat: 40.07583,
      lng: 113.29798,
    },
  },
  {
    id: "140214",
    fullname: "云冈区",
    location: {
      lat: 40.00543,
      lng: 113.14952,
    },
  },
  {
    id: "140215",
    fullname: "云州区",
    location: {
      lat: 40.04016,
      lng: 113.61217,
    },
  },
  {
    id: "140221",
    fullname: "阳高县",
    location: {
      lat: 40.36627,
      lng: 113.75412,
    },
  },
  {
    id: "140222",
    fullname: "天镇县",
    location: {
      lat: 40.42031,
      lng: 114.0907,
    },
  },
  {
    id: "140223",
    fullname: "广灵县",
    location: {
      lat: 39.7602,
      lng: 114.28257,
    },
  },
  {
    id: "140224",
    fullname: "灵丘县",
    location: {
      lat: 39.44243,
      lng: 114.2342,
    },
  },
  {
    id: "140225",
    fullname: "浑源县",
    location: {
      lat: 39.69873,
      lng: 113.6908,
    },
  },
  {
    id: "140226",
    fullname: "左云县",
    location: {
      lat: 40.01349,
      lng: 112.70273,
    },
  },
  {
    id: "140302",
    fullname: "城区",
    location: {
      lat: 37.84739,
      lng: 113.60075,
    },
  },
  {
    id: "140303",
    fullname: "矿区",
    location: {
      lat: 37.86851,
      lng: 113.5553,
    },
  },
  {
    id: "140311",
    fullname: "郊区",
    location: {
      lat: 37.94135,
      lng: 113.58515,
    },
  },
  {
    id: "140321",
    fullname: "平定县",
    location: {
      lat: 37.78685,
      lng: 113.65804,
    },
  },
  {
    id: "140322",
    fullname: "盂县",
    location: {
      lat: 38.0858,
      lng: 113.41238,
    },
  },
  {
    id: "140403",
    fullname: "潞州区",
    location: {
      lat: 36.20346,
      lng: 113.12303,
    },
  },
  {
    id: "140404",
    fullname: "上党区",
    location: {
      lat: 36.05312,
      lng: 113.05135,
    },
  },
  {
    id: "140405",
    fullname: "屯留区",
    location: {
      lat: 36.31553,
      lng: 112.89221,
    },
  },
  {
    id: "140406",
    fullname: "潞城区",
    location: {
      lat: 36.33418,
      lng: 113.22893,
    },
  },
  {
    id: "140423",
    fullname: "襄垣县",
    location: {
      lat: 36.535808,
      lng: 113.05306,
    },
  },
  {
    id: "140425",
    fullname: "平顺县",
    location: {
      lat: 36.20006,
      lng: 113.43606,
    },
  },
  {
    id: "140426",
    fullname: "黎城县",
    location: {
      lat: 36.50227,
      lng: 113.38722,
    },
  },
  {
    id: "140427",
    fullname: "壶关县",
    location: {
      lat: 36.11567,
      lng: 113.20733,
    },
  },
  {
    id: "140428",
    fullname: "长子县",
    location: {
      lat: 36.12222,
      lng: 112.87795,
    },
  },
  {
    id: "140429",
    fullname: "武乡县",
    location: {
      lat: 36.837889,
      lng: 112.863902,
    },
  },
  {
    id: "140430",
    fullname: "沁县",
    location: {
      lat: 36.75608,
      lng: 112.69907,
    },
  },
  {
    id: "140431",
    fullname: "沁源县",
    location: {
      lat: 36.5001,
      lng: 112.33762,
    },
  },
  {
    id: "140502",
    fullname: "城区",
    location: {
      lat: 35.50154,
      lng: 112.85352,
    },
  },
  {
    id: "140521",
    fullname: "沁水县",
    location: {
      lat: 35.69015,
      lng: 112.1866,
    },
  },
  {
    id: "140522",
    fullname: "阳城县",
    location: {
      lat: 35.48618,
      lng: 112.41491,
    },
  },
  {
    id: "140524",
    fullname: "陵川县",
    location: {
      lat: 35.77512,
      lng: 113.28061,
    },
  },
  {
    id: "140525",
    fullname: "泽州县",
    location: {
      lat: 35.500426,
      lng: 112.943664,
    },
  },
  {
    id: "140581",
    fullname: "高平市",
    location: {
      lat: 35.79807,
      lng: 112.92358,
    },
  },
  {
    id: "140602",
    fullname: "朔城区",
    location: {
      lat: 39.31918,
      lng: 112.43314,
    },
  },
  {
    id: "140603",
    fullname: "平鲁区",
    location: {
      lat: 39.51238,
      lng: 112.28832,
    },
  },
  {
    id: "140621",
    fullname: "山阴县",
    location: {
      lat: 39.52625,
      lng: 112.81572,
    },
  },
  {
    id: "140622",
    fullname: "应县",
    location: {
      lat: 39.55434,
      lng: 113.19093,
    },
  },
  {
    id: "140623",
    fullname: "右玉县",
    location: {
      lat: 39.98913,
      lng: 112.46705,
    },
  },
  {
    id: "140681",
    fullname: "怀仁市",
    location: {
      lat: 39.82788,
      lng: 113.10012,
    },
  },
  {
    id: "140702",
    fullname: "榆次区",
    location: {
      lat: 37.69978,
      lng: 112.70746,
    },
  },
  {
    id: "140703",
    fullname: "太谷区",
    location: {
      lat: 37.42124,
      lng: 112.551231,
    },
  },
  {
    id: "140721",
    fullname: "榆社县",
    location: {
      lat: 37.07084,
      lng: 112.97522,
    },
  },
  {
    id: "140722",
    fullname: "左权县",
    location: {
      lat: 37.08243,
      lng: 113.37926,
    },
  },
  {
    id: "140723",
    fullname: "和顺县",
    location: {
      lat: 37.32963,
      lng: 113.57032,
    },
  },
  {
    id: "140724",
    fullname: "昔阳县",
    location: {
      lat: 37.61282,
      lng: 113.70718,
    },
  },
  {
    id: "140725",
    fullname: "寿阳县",
    location: {
      lat: 37.8951,
      lng: 113.176501,
    },
  },
  {
    id: "140727",
    fullname: "祁县",
    location: {
      lat: 37.35775,
      lng: 112.33507,
    },
  },
  {
    id: "140728",
    fullname: "平遥县",
    location: {
      lat: 37.18934,
      lng: 112.17557,
    },
  },
  {
    id: "140729",
    fullname: "灵石县",
    location: {
      lat: 36.84788,
      lng: 111.77879,
    },
  },
  {
    id: "140781",
    fullname: "介休市",
    location: {
      lat: 37.0271,
      lng: 111.91672,
    },
  },
  {
    id: "140802",
    fullname: "盐湖区",
    location: {
      lat: 35.01505,
      lng: 110.99817,
    },
  },
  {
    id: "140821",
    fullname: "临猗县",
    location: {
      lat: 35.14471,
      lng: 110.77408,
    },
  },
  {
    id: "140822",
    fullname: "万荣县",
    location: {
      lat: 35.415341,
      lng: 110.837811,
    },
  },
  {
    id: "140823",
    fullname: "闻喜县",
    location: {
      lat: 35.35663,
      lng: 111.22472,
    },
  },
  {
    id: "140824",
    fullname: "稷山县",
    location: {
      lat: 35.60401,
      lng: 110.98311,
    },
  },
  {
    id: "140825",
    fullname: "新绛县",
    location: {
      lat: 35.61622,
      lng: 111.2247,
    },
  },
  {
    id: "140826",
    fullname: "绛县",
    location: {
      lat: 35.49146,
      lng: 111.56878,
    },
  },
  {
    id: "140827",
    fullname: "垣曲县",
    location: {
      lat: 35.29762,
      lng: 111.67025,
    },
  },
  {
    id: "140828",
    fullname: "夏县",
    location: {
      lat: 35.140971,
      lng: 111.220199,
    },
  },
  {
    id: "140829",
    fullname: "平陆县",
    location: {
      lat: 34.83467,
      lng: 111.19474,
    },
  },
  {
    id: "140830",
    fullname: "芮城县",
    location: {
      lat: 34.69365,
      lng: 110.69442,
    },
  },
  {
    id: "140881",
    fullname: "永济市",
    location: {
      lat: 34.86716,
      lng: 110.44773,
    },
  },
  {
    id: "140882",
    fullname: "河津市",
    location: {
      lat: 35.59643,
      lng: 110.71186,
    },
  },
  {
    id: "140902",
    fullname: "忻府区",
    location: {
      lat: 38.40429,
      lng: 112.74619,
    },
  },
  {
    id: "140921",
    fullname: "定襄县",
    location: {
      lat: 38.4731,
      lng: 112.95728,
    },
  },
  {
    id: "140922",
    fullname: "五台县",
    location: {
      lat: 38.72812,
      lng: 113.2554,
    },
  },
  {
    id: "140923",
    fullname: "代县",
    location: {
      lat: 39.06689,
      lng: 112.95996,
    },
  },
  {
    id: "140924",
    fullname: "繁峙县",
    location: {
      lat: 39.18904,
      lng: 113.26547,
    },
  },
  {
    id: "140925",
    fullname: "宁武县",
    location: {
      lat: 39.00147,
      lng: 112.3045,
    },
  },
  {
    id: "140926",
    fullname: "静乐县",
    location: {
      lat: 38.35924,
      lng: 111.93875,
    },
  },
  {
    id: "140927",
    fullname: "神池县",
    location: {
      lat: 39.09059,
      lng: 112.21077,
    },
  },
  {
    id: "140928",
    fullname: "五寨县",
    location: {
      lat: 38.91071,
      lng: 111.84701,
    },
  },
  {
    id: "140929",
    fullname: "岢岚县",
    location: {
      lat: 38.70427,
      lng: 111.57296,
    },
  },
  {
    id: "140930",
    fullname: "河曲县",
    location: {
      lat: 39.38456,
      lng: 111.13837,
    },
  },
  {
    id: "140931",
    fullname: "保德县",
    location: {
      lat: 39.02265,
      lng: 111.08625,
    },
  },
  {
    id: "140932",
    fullname: "偏关县",
    location: {
      lat: 39.43613,
      lng: 111.50869,
    },
  },
  {
    id: "140981",
    fullname: "原平市",
    location: {
      lat: 38.730472,
      lng: 112.711104,
    },
  },
  {
    id: "141002",
    fullname: "尧都区",
    location: {
      lat: 36.08301,
      lng: 111.57873,
    },
  },
  {
    id: "141021",
    fullname: "曲沃县",
    location: {
      lat: 35.64105,
      lng: 111.4757,
    },
  },
  {
    id: "141022",
    fullname: "翼城县",
    location: {
      lat: 35.73823,
      lng: 111.71836,
    },
  },
  {
    id: "141023",
    fullname: "襄汾县",
    location: {
      lat: 35.87618,
      lng: 111.44189,
    },
  },
  {
    id: "141024",
    fullname: "洪洞县",
    location: {
      lat: 36.25374,
      lng: 111.67496,
    },
  },
  {
    id: "141025",
    fullname: "古县",
    location: {
      lat: 36.2665,
      lng: 111.92032,
    },
  },
  {
    id: "141026",
    fullname: "安泽县",
    location: {
      lat: 36.14781,
      lng: 112.25013,
    },
  },
  {
    id: "141027",
    fullname: "浮山县",
    location: {
      lat: 35.96802,
      lng: 111.84952,
    },
  },
  {
    id: "141028",
    fullname: "吉县",
    location: {
      lat: 36.097915,
      lng: 110.681716,
    },
  },
  {
    id: "141029",
    fullname: "乡宁县",
    location: {
      lat: 35.970813,
      lng: 110.84726,
    },
  },
  {
    id: "141030",
    fullname: "大宁县",
    location: {
      lat: 36.46511,
      lng: 110.75285,
    },
  },
  {
    id: "141031",
    fullname: "隰县",
    location: {
      lat: 36.69344,
      lng: 110.94049,
    },
  },
  {
    id: "141032",
    fullname: "永和县",
    location: {
      lat: 36.75952,
      lng: 110.63198,
    },
  },
  {
    id: "141033",
    fullname: "蒲县",
    location: {
      lat: 36.41179,
      lng: 111.09648,
    },
  },
  {
    id: "141034",
    fullname: "汾西县",
    location: {
      lat: 36.65295,
      lng: 111.56365,
    },
  },
  {
    id: "141081",
    fullname: "侯马市",
    location: {
      lat: 35.61908,
      lng: 111.37213,
    },
  },
  {
    id: "141082",
    fullname: "霍州市",
    location: {
      lat: 36.56877,
      lng: 111.755065,
    },
  },
  {
    id: "141102",
    fullname: "离石区",
    location: {
      lat: 37.51761,
      lng: 111.15081,
    },
  },
  {
    id: "141121",
    fullname: "文水县",
    location: {
      lat: 37.43843,
      lng: 112.0285,
    },
  },
  {
    id: "141122",
    fullname: "交城县",
    location: {
      lat: 37.55165,
      lng: 112.15478,
    },
  },
  {
    id: "141123",
    fullname: "兴县",
    location: {
      lat: 38.46242,
      lng: 111.1276,
    },
  },
  {
    id: "141124",
    fullname: "临县",
    location: {
      lat: 37.95106,
      lng: 110.99208,
    },
  },
  {
    id: "141125",
    fullname: "柳林县",
    location: {
      lat: 37.42902,
      lng: 110.88937,
    },
  },
  {
    id: "141126",
    fullname: "石楼县",
    location: {
      lat: 36.99857,
      lng: 110.83469,
    },
  },
  {
    id: "141127",
    fullname: "岚县",
    location: {
      lat: 38.279389,
      lng: 111.671954,
    },
  },
  {
    id: "141128",
    fullname: "方山县",
    location: {
      lat: 37.8947,
      lng: 111.24396,
    },
  },
  {
    id: "141129",
    fullname: "中阳县",
    location: {
      lat: 37.3572,
      lng: 111.17953,
    },
  },
  {
    id: "141130",
    fullname: "交口县",
    location: {
      lat: 36.98217,
      lng: 111.18107,
    },
  },
  {
    id: "141181",
    fullname: "孝义市",
    location: {
      lat: 37.14534,
      lng: 111.77903,
    },
  },
  {
    id: "141182",
    fullname: "汾阳市",
    location: {
      lat: 37.26542,
      lng: 111.78777,
    },
  },
  {
    id: "150102",
    fullname: "新城区",
    location: {
      lat: 40.85844,
      lng: 111.66345,
    },
  },
  {
    id: "150103",
    fullname: "回民区",
    location: {
      lat: 40.80772,
      lng: 111.62299,
    },
  },
  {
    id: "150104",
    fullname: "玉泉区",
    location: {
      lat: 40.75319,
      lng: 111.67543,
    },
  },
  {
    id: "150105",
    fullname: "赛罕区",
    location: {
      lat: 40.79195,
      lng: 111.70171,
    },
  },
  {
    id: "150121",
    fullname: "土默特左旗",
    location: {
      lat: 40.72957,
      lng: 111.16358,
    },
  },
  {
    id: "150122",
    fullname: "托克托县",
    location: {
      lat: 40.27744,
      lng: 111.19421,
    },
  },
  {
    id: "150123",
    fullname: "和林格尔县",
    location: {
      lat: 40.37859,
      lng: 111.82083,
    },
  },
  {
    id: "150124",
    fullname: "清水河县",
    location: {
      lat: 39.90892,
      lng: 111.68639,
    },
  },
  {
    id: "150125",
    fullname: "武川县",
    location: {
      lat: 41.0965,
      lng: 111.45118,
    },
  },
  {
    id: "150202",
    fullname: "东河区",
    location: {
      lat: 40.57643,
      lng: 110.04317,
    },
  },
  {
    id: "150203",
    fullname: "昆都仑区",
    location: {
      lat: 40.64178,
      lng: 109.83859,
    },
  },
  {
    id: "150204",
    fullname: "青山区",
    location: {
      lat: 40.64559,
      lng: 109.90241,
    },
  },
  {
    id: "150205",
    fullname: "石拐区",
    location: {
      lat: 40.67204,
      lng: 110.27227,
    },
  },
  {
    id: "150206",
    fullname: "白云鄂博矿区",
    location: {
      lat: 41.76943,
      lng: 109.97372,
    },
  },
  {
    id: "150207",
    fullname: "九原区",
    location: {
      lat: 40.61009,
      lng: 109.96718,
    },
  },
  {
    id: "150221",
    fullname: "土默特右旗",
    location: {
      lat: 40.56883,
      lng: 110.52421,
    },
  },
  {
    id: "150222",
    fullname: "固阳县",
    location: {
      lat: 41.03412,
      lng: 110.0607,
    },
  },
  {
    id: "150223",
    fullname: "达尔罕茂明安联合旗",
    location: {
      lat: 41.69854,
      lng: 110.43261,
    },
  },
  {
    id: "150302",
    fullname: "海勃湾区",
    location: {
      lat: 39.69184,
      lng: 106.8226,
    },
  },
  {
    id: "150303",
    fullname: "海南区",
    location: {
      lat: 39.44096,
      lng: 106.89157,
    },
  },
  {
    id: "150304",
    fullname: "乌达区",
    location: {
      lat: 39.5058,
      lng: 106.72609,
    },
  },
  {
    id: "150402",
    fullname: "红山区",
    location: {
      lat: 42.26581,
      lng: 118.95927,
    },
  },
  {
    id: "150403",
    fullname: "元宝山区",
    location: {
      lat: 42.03888,
      lng: 119.28862,
    },
  },
  {
    id: "150404",
    fullname: "松山区",
    location: {
      lat: 42.28727,
      lng: 118.93301,
    },
  },
  {
    id: "150421",
    fullname: "阿鲁科尔沁旗",
    location: {
      lat: 43.87244,
      lng: 120.06556,
    },
  },
  {
    id: "150422",
    fullname: "巴林左旗",
    location: {
      lat: 43.97094,
      lng: 119.37961,
    },
  },
  {
    id: "150423",
    fullname: "巴林右旗",
    location: {
      lat: 43.53391,
      lng: 118.66466,
    },
  },
  {
    id: "150424",
    fullname: "林西县",
    location: {
      lat: 43.61702,
      lng: 118.0558,
    },
  },
  {
    id: "150425",
    fullname: "克什克腾旗",
    location: {
      lat: 43.26624,
      lng: 117.54421,
    },
  },
  {
    id: "150426",
    fullname: "翁牛特旗",
    location: {
      lat: 42.93483,
      lng: 119.00669,
    },
  },
  {
    id: "150428",
    fullname: "喀喇沁旗",
    location: {
      lat: 41.92718,
      lng: 118.70273,
    },
  },
  {
    id: "150429",
    fullname: "宁城县",
    location: {
      lat: 41.59426,
      lng: 119.34308,
    },
  },
  {
    id: "150430",
    fullname: "敖汉旗",
    location: {
      lat: 42.29073,
      lng: 119.92168,
    },
  },
  {
    id: "150502",
    fullname: "科尔沁区",
    location: {
      lat: 43.62244,
      lng: 122.25615,
    },
  },
  {
    id: "150521",
    fullname: "科尔沁左翼中旗",
    location: {
      lat: 44.12659,
      lng: 123.31216,
    },
  },
  {
    id: "150522",
    fullname: "科尔沁左翼后旗",
    location: {
      lat: 42.93511,
      lng: 122.35674,
    },
  },
  {
    id: "150523",
    fullname: "开鲁县",
    location: {
      lat: 43.601321,
      lng: 121.319133,
    },
  },
  {
    id: "150524",
    fullname: "库伦旗",
    location: {
      lat: 42.73504,
      lng: 121.81073,
    },
  },
  {
    id: "150525",
    fullname: "奈曼旗",
    location: {
      lat: 42.86729,
      lng: 120.65779,
    },
  },
  {
    id: "150526",
    fullname: "扎鲁特旗",
    location: {
      lat: 44.55631,
      lng: 120.91159,
    },
  },
  {
    id: "150581",
    fullname: "霍林郭勒市",
    location: {
      lat: 45.53141,
      lng: 119.66359,
    },
  },
  {
    id: "150602",
    fullname: "东胜区",
    location: {
      lat: 39.82127,
      lng: 109.96144,
    },
  },
  {
    id: "150603",
    fullname: "康巴什区",
    location: {
      lat: 39.60837,
      lng: 109.85851,
    },
  },
  {
    id: "150621",
    fullname: "达拉特旗",
    location: {
      lat: 40.40016,
      lng: 110.03293,
    },
  },
  {
    id: "150622",
    fullname: "准格尔旗",
    location: {
      lat: 39.86426,
      lng: 111.23987,
    },
  },
  {
    id: "150623",
    fullname: "鄂托克前旗",
    location: {
      lat: 38.18239,
      lng: 107.47743,
    },
  },
  {
    id: "150624",
    fullname: "鄂托克旗",
    location: {
      lat: 39.08989,
      lng: 107.9776,
    },
  },
  {
    id: "150625",
    fullname: "杭锦旗",
    location: {
      lat: 39.83352,
      lng: 108.73497,
    },
  },
  {
    id: "150626",
    fullname: "乌审旗",
    location: {
      lat: 38.60388,
      lng: 108.81769,
    },
  },
  {
    id: "150627",
    fullname: "伊金霍洛旗",
    location: {
      lat: 39.56442,
      lng: 109.74811,
    },
  },
  {
    id: "150702",
    fullname: "海拉尔区",
    location: {
      lat: 49.21336,
      lng: 119.73572,
    },
  },
  {
    id: "150703",
    fullname: "扎赉诺尔区",
    location: {
      lat: 49.51054,
      lng: 117.66992,
    },
  },
  {
    id: "150721",
    fullname: "阿荣旗",
    location: {
      lat: 48.12582,
      lng: 123.45944,
    },
  },
  {
    id: "150722",
    fullname: "莫力达瓦达斡尔族自治旗",
    location: {
      lat: 48.47711,
      lng: 124.51936,
    },
  },
  {
    id: "150723",
    fullname: "鄂伦春自治旗",
    location: {
      lat: 50.591578,
      lng: 123.725772,
    },
  },
  {
    id: "150724",
    fullname: "鄂温克族自治旗",
    location: {
      lat: 49.14678,
      lng: 119.75542,
    },
  },
  {
    id: "150725",
    fullname: "陈巴尔虎旗",
    location: {
      lat: 49.32837,
      lng: 119.42429,
    },
  },
  {
    id: "150726",
    fullname: "新巴尔虎左旗",
    location: {
      lat: 48.21819,
      lng: 118.26995,
    },
  },
  {
    id: "150727",
    fullname: "新巴尔虎右旗",
    location: {
      lat: 48.67191,
      lng: 116.82355,
    },
  },
  {
    id: "150781",
    fullname: "满洲里市",
    location: {
      lat: 49.59655,
      lng: 117.37836,
    },
  },
  {
    id: "150782",
    fullname: "牙克石市",
    location: {
      lat: 49.285632,
      lng: 120.711738,
    },
  },
  {
    id: "150783",
    fullname: "扎兰屯市",
    location: {
      lat: 48.013651,
      lng: 122.737607,
    },
  },
  {
    id: "150784",
    fullname: "额尔古纳市",
    location: {
      lat: 50.24315,
      lng: 120.17962,
    },
  },
  {
    id: "150785",
    fullname: "根河市",
    location: {
      lat: 50.78046,
      lng: 121.5204,
    },
  },
  {
    id: "150802",
    fullname: "临河区",
    location: {
      lat: 40.76645,
      lng: 107.38683,
    },
  },
  {
    id: "150821",
    fullname: "五原县",
    location: {
      lat: 41.08879,
      lng: 108.2673,
    },
  },
  {
    id: "150822",
    fullname: "磴口县",
    location: {
      lat: 40.33056,
      lng: 107.00864,
    },
  },
  {
    id: "150823",
    fullname: "乌拉特前旗",
    location: {
      lat: 40.73662,
      lng: 108.65224,
    },
  },
  {
    id: "150824",
    fullname: "乌拉特中旗",
    location: {
      lat: 41.56746,
      lng: 108.52647,
    },
  },
  {
    id: "150825",
    fullname: "乌拉特后旗",
    location: {
      lat: 41.08414,
      lng: 107.074659,
    },
  },
  {
    id: "150826",
    fullname: "杭锦后旗",
    location: {
      lat: 40.88594,
      lng: 107.15114,
    },
  },
  {
    id: "150902",
    fullname: "集宁区",
    location: {
      lat: 40.9906,
      lng: 113.12401,
    },
  },
  {
    id: "150921",
    fullname: "卓资县",
    location: {
      lat: 40.89417,
      lng: 112.57785,
    },
  },
  {
    id: "150922",
    fullname: "化德县",
    location: {
      lat: 41.90479,
      lng: 114.01089,
    },
  },
  {
    id: "150923",
    fullname: "商都县",
    location: {
      lat: 41.56215,
      lng: 113.577859,
    },
  },
  {
    id: "150924",
    fullname: "兴和县",
    location: {
      lat: 40.8719,
      lng: 113.83396,
    },
  },
  {
    id: "150925",
    fullname: "凉城县",
    location: {
      lat: 40.53165,
      lng: 112.50387,
    },
  },
  {
    id: "150926",
    fullname: "察哈尔右翼前旗",
    location: {
      lat: 40.78585,
      lng: 113.21095,
    },
  },
  {
    id: "150927",
    fullname: "察哈尔右翼中旗",
    location: {
      lat: 41.27747,
      lng: 112.63544,
    },
  },
  {
    id: "150928",
    fullname: "察哈尔右翼后旗",
    location: {
      lat: 41.43589,
      lng: 113.19222,
    },
  },
  {
    id: "150929",
    fullname: "四子王旗",
    location: {
      lat: 41.53316,
      lng: 111.70658,
    },
  },
  {
    id: "150981",
    fullname: "丰镇市",
    location: {
      lat: 40.43574,
      lng: 113.11056,
    },
  },
  {
    id: "152201",
    fullname: "乌兰浩特市",
    location: {
      lat: 46.07282,
      lng: 122.09316,
    },
  },
  {
    id: "152202",
    fullname: "阿尔山市",
    location: {
      lat: 47.1771,
      lng: 119.94381,
    },
  },
  {
    id: "152221",
    fullname: "科尔沁右翼前旗",
    location: {
      lat: 46.079755,
      lng: 121.952537,
    },
  },
  {
    id: "152222",
    fullname: "科尔沁右翼中旗",
    location: {
      lat: 45.06056,
      lng: 121.47694,
    },
  },
  {
    id: "152223",
    fullname: "扎赉特旗",
    location: {
      lat: 46.72279,
      lng: 122.8998,
    },
  },
  {
    id: "152224",
    fullname: "突泉县",
    location: {
      lat: 45.38282,
      lng: 121.59408,
    },
  },
  {
    id: "152501",
    fullname: "二连浩特市",
    location: {
      lat: 43.64305,
      lng: 111.95238,
    },
  },
  {
    id: "152502",
    fullname: "锡林浩特市",
    location: {
      lat: 43.93339,
      lng: 116.08608,
    },
  },
  {
    id: "152522",
    fullname: "阿巴嘎旗",
    location: {
      lat: 44.02272,
      lng: 114.95034,
    },
  },
  {
    id: "152523",
    fullname: "苏尼特左旗",
    location: {
      lat: 43.85921,
      lng: 113.66737,
    },
  },
  {
    id: "152524",
    fullname: "苏尼特右旗",
    location: {
      lat: 42.74694,
      lng: 112.65746,
    },
  },
  {
    id: "152525",
    fullname: "东乌珠穆沁旗",
    location: {
      lat: 45.5096,
      lng: 116.97215,
    },
  },
  {
    id: "152526",
    fullname: "西乌珠穆沁旗",
    location: {
      lat: 44.58716,
      lng: 117.60899,
    },
  },
  {
    id: "152527",
    fullname: "太仆寺旗",
    location: {
      lat: 41.87732,
      lng: 115.28305,
    },
  },
  {
    id: "152528",
    fullname: "镶黄旗",
    location: {
      lat: 42.23232,
      lng: 113.84751,
    },
  },
  {
    id: "152529",
    fullname: "正镶白旗",
    location: {
      lat: 42.28722,
      lng: 115.03077,
    },
  },
  {
    id: "152530",
    fullname: "正蓝旗",
    location: {
      lat: 42.24162,
      lng: 115.99239,
    },
  },
  {
    id: "152531",
    fullname: "多伦县",
    location: {
      lat: 42.20303,
      lng: 116.48571,
    },
  },
  {
    id: "152921",
    fullname: "阿拉善左旗",
    location: {
      lat: 38.83343,
      lng: 105.66626,
    },
  },
  {
    id: "152922",
    fullname: "阿拉善右旗",
    location: {
      lat: 39.21536,
      lng: 101.66711,
    },
  },
  {
    id: "152923",
    fullname: "额济纳旗",
    location: {
      lat: 41.95449,
      lng: 101.05552,
    },
  },
  {
    id: "210102",
    fullname: "和平区",
    location: {
      lat: 41.78978,
      lng: 123.42056,
    },
  },
  {
    id: "210103",
    fullname: "沈河区",
    location: {
      lat: 41.79607,
      lng: 123.45852,
    },
  },
  {
    id: "210104",
    fullname: "大东区",
    location: {
      lat: 41.80515,
      lng: 123.46987,
    },
  },
  {
    id: "210105",
    fullname: "皇姑区",
    location: {
      lat: 41.82465,
      lng: 123.44168,
    },
  },
  {
    id: "210106",
    fullname: "铁西区",
    location: {
      lat: 41.80283,
      lng: 123.3768,
    },
  },
  {
    id: "210111",
    fullname: "苏家屯区",
    location: {
      lat: 41.66472,
      lng: 123.34432,
    },
  },
  {
    id: "210112",
    fullname: "浑南区",
    location: {
      lat: 41.714907,
      lng: 123.449864,
    },
  },
  {
    id: "210113",
    fullname: "沈北新区",
    location: {
      lat: 41.91303,
      lng: 123.58424,
    },
  },
  {
    id: "210114",
    fullname: "于洪区",
    location: {
      lat: 41.79407,
      lng: 123.30813,
    },
  },
  {
    id: "210115",
    fullname: "辽中区",
    location: {
      lat: 41.51685,
      lng: 122.76549,
    },
  },
  {
    id: "210123",
    fullname: "康平县",
    location: {
      lat: 42.7499,
      lng: 123.35349,
    },
  },
  {
    id: "210124",
    fullname: "法库县",
    location: {
      lat: 42.50403,
      lng: 123.40838,
    },
  },
  {
    id: "210181",
    fullname: "新民市",
    location: {
      lat: 41.99767,
      lng: 122.828,
    },
  },
  {
    id: "210202",
    fullname: "中山区",
    location: {
      lat: 38.91864,
      lng: 121.64511,
    },
  },
  {
    id: "210203",
    fullname: "西岗区",
    location: {
      lat: 38.91478,
      lng: 121.61234,
    },
  },
  {
    id: "210204",
    fullname: "沙河口区",
    location: {
      lat: 38.90463,
      lng: 121.59451,
    },
  },
  {
    id: "210211",
    fullname: "甘井子区",
    location: {
      lat: 38.95223,
      lng: 121.5255,
    },
  },
  {
    id: "210212",
    fullname: "旅顺口区",
    location: {
      lat: 38.85129,
      lng: 121.26208,
    },
  },
  {
    id: "210213",
    fullname: "金州区",
    location: {
      lat: 39.05015,
      lng: 121.78259,
    },
  },
  {
    id: "210214",
    fullname: "普兰店区",
    location: {
      lat: 39.39443,
      lng: 121.96323,
    },
  },
  {
    id: "210224",
    fullname: "长海县",
    location: {
      lat: 39.27276,
      lng: 122.58861,
    },
  },
  {
    id: "210281",
    fullname: "瓦房店市",
    location: {
      lat: 39.62644,
      lng: 121.97995,
    },
  },
  {
    id: "210283",
    fullname: "庄河市",
    location: {
      lat: 39.68037,
      lng: 122.96611,
    },
  },
  {
    id: "210302",
    fullname: "铁东区",
    location: {
      lat: 41.08994,
      lng: 122.9912,
    },
  },
  {
    id: "210303",
    fullname: "铁西区",
    location: {
      lat: 41.11956,
      lng: 122.96939,
    },
  },
  {
    id: "210304",
    fullname: "立山区",
    location: {
      lat: 41.15013,
      lng: 123.02952,
    },
  },
  {
    id: "210311",
    fullname: "千山区",
    location: {
      lat: 41.06462,
      lng: 122.95412,
    },
  },
  {
    id: "210321",
    fullname: "台安县",
    location: {
      lat: 41.41269,
      lng: 122.43591,
    },
  },
  {
    id: "210323",
    fullname: "岫岩满族自治县",
    location: {
      lat: 40.28998,
      lng: 123.28171,
    },
  },
  {
    id: "210381",
    fullname: "海城市",
    location: {
      lat: 40.88145,
      lng: 122.68463,
    },
  },
  {
    id: "210402",
    fullname: "新抚区",
    location: {
      lat: 41.85928,
      lng: 123.87415,
    },
  },
  {
    id: "210403",
    fullname: "东洲区",
    location: {
      lat: 41.85301,
      lng: 124.03923,
    },
  },
  {
    id: "210404",
    fullname: "望花区",
    location: {
      lat: 41.85329,
      lng: 123.78439,
    },
  },
  {
    id: "210411",
    fullname: "顺城区",
    location: {
      lat: 41.88307,
      lng: 123.94513,
    },
  },
  {
    id: "210421",
    fullname: "抚顺县",
    location: {
      lat: 41.78616,
      lng: 124.19596,
    },
  },
  {
    id: "210422",
    fullname: "新宾满族自治县",
    location: {
      lat: 41.73371,
      lng: 125.03979,
    },
  },
  {
    id: "210423",
    fullname: "清原满族自治县",
    location: {
      lat: 42.10038,
      lng: 124.92411,
    },
  },
  {
    id: "210502",
    fullname: "平山区",
    location: {
      lat: 41.22132,
      lng: 123.68338,
    },
  },
  {
    id: "210503",
    fullname: "溪湖区",
    location: {
      lat: 41.32922,
      lng: 123.76759,
    },
  },
  {
    id: "210504",
    fullname: "明山区",
    location: {
      lat: 41.30877,
      lng: 123.81695,
    },
  },
  {
    id: "210505",
    fullname: "南芬区",
    location: {
      lat: 41.10031,
      lng: 123.74509,
    },
  },
  {
    id: "210521",
    fullname: "本溪满族自治县",
    location: {
      lat: 41.3027,
      lng: 124.12193,
    },
  },
  {
    id: "210522",
    fullname: "桓仁满族自治县",
    location: {
      lat: 41.26706,
      lng: 125.36096,
    },
  },
  {
    id: "210602",
    fullname: "元宝区",
    location: {
      lat: 40.13673,
      lng: 124.39582,
    },
  },
  {
    id: "210603",
    fullname: "振兴区",
    location: {
      lat: 40.104933,
      lng: 124.359977,
    },
  },
  {
    id: "210604",
    fullname: "振安区",
    location: {
      lat: 40.15823,
      lng: 124.4282,
    },
  },
  {
    id: "210624",
    fullname: "宽甸满族自治县",
    location: {
      lat: 40.73131,
      lng: 124.78366,
    },
  },
  {
    id: "210681",
    fullname: "东港市",
    location: {
      lat: 39.86172,
      lng: 124.15209,
    },
  },
  {
    id: "210682",
    fullname: "凤城市",
    location: {
      lat: 40.45279,
      lng: 124.06605,
    },
  },
  {
    id: "210702",
    fullname: "古塔区",
    location: {
      lat: 41.11728,
      lng: 121.12834,
    },
  },
  {
    id: "210703",
    fullname: "凌河区",
    location: {
      lat: 41.11512,
      lng: 121.15126,
    },
  },
  {
    id: "210711",
    fullname: "太和区",
    location: {
      lat: 41.10897,
      lng: 121.10378,
    },
  },
  {
    id: "210726",
    fullname: "黑山县",
    location: {
      lat: 41.69391,
      lng: 122.12066,
    },
  },
  {
    id: "210727",
    fullname: "义县",
    location: {
      lat: 41.53311,
      lng: 121.23915,
    },
  },
  {
    id: "210781",
    fullname: "凌海市",
    location: {
      lat: 41.17371,
      lng: 121.35771,
    },
  },
  {
    id: "210782",
    fullname: "北镇市",
    location: {
      lat: 41.59465,
      lng: 121.79854,
    },
  },
  {
    id: "210802",
    fullname: "站前区",
    location: {
      lat: 40.67296,
      lng: 122.25999,
    },
  },
  {
    id: "210803",
    fullname: "西市区",
    location: {
      lat: 40.66629,
      lng: 122.20646,
    },
  },
  {
    id: "210804",
    fullname: "鲅鱼圈区",
    location: {
      lat: 40.22675,
      lng: 122.12169,
    },
  },
  {
    id: "210811",
    fullname: "老边区",
    location: {
      lat: 40.68038,
      lng: 122.37968,
    },
  },
  {
    id: "210881",
    fullname: "盖州市",
    location: {
      lat: 40.40053,
      lng: 122.3488,
    },
  },
  {
    id: "210882",
    fullname: "大石桥市",
    location: {
      lat: 40.64448,
      lng: 122.50917,
    },
  },
  {
    id: "210902",
    fullname: "海州区",
    location: {
      lat: 42.01332,
      lng: 121.65617,
    },
  },
  {
    id: "210903",
    fullname: "新邱区",
    location: {
      lat: 42.08742,
      lng: 121.79232,
    },
  },
  {
    id: "210904",
    fullname: "太平区",
    location: {
      lat: 42.01072,
      lng: 121.67865,
    },
  },
  {
    id: "210905",
    fullname: "清河门区",
    location: {
      lat: 41.78306,
      lng: 121.41614,
    },
  },
  {
    id: "210911",
    fullname: "细河区",
    location: {
      lat: 42.02539,
      lng: 121.68008,
    },
  },
  {
    id: "210921",
    fullname: "阜新蒙古族自治县",
    location: {
      lat: 42.06514,
      lng: 121.75791,
    },
  },
  {
    id: "210922",
    fullname: "彰武县",
    location: {
      lat: 42.38649,
      lng: 122.53889,
    },
  },
  {
    id: "211002",
    fullname: "白塔区",
    location: {
      lat: 41.27031,
      lng: 123.17424,
    },
  },
  {
    id: "211003",
    fullname: "文圣区",
    location: {
      lat: 41.26776,
      lng: 123.23699,
    },
  },
  {
    id: "211004",
    fullname: "宏伟区",
    location: {
      lat: 41.21725,
      lng: 123.19637,
    },
  },
  {
    id: "211005",
    fullname: "弓长岭区",
    location: {
      lat: 41.15171,
      lng: 123.42052,
    },
  },
  {
    id: "211011",
    fullname: "太子河区",
    location: {
      lat: 41.29225,
      lng: 123.13278,
    },
  },
  {
    id: "211021",
    fullname: "辽阳县",
    location: {
      lat: 41.20546,
      lng: 123.10578,
    },
  },
  {
    id: "211081",
    fullname: "灯塔市",
    location: {
      lat: 41.42616,
      lng: 123.3393,
    },
  },
  {
    id: "211102",
    fullname: "双台子区",
    location: {
      lat: 41.19049,
      lng: 122.06017,
    },
  },
  {
    id: "211103",
    fullname: "兴隆台区",
    location: {
      lat: 41.13876,
      lng: 122.10558,
    },
  },
  {
    id: "211104",
    fullname: "大洼区",
    location: {
      lat: 41.00247,
      lng: 122.08245,
    },
  },
  {
    id: "211122",
    fullname: "盘山县",
    location: {
      lat: 41.24265,
      lng: 121.9963,
    },
  },
  {
    id: "211202",
    fullname: "银州区",
    location: {
      lat: 42.2862,
      lng: 123.84241,
    },
  },
  {
    id: "211204",
    fullname: "清河区",
    location: {
      lat: 42.54682,
      lng: 124.15916,
    },
  },
  {
    id: "211221",
    fullname: "铁岭县",
    location: {
      lat: 42.22284,
      lng: 123.72783,
    },
  },
  {
    id: "211223",
    fullname: "西丰县",
    location: {
      lat: 42.73835,
      lng: 124.72734,
    },
  },
  {
    id: "211224",
    fullname: "昌图县",
    location: {
      lat: 42.78613,
      lng: 124.11092,
    },
  },
  {
    id: "211281",
    fullname: "调兵山市",
    location: {
      lat: 42.46755,
      lng: 123.5669,
    },
  },
  {
    id: "211282",
    fullname: "开原市",
    location: {
      lat: 42.54645,
      lng: 124.0382,
    },
  },
  {
    id: "211302",
    fullname: "双塔区",
    location: {
      lat: 41.5657,
      lng: 120.45372,
    },
  },
  {
    id: "211303",
    fullname: "龙城区",
    location: {
      lat: 41.59973,
      lng: 120.41555,
    },
  },
  {
    id: "211321",
    fullname: "朝阳县",
    location: {
      lat: 41.36782,
      lng: 120.29592,
    },
  },
  {
    id: "211322",
    fullname: "建平县",
    location: {
      lat: 41.4032,
      lng: 119.64396,
    },
  },
  {
    id: "211324",
    fullname: "喀喇沁左翼蒙古族自治县",
    location: {
      lat: 41.12738,
      lng: 119.74048,
    },
  },
  {
    id: "211381",
    fullname: "北票市",
    location: {
      lat: 41.8008,
      lng: 120.77091,
    },
  },
  {
    id: "211382",
    fullname: "凌源市",
    location: {
      lat: 41.24548,
      lng: 119.40134,
    },
  },
  {
    id: "211402",
    fullname: "连山区",
    location: {
      lat: 40.77526,
      lng: 120.86908,
    },
  },
  {
    id: "211403",
    fullname: "龙港区",
    location: {
      lat: 40.73545,
      lng: 120.89393,
    },
  },
  {
    id: "211404",
    fullname: "南票区",
    location: {
      lat: 41.10714,
      lng: 120.74985,
    },
  },
  {
    id: "211421",
    fullname: "绥中县",
    location: {
      lat: 40.32565,
      lng: 120.34431,
    },
  },
  {
    id: "211422",
    fullname: "建昌县",
    location: {
      lat: 40.82408,
      lng: 119.83715,
    },
  },
  {
    id: "211481",
    fullname: "兴城市",
    location: {
      lat: 40.61018,
      lng: 120.75619,
    },
  },
  {
    id: "220102",
    fullname: "南关区",
    location: {
      lat: 43.86414,
      lng: 125.35043,
    },
  },
  {
    id: "220103",
    fullname: "宽城区",
    location: {
      lat: 43.94288,
      lng: 125.32615,
    },
  },
  {
    id: "220104",
    fullname: "朝阳区",
    location: {
      lat: 43.83327,
      lng: 125.28845,
    },
  },
  {
    id: "220105",
    fullname: "二道区",
    location: {
      lat: 43.86497,
      lng: 125.37427,
    },
  },
  {
    id: "220106",
    fullname: "绿园区",
    location: {
      lat: 43.88041,
      lng: 125.25606,
    },
  },
  {
    id: "220112",
    fullname: "双阳区",
    location: {
      lat: 43.52503,
      lng: 125.66464,
    },
  },
  {
    id: "220113",
    fullname: "九台区",
    location: {
      lat: 44.15174,
      lng: 125.83949,
    },
  },
  {
    id: "220122",
    fullname: "农安县",
    location: {
      lat: 44.43195,
      lng: 125.18512,
    },
  },
  {
    id: "220182",
    fullname: "榆树市",
    location: {
      lat: 44.83989,
      lng: 126.533,
    },
  },
  {
    id: "220183",
    fullname: "德惠市",
    location: {
      lat: 44.53709,
      lng: 125.70558,
    },
  },
  {
    id: "220184",
    fullname: "公主岭市",
    location: {
      lat: 43.50468,
      lng: 124.8228,
    },
  },
  {
    id: "220202",
    fullname: "昌邑区",
    location: {
      lat: 43.88187,
      lng: 126.57436,
    },
  },
  {
    id: "220203",
    fullname: "龙潭区",
    location: {
      lat: 43.9106,
      lng: 126.56223,
    },
  },
  {
    id: "220204",
    fullname: "船营区",
    location: {
      lat: 43.83395,
      lng: 126.54113,
    },
  },
  {
    id: "220211",
    fullname: "丰满区",
    location: {
      lat: 43.82142,
      lng: 126.56206,
    },
  },
  {
    id: "220221",
    fullname: "永吉县",
    location: {
      lat: 43.67253,
      lng: 126.49754,
    },
  },
  {
    id: "220281",
    fullname: "蛟河市",
    location: {
      lat: 43.72393,
      lng: 127.34477,
    },
  },
  {
    id: "220282",
    fullname: "桦甸市",
    location: {
      lat: 42.97208,
      lng: 126.74627,
    },
  },
  {
    id: "220283",
    fullname: "舒兰市",
    location: {
      lat: 44.40586,
      lng: 126.96532,
    },
  },
  {
    id: "220284",
    fullname: "磐石市",
    location: {
      lat: 42.94662,
      lng: 126.06046,
    },
  },
  {
    id: "220302",
    fullname: "铁西区",
    location: {
      lat: 43.14635,
      lng: 124.34515,
    },
  },
  {
    id: "220303",
    fullname: "铁东区",
    location: {
      lat: 43.16208,
      lng: 124.40946,
    },
  },
  {
    id: "220322",
    fullname: "梨树县",
    location: {
      lat: 43.30717,
      lng: 124.33564,
    },
  },
  {
    id: "220323",
    fullname: "伊通满族自治县",
    location: {
      lat: 43.34494,
      lng: 125.30536,
    },
  },
  {
    id: "220382",
    fullname: "双辽市",
    location: {
      lat: 43.51845,
      lng: 123.50296,
    },
  },
  {
    id: "220402",
    fullname: "龙山区",
    location: {
      lat: 42.9015,
      lng: 125.13682,
    },
  },
  {
    id: "220403",
    fullname: "西安区",
    location: {
      lat: 42.92689,
      lng: 125.14922,
    },
  },
  {
    id: "220421",
    fullname: "东丰县",
    location: {
      lat: 42.677039,
      lng: 125.530558,
    },
  },
  {
    id: "220422",
    fullname: "东辽县",
    location: {
      lat: 42.92636,
      lng: 124.99162,
    },
  },
  {
    id: "220502",
    fullname: "东昌区",
    location: {
      lat: 41.7285,
      lng: 125.95513,
    },
  },
  {
    id: "220503",
    fullname: "二道江区",
    location: {
      lat: 41.7742,
      lng: 126.04262,
    },
  },
  {
    id: "220521",
    fullname: "通化县",
    location: {
      lat: 41.67929,
      lng: 125.7594,
    },
  },
  {
    id: "220523",
    fullname: "辉南县",
    location: {
      lat: 42.68499,
      lng: 126.04687,
    },
  },
  {
    id: "220524",
    fullname: "柳河县",
    location: {
      lat: 42.2847,
      lng: 125.74478,
    },
  },
  {
    id: "220581",
    fullname: "梅河口市",
    location: {
      lat: 42.53873,
      lng: 125.7121,
    },
  },
  {
    id: "220582",
    fullname: "集安市",
    location: {
      lat: 41.12622,
      lng: 126.19269,
    },
  },
  {
    id: "220602",
    fullname: "浑江区",
    location: {
      lat: 41.94507,
      lng: 126.417,
    },
  },
  {
    id: "220605",
    fullname: "江源区",
    location: {
      lat: 42.05665,
      lng: 126.59088,
    },
  },
  {
    id: "220621",
    fullname: "抚松县",
    location: {
      lat: 42.34202,
      lng: 127.28036,
    },
  },
  {
    id: "220622",
    fullname: "靖宇县",
    location: {
      lat: 42.38872,
      lng: 126.81329,
    },
  },
  {
    id: "220623",
    fullname: "长白朝鲜族自治县",
    location: {
      lat: 41.41997,
      lng: 128.2005,
    },
  },
  {
    id: "220681",
    fullname: "临江市",
    location: {
      lat: 41.81193,
      lng: 126.91798,
    },
  },
  {
    id: "220702",
    fullname: "宁江区",
    location: {
      lat: 45.17185,
      lng: 124.81698,
    },
  },
  {
    id: "220721",
    fullname: "前郭尔罗斯蒙古族自治县",
    location: {
      lat: 45.1173,
      lng: 124.82357,
    },
  },
  {
    id: "220722",
    fullname: "长岭县",
    location: {
      lat: 44.27591,
      lng: 123.9673,
    },
  },
  {
    id: "220723",
    fullname: "乾安县",
    location: {
      lat: 45.00457,
      lng: 124.02797,
    },
  },
  {
    id: "220781",
    fullname: "扶余市",
    location: {
      lat: 44.99014,
      lng: 126.04972,
    },
  },
  {
    id: "220802",
    fullname: "洮北区",
    location: {
      lat: 45.6216,
      lng: 122.85111,
    },
  },
  {
    id: "220821",
    fullname: "镇赉县",
    location: {
      lat: 45.84825,
      lng: 123.19987,
    },
  },
  {
    id: "220822",
    fullname: "通榆县",
    location: {
      lat: 44.81296,
      lng: 123.08831,
    },
  },
  {
    id: "220881",
    fullname: "洮南市",
    location: {
      lat: 45.33559,
      lng: 122.78635,
    },
  },
  {
    id: "220882",
    fullname: "大安市",
    location: {
      lat: 45.50711,
      lng: 124.29252,
    },
  },
  {
    id: "222401",
    fullname: "延吉市",
    location: {
      lat: 42.89107,
      lng: 129.5091,
    },
  },
  {
    id: "222402",
    fullname: "图们市",
    location: {
      lat: 42.96805,
      lng: 129.8439,
    },
  },
  {
    id: "222403",
    fullname: "敦化市",
    location: {
      lat: 43.37278,
      lng: 128.23109,
    },
  },
  {
    id: "222404",
    fullname: "珲春市",
    location: {
      lat: 42.86249,
      lng: 130.36577,
    },
  },
  {
    id: "222405",
    fullname: "龙井市",
    location: {
      lat: 42.76587,
      lng: 129.42641,
    },
  },
  {
    id: "222406",
    fullname: "和龙市",
    location: {
      lat: 42.54641,
      lng: 129.01079,
    },
  },
  {
    id: "222424",
    fullname: "汪清县",
    location: {
      lat: 43.31281,
      lng: 129.77125,
    },
  },
  {
    id: "222426",
    fullname: "安图县",
    location: {
      lat: 43.11166,
      lng: 128.8992,
    },
  },
  {
    id: "230102",
    fullname: "道里区",
    location: {
      lat: 45.75567,
      lng: 126.61686,
    },
  },
  {
    id: "230103",
    fullname: "南岗区",
    location: {
      lat: 45.76021,
      lng: 126.66837,
    },
  },
  {
    id: "230104",
    fullname: "道外区",
    location: {
      lat: 45.79201,
      lng: 126.64932,
    },
  },
  {
    id: "230108",
    fullname: "平房区",
    location: {
      lat: 45.59799,
      lng: 126.63768,
    },
  },
  {
    id: "230109",
    fullname: "松北区",
    location: {
      lat: 45.80825,
      lng: 126.56279,
    },
  },
  {
    id: "230110",
    fullname: "香坊区",
    location: {
      lat: 45.70847,
      lng: 126.66287,
    },
  },
  {
    id: "230111",
    fullname: "呼兰区",
    location: {
      lat: 45.888981,
      lng: 126.587961,
    },
  },
  {
    id: "230112",
    fullname: "阿城区",
    location: {
      lat: 45.54774,
      lng: 126.95717,
    },
  },
  {
    id: "230113",
    fullname: "双城区",
    location: {
      lat: 45.38355,
      lng: 126.31227,
    },
  },
  {
    id: "230123",
    fullname: "依兰县",
    location: {
      lat: 46.32489,
      lng: 129.56859,
    },
  },
  {
    id: "230124",
    fullname: "方正县",
    location: {
      lat: 45.85253,
      lng: 128.82707,
    },
  },
  {
    id: "230125",
    fullname: "宾县",
    location: {
      lat: 45.75864,
      lng: 127.48586,
    },
  },
  {
    id: "230126",
    fullname: "巴彦县",
    location: {
      lat: 46.08536,
      lng: 127.4035,
    },
  },
  {
    id: "230127",
    fullname: "木兰县",
    location: {
      lat: 45.95038,
      lng: 128.04392,
    },
  },
  {
    id: "230128",
    fullname: "通河县",
    location: {
      lat: 45.9901,
      lng: 128.74607,
    },
  },
  {
    id: "230129",
    fullname: "延寿县",
    location: {
      lat: 45.4519,
      lng: 128.33162,
    },
  },
  {
    id: "230183",
    fullname: "尚志市",
    location: {
      lat: 45.21102,
      lng: 127.96027,
    },
  },
  {
    id: "230184",
    fullname: "五常市",
    location: {
      lat: 44.93191,
      lng: 127.16746,
    },
  },
  {
    id: "230202",
    fullname: "龙沙区",
    location: {
      lat: 47.31742,
      lng: 123.95763,
    },
  },
  {
    id: "230203",
    fullname: "建华区",
    location: {
      lat: 47.35434,
      lng: 123.95546,
    },
  },
  {
    id: "230204",
    fullname: "铁锋区",
    location: {
      lat: 47.34076,
      lng: 123.97807,
    },
  },
  {
    id: "230205",
    fullname: "昂昂溪区",
    location: {
      lat: 47.15517,
      lng: 123.82234,
    },
  },
  {
    id: "230206",
    fullname: "富拉尔基区",
    location: {
      lat: 47.2089,
      lng: 123.62937,
    },
  },
  {
    id: "230207",
    fullname: "碾子山区",
    location: {
      lat: 47.51698,
      lng: 122.88777,
    },
  },
  {
    id: "230208",
    fullname: "梅里斯达斡尔族区",
    location: {
      lat: 47.3095,
      lng: 123.75281,
    },
  },
  {
    id: "230221",
    fullname: "龙江县",
    location: {
      lat: 47.33737,
      lng: 123.20483,
    },
  },
  {
    id: "230223",
    fullname: "依安县",
    location: {
      lat: 47.89349,
      lng: 125.30621,
    },
  },
  {
    id: "230224",
    fullname: "泰来县",
    location: {
      lat: 46.39389,
      lng: 123.41738,
    },
  },
  {
    id: "230225",
    fullname: "甘南县",
    location: {
      lat: 47.92037,
      lng: 123.50624,
    },
  },
  {
    id: "230227",
    fullname: "富裕县",
    location: {
      lat: 47.77533,
      lng: 124.47387,
    },
  },
  {
    id: "230229",
    fullname: "克山县",
    location: {
      lat: 48.03694,
      lng: 125.87561,
    },
  },
  {
    id: "230230",
    fullname: "克东县",
    location: {
      lat: 48.04167,
      lng: 126.24871,
    },
  },
  {
    id: "230231",
    fullname: "拜泉县",
    location: {
      lat: 47.59569,
      lng: 126.10005,
    },
  },
  {
    id: "230281",
    fullname: "讷河市",
    location: {
      lat: 48.48419,
      lng: 124.88397,
    },
  },
  {
    id: "230302",
    fullname: "鸡冠区",
    location: {
      lat: 45.30412,
      lng: 130.98084,
    },
  },
  {
    id: "230303",
    fullname: "恒山区",
    location: {
      lat: 45.21072,
      lng: 130.90499,
    },
  },
  {
    id: "230304",
    fullname: "滴道区",
    location: {
      lat: 45.34872,
      lng: 130.84367,
    },
  },
  {
    id: "230305",
    fullname: "梨树区",
    location: {
      lat: 45.09203,
      lng: 130.69708,
    },
  },
  {
    id: "230306",
    fullname: "城子河区",
    location: {
      lat: 45.33693,
      lng: 131.01136,
    },
  },
  {
    id: "230307",
    fullname: "麻山区",
    location: {
      lat: 45.21213,
      lng: 130.47817,
    },
  },
  {
    id: "230321",
    fullname: "鸡东县",
    location: {
      lat: 45.26002,
      lng: 131.12408,
    },
  },
  {
    id: "230381",
    fullname: "虎林市",
    location: {
      lat: 45.76267,
      lng: 132.93695,
    },
  },
  {
    id: "230382",
    fullname: "密山市",
    location: {
      lat: 45.52975,
      lng: 131.84631,
    },
  },
  {
    id: "230402",
    fullname: "向阳区",
    location: {
      lat: 47.34254,
      lng: 130.2943,
    },
  },
  {
    id: "230403",
    fullname: "工农区",
    location: {
      lat: 47.31872,
      lng: 130.27482,
    },
  },
  {
    id: "230404",
    fullname: "南山区",
    location: {
      lat: 47.31506,
      lng: 130.28714,
    },
  },
  {
    id: "230405",
    fullname: "兴安区",
    location: {
      lat: 47.25286,
      lng: 130.23924,
    },
  },
  {
    id: "230406",
    fullname: "东山区",
    location: {
      lat: 47.33872,
      lng: 130.31755,
    },
  },
  {
    id: "230407",
    fullname: "兴山区",
    location: {
      lat: 47.3846,
      lng: 130.33302,
    },
  },
  {
    id: "230421",
    fullname: "萝北县",
    location: {
      lat: 47.57752,
      lng: 130.8286,
    },
  },
  {
    id: "230422",
    fullname: "绥滨县",
    location: {
      lat: 47.28906,
      lng: 131.85224,
    },
  },
  {
    id: "230502",
    fullname: "尖山区",
    location: {
      lat: 46.64618,
      lng: 131.1584,
    },
  },
  {
    id: "230503",
    fullname: "岭东区",
    location: {
      lat: 46.54464,
      lng: 131.15214,
    },
  },
  {
    id: "230505",
    fullname: "四方台区",
    location: {
      lat: 46.59426,
      lng: 131.33446,
    },
  },
  {
    id: "230506",
    fullname: "宝山区",
    location: {
      lat: 46.57727,
      lng: 131.40178,
    },
  },
  {
    id: "230521",
    fullname: "集贤县",
    location: {
      lat: 46.72844,
      lng: 131.14115,
    },
  },
  {
    id: "230522",
    fullname: "友谊县",
    location: {
      lat: 46.76743,
      lng: 131.80795,
    },
  },
  {
    id: "230523",
    fullname: "宝清县",
    location: {
      lat: 46.32695,
      lng: 132.19708,
    },
  },
  {
    id: "230524",
    fullname: "饶河县",
    location: {
      lat: 46.7982,
      lng: 134.01324,
    },
  },
  {
    id: "230602",
    fullname: "萨尔图区",
    location: {
      lat: 46.60302,
      lng: 125.05422,
    },
  },
  {
    id: "230603",
    fullname: "龙凤区",
    location: {
      lat: 46.56182,
      lng: 125.13415,
    },
  },
  {
    id: "230604",
    fullname: "让胡路区",
    location: {
      lat: 46.65225,
      lng: 124.87083,
    },
  },
  {
    id: "230605",
    fullname: "红岗区",
    location: {
      lat: 46.39818,
      lng: 124.89082,
    },
  },
  {
    id: "230606",
    fullname: "大同区",
    location: {
      lat: 46.03904,
      lng: 124.81056,
    },
  },
  {
    id: "230621",
    fullname: "肇州县",
    location: {
      lat: 45.69886,
      lng: 125.26859,
    },
  },
  {
    id: "230622",
    fullname: "肇源县",
    location: {
      lat: 45.5183,
      lng: 125.07795,
    },
  },
  {
    id: "230623",
    fullname: "林甸县",
    location: {
      lat: 47.18298,
      lng: 124.8713,
    },
  },
  {
    id: "230624",
    fullname: "杜尔伯特蒙古族自治县",
    location: {
      lat: 46.862273,
      lng: 124.442793,
    },
  },
  {
    id: "230717",
    fullname: "伊美区",
    location: {
      lat: 47.728208,
      lng: 128.907302,
    },
  },
  {
    id: "230718",
    fullname: "乌翠区",
    location: {
      lat: 47.726495,
      lng: 128.66945,
    },
  },
  {
    id: "230719",
    fullname: "友好区",
    location: {
      lat: 47.8538,
      lng: 128.84071,
    },
  },
  {
    id: "230722",
    fullname: "嘉荫县",
    location: {
      lat: 48.88942,
      lng: 130.40308,
    },
  },
  {
    id: "230723",
    fullname: "汤旺县",
    location: {
      lat: 48.45469,
      lng: 129.57097,
    },
  },
  {
    id: "230724",
    fullname: "丰林县",
    location: {
      lat: 48.29045,
      lng: 129.53362,
    },
  },
  {
    id: "230725",
    fullname: "大箐山县",
    location: {
      lat: 47.02834,
      lng: 129.02057,
    },
  },
  {
    id: "230726",
    fullname: "南岔县",
    location: {
      lat: 47.13799,
      lng: 129.28365,
    },
  },
  {
    id: "230751",
    fullname: "金林区",
    location: {
      lat: 47.41303,
      lng: 129.42899,
    },
  },
  {
    id: "230781",
    fullname: "铁力市",
    location: {
      lat: 46.98664,
      lng: 128.03243,
    },
  },
  {
    id: "230803",
    fullname: "向阳区",
    location: {
      lat: 46.80774,
      lng: 130.36547,
    },
  },
  {
    id: "230804",
    fullname: "前进区",
    location: {
      lat: 46.81409,
      lng: 130.37525,
    },
  },
  {
    id: "230805",
    fullname: "东风区",
    location: {
      lat: 46.82252,
      lng: 130.40368,
    },
  },
  {
    id: "230811",
    fullname: "郊区",
    location: {
      lat: 46.80975,
      lng: 130.32707,
    },
  },
  {
    id: "230822",
    fullname: "桦南县",
    location: {
      lat: 46.23925,
      lng: 130.55366,
    },
  },
  {
    id: "230826",
    fullname: "桦川县",
    location: {
      lat: 47.023,
      lng: 130.71898,
    },
  },
  {
    id: "230828",
    fullname: "汤原县",
    location: {
      lat: 46.73068,
      lng: 129.90495,
    },
  },
  {
    id: "230881",
    fullname: "同江市",
    location: {
      lat: 47.64213,
      lng: 132.51101,
    },
  },
  {
    id: "230882",
    fullname: "富锦市",
    location: {
      lat: 47.25022,
      lng: 132.03728,
    },
  },
  {
    id: "230883",
    fullname: "抚远市",
    location: {
      lat: 48.36485,
      lng: 134.30795,
    },
  },
  {
    id: "230902",
    fullname: "新兴区",
    location: {
      lat: 45.81597,
      lng: 130.9321,
    },
  },
  {
    id: "230903",
    fullname: "桃山区",
    location: {
      lat: 45.76554,
      lng: 131.02,
    },
  },
  {
    id: "230904",
    fullname: "茄子河区",
    location: {
      lat: 45.78487,
      lng: 131.06693,
    },
  },
  {
    id: "230921",
    fullname: "勃利县",
    location: {
      lat: 45.75506,
      lng: 130.59144,
    },
  },
  {
    id: "231002",
    fullname: "东安区",
    location: {
      lat: 44.58122,
      lng: 129.62672,
    },
  },
  {
    id: "231003",
    fullname: "阳明区",
    location: {
      lat: 44.5963,
      lng: 129.63559,
    },
  },
  {
    id: "231004",
    fullname: "爱民区",
    location: {
      lat: 44.59608,
      lng: 129.59176,
    },
  },
  {
    id: "231005",
    fullname: "西安区",
    location: {
      lat: 44.5775,
      lng: 129.6161,
    },
  },
  {
    id: "231025",
    fullname: "林口县",
    location: {
      lat: 45.27782,
      lng: 130.28315,
    },
  },
  {
    id: "231081",
    fullname: "绥芬河市",
    location: {
      lat: 44.4132,
      lng: 131.15012,
    },
  },
  {
    id: "231083",
    fullname: "海林市",
    location: {
      lat: 44.59378,
      lng: 129.38064,
    },
  },
  {
    id: "231084",
    fullname: "宁安市",
    location: {
      lat: 44.34018,
      lng: 129.4828,
    },
  },
  {
    id: "231085",
    fullname: "穆棱市",
    location: {
      lat: 44.91883,
      lng: 130.52468,
    },
  },
  {
    id: "231086",
    fullname: "东宁市",
    location: {
      lat: 44.08694,
      lng: 131.12463,
    },
  },
  {
    id: "231102",
    fullname: "爱辉区",
    location: {
      lat: 50.2521,
      lng: 127.50048,
    },
  },
  {
    id: "231123",
    fullname: "逊克县",
    location: {
      lat: 49.56437,
      lng: 128.47871,
    },
  },
  {
    id: "231124",
    fullname: "孙吴县",
    location: {
      lat: 49.42543,
      lng: 127.33605,
    },
  },
  {
    id: "231181",
    fullname: "北安市",
    location: {
      lat: 48.241459,
      lng: 126.491079,
    },
  },
  {
    id: "231182",
    fullname: "五大连池市",
    location: {
      lat: 48.51649,
      lng: 126.20451,
    },
  },
  {
    id: "231183",
    fullname: "嫩江市",
    location: {
      lat: 49.18572,
      lng: 125.22094,
    },
  },
  {
    id: "231202",
    fullname: "北林区",
    location: {
      lat: 46.6373,
      lng: 126.98566,
    },
  },
  {
    id: "231221",
    fullname: "望奎县",
    location: {
      lat: 46.83281,
      lng: 126.48602,
    },
  },
  {
    id: "231222",
    fullname: "兰西县",
    location: {
      lat: 46.25241,
      lng: 126.28788,
    },
  },
  {
    id: "231223",
    fullname: "青冈县",
    location: {
      lat: 46.68966,
      lng: 126.11387,
    },
  },
  {
    id: "231224",
    fullname: "庆安县",
    location: {
      lat: 46.8802,
      lng: 127.50758,
    },
  },
  {
    id: "231225",
    fullname: "明水县",
    location: {
      lat: 47.17332,
      lng: 125.906,
    },
  },
  {
    id: "231226",
    fullname: "绥棱县",
    location: {
      lat: 47.23609,
      lng: 127.11478,
    },
  },
  {
    id: "231281",
    fullname: "安达市",
    location: {
      lat: 46.41773,
      lng: 125.34379,
    },
  },
  {
    id: "231282",
    fullname: "肇东市",
    location: {
      lat: 46.05121,
      lng: 125.9625,
    },
  },
  {
    id: "231283",
    fullname: "海伦市",
    location: {
      lat: 47.4621,
      lng: 126.97338,
    },
  },
  {
    id: "232701",
    fullname: "漠河市",
    location: {
      lat: 52.97209,
      lng: 122.53864,
    },
  },
  {
    id: "232721",
    fullname: "呼玛县",
    location: {
      lat: 51.72606,
      lng: 126.65291,
    },
  },
  {
    id: "232722",
    fullname: "塔河县",
    location: {
      lat: 52.33432,
      lng: 124.71003,
    },
  },
  {
    id: "232761",
    fullname: "加格达奇区",
    location: {
      lat: 50.40856,
      lng: 124.13956,
    },
  },
  {
    id: "320102",
    fullname: "玄武区",
    location: {
      lat: 32.04835,
      lng: 118.79809,
    },
  },
  {
    id: "320104",
    fullname: "秦淮区",
    location: {
      lat: 32.03899,
      lng: 118.7945,
    },
  },
  {
    id: "320105",
    fullname: "建邺区",
    location: {
      lat: 32.00335,
      lng: 118.73145,
    },
  },
  {
    id: "320106",
    fullname: "鼓楼区",
    location: {
      lat: 32.06639,
      lng: 118.77013,
    },
  },
  {
    id: "320111",
    fullname: "浦口区",
    location: {
      lat: 32.059,
      lng: 118.62841,
    },
  },
  {
    id: "320113",
    fullname: "栖霞区",
    location: {
      lat: 32.09636,
      lng: 118.90907,
    },
  },
  {
    id: "320114",
    fullname: "雨花台区",
    location: {
      lat: 31.992263,
      lng: 118.778734,
    },
  },
  {
    id: "320115",
    fullname: "江宁区",
    location: {
      lat: 31.95266,
      lng: 118.84002,
    },
  },
  {
    id: "320116",
    fullname: "六合区",
    location: {
      lat: 32.32222,
      lng: 118.82155,
    },
  },
  {
    id: "320117",
    fullname: "溧水区",
    location: {
      lat: 31.651,
      lng: 119.0284,
    },
  },
  {
    id: "320118",
    fullname: "高淳区",
    location: {
      lat: 31.32751,
      lng: 118.8921,
    },
  },
  {
    id: "320205",
    fullname: "锡山区",
    location: {
      lat: 31.58849,
      lng: 120.35761,
    },
  },
  {
    id: "320206",
    fullname: "惠山区",
    location: {
      lat: 31.68096,
      lng: 120.29834,
    },
  },
  {
    id: "320211",
    fullname: "滨湖区",
    location: {
      lat: 31.52853,
      lng: 120.28429,
    },
  },
  {
    id: "320213",
    fullname: "梁溪区",
    location: {
      lat: 31.56597,
      lng: 120.30297,
    },
  },
  {
    id: "320214",
    fullname: "新吴区",
    location: {
      lat: 31.49055,
      lng: 120.36434,
    },
  },
  {
    id: "320281",
    fullname: "江阴市",
    location: {
      lat: 31.91919,
      lng: 120.28432,
    },
  },
  {
    id: "320282",
    fullname: "宜兴市",
    location: {
      lat: 31.34042,
      lng: 119.82346,
    },
  },
  {
    id: "320302",
    fullname: "鼓楼区",
    location: {
      lat: 34.28823,
      lng: 117.18554,
    },
  },
  {
    id: "320303",
    fullname: "云龙区",
    location: {
      lat: 34.253057,
      lng: 117.251472,
    },
  },
  {
    id: "320305",
    fullname: "贾汪区",
    location: {
      lat: 34.44308,
      lng: 117.45353,
    },
  },
  {
    id: "320311",
    fullname: "泉山区",
    location: {
      lat: 34.22565,
      lng: 117.19425,
    },
  },
  {
    id: "320312",
    fullname: "铜山区",
    location: {
      lat: 34.18044,
      lng: 117.16898,
    },
  },
  {
    id: "320321",
    fullname: "丰县",
    location: {
      lat: 34.693946,
      lng: 116.595252,
    },
  },
  {
    id: "320322",
    fullname: "沛县",
    location: {
      lat: 34.72166,
      lng: 116.9375,
    },
  },
  {
    id: "320324",
    fullname: "睢宁县",
    location: {
      lat: 33.91274,
      lng: 117.94108,
    },
  },
  {
    id: "320381",
    fullname: "新沂市",
    location: {
      lat: 34.36927,
      lng: 118.35548,
    },
  },
  {
    id: "320382",
    fullname: "邳州市",
    location: {
      lat: 34.3352,
      lng: 118.01246,
    },
  },
  {
    id: "320402",
    fullname: "天宁区",
    location: {
      lat: 31.77973,
      lng: 119.97472,
    },
  },
  {
    id: "320404",
    fullname: "钟楼区",
    location: {
      lat: 31.80164,
      lng: 119.90143,
    },
  },
  {
    id: "320411",
    fullname: "新北区",
    location: {
      lat: 31.83052,
      lng: 119.97147,
    },
  },
  {
    id: "320412",
    fullname: "武进区",
    location: {
      lat: 31.70165,
      lng: 119.94311,
    },
  },
  {
    id: "320413",
    fullname: "金坛区",
    location: {
      lat: 31.72322,
      lng: 119.59794,
    },
  },
  {
    id: "320481",
    fullname: "溧阳市",
    location: {
      lat: 31.41586,
      lng: 119.4846,
    },
  },
  {
    id: "320505",
    fullname: "虎丘区",
    location: {
      lat: 31.29579,
      lng: 120.57186,
    },
  },
  {
    id: "320506",
    fullname: "吴中区",
    location: {
      lat: 31.26249,
      lng: 120.63212,
    },
  },
  {
    id: "320507",
    fullname: "相城区",
    location: {
      lat: 31.36897,
      lng: 120.64247,
    },
  },
  {
    id: "320508",
    fullname: "姑苏区",
    location: {
      lat: 31.30227,
      lng: 120.63132,
    },
  },
  {
    id: "320509",
    fullname: "吴江区",
    location: {
      lat: 31.13914,
      lng: 120.64517,
    },
  },
  {
    id: "320581",
    fullname: "常熟市",
    location: {
      lat: 31.65381,
      lng: 120.75224,
    },
  },
  {
    id: "320582",
    fullname: "张家港市",
    location: {
      lat: 31.87547,
      lng: 120.5555,
    },
  },
  {
    id: "320583",
    fullname: "昆山市",
    location: {
      lat: 31.38475,
      lng: 120.98181,
    },
  },
  {
    id: "320585",
    fullname: "太仓市",
    location: {
      lat: 31.45911,
      lng: 121.12975,
    },
  },
  {
    id: "320602",
    fullname: "崇川区",
    location: {
      lat: 32.00986,
      lng: 120.85737,
    },
  },
  {
    id: "320612",
    fullname: "通州区",
    location: {
      lat: 32.06764,
      lng: 121.07299,
    },
  },
  {
    id: "320623",
    fullname: "如东县",
    location: {
      lat: 32.32956,
      lng: 121.18502,
    },
  },
  {
    id: "320681",
    fullname: "启东市",
    location: {
      lat: 31.80805,
      lng: 121.65787,
    },
  },
  {
    id: "320682",
    fullname: "如皋市",
    location: {
      lat: 32.3716,
      lng: 120.57382,
    },
  },
  {
    id: "320684",
    fullname: "海门区",
    location: {
      lat: 31.87165,
      lng: 121.18179,
    },
  },
  {
    id: "320685",
    fullname: "海安市",
    location: {
      lat: 32.53308,
      lng: 120.46759,
    },
  },
  {
    id: "320703",
    fullname: "连云区",
    location: {
      lat: 34.75974,
      lng: 119.33894,
    },
  },
  {
    id: "320706",
    fullname: "海州区",
    location: {
      lat: 34.57203,
      lng: 119.16348,
    },
  },
  {
    id: "320707",
    fullname: "赣榆区",
    location: {
      lat: 34.84065,
      lng: 119.1773,
    },
  },
  {
    id: "320722",
    fullname: "东海县",
    location: {
      lat: 34.542159,
      lng: 118.771469,
    },
  },
  {
    id: "320723",
    fullname: "灌云县",
    location: {
      lat: 34.28407,
      lng: 119.24096,
    },
  },
  {
    id: "320724",
    fullname: "灌南县",
    location: {
      lat: 34.08673,
      lng: 119.31563,
    },
  },
  {
    id: "320803",
    fullname: "淮安区",
    location: {
      lat: 33.50306,
      lng: 119.14108,
    },
  },
  {
    id: "320804",
    fullname: "淮阴区",
    location: {
      lat: 33.63175,
      lng: 119.0349,
    },
  },
  {
    id: "320812",
    fullname: "清江浦区",
    location: {
      lat: 33.55308,
      lng: 119.02662,
    },
  },
  {
    id: "320813",
    fullname: "洪泽区",
    location: {
      lat: 33.29433,
      lng: 118.8735,
    },
  },
  {
    id: "320826",
    fullname: "涟水县",
    location: {
      lat: 33.78098,
      lng: 119.26089,
    },
  },
  {
    id: "320830",
    fullname: "盱眙县",
    location: {
      lat: 33.01089,
      lng: 118.54499,
    },
  },
  {
    id: "320831",
    fullname: "金湖县",
    location: {
      lat: 33.02359,
      lng: 119.02043,
    },
  },
  {
    id: "320902",
    fullname: "亭湖区",
    location: {
      lat: 33.38893,
      lng: 120.1953,
    },
  },
  {
    id: "320903",
    fullname: "盐都区",
    location: {
      lat: 33.33732,
      lng: 120.15448,
    },
  },
  {
    id: "320904",
    fullname: "大丰区",
    location: {
      lat: 33.20107,
      lng: 120.50102,
    },
  },
  {
    id: "320921",
    fullname: "响水县",
    location: {
      lat: 34.19919,
      lng: 119.57839,
    },
  },
  {
    id: "320922",
    fullname: "滨海县",
    location: {
      lat: 33.98975,
      lng: 119.82064,
    },
  },
  {
    id: "320923",
    fullname: "阜宁县",
    location: {
      lat: 33.75931,
      lng: 119.80258,
    },
  },
  {
    id: "320924",
    fullname: "射阳县",
    location: {
      lat: 33.77496,
      lng: 120.25815,
    },
  },
  {
    id: "320925",
    fullname: "建湖县",
    location: {
      lat: 33.46406,
      lng: 119.79858,
    },
  },
  {
    id: "320981",
    fullname: "东台市",
    location: {
      lat: 32.86695,
      lng: 120.3205,
    },
  },
  {
    id: "321002",
    fullname: "广陵区",
    location: {
      lat: 32.39463,
      lng: 119.43157,
    },
  },
  {
    id: "321003",
    fullname: "邗江区",
    location: {
      lat: 32.37654,
      lng: 119.39823,
    },
  },
  {
    id: "321012",
    fullname: "江都区",
    location: {
      lat: 32.43458,
      lng: 119.57006,
    },
  },
  {
    id: "321023",
    fullname: "宝应县",
    location: {
      lat: 33.24142,
      lng: 119.35841,
    },
  },
  {
    id: "321081",
    fullname: "仪征市",
    location: {
      lat: 32.27203,
      lng: 119.18444,
    },
  },
  {
    id: "321084",
    fullname: "高邮市",
    location: {
      lat: 32.78112,
      lng: 119.45558,
    },
  },
  {
    id: "321102",
    fullname: "京口区",
    location: {
      lat: 32.19811,
      lng: 119.46962,
    },
  },
  {
    id: "321111",
    fullname: "润州区",
    location: {
      lat: 32.19525,
      lng: 119.41217,
    },
  },
  {
    id: "321112",
    fullname: "丹徒区",
    location: {
      lat: 32.13188,
      lng: 119.43396,
    },
  },
  {
    id: "321181",
    fullname: "丹阳市",
    location: {
      lat: 32.00945,
      lng: 119.60694,
    },
  },
  {
    id: "321182",
    fullname: "扬中市",
    location: {
      lat: 32.23702,
      lng: 119.796818,
    },
  },
  {
    id: "321183",
    fullname: "句容市",
    location: {
      lat: 31.94482,
      lng: 119.16864,
    },
  },
  {
    id: "321202",
    fullname: "海陵区",
    location: {
      lat: 32.49098,
      lng: 119.91956,
    },
  },
  {
    id: "321203",
    fullname: "高港区",
    location: {
      lat: 32.31841,
      lng: 119.88116,
    },
  },
  {
    id: "321204",
    fullname: "姜堰区",
    location: {
      lat: 32.50879,
      lng: 120.12673,
    },
  },
  {
    id: "321281",
    fullname: "兴化市",
    location: {
      lat: 32.91041,
      lng: 119.85272,
    },
  },
  {
    id: "321282",
    fullname: "靖江市",
    location: {
      lat: 32.01494,
      lng: 120.27454,
    },
  },
  {
    id: "321283",
    fullname: "泰兴市",
    location: {
      lat: 32.17191,
      lng: 120.052,
    },
  },
  {
    id: "321302",
    fullname: "宿城区",
    location: {
      lat: 33.96271,
      lng: 118.24239,
    },
  },
  {
    id: "321311",
    fullname: "宿豫区",
    location: {
      lat: 33.94686,
      lng: 118.33066,
    },
  },
  {
    id: "321322",
    fullname: "沭阳县",
    location: {
      lat: 34.11215,
      lng: 118.80406,
    },
  },
  {
    id: "321323",
    fullname: "泗阳县",
    location: {
      lat: 33.72101,
      lng: 118.70335,
    },
  },
  {
    id: "321324",
    fullname: "泗洪县",
    location: {
      lat: 33.459,
      lng: 118.21624,
    },
  },
  {
    id: "330102",
    fullname: "上城区",
    location: {
      lat: 30.24259,
      lng: 120.16929,
    },
  },
  {
    id: "330103",
    fullname: "下城区",
    location: {
      lat: 30.28122,
      lng: 120.18117,
    },
  },
  {
    id: "330104",
    fullname: "江干区",
    location: {
      lat: 30.25727,
      lng: 120.20523,
    },
  },
  {
    id: "330105",
    fullname: "拱墅区",
    location: {
      lat: 30.31974,
      lng: 120.1421,
    },
  },
  {
    id: "330106",
    fullname: "西湖区",
    location: {
      lat: 30.259609,
      lng: 120.13026,
    },
  },
  {
    id: "330108",
    fullname: "滨江区",
    location: {
      lat: 30.2084,
      lng: 120.21201,
    },
  },
  {
    id: "330109",
    fullname: "萧山区",
    location: {
      lat: 30.18534,
      lng: 120.26457,
    },
  },
  {
    id: "330110",
    fullname: "余杭区",
    location: {
      lat: 30.41875,
      lng: 120.298501,
    },
  },
  {
    id: "330111",
    fullname: "富阳区",
    location: {
      lat: 30.04885,
      lng: 119.96043,
    },
  },
  {
    id: "330112",
    fullname: "临安区",
    location: {
      lat: 30.23383,
      lng: 119.7248,
    },
  },
  {
    id: "330122",
    fullname: "桐庐县",
    location: {
      lat: 29.79317,
      lng: 119.6915,
    },
  },
  {
    id: "330127",
    fullname: "淳安县",
    location: {
      lat: 29.60886,
      lng: 119.04207,
    },
  },
  {
    id: "330182",
    fullname: "建德市",
    location: {
      lat: 29.47475,
      lng: 119.28121,
    },
  },
  {
    id: "330203",
    fullname: "海曙区",
    location: {
      lat: 29.85957,
      lng: 121.55084,
    },
  },
  {
    id: "330205",
    fullname: "江北区",
    location: {
      lat: 29.88615,
      lng: 121.55468,
    },
  },
  {
    id: "330206",
    fullname: "北仑区",
    location: {
      lat: 29.89889,
      lng: 121.84431,
    },
  },
  {
    id: "330211",
    fullname: "镇海区",
    location: {
      lat: 29.94899,
      lng: 121.71624,
    },
  },
  {
    id: "330212",
    fullname: "鄞州区",
    location: {
      lat: 29.8172,
      lng: 121.547,
    },
  },
  {
    id: "330213",
    fullname: "奉化区",
    location: {
      lat: 29.65503,
      lng: 121.40686,
    },
  },
  {
    id: "330225",
    fullname: "象山县",
    location: {
      lat: 29.47665,
      lng: 121.86932,
    },
  },
  {
    id: "330226",
    fullname: "宁海县",
    location: {
      lat: 29.28807,
      lng: 121.42961,
    },
  },
  {
    id: "330281",
    fullname: "余姚市",
    location: {
      lat: 30.03711,
      lng: 121.15435,
    },
  },
  {
    id: "330282",
    fullname: "慈溪市",
    location: {
      lat: 30.16964,
      lng: 121.26647,
    },
  },
  {
    id: "330302",
    fullname: "鹿城区",
    location: {
      lat: 28.01469,
      lng: 120.65523,
    },
  },
  {
    id: "330303",
    fullname: "龙湾区",
    location: {
      lat: 27.93252,
      lng: 120.81303,
    },
  },
  {
    id: "330304",
    fullname: "瓯海区",
    location: {
      lat: 28.00708,
      lng: 120.63768,
    },
  },
  {
    id: "330305",
    fullname: "洞头区",
    location: {
      lat: 27.83616,
      lng: 121.1572,
    },
  },
  {
    id: "330324",
    fullname: "永嘉县",
    location: {
      lat: 28.15336,
      lng: 120.69171,
    },
  },
  {
    id: "330326",
    fullname: "平阳县",
    location: {
      lat: 27.6621,
      lng: 120.56595,
    },
  },
  {
    id: "330327",
    fullname: "苍南县",
    location: {
      lat: 27.51743,
      lng: 120.42631,
    },
  },
  {
    id: "330328",
    fullname: "文成县",
    location: {
      lat: 27.78712,
      lng: 120.09137,
    },
  },
  {
    id: "330329",
    fullname: "泰顺县",
    location: {
      lat: 27.55639,
      lng: 119.7175,
    },
  },
  {
    id: "330381",
    fullname: "瑞安市",
    location: {
      lat: 27.77838,
      lng: 120.65518,
    },
  },
  {
    id: "330382",
    fullname: "乐清市",
    location: {
      lat: 28.11289,
      lng: 120.98338,
    },
  },
  {
    id: "330383",
    fullname: "龙港市",
    location: {
      lat: 27.578205,
      lng: 120.553102,
    },
  },
  {
    id: "330402",
    fullname: "南湖区",
    location: {
      lat: 30.74744,
      lng: 120.78483,
    },
  },
  {
    id: "330411",
    fullname: "秀洲区",
    location: {
      lat: 30.76388,
      lng: 120.7092,
    },
  },
  {
    id: "330421",
    fullname: "嘉善县",
    location: {
      lat: 30.83075,
      lng: 120.92716,
    },
  },
  {
    id: "330424",
    fullname: "海盐县",
    location: {
      lat: 30.52553,
      lng: 120.94579,
    },
  },
  {
    id: "330481",
    fullname: "海宁市",
    location: {
      lat: 30.50938,
      lng: 120.68102,
    },
  },
  {
    id: "330482",
    fullname: "平湖市",
    location: {
      lat: 30.67585,
      lng: 121.01606,
    },
  },
  {
    id: "330483",
    fullname: "桐乡市",
    location: {
      lat: 30.63074,
      lng: 120.56432,
    },
  },
  {
    id: "330502",
    fullname: "吴兴区",
    location: {
      lat: 30.85816,
      lng: 120.18562,
    },
  },
  {
    id: "330503",
    fullname: "南浔区",
    location: {
      lat: 30.84979,
      lng: 120.41847,
    },
  },
  {
    id: "330521",
    fullname: "德清县",
    location: {
      lat: 30.5427,
      lng: 119.97728,
    },
  },
  {
    id: "330522",
    fullname: "长兴县",
    location: {
      lat: 31.02663,
      lng: 119.91011,
    },
  },
  {
    id: "330523",
    fullname: "安吉县",
    location: {
      lat: 30.63824,
      lng: 119.68219,
    },
  },
  {
    id: "330602",
    fullname: "越城区",
    location: {
      lat: 29.98899,
      lng: 120.58199,
    },
  },
  {
    id: "330603",
    fullname: "柯桥区",
    location: {
      lat: 30.081889,
      lng: 120.494761,
    },
  },
  {
    id: "330604",
    fullname: "上虞区",
    location: {
      lat: 30.03227,
      lng: 120.86858,
    },
  },
  {
    id: "330624",
    fullname: "新昌县",
    location: {
      lat: 29.49983,
      lng: 120.90385,
    },
  },
  {
    id: "330681",
    fullname: "诸暨市",
    location: {
      lat: 29.713637,
      lng: 120.236325,
    },
  },
  {
    id: "330683",
    fullname: "嵊州市",
    location: {
      lat: 29.58849,
      lng: 120.8217,
    },
  },
  {
    id: "330702",
    fullname: "婺城区",
    location: {
      lat: 29.08624,
      lng: 119.5715,
    },
  },
  {
    id: "330703",
    fullname: "金东区",
    location: {
      lat: 29.099086,
      lng: 119.693021,
    },
  },
  {
    id: "330723",
    fullname: "武义县",
    location: {
      lat: 28.8926,
      lng: 119.81651,
    },
  },
  {
    id: "330726",
    fullname: "浦江县",
    location: {
      lat: 29.45251,
      lng: 119.89206,
    },
  },
  {
    id: "330727",
    fullname: "磐安县",
    location: {
      lat: 29.05403,
      lng: 120.45022,
    },
  },
  {
    id: "330781",
    fullname: "兰溪市",
    location: {
      lat: 29.20838,
      lng: 119.46051,
    },
  },
  {
    id: "330782",
    fullname: "义乌市",
    location: {
      lat: 29.305575,
      lng: 120.074687,
    },
  },
  {
    id: "330783",
    fullname: "东阳市",
    location: {
      lat: 29.28946,
      lng: 120.24191,
    },
  },
  {
    id: "330784",
    fullname: "永康市",
    location: {
      lat: 28.88851,
      lng: 120.04731,
    },
  },
  {
    id: "330802",
    fullname: "柯城区",
    location: {
      lat: 28.96864,
      lng: 118.87117,
    },
  },
  {
    id: "330803",
    fullname: "衢江区",
    location: {
      lat: 28.97964,
      lng: 118.95919,
    },
  },
  {
    id: "330822",
    fullname: "常山县",
    location: {
      lat: 28.90141,
      lng: 118.51116,
    },
  },
  {
    id: "330824",
    fullname: "开化县",
    location: {
      lat: 29.13609,
      lng: 118.41422,
    },
  },
  {
    id: "330825",
    fullname: "龙游县",
    location: {
      lat: 29.028268,
      lng: 119.172248,
    },
  },
  {
    id: "330881",
    fullname: "江山市",
    location: {
      lat: 28.73725,
      lng: 118.6269,
    },
  },
  {
    id: "330902",
    fullname: "定海区",
    location: {
      lat: 30.01979,
      lng: 122.10679,
    },
  },
  {
    id: "330903",
    fullname: "普陀区",
    location: {
      lat: 29.9492,
      lng: 122.30278,
    },
  },
  {
    id: "330921",
    fullname: "岱山县",
    location: {
      lat: 30.24369,
      lng: 122.20498,
    },
  },
  {
    id: "330922",
    fullname: "嵊泗县",
    location: {
      lat: 30.72573,
      lng: 122.45137,
    },
  },
  {
    id: "331002",
    fullname: "椒江区",
    location: {
      lat: 28.67307,
      lng: 121.442971,
    },
  },
  {
    id: "331003",
    fullname: "黄岩区",
    location: {
      lat: 28.64965,
      lng: 121.26295,
    },
  },
  {
    id: "331004",
    fullname: "路桥区",
    location: {
      lat: 28.58265,
      lng: 121.36508,
    },
  },
  {
    id: "331022",
    fullname: "三门县",
    location: {
      lat: 29.10467,
      lng: 121.39568,
    },
  },
  {
    id: "331023",
    fullname: "天台县",
    location: {
      lat: 29.14029,
      lng: 121.03093,
    },
  },
  {
    id: "331024",
    fullname: "仙居县",
    location: {
      lat: 28.84683,
      lng: 120.72881,
    },
  },
  {
    id: "331081",
    fullname: "温岭市",
    location: {
      lat: 28.3718,
      lng: 121.38599,
    },
  },
  {
    id: "331082",
    fullname: "临海市",
    location: {
      lat: 28.8584,
      lng: 121.14495,
    },
  },
  {
    id: "331083",
    fullname: "玉环市",
    location: {
      lat: 28.13589,
      lng: 121.23164,
    },
  },
  {
    id: "331102",
    fullname: "莲都区",
    location: {
      lat: 28.44594,
      lng: 119.91284,
    },
  },
  {
    id: "331121",
    fullname: "青田县",
    location: {
      lat: 28.13987,
      lng: 120.28955,
    },
  },
  {
    id: "331122",
    fullname: "缙云县",
    location: {
      lat: 28.65928,
      lng: 120.09158,
    },
  },
  {
    id: "331123",
    fullname: "遂昌县",
    location: {
      lat: 28.59213,
      lng: 119.27602,
    },
  },
  {
    id: "331124",
    fullname: "松阳县",
    location: {
      lat: 28.44947,
      lng: 119.48202,
    },
  },
  {
    id: "331125",
    fullname: "云和县",
    location: {
      lat: 28.11591,
      lng: 119.5734,
    },
  },
  {
    id: "331126",
    fullname: "庆元县",
    location: {
      lat: 27.61913,
      lng: 119.06266,
    },
  },
  {
    id: "331127",
    fullname: "景宁畲族自治县",
    location: {
      lat: 27.9732,
      lng: 119.63581,
    },
  },
  {
    id: "331181",
    fullname: "龙泉市",
    location: {
      lat: 28.07434,
      lng: 119.14168,
    },
  },
  {
    id: "340102",
    fullname: "瑶海区",
    location: {
      lat: 31.85797,
      lng: 117.30949,
    },
  },
  {
    id: "340103",
    fullname: "庐阳区",
    location: {
      lat: 31.87872,
      lng: 117.26497,
    },
  },
  {
    id: "340104",
    fullname: "蜀山区",
    location: {
      lat: 31.8512,
      lng: 117.26061,
    },
  },
  {
    id: "340111",
    fullname: "包河区",
    location: {
      lat: 31.79322,
      lng: 117.30794,
    },
  },
  {
    id: "340121",
    fullname: "长丰县",
    location: {
      lat: 32.47796,
      lng: 117.16766,
    },
  },
  {
    id: "340122",
    fullname: "肥东县",
    location: {
      lat: 31.8877,
      lng: 117.46928,
    },
  },
  {
    id: "340123",
    fullname: "肥西县",
    location: {
      lat: 31.70689,
      lng: 117.18283,
    },
  },
  {
    id: "340124",
    fullname: "庐江县",
    location: {
      lat: 31.25567,
      lng: 117.28736,
    },
  },
  {
    id: "340181",
    fullname: "巢湖市",
    location: {
      lat: 31.62329,
      lng: 117.88937,
    },
  },
  {
    id: "340202",
    fullname: "镜湖区",
    location: {
      lat: 31.34072,
      lng: 118.385483,
    },
  },
  {
    id: "340203",
    fullname: "弋江区",
    location: {
      lat: 31.31202,
      lng: 118.37273,
    },
  },
  {
    id: "340207",
    fullname: "鸠江区",
    location: {
      lat: 31.36959,
      lng: 118.39236,
    },
  },
  {
    id: "340221",
    fullname: "湾沚区",
    location: {
      lat: 31.13479,
      lng: 118.57529,
    },
  },
  {
    id: "340222",
    fullname: "繁昌区",
    location: {
      lat: 31.101746,
      lng: 118.198648,
    },
  },
  {
    id: "340223",
    fullname: "南陵县",
    location: {
      lat: 30.914787,
      lng: 118.334054,
    },
  },
  {
    id: "340281",
    fullname: "无为市",
    location: {
      lat: 31.304411,
      lng: 117.90229,
    },
  },
  {
    id: "340302",
    fullname: "龙子湖区",
    location: {
      lat: 32.9428,
      lng: 117.39347,
    },
  },
  {
    id: "340303",
    fullname: "蚌山区",
    location: {
      lat: 32.94448,
      lng: 117.36779,
    },
  },
  {
    id: "340304",
    fullname: "禹会区",
    location: {
      lat: 32.92921,
      lng: 117.34211,
    },
  },
  {
    id: "340311",
    fullname: "淮上区",
    location: {
      lat: 32.96436,
      lng: 117.35996,
    },
  },
  {
    id: "340321",
    fullname: "怀远县",
    location: {
      lat: 32.97011,
      lng: 117.20514,
    },
  },
  {
    id: "340322",
    fullname: "五河县",
    location: {
      lat: 33.14507,
      lng: 117.88529,
    },
  },
  {
    id: "340323",
    fullname: "固镇县",
    location: {
      lat: 33.31769,
      lng: 117.31666,
    },
  },
  {
    id: "340402",
    fullname: "大通区",
    location: {
      lat: 32.63149,
      lng: 117.053352,
    },
  },
  {
    id: "340403",
    fullname: "田家庵区",
    location: {
      lat: 32.64709,
      lng: 117.01743,
    },
  },
  {
    id: "340404",
    fullname: "谢家集区",
    location: {
      lat: 32.59996,
      lng: 116.85913,
    },
  },
  {
    id: "340405",
    fullname: "八公山区",
    location: {
      lat: 32.63142,
      lng: 116.83359,
    },
  },
  {
    id: "340406",
    fullname: "潘集区",
    location: {
      lat: 32.77263,
      lng: 116.83626,
    },
  },
  {
    id: "340421",
    fullname: "凤台县",
    location: {
      lat: 32.709469,
      lng: 116.710762,
    },
  },
  {
    id: "340422",
    fullname: "寿县",
    location: {
      lat: 32.57332,
      lng: 116.78708,
    },
  },
  {
    id: "340503",
    fullname: "花山区",
    location: {
      lat: 31.69996,
      lng: 118.5115,
    },
  },
  {
    id: "340504",
    fullname: "雨山区",
    location: {
      lat: 31.68216,
      lng: 118.49853,
    },
  },
  {
    id: "340506",
    fullname: "博望区",
    location: {
      lat: 31.558548,
      lng: 118.844315,
    },
  },
  {
    id: "340521",
    fullname: "当涂县",
    location: {
      lat: 31.5699,
      lng: 118.4978,
    },
  },
  {
    id: "340522",
    fullname: "含山县",
    location: {
      lat: 31.73358,
      lng: 118.10241,
    },
  },
  {
    id: "340523",
    fullname: "和县",
    location: {
      lat: 31.74423,
      lng: 118.35145,
    },
  },
  {
    id: "340602",
    fullname: "杜集区",
    location: {
      lat: 33.99141,
      lng: 116.82803,
    },
  },
  {
    id: "340603",
    fullname: "相山区",
    location: {
      lat: 33.95999,
      lng: 116.79425,
    },
  },
  {
    id: "340604",
    fullname: "烈山区",
    location: {
      lat: 33.89577,
      lng: 116.8132,
    },
  },
  {
    id: "340621",
    fullname: "濉溪县",
    location: {
      lat: 33.91537,
      lng: 116.7662,
    },
  },
  {
    id: "340705",
    fullname: "铜官区",
    location: {
      lat: 30.95614,
      lng: 117.87431,
    },
  },
  {
    id: "340706",
    fullname: "义安区",
    location: {
      lat: 30.95271,
      lng: 117.79147,
    },
  },
  {
    id: "340711",
    fullname: "郊区",
    location: {
      lat: 30.90466,
      lng: 117.80103,
    },
  },
  {
    id: "340722",
    fullname: "枞阳县",
    location: {
      lat: 30.69961,
      lng: 117.22019,
    },
  },
  {
    id: "340802",
    fullname: "迎江区",
    location: {
      lat: 30.51155,
      lng: 117.09081,
    },
  },
  {
    id: "340803",
    fullname: "大观区",
    location: {
      lat: 30.51227,
      lng: 117.03424,
    },
  },
  {
    id: "340811",
    fullname: "宜秀区",
    location: {
      lat: 30.61358,
      lng: 116.98933,
    },
  },
  {
    id: "340822",
    fullname: "怀宁县",
    location: {
      lat: 30.733799,
      lng: 116.829756,
    },
  },
  {
    id: "340825",
    fullname: "太湖县",
    location: {
      lat: 30.45411,
      lng: 116.30885,
    },
  },
  {
    id: "340826",
    fullname: "宿松县",
    location: {
      lat: 30.15363,
      lng: 116.1292,
    },
  },
  {
    id: "340827",
    fullname: "望江县",
    location: {
      lat: 30.12442,
      lng: 116.69423,
    },
  },
  {
    id: "340828",
    fullname: "岳西县",
    location: {
      lat: 30.84939,
      lng: 116.35999,
    },
  },
  {
    id: "340881",
    fullname: "桐城市",
    location: {
      lat: 31.03585,
      lng: 116.97416,
    },
  },
  {
    id: "340882",
    fullname: "潜山市",
    location: {
      lat: 30.63107,
      lng: 116.58133,
    },
  },
  {
    id: "341002",
    fullname: "屯溪区",
    location: {
      lat: 29.6958,
      lng: 118.3151,
    },
  },
  {
    id: "341003",
    fullname: "黄山区",
    location: {
      lat: 30.272958,
      lng: 118.141614,
    },
  },
  {
    id: "341004",
    fullname: "徽州区",
    location: {
      lat: 29.82794,
      lng: 118.33681,
    },
  },
  {
    id: "341021",
    fullname: "歙县",
    location: {
      lat: 29.860758,
      lng: 118.413568,
    },
  },
  {
    id: "341022",
    fullname: "休宁县",
    location: {
      lat: 29.78618,
      lng: 118.18245,
    },
  },
  {
    id: "341023",
    fullname: "黟县",
    location: {
      lat: 29.924702,
      lng: 117.938348,
    },
  },
  {
    id: "341024",
    fullname: "祁门县",
    location: {
      lat: 29.85409,
      lng: 117.71715,
    },
  },
  {
    id: "341102",
    fullname: "琅琊区",
    location: {
      lat: 32.2948,
      lng: 118.30553,
    },
  },
  {
    id: "341103",
    fullname: "南谯区",
    location: {
      lat: 32.35317,
      lng: 118.17138,
    },
  },
  {
    id: "341122",
    fullname: "来安县",
    location: {
      lat: 32.45217,
      lng: 118.43575,
    },
  },
  {
    id: "341124",
    fullname: "全椒县",
    location: {
      lat: 32.0853,
      lng: 118.27303,
    },
  },
  {
    id: "341125",
    fullname: "定远县",
    location: {
      lat: 32.52998,
      lng: 117.69856,
    },
  },
  {
    id: "341126",
    fullname: "凤阳县",
    location: {
      lat: 32.866,
      lng: 117.56124,
    },
  },
  {
    id: "341181",
    fullname: "天长市",
    location: {
      lat: 32.68945,
      lng: 119.00355,
    },
  },
  {
    id: "341182",
    fullname: "明光市",
    location: {
      lat: 32.776987,
      lng: 117.989439,
    },
  },
  {
    id: "341202",
    fullname: "颍州区",
    location: {
      lat: 32.88327,
      lng: 115.80672,
    },
  },
  {
    id: "341203",
    fullname: "颍东区",
    location: {
      lat: 32.91303,
      lng: 115.85668,
    },
  },
  {
    id: "341204",
    fullname: "颍泉区",
    location: {
      lat: 32.92505,
      lng: 115.80847,
    },
  },
  {
    id: "341221",
    fullname: "临泉县",
    location: {
      lat: 33.06457,
      lng: 115.25811,
    },
  },
  {
    id: "341222",
    fullname: "太和县",
    location: {
      lat: 33.160258,
      lng: 115.622035,
    },
  },
  {
    id: "341225",
    fullname: "阜南县",
    location: {
      lat: 32.65891,
      lng: 115.59305,
    },
  },
  {
    id: "341226",
    fullname: "颍上县",
    location: {
      lat: 32.62893,
      lng: 116.26455,
    },
  },
  {
    id: "341282",
    fullname: "界首市",
    location: {
      lat: 33.25722,
      lng: 115.37436,
    },
  },
  {
    id: "341302",
    fullname: "埇桥区",
    location: {
      lat: 33.64004,
      lng: 116.97728,
    },
  },
  {
    id: "341321",
    fullname: "砀山县",
    location: {
      lat: 34.44097,
      lng: 116.36606,
    },
  },
  {
    id: "341322",
    fullname: "萧县",
    location: {
      lat: 34.18876,
      lng: 116.947241,
    },
  },
  {
    id: "341323",
    fullname: "灵璧县",
    location: {
      lat: 33.54232,
      lng: 117.55855,
    },
  },
  {
    id: "341324",
    fullname: "泗县",
    location: {
      lat: 33.48289,
      lng: 117.91106,
    },
  },
  {
    id: "341502",
    fullname: "金安区",
    location: {
      lat: 31.74933,
      lng: 116.53949,
    },
  },
  {
    id: "341503",
    fullname: "裕安区",
    location: {
      lat: 31.73795,
      lng: 116.47995,
    },
  },
  {
    id: "341504",
    fullname: "叶集区",
    location: {
      lat: 31.85122,
      lng: 115.9133,
    },
  },
  {
    id: "341522",
    fullname: "霍邱县",
    location: {
      lat: 32.3532,
      lng: 116.27823,
    },
  },
  {
    id: "341523",
    fullname: "舒城县",
    location: {
      lat: 31.46209,
      lng: 116.9487,
    },
  },
  {
    id: "341524",
    fullname: "金寨县",
    location: {
      lat: 31.727136,
      lng: 115.934201,
    },
  },
  {
    id: "341525",
    fullname: "霍山县",
    location: {
      lat: 31.39279,
      lng: 116.33269,
    },
  },
  {
    id: "341602",
    fullname: "谯城区",
    location: {
      lat: 33.87641,
      lng: 115.77914,
    },
  },
  {
    id: "341621",
    fullname: "涡阳县",
    location: {
      lat: 33.492852,
      lng: 116.215821,
    },
  },
  {
    id: "341622",
    fullname: "蒙城县",
    location: {
      lat: 33.26584,
      lng: 116.5645,
    },
  },
  {
    id: "341623",
    fullname: "利辛县",
    location: {
      lat: 33.14484,
      lng: 116.20839,
    },
  },
  {
    id: "341702",
    fullname: "贵池区",
    location: {
      lat: 30.68673,
      lng: 117.56733,
    },
  },
  {
    id: "341721",
    fullname: "东至县",
    location: {
      lat: 30.09663,
      lng: 117.02766,
    },
  },
  {
    id: "341722",
    fullname: "石台县",
    location: {
      lat: 30.21026,
      lng: 117.48619,
    },
  },
  {
    id: "341723",
    fullname: "青阳县",
    location: {
      lat: 30.63935,
      lng: 117.84749,
    },
  },
  {
    id: "341802",
    fullname: "宣州区",
    location: {
      lat: 30.94622,
      lng: 118.75634,
    },
  },
  {
    id: "341821",
    fullname: "郎溪县",
    location: {
      lat: 31.12658,
      lng: 119.17944,
    },
  },
  {
    id: "341823",
    fullname: "泾县",
    location: {
      lat: 30.68853,
      lng: 118.4197,
    },
  },
  {
    id: "341824",
    fullname: "绩溪县",
    location: {
      lat: 30.06633,
      lng: 118.57993,
    },
  },
  {
    id: "341825",
    fullname: "旌德县",
    location: {
      lat: 30.28636,
      lng: 118.54045,
    },
  },
  {
    id: "341881",
    fullname: "宁国市",
    location: {
      lat: 30.63364,
      lng: 118.98336,
    },
  },
  {
    id: "341882",
    fullname: "广德市",
    location: {
      lat: 30.8938,
      lng: 119.41705,
    },
  },
  {
    id: "350102",
    fullname: "鼓楼区",
    location: {
      lat: 26.08198,
      lng: 119.30405,
    },
  },
  {
    id: "350103",
    fullname: "台江区",
    location: {
      lat: 26.0527,
      lng: 119.31414,
    },
  },
  {
    id: "350104",
    fullname: "仓山区",
    location: {
      lat: 26.04769,
      lng: 119.27345,
    },
  },
  {
    id: "350105",
    fullname: "马尾区",
    location: {
      lat: 25.98939,
      lng: 119.4556,
    },
  },
  {
    id: "350111",
    fullname: "晋安区",
    location: {
      lat: 26.08135,
      lng: 119.32842,
    },
  },
  {
    id: "350112",
    fullname: "长乐区",
    location: {
      lat: 25.96283,
      lng: 119.52324,
    },
  },
  {
    id: "350121",
    fullname: "闽侯县",
    location: {
      lat: 26.15021,
      lng: 119.13139,
    },
  },
  {
    id: "350122",
    fullname: "连江县",
    location: {
      lat: 26.19753,
      lng: 119.53957,
    },
  },
  {
    id: "350123",
    fullname: "罗源县",
    location: {
      lat: 26.48939,
      lng: 119.54969,
    },
  },
  {
    id: "350124",
    fullname: "闽清县",
    location: {
      lat: 26.22117,
      lng: 118.86352,
    },
  },
  {
    id: "350125",
    fullname: "永泰县",
    location: {
      lat: 25.86672,
      lng: 118.93258,
    },
  },
  {
    id: "350128",
    fullname: "平潭县",
    location: {
      lat: 25.49876,
      lng: 119.7901,
    },
  },
  {
    id: "350181",
    fullname: "福清市",
    location: {
      lat: 25.72024,
      lng: 119.38411,
    },
  },
  {
    id: "350203",
    fullname: "思明区",
    location: {
      lat: 24.44579,
      lng: 118.08243,
    },
  },
  {
    id: "350205",
    fullname: "海沧区",
    location: {
      lat: 24.48405,
      lng: 118.03394,
    },
  },
  {
    id: "350206",
    fullname: "湖里区",
    location: {
      lat: 24.5118,
      lng: 118.14577,
    },
  },
  {
    id: "350211",
    fullname: "集美区",
    location: {
      lat: 24.57591,
      lng: 118.09728,
    },
  },
  {
    id: "350212",
    fullname: "同安区",
    location: {
      lat: 24.72286,
      lng: 118.15207,
    },
  },
  {
    id: "350213",
    fullname: "翔安区",
    location: {
      lat: 24.61854,
      lng: 118.24722,
    },
  },
  {
    id: "350302",
    fullname: "城厢区",
    location: {
      lat: 25.41878,
      lng: 118.99472,
    },
  },
  {
    id: "350303",
    fullname: "涵江区",
    location: {
      lat: 25.45879,
      lng: 119.1163,
    },
  },
  {
    id: "350304",
    fullname: "荔城区",
    location: {
      lat: 25.43131,
      lng: 119.01501,
    },
  },
  {
    id: "350305",
    fullname: "秀屿区",
    location: {
      lat: 25.31839,
      lng: 119.10642,
    },
  },
  {
    id: "350322",
    fullname: "仙游县",
    location: {
      lat: 25.373227,
      lng: 118.68955,
    },
  },
  {
    id: "350402",
    fullname: "梅列区",
    location: {
      lat: 26.27168,
      lng: 117.64579,
    },
  },
  {
    id: "350403",
    fullname: "三元区",
    location: {
      lat: 26.23381,
      lng: 117.6081,
    },
  },
  {
    id: "350421",
    fullname: "明溪县",
    location: {
      lat: 26.35595,
      lng: 117.20219,
    },
  },
  {
    id: "350423",
    fullname: "清流县",
    location: {
      lat: 26.17781,
      lng: 116.81694,
    },
  },
  {
    id: "350424",
    fullname: "宁化县",
    location: {
      lat: 26.26178,
      lng: 116.65443,
    },
  },
  {
    id: "350425",
    fullname: "大田县",
    location: {
      lat: 25.69261,
      lng: 117.84713,
    },
  },
  {
    id: "350426",
    fullname: "尤溪县",
    location: {
      lat: 26.17004,
      lng: 118.19049,
    },
  },
  {
    id: "350427",
    fullname: "沙县",
    location: {
      lat: 26.39617,
      lng: 117.79268,
    },
  },
  {
    id: "350428",
    fullname: "将乐县",
    location: {
      lat: 26.72904,
      lng: 117.47096,
    },
  },
  {
    id: "350429",
    fullname: "泰宁县",
    location: {
      lat: 26.90012,
      lng: 117.1758,
    },
  },
  {
    id: "350430",
    fullname: "建宁县",
    location: {
      lat: 26.83092,
      lng: 116.84604,
    },
  },
  {
    id: "350481",
    fullname: "永安市",
    location: {
      lat: 25.94138,
      lng: 117.36518,
    },
  },
  {
    id: "350502",
    fullname: "鲤城区",
    location: {
      lat: 24.9075,
      lng: 118.58687,
    },
  },
  {
    id: "350503",
    fullname: "丰泽区",
    location: {
      lat: 24.88946,
      lng: 118.613,
    },
  },
  {
    id: "350504",
    fullname: "洛江区",
    location: {
      lat: 24.9399,
      lng: 118.6712,
    },
  },
  {
    id: "350505",
    fullname: "泉港区",
    location: {
      lat: 25.12014,
      lng: 118.91596,
    },
  },
  {
    id: "350521",
    fullname: "惠安县",
    location: {
      lat: 25.03065,
      lng: 118.79695,
    },
  },
  {
    id: "350524",
    fullname: "安溪县",
    location: {
      lat: 25.05544,
      lng: 118.18685,
    },
  },
  {
    id: "350525",
    fullname: "永春县",
    location: {
      lat: 25.32188,
      lng: 118.29424,
    },
  },
  {
    id: "350526",
    fullname: "德化县",
    location: {
      lat: 25.4916,
      lng: 118.24098,
    },
  },
  {
    id: "350527",
    fullname: "金门县",
    location: {
      lat: 24.42931,
      lng: 118.32277,
    },
  },
  {
    id: "350581",
    fullname: "石狮市",
    location: {
      lat: 24.7319,
      lng: 118.64792,
    },
  },
  {
    id: "350582",
    fullname: "晋江市",
    location: {
      lat: 24.78144,
      lng: 118.55199,
    },
  },
  {
    id: "350583",
    fullname: "南安市",
    location: {
      lat: 24.9604,
      lng: 118.38627,
    },
  },
  {
    id: "350602",
    fullname: "芗城区",
    location: {
      lat: 24.51067,
      lng: 117.65391,
    },
  },
  {
    id: "350603",
    fullname: "龙文区",
    location: {
      lat: 24.5033,
      lng: 117.70984,
    },
  },
  {
    id: "350622",
    fullname: "云霄县",
    location: {
      lat: 23.95806,
      lng: 117.33965,
    },
  },
  {
    id: "350623",
    fullname: "漳浦县",
    location: {
      lat: 24.1171,
      lng: 117.61372,
    },
  },
  {
    id: "350624",
    fullname: "诏安县",
    location: {
      lat: 23.71152,
      lng: 117.17508,
    },
  },
  {
    id: "350625",
    fullname: "长泰县",
    location: {
      lat: 24.6258,
      lng: 117.75948,
    },
  },
  {
    id: "350626",
    fullname: "东山县",
    location: {
      lat: 23.70132,
      lng: 117.42964,
    },
  },
  {
    id: "350627",
    fullname: "南靖县",
    location: {
      lat: 24.51453,
      lng: 117.35742,
    },
  },
  {
    id: "350628",
    fullname: "平和县",
    location: {
      lat: 24.36344,
      lng: 117.31587,
    },
  },
  {
    id: "350629",
    fullname: "华安县",
    location: {
      lat: 25.00446,
      lng: 117.53414,
    },
  },
  {
    id: "350681",
    fullname: "龙海市",
    location: {
      lat: 24.44658,
      lng: 117.81813,
    },
  },
  {
    id: "350702",
    fullname: "延平区",
    location: {
      lat: 26.63798,
      lng: 118.18202,
    },
  },
  {
    id: "350703",
    fullname: "建阳区",
    location: {
      lat: 27.331749,
      lng: 118.120427,
    },
  },
  {
    id: "350721",
    fullname: "顺昌县",
    location: {
      lat: 26.79301,
      lng: 117.81036,
    },
  },
  {
    id: "350722",
    fullname: "浦城县",
    location: {
      lat: 27.91721,
      lng: 118.54138,
    },
  },
  {
    id: "350723",
    fullname: "光泽县",
    location: {
      lat: 27.541,
      lng: 117.33408,
    },
  },
  {
    id: "350724",
    fullname: "松溪县",
    location: {
      lat: 27.52629,
      lng: 118.7854,
    },
  },
  {
    id: "350725",
    fullname: "政和县",
    location: {
      lat: 27.36609,
      lng: 118.85754,
    },
  },
  {
    id: "350781",
    fullname: "邵武市",
    location: {
      lat: 27.34036,
      lng: 117.49253,
    },
  },
  {
    id: "350782",
    fullname: "武夷山市",
    location: {
      lat: 27.75671,
      lng: 118.03548,
    },
  },
  {
    id: "350783",
    fullname: "建瓯市",
    location: {
      lat: 27.02266,
      lng: 118.30498,
    },
  },
  {
    id: "350802",
    fullname: "新罗区",
    location: {
      lat: 25.09839,
      lng: 117.03736,
    },
  },
  {
    id: "350803",
    fullname: "永定区",
    location: {
      lat: 24.72303,
      lng: 116.73202,
    },
  },
  {
    id: "350821",
    fullname: "长汀县",
    location: {
      lat: 25.83348,
      lng: 116.35765,
    },
  },
  {
    id: "350823",
    fullname: "上杭县",
    location: {
      lat: 25.04943,
      lng: 116.42026,
    },
  },
  {
    id: "350824",
    fullname: "武平县",
    location: {
      lat: 25.09535,
      lng: 116.10039,
    },
  },
  {
    id: "350825",
    fullname: "连城县",
    location: {
      lat: 25.70997,
      lng: 116.75486,
    },
  },
  {
    id: "350881",
    fullname: "漳平市",
    location: {
      lat: 25.29013,
      lng: 117.42001,
    },
  },
  {
    id: "350902",
    fullname: "蕉城区",
    location: {
      lat: 26.66022,
      lng: 119.52623,
    },
  },
  {
    id: "350921",
    fullname: "霞浦县",
    location: {
      lat: 26.88517,
      lng: 120.00556,
    },
  },
  {
    id: "350922",
    fullname: "古田县",
    location: {
      lat: 26.57762,
      lng: 118.74606,
    },
  },
  {
    id: "350923",
    fullname: "屏南县",
    location: {
      lat: 26.90853,
      lng: 118.98578,
    },
  },
  {
    id: "350924",
    fullname: "寿宁县",
    location: {
      lat: 27.46054,
      lng: 119.50479,
    },
  },
  {
    id: "350925",
    fullname: "周宁县",
    location: {
      lat: 27.10474,
      lng: 119.33899,
    },
  },
  {
    id: "350926",
    fullname: "柘荣县",
    location: {
      lat: 27.23513,
      lng: 119.90085,
    },
  },
  {
    id: "350981",
    fullname: "福安市",
    location: {
      lat: 27.08797,
      lng: 119.64768,
    },
  },
  {
    id: "350982",
    fullname: "福鼎市",
    location: {
      lat: 27.32436,
      lng: 120.21671,
    },
  },
  {
    id: "360102",
    fullname: "东湖区",
    location: {
      lat: 28.68503,
      lng: 115.89925,
    },
  },
  {
    id: "360103",
    fullname: "西湖区",
    location: {
      lat: 28.65619,
      lng: 115.87683,
    },
  },
  {
    id: "360104",
    fullname: "青云谱区",
    location: {
      lat: 28.62084,
      lng: 115.9258,
    },
  },
  {
    id: "360111",
    fullname: "青山湖区",
    location: {
      lat: 28.68194,
      lng: 115.96191,
    },
  },
  {
    id: "360112",
    fullname: "新建区",
    location: {
      lat: 28.6925,
      lng: 115.81529,
    },
  },
  {
    id: "360113",
    fullname: "红谷滩区",
    location: {
      lat: 28.69814,
      lng: 115.857958,
    },
  },
  {
    id: "360121",
    fullname: "南昌县",
    location: {
      lat: 28.54538,
      lng: 115.94422,
    },
  },
  {
    id: "360123",
    fullname: "安义县",
    location: {
      lat: 28.84444,
      lng: 115.54927,
    },
  },
  {
    id: "360124",
    fullname: "进贤县",
    location: {
      lat: 28.37737,
      lng: 116.24145,
    },
  },
  {
    id: "360202",
    fullname: "昌江区",
    location: {
      lat: 29.27324,
      lng: 117.18366,
    },
  },
  {
    id: "360203",
    fullname: "珠山区",
    location: {
      lat: 29.30005,
      lng: 117.20275,
    },
  },
  {
    id: "360222",
    fullname: "浮梁县",
    location: {
      lat: 29.35159,
      lng: 117.21523,
    },
  },
  {
    id: "360281",
    fullname: "乐平市",
    location: {
      lat: 28.96173,
      lng: 117.129,
    },
  },
  {
    id: "360302",
    fullname: "安源区",
    location: {
      lat: 27.61552,
      lng: 113.87163,
    },
  },
  {
    id: "360313",
    fullname: "湘东区",
    location: {
      lat: 27.64069,
      lng: 113.73421,
    },
  },
  {
    id: "360321",
    fullname: "莲花县",
    location: {
      lat: 27.12761,
      lng: 113.96123,
    },
  },
  {
    id: "360322",
    fullname: "上栗县",
    location: {
      lat: 27.88042,
      lng: 113.79537,
    },
  },
  {
    id: "360323",
    fullname: "芦溪县",
    location: {
      lat: 27.63064,
      lng: 114.02956,
    },
  },
  {
    id: "360402",
    fullname: "濂溪区",
    location: {
      lat: 29.66819,
      lng: 115.99267,
    },
  },
  {
    id: "360403",
    fullname: "浔阳区",
    location: {
      lat: 29.7055,
      lng: 116.00144,
    },
  },
  {
    id: "360404",
    fullname: "柴桑区",
    location: {
      lat: 29.60855,
      lng: 115.91135,
    },
  },
  {
    id: "360423",
    fullname: "武宁县",
    location: {
      lat: 29.25622,
      lng: 115.10065,
    },
  },
  {
    id: "360424",
    fullname: "修水县",
    location: {
      lat: 29.02533,
      lng: 114.54688,
    },
  },
  {
    id: "360425",
    fullname: "永修县",
    location: {
      lat: 29.02097,
      lng: 115.80916,
    },
  },
  {
    id: "360426",
    fullname: "德安县",
    location: {
      lat: 29.31344,
      lng: 115.75605,
    },
  },
  {
    id: "360428",
    fullname: "都昌县",
    location: {
      lat: 29.27307,
      lng: 116.20409,
    },
  },
  {
    id: "360429",
    fullname: "湖口县",
    location: {
      lat: 29.73942,
      lng: 116.22025,
    },
  },
  {
    id: "360430",
    fullname: "彭泽县",
    location: {
      lat: 29.89613,
      lng: 116.54911,
    },
  },
  {
    id: "360481",
    fullname: "瑞昌市",
    location: {
      lat: 29.67658,
      lng: 115.68103,
    },
  },
  {
    id: "360482",
    fullname: "共青城市",
    location: {
      lat: 29.24955,
      lng: 115.81477,
    },
  },
  {
    id: "360483",
    fullname: "庐山市",
    location: {
      lat: 29.44821,
      lng: 116.04512,
    },
  },
  {
    id: "360502",
    fullname: "渝水区",
    location: {
      lat: 27.80038,
      lng: 114.94461,
    },
  },
  {
    id: "360521",
    fullname: "分宜县",
    location: {
      lat: 27.81476,
      lng: 114.69191,
    },
  },
  {
    id: "360602",
    fullname: "月湖区",
    location: {
      lat: 28.23902,
      lng: 117.03708,
    },
  },
  {
    id: "360603",
    fullname: "余江区",
    location: {
      lat: 28.20991,
      lng: 116.81834,
    },
  },
  {
    id: "360681",
    fullname: "贵溪市",
    location: {
      lat: 28.29252,
      lng: 117.24525,
    },
  },
  {
    id: "360702",
    fullname: "章贡区",
    location: {
      lat: 25.81751,
      lng: 114.92085,
    },
  },
  {
    id: "360703",
    fullname: "南康区",
    location: {
      lat: 25.66144,
      lng: 114.76535,
    },
  },
  {
    id: "360704",
    fullname: "赣县区",
    location: {
      lat: 25.86076,
      lng: 115.01161,
    },
  },
  {
    id: "360722",
    fullname: "信丰县",
    location: {
      lat: 25.38617,
      lng: 114.92285,
    },
  },
  {
    id: "360723",
    fullname: "大余县",
    location: {
      lat: 25.40148,
      lng: 114.36195,
    },
  },
  {
    id: "360724",
    fullname: "上犹县",
    location: {
      lat: 25.79086,
      lng: 114.53754,
    },
  },
  {
    id: "360725",
    fullname: "崇义县",
    location: {
      lat: 25.68165,
      lng: 114.30784,
    },
  },
  {
    id: "360726",
    fullname: "安远县",
    location: {
      lat: 25.13702,
      lng: 115.39379,
    },
  },
  {
    id: "360728",
    fullname: "定南县",
    location: {
      lat: 24.7855,
      lng: 115.02739,
    },
  },
  {
    id: "360729",
    fullname: "全南县",
    location: {
      lat: 24.74235,
      lng: 114.53012,
    },
  },
  {
    id: "360730",
    fullname: "宁都县",
    location: {
      lat: 26.47019,
      lng: 116.00941,
    },
  },
  {
    id: "360731",
    fullname: "于都县",
    location: {
      lat: 25.95184,
      lng: 115.41544,
    },
  },
  {
    id: "360732",
    fullname: "兴国县",
    location: {
      lat: 26.33779,
      lng: 115.36314,
    },
  },
  {
    id: "360733",
    fullname: "会昌县",
    location: {
      lat: 25.60039,
      lng: 115.786,
    },
  },
  {
    id: "360734",
    fullname: "寻乌县",
    location: {
      lat: 24.96351,
      lng: 115.64673,
    },
  },
  {
    id: "360735",
    fullname: "石城县",
    location: {
      lat: 26.32691,
      lng: 116.35432,
    },
  },
  {
    id: "360781",
    fullname: "瑞金市",
    location: {
      lat: 25.88562,
      lng: 116.02709,
    },
  },
  {
    id: "360783",
    fullname: "龙南市",
    location: {
      lat: 24.91092,
      lng: 114.79013,
    },
  },
  {
    id: "360802",
    fullname: "吉州区",
    location: {
      lat: 27.1448,
      lng: 114.99457,
    },
  },
  {
    id: "360803",
    fullname: "青原区",
    location: {
      lat: 27.08195,
      lng: 115.01465,
    },
  },
  {
    id: "360821",
    fullname: "吉安县",
    location: {
      lat: 27.026434,
      lng: 114.90938,
    },
  },
  {
    id: "360822",
    fullname: "吉水县",
    location: {
      lat: 27.22976,
      lng: 115.1355,
    },
  },
  {
    id: "360823",
    fullname: "峡江县",
    location: {
      lat: 27.58289,
      lng: 115.31643,
    },
  },
  {
    id: "360824",
    fullname: "新干县",
    location: {
      lat: 27.74016,
      lng: 115.38692,
    },
  },
  {
    id: "360825",
    fullname: "永丰县",
    location: {
      lat: 27.31815,
      lng: 115.44189,
    },
  },
  {
    id: "360826",
    fullname: "泰和县",
    location: {
      lat: 26.78993,
      lng: 114.90887,
    },
  },
  {
    id: "360827",
    fullname: "遂川县",
    location: {
      lat: 26.31363,
      lng: 114.52052,
    },
  },
  {
    id: "360828",
    fullname: "万安县",
    location: {
      lat: 26.45825,
      lng: 114.78615,
    },
  },
  {
    id: "360829",
    fullname: "安福县",
    location: {
      lat: 27.3928,
      lng: 114.6196,
    },
  },
  {
    id: "360830",
    fullname: "永新县",
    location: {
      lat: 26.94498,
      lng: 114.24307,
    },
  },
  {
    id: "360881",
    fullname: "井冈山市",
    location: {
      lat: 26.74808,
      lng: 114.28953,
    },
  },
  {
    id: "360902",
    fullname: "袁州区",
    location: {
      lat: 27.79817,
      lng: 114.42773,
    },
  },
  {
    id: "360921",
    fullname: "奉新县",
    location: {
      lat: 28.68793,
      lng: 115.40037,
    },
  },
  {
    id: "360922",
    fullname: "万载县",
    location: {
      lat: 28.1061,
      lng: 114.44551,
    },
  },
  {
    id: "360923",
    fullname: "上高县",
    location: {
      lat: 28.23337,
      lng: 114.9248,
    },
  },
  {
    id: "360924",
    fullname: "宜丰县",
    location: {
      lat: 28.3938,
      lng: 114.80369,
    },
  },
  {
    id: "360925",
    fullname: "靖安县",
    location: {
      lat: 28.86138,
      lng: 115.36268,
    },
  },
  {
    id: "360926",
    fullname: "铜鼓县",
    location: {
      lat: 28.52182,
      lng: 114.37071,
    },
  },
  {
    id: "360981",
    fullname: "丰城市",
    location: {
      lat: 28.1592,
      lng: 115.77121,
    },
  },
  {
    id: "360982",
    fullname: "樟树市",
    location: {
      lat: 28.05589,
      lng: 115.54615,
    },
  },
  {
    id: "360983",
    fullname: "高安市",
    location: {
      lat: 28.41729,
      lng: 115.37562,
    },
  },
  {
    id: "361002",
    fullname: "临川区",
    location: {
      lat: 27.93473,
      lng: 116.30986,
    },
  },
  {
    id: "361003",
    fullname: "东乡区",
    location: {
      lat: 28.24771,
      lng: 116.60334,
    },
  },
  {
    id: "361021",
    fullname: "南城县",
    location: {
      lat: 27.5684,
      lng: 116.63775,
    },
  },
  {
    id: "361022",
    fullname: "黎川县",
    location: {
      lat: 27.28236,
      lng: 116.90753,
    },
  },
  {
    id: "361023",
    fullname: "南丰县",
    location: {
      lat: 27.21863,
      lng: 116.52526,
    },
  },
  {
    id: "361024",
    fullname: "崇仁县",
    location: {
      lat: 27.76437,
      lng: 116.06124,
    },
  },
  {
    id: "361025",
    fullname: "乐安县",
    location: {
      lat: 27.42814,
      lng: 115.83109,
    },
  },
  {
    id: "361026",
    fullname: "宜黄县",
    location: {
      lat: 27.55489,
      lng: 116.23628,
    },
  },
  {
    id: "361027",
    fullname: "金溪县",
    location: {
      lat: 27.91912,
      lng: 116.75485,
    },
  },
  {
    id: "361028",
    fullname: "资溪县",
    location: {
      lat: 27.70594,
      lng: 117.06101,
    },
  },
  {
    id: "361030",
    fullname: "广昌县",
    location: {
      lat: 26.83729,
      lng: 116.32573,
    },
  },
  {
    id: "361102",
    fullname: "信州区",
    location: {
      lat: 28.42995,
      lng: 117.96469,
    },
  },
  {
    id: "361103",
    fullname: "广丰区",
    location: {
      lat: 28.43631,
      lng: 118.19133,
    },
  },
  {
    id: "361104",
    fullname: "广信区",
    location: {
      lat: 28.448695,
      lng: 117.908178,
    },
  },
  {
    id: "361123",
    fullname: "玉山县",
    location: {
      lat: 28.68194,
      lng: 118.24481,
    },
  },
  {
    id: "361124",
    fullname: "铅山县",
    location: {
      lat: 28.31535,
      lng: 117.70942,
    },
  },
  {
    id: "361125",
    fullname: "横峰县",
    location: {
      lat: 28.4072,
      lng: 117.59644,
    },
  },
  {
    id: "361126",
    fullname: "弋阳县",
    location: {
      lat: 28.37754,
      lng: 117.44821,
    },
  },
  {
    id: "361127",
    fullname: "余干县",
    location: {
      lat: 28.70211,
      lng: 116.6956,
    },
  },
  {
    id: "361128",
    fullname: "鄱阳县",
    location: {
      lat: 29.00563,
      lng: 116.70343,
    },
  },
  {
    id: "361129",
    fullname: "万年县",
    location: {
      lat: 28.69466,
      lng: 117.05839,
    },
  },
  {
    id: "361130",
    fullname: "婺源县",
    location: {
      lat: 29.24791,
      lng: 117.86192,
    },
  },
  {
    id: "361181",
    fullname: "德兴市",
    location: {
      lat: 28.94654,
      lng: 117.57884,
    },
  },
  {
    id: "370102",
    fullname: "历下区",
    location: {
      lat: 36.66645,
      lng: 117.07641,
    },
  },
  {
    id: "370103",
    fullname: "市中区",
    location: {
      lat: 36.65118,
      lng: 116.99744,
    },
  },
  {
    id: "370104",
    fullname: "槐荫区",
    location: {
      lat: 36.65142,
      lng: 116.90084,
    },
  },
  {
    id: "370105",
    fullname: "天桥区",
    location: {
      lat: 36.67789,
      lng: 116.98737,
    },
  },
  {
    id: "370112",
    fullname: "历城区",
    location: {
      lat: 36.68013,
      lng: 117.06533,
    },
  },
  {
    id: "370113",
    fullname: "长清区",
    location: {
      lat: 36.55358,
      lng: 116.75199,
    },
  },
  {
    id: "370114",
    fullname: "章丘区",
    location: {
      lat: 36.68124,
      lng: 117.52627,
    },
  },
  {
    id: "370115",
    fullname: "济阳区",
    location: {
      lat: 36.97847,
      lng: 117.17333,
    },
  },
  {
    id: "370116",
    fullname: "莱芜区",
    location: {
      lat: 36.20317,
      lng: 117.65992,
    },
  },
  {
    id: "370117",
    fullname: "钢城区",
    location: {
      lat: 36.05866,
      lng: 117.81107,
    },
  },
  {
    id: "370124",
    fullname: "平阴县",
    location: {
      lat: 36.28937,
      lng: 116.45599,
    },
  },
  {
    id: "370126",
    fullname: "商河县",
    location: {
      lat: 37.30907,
      lng: 117.1571,
    },
  },
  {
    id: "370202",
    fullname: "市南区",
    location: {
      lat: 36.07515,
      lng: 120.41283,
    },
  },
  {
    id: "370203",
    fullname: "市北区",
    location: {
      lat: 36.08743,
      lng: 120.37479,
    },
  },
  {
    id: "370211",
    fullname: "黄岛区",
    location: {
      lat: 35.95995,
      lng: 120.19653,
    },
  },
  {
    id: "370212",
    fullname: "崂山区",
    location: {
      lat: 36.10811,
      lng: 120.46803,
    },
  },
  {
    id: "370213",
    fullname: "李沧区",
    location: {
      lat: 36.14508,
      lng: 120.43294,
    },
  },
  {
    id: "370214",
    fullname: "城阳区",
    location: {
      lat: 36.30744,
      lng: 120.39629,
    },
  },
  {
    id: "370215",
    fullname: "即墨区",
    location: {
      lat: 36.38932,
      lng: 120.44715,
    },
  },
  {
    id: "370281",
    fullname: "胶州市",
    location: {
      lat: 36.26445,
      lng: 120.03354,
    },
  },
  {
    id: "370283",
    fullname: "平度市",
    location: {
      lat: 36.7867,
      lng: 119.95994,
    },
  },
  {
    id: "370285",
    fullname: "莱西市",
    location: {
      lat: 36.88808,
      lng: 120.51777,
    },
  },
  {
    id: "370302",
    fullname: "淄川区",
    location: {
      lat: 36.6435,
      lng: 117.96673,
    },
  },
  {
    id: "370303",
    fullname: "张店区",
    location: {
      lat: 36.80661,
      lng: 118.0179,
    },
  },
  {
    id: "370304",
    fullname: "博山区",
    location: {
      lat: 36.49473,
      lng: 117.86172,
    },
  },
  {
    id: "370305",
    fullname: "临淄区",
    location: {
      lat: 36.82593,
      lng: 118.30971,
    },
  },
  {
    id: "370306",
    fullname: "周村区",
    location: {
      lat: 36.80298,
      lng: 117.86974,
    },
  },
  {
    id: "370321",
    fullname: "桓台县",
    location: {
      lat: 36.95933,
      lng: 118.09797,
    },
  },
  {
    id: "370322",
    fullname: "高青县",
    location: {
      lat: 37.17105,
      lng: 117.82675,
    },
  },
  {
    id: "370323",
    fullname: "沂源县",
    location: {
      lat: 36.18488,
      lng: 118.17077,
    },
  },
  {
    id: "370402",
    fullname: "市中区",
    location: {
      lat: 34.86426,
      lng: 117.55601,
    },
  },
  {
    id: "370403",
    fullname: "薛城区",
    location: {
      lat: 34.79502,
      lng: 117.2632,
    },
  },
  {
    id: "370404",
    fullname: "峄城区",
    location: {
      lat: 34.772167,
      lng: 117.590562,
    },
  },
  {
    id: "370405",
    fullname: "台儿庄区",
    location: {
      lat: 34.56261,
      lng: 117.73385,
    },
  },
  {
    id: "370406",
    fullname: "山亭区",
    location: {
      lat: 35.09963,
      lng: 117.4613,
    },
  },
  {
    id: "370481",
    fullname: "滕州市",
    location: {
      lat: 35.11338,
      lng: 117.16596,
    },
  },
  {
    id: "370502",
    fullname: "东营区",
    location: {
      lat: 37.44878,
      lng: 118.58215,
    },
  },
  {
    id: "370503",
    fullname: "河口区",
    location: {
      lat: 37.88624,
      lng: 118.52544,
    },
  },
  {
    id: "370505",
    fullname: "垦利区",
    location: {
      lat: 37.58748,
      lng: 118.54768,
    },
  },
  {
    id: "370522",
    fullname: "利津县",
    location: {
      lat: 37.49028,
      lng: 118.25536,
    },
  },
  {
    id: "370523",
    fullname: "广饶县",
    location: {
      lat: 37.05359,
      lng: 118.40702,
    },
  },
  {
    id: "370602",
    fullname: "芝罘区",
    location: {
      lat: 37.54061,
      lng: 121.40011,
    },
  },
  {
    id: "370611",
    fullname: "福山区",
    location: {
      lat: 37.49794,
      lng: 121.26757,
    },
  },
  {
    id: "370612",
    fullname: "牟平区",
    location: {
      lat: 37.386939,
      lng: 121.60047,
    },
  },
  {
    id: "370613",
    fullname: "莱山区",
    location: {
      lat: 37.51104,
      lng: 121.44547,
    },
  },
  {
    id: "370614",
    fullname: "蓬莱区",
    location: {
      lat: 37.79547,
      lng: 120.829031,
    },
  },
  {
    id: "370681",
    fullname: "龙口市",
    location: {
      lat: 37.64345,
      lng: 120.47872,
    },
  },
  {
    id: "370682",
    fullname: "莱阳市",
    location: {
      lat: 36.9788,
      lng: 120.71173,
    },
  },
  {
    id: "370683",
    fullname: "莱州市",
    location: {
      lat: 37.17702,
      lng: 119.94222,
    },
  },
  {
    id: "370685",
    fullname: "招远市",
    location: {
      lat: 37.35531,
      lng: 120.43421,
    },
  },
  {
    id: "370686",
    fullname: "栖霞市",
    location: {
      lat: 37.33592,
      lng: 120.84956,
    },
  },
  {
    id: "370687",
    fullname: "海阳市",
    location: {
      lat: 36.77645,
      lng: 121.15846,
    },
  },
  {
    id: "370702",
    fullname: "潍城区",
    location: {
      lat: 36.72667,
      lng: 119.02389,
    },
  },
  {
    id: "370703",
    fullname: "寒亭区",
    location: {
      lat: 36.77506,
      lng: 119.21994,
    },
  },
  {
    id: "370704",
    fullname: "坊子区",
    location: {
      lat: 36.65458,
      lng: 119.16607,
    },
  },
  {
    id: "370705",
    fullname: "奎文区",
    location: {
      lat: 36.70864,
      lng: 119.13279,
    },
  },
  {
    id: "370724",
    fullname: "临朐县",
    location: {
      lat: 36.51231,
      lng: 118.543,
    },
  },
  {
    id: "370725",
    fullname: "昌乐县",
    location: {
      lat: 36.70702,
      lng: 118.82984,
    },
  },
  {
    id: "370781",
    fullname: "青州市",
    location: {
      lat: 36.68456,
      lng: 118.47966,
    },
  },
  {
    id: "370782",
    fullname: "诸城市",
    location: {
      lat: 35.99583,
      lng: 119.40983,
    },
  },
  {
    id: "370783",
    fullname: "寿光市",
    location: {
      lat: 36.85541,
      lng: 118.79098,
    },
  },
  {
    id: "370784",
    fullname: "安丘市",
    location: {
      lat: 36.47842,
      lng: 119.21784,
    },
  },
  {
    id: "370785",
    fullname: "高密市",
    location: {
      lat: 36.38257,
      lng: 119.75568,
    },
  },
  {
    id: "370786",
    fullname: "昌邑市",
    location: {
      lat: 36.85884,
      lng: 119.39862,
    },
  },
  {
    id: "370811",
    fullname: "任城区",
    location: {
      lat: 35.4082,
      lng: 116.59649,
    },
  },
  {
    id: "370812",
    fullname: "兖州区",
    location: {
      lat: 35.5526,
      lng: 116.7857,
    },
  },
  {
    id: "370826",
    fullname: "微山县",
    location: {
      lat: 34.806758,
      lng: 117.12872,
    },
  },
  {
    id: "370827",
    fullname: "鱼台县",
    location: {
      lat: 35.01161,
      lng: 116.65046,
    },
  },
  {
    id: "370828",
    fullname: "金乡县",
    location: {
      lat: 35.066614,
      lng: 116.311467,
    },
  },
  {
    id: "370829",
    fullname: "嘉祥县",
    location: {
      lat: 35.4075,
      lng: 116.34249,
    },
  },
  {
    id: "370830",
    fullname: "汶上县",
    location: {
      lat: 35.73281,
      lng: 116.48917,
    },
  },
  {
    id: "370831",
    fullname: "泗水县",
    location: {
      lat: 35.66471,
      lng: 117.25216,
    },
  },
  {
    id: "370832",
    fullname: "梁山县",
    location: {
      lat: 35.8024,
      lng: 116.09584,
    },
  },
  {
    id: "370881",
    fullname: "曲阜市",
    location: {
      lat: 35.58082,
      lng: 116.98648,
    },
  },
  {
    id: "370883",
    fullname: "邹城市",
    location: {
      lat: 35.405227,
      lng: 117.003885,
    },
  },
  {
    id: "370902",
    fullname: "泰山区",
    location: {
      lat: 36.19198,
      lng: 117.13526,
    },
  },
  {
    id: "370911",
    fullname: "岱岳区",
    location: {
      lat: 36.18752,
      lng: 117.0418,
    },
  },
  {
    id: "370921",
    fullname: "宁阳县",
    location: {
      lat: 35.75961,
      lng: 116.80727,
    },
  },
  {
    id: "370923",
    fullname: "东平县",
    location: {
      lat: 35.93708,
      lng: 116.47024,
    },
  },
  {
    id: "370982",
    fullname: "新泰市",
    location: {
      lat: 35.90878,
      lng: 117.768,
    },
  },
  {
    id: "370983",
    fullname: "肥城市",
    location: {
      lat: 36.18245,
      lng: 116.76917,
    },
  },
  {
    id: "371002",
    fullname: "环翠区",
    location: {
      lat: 37.50212,
      lng: 122.12348,
    },
  },
  {
    id: "371003",
    fullname: "文登区",
    location: {
      lat: 37.19397,
      lng: 122.0581,
    },
  },
  {
    id: "371082",
    fullname: "荣成市",
    location: {
      lat: 37.16523,
      lng: 122.48628,
    },
  },
  {
    id: "371083",
    fullname: "乳山市",
    location: {
      lat: 36.92021,
      lng: 121.5402,
    },
  },
  {
    id: "371102",
    fullname: "东港区",
    location: {
      lat: 35.42545,
      lng: 119.46242,
    },
  },
  {
    id: "371103",
    fullname: "岚山区",
    location: {
      lat: 35.12206,
      lng: 119.31891,
    },
  },
  {
    id: "371121",
    fullname: "五莲县",
    location: {
      lat: 35.75018,
      lng: 119.20875,
    },
  },
  {
    id: "371122",
    fullname: "莒县",
    location: {
      lat: 35.57997,
      lng: 118.836869,
    },
  },
  {
    id: "371302",
    fullname: "兰山区",
    location: {
      lat: 35.05151,
      lng: 118.34787,
    },
  },
  {
    id: "371311",
    fullname: "罗庄区",
    location: {
      lat: 34.996442,
      lng: 118.284444,
    },
  },
  {
    id: "371312",
    fullname: "河东区",
    location: {
      lat: 35.08729,
      lng: 118.40184,
    },
  },
  {
    id: "371321",
    fullname: "沂南县",
    location: {
      lat: 35.55001,
      lng: 118.46566,
    },
  },
  {
    id: "371322",
    fullname: "郯城县",
    location: {
      lat: 34.613569,
      lng: 118.367171,
    },
  },
  {
    id: "371323",
    fullname: "沂水县",
    location: {
      lat: 35.79034,
      lng: 118.62782,
    },
  },
  {
    id: "371324",
    fullname: "兰陵县",
    location: {
      lat: 34.857286,
      lng: 118.070709,
    },
  },
  {
    id: "371325",
    fullname: "费县",
    location: {
      lat: 35.26659,
      lng: 117.97711,
    },
  },
  {
    id: "371326",
    fullname: "平邑县",
    location: {
      lat: 35.50587,
      lng: 117.64048,
    },
  },
  {
    id: "371327",
    fullname: "莒南县",
    location: {
      lat: 35.17486,
      lng: 118.83543,
    },
  },
  {
    id: "371328",
    fullname: "蒙阴县",
    location: {
      lat: 35.7101,
      lng: 117.94494,
    },
  },
  {
    id: "371329",
    fullname: "临沭县",
    location: {
      lat: 34.91985,
      lng: 118.65063,
    },
  },
  {
    id: "371402",
    fullname: "德城区",
    location: {
      lat: 37.45079,
      lng: 116.29941,
    },
  },
  {
    id: "371403",
    fullname: "陵城区",
    location: {
      lat: 37.33566,
      lng: 116.57634,
    },
  },
  {
    id: "371422",
    fullname: "宁津县",
    location: {
      lat: 37.65221,
      lng: 116.80023,
    },
  },
  {
    id: "371423",
    fullname: "庆云县",
    location: {
      lat: 37.77528,
      lng: 117.38497,
    },
  },
  {
    id: "371424",
    fullname: "临邑县",
    location: {
      lat: 37.18998,
      lng: 116.8666,
    },
  },
  {
    id: "371425",
    fullname: "齐河县",
    location: {
      lat: 36.79492,
      lng: 116.76002,
    },
  },
  {
    id: "371426",
    fullname: "平原县",
    location: {
      lat: 37.16538,
      lng: 116.43395,
    },
  },
  {
    id: "371427",
    fullname: "夏津县",
    location: {
      lat: 36.94856,
      lng: 116.00175,
    },
  },
  {
    id: "371428",
    fullname: "武城县",
    location: {
      lat: 37.21317,
      lng: 116.06923,
    },
  },
  {
    id: "371481",
    fullname: "乐陵市",
    location: {
      lat: 37.72913,
      lng: 117.23065,
    },
  },
  {
    id: "371482",
    fullname: "禹城市",
    location: {
      lat: 36.93394,
      lng: 116.63813,
    },
  },
  {
    id: "371502",
    fullname: "东昌府区",
    location: {
      lat: 36.43452,
      lng: 115.98847,
    },
  },
  {
    id: "371503",
    fullname: "茌平区",
    location: {
      lat: 36.58068,
      lng: 116.25522,
    },
  },
  {
    id: "371521",
    fullname: "阳谷县",
    location: {
      lat: 36.11447,
      lng: 115.79131,
    },
  },
  {
    id: "371522",
    fullname: "莘县",
    location: {
      lat: 36.23361,
      lng: 115.67072,
    },
  },
  {
    id: "371524",
    fullname: "东阿县",
    location: {
      lat: 36.33503,
      lng: 116.24773,
    },
  },
  {
    id: "371525",
    fullname: "冠县",
    location: {
      lat: 36.48335,
      lng: 115.44263,
    },
  },
  {
    id: "371526",
    fullname: "高唐县",
    location: {
      lat: 36.86602,
      lng: 116.23111,
    },
  },
  {
    id: "371581",
    fullname: "临清市",
    location: {
      lat: 36.83834,
      lng: 115.70504,
    },
  },
  {
    id: "371602",
    fullname: "滨城区",
    location: {
      lat: 37.42726,
      lng: 118.02279,
    },
  },
  {
    id: "371603",
    fullname: "沾化区",
    location: {
      lat: 37.70058,
      lng: 118.09882,
    },
  },
  {
    id: "371621",
    fullname: "惠民县",
    location: {
      lat: 37.48982,
      lng: 117.5092,
    },
  },
  {
    id: "371622",
    fullname: "阳信县",
    location: {
      lat: 37.64109,
      lng: 117.5782,
    },
  },
  {
    id: "371623",
    fullname: "无棣县",
    location: {
      lat: 37.77027,
      lng: 117.62581,
    },
  },
  {
    id: "371625",
    fullname: "博兴县",
    location: {
      lat: 37.15299,
      lng: 118.11096,
    },
  },
  {
    id: "371681",
    fullname: "邹平市",
    location: {
      lat: 36.86299,
      lng: 117.74309,
    },
  },
  {
    id: "371702",
    fullname: "牡丹区",
    location: {
      lat: 35.251641,
      lng: 115.416629,
    },
  },
  {
    id: "371703",
    fullname: "定陶区",
    location: {
      lat: 35.07095,
      lng: 115.57298,
    },
  },
  {
    id: "371721",
    fullname: "曹县",
    location: {
      lat: 34.82553,
      lng: 115.54214,
    },
  },
  {
    id: "371722",
    fullname: "单县",
    location: {
      lat: 34.79438,
      lng: 116.08724,
    },
  },
  {
    id: "371723",
    fullname: "成武县",
    location: {
      lat: 34.952461,
      lng: 115.889584,
    },
  },
  {
    id: "371724",
    fullname: "巨野县",
    location: {
      lat: 35.39633,
      lng: 116.09495,
    },
  },
  {
    id: "371725",
    fullname: "郓城县",
    location: {
      lat: 35.59984,
      lng: 115.94364,
    },
  },
  {
    id: "371726",
    fullname: "鄄城县",
    location: {
      lat: 35.533654,
      lng: 115.544581,
    },
  },
  {
    id: "371728",
    fullname: "东明县",
    location: {
      lat: 35.28953,
      lng: 115.09016,
    },
  },
  {
    id: "410102",
    fullname: "中原区",
    location: {
      lat: 34.74821,
      lng: 113.61332,
    },
  },
  {
    id: "410103",
    fullname: "二七区",
    location: {
      lat: 34.72468,
      lng: 113.6401,
    },
  },
  {
    id: "410104",
    fullname: "管城回族区",
    location: {
      lat: 34.75381,
      lng: 113.67739,
    },
  },
  {
    id: "410105",
    fullname: "金水区",
    location: {
      lat: 34.79977,
      lng: 113.66072,
    },
  },
  {
    id: "410106",
    fullname: "上街区",
    location: {
      lat: 34.802805,
      lng: 113.308917,
    },
  },
  {
    id: "410108",
    fullname: "惠济区",
    location: {
      lat: 34.86739,
      lng: 113.61694,
    },
  },
  {
    id: "410122",
    fullname: "中牟县",
    location: {
      lat: 34.71903,
      lng: 113.97624,
    },
  },
  {
    id: "410181",
    fullname: "巩义市",
    location: {
      lat: 34.74798,
      lng: 113.02206,
    },
  },
  {
    id: "410182",
    fullname: "荥阳市",
    location: {
      lat: 34.78762,
      lng: 113.38349,
    },
  },
  {
    id: "410183",
    fullname: "新密市",
    location: {
      lat: 34.53952,
      lng: 113.39044,
    },
  },
  {
    id: "410184",
    fullname: "新郑市",
    location: {
      lat: 34.39605,
      lng: 113.74161,
    },
  },
  {
    id: "410185",
    fullname: "登封市",
    location: {
      lat: 34.45348,
      lng: 113.05028,
    },
  },
  {
    id: "410202",
    fullname: "龙亭区",
    location: {
      lat: 34.81568,
      lng: 114.35461,
    },
  },
  {
    id: "410203",
    fullname: "顺河回族区",
    location: {
      lat: 34.79971,
      lng: 114.36435,
    },
  },
  {
    id: "410204",
    fullname: "鼓楼区",
    location: {
      lat: 34.78861,
      lng: 114.34816,
    },
  },
  {
    id: "410205",
    fullname: "禹王台区",
    location: {
      lat: 34.77717,
      lng: 114.34826,
    },
  },
  {
    id: "410212",
    fullname: "祥符区",
    location: {
      lat: 34.757,
      lng: 114.44136,
    },
  },
  {
    id: "410221",
    fullname: "杞县",
    location: {
      lat: 34.549421,
      lng: 114.782265,
    },
  },
  {
    id: "410222",
    fullname: "通许县",
    location: {
      lat: 34.48044,
      lng: 114.46741,
    },
  },
  {
    id: "410223",
    fullname: "尉氏县",
    location: {
      lat: 34.41161,
      lng: 114.19297,
    },
  },
  {
    id: "410225",
    fullname: "兰考县",
    location: {
      lat: 34.8223,
      lng: 114.82115,
    },
  },
  {
    id: "410302",
    fullname: "老城区",
    location: {
      lat: 34.68356,
      lng: 112.46958,
    },
  },
  {
    id: "410303",
    fullname: "西工区",
    location: {
      lat: 34.66047,
      lng: 112.42788,
    },
  },
  {
    id: "410304",
    fullname: "瀍河回族区",
    location: {
      lat: 34.70431,
      lng: 112.51078,
    },
  },
  {
    id: "410305",
    fullname: "涧西区",
    location: {
      lat: 34.65774,
      lng: 112.3957,
    },
  },
  {
    id: "410306",
    fullname: "吉利区",
    location: {
      lat: 34.90099,
      lng: 112.58888,
    },
  },
  {
    id: "410311",
    fullname: "洛龙区",
    location: {
      lat: 34.6196,
      lng: 112.4647,
    },
  },
  {
    id: "410322",
    fullname: "孟津县",
    location: {
      lat: 34.82573,
      lng: 112.44535,
    },
  },
  {
    id: "410323",
    fullname: "新安县",
    location: {
      lat: 34.72818,
      lng: 112.13242,
    },
  },
  {
    id: "410324",
    fullname: "栾川县",
    location: {
      lat: 33.78576,
      lng: 111.61579,
    },
  },
  {
    id: "410325",
    fullname: "嵩县",
    location: {
      lat: 34.13451,
      lng: 112.0857,
    },
  },
  {
    id: "410326",
    fullname: "汝阳县",
    location: {
      lat: 34.15388,
      lng: 112.47317,
    },
  },
  {
    id: "410327",
    fullname: "宜阳县",
    location: {
      lat: 34.514672,
      lng: 112.179189,
    },
  },
  {
    id: "410328",
    fullname: "洛宁县",
    location: {
      lat: 34.38917,
      lng: 111.65313,
    },
  },
  {
    id: "410329",
    fullname: "伊川县",
    location: {
      lat: 34.42135,
      lng: 112.42568,
    },
  },
  {
    id: "410381",
    fullname: "偃师市",
    location: {
      lat: 34.72763,
      lng: 112.78965,
    },
  },
  {
    id: "410402",
    fullname: "新华区",
    location: {
      lat: 33.73741,
      lng: 113.29431,
    },
  },
  {
    id: "410403",
    fullname: "卫东区",
    location: {
      lat: 33.73469,
      lng: 113.33503,
    },
  },
  {
    id: "410404",
    fullname: "石龙区",
    location: {
      lat: 33.89889,
      lng: 112.89888,
    },
  },
  {
    id: "410411",
    fullname: "湛河区",
    location: {
      lat: 33.7009,
      lng: 113.27602,
    },
  },
  {
    id: "410421",
    fullname: "宝丰县",
    location: {
      lat: 33.8684,
      lng: 113.05479,
    },
  },
  {
    id: "410422",
    fullname: "叶县",
    location: {
      lat: 33.62683,
      lng: 113.35737,
    },
  },
  {
    id: "410423",
    fullname: "鲁山县",
    location: {
      lat: 33.73854,
      lng: 112.90802,
    },
  },
  {
    id: "410425",
    fullname: "郏县",
    location: {
      lat: 33.9718,
      lng: 113.21262,
    },
  },
  {
    id: "410481",
    fullname: "舞钢市",
    location: {
      lat: 33.29315,
      lng: 113.52531,
    },
  },
  {
    id: "410482",
    fullname: "汝州市",
    location: {
      lat: 34.16717,
      lng: 112.84437,
    },
  },
  {
    id: "410502",
    fullname: "文峰区",
    location: {
      lat: 36.09052,
      lng: 114.35688,
    },
  },
  {
    id: "410503",
    fullname: "北关区",
    location: {
      lat: 36.10849,
      lng: 114.35511,
    },
  },
  {
    id: "410505",
    fullname: "殷都区",
    location: {
      lat: 36.10994,
      lng: 114.30345,
    },
  },
  {
    id: "410506",
    fullname: "龙安区",
    location: {
      lat: 36.07609,
      lng: 114.30089,
    },
  },
  {
    id: "410522",
    fullname: "安阳县",
    location: {
      lat: 36.21256,
      lng: 114.23182,
    },
  },
  {
    id: "410523",
    fullname: "汤阴县",
    location: {
      lat: 35.92138,
      lng: 114.35723,
    },
  },
  {
    id: "410526",
    fullname: "滑县",
    location: {
      lat: 35.57534,
      lng: 114.5193,
    },
  },
  {
    id: "410527",
    fullname: "内黄县",
    location: {
      lat: 35.94714,
      lng: 114.89936,
    },
  },
  {
    id: "410581",
    fullname: "林州市",
    location: {
      lat: 36.08308,
      lng: 113.81908,
    },
  },
  {
    id: "410602",
    fullname: "鹤山区",
    location: {
      lat: 35.9547,
      lng: 114.1633,
    },
  },
  {
    id: "410603",
    fullname: "山城区",
    location: {
      lat: 35.89765,
      lng: 114.18444,
    },
  },
  {
    id: "410611",
    fullname: "淇滨区",
    location: {
      lat: 35.7413,
      lng: 114.29872,
    },
  },
  {
    id: "410621",
    fullname: "浚县",
    location: {
      lat: 35.67617,
      lng: 114.55078,
    },
  },
  {
    id: "410622",
    fullname: "淇县",
    location: {
      lat: 35.60786,
      lng: 114.19766,
    },
  },
  {
    id: "410702",
    fullname: "红旗区",
    location: {
      lat: 35.303821,
      lng: 113.875213,
    },
  },
  {
    id: "410703",
    fullname: "卫滨区",
    location: {
      lat: 35.30227,
      lng: 113.86582,
    },
  },
  {
    id: "410704",
    fullname: "凤泉区",
    location: {
      lat: 35.3718,
      lng: 113.90598,
    },
  },
  {
    id: "410711",
    fullname: "牧野区",
    location: {
      lat: 35.31493,
      lng: 113.90866,
    },
  },
  {
    id: "410721",
    fullname: "新乡县",
    location: {
      lat: 35.19079,
      lng: 113.80516,
    },
  },
  {
    id: "410724",
    fullname: "获嘉县",
    location: {
      lat: 35.25962,
      lng: 113.65716,
    },
  },
  {
    id: "410725",
    fullname: "原阳县",
    location: {
      lat: 35.06569,
      lng: 113.93997,
    },
  },
  {
    id: "410726",
    fullname: "延津县",
    location: {
      lat: 35.14194,
      lng: 114.20515,
    },
  },
  {
    id: "410727",
    fullname: "封丘县",
    location: {
      lat: 35.04119,
      lng: 114.41861,
    },
  },
  {
    id: "410781",
    fullname: "卫辉市",
    location: {
      lat: 35.39847,
      lng: 114.06459,
    },
  },
  {
    id: "410782",
    fullname: "辉县市",
    location: {
      lat: 35.46212,
      lng: 113.8054,
    },
  },
  {
    id: "410783",
    fullname: "长垣市",
    location: {
      lat: 35.20049,
      lng: 114.66886,
    },
  },
  {
    id: "410802",
    fullname: "解放区",
    location: {
      lat: 35.24052,
      lng: 113.23064,
    },
  },
  {
    id: "410803",
    fullname: "中站区",
    location: {
      lat: 35.2367,
      lng: 113.18296,
    },
  },
  {
    id: "410804",
    fullname: "马村区",
    location: {
      lat: 35.25615,
      lng: 113.3229,
    },
  },
  {
    id: "410811",
    fullname: "山阳区",
    location: {
      lat: 35.21414,
      lng: 113.2542,
    },
  },
  {
    id: "410821",
    fullname: "修武县",
    location: {
      lat: 35.22361,
      lng: 113.44776,
    },
  },
  {
    id: "410822",
    fullname: "博爱县",
    location: {
      lat: 35.17123,
      lng: 113.06453,
    },
  },
  {
    id: "410823",
    fullname: "武陟县",
    location: {
      lat: 35.09952,
      lng: 113.40184,
    },
  },
  {
    id: "410825",
    fullname: "温县",
    location: {
      lat: 34.94023,
      lng: 113.08057,
    },
  },
  {
    id: "410882",
    fullname: "沁阳市",
    location: {
      lat: 35.0876,
      lng: 112.9506,
    },
  },
  {
    id: "410883",
    fullname: "孟州市",
    location: {
      lat: 34.90735,
      lng: 112.79134,
    },
  },
  {
    id: "410902",
    fullname: "华龙区",
    location: {
      lat: 35.77745,
      lng: 115.07432,
    },
  },
  {
    id: "410922",
    fullname: "清丰县",
    location: {
      lat: 35.8851,
      lng: 115.10421,
    },
  },
  {
    id: "410923",
    fullname: "南乐县",
    location: {
      lat: 36.06979,
      lng: 115.20491,
    },
  },
  {
    id: "410926",
    fullname: "范县",
    location: {
      lat: 35.85193,
      lng: 115.50411,
    },
  },
  {
    id: "410927",
    fullname: "台前县",
    location: {
      lat: 35.96931,
      lng: 115.87163,
    },
  },
  {
    id: "410928",
    fullname: "濮阳县",
    location: {
      lat: 35.71221,
      lng: 115.02903,
    },
  },
  {
    id: "411002",
    fullname: "魏都区",
    location: {
      lat: 34.04611,
      lng: 113.8308,
    },
  },
  {
    id: "411003",
    fullname: "建安区",
    location: {
      lat: 34.12596,
      lng: 113.82272,
    },
  },
  {
    id: "411024",
    fullname: "鄢陵县",
    location: {
      lat: 34.10233,
      lng: 114.17739,
    },
  },
  {
    id: "411025",
    fullname: "襄城县",
    location: {
      lat: 33.85072,
      lng: 113.50669,
    },
  },
  {
    id: "411081",
    fullname: "禹州市",
    location: {
      lat: 34.14048,
      lng: 113.48794,
    },
  },
  {
    id: "411082",
    fullname: "长葛市",
    location: {
      lat: 34.21672,
      lng: 113.76827,
    },
  },
  {
    id: "411102",
    fullname: "源汇区",
    location: {
      lat: 33.54528,
      lng: 113.9202,
    },
  },
  {
    id: "411103",
    fullname: "郾城区",
    location: {
      lat: 33.58705,
      lng: 114.00664,
    },
  },
  {
    id: "411104",
    fullname: "召陵区",
    location: {
      lat: 33.58645,
      lng: 114.09389,
    },
  },
  {
    id: "411121",
    fullname: "舞阳县",
    location: {
      lat: 33.43765,
      lng: 113.60931,
    },
  },
  {
    id: "411122",
    fullname: "临颍县",
    location: {
      lat: 33.80958,
      lng: 113.93443,
    },
  },
  {
    id: "411202",
    fullname: "湖滨区",
    location: {
      lat: 34.77141,
      lng: 111.18747,
    },
  },
  {
    id: "411203",
    fullname: "陕州区",
    location: {
      lat: 34.72054,
      lng: 111.10338,
    },
  },
  {
    id: "411221",
    fullname: "渑池县",
    location: {
      lat: 34.76726,
      lng: 111.7619,
    },
  },
  {
    id: "411224",
    fullname: "卢氏县",
    location: {
      lat: 34.054378,
      lng: 111.047833,
    },
  },
  {
    id: "411281",
    fullname: "义马市",
    location: {
      lat: 34.74725,
      lng: 111.87449,
    },
  },
  {
    id: "411282",
    fullname: "灵宝市",
    location: {
      lat: 34.51685,
      lng: 110.89456,
    },
  },
  {
    id: "411302",
    fullname: "宛城区",
    location: {
      lat: 33.0036,
      lng: 112.5396,
    },
  },
  {
    id: "411303",
    fullname: "卧龙区",
    location: {
      lat: 32.98646,
      lng: 112.53494,
    },
  },
  {
    id: "411321",
    fullname: "南召县",
    location: {
      lat: 33.48979,
      lng: 112.42914,
    },
  },
  {
    id: "411322",
    fullname: "方城县",
    location: {
      lat: 33.25439,
      lng: 113.01255,
    },
  },
  {
    id: "411323",
    fullname: "西峡县",
    location: {
      lat: 33.3056,
      lng: 111.47244,
    },
  },
  {
    id: "411324",
    fullname: "镇平县",
    location: {
      lat: 33.03391,
      lng: 112.23448,
    },
  },
  {
    id: "411325",
    fullname: "内乡县",
    location: {
      lat: 33.04483,
      lng: 111.84926,
    },
  },
  {
    id: "411326",
    fullname: "淅川县",
    location: {
      lat: 33.13815,
      lng: 111.49078,
    },
  },
  {
    id: "411327",
    fullname: "社旗县",
    location: {
      lat: 33.05614,
      lng: 112.94793,
    },
  },
  {
    id: "411328",
    fullname: "唐河县",
    location: {
      lat: 32.68117,
      lng: 112.80745,
    },
  },
  {
    id: "411329",
    fullname: "新野县",
    location: {
      lat: 32.52093,
      lng: 112.36006,
    },
  },
  {
    id: "411330",
    fullname: "桐柏县",
    location: {
      lat: 32.37913,
      lng: 113.42892,
    },
  },
  {
    id: "411381",
    fullname: "邓州市",
    location: {
      lat: 32.68777,
      lng: 112.08736,
    },
  },
  {
    id: "411402",
    fullname: "梁园区",
    location: {
      lat: 34.44379,
      lng: 115.61396,
    },
  },
  {
    id: "411403",
    fullname: "睢阳区",
    location: {
      lat: 34.38818,
      lng: 115.65347,
    },
  },
  {
    id: "411421",
    fullname: "民权县",
    location: {
      lat: 34.64691,
      lng: 115.14766,
    },
  },
  {
    id: "411422",
    fullname: "睢县",
    location: {
      lat: 34.44526,
      lng: 115.07153,
    },
  },
  {
    id: "411423",
    fullname: "宁陵县",
    location: {
      lat: 34.45454,
      lng: 115.30516,
    },
  },
  {
    id: "411424",
    fullname: "柘城县",
    location: {
      lat: 34.09114,
      lng: 115.30544,
    },
  },
  {
    id: "411425",
    fullname: "虞城县",
    location: {
      lat: 34.39737,
      lng: 115.86519,
    },
  },
  {
    id: "411426",
    fullname: "夏邑县",
    location: {
      lat: 34.23929,
      lng: 116.12969,
    },
  },
  {
    id: "411481",
    fullname: "永城市",
    location: {
      lat: 33.92915,
      lng: 116.44946,
    },
  },
  {
    id: "411502",
    fullname: "浉河区",
    location: {
      lat: 32.116831,
      lng: 114.058576,
    },
  },
  {
    id: "411503",
    fullname: "平桥区",
    location: {
      lat: 32.10105,
      lng: 114.12561,
    },
  },
  {
    id: "411521",
    fullname: "罗山县",
    location: {
      lat: 32.20314,
      lng: 114.51307,
    },
  },
  {
    id: "411522",
    fullname: "光山县",
    location: {
      lat: 32.00997,
      lng: 114.91878,
    },
  },
  {
    id: "411523",
    fullname: "新县",
    location: {
      lat: 31.64389,
      lng: 114.87929,
    },
  },
  {
    id: "411524",
    fullname: "商城县",
    location: {
      lat: 31.79836,
      lng: 115.4069,
    },
  },
  {
    id: "411525",
    fullname: "固始县",
    location: {
      lat: 32.16839,
      lng: 115.65481,
    },
  },
  {
    id: "411526",
    fullname: "潢川县",
    location: {
      lat: 32.13153,
      lng: 115.05172,
    },
  },
  {
    id: "411527",
    fullname: "淮滨县",
    location: {
      lat: 32.47339,
      lng: 115.41987,
    },
  },
  {
    id: "411528",
    fullname: "息县",
    location: {
      lat: 32.34282,
      lng: 114.74024,
    },
  },
  {
    id: "411602",
    fullname: "川汇区",
    location: {
      lat: 33.64738,
      lng: 114.65048,
    },
  },
  {
    id: "411603",
    fullname: "淮阳区",
    location: {
      lat: 33.7315,
      lng: 114.88614,
    },
  },
  {
    id: "411621",
    fullname: "扶沟县",
    location: {
      lat: 34.06,
      lng: 114.39482,
    },
  },
  {
    id: "411622",
    fullname: "西华县",
    location: {
      lat: 33.76754,
      lng: 114.52974,
    },
  },
  {
    id: "411623",
    fullname: "商水县",
    location: {
      lat: 33.54256,
      lng: 114.61165,
    },
  },
  {
    id: "411624",
    fullname: "沈丘县",
    location: {
      lat: 33.4094,
      lng: 115.09856,
    },
  },
  {
    id: "411625",
    fullname: "郸城县",
    location: {
      lat: 33.644854,
      lng: 115.177059,
    },
  },
  {
    id: "411627",
    fullname: "太康县",
    location: {
      lat: 34.06379,
      lng: 114.83779,
    },
  },
  {
    id: "411628",
    fullname: "鹿邑县",
    location: {
      lat: 33.86009,
      lng: 115.48443,
    },
  },
  {
    id: "411681",
    fullname: "项城市",
    location: {
      lat: 33.46723,
      lng: 114.87562,
    },
  },
  {
    id: "411702",
    fullname: "驿城区",
    location: {
      lat: 32.97319,
      lng: 113.99382,
    },
  },
  {
    id: "411721",
    fullname: "西平县",
    location: {
      lat: 33.3878,
      lng: 114.02158,
    },
  },
  {
    id: "411722",
    fullname: "上蔡县",
    location: {
      lat: 33.26255,
      lng: 114.26435,
    },
  },
  {
    id: "411723",
    fullname: "平舆县",
    location: {
      lat: 32.96257,
      lng: 114.61912,
    },
  },
  {
    id: "411724",
    fullname: "正阳县",
    location: {
      lat: 32.60566,
      lng: 114.39274,
    },
  },
  {
    id: "411725",
    fullname: "确山县",
    location: {
      lat: 32.80207,
      lng: 114.02648,
    },
  },
  {
    id: "411726",
    fullname: "泌阳县",
    location: {
      lat: 32.7241,
      lng: 113.32709,
    },
  },
  {
    id: "411727",
    fullname: "汝南县",
    location: {
      lat: 33.00685,
      lng: 114.36229,
    },
  },
  {
    id: "411728",
    fullname: "遂平县",
    location: {
      lat: 33.14576,
      lng: 114.01319,
    },
  },
  {
    id: "411729",
    fullname: "新蔡县",
    location: {
      lat: 32.74926,
      lng: 114.98571,
    },
  },
  {
    id: "420102",
    fullname: "江岸区",
    location: {
      lat: 30.59982,
      lng: 114.3096,
    },
  },
  {
    id: "420103",
    fullname: "江汉区",
    location: {
      lat: 30.60147,
      lng: 114.27096,
    },
  },
  {
    id: "420104",
    fullname: "硚口区",
    location: {
      lat: 30.58145,
      lng: 114.21498,
    },
  },
  {
    id: "420105",
    fullname: "汉阳区",
    location: {
      lat: 30.55473,
      lng: 114.21772,
    },
  },
  {
    id: "420106",
    fullname: "武昌区",
    location: {
      lat: 30.55386,
      lng: 114.31599,
    },
  },
  {
    id: "420107",
    fullname: "青山区",
    location: {
      lat: 30.64039,
      lng: 114.38415,
    },
  },
  {
    id: "420111",
    fullname: "洪山区",
    location: {
      lat: 30.49984,
      lng: 114.34253,
    },
  },
  {
    id: "420112",
    fullname: "东西湖区",
    location: {
      lat: 30.61996,
      lng: 114.13702,
    },
  },
  {
    id: "420113",
    fullname: "汉南区",
    location: {
      lat: 30.30895,
      lng: 114.08469,
    },
  },
  {
    id: "420114",
    fullname: "蔡甸区",
    location: {
      lat: 30.58203,
      lng: 114.02919,
    },
  },
  {
    id: "420115",
    fullname: "江夏区",
    location: {
      lat: 30.37559,
      lng: 114.32168,
    },
  },
  {
    id: "420116",
    fullname: "黄陂区",
    location: {
      lat: 30.88131,
      lng: 114.37509,
    },
  },
  {
    id: "420117",
    fullname: "新洲区",
    location: {
      lat: 30.84154,
      lng: 114.80114,
    },
  },
  {
    id: "420202",
    fullname: "黄石港区",
    location: {
      lat: 30.22286,
      lng: 115.06611,
    },
  },
  {
    id: "420203",
    fullname: "西塞山区",
    location: {
      lat: 30.20489,
      lng: 115.11019,
    },
  },
  {
    id: "420204",
    fullname: "下陆区",
    location: {
      lat: 30.17384,
      lng: 114.96118,
    },
  },
  {
    id: "420205",
    fullname: "铁山区",
    location: {
      lat: 30.20666,
      lng: 114.90143,
    },
  },
  {
    id: "420222",
    fullname: "阳新县",
    location: {
      lat: 29.83039,
      lng: 115.2153,
    },
  },
  {
    id: "420281",
    fullname: "大冶市",
    location: {
      lat: 30.09551,
      lng: 114.97977,
    },
  },
  {
    id: "420302",
    fullname: "茅箭区",
    location: {
      lat: 32.59175,
      lng: 110.81285,
    },
  },
  {
    id: "420303",
    fullname: "张湾区",
    location: {
      lat: 32.65192,
      lng: 110.76916,
    },
  },
  {
    id: "420304",
    fullname: "郧阳区",
    location: {
      lat: 32.83488,
      lng: 110.81197,
    },
  },
  {
    id: "420322",
    fullname: "郧西县",
    location: {
      lat: 32.99306,
      lng: 110.42588,
    },
  },
  {
    id: "420323",
    fullname: "竹山县",
    location: {
      lat: 32.22468,
      lng: 110.22879,
    },
  },
  {
    id: "420324",
    fullname: "竹溪县",
    location: {
      lat: 32.31824,
      lng: 109.71527,
    },
  },
  {
    id: "420325",
    fullname: "房县",
    location: {
      lat: 32.05552,
      lng: 110.74116,
    },
  },
  {
    id: "420381",
    fullname: "丹江口市",
    location: {
      lat: 32.5404,
      lng: 111.51322,
    },
  },
  {
    id: "420502",
    fullname: "西陵区",
    location: {
      lat: 30.71082,
      lng: 111.28581,
    },
  },
  {
    id: "420503",
    fullname: "伍家岗区",
    location: {
      lat: 30.64441,
      lng: 111.361,
    },
  },
  {
    id: "420504",
    fullname: "点军区",
    location: {
      lat: 30.69322,
      lng: 111.26824,
    },
  },
  {
    id: "420505",
    fullname: "猇亭区",
    location: {
      lat: 30.5307,
      lng: 111.43471,
    },
  },
  {
    id: "420506",
    fullname: "夷陵区",
    location: {
      lat: 30.7699,
      lng: 111.32488,
    },
  },
  {
    id: "420525",
    fullname: "远安县",
    location: {
      lat: 31.06144,
      lng: 111.63985,
    },
  },
  {
    id: "420526",
    fullname: "兴山县",
    location: {
      lat: 31.34813,
      lng: 110.74719,
    },
  },
  {
    id: "420527",
    fullname: "秭归县",
    location: {
      lat: 30.82578,
      lng: 110.97768,
    },
  },
  {
    id: "420528",
    fullname: "长阳土家族自治县",
    location: {
      lat: 30.4725,
      lng: 111.20705,
    },
  },
  {
    id: "420529",
    fullname: "五峰土家族自治县",
    location: {
      lat: 30.19983,
      lng: 110.67452,
    },
  },
  {
    id: "420581",
    fullname: "宜都市",
    location: {
      lat: 30.37846,
      lng: 111.4501,
    },
  },
  {
    id: "420582",
    fullname: "当阳市",
    location: {
      lat: 30.82118,
      lng: 111.78833,
    },
  },
  {
    id: "420583",
    fullname: "枝江市",
    location: {
      lat: 30.42583,
      lng: 111.76044,
    },
  },
  {
    id: "420602",
    fullname: "襄城区",
    location: {
      lat: 32.01067,
      lng: 112.13423,
    },
  },
  {
    id: "420606",
    fullname: "樊城区",
    location: {
      lat: 32.04487,
      lng: 112.13555,
    },
  },
  {
    id: "420607",
    fullname: "襄州区",
    location: {
      lat: 32.08718,
      lng: 112.21194,
    },
  },
  {
    id: "420624",
    fullname: "南漳县",
    location: {
      lat: 31.77471,
      lng: 111.83902,
    },
  },
  {
    id: "420625",
    fullname: "谷城县",
    location: {
      lat: 32.263382,
      lng: 111.653042,
    },
  },
  {
    id: "420626",
    fullname: "保康县",
    location: {
      lat: 31.87753,
      lng: 111.26117,
    },
  },
  {
    id: "420682",
    fullname: "老河口市",
    location: {
      lat: 32.38671,
      lng: 111.67507,
    },
  },
  {
    id: "420683",
    fullname: "枣阳市",
    location: {
      lat: 32.12836,
      lng: 112.77398,
    },
  },
  {
    id: "420684",
    fullname: "宜城市",
    location: {
      lat: 31.71976,
      lng: 112.25776,
    },
  },
  {
    id: "420702",
    fullname: "梁子湖区",
    location: {
      lat: 30.09996,
      lng: 114.68456,
    },
  },
  {
    id: "420703",
    fullname: "华容区",
    location: {
      lat: 30.53434,
      lng: 114.72983,
    },
  },
  {
    id: "420704",
    fullname: "鄂城区",
    location: {
      lat: 30.40057,
      lng: 114.89171,
    },
  },
  {
    id: "420802",
    fullname: "东宝区",
    location: {
      lat: 31.05193,
      lng: 112.20158,
    },
  },
  {
    id: "420804",
    fullname: "掇刀区",
    location: {
      lat: 30.97303,
      lng: 112.20715,
    },
  },
  {
    id: "420822",
    fullname: "沙洋县",
    location: {
      lat: 30.70918,
      lng: 112.58854,
    },
  },
  {
    id: "420881",
    fullname: "钟祥市",
    location: {
      lat: 31.16797,
      lng: 112.58817,
    },
  },
  {
    id: "420882",
    fullname: "京山市",
    location: {
      lat: 31.01848,
      lng: 113.11953,
    },
  },
  {
    id: "420902",
    fullname: "孝南区",
    location: {
      lat: 30.91677,
      lng: 113.91049,
    },
  },
  {
    id: "420921",
    fullname: "孝昌县",
    location: {
      lat: 31.25803,
      lng: 113.99802,
    },
  },
  {
    id: "420922",
    fullname: "大悟县",
    location: {
      lat: 31.56096,
      lng: 114.12694,
    },
  },
  {
    id: "420923",
    fullname: "云梦县",
    location: {
      lat: 31.02103,
      lng: 113.75331,
    },
  },
  {
    id: "420981",
    fullname: "应城市",
    location: {
      lat: 30.92838,
      lng: 113.57292,
    },
  },
  {
    id: "420982",
    fullname: "安陆市",
    location: {
      lat: 31.25554,
      lng: 113.68913,
    },
  },
  {
    id: "420984",
    fullname: "汉川市",
    location: {
      lat: 30.66122,
      lng: 113.83907,
    },
  },
  {
    id: "421002",
    fullname: "沙市区",
    location: {
      lat: 30.31098,
      lng: 112.25494,
    },
  },
  {
    id: "421003",
    fullname: "荆州区",
    location: {
      lat: 30.35269,
      lng: 112.19016,
    },
  },
  {
    id: "421022",
    fullname: "公安县",
    location: {
      lat: 30.0583,
      lng: 112.22948,
    },
  },
  {
    id: "421023",
    fullname: "监利市",
    location: {
      lat: 29.83928,
      lng: 112.90492,
    },
  },
  {
    id: "421024",
    fullname: "江陵县",
    location: {
      lat: 30.04184,
      lng: 112.4247,
    },
  },
  {
    id: "421081",
    fullname: "石首市",
    location: {
      lat: 29.72085,
      lng: 112.4255,
    },
  },
  {
    id: "421083",
    fullname: "洪湖市",
    location: {
      lat: 29.82756,
      lng: 113.47775,
    },
  },
  {
    id: "421087",
    fullname: "松滋市",
    location: {
      lat: 30.1696,
      lng: 111.76743,
    },
  },
  {
    id: "421102",
    fullname: "黄州区",
    location: {
      lat: 30.43472,
      lng: 114.88005,
    },
  },
  {
    id: "421121",
    fullname: "团风县",
    location: {
      lat: 30.64362,
      lng: 114.87232,
    },
  },
  {
    id: "421122",
    fullname: "红安县",
    location: {
      lat: 31.2881,
      lng: 114.61813,
    },
  },
  {
    id: "421123",
    fullname: "罗田县",
    location: {
      lat: 30.78399,
      lng: 115.39927,
    },
  },
  {
    id: "421124",
    fullname: "英山县",
    location: {
      lat: 30.73518,
      lng: 115.68143,
    },
  },
  {
    id: "421125",
    fullname: "浠水县",
    location: {
      lat: 30.45184,
      lng: 115.26551,
    },
  },
  {
    id: "421126",
    fullname: "蕲春县",
    location: {
      lat: 30.22617,
      lng: 115.43621,
    },
  },
  {
    id: "421127",
    fullname: "黄梅县",
    location: {
      lat: 30.07037,
      lng: 115.94432,
    },
  },
  {
    id: "421181",
    fullname: "麻城市",
    location: {
      lat: 31.17333,
      lng: 115.00869,
    },
  },
  {
    id: "421182",
    fullname: "武穴市",
    location: {
      lat: 29.84433,
      lng: 115.5613,
    },
  },
  {
    id: "421202",
    fullname: "咸安区",
    location: {
      lat: 29.85251,
      lng: 114.2984,
    },
  },
  {
    id: "421221",
    fullname: "嘉鱼县",
    location: {
      lat: 29.97057,
      lng: 113.93932,
    },
  },
  {
    id: "421222",
    fullname: "通城县",
    location: {
      lat: 29.24535,
      lng: 113.81702,
    },
  },
  {
    id: "421223",
    fullname: "崇阳县",
    location: {
      lat: 29.55537,
      lng: 114.03892,
    },
  },
  {
    id: "421224",
    fullname: "通山县",
    location: {
      lat: 29.60638,
      lng: 114.48276,
    },
  },
  {
    id: "421281",
    fullname: "赤壁市",
    location: {
      lat: 29.72476,
      lng: 113.90054,
    },
  },
  {
    id: "421303",
    fullname: "曾都区",
    location: {
      lat: 31.71615,
      lng: 113.3712,
    },
  },
  {
    id: "421321",
    fullname: "随县",
    location: {
      lat: 31.8538,
      lng: 113.29995,
    },
  },
  {
    id: "421381",
    fullname: "广水市",
    location: {
      lat: 31.61686,
      lng: 113.826,
    },
  },
  {
    id: "422801",
    fullname: "恩施市",
    location: {
      lat: 30.29504,
      lng: 109.47918,
    },
  },
  {
    id: "422802",
    fullname: "利川市",
    location: {
      lat: 30.291,
      lng: 108.93655,
    },
  },
  {
    id: "422822",
    fullname: "建始县",
    location: {
      lat: 30.60213,
      lng: 109.72213,
    },
  },
  {
    id: "422823",
    fullname: "巴东县",
    location: {
      lat: 31.04233,
      lng: 110.34075,
    },
  },
  {
    id: "422825",
    fullname: "宣恩县",
    location: {
      lat: 29.98715,
      lng: 109.49185,
    },
  },
  {
    id: "422826",
    fullname: "咸丰县",
    location: {
      lat: 29.66521,
      lng: 109.13963,
    },
  },
  {
    id: "422827",
    fullname: "来凤县",
    location: {
      lat: 29.49391,
      lng: 109.407,
    },
  },
  {
    id: "422828",
    fullname: "鹤峰县",
    location: {
      lat: 29.89084,
      lng: 110.03498,
    },
  },
  {
    id: "430102",
    fullname: "芙蓉区",
    location: {
      lat: 28.20279,
      lng: 113.03539,
    },
  },
  {
    id: "430103",
    fullname: "天心区",
    location: {
      lat: 28.114262,
      lng: 112.98983,
    },
  },
  {
    id: "430104",
    fullname: "岳麓区",
    location: {
      lat: 28.23529,
      lng: 112.93134,
    },
  },
  {
    id: "430105",
    fullname: "开福区",
    location: {
      lat: 28.25591,
      lng: 112.98626,
    },
  },
  {
    id: "430111",
    fullname: "雨花区",
    location: {
      lat: 28.13551,
      lng: 113.03555,
    },
  },
  {
    id: "430112",
    fullname: "望城区",
    location: {
      lat: 28.36121,
      lng: 112.8179,
    },
  },
  {
    id: "430121",
    fullname: "长沙县",
    location: {
      lat: 28.24595,
      lng: 113.08093,
    },
  },
  {
    id: "430181",
    fullname: "浏阳市",
    location: {
      lat: 28.16378,
      lng: 113.64317,
    },
  },
  {
    id: "430182",
    fullname: "宁乡市",
    location: {
      lat: 28.27741,
      lng: 112.55183,
    },
  },
  {
    id: "430202",
    fullname: "荷塘区",
    location: {
      lat: 27.85635,
      lng: 113.174219,
    },
  },
  {
    id: "430203",
    fullname: "芦淞区",
    location: {
      lat: 27.78499,
      lng: 113.1523,
    },
  },
  {
    id: "430204",
    fullname: "石峰区",
    location: {
      lat: 27.87558,
      lng: 113.11784,
    },
  },
  {
    id: "430211",
    fullname: "天元区",
    location: {
      lat: 27.82681,
      lng: 113.08231,
    },
  },
  {
    id: "430212",
    fullname: "渌口区",
    location: {
      lat: 27.69938,
      lng: 113.14398,
    },
  },
  {
    id: "430223",
    fullname: "攸县",
    location: {
      lat: 27.00023,
      lng: 113.34569,
    },
  },
  {
    id: "430224",
    fullname: "茶陵县",
    location: {
      lat: 26.77745,
      lng: 113.53927,
    },
  },
  {
    id: "430225",
    fullname: "炎陵县",
    location: {
      lat: 26.48979,
      lng: 113.77258,
    },
  },
  {
    id: "430281",
    fullname: "醴陵市",
    location: {
      lat: 27.64617,
      lng: 113.49703,
    },
  },
  {
    id: "430302",
    fullname: "雨湖区",
    location: {
      lat: 27.85632,
      lng: 112.90737,
    },
  },
  {
    id: "430304",
    fullname: "岳塘区",
    location: {
      lat: 27.87305,
      lng: 112.97038,
    },
  },
  {
    id: "430321",
    fullname: "湘潭县",
    location: {
      lat: 27.77904,
      lng: 112.95099,
    },
  },
  {
    id: "430381",
    fullname: "湘乡市",
    location: {
      lat: 27.7341,
      lng: 112.53504,
    },
  },
  {
    id: "430382",
    fullname: "韶山市",
    location: {
      lat: 27.91507,
      lng: 112.5266,
    },
  },
  {
    id: "430405",
    fullname: "珠晖区",
    location: {
      lat: 26.89456,
      lng: 112.62039,
    },
  },
  {
    id: "430406",
    fullname: "雁峰区",
    location: {
      lat: 26.88864,
      lng: 112.61669,
    },
  },
  {
    id: "430407",
    fullname: "石鼓区",
    location: {
      lat: 26.943083,
      lng: 112.597911,
    },
  },
  {
    id: "430408",
    fullname: "蒸湘区",
    location: {
      lat: 26.91259,
      lng: 112.56755,
    },
  },
  {
    id: "430412",
    fullname: "南岳区",
    location: {
      lat: 27.23258,
      lng: 112.73876,
    },
  },
  {
    id: "430421",
    fullname: "衡阳县",
    location: {
      lat: 26.96977,
      lng: 112.37066,
    },
  },
  {
    id: "430422",
    fullname: "衡南县",
    location: {
      lat: 26.73831,
      lng: 112.67792,
    },
  },
  {
    id: "430423",
    fullname: "衡山县",
    location: {
      lat: 27.23022,
      lng: 112.86831,
    },
  },
  {
    id: "430424",
    fullname: "衡东县",
    location: {
      lat: 27.08116,
      lng: 112.95325,
    },
  },
  {
    id: "430426",
    fullname: "祁东县",
    location: {
      lat: 26.79965,
      lng: 112.09043,
    },
  },
  {
    id: "430481",
    fullname: "耒阳市",
    location: {
      lat: 26.42243,
      lng: 112.85988,
    },
  },
  {
    id: "430482",
    fullname: "常宁市",
    location: {
      lat: 26.42093,
      lng: 112.39992,
    },
  },
  {
    id: "430502",
    fullname: "双清区",
    location: {
      lat: 27.232273,
      lng: 111.496999,
    },
  },
  {
    id: "430503",
    fullname: "大祥区",
    location: {
      lat: 27.2213,
      lng: 111.43888,
    },
  },
  {
    id: "430511",
    fullname: "北塔区",
    location: {
      lat: 27.24566,
      lng: 111.45207,
    },
  },
  {
    id: "430522",
    fullname: "新邵县",
    location: {
      lat: 27.32091,
      lng: 111.459,
    },
  },
  {
    id: "430523",
    fullname: "邵阳县",
    location: {
      lat: 26.99078,
      lng: 111.27382,
    },
  },
  {
    id: "430524",
    fullname: "隆回县",
    location: {
      lat: 27.11402,
      lng: 111.03249,
    },
  },
  {
    id: "430525",
    fullname: "洞口县",
    location: {
      lat: 27.06038,
      lng: 110.57583,
    },
  },
  {
    id: "430527",
    fullname: "绥宁县",
    location: {
      lat: 26.58201,
      lng: 110.15568,
    },
  },
  {
    id: "430528",
    fullname: "新宁县",
    location: {
      lat: 26.43346,
      lng: 110.85674,
    },
  },
  {
    id: "430529",
    fullname: "城步苗族自治县",
    location: {
      lat: 26.39156,
      lng: 110.32285,
    },
  },
  {
    id: "430581",
    fullname: "武冈市",
    location: {
      lat: 26.72659,
      lng: 110.63138,
    },
  },
  {
    id: "430582",
    fullname: "邵东市",
    location: {
      lat: 27.25844,
      lng: 111.74446,
    },
  },
  {
    id: "430602",
    fullname: "岳阳楼区",
    location: {
      lat: 29.37197,
      lng: 113.12931,
    },
  },
  {
    id: "430603",
    fullname: "云溪区",
    location: {
      lat: 29.47358,
      lng: 113.27239,
    },
  },
  {
    id: "430611",
    fullname: "君山区",
    location: {
      lat: 29.46135,
      lng: 113.00651,
    },
  },
  {
    id: "430621",
    fullname: "岳阳县",
    location: {
      lat: 29.14415,
      lng: 113.11635,
    },
  },
  {
    id: "430623",
    fullname: "华容县",
    location: {
      lat: 29.53015,
      lng: 112.53946,
    },
  },
  {
    id: "430624",
    fullname: "湘阴县",
    location: {
      lat: 28.68925,
      lng: 112.90917,
    },
  },
  {
    id: "430626",
    fullname: "平江县",
    location: {
      lat: 28.70203,
      lng: 113.58134,
    },
  },
  {
    id: "430681",
    fullname: "汨罗市",
    location: {
      lat: 28.80642,
      lng: 113.06711,
    },
  },
  {
    id: "430682",
    fullname: "临湘市",
    location: {
      lat: 29.47684,
      lng: 113.45058,
    },
  },
  {
    id: "430702",
    fullname: "武陵区",
    location: {
      lat: 29.05397,
      lng: 111.68396,
    },
  },
  {
    id: "430703",
    fullname: "鼎城区",
    location: {
      lat: 29.01871,
      lng: 111.68072,
    },
  },
  {
    id: "430721",
    fullname: "安乡县",
    location: {
      lat: 29.41142,
      lng: 112.17096,
    },
  },
  {
    id: "430722",
    fullname: "汉寿县",
    location: {
      lat: 28.90549,
      lng: 111.97043,
    },
  },
  {
    id: "430723",
    fullname: "澧县",
    location: {
      lat: 29.63318,
      lng: 111.75868,
    },
  },
  {
    id: "430724",
    fullname: "临澧县",
    location: {
      lat: 29.44098,
      lng: 111.64735,
    },
  },
  {
    id: "430725",
    fullname: "桃源县",
    location: {
      lat: 28.90259,
      lng: 111.48893,
    },
  },
  {
    id: "430726",
    fullname: "石门县",
    location: {
      lat: 29.58413,
      lng: 111.37982,
    },
  },
  {
    id: "430781",
    fullname: "津市市",
    location: {
      lat: 29.60543,
      lng: 111.87741,
    },
  },
  {
    id: "430802",
    fullname: "永定区",
    location: {
      lat: 29.11983,
      lng: 110.53737,
    },
  },
  {
    id: "430811",
    fullname: "武陵源区",
    location: {
      lat: 29.34589,
      lng: 110.55042,
    },
  },
  {
    id: "430821",
    fullname: "慈利县",
    location: {
      lat: 29.4297,
      lng: 111.13921,
    },
  },
  {
    id: "430822",
    fullname: "桑植县",
    location: {
      lat: 29.39971,
      lng: 110.16428,
    },
  },
  {
    id: "430902",
    fullname: "资阳区",
    location: {
      lat: 28.591,
      lng: 112.32426,
    },
  },
  {
    id: "430903",
    fullname: "赫山区",
    location: {
      lat: 28.5793,
      lng: 112.37409,
    },
  },
  {
    id: "430921",
    fullname: "南县",
    location: {
      lat: 29.36162,
      lng: 112.39636,
    },
  },
  {
    id: "430922",
    fullname: "桃江县",
    location: {
      lat: 28.51819,
      lng: 112.15571,
    },
  },
  {
    id: "430923",
    fullname: "安化县",
    location: {
      lat: 28.37428,
      lng: 111.21303,
    },
  },
  {
    id: "430981",
    fullname: "沅江市",
    location: {
      lat: 28.84402,
      lng: 112.35468,
    },
  },
  {
    id: "431002",
    fullname: "北湖区",
    location: {
      lat: 25.78398,
      lng: 113.01101,
    },
  },
  {
    id: "431003",
    fullname: "苏仙区",
    location: {
      lat: 25.8004,
      lng: 113.04236,
    },
  },
  {
    id: "431021",
    fullname: "桂阳县",
    location: {
      lat: 25.7541,
      lng: 112.73368,
    },
  },
  {
    id: "431022",
    fullname: "宜章县",
    location: {
      lat: 25.39957,
      lng: 112.94887,
    },
  },
  {
    id: "431023",
    fullname: "永兴县",
    location: {
      lat: 26.1272,
      lng: 113.11659,
    },
  },
  {
    id: "431024",
    fullname: "嘉禾县",
    location: {
      lat: 25.58767,
      lng: 112.36872,
    },
  },
  {
    id: "431025",
    fullname: "临武县",
    location: {
      lat: 25.27596,
      lng: 112.56295,
    },
  },
  {
    id: "431026",
    fullname: "汝城县",
    location: {
      lat: 25.55036,
      lng: 113.68493,
    },
  },
  {
    id: "431027",
    fullname: "桂东县",
    location: {
      lat: 26.07752,
      lng: 113.94454,
    },
  },
  {
    id: "431028",
    fullname: "安仁县",
    location: {
      lat: 26.70942,
      lng: 113.26948,
    },
  },
  {
    id: "431081",
    fullname: "资兴市",
    location: {
      lat: 25.9761,
      lng: 113.236012,
    },
  },
  {
    id: "431102",
    fullname: "零陵区",
    location: {
      lat: 26.22255,
      lng: 111.63112,
    },
  },
  {
    id: "431103",
    fullname: "冷水滩区",
    location: {
      lat: 26.46098,
      lng: 111.59244,
    },
  },
  {
    id: "431121",
    fullname: "祁阳县",
    location: {
      lat: 26.58012,
      lng: 111.84015,
    },
  },
  {
    id: "431122",
    fullname: "东安县",
    location: {
      lat: 26.39206,
      lng: 111.31644,
    },
  },
  {
    id: "431123",
    fullname: "双牌县",
    location: {
      lat: 25.96218,
      lng: 111.66031,
    },
  },
  {
    id: "431124",
    fullname: "道县",
    location: {
      lat: 25.52753,
      lng: 111.60007,
    },
  },
  {
    id: "431125",
    fullname: "江永县",
    location: {
      lat: 25.27353,
      lng: 111.34385,
    },
  },
  {
    id: "431126",
    fullname: "宁远县",
    location: {
      lat: 25.56919,
      lng: 111.94445,
    },
  },
  {
    id: "431127",
    fullname: "蓝山县",
    location: {
      lat: 25.36943,
      lng: 112.19678,
    },
  },
  {
    id: "431128",
    fullname: "新田县",
    location: {
      lat: 25.9043,
      lng: 112.20329,
    },
  },
  {
    id: "431129",
    fullname: "江华瑶族自治县",
    location: {
      lat: 25.18536,
      lng: 111.57952,
    },
  },
  {
    id: "431202",
    fullname: "鹤城区",
    location: {
      lat: 27.57771,
      lng: 110.04098,
    },
  },
  {
    id: "431221",
    fullname: "中方县",
    location: {
      lat: 27.43992,
      lng: 109.94501,
    },
  },
  {
    id: "431222",
    fullname: "沅陵县",
    location: {
      lat: 28.45277,
      lng: 110.39388,
    },
  },
  {
    id: "431223",
    fullname: "辰溪县",
    location: {
      lat: 28.00652,
      lng: 110.18368,
    },
  },
  {
    id: "431224",
    fullname: "溆浦县",
    location: {
      lat: 27.90834,
      lng: 110.59486,
    },
  },
  {
    id: "431225",
    fullname: "会同县",
    location: {
      lat: 26.88718,
      lng: 109.7357,
    },
  },
  {
    id: "431226",
    fullname: "麻阳苗族自治县",
    location: {
      lat: 27.86555,
      lng: 109.80256,
    },
  },
  {
    id: "431227",
    fullname: "新晃侗族自治县",
    location: {
      lat: 27.35264,
      lng: 109.17492,
    },
  },
  {
    id: "431228",
    fullname: "芷江侗族自治县",
    location: {
      lat: 27.44328,
      lng: 109.68519,
    },
  },
  {
    id: "431229",
    fullname: "靖州苗族侗族自治县",
    location: {
      lat: 26.57514,
      lng: 109.69627,
    },
  },
  {
    id: "431230",
    fullname: "通道侗族自治县",
    location: {
      lat: 26.15794,
      lng: 109.78449,
    },
  },
  {
    id: "431281",
    fullname: "洪江市",
    location: {
      lat: 27.20925,
      lng: 109.83655,
    },
  },
  {
    id: "431302",
    fullname: "娄星区",
    location: {
      lat: 27.72978,
      lng: 112.0017,
    },
  },
  {
    id: "431321",
    fullname: "双峰县",
    location: {
      lat: 27.45702,
      lng: 112.19392,
    },
  },
  {
    id: "431322",
    fullname: "新化县",
    location: {
      lat: 27.72663,
      lng: 111.32743,
    },
  },
  {
    id: "431381",
    fullname: "冷水江市",
    location: {
      lat: 27.68615,
      lng: 111.43525,
    },
  },
  {
    id: "431382",
    fullname: "涟源市",
    location: {
      lat: 27.69271,
      lng: 111.66446,
    },
  },
  {
    id: "433101",
    fullname: "吉首市",
    location: {
      lat: 28.26244,
      lng: 109.69811,
    },
  },
  {
    id: "433122",
    fullname: "泸溪县",
    location: {
      lat: 28.21639,
      lng: 110.21965,
    },
  },
  {
    id: "433123",
    fullname: "凤凰县",
    location: {
      lat: 27.94843,
      lng: 109.59832,
    },
  },
  {
    id: "433124",
    fullname: "花垣县",
    location: {
      lat: 28.57211,
      lng: 109.48224,
    },
  },
  {
    id: "433125",
    fullname: "保靖县",
    location: {
      lat: 28.70001,
      lng: 109.66054,
    },
  },
  {
    id: "433126",
    fullname: "古丈县",
    location: {
      lat: 28.61711,
      lng: 109.95085,
    },
  },
  {
    id: "433127",
    fullname: "永顺县",
    location: {
      lat: 29.00515,
      lng: 109.84807,
    },
  },
  {
    id: "433130",
    fullname: "龙山县",
    location: {
      lat: 29.4579,
      lng: 109.44387,
    },
  },
  {
    id: "440103",
    fullname: "荔湾区",
    location: {
      lat: 23.12586,
      lng: 113.24428,
    },
  },
  {
    id: "440104",
    fullname: "越秀区",
    location: {
      lat: 23.12901,
      lng: 113.2668,
    },
  },
  {
    id: "440105",
    fullname: "海珠区",
    location: {
      lat: 23.08331,
      lng: 113.3172,
    },
  },
  {
    id: "440106",
    fullname: "天河区",
    location: {
      lat: 23.12463,
      lng: 113.36199,
    },
  },
  {
    id: "440111",
    fullname: "白云区",
    location: {
      lat: 23.15792,
      lng: 113.27324,
    },
  },
  {
    id: "440112",
    fullname: "黄埔区",
    location: {
      lat: 23.18139,
      lng: 113.48067,
    },
  },
  {
    id: "440113",
    fullname: "番禺区",
    location: {
      lat: 22.937716,
      lng: 113.384238,
    },
  },
  {
    id: "440114",
    fullname: "花都区",
    location: {
      lat: 23.403277,
      lng: 113.218478,
    },
  },
  {
    id: "440115",
    fullname: "南沙区",
    location: {
      lat: 22.80169,
      lng: 113.52497,
    },
  },
  {
    id: "440117",
    fullname: "从化区",
    location: {
      lat: 23.54835,
      lng: 113.58646,
    },
  },
  {
    id: "440118",
    fullname: "增城区",
    location: {
      lat: 23.26093,
      lng: 113.8109,
    },
  },
  {
    id: "440203",
    fullname: "武江区",
    location: {
      lat: 24.792616,
      lng: 113.587783,
    },
  },
  {
    id: "440204",
    fullname: "浈江区",
    location: {
      lat: 24.80455,
      lng: 113.611059,
    },
  },
  {
    id: "440205",
    fullname: "曲江区",
    location: {
      lat: 24.682599,
      lng: 113.604579,
    },
  },
  {
    id: "440222",
    fullname: "始兴县",
    location: {
      lat: 24.95269,
      lng: 114.06206,
    },
  },
  {
    id: "440224",
    fullname: "仁化县",
    location: {
      lat: 25.08566,
      lng: 113.74918,
    },
  },
  {
    id: "440229",
    fullname: "翁源县",
    location: {
      lat: 24.3502,
      lng: 114.13033,
    },
  },
  {
    id: "440232",
    fullname: "乳源瑶族自治县",
    location: {
      lat: 24.77591,
      lng: 113.27596,
    },
  },
  {
    id: "440233",
    fullname: "新丰县",
    location: {
      lat: 24.05959,
      lng: 114.20689,
    },
  },
  {
    id: "440281",
    fullname: "乐昌市",
    location: {
      lat: 25.13014,
      lng: 113.34746,
    },
  },
  {
    id: "440282",
    fullname: "南雄市",
    location: {
      lat: 25.11962,
      lng: 114.31084,
    },
  },
  {
    id: "440303",
    fullname: "罗湖区",
    location: {
      lat: 22.54836,
      lng: 114.13166,
    },
  },
  {
    id: "440304",
    fullname: "福田区",
    location: {
      lat: 22.52291,
      lng: 114.05454,
    },
  },
  {
    id: "440305",
    fullname: "南山区",
    location: {
      lat: 22.53332,
      lng: 113.93041,
    },
  },
  {
    id: "440306",
    fullname: "宝安区",
    location: {
      lat: 22.55329,
      lng: 113.88308,
    },
  },
  {
    id: "440307",
    fullname: "龙岗区",
    location: {
      lat: 22.71991,
      lng: 114.24779,
    },
  },
  {
    id: "440308",
    fullname: "盐田区",
    location: {
      lat: 22.557,
      lng: 114.23679,
    },
  },
  {
    id: "440309",
    fullname: "龙华区",
    location: {
      lat: 22.72174,
      lng: 114.06031,
    },
  },
  {
    id: "440310",
    fullname: "坪山区",
    location: {
      lat: 22.69084,
      lng: 114.34632,
    },
  },
  {
    id: "440311",
    fullname: "光明区",
    location: {
      lat: 22.74894,
      lng: 113.93588,
    },
  },
  {
    id: "440402",
    fullname: "香洲区",
    location: {
      lat: 22.26666,
      lng: 113.54342,
    },
  },
  {
    id: "440403",
    fullname: "斗门区",
    location: {
      lat: 22.20907,
      lng: 113.29673,
    },
  },
  {
    id: "440404",
    fullname: "金湾区",
    location: {
      lat: 22.14589,
      lng: 113.3642,
    },
  },
  {
    id: "440499",
    fullname: "香洲区澳门大学横琴校区(由澳门特别行政区实施管辖)",
    location: {
      lat: 22.124,
      lng: 113.55059,
    },
  },
  {
    id: "440507",
    fullname: "龙湖区",
    location: {
      lat: 23.37246,
      lng: 116.71677,
    },
  },
  {
    id: "440511",
    fullname: "金平区",
    location: {
      lat: 23.36525,
      lng: 116.7054,
    },
  },
  {
    id: "440512",
    fullname: "濠江区",
    location: {
      lat: 23.28592,
      lng: 116.72664,
    },
  },
  {
    id: "440513",
    fullname: "潮阳区",
    location: {
      lat: 23.26489,
      lng: 116.60157,
    },
  },
  {
    id: "440514",
    fullname: "潮南区",
    location: {
      lat: 23.25029,
      lng: 116.4331,
    },
  },
  {
    id: "440515",
    fullname: "澄海区",
    location: {
      lat: 23.46613,
      lng: 116.75608,
    },
  },
  {
    id: "440523",
    fullname: "南澳县",
    location: {
      lat: 23.42178,
      lng: 117.02348,
    },
  },
  {
    id: "440604",
    fullname: "禅城区",
    location: {
      lat: 23.00944,
      lng: 113.12249,
    },
  },
  {
    id: "440605",
    fullname: "南海区",
    location: {
      lat: 23.02882,
      lng: 113.14278,
    },
  },
  {
    id: "440606",
    fullname: "顺德区",
    location: {
      lat: 22.80537,
      lng: 113.293215,
    },
  },
  {
    id: "440607",
    fullname: "三水区",
    location: {
      lat: 23.155737,
      lng: 112.896581,
    },
  },
  {
    id: "440608",
    fullname: "高明区",
    location: {
      lat: 22.90026,
      lng: 112.89262,
    },
  },
  {
    id: "440703",
    fullname: "蓬江区",
    location: {
      lat: 22.59514,
      lng: 113.07845,
    },
  },
  {
    id: "440704",
    fullname: "江海区",
    location: {
      lat: 22.560343,
      lng: 113.111399,
    },
  },
  {
    id: "440705",
    fullname: "新会区",
    location: {
      lat: 22.45877,
      lng: 113.03231,
    },
  },
  {
    id: "440781",
    fullname: "台山市",
    location: {
      lat: 22.25156,
      lng: 112.7939,
    },
  },
  {
    id: "440783",
    fullname: "开平市",
    location: {
      lat: 22.37702,
      lng: 112.69828,
    },
  },
  {
    id: "440784",
    fullname: "鹤山市",
    location: {
      lat: 22.7653,
      lng: 112.96436,
    },
  },
  {
    id: "440785",
    fullname: "恩平市",
    location: {
      lat: 22.18294,
      lng: 112.30532,
    },
  },
  {
    id: "440802",
    fullname: "赤坎区",
    location: {
      lat: 21.26624,
      lng: 110.36534,
    },
  },
  {
    id: "440803",
    fullname: "霞山区",
    location: {
      lat: 21.192389,
      lng: 110.397663,
    },
  },
  {
    id: "440804",
    fullname: "坡头区",
    location: {
      lat: 21.24475,
      lng: 110.4555,
    },
  },
  {
    id: "440811",
    fullname: "麻章区",
    location: {
      lat: 21.26331,
      lng: 110.33427,
    },
  },
  {
    id: "440823",
    fullname: "遂溪县",
    location: {
      lat: 21.37708,
      lng: 110.25006,
    },
  },
  {
    id: "440825",
    fullname: "徐闻县",
    location: {
      lat: 20.32652,
      lng: 110.17502,
    },
  },
  {
    id: "440881",
    fullname: "廉江市",
    location: {
      lat: 21.60962,
      lng: 110.28625,
    },
  },
  {
    id: "440882",
    fullname: "雷州市",
    location: {
      lat: 20.91444,
      lng: 110.09651,
    },
  },
  {
    id: "440883",
    fullname: "吴川市",
    location: {
      lat: 21.44182,
      lng: 110.77824,
    },
  },
  {
    id: "440902",
    fullname: "茂南区",
    location: {
      lat: 21.64109,
      lng: 110.91879,
    },
  },
  {
    id: "440904",
    fullname: "电白区",
    location: {
      lat: 21.51428,
      lng: 111.01636,
    },
  },
  {
    id: "440981",
    fullname: "高州市",
    location: {
      lat: 21.91812,
      lng: 110.85338,
    },
  },
  {
    id: "440982",
    fullname: "化州市",
    location: {
      lat: 21.66397,
      lng: 110.63954,
    },
  },
  {
    id: "440983",
    fullname: "信宜市",
    location: {
      lat: 22.35429,
      lng: 110.9471,
    },
  },
  {
    id: "441202",
    fullname: "端州区",
    location: {
      lat: 23.05196,
      lng: 112.48461,
    },
  },
  {
    id: "441203",
    fullname: "鼎湖区",
    location: {
      lat: 23.15815,
      lng: 112.56706,
    },
  },
  {
    id: "441204",
    fullname: "高要区",
    location: {
      lat: 23.02581,
      lng: 112.45839,
    },
  },
  {
    id: "441223",
    fullname: "广宁县",
    location: {
      lat: 23.63493,
      lng: 112.44112,
    },
  },
  {
    id: "441224",
    fullname: "怀集县",
    location: {
      lat: 23.91188,
      lng: 112.18454,
    },
  },
  {
    id: "441225",
    fullname: "封开县",
    location: {
      lat: 23.42448,
      lng: 111.51196,
    },
  },
  {
    id: "441226",
    fullname: "德庆县",
    location: {
      lat: 23.14376,
      lng: 111.78559,
    },
  },
  {
    id: "441284",
    fullname: "四会市",
    location: {
      lat: 23.32743,
      lng: 112.73404,
    },
  },
  {
    id: "441302",
    fullname: "惠城区",
    location: {
      lat: 23.08464,
      lng: 114.38257,
    },
  },
  {
    id: "441303",
    fullname: "惠阳区",
    location: {
      lat: 22.78851,
      lng: 114.45646,
    },
  },
  {
    id: "441322",
    fullname: "博罗县",
    location: {
      lat: 23.17315,
      lng: 114.28973,
    },
  },
  {
    id: "441323",
    fullname: "惠东县",
    location: {
      lat: 22.98486,
      lng: 114.71999,
    },
  },
  {
    id: "441324",
    fullname: "龙门县",
    location: {
      lat: 23.72763,
      lng: 114.25486,
    },
  },
  {
    id: "441402",
    fullname: "梅江区",
    location: {
      lat: 24.30996,
      lng: 116.11699,
    },
  },
  {
    id: "441403",
    fullname: "梅县区",
    location: {
      lat: 24.26539,
      lng: 116.08245,
    },
  },
  {
    id: "441422",
    fullname: "大埔县",
    location: {
      lat: 24.34792,
      lng: 116.6952,
    },
  },
  {
    id: "441423",
    fullname: "丰顺县",
    location: {
      lat: 23.73945,
      lng: 116.18225,
    },
  },
  {
    id: "441424",
    fullname: "五华县",
    location: {
      lat: 23.93254,
      lng: 115.77609,
    },
  },
  {
    id: "441426",
    fullname: "平远县",
    location: {
      lat: 24.56632,
      lng: 115.89112,
    },
  },
  {
    id: "441427",
    fullname: "蕉岭县",
    location: {
      lat: 24.65861,
      lng: 116.17123,
    },
  },
  {
    id: "441481",
    fullname: "兴宁市",
    location: {
      lat: 24.1365,
      lng: 115.73119,
    },
  },
  {
    id: "441502",
    fullname: "城区",
    location: {
      lat: 22.7787,
      lng: 115.36502,
    },
  },
  {
    id: "441521",
    fullname: "海丰县",
    location: {
      lat: 22.96657,
      lng: 115.32341,
    },
  },
  {
    id: "441523",
    fullname: "陆河县",
    location: {
      lat: 23.30148,
      lng: 115.65996,
    },
  },
  {
    id: "441581",
    fullname: "陆丰市",
    location: {
      lat: 22.94511,
      lng: 115.64462,
    },
  },
  {
    id: "441602",
    fullname: "源城区",
    location: {
      lat: 23.73417,
      lng: 114.70246,
    },
  },
  {
    id: "441621",
    fullname: "紫金县",
    location: {
      lat: 23.63532,
      lng: 115.18398,
    },
  },
  {
    id: "441622",
    fullname: "龙川县",
    location: {
      lat: 24.10014,
      lng: 115.25984,
    },
  },
  {
    id: "441623",
    fullname: "连平县",
    location: {
      lat: 24.36956,
      lng: 114.48865,
    },
  },
  {
    id: "441624",
    fullname: "和平县",
    location: {
      lat: 24.44201,
      lng: 114.93872,
    },
  },
  {
    id: "441625",
    fullname: "东源县",
    location: {
      lat: 23.78856,
      lng: 114.74625,
    },
  },
  {
    id: "441702",
    fullname: "江城区",
    location: {
      lat: 21.86182,
      lng: 111.95516,
    },
  },
  {
    id: "441704",
    fullname: "阳东区",
    location: {
      lat: 21.86829,
      lng: 112.0067,
    },
  },
  {
    id: "441721",
    fullname: "阳西县",
    location: {
      lat: 21.75229,
      lng: 111.61791,
    },
  },
  {
    id: "441781",
    fullname: "阳春市",
    location: {
      lat: 22.1703,
      lng: 111.79153,
    },
  },
  {
    id: "441802",
    fullname: "清城区",
    location: {
      lat: 23.69795,
      lng: 113.06269,
    },
  },
  {
    id: "441803",
    fullname: "清新区",
    location: {
      lat: 23.73474,
      lng: 113.01658,
    },
  },
  {
    id: "441821",
    fullname: "佛冈县",
    location: {
      lat: 23.87921,
      lng: 113.53172,
    },
  },
  {
    id: "441823",
    fullname: "阳山县",
    location: {
      lat: 24.465,
      lng: 112.64132,
    },
  },
  {
    id: "441825",
    fullname: "连山壮族瑶族自治县",
    location: {
      lat: 24.57036,
      lng: 112.093479,
    },
  },
  {
    id: "441826",
    fullname: "连南瑶族自治县",
    location: {
      lat: 24.725305,
      lng: 112.287076,
    },
  },
  {
    id: "441881",
    fullname: "英德市",
    location: {
      lat: 24.185721,
      lng: 113.415049,
    },
  },
  {
    id: "441882",
    fullname: "连州市",
    location: {
      lat: 24.77998,
      lng: 112.37677,
    },
  },
  {
    id: "441999",
    fullname: "东莞市",
    location: {
      lat: 23.02067,
      lng: 113.75179,
    },
  },
  {
    id: "442099",
    fullname: "中山市",
    location: {
      lat: 22.51595,
      lng: 113.3926,
    },
  },
  {
    id: "445102",
    fullname: "湘桥区",
    location: {
      lat: 23.67441,
      lng: 116.62834,
    },
  },
  {
    id: "445103",
    fullname: "潮安区",
    location: {
      lat: 23.46244,
      lng: 116.67809,
    },
  },
  {
    id: "445122",
    fullname: "饶平县",
    location: {
      lat: 23.66412,
      lng: 117.0039,
    },
  },
  {
    id: "445202",
    fullname: "榕城区",
    location: {
      lat: 23.52486,
      lng: 116.36692,
    },
  },
  {
    id: "445203",
    fullname: "揭东区",
    location: {
      lat: 23.56606,
      lng: 116.41211,
    },
  },
  {
    id: "445222",
    fullname: "揭西县",
    location: {
      lat: 23.43141,
      lng: 115.84189,
    },
  },
  {
    id: "445224",
    fullname: "惠来县",
    location: {
      lat: 23.03321,
      lng: 116.29511,
    },
  },
  {
    id: "445281",
    fullname: "普宁市",
    location: {
      lat: 23.29734,
      lng: 116.16573,
    },
  },
  {
    id: "445302",
    fullname: "云城区",
    location: {
      lat: 22.92797,
      lng: 112.04373,
    },
  },
  {
    id: "445303",
    fullname: "云安区",
    location: {
      lat: 23.07101,
      lng: 112.00324,
    },
  },
  {
    id: "445321",
    fullname: "新兴县",
    location: {
      lat: 22.69573,
      lng: 112.22536,
    },
  },
  {
    id: "445322",
    fullname: "郁南县",
    location: {
      lat: 23.23464,
      lng: 111.53536,
    },
  },
  {
    id: "445381",
    fullname: "罗定市",
    location: {
      lat: 22.7683,
      lng: 111.57004,
    },
  },
  {
    id: "450102",
    fullname: "兴宁区",
    location: {
      lat: 22.85429,
      lng: 108.36836,
    },
  },
  {
    id: "450103",
    fullname: "青秀区",
    location: {
      lat: 22.78658,
      lng: 108.49693,
    },
  },
  {
    id: "450105",
    fullname: "江南区",
    location: {
      lat: 22.78121,
      lng: 108.27331,
    },
  },
  {
    id: "450107",
    fullname: "西乡塘区",
    location: {
      lat: 22.83393,
      lng: 108.31343,
    },
  },
  {
    id: "450108",
    fullname: "良庆区",
    location: {
      lat: 22.75619,
      lng: 108.32082,
    },
  },
  {
    id: "450109",
    fullname: "邕宁区",
    location: {
      lat: 22.75837,
      lng: 108.48737,
    },
  },
  {
    id: "450110",
    fullname: "武鸣区",
    location: {
      lat: 23.15866,
      lng: 108.27461,
    },
  },
  {
    id: "450123",
    fullname: "隆安县",
    location: {
      lat: 23.16641,
      lng: 107.695846,
    },
  },
  {
    id: "450124",
    fullname: "马山县",
    location: {
      lat: 23.70844,
      lng: 108.17827,
    },
  },
  {
    id: "450125",
    fullname: "上林县",
    location: {
      lat: 23.43205,
      lng: 108.60506,
    },
  },
  {
    id: "450126",
    fullname: "宾阳县",
    location: {
      lat: 23.21768,
      lng: 108.8103,
    },
  },
  {
    id: "450127",
    fullname: "横县",
    location: {
      lat: 22.67999,
      lng: 109.26147,
    },
  },
  {
    id: "450202",
    fullname: "城中区",
    location: {
      lat: 24.33941,
      lng: 109.44626,
    },
  },
  {
    id: "450203",
    fullname: "鱼峰区",
    location: {
      lat: 24.28154,
      lng: 109.44726,
    },
  },
  {
    id: "450204",
    fullname: "柳南区",
    location: {
      lat: 24.33599,
      lng: 109.3859,
    },
  },
  {
    id: "450205",
    fullname: "柳北区",
    location: {
      lat: 24.36259,
      lng: 109.40209,
    },
  },
  {
    id: "450206",
    fullname: "柳江区",
    location: {
      lat: 24.25465,
      lng: 109.32672,
    },
  },
  {
    id: "450222",
    fullname: "柳城县",
    location: {
      lat: 24.65058,
      lng: 109.24468,
    },
  },
  {
    id: "450223",
    fullname: "鹿寨县",
    location: {
      lat: 24.47308,
      lng: 109.75179,
    },
  },
  {
    id: "450224",
    fullname: "融安县",
    location: {
      lat: 25.224373,
      lng: 109.39782,
    },
  },
  {
    id: "450225",
    fullname: "融水苗族自治县",
    location: {
      lat: 25.06629,
      lng: 109.25636,
    },
  },
  {
    id: "450226",
    fullname: "三江侗族自治县",
    location: {
      lat: 25.78314,
      lng: 109.60788,
    },
  },
  {
    id: "450302",
    fullname: "秀峰区",
    location: {
      lat: 25.28131,
      lng: 110.28903,
    },
  },
  {
    id: "450303",
    fullname: "叠彩区",
    location: {
      lat: 25.31402,
      lng: 110.30188,
    },
  },
  {
    id: "450304",
    fullname: "象山区",
    location: {
      lat: 25.26159,
      lng: 110.2811,
    },
  },
  {
    id: "450305",
    fullname: "七星区",
    location: {
      lat: 25.25235,
      lng: 110.31771,
    },
  },
  {
    id: "450311",
    fullname: "雁山区",
    location: {
      lat: 25.06039,
      lng: 110.30914,
    },
  },
  {
    id: "450312",
    fullname: "临桂区",
    location: {
      lat: 25.23868,
      lng: 110.2124,
    },
  },
  {
    id: "450321",
    fullname: "阳朔县",
    location: {
      lat: 24.77843,
      lng: 110.49663,
    },
  },
  {
    id: "450323",
    fullname: "灵川县",
    location: {
      lat: 25.4097,
      lng: 110.32552,
    },
  },
  {
    id: "450324",
    fullname: "全州县",
    location: {
      lat: 25.92861,
      lng: 111.07304,
    },
  },
  {
    id: "450325",
    fullname: "兴安县",
    location: {
      lat: 25.61169,
      lng: 110.67147,
    },
  },
  {
    id: "450326",
    fullname: "永福县",
    location: {
      lat: 24.98001,
      lng: 109.98318,
    },
  },
  {
    id: "450327",
    fullname: "灌阳县",
    location: {
      lat: 25.48932,
      lng: 111.16083,
    },
  },
  {
    id: "450328",
    fullname: "龙胜各族自治县",
    location: {
      lat: 25.79809,
      lng: 110.01149,
    },
  },
  {
    id: "450329",
    fullname: "资源县",
    location: {
      lat: 26.04241,
      lng: 110.65259,
    },
  },
  {
    id: "450330",
    fullname: "平乐县",
    location: {
      lat: 24.63325,
      lng: 110.64322,
    },
  },
  {
    id: "450332",
    fullname: "恭城瑶族自治县",
    location: {
      lat: 24.83135,
      lng: 110.82835,
    },
  },
  {
    id: "450381",
    fullname: "荔浦市",
    location: {
      lat: 24.48887,
      lng: 110.39517,
    },
  },
  {
    id: "450403",
    fullname: "万秀区",
    location: {
      lat: 23.47303,
      lng: 111.32033,
    },
  },
  {
    id: "450405",
    fullname: "长洲区",
    location: {
      lat: 23.48555,
      lng: 111.27466,
    },
  },
  {
    id: "450406",
    fullname: "龙圩区",
    location: {
      lat: 23.41513,
      lng: 111.24752,
    },
  },
  {
    id: "450421",
    fullname: "苍梧县",
    location: {
      lat: 23.84232,
      lng: 111.54488,
    },
  },
  {
    id: "450422",
    fullname: "藤县",
    location: {
      lat: 23.37497,
      lng: 110.91497,
    },
  },
  {
    id: "450423",
    fullname: "蒙山县",
    location: {
      lat: 24.193977,
      lng: 110.524789,
    },
  },
  {
    id: "450481",
    fullname: "岑溪市",
    location: {
      lat: 22.91828,
      lng: 110.9949,
    },
  },
  {
    id: "450502",
    fullname: "海城区",
    location: {
      lat: 21.47525,
      lng: 109.1175,
    },
  },
  {
    id: "450503",
    fullname: "银海区",
    location: {
      lat: 21.44872,
      lng: 109.13916,
    },
  },
  {
    id: "450512",
    fullname: "铁山港区",
    location: {
      lat: 21.52909,
      lng: 109.4216,
    },
  },
  {
    id: "450521",
    fullname: "合浦县",
    location: {
      lat: 21.66089,
      lng: 109.20725,
    },
  },
  {
    id: "450602",
    fullname: "港口区",
    location: {
      lat: 21.64348,
      lng: 108.38012,
    },
  },
  {
    id: "450603",
    fullname: "防城区",
    location: {
      lat: 21.76913,
      lng: 108.35342,
    },
  },
  {
    id: "450621",
    fullname: "上思县",
    location: {
      lat: 22.1537,
      lng: 107.98362,
    },
  },
  {
    id: "450681",
    fullname: "东兴市",
    location: {
      lat: 21.54792,
      lng: 107.97188,
    },
  },
  {
    id: "450702",
    fullname: "钦南区",
    location: {
      lat: 21.93854,
      lng: 108.6569,
    },
  },
  {
    id: "450703",
    fullname: "钦北区",
    location: {
      lat: 22.17075,
      lng: 108.57324,
    },
  },
  {
    id: "450721",
    fullname: "灵山县",
    location: {
      lat: 22.4165,
      lng: 109.29094,
    },
  },
  {
    id: "450722",
    fullname: "浦北县",
    location: {
      lat: 22.27152,
      lng: 109.55698,
    },
  },
  {
    id: "450802",
    fullname: "港北区",
    location: {
      lat: 23.11084,
      lng: 109.57339,
    },
  },
  {
    id: "450803",
    fullname: "港南区",
    location: {
      lat: 23.07504,
      lng: 109.59996,
    },
  },
  {
    id: "450804",
    fullname: "覃塘区",
    location: {
      lat: 23.12718,
      lng: 109.45269,
    },
  },
  {
    id: "450821",
    fullname: "平南县",
    location: {
      lat: 23.53919,
      lng: 110.39215,
    },
  },
  {
    id: "450881",
    fullname: "桂平市",
    location: {
      lat: 23.394098,
      lng: 110.079009,
    },
  },
  {
    id: "450902",
    fullname: "玉州区",
    location: {
      lat: 22.62811,
      lng: 110.15133,
    },
  },
  {
    id: "450903",
    fullname: "福绵区",
    location: {
      lat: 22.57957,
      lng: 110.05125,
    },
  },
  {
    id: "450921",
    fullname: "容县",
    location: {
      lat: 22.85783,
      lng: 110.55786,
    },
  },
  {
    id: "450922",
    fullname: "陆川县",
    location: {
      lat: 22.32109,
      lng: 110.26413,
    },
  },
  {
    id: "450923",
    fullname: "博白县",
    location: {
      lat: 22.27306,
      lng: 109.97627,
    },
  },
  {
    id: "450924",
    fullname: "兴业县",
    location: {
      lat: 22.73636,
      lng: 109.87517,
    },
  },
  {
    id: "450981",
    fullname: "北流市",
    location: {
      lat: 22.70837,
      lng: 110.35426,
    },
  },
  {
    id: "451002",
    fullname: "右江区",
    location: {
      lat: 23.90115,
      lng: 106.61897,
    },
  },
  {
    id: "451003",
    fullname: "田阳区",
    location: {
      lat: 23.73567,
      lng: 106.91567,
    },
  },
  {
    id: "451022",
    fullname: "田东县",
    location: {
      lat: 23.59724,
      lng: 107.12608,
    },
  },
  {
    id: "451024",
    fullname: "德保县",
    location: {
      lat: 23.3234,
      lng: 106.6155,
    },
  },
  {
    id: "451026",
    fullname: "那坡县",
    location: {
      lat: 23.3871,
      lng: 105.83349,
    },
  },
  {
    id: "451027",
    fullname: "凌云县",
    location: {
      lat: 24.34751,
      lng: 106.56159,
    },
  },
  {
    id: "451028",
    fullname: "乐业县",
    location: {
      lat: 24.78583,
      lng: 106.56163,
    },
  },
  {
    id: "451029",
    fullname: "田林县",
    location: {
      lat: 24.29438,
      lng: 106.22852,
    },
  },
  {
    id: "451030",
    fullname: "西林县",
    location: {
      lat: 24.48957,
      lng: 105.09383,
    },
  },
  {
    id: "451031",
    fullname: "隆林各族自治县",
    location: {
      lat: 24.77066,
      lng: 105.34389,
    },
  },
  {
    id: "451081",
    fullname: "靖西市",
    location: {
      lat: 23.13402,
      lng: 106.41769,
    },
  },
  {
    id: "451082",
    fullname: "平果市",
    location: {
      lat: 23.32934,
      lng: 107.58988,
    },
  },
  {
    id: "451102",
    fullname: "八步区",
    location: {
      lat: 24.41175,
      lng: 111.55197,
    },
  },
  {
    id: "451103",
    fullname: "平桂区",
    location: {
      lat: 24.45296,
      lng: 111.47971,
    },
  },
  {
    id: "451121",
    fullname: "昭平县",
    location: {
      lat: 24.16947,
      lng: 110.81137,
    },
  },
  {
    id: "451122",
    fullname: "钟山县",
    location: {
      lat: 24.5264,
      lng: 111.30278,
    },
  },
  {
    id: "451123",
    fullname: "富川瑶族自治县",
    location: {
      lat: 24.81433,
      lng: 111.27753,
    },
  },
  {
    id: "451202",
    fullname: "金城江区",
    location: {
      lat: 24.68983,
      lng: 108.03719,
    },
  },
  {
    id: "451203",
    fullname: "宜州区",
    location: {
      lat: 24.48513,
      lng: 108.63656,
    },
  },
  {
    id: "451221",
    fullname: "南丹县",
    location: {
      lat: 24.97535,
      lng: 107.54224,
    },
  },
  {
    id: "451222",
    fullname: "天峨县",
    location: {
      lat: 24.99911,
      lng: 107.17372,
    },
  },
  {
    id: "451223",
    fullname: "凤山县",
    location: {
      lat: 24.54699,
      lng: 107.04221,
    },
  },
  {
    id: "451224",
    fullname: "东兰县",
    location: {
      lat: 24.51072,
      lng: 107.37421,
    },
  },
  {
    id: "451225",
    fullname: "罗城仫佬族自治县",
    location: {
      lat: 24.77739,
      lng: 108.90465,
    },
  },
  {
    id: "451226",
    fullname: "环江毛南族自治县",
    location: {
      lat: 24.82601,
      lng: 108.2583,
    },
  },
  {
    id: "451227",
    fullname: "巴马瑶族自治县",
    location: {
      lat: 24.14108,
      lng: 107.25965,
    },
  },
  {
    id: "451228",
    fullname: "都安瑶族自治县",
    location: {
      lat: 23.93122,
      lng: 108.10555,
    },
  },
  {
    id: "451229",
    fullname: "大化瑶族自治县",
    location: {
      lat: 23.7364,
      lng: 107.99814,
    },
  },
  {
    id: "451302",
    fullname: "兴宾区",
    location: {
      lat: 23.72742,
      lng: 109.23462,
    },
  },
  {
    id: "451321",
    fullname: "忻城县",
    location: {
      lat: 24.06617,
      lng: 108.66575,
    },
  },
  {
    id: "451322",
    fullname: "象州县",
    location: {
      lat: 23.97374,
      lng: 109.70526,
    },
  },
  {
    id: "451323",
    fullname: "武宣县",
    location: {
      lat: 23.59414,
      lng: 109.66325,
    },
  },
  {
    id: "451324",
    fullname: "金秀瑶族自治县",
    location: {
      lat: 24.13039,
      lng: 110.18942,
    },
  },
  {
    id: "451381",
    fullname: "合山市",
    location: {
      lat: 23.8066,
      lng: 108.88611,
    },
  },
  {
    id: "451402",
    fullname: "江州区",
    location: {
      lat: 22.40566,
      lng: 107.35325,
    },
  },
  {
    id: "451421",
    fullname: "扶绥县",
    location: {
      lat: 22.63497,
      lng: 107.90411,
    },
  },
  {
    id: "451422",
    fullname: "宁明县",
    location: {
      lat: 22.14016,
      lng: 107.07668,
    },
  },
  {
    id: "451423",
    fullname: "龙州县",
    location: {
      lat: 22.34262,
      lng: 106.85455,
    },
  },
  {
    id: "451424",
    fullname: "大新县",
    location: {
      lat: 22.8304,
      lng: 107.20124,
    },
  },
  {
    id: "451425",
    fullname: "天等县",
    location: {
      lat: 23.08134,
      lng: 107.14363,
    },
  },
  {
    id: "451481",
    fullname: "凭祥市",
    location: {
      lat: 22.09439,
      lng: 106.76649,
    },
  },
  {
    id: "460105",
    fullname: "秀英区",
    location: {
      lat: 20.0076,
      lng: 110.29357,
    },
  },
  {
    id: "460106",
    fullname: "龙华区",
    location: {
      lat: 20.02971,
      lng: 110.32941,
    },
  },
  {
    id: "460107",
    fullname: "琼山区",
    location: {
      lat: 20.0039,
      lng: 110.35432,
    },
  },
  {
    id: "460108",
    fullname: "美兰区",
    location: {
      lat: 20.02864,
      lng: 110.36663,
    },
  },
  {
    id: "460202",
    fullname: "海棠区",
    location: {
      lat: 18.40005,
      lng: 109.7525,
    },
  },
  {
    id: "460203",
    fullname: "吉阳区",
    location: {
      lat: 18.28225,
      lng: 109.57841,
    },
  },
  {
    id: "460204",
    fullname: "天涯区",
    location: {
      lat: 18.29921,
      lng: 109.45263,
    },
  },
  {
    id: "460205",
    fullname: "崖州区",
    location: {
      lat: 18.35753,
      lng: 109.17186,
    },
  },
  {
    id: "460321",
    fullname: "西沙群岛",
    location: {
      lat: 16.336621,
      lng: 112.017575,
    },
  },
  {
    id: "460322",
    fullname: "南沙群岛",
    location: {
      lat: 7.752668,
      lng: 114.226028,
    },
  },
  {
    id: "460323",
    fullname: "中沙群岛的岛礁及其海域",
    location: {
      lat: 15.169558,
      lng: 117.801764,
    },
  },
  {
    id: "460499",
    fullname: "儋州市",
    location: {
      lat: 19.52093,
      lng: 109.58069,
    },
  },
  {
    id: "510104",
    fullname: "锦江区",
    location: {
      lat: 30.598118,
      lng: 104.117356,
    },
  },
  {
    id: "510105",
    fullname: "青羊区",
    location: {
      lat: 30.67485,
      lng: 104.06291,
    },
  },
  {
    id: "510106",
    fullname: "金牛区",
    location: {
      lat: 30.691319,
      lng: 104.052302,
    },
  },
  {
    id: "510107",
    fullname: "武侯区",
    location: {
      lat: 30.64242,
      lng: 104.04311,
    },
  },
  {
    id: "510108",
    fullname: "成华区",
    location: {
      lat: 30.65984,
      lng: 104.10194,
    },
  },
  {
    id: "510112",
    fullname: "龙泉驿区",
    location: {
      lat: 30.55663,
      lng: 104.27471,
    },
  },
  {
    id: "510113",
    fullname: "青白江区",
    location: {
      lat: 30.87849,
      lng: 104.25122,
    },
  },
  {
    id: "510114",
    fullname: "新都区",
    location: {
      lat: 30.82404,
      lng: 104.15801,
    },
  },
  {
    id: "510115",
    fullname: "温江区",
    location: {
      lat: 30.68144,
      lng: 103.8559,
    },
  },
  {
    id: "510116",
    fullname: "双流区",
    location: {
      lat: 30.57447,
      lng: 103.92377,
    },
  },
  {
    id: "510117",
    fullname: "郫都区",
    location: {
      lat: 30.79589,
      lng: 103.90256,
    },
  },
  {
    id: "510118",
    fullname: "新津区",
    location: {
      lat: 30.41009,
      lng: 103.81145,
    },
  },
  {
    id: "510121",
    fullname: "金堂县",
    location: {
      lat: 30.86203,
      lng: 104.41205,
    },
  },
  {
    id: "510129",
    fullname: "大邑县",
    location: {
      lat: 30.58759,
      lng: 103.52071,
    },
  },
  {
    id: "510131",
    fullname: "蒲江县",
    location: {
      lat: 30.19676,
      lng: 103.50628,
    },
  },
  {
    id: "510181",
    fullname: "都江堰市",
    location: {
      lat: 30.98837,
      lng: 103.64662,
    },
  },
  {
    id: "510182",
    fullname: "彭州市",
    location: {
      lat: 30.99018,
      lng: 103.95811,
    },
  },
  {
    id: "510183",
    fullname: "邛崃市",
    location: {
      lat: 30.41032,
      lng: 103.46436,
    },
  },
  {
    id: "510184",
    fullname: "崇州市",
    location: {
      lat: 30.63021,
      lng: 103.67289,
    },
  },
  {
    id: "510185",
    fullname: "简阳市",
    location: {
      lat: 30.41145,
      lng: 104.547178,
    },
  },
  {
    id: "510302",
    fullname: "自流井区",
    location: {
      lat: 29.3374,
      lng: 104.77728,
    },
  },
  {
    id: "510303",
    fullname: "贡井区",
    location: {
      lat: 29.34576,
      lng: 104.71526,
    },
  },
  {
    id: "510304",
    fullname: "大安区",
    location: {
      lat: 29.36371,
      lng: 104.7739,
    },
  },
  {
    id: "510311",
    fullname: "沿滩区",
    location: {
      lat: 29.272413,
      lng: 104.873961,
    },
  },
  {
    id: "510321",
    fullname: "荣县",
    location: {
      lat: 29.445411,
      lng: 104.417474,
    },
  },
  {
    id: "510322",
    fullname: "富顺县",
    location: {
      lat: 29.18021,
      lng: 104.97512,
    },
  },
  {
    id: "510402",
    fullname: "东区",
    location: {
      lat: 26.54639,
      lng: 101.70413,
    },
  },
  {
    id: "510403",
    fullname: "西区",
    location: {
      lat: 26.59757,
      lng: 101.63064,
    },
  },
  {
    id: "510411",
    fullname: "仁和区",
    location: {
      lat: 26.497781,
      lng: 101.73866,
    },
  },
  {
    id: "510421",
    fullname: "米易县",
    location: {
      lat: 26.890669,
      lng: 102.11024,
    },
  },
  {
    id: "510422",
    fullname: "盐边县",
    location: {
      lat: 26.68265,
      lng: 101.85393,
    },
  },
  {
    id: "510502",
    fullname: "江阳区",
    location: {
      lat: 28.87875,
      lng: 105.43501,
    },
  },
  {
    id: "510503",
    fullname: "纳溪区",
    location: {
      lat: 28.77313,
      lng: 105.37131,
    },
  },
  {
    id: "510504",
    fullname: "龙马潭区",
    location: {
      lat: 28.91318,
      lng: 105.43779,
    },
  },
  {
    id: "510521",
    fullname: "泸县",
    location: {
      lat: 29.1516,
      lng: 105.38185,
    },
  },
  {
    id: "510522",
    fullname: "合江县",
    location: {
      lat: 28.81147,
      lng: 105.83135,
    },
  },
  {
    id: "510524",
    fullname: "叙永县",
    location: {
      lat: 28.15588,
      lng: 105.44475,
    },
  },
  {
    id: "510525",
    fullname: "古蔺县",
    location: {
      lat: 28.03884,
      lng: 105.81239,
    },
  },
  {
    id: "510603",
    fullname: "旌阳区",
    location: {
      lat: 31.142921,
      lng: 104.417131,
    },
  },
  {
    id: "510604",
    fullname: "罗江区",
    location: {
      lat: 31.31681,
      lng: 104.51021,
    },
  },
  {
    id: "510623",
    fullname: "中江县",
    location: {
      lat: 31.03304,
      lng: 104.67872,
    },
  },
  {
    id: "510681",
    fullname: "广汉市",
    location: {
      lat: 30.97706,
      lng: 104.28249,
    },
  },
  {
    id: "510682",
    fullname: "什邡市",
    location: {
      lat: 31.12736,
      lng: 104.16694,
    },
  },
  {
    id: "510683",
    fullname: "绵竹市",
    location: {
      lat: 31.33776,
      lng: 104.22083,
    },
  },
  {
    id: "510703",
    fullname: "涪城区",
    location: {
      lat: 31.45498,
      lng: 104.75708,
    },
  },
  {
    id: "510704",
    fullname: "游仙区",
    location: {
      lat: 31.47377,
      lng: 104.76622,
    },
  },
  {
    id: "510705",
    fullname: "安州区",
    location: {
      lat: 31.53465,
      lng: 104.56735,
    },
  },
  {
    id: "510722",
    fullname: "三台县",
    location: {
      lat: 31.09563,
      lng: 105.09459,
    },
  },
  {
    id: "510723",
    fullname: "盐亭县",
    location: {
      lat: 31.208262,
      lng: 105.389441,
    },
  },
  {
    id: "510725",
    fullname: "梓潼县",
    location: {
      lat: 31.63529,
      lng: 105.16118,
    },
  },
  {
    id: "510726",
    fullname: "北川羌族自治县",
    location: {
      lat: 31.89148,
      lng: 104.30755,
    },
  },
  {
    id: "510727",
    fullname: "平武县",
    location: {
      lat: 32.40858,
      lng: 104.52904,
    },
  },
  {
    id: "510781",
    fullname: "江油市",
    location: {
      lat: 31.75691,
      lng: 104.72458,
    },
  },
  {
    id: "510802",
    fullname: "利州区",
    location: {
      lat: 32.43396,
      lng: 105.84559,
    },
  },
  {
    id: "510811",
    fullname: "昭化区",
    location: {
      lat: 32.3232,
      lng: 105.96304,
    },
  },
  {
    id: "510812",
    fullname: "朝天区",
    location: {
      lat: 32.64409,
      lng: 105.89034,
    },
  },
  {
    id: "510821",
    fullname: "旺苍县",
    location: {
      lat: 32.2291,
      lng: 106.28974,
    },
  },
  {
    id: "510822",
    fullname: "青川县",
    location: {
      lat: 32.5841,
      lng: 105.23822,
    },
  },
  {
    id: "510823",
    fullname: "剑阁县",
    location: {
      lat: 32.288622,
      lng: 105.524851,
    },
  },
  {
    id: "510824",
    fullname: "苍溪县",
    location: {
      lat: 31.73244,
      lng: 105.93442,
    },
  },
  {
    id: "510903",
    fullname: "船山区",
    location: {
      lat: 30.525729,
      lng: 105.568249,
    },
  },
  {
    id: "510904",
    fullname: "安居区",
    location: {
      lat: 30.35541,
      lng: 105.45636,
    },
  },
  {
    id: "510921",
    fullname: "蓬溪县",
    location: {
      lat: 30.75778,
      lng: 105.70756,
    },
  },
  {
    id: "510923",
    fullname: "大英县",
    location: {
      lat: 30.59425,
      lng: 105.23699,
    },
  },
  {
    id: "510981",
    fullname: "射洪市",
    location: {
      lat: 30.87113,
      lng: 105.38836,
    },
  },
  {
    id: "511002",
    fullname: "市中区",
    location: {
      lat: 29.58698,
      lng: 105.06776,
    },
  },
  {
    id: "511011",
    fullname: "东兴区",
    location: {
      lat: 29.59346,
      lng: 105.07459,
    },
  },
  {
    id: "511024",
    fullname: "威远县",
    location: {
      lat: 29.52742,
      lng: 104.66885,
    },
  },
  {
    id: "511025",
    fullname: "资中县",
    location: {
      lat: 29.76416,
      lng: 104.85212,
    },
  },
  {
    id: "511083",
    fullname: "隆昌市",
    location: {
      lat: 29.33948,
      lng: 105.28773,
    },
  },
  {
    id: "511102",
    fullname: "市中区",
    location: {
      lat: 29.55544,
      lng: 103.7612,
    },
  },
  {
    id: "511111",
    fullname: "沙湾区",
    location: {
      lat: 29.41306,
      lng: 103.55027,
    },
  },
  {
    id: "511112",
    fullname: "五通桥区",
    location: {
      lat: 29.40726,
      lng: 103.81846,
    },
  },
  {
    id: "511113",
    fullname: "金口河区",
    location: {
      lat: 29.24447,
      lng: 103.07879,
    },
  },
  {
    id: "511123",
    fullname: "犍为县",
    location: {
      lat: 29.20828,
      lng: 103.94931,
    },
  },
  {
    id: "511124",
    fullname: "井研县",
    location: {
      lat: 29.65305,
      lng: 104.06482,
    },
  },
  {
    id: "511126",
    fullname: "夹江县",
    location: {
      lat: 29.73753,
      lng: 103.57156,
    },
  },
  {
    id: "511129",
    fullname: "沐川县",
    location: {
      lat: 28.95673,
      lng: 103.90241,
    },
  },
  {
    id: "511132",
    fullname: "峨边彝族自治县",
    location: {
      lat: 29.23047,
      lng: 103.26202,
    },
  },
  {
    id: "511133",
    fullname: "马边彝族自治县",
    location: {
      lat: 28.83557,
      lng: 103.54635,
    },
  },
  {
    id: "511181",
    fullname: "峨眉山市",
    location: {
      lat: 29.60125,
      lng: 103.48447,
    },
  },
  {
    id: "511302",
    fullname: "顺庆区",
    location: {
      lat: 30.79653,
      lng: 106.09224,
    },
  },
  {
    id: "511303",
    fullname: "高坪区",
    location: {
      lat: 30.78146,
      lng: 106.11888,
    },
  },
  {
    id: "511304",
    fullname: "嘉陵区",
    location: {
      lat: 30.75874,
      lng: 106.07176,
    },
  },
  {
    id: "511321",
    fullname: "南部县",
    location: {
      lat: 31.353151,
      lng: 106.067323,
    },
  },
  {
    id: "511322",
    fullname: "营山县",
    location: {
      lat: 31.0767,
      lng: 106.56553,
    },
  },
  {
    id: "511323",
    fullname: "蓬安县",
    location: {
      lat: 31.0286,
      lng: 106.4123,
    },
  },
  {
    id: "511324",
    fullname: "仪陇县",
    location: {
      lat: 31.27162,
      lng: 106.30305,
    },
  },
  {
    id: "511325",
    fullname: "西充县",
    location: {
      lat: 30.99526,
      lng: 105.90086,
    },
  },
  {
    id: "511381",
    fullname: "阆中市",
    location: {
      lat: 31.55837,
      lng: 106.00499,
    },
  },
  {
    id: "511402",
    fullname: "东坡区",
    location: {
      lat: 30.042311,
      lng: 103.83197,
    },
  },
  {
    id: "511403",
    fullname: "彭山区",
    location: {
      lat: 30.19299,
      lng: 103.87283,
    },
  },
  {
    id: "511421",
    fullname: "仁寿县",
    location: {
      lat: 29.99572,
      lng: 104.13407,
    },
  },
  {
    id: "511423",
    fullname: "洪雅县",
    location: {
      lat: 29.90496,
      lng: 103.37288,
    },
  },
  {
    id: "511424",
    fullname: "丹棱县",
    location: {
      lat: 30.01453,
      lng: 103.51284,
    },
  },
  {
    id: "511425",
    fullname: "青神县",
    location: {
      lat: 29.8315,
      lng: 103.84656,
    },
  },
  {
    id: "511502",
    fullname: "翠屏区",
    location: {
      lat: 28.765871,
      lng: 104.619455,
    },
  },
  {
    id: "511503",
    fullname: "南溪区",
    location: {
      lat: 28.84548,
      lng: 104.96953,
    },
  },
  {
    id: "511504",
    fullname: "叙州区",
    location: {
      lat: 28.68998,
      lng: 104.53316,
    },
  },
  {
    id: "511523",
    fullname: "江安县",
    location: {
      lat: 28.723561,
      lng: 105.066891,
    },
  },
  {
    id: "511524",
    fullname: "长宁县",
    location: {
      lat: 28.581352,
      lng: 104.92115,
    },
  },
  {
    id: "511525",
    fullname: "高县",
    location: {
      lat: 28.43622,
      lng: 104.5176,
    },
  },
  {
    id: "511526",
    fullname: "珙县",
    location: {
      lat: 28.438899,
      lng: 104.708831,
    },
  },
  {
    id: "511527",
    fullname: "筠连县",
    location: {
      lat: 28.16418,
      lng: 104.51185,
    },
  },
  {
    id: "511528",
    fullname: "兴文县",
    location: {
      lat: 28.30361,
      lng: 105.23646,
    },
  },
  {
    id: "511529",
    fullname: "屏山县",
    location: {
      lat: 28.65312,
      lng: 104.15125,
    },
  },
  {
    id: "511602",
    fullname: "广安区",
    location: {
      lat: 30.47391,
      lng: 106.641743,
    },
  },
  {
    id: "511603",
    fullname: "前锋区",
    location: {
      lat: 30.495762,
      lng: 106.886556,
    },
  },
  {
    id: "511621",
    fullname: "岳池县",
    location: {
      lat: 30.53795,
      lng: 106.43988,
    },
  },
  {
    id: "511622",
    fullname: "武胜县",
    location: {
      lat: 30.34935,
      lng: 106.29597,
    },
  },
  {
    id: "511623",
    fullname: "邻水县",
    location: {
      lat: 30.33458,
      lng: 106.93048,
    },
  },
  {
    id: "511681",
    fullname: "华蓥市",
    location: {
      lat: 30.39001,
      lng: 106.78298,
    },
  },
  {
    id: "511702",
    fullname: "通川区",
    location: {
      lat: 31.21473,
      lng: 107.50455,
    },
  },
  {
    id: "511703",
    fullname: "达川区",
    location: {
      lat: 31.19603,
      lng: 107.51177,
    },
  },
  {
    id: "511722",
    fullname: "宣汉县",
    location: {
      lat: 31.35386,
      lng: 107.7271,
    },
  },
  {
    id: "511723",
    fullname: "开江县",
    location: {
      lat: 31.082981,
      lng: 107.8685,
    },
  },
  {
    id: "511724",
    fullname: "大竹县",
    location: {
      lat: 30.73607,
      lng: 107.20441,
    },
  },
  {
    id: "511725",
    fullname: "渠县",
    location: {
      lat: 30.83664,
      lng: 106.97299,
    },
  },
  {
    id: "511781",
    fullname: "万源市",
    location: {
      lat: 32.081581,
      lng: 108.034578,
    },
  },
  {
    id: "511802",
    fullname: "雨城区",
    location: {
      lat: 30.00589,
      lng: 103.03254,
    },
  },
  {
    id: "511803",
    fullname: "名山区",
    location: {
      lat: 30.06982,
      lng: 103.10954,
    },
  },
  {
    id: "511822",
    fullname: "荥经县",
    location: {
      lat: 29.79308,
      lng: 102.84671,
    },
  },
  {
    id: "511823",
    fullname: "汉源县",
    location: {
      lat: 29.34457,
      lng: 102.65261,
    },
  },
  {
    id: "511824",
    fullname: "石棉县",
    location: {
      lat: 29.22799,
      lng: 102.35944,
    },
  },
  {
    id: "511825",
    fullname: "天全县",
    location: {
      lat: 30.056942,
      lng: 102.771365,
    },
  },
  {
    id: "511826",
    fullname: "芦山县",
    location: {
      lat: 30.14407,
      lng: 102.92826,
    },
  },
  {
    id: "511827",
    fullname: "宝兴县",
    location: {
      lat: 30.36806,
      lng: 102.81457,
    },
  },
  {
    id: "511902",
    fullname: "巴州区",
    location: {
      lat: 31.85131,
      lng: 106.76897,
    },
  },
  {
    id: "511903",
    fullname: "恩阳区",
    location: {
      lat: 31.78956,
      lng: 106.63602,
    },
  },
  {
    id: "511921",
    fullname: "通江县",
    location: {
      lat: 31.9118,
      lng: 107.24493,
    },
  },
  {
    id: "511922",
    fullname: "南江县",
    location: {
      lat: 32.34645,
      lng: 106.82907,
    },
  },
  {
    id: "511923",
    fullname: "平昌县",
    location: {
      lat: 31.56054,
      lng: 107.10358,
    },
  },
  {
    id: "512002",
    fullname: "雁江区",
    location: {
      lat: 30.11758,
      lng: 104.6522,
    },
  },
  {
    id: "512021",
    fullname: "安岳县",
    location: {
      lat: 30.09733,
      lng: 105.33537,
    },
  },
  {
    id: "512022",
    fullname: "乐至县",
    location: {
      lat: 30.2759,
      lng: 105.02133,
    },
  },
  {
    id: "513201",
    fullname: "马尔康市",
    location: {
      lat: 31.90585,
      lng: 102.20644,
    },
  },
  {
    id: "513221",
    fullname: "汶川县",
    location: {
      lat: 31.47686,
      lng: 103.5903,
    },
  },
  {
    id: "513222",
    fullname: "理县",
    location: {
      lat: 31.436563,
      lng: 103.167007,
    },
  },
  {
    id: "513223",
    fullname: "茂县",
    location: {
      lat: 31.68163,
      lng: 103.85334,
    },
  },
  {
    id: "513224",
    fullname: "松潘县",
    location: {
      lat: 32.63813,
      lng: 103.59893,
    },
  },
  {
    id: "513225",
    fullname: "九寨沟县",
    location: {
      lat: 33.26142,
      lng: 104.23567,
    },
  },
  {
    id: "513226",
    fullname: "金川县",
    location: {
      lat: 31.47597,
      lng: 102.06325,
    },
  },
  {
    id: "513227",
    fullname: "小金县",
    location: {
      lat: 30.99918,
      lng: 102.3644,
    },
  },
  {
    id: "513228",
    fullname: "黑水县",
    location: {
      lat: 32.06179,
      lng: 102.99021,
    },
  },
  {
    id: "513230",
    fullname: "壤塘县",
    location: {
      lat: 32.26545,
      lng: 100.97861,
    },
  },
  {
    id: "513231",
    fullname: "阿坝县",
    location: {
      lat: 32.90245,
      lng: 101.70634,
    },
  },
  {
    id: "513232",
    fullname: "若尔盖县",
    location: {
      lat: 33.57586,
      lng: 102.96187,
    },
  },
  {
    id: "513233",
    fullname: "红原县",
    location: {
      lat: 32.79087,
      lng: 102.54438,
    },
  },
  {
    id: "513301",
    fullname: "康定市",
    location: {
      lat: 30.05441,
      lng: 101.96308,
    },
  },
  {
    id: "513322",
    fullname: "泸定县",
    location: {
      lat: 29.91412,
      lng: 102.23471,
    },
  },
  {
    id: "513323",
    fullname: "丹巴县",
    location: {
      lat: 30.878619,
      lng: 101.890541,
    },
  },
  {
    id: "513324",
    fullname: "九龙县",
    location: {
      lat: 29.00024,
      lng: 101.50752,
    },
  },
  {
    id: "513325",
    fullname: "雅江县",
    location: {
      lat: 30.03145,
      lng: 101.01426,
    },
  },
  {
    id: "513326",
    fullname: "道孚县",
    location: {
      lat: 30.97936,
      lng: 101.12508,
    },
  },
  {
    id: "513327",
    fullname: "炉霍县",
    location: {
      lat: 31.39005,
      lng: 100.67703,
    },
  },
  {
    id: "513328",
    fullname: "甘孜县",
    location: {
      lat: 31.623,
      lng: 99.99266,
    },
  },
  {
    id: "513329",
    fullname: "新龙县",
    location: {
      lat: 30.939069,
      lng: 100.31135,
    },
  },
  {
    id: "513330",
    fullname: "德格县",
    location: {
      lat: 31.80612,
      lng: 98.58088,
    },
  },
  {
    id: "513331",
    fullname: "白玉县",
    location: {
      lat: 31.20985,
      lng: 98.82414,
    },
  },
  {
    id: "513332",
    fullname: "石渠县",
    location: {
      lat: 32.97834,
      lng: 98.10294,
    },
  },
  {
    id: "513333",
    fullname: "色达县",
    location: {
      lat: 32.26814,
      lng: 100.33264,
    },
  },
  {
    id: "513334",
    fullname: "理塘县",
    location: {
      lat: 29.99603,
      lng: 100.26963,
    },
  },
  {
    id: "513335",
    fullname: "巴塘县",
    location: {
      lat: 30.00537,
      lng: 99.1105,
    },
  },
  {
    id: "513336",
    fullname: "乡城县",
    location: {
      lat: 28.931171,
      lng: 99.798239,
    },
  },
  {
    id: "513337",
    fullname: "稻城县",
    location: {
      lat: 29.03704,
      lng: 100.29829,
    },
  },
  {
    id: "513338",
    fullname: "得荣县",
    location: {
      lat: 28.71307,
      lng: 99.28639,
    },
  },
  {
    id: "513401",
    fullname: "西昌市",
    location: {
      lat: 27.89449,
      lng: 102.26305,
    },
  },
  {
    id: "513422",
    fullname: "木里藏族自治县",
    location: {
      lat: 27.92859,
      lng: 101.28048,
    },
  },
  {
    id: "513423",
    fullname: "盐源县",
    location: {
      lat: 27.42241,
      lng: 101.50919,
    },
  },
  {
    id: "513424",
    fullname: "德昌县",
    location: {
      lat: 27.40289,
      lng: 102.17559,
    },
  },
  {
    id: "513425",
    fullname: "会理县",
    location: {
      lat: 26.65527,
      lng: 102.24457,
    },
  },
  {
    id: "513426",
    fullname: "会东县",
    location: {
      lat: 26.6346,
      lng: 102.57817,
    },
  },
  {
    id: "513427",
    fullname: "宁南县",
    location: {
      lat: 27.06667,
      lng: 102.76052,
    },
  },
  {
    id: "513428",
    fullname: "普格县",
    location: {
      lat: 27.3765,
      lng: 102.54092,
    },
  },
  {
    id: "513429",
    fullname: "布拖县",
    location: {
      lat: 27.712291,
      lng: 102.809402,
    },
  },
  {
    id: "513430",
    fullname: "金阳县",
    location: {
      lat: 27.69654,
      lng: 103.24903,
    },
  },
  {
    id: "513431",
    fullname: "昭觉县",
    location: {
      lat: 28.01425,
      lng: 102.84265,
    },
  },
  {
    id: "513432",
    fullname: "喜德县",
    location: {
      lat: 28.30666,
      lng: 102.41231,
    },
  },
  {
    id: "513433",
    fullname: "冕宁县",
    location: {
      lat: 28.55018,
      lng: 102.17678,
    },
  },
  {
    id: "513434",
    fullname: "越西县",
    location: {
      lat: 28.63999,
      lng: 102.5075,
    },
  },
  {
    id: "513435",
    fullname: "甘洛县",
    location: {
      lat: 28.95873,
      lng: 102.77033,
    },
  },
  {
    id: "513436",
    fullname: "美姑县",
    location: {
      lat: 28.32885,
      lng: 103.13229,
    },
  },
  {
    id: "513437",
    fullname: "雷波县",
    location: {
      lat: 28.26272,
      lng: 103.5715,
    },
  },
  {
    id: "520102",
    fullname: "南明区",
    location: {
      lat: 26.56822,
      lng: 106.7141,
    },
  },
  {
    id: "520103",
    fullname: "云岩区",
    location: {
      lat: 26.60491,
      lng: 106.72566,
    },
  },
  {
    id: "520111",
    fullname: "花溪区",
    location: {
      lat: 26.40985,
      lng: 106.67034,
    },
  },
  {
    id: "520112",
    fullname: "乌当区",
    location: {
      lat: 26.62959,
      lng: 106.75208,
    },
  },
  {
    id: "520113",
    fullname: "白云区",
    location: {
      lat: 26.67865,
      lng: 106.62298,
    },
  },
  {
    id: "520115",
    fullname: "观山湖区",
    location: {
      lat: 26.6015,
      lng: 106.62254,
    },
  },
  {
    id: "520121",
    fullname: "开阳县",
    location: {
      lat: 27.05759,
      lng: 106.96486,
    },
  },
  {
    id: "520122",
    fullname: "息烽县",
    location: {
      lat: 27.09053,
      lng: 106.7404,
    },
  },
  {
    id: "520123",
    fullname: "修文县",
    location: {
      lat: 26.8389,
      lng: 106.59203,
    },
  },
  {
    id: "520181",
    fullname: "清镇市",
    location: {
      lat: 26.55607,
      lng: 106.470577,
    },
  },
  {
    id: "520201",
    fullname: "钟山区",
    location: {
      lat: 26.57585,
      lng: 104.84447,
    },
  },
  {
    id: "520203",
    fullname: "六枝特区",
    location: {
      lat: 26.20141,
      lng: 105.48025,
    },
  },
  {
    id: "520221",
    fullname: "水城区",
    location: {
      lat: 26.54658,
      lng: 104.95764,
    },
  },
  {
    id: "520281",
    fullname: "盘州市",
    location: {
      lat: 25.70993,
      lng: 104.47158,
    },
  },
  {
    id: "520302",
    fullname: "红花岗区",
    location: {
      lat: 27.64481,
      lng: 106.8938,
    },
  },
  {
    id: "520303",
    fullname: "汇川区",
    location: {
      lat: 27.74979,
      lng: 106.93252,
    },
  },
  {
    id: "520304",
    fullname: "播州区",
    location: {
      lat: 27.53625,
      lng: 106.82922,
    },
  },
  {
    id: "520322",
    fullname: "桐梓县",
    location: {
      lat: 28.13321,
      lng: 106.82502,
    },
  },
  {
    id: "520323",
    fullname: "绥阳县",
    location: {
      lat: 27.94705,
      lng: 107.1907,
    },
  },
  {
    id: "520324",
    fullname: "正安县",
    location: {
      lat: 28.55011,
      lng: 107.44402,
    },
  },
  {
    id: "520325",
    fullname: "道真仡佬族苗族自治县",
    location: {
      lat: 28.86264,
      lng: 107.61316,
    },
  },
  {
    id: "520326",
    fullname: "务川仡佬族苗族自治县",
    location: {
      lat: 28.56295,
      lng: 107.89888,
    },
  },
  {
    id: "520327",
    fullname: "凤冈县",
    location: {
      lat: 27.95465,
      lng: 107.71689,
    },
  },
  {
    id: "520328",
    fullname: "湄潭县",
    location: {
      lat: 27.74889,
      lng: 107.46551,
    },
  },
  {
    id: "520329",
    fullname: "余庆县",
    location: {
      lat: 27.22536,
      lng: 107.88825,
    },
  },
  {
    id: "520330",
    fullname: "习水县",
    location: {
      lat: 28.3274,
      lng: 106.20385,
    },
  },
  {
    id: "520381",
    fullname: "赤水市",
    location: {
      lat: 28.59055,
      lng: 105.69744,
    },
  },
  {
    id: "520382",
    fullname: "仁怀市",
    location: {
      lat: 27.79234,
      lng: 106.40156,
    },
  },
  {
    id: "520402",
    fullname: "西秀区",
    location: {
      lat: 26.24532,
      lng: 105.96533,
    },
  },
  {
    id: "520403",
    fullname: "平坝区",
    location: {
      lat: 26.40574,
      lng: 106.2553,
    },
  },
  {
    id: "520422",
    fullname: "普定县",
    location: {
      lat: 26.30144,
      lng: 105.74291,
    },
  },
  {
    id: "520423",
    fullname: "镇宁布依族苗族自治县",
    location: {
      lat: 26.05716,
      lng: 105.77048,
    },
  },
  {
    id: "520424",
    fullname: "关岭布依族苗族自治县",
    location: {
      lat: 25.94369,
      lng: 105.61916,
    },
  },
  {
    id: "520425",
    fullname: "紫云苗族布依族自治县",
    location: {
      lat: 25.751064,
      lng: 106.084321,
    },
  },
  {
    id: "520502",
    fullname: "七星关区",
    location: {
      lat: 27.29847,
      lng: 105.30504,
    },
  },
  {
    id: "520521",
    fullname: "大方县",
    location: {
      lat: 27.14161,
      lng: 105.613,
    },
  },
  {
    id: "520522",
    fullname: "黔西县",
    location: {
      lat: 27.00866,
      lng: 106.0323,
    },
  },
  {
    id: "520523",
    fullname: "金沙县",
    location: {
      lat: 27.45922,
      lng: 106.22014,
    },
  },
  {
    id: "520524",
    fullname: "织金县",
    location: {
      lat: 26.66301,
      lng: 105.77488,
    },
  },
  {
    id: "520525",
    fullname: "纳雍县",
    location: {
      lat: 26.7777,
      lng: 105.38269,
    },
  },
  {
    id: "520526",
    fullname: "威宁彝族回族苗族自治县",
    location: {
      lat: 26.85641,
      lng: 104.27872,
    },
  },
  {
    id: "520527",
    fullname: "赫章县",
    location: {
      lat: 27.12328,
      lng: 104.7274,
    },
  },
  {
    id: "520602",
    fullname: "碧江区",
    location: {
      lat: 27.81621,
      lng: 109.26433,
    },
  },
  {
    id: "520603",
    fullname: "万山区",
    location: {
      lat: 27.51796,
      lng: 109.21369,
    },
  },
  {
    id: "520621",
    fullname: "江口县",
    location: {
      lat: 27.700056,
      lng: 108.83919,
    },
  },
  {
    id: "520622",
    fullname: "玉屏侗族自治县",
    location: {
      lat: 27.23637,
      lng: 108.91212,
    },
  },
  {
    id: "520623",
    fullname: "石阡县",
    location: {
      lat: 27.51382,
      lng: 108.2233,
    },
  },
  {
    id: "520624",
    fullname: "思南县",
    location: {
      lat: 27.93886,
      lng: 108.2528,
    },
  },
  {
    id: "520625",
    fullname: "印江土家族苗族自治县",
    location: {
      lat: 27.9941,
      lng: 108.40958,
    },
  },
  {
    id: "520626",
    fullname: "德江县",
    location: {
      lat: 28.26408,
      lng: 108.11987,
    },
  },
  {
    id: "520627",
    fullname: "沿河土家族自治县",
    location: {
      lat: 28.56397,
      lng: 108.50301,
    },
  },
  {
    id: "520628",
    fullname: "松桃苗族自治县",
    location: {
      lat: 28.15414,
      lng: 109.20316,
    },
  },
  {
    id: "522301",
    fullname: "兴义市",
    location: {
      lat: 25.09192,
      lng: 104.89553,
    },
  },
  {
    id: "522302",
    fullname: "兴仁市",
    location: {
      lat: 25.43511,
      lng: 105.18639,
    },
  },
  {
    id: "522323",
    fullname: "普安县",
    location: {
      lat: 25.78429,
      lng: 104.95324,
    },
  },
  {
    id: "522324",
    fullname: "晴隆县",
    location: {
      lat: 25.83474,
      lng: 105.21904,
    },
  },
  {
    id: "522325",
    fullname: "贞丰县",
    location: {
      lat: 25.38558,
      lng: 105.65043,
    },
  },
  {
    id: "522326",
    fullname: "望谟县",
    location: {
      lat: 25.17824,
      lng: 106.09962,
    },
  },
  {
    id: "522327",
    fullname: "册亨县",
    location: {
      lat: 24.98368,
      lng: 105.81173,
    },
  },
  {
    id: "522328",
    fullname: "安龙县",
    location: {
      lat: 25.09811,
      lng: 105.44333,
    },
  },
  {
    id: "522601",
    fullname: "凯里市",
    location: {
      lat: 26.56756,
      lng: 107.9804,
    },
  },
  {
    id: "522622",
    fullname: "黄平县",
    location: {
      lat: 26.90533,
      lng: 107.91638,
    },
  },
  {
    id: "522623",
    fullname: "施秉县",
    location: {
      lat: 27.03327,
      lng: 108.12413,
    },
  },
  {
    id: "522624",
    fullname: "三穗县",
    location: {
      lat: 26.95291,
      lng: 108.67533,
    },
  },
  {
    id: "522625",
    fullname: "镇远县",
    location: {
      lat: 27.04914,
      lng: 108.42968,
    },
  },
  {
    id: "522626",
    fullname: "岑巩县",
    location: {
      lat: 27.17385,
      lng: 108.8157,
    },
  },
  {
    id: "522627",
    fullname: "天柱县",
    location: {
      lat: 26.90948,
      lng: 109.20776,
    },
  },
  {
    id: "522628",
    fullname: "锦屏县",
    location: {
      lat: 26.67631,
      lng: 109.20051,
    },
  },
  {
    id: "522629",
    fullname: "剑河县",
    location: {
      lat: 26.7286,
      lng: 108.44137,
    },
  },
  {
    id: "522630",
    fullname: "台江县",
    location: {
      lat: 26.66903,
      lng: 108.32009,
    },
  },
  {
    id: "522631",
    fullname: "黎平县",
    location: {
      lat: 26.22924,
      lng: 109.13718,
    },
  },
  {
    id: "522632",
    fullname: "榕江县",
    location: {
      lat: 25.93189,
      lng: 108.52251,
    },
  },
  {
    id: "522633",
    fullname: "从江县",
    location: {
      lat: 25.75418,
      lng: 108.90532,
    },
  },
  {
    id: "522634",
    fullname: "雷山县",
    location: {
      lat: 26.37834,
      lng: 108.07758,
    },
  },
  {
    id: "522635",
    fullname: "麻江县",
    location: {
      lat: 26.49115,
      lng: 107.58937,
    },
  },
  {
    id: "522636",
    fullname: "丹寨县",
    location: {
      lat: 26.19841,
      lng: 107.78871,
    },
  },
  {
    id: "522701",
    fullname: "都匀市",
    location: {
      lat: 26.25979,
      lng: 107.51867,
    },
  },
  {
    id: "522702",
    fullname: "福泉市",
    location: {
      lat: 26.68651,
      lng: 107.5207,
    },
  },
  {
    id: "522722",
    fullname: "荔波县",
    location: {
      lat: 25.41144,
      lng: 107.88725,
    },
  },
  {
    id: "522723",
    fullname: "贵定县",
    location: {
      lat: 26.58498,
      lng: 107.23447,
    },
  },
  {
    id: "522725",
    fullname: "瓮安县",
    location: {
      lat: 27.0779,
      lng: 107.47106,
    },
  },
  {
    id: "522726",
    fullname: "独山县",
    location: {
      lat: 25.82279,
      lng: 107.54578,
    },
  },
  {
    id: "522727",
    fullname: "平塘县",
    location: {
      lat: 25.82249,
      lng: 107.32287,
    },
  },
  {
    id: "522728",
    fullname: "罗甸县",
    location: {
      lat: 25.42536,
      lng: 106.75171,
    },
  },
  {
    id: "522729",
    fullname: "长顺县",
    location: {
      lat: 26.02214,
      lng: 106.45244,
    },
  },
  {
    id: "522730",
    fullname: "龙里县",
    location: {
      lat: 26.45325,
      lng: 106.97981,
    },
  },
  {
    id: "522731",
    fullname: "惠水县",
    location: {
      lat: 26.1329,
      lng: 106.6567,
    },
  },
  {
    id: "522732",
    fullname: "三都水族自治县",
    location: {
      lat: 25.98326,
      lng: 107.86971,
    },
  },
  {
    id: "530102",
    fullname: "五华区",
    location: {
      lat: 25.04347,
      lng: 102.70737,
    },
  },
  {
    id: "530103",
    fullname: "盘龙区",
    location: {
      lat: 25.11624,
      lng: 102.75205,
    },
  },
  {
    id: "530111",
    fullname: "官渡区",
    location: {
      lat: 25.01503,
      lng: 102.7437,
    },
  },
  {
    id: "530112",
    fullname: "西山区",
    location: {
      lat: 25.03845,
      lng: 102.66481,
    },
  },
  {
    id: "530113",
    fullname: "东川区",
    location: {
      lat: 26.08294,
      lng: 103.18773,
    },
  },
  {
    id: "530114",
    fullname: "呈贡区",
    location: {
      lat: 24.88554,
      lng: 102.82147,
    },
  },
  {
    id: "530115",
    fullname: "晋宁区",
    location: {
      lat: 24.66982,
      lng: 102.59559,
    },
  },
  {
    id: "530124",
    fullname: "富民县",
    location: {
      lat: 25.22199,
      lng: 102.49767,
    },
  },
  {
    id: "530125",
    fullname: "宜良县",
    location: {
      lat: 24.92005,
      lng: 103.14119,
    },
  },
  {
    id: "530126",
    fullname: "石林彝族自治县",
    location: {
      lat: 24.77082,
      lng: 103.2889,
    },
  },
  {
    id: "530127",
    fullname: "嵩明县",
    location: {
      lat: 25.33872,
      lng: 103.03687,
    },
  },
  {
    id: "530128",
    fullname: "禄劝彝族苗族自治县",
    location: {
      lat: 25.55128,
      lng: 102.47145,
    },
  },
  {
    id: "530129",
    fullname: "寻甸回族彝族自治县",
    location: {
      lat: 25.55818,
      lng: 103.25668,
    },
  },
  {
    id: "530181",
    fullname: "安宁市",
    location: {
      lat: 24.91954,
      lng: 102.478,
    },
  },
  {
    id: "530302",
    fullname: "麒麟区",
    location: {
      lat: 25.495134,
      lng: 103.80481,
    },
  },
  {
    id: "530303",
    fullname: "沾益区",
    location: {
      lat: 25.60167,
      lng: 103.82183,
    },
  },
  {
    id: "530304",
    fullname: "马龙区",
    location: {
      lat: 25.42807,
      lng: 103.57834,
    },
  },
  {
    id: "530322",
    fullname: "陆良县",
    location: {
      lat: 25.02941,
      lng: 103.66683,
    },
  },
  {
    id: "530323",
    fullname: "师宗县",
    location: {
      lat: 24.82851,
      lng: 103.9899,
    },
  },
  {
    id: "530324",
    fullname: "罗平县",
    location: {
      lat: 24.88468,
      lng: 104.3087,
    },
  },
  {
    id: "530325",
    fullname: "富源县",
    location: {
      lat: 25.67422,
      lng: 104.25485,
    },
  },
  {
    id: "530326",
    fullname: "会泽县",
    location: {
      lat: 26.41791,
      lng: 103.29737,
    },
  },
  {
    id: "530381",
    fullname: "宣威市",
    location: {
      lat: 26.21989,
      lng: 104.10448,
    },
  },
  {
    id: "530402",
    fullname: "红塔区",
    location: {
      lat: 24.34128,
      lng: 102.54025,
    },
  },
  {
    id: "530403",
    fullname: "江川区",
    location: {
      lat: 24.299494,
      lng: 102.748564,
    },
  },
  {
    id: "530423",
    fullname: "通海县",
    location: {
      lat: 24.11367,
      lng: 102.76647,
    },
  },
  {
    id: "530424",
    fullname: "华宁县",
    location: {
      lat: 24.1934,
      lng: 102.92849,
    },
  },
  {
    id: "530425",
    fullname: "易门县",
    location: {
      lat: 24.67108,
      lng: 102.16273,
    },
  },
  {
    id: "530426",
    fullname: "峨山彝族自治县",
    location: {
      lat: 24.16908,
      lng: 102.40579,
    },
  },
  {
    id: "530427",
    fullname: "新平彝族傣族自治县",
    location: {
      lat: 24.07,
      lng: 101.99014,
    },
  },
  {
    id: "530428",
    fullname: "元江县",
    location: {
      lat: 23.59667,
      lng: 101.99809,
    },
  },
  {
    id: "530481",
    fullname: "澄江市",
    location: {
      lat: 24.67379,
      lng: 102.90819,
    },
  },
  {
    id: "530502",
    fullname: "隆阳区",
    location: {
      lat: 25.12107,
      lng: 99.16579,
    },
  },
  {
    id: "530521",
    fullname: "施甸县",
    location: {
      lat: 24.72308,
      lng: 99.18902,
    },
  },
  {
    id: "530523",
    fullname: "龙陵县",
    location: {
      lat: 24.58682,
      lng: 98.68927,
    },
  },
  {
    id: "530524",
    fullname: "昌宁县",
    location: {
      lat: 24.82745,
      lng: 99.60567,
    },
  },
  {
    id: "530581",
    fullname: "腾冲市",
    location: {
      lat: 25.02053,
      lng: 98.49097,
    },
  },
  {
    id: "530602",
    fullname: "昭阳区",
    location: {
      lat: 27.320268,
      lng: 103.70594,
    },
  },
  {
    id: "530621",
    fullname: "鲁甸县",
    location: {
      lat: 27.18664,
      lng: 103.55792,
    },
  },
  {
    id: "530622",
    fullname: "巧家县",
    location: {
      lat: 26.90861,
      lng: 102.93006,
    },
  },
  {
    id: "530623",
    fullname: "盐津县",
    location: {
      lat: 28.10859,
      lng: 104.23467,
    },
  },
  {
    id: "530624",
    fullname: "大关县",
    location: {
      lat: 27.74806,
      lng: 103.89111,
    },
  },
  {
    id: "530625",
    fullname: "永善县",
    location: {
      lat: 28.22909,
      lng: 103.63817,
    },
  },
  {
    id: "530626",
    fullname: "绥江县",
    location: {
      lat: 28.5984,
      lng: 103.95841,
    },
  },
  {
    id: "530627",
    fullname: "镇雄县",
    location: {
      lat: 27.4415,
      lng: 104.8736,
    },
  },
  {
    id: "530628",
    fullname: "彝良县",
    location: {
      lat: 27.625508,
      lng: 104.04805,
    },
  },
  {
    id: "530629",
    fullname: "威信县",
    location: {
      lat: 27.84685,
      lng: 105.04906,
    },
  },
  {
    id: "530681",
    fullname: "水富市",
    location: {
      lat: 28.63002,
      lng: 104.41562,
    },
  },
  {
    id: "530702",
    fullname: "古城区",
    location: {
      lat: 26.87721,
      lng: 100.22549,
    },
  },
  {
    id: "530721",
    fullname: "玉龙纳西族自治县",
    location: {
      lat: 26.82152,
      lng: 100.23695,
    },
  },
  {
    id: "530722",
    fullname: "永胜县",
    location: {
      lat: 26.68431,
      lng: 100.75086,
    },
  },
  {
    id: "530723",
    fullname: "华坪县",
    location: {
      lat: 26.62921,
      lng: 101.2663,
    },
  },
  {
    id: "530724",
    fullname: "宁蒗彝族自治县",
    location: {
      lat: 27.28221,
      lng: 100.85142,
    },
  },
  {
    id: "530802",
    fullname: "思茅区",
    location: {
      lat: 22.78704,
      lng: 100.977058,
    },
  },
  {
    id: "530821",
    fullname: "宁洱哈尼族彝族自治县",
    location: {
      lat: 23.06167,
      lng: 101.04539,
    },
  },
  {
    id: "530822",
    fullname: "墨江哈尼族自治县",
    location: {
      lat: 23.43185,
      lng: 101.69223,
    },
  },
  {
    id: "530823",
    fullname: "景东彝族自治县",
    location: {
      lat: 24.44697,
      lng: 100.8339,
    },
  },
  {
    id: "530824",
    fullname: "景谷傣族彝族自治县",
    location: {
      lat: 23.49704,
      lng: 100.7029,
    },
  },
  {
    id: "530825",
    fullname: "镇沅县",
    location: {
      lat: 24.00461,
      lng: 101.10843,
    },
  },
  {
    id: "530826",
    fullname: "江城哈尼族彝族自治县",
    location: {
      lat: 22.58518,
      lng: 101.86237,
    },
  },
  {
    id: "530827",
    fullname: "孟连县",
    location: {
      lat: 22.32911,
      lng: 99.58441,
    },
  },
  {
    id: "530828",
    fullname: "澜沧拉祜族自治县",
    location: {
      lat: 22.55577,
      lng: 99.93208,
    },
  },
  {
    id: "530829",
    fullname: "西盟佤族自治县",
    location: {
      lat: 22.64435,
      lng: 99.59018,
    },
  },
  {
    id: "530902",
    fullname: "临翔区",
    location: {
      lat: 23.89516,
      lng: 100.08233,
    },
  },
  {
    id: "530921",
    fullname: "凤庆县",
    location: {
      lat: 24.58038,
      lng: 99.92841,
    },
  },
  {
    id: "530922",
    fullname: "云县",
    location: {
      lat: 24.4446,
      lng: 100.13111,
    },
  },
  {
    id: "530923",
    fullname: "永德县",
    location: {
      lat: 24.01828,
      lng: 99.25929,
    },
  },
  {
    id: "530924",
    fullname: "镇康县",
    location: {
      lat: 23.7631,
      lng: 98.82543,
    },
  },
  {
    id: "530925",
    fullname: "双江县",
    location: {
      lat: 23.4736,
      lng: 99.82768,
    },
  },
  {
    id: "530926",
    fullname: "耿马傣族佤族自治县",
    location: {
      lat: 23.53786,
      lng: 99.39767,
    },
  },
  {
    id: "530927",
    fullname: "沧源佤族自治县",
    location: {
      lat: 23.14681,
      lng: 99.24583,
    },
  },
  {
    id: "532301",
    fullname: "楚雄市",
    location: {
      lat: 25.03288,
      lng: 101.54582,
    },
  },
  {
    id: "532322",
    fullname: "双柏县",
    location: {
      lat: 24.68867,
      lng: 101.64165,
    },
  },
  {
    id: "532323",
    fullname: "牟定县",
    location: {
      lat: 25.31241,
      lng: 101.54697,
    },
  },
  {
    id: "532324",
    fullname: "南华县",
    location: {
      lat: 25.19229,
      lng: 101.27354,
    },
  },
  {
    id: "532325",
    fullname: "姚安县",
    location: {
      lat: 25.50412,
      lng: 101.241673,
    },
  },
  {
    id: "532326",
    fullname: "大姚县",
    location: {
      lat: 25.72179,
      lng: 101.3244,
    },
  },
  {
    id: "532327",
    fullname: "永仁县",
    location: {
      lat: 26.05615,
      lng: 101.66982,
    },
  },
  {
    id: "532328",
    fullname: "元谋县",
    location: {
      lat: 25.70436,
      lng: 101.87449,
    },
  },
  {
    id: "532329",
    fullname: "武定县",
    location: {
      lat: 25.53038,
      lng: 102.40442,
    },
  },
  {
    id: "532331",
    fullname: "禄丰县",
    location: {
      lat: 25.151,
      lng: 102.0791,
    },
  },
  {
    id: "532501",
    fullname: "个旧市",
    location: {
      lat: 23.35899,
      lng: 103.16004,
    },
  },
  {
    id: "532502",
    fullname: "开远市",
    location: {
      lat: 23.71434,
      lng: 103.26676,
    },
  },
  {
    id: "532503",
    fullname: "蒙自市",
    location: {
      lat: 23.39622,
      lng: 103.36481,
    },
  },
  {
    id: "532504",
    fullname: "弥勒市",
    location: {
      lat: 24.41059,
      lng: 103.41499,
    },
  },
  {
    id: "532523",
    fullname: "屏边苗族自治县",
    location: {
      lat: 22.98372,
      lng: 103.68721,
    },
  },
  {
    id: "532524",
    fullname: "建水县",
    location: {
      lat: 23.63499,
      lng: 102.82699,
    },
  },
  {
    id: "532525",
    fullname: "石屏县",
    location: {
      lat: 23.70556,
      lng: 102.49621,
    },
  },
  {
    id: "532527",
    fullname: "泸西县",
    location: {
      lat: 24.5321,
      lng: 103.76623,
    },
  },
  {
    id: "532528",
    fullname: "元阳县",
    location: {
      lat: 23.21999,
      lng: 102.83528,
    },
  },
  {
    id: "532529",
    fullname: "红河县",
    location: {
      lat: 23.36907,
      lng: 102.42079,
    },
  },
  {
    id: "532530",
    fullname: "金平苗族瑶族傣族自治县",
    location: {
      lat: 22.77966,
      lng: 103.22648,
    },
  },
  {
    id: "532531",
    fullname: "绿春县",
    location: {
      lat: 22.99346,
      lng: 102.39293,
    },
  },
  {
    id: "532532",
    fullname: "河口瑶族自治县",
    location: {
      lat: 22.52931,
      lng: 103.93936,
    },
  },
  {
    id: "532601",
    fullname: "文山市",
    location: {
      lat: 23.38678,
      lng: 104.233,
    },
  },
  {
    id: "532622",
    fullname: "砚山县",
    location: {
      lat: 23.60586,
      lng: 104.33709,
    },
  },
  {
    id: "532623",
    fullname: "西畴县",
    location: {
      lat: 23.43712,
      lng: 104.6722,
    },
  },
  {
    id: "532624",
    fullname: "麻栗坡县",
    location: {
      lat: 23.12525,
      lng: 104.70252,
    },
  },
  {
    id: "532625",
    fullname: "马关县",
    location: {
      lat: 23.01298,
      lng: 104.39387,
    },
  },
  {
    id: "532626",
    fullname: "丘北县",
    location: {
      lat: 24.04186,
      lng: 104.19581,
    },
  },
  {
    id: "532627",
    fullname: "广南县",
    location: {
      lat: 24.04645,
      lng: 105.05516,
    },
  },
  {
    id: "532628",
    fullname: "富宁县",
    location: {
      lat: 23.62539,
      lng: 105.63053,
    },
  },
  {
    id: "532801",
    fullname: "景洪市",
    location: {
      lat: 22.00008,
      lng: 100.77163,
    },
  },
  {
    id: "532822",
    fullname: "勐海县",
    location: {
      lat: 21.95753,
      lng: 100.45223,
    },
  },
  {
    id: "532823",
    fullname: "勐腊县",
    location: {
      lat: 21.45941,
      lng: 101.56461,
    },
  },
  {
    id: "532901",
    fullname: "大理市",
    location: {
      lat: 25.591578,
      lng: 100.229637,
    },
  },
  {
    id: "532922",
    fullname: "漾濞彝族自治县",
    location: {
      lat: 25.66992,
      lng: 99.95814,
    },
  },
  {
    id: "532923",
    fullname: "祥云县",
    location: {
      lat: 25.48381,
      lng: 100.55059,
    },
  },
  {
    id: "532924",
    fullname: "宾川县",
    location: {
      lat: 25.827,
      lng: 100.57265,
    },
  },
  {
    id: "532925",
    fullname: "弥渡县",
    location: {
      lat: 25.34365,
      lng: 100.49131,
    },
  },
  {
    id: "532926",
    fullname: "南涧彝族自治县",
    location: {
      lat: 25.04282,
      lng: 100.50974,
    },
  },
  {
    id: "532927",
    fullname: "巍山彝族回族自治县",
    location: {
      lat: 25.22714,
      lng: 100.30711,
    },
  },
  {
    id: "532928",
    fullname: "永平县",
    location: {
      lat: 25.46454,
      lng: 99.54098,
    },
  },
  {
    id: "532929",
    fullname: "云龙县",
    location: {
      lat: 25.88573,
      lng: 99.37096,
    },
  },
  {
    id: "532930",
    fullname: "洱源县",
    location: {
      lat: 26.11113,
      lng: 99.95088,
    },
  },
  {
    id: "532931",
    fullname: "剑川县",
    location: {
      lat: 26.537018,
      lng: 99.905102,
    },
  },
  {
    id: "532932",
    fullname: "鹤庆县",
    location: {
      lat: 26.56013,
      lng: 100.17644,
    },
  },
  {
    id: "533102",
    fullname: "瑞丽市",
    location: {
      lat: 24.01278,
      lng: 97.85189,
    },
  },
  {
    id: "533103",
    fullname: "芒市",
    location: {
      lat: 24.43379,
      lng: 98.58815,
    },
  },
  {
    id: "533122",
    fullname: "梁河县",
    location: {
      lat: 24.804354,
      lng: 98.296697,
    },
  },
  {
    id: "533123",
    fullname: "盈江县",
    location: {
      lat: 24.70519,
      lng: 97.93184,
    },
  },
  {
    id: "533124",
    fullname: "陇川县",
    location: {
      lat: 24.18305,
      lng: 97.79203,
    },
  },
  {
    id: "533301",
    fullname: "泸水市",
    location: {
      lat: 25.82306,
      lng: 98.85804,
    },
  },
  {
    id: "533323",
    fullname: "福贡县",
    location: {
      lat: 26.90185,
      lng: 98.86905,
    },
  },
  {
    id: "533324",
    fullname: "贡山独龙族怒族自治县",
    location: {
      lat: 27.74104,
      lng: 98.66579,
    },
  },
  {
    id: "533325",
    fullname: "兰坪白族普米族自治县",
    location: {
      lat: 26.45353,
      lng: 99.41671,
    },
  },
  {
    id: "533401",
    fullname: "香格里拉市",
    location: {
      lat: 27.84254,
      lng: 99.74317,
    },
  },
  {
    id: "533422",
    fullname: "德钦县",
    location: {
      lat: 28.46357,
      lng: 98.91699,
    },
  },
  {
    id: "533423",
    fullname: "维西傈僳族自治县",
    location: {
      lat: 27.17739,
      lng: 99.28705,
    },
  },
  {
    id: "540102",
    fullname: "城关区",
    location: {
      lat: 29.65262,
      lng: 91.13775,
    },
  },
  {
    id: "540103",
    fullname: "堆龙德庆区",
    location: {
      lat: 29.64602,
      lng: 91.00338,
    },
  },
  {
    id: "540104",
    fullname: "达孜区",
    location: {
      lat: 29.66933,
      lng: 91.34979,
    },
  },
  {
    id: "540121",
    fullname: "林周县",
    location: {
      lat: 29.89469,
      lng: 91.2619,
    },
  },
  {
    id: "540122",
    fullname: "当雄县",
    location: {
      lat: 30.47192,
      lng: 91.1013,
    },
  },
  {
    id: "540123",
    fullname: "尼木县",
    location: {
      lat: 29.43184,
      lng: 90.16464,
    },
  },
  {
    id: "540124",
    fullname: "曲水县",
    location: {
      lat: 29.353,
      lng: 90.74367,
    },
  },
  {
    id: "540127",
    fullname: "墨竹工卡县",
    location: {
      lat: 29.83375,
      lng: 91.73065,
    },
  },
  {
    id: "540202",
    fullname: "桑珠孜区",
    location: {
      lat: 29.26969,
      lng: 88.88697,
    },
  },
  {
    id: "540221",
    fullname: "南木林县",
    location: {
      lat: 29.68224,
      lng: 89.09936,
    },
  },
  {
    id: "540222",
    fullname: "江孜县",
    location: {
      lat: 28.91152,
      lng: 89.60558,
    },
  },
  {
    id: "540223",
    fullname: "定日县",
    location: {
      lat: 28.65874,
      lng: 87.12607,
    },
  },
  {
    id: "540224",
    fullname: "萨迦县",
    location: {
      lat: 28.89919,
      lng: 88.02172,
    },
  },
  {
    id: "540225",
    fullname: "拉孜县",
    location: {
      lat: 29.08164,
      lng: 87.63718,
    },
  },
  {
    id: "540226",
    fullname: "昂仁县",
    location: {
      lat: 29.29482,
      lng: 87.23617,
    },
  },
  {
    id: "540227",
    fullname: "谢通门县",
    location: {
      lat: 29.43234,
      lng: 88.26166,
    },
  },
  {
    id: "540228",
    fullname: "白朗县",
    location: {
      lat: 29.10919,
      lng: 89.26156,
    },
  },
  {
    id: "540229",
    fullname: "仁布县",
    location: {
      lat: 29.23089,
      lng: 89.842,
    },
  },
  {
    id: "540230",
    fullname: "康马县",
    location: {
      lat: 28.55567,
      lng: 89.68169,
    },
  },
  {
    id: "540231",
    fullname: "定结县",
    location: {
      lat: 28.36408,
      lng: 87.76606,
    },
  },
  {
    id: "540232",
    fullname: "仲巴县",
    location: {
      lat: 29.72419,
      lng: 84.02454,
    },
  },
  {
    id: "540233",
    fullname: "亚东县",
    location: {
      lat: 27.48592,
      lng: 88.90708,
    },
  },
  {
    id: "540234",
    fullname: "吉隆县",
    location: {
      lat: 28.85254,
      lng: 85.29737,
    },
  },
  {
    id: "540235",
    fullname: "聂拉木县",
    location: {
      lat: 28.15499,
      lng: 85.98232,
    },
  },
  {
    id: "540236",
    fullname: "萨嘎县",
    location: {
      lat: 29.32943,
      lng: 85.23421,
    },
  },
  {
    id: "540237",
    fullname: "岗巴县",
    location: {
      lat: 28.2746,
      lng: 88.52015,
    },
  },
  {
    id: "540302",
    fullname: "卡若区",
    location: {
      lat: 31.13831,
      lng: 97.18039,
    },
  },
  {
    id: "540321",
    fullname: "江达县",
    location: {
      lat: 31.49968,
      lng: 98.21822,
    },
  },
  {
    id: "540322",
    fullname: "贡觉县",
    location: {
      lat: 30.86016,
      lng: 98.2708,
    },
  },
  {
    id: "540323",
    fullname: "类乌齐县",
    location: {
      lat: 31.21155,
      lng: 96.6002,
    },
  },
  {
    id: "540324",
    fullname: "丁青县",
    location: {
      lat: 31.4125,
      lng: 95.59572,
    },
  },
  {
    id: "540325",
    fullname: "察雅县",
    location: {
      lat: 30.65363,
      lng: 97.56877,
    },
  },
  {
    id: "540326",
    fullname: "八宿县",
    location: {
      lat: 30.0532,
      lng: 96.91785,
    },
  },
  {
    id: "540327",
    fullname: "左贡县",
    location: {
      lat: 29.67091,
      lng: 97.84085,
    },
  },
  {
    id: "540328",
    fullname: "芒康县",
    location: {
      lat: 29.68008,
      lng: 98.59312,
    },
  },
  {
    id: "540329",
    fullname: "洛隆县",
    location: {
      lat: 30.74181,
      lng: 95.82482,
    },
  },
  {
    id: "540330",
    fullname: "边坝县",
    location: {
      lat: 30.93345,
      lng: 94.7079,
    },
  },
  {
    id: "540402",
    fullname: "巴宜区",
    location: {
      lat: 29.63654,
      lng: 94.36119,
    },
  },
  {
    id: "540421",
    fullname: "工布江达县",
    location: {
      lat: 29.88531,
      lng: 93.24611,
    },
  },
  {
    id: "540422",
    fullname: "米林县",
    location: {
      lat: 29.21607,
      lng: 94.21315,
    },
  },
  {
    id: "540423",
    fullname: "墨脱县",
    location: {
      lat: 29.32521,
      lng: 95.33304,
    },
  },
  {
    id: "540424",
    fullname: "波密县",
    location: {
      lat: 29.85903,
      lng: 95.76761,
    },
  },
  {
    id: "540425",
    fullname: "察隅县",
    location: {
      lat: 28.66154,
      lng: 97.46687,
    },
  },
  {
    id: "540426",
    fullname: "朗县",
    location: {
      lat: 29.04607,
      lng: 93.07482,
    },
  },
  {
    id: "540502",
    fullname: "乃东区",
    location: {
      lat: 29.22484,
      lng: 91.76141,
    },
  },
  {
    id: "540521",
    fullname: "扎囊县",
    location: {
      lat: 29.245,
      lng: 91.33735,
    },
  },
  {
    id: "540522",
    fullname: "贡嘎县",
    location: {
      lat: 29.28947,
      lng: 90.98421,
    },
  },
  {
    id: "540523",
    fullname: "桑日县",
    location: {
      lat: 29.25906,
      lng: 92.01579,
    },
  },
  {
    id: "540524",
    fullname: "琼结县",
    location: {
      lat: 29.02464,
      lng: 91.68385,
    },
  },
  {
    id: "540525",
    fullname: "曲松县",
    location: {
      lat: 29.06277,
      lng: 92.20222,
    },
  },
  {
    id: "540526",
    fullname: "措美县",
    location: {
      lat: 28.43793,
      lng: 91.43361,
    },
  },
  {
    id: "540527",
    fullname: "洛扎县",
    location: {
      lat: 28.38569,
      lng: 90.85998,
    },
  },
  {
    id: "540528",
    fullname: "加查县",
    location: {
      lat: 29.14023,
      lng: 92.59387,
    },
  },
  {
    id: "540529",
    fullname: "隆子县",
    location: {
      lat: 28.40681,
      lng: 92.46177,
    },
  },
  {
    id: "540530",
    fullname: "错那县",
    location: {
      lat: 27.99099,
      lng: 91.9571,
    },
  },
  {
    id: "540531",
    fullname: "浪卡子县",
    location: {
      lat: 28.96768,
      lng: 90.40011,
    },
  },
  {
    id: "540602",
    fullname: "色尼区",
    location: {
      lat: 31.46988,
      lng: 92.05355,
    },
  },
  {
    id: "540621",
    fullname: "嘉黎县",
    location: {
      lat: 30.64087,
      lng: 93.23236,
    },
  },
  {
    id: "540622",
    fullname: "比如县",
    location: {
      lat: 31.47785,
      lng: 93.6813,
    },
  },
  {
    id: "540623",
    fullname: "聂荣县",
    location: {
      lat: 32.10784,
      lng: 92.30327,
    },
  },
  {
    id: "540624",
    fullname: "安多县",
    location: {
      lat: 32.265,
      lng: 91.68258,
    },
  },
  {
    id: "540625",
    fullname: "申扎县",
    location: {
      lat: 30.93043,
      lng: 88.70982,
    },
  },
  {
    id: "540626",
    fullname: "索县",
    location: {
      lat: 31.88673,
      lng: 93.78556,
    },
  },
  {
    id: "540627",
    fullname: "班戈县",
    location: {
      lat: 31.39199,
      lng: 90.00987,
    },
  },
  {
    id: "540628",
    fullname: "巴青县",
    location: {
      lat: 31.9184,
      lng: 94.05345,
    },
  },
  {
    id: "540629",
    fullname: "尼玛县",
    location: {
      lat: 31.78448,
      lng: 87.23691,
    },
  },
  {
    id: "540630",
    fullname: "双湖县",
    location: {
      lat: 33.18763,
      lng: 88.83691,
    },
  },
  {
    id: "542521",
    fullname: "普兰县",
    location: {
      lat: 30.29326,
      lng: 81.17739,
    },
  },
  {
    id: "542522",
    fullname: "札达县",
    location: {
      lat: 31.47865,
      lng: 79.80321,
    },
  },
  {
    id: "542523",
    fullname: "噶尔县",
    location: {
      lat: 32.50028,
      lng: 80.0959,
    },
  },
  {
    id: "542524",
    fullname: "日土县",
    location: {
      lat: 33.38747,
      lng: 79.71317,
    },
  },
  {
    id: "542525",
    fullname: "革吉县",
    location: {
      lat: 32.39645,
      lng: 81.15106,
    },
  },
  {
    id: "542526",
    fullname: "改则县",
    location: {
      lat: 32.30455,
      lng: 84.06305,
    },
  },
  {
    id: "542527",
    fullname: "措勤县",
    location: {
      lat: 31.0164,
      lng: 85.15253,
    },
  },
  {
    id: "610102",
    fullname: "新城区",
    location: {
      lat: 34.26665,
      lng: 108.96074,
    },
  },
  {
    id: "610103",
    fullname: "碑林区",
    location: {
      lat: 34.23053,
      lng: 108.93425,
    },
  },
  {
    id: "610104",
    fullname: "莲湖区",
    location: {
      lat: 34.26703,
      lng: 108.9402,
    },
  },
  {
    id: "610111",
    fullname: "灞桥区",
    location: {
      lat: 34.2727,
      lng: 109.06458,
    },
  },
  {
    id: "610112",
    fullname: "未央区",
    location: {
      lat: 34.29318,
      lng: 108.94712,
    },
  },
  {
    id: "610113",
    fullname: "雁塔区",
    location: {
      lat: 34.22259,
      lng: 108.94878,
    },
  },
  {
    id: "610114",
    fullname: "阎良区",
    location: {
      lat: 34.66225,
      lng: 109.2262,
    },
  },
  {
    id: "610115",
    fullname: "临潼区",
    location: {
      lat: 34.3667,
      lng: 109.21421,
    },
  },
  {
    id: "610116",
    fullname: "长安区",
    location: {
      lat: 34.15775,
      lng: 108.90688,
    },
  },
  {
    id: "610117",
    fullname: "高陵区",
    location: {
      lat: 34.53487,
      lng: 109.08822,
    },
  },
  {
    id: "610118",
    fullname: "鄠邑区",
    location: {
      lat: 34.10847,
      lng: 108.60494,
    },
  },
  {
    id: "610122",
    fullname: "蓝田县",
    location: {
      lat: 34.15132,
      lng: 109.32345,
    },
  },
  {
    id: "610124",
    fullname: "周至县",
    location: {
      lat: 34.1634,
      lng: 108.22213,
    },
  },
  {
    id: "610202",
    fullname: "王益区",
    location: {
      lat: 35.06914,
      lng: 109.07593,
    },
  },
  {
    id: "610203",
    fullname: "印台区",
    location: {
      lat: 35.11473,
      lng: 109.09986,
    },
  },
  {
    id: "610204",
    fullname: "耀州区",
    location: {
      lat: 34.90978,
      lng: 108.98011,
    },
  },
  {
    id: "610222",
    fullname: "宜君县",
    location: {
      lat: 35.398762,
      lng: 109.116895,
    },
  },
  {
    id: "610302",
    fullname: "渭滨区",
    location: {
      lat: 34.35513,
      lng: 107.15526,
    },
  },
  {
    id: "610303",
    fullname: "金台区",
    location: {
      lat: 34.39029,
      lng: 107.13126,
    },
  },
  {
    id: "610304",
    fullname: "陈仓区",
    location: {
      lat: 34.354555,
      lng: 107.387468,
    },
  },
  {
    id: "610322",
    fullname: "凤翔县",
    location: {
      lat: 34.52114,
      lng: 107.40076,
    },
  },
  {
    id: "610323",
    fullname: "岐山县",
    location: {
      lat: 34.44346,
      lng: 107.62101,
    },
  },
  {
    id: "610324",
    fullname: "扶风县",
    location: {
      lat: 34.37527,
      lng: 107.90022,
    },
  },
  {
    id: "610326",
    fullname: "眉县",
    location: {
      lat: 34.2741,
      lng: 107.74992,
    },
  },
  {
    id: "610327",
    fullname: "陇县",
    location: {
      lat: 34.89305,
      lng: 106.8643,
    },
  },
  {
    id: "610328",
    fullname: "千阳县",
    location: {
      lat: 34.6426,
      lng: 107.13237,
    },
  },
  {
    id: "610329",
    fullname: "麟游县",
    location: {
      lat: 34.67793,
      lng: 107.79339,
    },
  },
  {
    id: "610330",
    fullname: "凤县",
    location: {
      lat: 33.91227,
      lng: 106.52203,
    },
  },
  {
    id: "610331",
    fullname: "太白县",
    location: {
      lat: 34.05919,
      lng: 107.3194,
    },
  },
  {
    id: "610402",
    fullname: "秦都区",
    location: {
      lat: 34.32908,
      lng: 108.70641,
    },
  },
  {
    id: "610403",
    fullname: "杨陵区",
    location: {
      lat: 34.27221,
      lng: 108.08455,
    },
  },
  {
    id: "610404",
    fullname: "渭城区",
    location: {
      lat: 34.36126,
      lng: 108.73751,
    },
  },
  {
    id: "610422",
    fullname: "三原县",
    location: {
      lat: 34.61704,
      lng: 108.9404,
    },
  },
  {
    id: "610423",
    fullname: "泾阳县",
    location: {
      lat: 34.52709,
      lng: 108.84262,
    },
  },
  {
    id: "610424",
    fullname: "乾县",
    location: {
      lat: 34.52761,
      lng: 108.2394,
    },
  },
  {
    id: "610425",
    fullname: "礼泉县",
    location: {
      lat: 34.48165,
      lng: 108.42496,
    },
  },
  {
    id: "610426",
    fullname: "永寿县",
    location: {
      lat: 34.69192,
      lng: 108.14216,
    },
  },
  {
    id: "610428",
    fullname: "长武县",
    location: {
      lat: 35.20571,
      lng: 107.79866,
    },
  },
  {
    id: "610429",
    fullname: "旬邑县",
    location: {
      lat: 35.11184,
      lng: 108.33371,
    },
  },
  {
    id: "610430",
    fullname: "淳化县",
    location: {
      lat: 34.79873,
      lng: 108.58059,
    },
  },
  {
    id: "610431",
    fullname: "武功县",
    location: {
      lat: 34.26036,
      lng: 108.20018,
    },
  },
  {
    id: "610481",
    fullname: "兴平市",
    location: {
      lat: 34.29932,
      lng: 108.4904,
    },
  },
  {
    id: "610482",
    fullname: "彬州市",
    location: {
      lat: 35.03565,
      lng: 108.08108,
    },
  },
  {
    id: "610502",
    fullname: "临渭区",
    location: {
      lat: 34.49823,
      lng: 109.49217,
    },
  },
  {
    id: "610503",
    fullname: "华州区",
    location: {
      lat: 34.51259,
      lng: 109.7719,
    },
  },
  {
    id: "610522",
    fullname: "潼关县",
    location: {
      lat: 34.54438,
      lng: 110.24656,
    },
  },
  {
    id: "610523",
    fullname: "大荔县",
    location: {
      lat: 34.795604,
      lng: 109.942004,
    },
  },
  {
    id: "610524",
    fullname: "合阳县",
    location: {
      lat: 35.23752,
      lng: 110.14928,
    },
  },
  {
    id: "610525",
    fullname: "澄城县",
    location: {
      lat: 35.19024,
      lng: 109.93226,
    },
  },
  {
    id: "610526",
    fullname: "蒲城县",
    location: {
      lat: 34.95517,
      lng: 109.58646,
    },
  },
  {
    id: "610527",
    fullname: "白水县",
    location: {
      lat: 35.1771,
      lng: 109.59102,
    },
  },
  {
    id: "610528",
    fullname: "富平县",
    location: {
      lat: 34.75114,
      lng: 109.18025,
    },
  },
  {
    id: "610581",
    fullname: "韩城市",
    location: {
      lat: 35.476713,
      lng: 110.442856,
    },
  },
  {
    id: "610582",
    fullname: "华阴市",
    location: {
      lat: 34.56602,
      lng: 110.09207,
    },
  },
  {
    id: "610602",
    fullname: "宝塔区",
    location: {
      lat: 36.59141,
      lng: 109.49303,
    },
  },
  {
    id: "610603",
    fullname: "安塞区",
    location: {
      lat: 36.86373,
      lng: 109.32897,
    },
  },
  {
    id: "610621",
    fullname: "延长县",
    location: {
      lat: 36.5793,
      lng: 110.01242,
    },
  },
  {
    id: "610622",
    fullname: "延川县",
    location: {
      lat: 36.87813,
      lng: 110.19375,
    },
  },
  {
    id: "610625",
    fullname: "志丹县",
    location: {
      lat: 36.822338,
      lng: 108.768513,
    },
  },
  {
    id: "610626",
    fullname: "吴起县",
    location: {
      lat: 36.92728,
      lng: 108.17587,
    },
  },
  {
    id: "610627",
    fullname: "甘泉县",
    location: {
      lat: 36.27673,
      lng: 109.3513,
    },
  },
  {
    id: "610628",
    fullname: "富县",
    location: {
      lat: 35.98779,
      lng: 109.37976,
    },
  },
  {
    id: "610629",
    fullname: "洛川县",
    location: {
      lat: 35.7619,
      lng: 109.43238,
    },
  },
  {
    id: "610630",
    fullname: "宜川县",
    location: {
      lat: 36.050277,
      lng: 110.16864,
    },
  },
  {
    id: "610631",
    fullname: "黄龙县",
    location: {
      lat: 35.58432,
      lng: 109.84018,
    },
  },
  {
    id: "610632",
    fullname: "黄陵县",
    location: {
      lat: 35.57937,
      lng: 109.26291,
    },
  },
  {
    id: "610681",
    fullname: "子长市",
    location: {
      lat: 37.142497,
      lng: 109.67497,
    },
  },
  {
    id: "610702",
    fullname: "汉台区",
    location: {
      lat: 33.06784,
      lng: 107.03194,
    },
  },
  {
    id: "610703",
    fullname: "南郑区",
    location: {
      lat: 32.99932,
      lng: 106.93624,
    },
  },
  {
    id: "610722",
    fullname: "城固县",
    location: {
      lat: 33.15665,
      lng: 107.33372,
    },
  },
  {
    id: "610723",
    fullname: "洋县",
    location: {
      lat: 33.22275,
      lng: 107.54565,
    },
  },
  {
    id: "610724",
    fullname: "西乡县",
    location: {
      lat: 32.98306,
      lng: 107.76669,
    },
  },
  {
    id: "610725",
    fullname: "勉县",
    location: {
      lat: 33.15362,
      lng: 106.67314,
    },
  },
  {
    id: "610726",
    fullname: "宁强县",
    location: {
      lat: 32.82962,
      lng: 106.2572,
    },
  },
  {
    id: "610727",
    fullname: "略阳县",
    location: {
      lat: 33.32733,
      lng: 106.1566,
    },
  },
  {
    id: "610728",
    fullname: "镇巴县",
    location: {
      lat: 32.53666,
      lng: 107.89502,
    },
  },
  {
    id: "610729",
    fullname: "留坝县",
    location: {
      lat: 33.61758,
      lng: 106.92076,
    },
  },
  {
    id: "610730",
    fullname: "佛坪县",
    location: {
      lat: 33.52449,
      lng: 107.9905,
    },
  },
  {
    id: "610802",
    fullname: "榆阳区",
    location: {
      lat: 38.27731,
      lng: 109.72073,
    },
  },
  {
    id: "610803",
    fullname: "横山区",
    location: {
      lat: 37.95871,
      lng: 109.29315,
    },
  },
  {
    id: "610822",
    fullname: "府谷县",
    location: {
      lat: 39.02806,
      lng: 111.06764,
    },
  },
  {
    id: "610824",
    fullname: "靖边县",
    location: {
      lat: 37.59931,
      lng: 108.79568,
    },
  },
  {
    id: "610825",
    fullname: "定边县",
    location: {
      lat: 37.59454,
      lng: 107.60128,
    },
  },
  {
    id: "610826",
    fullname: "绥德县",
    location: {
      lat: 37.50278,
      lng: 110.26317,
    },
  },
  {
    id: "610827",
    fullname: "米脂县",
    location: {
      lat: 37.75484,
      lng: 110.18394,
    },
  },
  {
    id: "610828",
    fullname: "佳县",
    location: {
      lat: 38.01959,
      lng: 110.49136,
    },
  },
  {
    id: "610829",
    fullname: "吴堡县",
    location: {
      lat: 37.45224,
      lng: 110.73967,
    },
  },
  {
    id: "610830",
    fullname: "清涧县",
    location: {
      lat: 37.0889,
      lng: 110.12114,
    },
  },
  {
    id: "610831",
    fullname: "子洲县",
    location: {
      lat: 37.61075,
      lng: 110.03526,
    },
  },
  {
    id: "610881",
    fullname: "神木市",
    location: {
      lat: 38.84237,
      lng: 110.498969,
    },
  },
  {
    id: "610902",
    fullname: "汉滨区",
    location: {
      lat: 32.6955,
      lng: 109.02697,
    },
  },
  {
    id: "610921",
    fullname: "汉阴县",
    location: {
      lat: 32.89314,
      lng: 108.50866,
    },
  },
  {
    id: "610922",
    fullname: "石泉县",
    location: {
      lat: 33.03829,
      lng: 108.24843,
    },
  },
  {
    id: "610923",
    fullname: "宁陕县",
    location: {
      lat: 33.31049,
      lng: 108.31428,
    },
  },
  {
    id: "610924",
    fullname: "紫阳县",
    location: {
      lat: 32.52025,
      lng: 108.53419,
    },
  },
  {
    id: "610925",
    fullname: "岚皋县",
    location: {
      lat: 32.30715,
      lng: 108.90222,
    },
  },
  {
    id: "610926",
    fullname: "平利县",
    location: {
      lat: 32.38903,
      lng: 109.3618,
    },
  },
  {
    id: "610927",
    fullname: "镇坪县",
    location: {
      lat: 31.88376,
      lng: 109.52677,
    },
  },
  {
    id: "610928",
    fullname: "旬阳县",
    location: {
      lat: 32.83417,
      lng: 109.3652,
    },
  },
  {
    id: "610929",
    fullname: "白河县",
    location: {
      lat: 32.80906,
      lng: 110.11261,
    },
  },
  {
    id: "611002",
    fullname: "商州区",
    location: {
      lat: 33.86273,
      lng: 109.94107,
    },
  },
  {
    id: "611021",
    fullname: "洛南县",
    location: {
      lat: 34.09082,
      lng: 110.14842,
    },
  },
  {
    id: "611022",
    fullname: "丹凤县",
    location: {
      lat: 33.69585,
      lng: 110.32721,
    },
  },
  {
    id: "611023",
    fullname: "商南县",
    location: {
      lat: 33.53112,
      lng: 110.88158,
    },
  },
  {
    id: "611024",
    fullname: "山阳县",
    location: {
      lat: 33.53218,
      lng: 109.88193,
    },
  },
  {
    id: "611025",
    fullname: "镇安县",
    location: {
      lat: 33.42337,
      lng: 109.15258,
    },
  },
  {
    id: "611026",
    fullname: "柞水县",
    location: {
      lat: 33.68607,
      lng: 109.1142,
    },
  },
  {
    id: "620102",
    fullname: "城关区",
    location: {
      lat: 36.05709,
      lng: 103.82538,
    },
  },
  {
    id: "620103",
    fullname: "七里河区",
    location: {
      lat: 36.06592,
      lng: 103.78576,
    },
  },
  {
    id: "620104",
    fullname: "西固区",
    location: {
      lat: 36.08842,
      lng: 103.6281,
    },
  },
  {
    id: "620105",
    fullname: "安宁区",
    location: {
      lat: 36.10396,
      lng: 103.71878,
    },
  },
  {
    id: "620111",
    fullname: "红古区",
    location: {
      lat: 36.34578,
      lng: 102.85936,
    },
  },
  {
    id: "620121",
    fullname: "永登县",
    location: {
      lat: 36.7364,
      lng: 103.26051,
    },
  },
  {
    id: "620122",
    fullname: "皋兰县",
    location: {
      lat: 36.33216,
      lng: 103.94751,
    },
  },
  {
    id: "620123",
    fullname: "榆中县",
    location: {
      lat: 35.84327,
      lng: 104.11261,
    },
  },
  {
    id: "620299",
    fullname: "嘉峪关市",
    location: {
      lat: 39.77194,
      lng: 98.28971,
    },
  },
  {
    id: "620302",
    fullname: "金川区",
    location: {
      lat: 38.52014,
      lng: 102.19409,
    },
  },
  {
    id: "620321",
    fullname: "永昌县",
    location: {
      lat: 38.24704,
      lng: 101.973,
    },
  },
  {
    id: "620402",
    fullname: "白银区",
    location: {
      lat: 36.53454,
      lng: 104.1724,
    },
  },
  {
    id: "620403",
    fullname: "平川区",
    location: {
      lat: 36.72774,
      lng: 104.82503,
    },
  },
  {
    id: "620421",
    fullname: "靖远县",
    location: {
      lat: 36.565286,
      lng: 104.687001,
    },
  },
  {
    id: "620422",
    fullname: "会宁县",
    location: {
      lat: 35.692909,
      lng: 105.05334,
    },
  },
  {
    id: "620423",
    fullname: "景泰县",
    location: {
      lat: 37.181368,
      lng: 104.063118,
    },
  },
  {
    id: "620502",
    fullname: "秦州区",
    location: {
      lat: 34.58088,
      lng: 105.72417,
    },
  },
  {
    id: "620503",
    fullname: "麦积区",
    location: {
      lat: 34.57024,
      lng: 105.88965,
    },
  },
  {
    id: "620521",
    fullname: "清水县",
    location: {
      lat: 34.74981,
      lng: 106.13737,
    },
  },
  {
    id: "620522",
    fullname: "秦安县",
    location: {
      lat: 34.85918,
      lng: 105.67566,
    },
  },
  {
    id: "620523",
    fullname: "甘谷县",
    location: {
      lat: 34.732,
      lng: 105.33564,
    },
  },
  {
    id: "620524",
    fullname: "武山县",
    location: {
      lat: 34.72134,
      lng: 104.89089,
    },
  },
  {
    id: "620525",
    fullname: "张家川回族自治县",
    location: {
      lat: 34.98843,
      lng: 106.20577,
    },
  },
  {
    id: "620602",
    fullname: "凉州区",
    location: {
      lat: 37.92818,
      lng: 102.64198,
    },
  },
  {
    id: "620621",
    fullname: "民勤县",
    location: {
      lat: 38.62434,
      lng: 103.09366,
    },
  },
  {
    id: "620622",
    fullname: "古浪县",
    location: {
      lat: 37.47013,
      lng: 102.89765,
    },
  },
  {
    id: "620623",
    fullname: "天祝藏族自治县",
    location: {
      lat: 36.97184,
      lng: 103.14178,
    },
  },
  {
    id: "620702",
    fullname: "甘州区",
    location: {
      lat: 38.92967,
      lng: 100.47801,
    },
  },
  {
    id: "620721",
    fullname: "肃南裕固族自治县",
    location: {
      lat: 38.8369,
      lng: 99.61558,
    },
  },
  {
    id: "620722",
    fullname: "民乐县",
    location: {
      lat: 38.43064,
      lng: 100.81317,
    },
  },
  {
    id: "620723",
    fullname: "临泽县",
    location: {
      lat: 39.15257,
      lng: 100.16449,
    },
  },
  {
    id: "620724",
    fullname: "高台县",
    location: {
      lat: 39.37772,
      lng: 99.81943,
    },
  },
  {
    id: "620725",
    fullname: "山丹县",
    location: {
      lat: 38.78449,
      lng: 101.08861,
    },
  },
  {
    id: "620802",
    fullname: "崆峒区",
    location: {
      lat: 35.54258,
      lng: 106.67477,
    },
  },
  {
    id: "620821",
    fullname: "泾川县",
    location: {
      lat: 35.33262,
      lng: 107.36775,
    },
  },
  {
    id: "620822",
    fullname: "灵台县",
    location: {
      lat: 35.06541,
      lng: 107.62126,
    },
  },
  {
    id: "620823",
    fullname: "崇信县",
    location: {
      lat: 35.30229,
      lng: 107.03536,
    },
  },
  {
    id: "620825",
    fullname: "庄浪县",
    location: {
      lat: 35.20239,
      lng: 106.03666,
    },
  },
  {
    id: "620826",
    fullname: "静宁县",
    location: {
      lat: 35.52223,
      lng: 105.73245,
    },
  },
  {
    id: "620881",
    fullname: "华亭市",
    location: {
      lat: 35.21756,
      lng: 106.65352,
    },
  },
  {
    id: "620902",
    fullname: "肃州区",
    location: {
      lat: 39.74502,
      lng: 98.50801,
    },
  },
  {
    id: "620921",
    fullname: "金塔县",
    location: {
      lat: 39.98593,
      lng: 98.90271,
    },
  },
  {
    id: "620922",
    fullname: "瓜州县",
    location: {
      lat: 40.52023,
      lng: 95.78238,
    },
  },
  {
    id: "620923",
    fullname: "肃北蒙古族自治县",
    location: {
      lat: 39.51244,
      lng: 94.87684,
    },
  },
  {
    id: "620924",
    fullname: "阿克塞哈萨克族自治县",
    location: {
      lat: 39.63372,
      lng: 94.34023,
    },
  },
  {
    id: "620981",
    fullname: "玉门市",
    location: {
      lat: 40.29176,
      lng: 97.04542,
    },
  },
  {
    id: "620982",
    fullname: "敦煌市",
    location: {
      lat: 40.14219,
      lng: 94.66197,
    },
  },
  {
    id: "621002",
    fullname: "西峰区",
    location: {
      lat: 35.73062,
      lng: 107.65114,
    },
  },
  {
    id: "621021",
    fullname: "庆城县",
    location: {
      lat: 36.01526,
      lng: 107.88248,
    },
  },
  {
    id: "621022",
    fullname: "环县",
    location: {
      lat: 36.5685,
      lng: 107.30839,
    },
  },
  {
    id: "621023",
    fullname: "华池县",
    location: {
      lat: 36.4613,
      lng: 107.99016,
    },
  },
  {
    id: "621024",
    fullname: "合水县",
    location: {
      lat: 35.81927,
      lng: 108.01953,
    },
  },
  {
    id: "621025",
    fullname: "正宁县",
    location: {
      lat: 35.4917,
      lng: 108.3601,
    },
  },
  {
    id: "621026",
    fullname: "宁县",
    location: {
      lat: 35.50223,
      lng: 107.92824,
    },
  },
  {
    id: "621027",
    fullname: "镇原县",
    location: {
      lat: 35.67728,
      lng: 107.2006,
    },
  },
  {
    id: "621102",
    fullname: "安定区",
    location: {
      lat: 35.57934,
      lng: 104.61093,
    },
  },
  {
    id: "621121",
    fullname: "通渭县",
    location: {
      lat: 35.21087,
      lng: 105.24219,
    },
  },
  {
    id: "621122",
    fullname: "陇西县",
    location: {
      lat: 35.00391,
      lng: 104.6348,
    },
  },
  {
    id: "621123",
    fullname: "渭源县",
    location: {
      lat: 35.13626,
      lng: 104.21502,
    },
  },
  {
    id: "621124",
    fullname: "临洮县",
    location: {
      lat: 35.39509,
      lng: 103.85954,
    },
  },
  {
    id: "621125",
    fullname: "漳县",
    location: {
      lat: 34.84853,
      lng: 104.4717,
    },
  },
  {
    id: "621126",
    fullname: "岷县",
    location: {
      lat: 34.43811,
      lng: 104.03697,
    },
  },
  {
    id: "621202",
    fullname: "武都区",
    location: {
      lat: 33.39189,
      lng: 104.92667,
    },
  },
  {
    id: "621221",
    fullname: "成县",
    location: {
      lat: 33.75062,
      lng: 105.74222,
    },
  },
  {
    id: "621222",
    fullname: "文县",
    location: {
      lat: 32.94396,
      lng: 104.68343,
    },
  },
  {
    id: "621223",
    fullname: "宕昌县",
    location: {
      lat: 34.04735,
      lng: 104.39354,
    },
  },
  {
    id: "621224",
    fullname: "康县",
    location: {
      lat: 33.32937,
      lng: 105.60855,
    },
  },
  {
    id: "621225",
    fullname: "西和县",
    location: {
      lat: 34.01085,
      lng: 105.30143,
    },
  },
  {
    id: "621226",
    fullname: "礼县",
    location: {
      lat: 34.18907,
      lng: 105.17844,
    },
  },
  {
    id: "621227",
    fullname: "徽县",
    location: {
      lat: 33.769663,
      lng: 106.087584,
    },
  },
  {
    id: "621228",
    fullname: "两当县",
    location: {
      lat: 33.909,
      lng: 106.30494,
    },
  },
  {
    id: "622901",
    fullname: "临夏市",
    location: {
      lat: 35.6045,
      lng: 103.24317,
    },
  },
  {
    id: "622921",
    fullname: "临夏县",
    location: {
      lat: 35.49157,
      lng: 102.99563,
    },
  },
  {
    id: "622922",
    fullname: "康乐县",
    location: {
      lat: 35.36973,
      lng: 103.70894,
    },
  },
  {
    id: "622923",
    fullname: "永靖县",
    location: {
      lat: 35.94173,
      lng: 103.31587,
    },
  },
  {
    id: "622924",
    fullname: "广河县",
    location: {
      lat: 35.481,
      lng: 103.56935,
    },
  },
  {
    id: "622925",
    fullname: "和政县",
    location: {
      lat: 35.42535,
      lng: 103.35143,
    },
  },
  {
    id: "622926",
    fullname: "东乡族自治县",
    location: {
      lat: 35.663755,
      lng: 103.389329,
    },
  },
  {
    id: "622927",
    fullname: "积石山县",
    location: {
      lat: 35.71768,
      lng: 102.87581,
    },
  },
  {
    id: "623001",
    fullname: "合作市",
    location: {
      lat: 35.00027,
      lng: 102.91012,
    },
  },
  {
    id: "623021",
    fullname: "临潭县",
    location: {
      lat: 34.692752,
      lng: 103.353614,
    },
  },
  {
    id: "623022",
    fullname: "卓尼县",
    location: {
      lat: 34.58922,
      lng: 103.5071,
    },
  },
  {
    id: "623023",
    fullname: "舟曲县",
    location: {
      lat: 33.784942,
      lng: 104.371667,
    },
  },
  {
    id: "623024",
    fullname: "迭部县",
    location: {
      lat: 34.05587,
      lng: 103.22175,
    },
  },
  {
    id: "623025",
    fullname: "玛曲县",
    location: {
      lat: 33.9977,
      lng: 102.07226,
    },
  },
  {
    id: "623026",
    fullname: "碌曲县",
    location: {
      lat: 34.59103,
      lng: 102.48699,
    },
  },
  {
    id: "623027",
    fullname: "夏河县",
    location: {
      lat: 35.20233,
      lng: 102.52158,
    },
  },
  {
    id: "630102",
    fullname: "城东区",
    location: {
      lat: 36.59976,
      lng: 101.80319,
    },
  },
  {
    id: "630103",
    fullname: "城中区",
    location: {
      lat: 36.5866,
      lng: 101.77013,
    },
  },
  {
    id: "630104",
    fullname: "城西区",
    location: {
      lat: 36.6283,
      lng: 101.76585,
    },
  },
  {
    id: "630105",
    fullname: "城北区",
    location: {
      lat: 36.6502,
      lng: 101.76628,
    },
  },
  {
    id: "630106",
    fullname: "湟中区",
    location: {
      lat: 36.50087,
      lng: 101.57164,
    },
  },
  {
    id: "630121",
    fullname: "大通回族土族自治县",
    location: {
      lat: 36.92694,
      lng: 101.68545,
    },
  },
  {
    id: "630123",
    fullname: "湟源县",
    location: {
      lat: 36.682458,
      lng: 101.256474,
    },
  },
  {
    id: "630202",
    fullname: "乐都区",
    location: {
      lat: 36.48209,
      lng: 102.40173,
    },
  },
  {
    id: "630203",
    fullname: "平安区",
    location: {
      lat: 36.50029,
      lng: 102.10848,
    },
  },
  {
    id: "630222",
    fullname: "民和回族土族自治县",
    location: {
      lat: 36.320262,
      lng: 102.83087,
    },
  },
  {
    id: "630223",
    fullname: "互助土族自治县",
    location: {
      lat: 36.84412,
      lng: 101.95842,
    },
  },
  {
    id: "630224",
    fullname: "化隆回族自治县",
    location: {
      lat: 36.09493,
      lng: 102.26404,
    },
  },
  {
    id: "630225",
    fullname: "循化撒拉族自治县",
    location: {
      lat: 35.8508,
      lng: 102.4891,
    },
  },
  {
    id: "632221",
    fullname: "门源回族自治县",
    location: {
      lat: 37.38828,
      lng: 101.6117,
    },
  },
  {
    id: "632222",
    fullname: "祁连县",
    location: {
      lat: 38.17709,
      lng: 100.25305,
    },
  },
  {
    id: "632223",
    fullname: "海晏县",
    location: {
      lat: 36.897,
      lng: 100.99504,
    },
  },
  {
    id: "632224",
    fullname: "刚察县",
    location: {
      lat: 37.32162,
      lng: 100.14682,
    },
  },
  {
    id: "632301",
    fullname: "同仁市",
    location: {
      lat: 35.515979,
      lng: 102.018412,
    },
  },
  {
    id: "632322",
    fullname: "尖扎县",
    location: {
      lat: 35.93817,
      lng: 102.03102,
    },
  },
  {
    id: "632323",
    fullname: "泽库县",
    location: {
      lat: 35.03605,
      lng: 101.46594,
    },
  },
  {
    id: "632324",
    fullname: "河南蒙古族自治县",
    location: {
      lat: 34.73421,
      lng: 101.61649,
    },
  },
  {
    id: "632521",
    fullname: "共和县",
    location: {
      lat: 36.283,
      lng: 100.62012,
    },
  },
  {
    id: "632522",
    fullname: "同德县",
    location: {
      lat: 35.25386,
      lng: 100.57876,
    },
  },
  {
    id: "632523",
    fullname: "贵德县",
    location: {
      lat: 36.039197,
      lng: 101.434665,
    },
  },
  {
    id: "632524",
    fullname: "兴海县",
    location: {
      lat: 35.58868,
      lng: 99.98818,
    },
  },
  {
    id: "632525",
    fullname: "贵南县",
    location: {
      lat: 35.58765,
      lng: 100.74784,
    },
  },
  {
    id: "632621",
    fullname: "玛沁县",
    location: {
      lat: 34.47733,
      lng: 100.23956,
    },
  },
  {
    id: "632622",
    fullname: "班玛县",
    location: {
      lat: 32.93269,
      lng: 100.7374,
    },
  },
  {
    id: "632623",
    fullname: "甘德县",
    location: {
      lat: 33.96921,
      lng: 99.90075,
    },
  },
  {
    id: "632624",
    fullname: "达日县",
    location: {
      lat: 33.74924,
      lng: 99.65153,
    },
  },
  {
    id: "632625",
    fullname: "久治县",
    location: {
      lat: 33.42928,
      lng: 101.48289,
    },
  },
  {
    id: "632626",
    fullname: "玛多县",
    location: {
      lat: 34.91508,
      lng: 98.20934,
    },
  },
  {
    id: "632701",
    fullname: "玉树市",
    location: {
      lat: 32.99336,
      lng: 97.00862,
    },
  },
  {
    id: "632722",
    fullname: "杂多县",
    location: {
      lat: 32.89295,
      lng: 95.30102,
    },
  },
  {
    id: "632723",
    fullname: "称多县",
    location: {
      lat: 33.36823,
      lng: 97.10865,
    },
  },
  {
    id: "632724",
    fullname: "治多县",
    location: {
      lat: 33.8442,
      lng: 95.619,
    },
  },
  {
    id: "632725",
    fullname: "囊谦县",
    location: {
      lat: 32.20295,
      lng: 96.48063,
    },
  },
  {
    id: "632726",
    fullname: "曲麻莱县",
    location: {
      lat: 34.12639,
      lng: 95.79722,
    },
  },
  {
    id: "632801",
    fullname: "格尔木市",
    location: {
      lat: 36.4024,
      lng: 94.9033,
    },
  },
  {
    id: "632802",
    fullname: "德令哈市",
    location: {
      lat: 37.36947,
      lng: 97.36087,
    },
  },
  {
    id: "632803",
    fullname: "茫崖市",
    location: {
      lat: 38.24763,
      lng: 90.85616,
    },
  },
  {
    id: "632821",
    fullname: "乌兰县",
    location: {
      lat: 36.92975,
      lng: 98.48003,
    },
  },
  {
    id: "632822",
    fullname: "都兰县",
    location: {
      lat: 36.30386,
      lng: 98.09531,
    },
  },
  {
    id: "632823",
    fullname: "天峻县",
    location: {
      lat: 37.30096,
      lng: 99.02293,
    },
  },
  {
    id: "632825",
    fullname: "大柴旦行政委员会",
    location: {
      lat: 37.85044,
      lng: 95.3621,
    },
  },
  {
    id: "640104",
    fullname: "兴庆区",
    location: {
      lat: 38.47371,
      lng: 106.28847,
    },
  },
  {
    id: "640105",
    fullname: "西夏区",
    location: {
      lat: 38.49589,
      lng: 106.15652,
    },
  },
  {
    id: "640106",
    fullname: "金凤区",
    location: {
      lat: 38.47314,
      lng: 106.24284,
    },
  },
  {
    id: "640121",
    fullname: "永宁县",
    location: {
      lat: 38.27749,
      lng: 106.25318,
    },
  },
  {
    id: "640122",
    fullname: "贺兰县",
    location: {
      lat: 38.55443,
      lng: 106.34985,
    },
  },
  {
    id: "640181",
    fullname: "灵武市",
    location: {
      lat: 38.10269,
      lng: 106.34005,
    },
  },
  {
    id: "640202",
    fullname: "大武口区",
    location: {
      lat: 39.01895,
      lng: 106.36803,
    },
  },
  {
    id: "640205",
    fullname: "惠农区",
    location: {
      lat: 39.23909,
      lng: 106.78132,
    },
  },
  {
    id: "640221",
    fullname: "平罗县",
    location: {
      lat: 38.91335,
      lng: 106.52304,
    },
  },
  {
    id: "640302",
    fullname: "利通区",
    location: {
      lat: 37.98472,
      lng: 106.21251,
    },
  },
  {
    id: "640303",
    fullname: "红寺堡区",
    location: {
      lat: 37.42533,
      lng: 106.06243,
    },
  },
  {
    id: "640323",
    fullname: "盐池县",
    location: {
      lat: 37.78294,
      lng: 107.40789,
    },
  },
  {
    id: "640324",
    fullname: "同心县",
    location: {
      lat: 36.98064,
      lng: 105.91448,
    },
  },
  {
    id: "640381",
    fullname: "青铜峡市",
    location: {
      lat: 38.02121,
      lng: 106.07875,
    },
  },
  {
    id: "640402",
    fullname: "原州区",
    location: {
      lat: 36.00341,
      lng: 106.28779,
    },
  },
  {
    id: "640422",
    fullname: "西吉县",
    location: {
      lat: 35.96385,
      lng: 105.72911,
    },
  },
  {
    id: "640423",
    fullname: "隆德县",
    location: {
      lat: 35.61812,
      lng: 106.12332,
    },
  },
  {
    id: "640424",
    fullname: "泾源县",
    location: {
      lat: 35.49823,
      lng: 106.33067,
    },
  },
  {
    id: "640425",
    fullname: "彭阳县",
    location: {
      lat: 35.8496,
      lng: 106.63808,
    },
  },
  {
    id: "640502",
    fullname: "沙坡头区",
    location: {
      lat: 37.517006,
      lng: 105.173643,
    },
  },
  {
    id: "640521",
    fullname: "中宁县",
    location: {
      lat: 37.49157,
      lng: 105.68518,
    },
  },
  {
    id: "640522",
    fullname: "海原县",
    location: {
      lat: 36.56524,
      lng: 105.64359,
    },
  },
  {
    id: "650102",
    fullname: "天山区",
    location: {
      lat: 43.79547,
      lng: 87.63356,
    },
  },
  {
    id: "650103",
    fullname: "沙依巴克区",
    location: {
      lat: 43.80095,
      lng: 87.59811,
    },
  },
  {
    id: "650104",
    fullname: "新市区",
    location: {
      lat: 43.84367,
      lng: 87.574,
    },
  },
  {
    id: "650105",
    fullname: "水磨沟区",
    location: {
      lat: 43.832442,
      lng: 87.642495,
    },
  },
  {
    id: "650106",
    fullname: "头屯河区",
    location: {
      lat: 43.87711,
      lng: 87.42812,
    },
  },
  {
    id: "650107",
    fullname: "达坂城区",
    location: {
      lat: 43.36378,
      lng: 88.31104,
    },
  },
  {
    id: "650109",
    fullname: "米东区",
    location: {
      lat: 43.97365,
      lng: 87.65591,
    },
  },
  {
    id: "650121",
    fullname: "乌鲁木齐县",
    location: {
      lat: 43.47129,
      lng: 87.40931,
    },
  },
  {
    id: "650202",
    fullname: "独山子区",
    location: {
      lat: 44.3287,
      lng: 84.88675,
    },
  },
  {
    id: "650203",
    fullname: "克拉玛依区",
    location: {
      lat: 45.60243,
      lng: 84.86782,
    },
  },
  {
    id: "650204",
    fullname: "白碱滩区",
    location: {
      lat: 45.68734,
      lng: 85.13208,
    },
  },
  {
    id: "650205",
    fullname: "乌尔禾区",
    location: {
      lat: 46.08908,
      lng: 85.69377,
    },
  },
  {
    id: "650402",
    fullname: "高昌区",
    location: {
      lat: 42.94244,
      lng: 89.18596,
    },
  },
  {
    id: "650421",
    fullname: "鄯善县",
    location: {
      lat: 42.86887,
      lng: 90.21341,
    },
  },
  {
    id: "650422",
    fullname: "托克逊县",
    location: {
      lat: 42.79181,
      lng: 88.65384,
    },
  },
  {
    id: "650502",
    fullname: "伊州区",
    location: {
      lat: 42.82699,
      lng: 93.51465,
    },
  },
  {
    id: "650521",
    fullname: "巴里坤哈萨克自治县",
    location: {
      lat: 43.59873,
      lng: 93.01654,
    },
  },
  {
    id: "650522",
    fullname: "伊吾县",
    location: {
      lat: 43.25451,
      lng: 94.69741,
    },
  },
  {
    id: "652301",
    fullname: "昌吉市",
    location: {
      lat: 44.01437,
      lng: 87.26749,
    },
  },
  {
    id: "652302",
    fullname: "阜康市",
    location: {
      lat: 44.15706,
      lng: 87.98738,
    },
  },
  {
    id: "652323",
    fullname: "呼图壁县",
    location: {
      lat: 44.1916,
      lng: 86.89887,
    },
  },
  {
    id: "652324",
    fullname: "玛纳斯县",
    location: {
      lat: 44.30413,
      lng: 86.21421,
    },
  },
  {
    id: "652325",
    fullname: "奇台县",
    location: {
      lat: 44.02197,
      lng: 89.59399,
    },
  },
  {
    id: "652327",
    fullname: "吉木萨尔县",
    location: {
      lat: 44.00061,
      lng: 89.18076,
    },
  },
  {
    id: "652328",
    fullname: "木垒哈萨克自治县",
    location: {
      lat: 43.83464,
      lng: 90.28598,
    },
  },
  {
    id: "652701",
    fullname: "博乐市",
    location: {
      lat: 44.85387,
      lng: 82.05112,
    },
  },
  {
    id: "652702",
    fullname: "阿拉山口市",
    location: {
      lat: 45.17328,
      lng: 82.55447,
    },
  },
  {
    id: "652722",
    fullname: "精河县",
    location: {
      lat: 44.60055,
      lng: 82.89417,
    },
  },
  {
    id: "652723",
    fullname: "温泉县",
    location: {
      lat: 44.96882,
      lng: 81.02478,
    },
  },
  {
    id: "652801",
    fullname: "库尔勒市",
    location: {
      lat: 41.72643,
      lng: 86.17369,
    },
  },
  {
    id: "652822",
    fullname: "轮台县",
    location: {
      lat: 41.77763,
      lng: 84.25191,
    },
  },
  {
    id: "652823",
    fullname: "尉犁县",
    location: {
      lat: 41.34392,
      lng: 86.26075,
    },
  },
  {
    id: "652824",
    fullname: "若羌县",
    location: {
      lat: 39.02374,
      lng: 88.16728,
    },
  },
  {
    id: "652825",
    fullname: "且末县",
    location: {
      lat: 38.14538,
      lng: 85.52977,
    },
  },
  {
    id: "652826",
    fullname: "焉耆回族自治县",
    location: {
      lat: 42.0591,
      lng: 86.57425,
    },
  },
  {
    id: "652827",
    fullname: "和静县",
    location: {
      lat: 42.32266,
      lng: 86.38307,
    },
  },
  {
    id: "652828",
    fullname: "和硕县",
    location: {
      lat: 42.26817,
      lng: 86.86397,
    },
  },
  {
    id: "652829",
    fullname: "博湖县",
    location: {
      lat: 41.98009,
      lng: 86.63254,
    },
  },
  {
    id: "652901",
    fullname: "阿克苏市",
    location: {
      lat: 41.16763,
      lng: 80.26338,
    },
  },
  {
    id: "652902",
    fullname: "库车市",
    location: {
      lat: 41.717374,
      lng: 82.96211,
    },
  },
  {
    id: "652922",
    fullname: "温宿县",
    location: {
      lat: 41.27706,
      lng: 80.23914,
    },
  },
  {
    id: "652924",
    fullname: "沙雅县",
    location: {
      lat: 41.2216,
      lng: 82.78209,
    },
  },
  {
    id: "652925",
    fullname: "新和县",
    location: {
      lat: 41.54833,
      lng: 82.60912,
    },
  },
  {
    id: "652926",
    fullname: "拜城县",
    location: {
      lat: 41.79685,
      lng: 81.87347,
    },
  },
  {
    id: "652927",
    fullname: "乌什县",
    location: {
      lat: 41.21472,
      lng: 79.22457,
    },
  },
  {
    id: "652928",
    fullname: "阿瓦提县",
    location: {
      lat: 40.64451,
      lng: 80.37306,
    },
  },
  {
    id: "652929",
    fullname: "柯坪县",
    location: {
      lat: 40.50826,
      lng: 79.04681,
    },
  },
  {
    id: "653001",
    fullname: "阿图什市",
    location: {
      lat: 39.7161,
      lng: 76.16839,
    },
  },
  {
    id: "653022",
    fullname: "阿克陶县",
    location: {
      lat: 39.14786,
      lng: 75.9474,
    },
  },
  {
    id: "653023",
    fullname: "阿合奇县",
    location: {
      lat: 40.93704,
      lng: 78.44626,
    },
  },
  {
    id: "653024",
    fullname: "乌恰县",
    location: {
      lat: 39.71909,
      lng: 75.25841,
    },
  },
  {
    id: "653101",
    fullname: "喀什市",
    location: {
      lat: 39.46772,
      lng: 75.99381,
    },
  },
  {
    id: "653121",
    fullname: "疏附县",
    location: {
      lat: 39.37516,
      lng: 75.86296,
    },
  },
  {
    id: "653122",
    fullname: "疏勒县",
    location: {
      lat: 39.40134,
      lng: 76.04797,
    },
  },
  {
    id: "653123",
    fullname: "英吉沙县",
    location: {
      lat: 38.92956,
      lng: 76.17561,
    },
  },
  {
    id: "653124",
    fullname: "泽普县",
    location: {
      lat: 38.19174,
      lng: 77.27095,
    },
  },
  {
    id: "653125",
    fullname: "莎车县",
    location: {
      lat: 38.41432,
      lng: 77.24629,
    },
  },
  {
    id: "653126",
    fullname: "叶城县",
    location: {
      lat: 37.88299,
      lng: 77.41367,
    },
  },
  {
    id: "653127",
    fullname: "麦盖提县",
    location: {
      lat: 38.90493,
      lng: 77.65273,
    },
  },
  {
    id: "653128",
    fullname: "岳普湖县",
    location: {
      lat: 39.2333,
      lng: 76.77796,
    },
  },
  {
    id: "653129",
    fullname: "伽师县",
    location: {
      lat: 39.48806,
      lng: 76.72379,
    },
  },
  {
    id: "653130",
    fullname: "巴楚县",
    location: {
      lat: 39.78519,
      lng: 78.54906,
    },
  },
  {
    id: "653131",
    fullname: "塔什库尔干塔吉克自治县",
    location: {
      lat: 37.772963,
      lng: 75.224661,
    },
  },
  {
    id: "653201",
    fullname: "和田市",
    location: {
      lat: 37.11178,
      lng: 79.91321,
    },
  },
  {
    id: "653221",
    fullname: "和田县",
    location: {
      lat: 36.57246,
      lng: 79.90141,
    },
  },
  {
    id: "653222",
    fullname: "墨玉县",
    location: {
      lat: 37.2772,
      lng: 79.72895,
    },
  },
  {
    id: "653223",
    fullname: "皮山县",
    location: {
      lat: 37.62139,
      lng: 78.283,
    },
  },
  {
    id: "653224",
    fullname: "洛浦县",
    location: {
      lat: 37.0737,
      lng: 80.18889,
    },
  },
  {
    id: "653225",
    fullname: "策勒县",
    location: {
      lat: 36.99846,
      lng: 80.81005,
    },
  },
  {
    id: "653226",
    fullname: "于田县",
    location: {
      lat: 36.85728,
      lng: 81.67712,
    },
  },
  {
    id: "653227",
    fullname: "民丰县",
    location: {
      lat: 37.06419,
      lng: 82.69595,
    },
  },
  {
    id: "654002",
    fullname: "伊宁市",
    location: {
      lat: 43.9095,
      lng: 81.27725,
    },
  },
  {
    id: "654003",
    fullname: "奎屯市",
    location: {
      lat: 44.42689,
      lng: 84.90167,
    },
  },
  {
    id: "654004",
    fullname: "霍尔果斯市",
    location: {
      lat: 44.198654,
      lng: 80.413168,
    },
  },
  {
    id: "654021",
    fullname: "伊宁县",
    location: {
      lat: 43.97715,
      lng: 81.52732,
    },
  },
  {
    id: "654022",
    fullname: "察布查尔锡伯自治县",
    location: {
      lat: 43.84072,
      lng: 81.15128,
    },
  },
  {
    id: "654023",
    fullname: "霍城县",
    location: {
      lat: 44.05599,
      lng: 80.87899,
    },
  },
  {
    id: "654024",
    fullname: "巩留县",
    location: {
      lat: 43.48257,
      lng: 82.23175,
    },
  },
  {
    id: "654025",
    fullname: "新源县",
    location: {
      lat: 43.42988,
      lng: 83.26157,
    },
  },
  {
    id: "654026",
    fullname: "昭苏县",
    location: {
      lat: 43.15724,
      lng: 81.13102,
    },
  },
  {
    id: "654027",
    fullname: "特克斯县",
    location: {
      lat: 43.21799,
      lng: 81.83603,
    },
  },
  {
    id: "654028",
    fullname: "尼勒克县",
    location: {
      lat: 43.79904,
      lng: 82.5119,
    },
  },
  {
    id: "654201",
    fullname: "塔城市",
    location: {
      lat: 46.75145,
      lng: 82.98703,
    },
  },
  {
    id: "654202",
    fullname: "乌苏市",
    location: {
      lat: 44.43556,
      lng: 84.67851,
    },
  },
  {
    id: "654221",
    fullname: "额敏县",
    location: {
      lat: 46.52457,
      lng: 83.62822,
    },
  },
  {
    id: "654223",
    fullname: "沙湾县",
    location: {
      lat: 44.32628,
      lng: 85.61959,
    },
  },
  {
    id: "654224",
    fullname: "托里县",
    location: {
      lat: 45.93677,
      lng: 83.60621,
    },
  },
  {
    id: "654225",
    fullname: "裕民县",
    location: {
      lat: 46.20109,
      lng: 82.98277,
    },
  },
  {
    id: "654226",
    fullname: "和布克赛尔蒙古自治县",
    location: {
      lat: 46.79302,
      lng: 85.72856,
    },
  },
  {
    id: "654301",
    fullname: "阿勒泰市",
    location: {
      lat: 47.827,
      lng: 88.13243,
    },
  },
  {
    id: "654321",
    fullname: "布尔津县",
    location: {
      lat: 47.69989,
      lng: 86.86313,
    },
  },
  {
    id: "654322",
    fullname: "富蕴县",
    location: {
      lat: 46.99362,
      lng: 89.52553,
    },
  },
  {
    id: "654323",
    fullname: "福海县",
    location: {
      lat: 47.112434,
      lng: 87.486828,
    },
  },
  {
    id: "654324",
    fullname: "哈巴河县",
    location: {
      lat: 48.06069,
      lng: 86.4192,
    },
  },
  {
    id: "654325",
    fullname: "青河县",
    location: {
      lat: 46.67911,
      lng: 90.37558,
    },
  },
  {
    id: "654326",
    fullname: "吉木乃县",
    location: {
      lat: 47.4431,
      lng: 85.8754,
    },
  },
  {
    id: "710101",
    fullname: "中正区",
    location: {
      lat: 25.030724,
      lng: 121.520076,
    },
  },
  {
    id: "710102",
    fullname: "大同区",
    location: {
      lat: 25.062729,
      lng: 121.513929,
    },
  },
  {
    id: "710103",
    fullname: "中山区",
    location: {
      lat: 25.074708,
      lng: 121.541766,
    },
  },
  {
    id: "710104",
    fullname: "松山区",
    location: {
      lat: 25.058947,
      lng: 121.556668,
    },
  },
  {
    id: "710105",
    fullname: "大安区",
    location: {
      lat: 25.02342,
      lng: 121.546488,
    },
  },
  {
    id: "710106",
    fullname: "万华区",
    location: {
      lat: 25.029934,
      lng: 121.499065,
    },
  },
  {
    id: "710107",
    fullname: "信义区",
    location: {
      lat: 25.029722,
      lng: 121.57615,
    },
  },
  {
    id: "710108",
    fullname: "士林区",
    location: {
      lat: 25.127593,
      lng: 121.544463,
    },
  },
  {
    id: "710109",
    fullname: "北投区",
    location: {
      lat: 25.149108,
      lng: 121.527823,
    },
  },
  {
    id: "710110",
    fullname: "内湖区",
    location: {
      lat: 25.086036,
      lng: 121.586513,
    },
  },
  {
    id: "710111",
    fullname: "南港区",
    location: {
      lat: 25.032505,
      lng: 121.618159,
    },
  },
  {
    id: "710112",
    fullname: "文山区",
    location: {
      lat: 24.989886,
      lng: 121.572895,
    },
  },
  {
    id: "710201",
    fullname: "新兴区",
    location: {
      lat: 22.630576,
      lng: 120.306839,
    },
  },
  {
    id: "710202",
    fullname: "前金区",
    location: {
      lat: 22.626419,
      lng: 120.29352,
    },
  },
  {
    id: "710203",
    fullname: "苓雅区",
    location: {
      lat: 22.624018,
      lng: 120.323055,
    },
  },
  {
    id: "710204",
    fullname: "盐埕区",
    location: {
      lat: 22.625608,
      lng: 120.284019,
    },
  },
  {
    id: "710205",
    fullname: "鼓山区",
    location: {
      lat: 22.651802,
      lng: 120.275308,
    },
  },
  {
    id: "710206",
    fullname: "旗津区",
    location: {
      lat: 22.590551,
      lng: 120.28319,
    },
  },
  {
    id: "710207",
    fullname: "前镇区",
    location: {
      lat: 22.590477,
      lng: 120.30908,
    },
  },
  {
    id: "710208",
    fullname: "三民区",
    location: {
      lat: 22.659461,
      lng: 120.320886,
    },
  },
  {
    id: "710209",
    fullname: "左营区",
    location: {
      lat: 22.679064,
      lng: 120.292762,
    },
  },
  {
    id: "710210",
    fullname: "楠梓区",
    location: {
      lat: 22.725733,
      lng: 120.310229,
    },
  },
  {
    id: "710211",
    fullname: "小港区",
    location: {
      lat: 22.557236,
      lng: 120.372584,
    },
  },
  {
    id: "710242",
    fullname: "仁武区",
    location: {
      lat: 22.703543,
      lng: 120.362577,
    },
  },
  {
    id: "710243",
    fullname: "大社区",
    location: {
      lat: 22.740867,
      lng: 120.372757,
    },
  },
  {
    id: "710244",
    fullname: "冈山区",
    location: {
      lat: 22.806182,
      lng: 120.303629,
    },
  },
  {
    id: "710245",
    fullname: "路竹区",
    location: {
      lat: 22.860436,
      lng: 120.267619,
    },
  },
  {
    id: "710246",
    fullname: "阿莲区",
    location: {
      lat: 22.86883,
      lng: 120.322131,
    },
  },
  {
    id: "710247",
    fullname: "田寮区",
    location: {
      lat: 22.866882,
      lng: 120.393786,
    },
  },
  {
    id: "710248",
    fullname: "燕巢区",
    location: {
      lat: 22.789829,
      lng: 120.370649,
    },
  },
  {
    id: "710249",
    fullname: "桥头区",
    location: {
      lat: 22.752137,
      lng: 120.302457,
    },
  },
  {
    id: "710250",
    fullname: "梓官区",
    location: {
      lat: 22.750905,
      lng: 120.258816,
    },
  },
  {
    id: "710251",
    fullname: "弥陀区",
    location: {
      lat: 22.774889,
      lng: 120.241537,
    },
  },
  {
    id: "710252",
    fullname: "永安区",
    location: {
      lat: 22.818831,
      lng: 120.23625,
    },
  },
  {
    id: "710253",
    fullname: "湖内区",
    location: {
      lat: 22.890794,
      lng: 120.227965,
    },
  },
  {
    id: "710254",
    fullname: "凤山区",
    location: {
      lat: 22.612329,
      lng: 120.354678,
    },
  },
  {
    id: "710255",
    fullname: "大寮区",
    location: {
      lat: 22.587938,
      lng: 120.395256,
    },
  },
  {
    id: "710256",
    fullname: "林园区",
    location: {
      lat: 22.512878,
      lng: 120.389128,
    },
  },
  {
    id: "710257",
    fullname: "鸟松区",
    location: {
      lat: 22.665303,
      lng: 120.373331,
    },
  },
  {
    id: "710258",
    fullname: "大树区",
    location: {
      lat: 22.710723,
      lng: 120.413317,
    },
  },
  {
    id: "710259",
    fullname: "旗山区",
    location: {
      lat: 22.89424,
      lng: 120.480903,
    },
  },
  {
    id: "710260",
    fullname: "美浓区",
    location: {
      lat: 22.928206,
      lng: 120.567456,
    },
  },
  {
    id: "710261",
    fullname: "六龟区",
    location: {
      lat: 23.045112,
      lng: 120.681851,
    },
  },
  {
    id: "710262",
    fullname: "内门区",
    location: {
      lat: 22.943102,
      lng: 120.471968,
    },
  },
  {
    id: "710263",
    fullname: "杉林区",
    location: {
      lat: 22.981053,
      lng: 120.559946,
    },
  },
  {
    id: "710264",
    fullname: "甲仙区",
    location: {
      lat: 23.112013,
      lng: 120.62032,
    },
  },
  {
    id: "710265",
    fullname: "桃源区",
    location: {
      lat: 23.16742,
      lng: 120.795438,
    },
  },
  {
    id: "710266",
    fullname: "那玛夏区",
    location: {
      lat: 23.273861,
      lng: 120.719575,
    },
  },
  {
    id: "710267",
    fullname: "茂林区",
    location: {
      lat: 22.911252,
      lng: 120.762767,
    },
  },
  {
    id: "710268",
    fullname: "茄萣区",
    location: {
      lat: 22.887749,
      lng: 120.196894,
    },
  },
  {
    id: "710301",
    fullname: "中西区",
    location: {
      lat: 22.998601,
      lng: 120.187817,
    },
  },
  {
    id: "710302",
    fullname: "东区",
    location: {
      lat: 22.981432,
      lng: 120.233654,
    },
  },
  {
    id: "710303",
    fullname: "南区",
    location: {
      lat: 22.946994,
      lng: 120.188194,
    },
  },
  {
    id: "710304",
    fullname: "北区",
    location: {
      lat: 23.009417,
      lng: 120.209679,
    },
  },
  {
    id: "710305",
    fullname: "安平区",
    location: {
      lat: 22.987857,
      lng: 120.16196,
    },
  },
  {
    id: "710306",
    fullname: "安南区",
    location: {
      lat: 23.049676,
      lng: 120.171462,
    },
  },
  {
    id: "710339",
    fullname: "永康区",
    location: {
      lat: 23.026495,
      lng: 120.253007,
    },
  },
  {
    id: "710340",
    fullname: "归仁区",
    location: {
      lat: 22.948413,
      lng: 120.295251,
    },
  },
  {
    id: "710341",
    fullname: "新化区",
    location: {
      lat: 23.036425,
      lng: 120.343611,
    },
  },
  {
    id: "710342",
    fullname: "左镇区",
    location: {
      lat: 23.033172,
      lng: 120.408262,
    },
  },
  {
    id: "710343",
    fullname: "玉井区",
    location: {
      lat: 23.122051,
      lng: 120.45423,
    },
  },
  {
    id: "710344",
    fullname: "楠西区",
    location: {
      lat: 23.172157,
      lng: 120.501465,
    },
  },
  {
    id: "710345",
    fullname: "南化区",
    location: {
      lat: 23.109827,
      lng: 120.532575,
    },
  },
  {
    id: "710346",
    fullname: "仁德区",
    location: {
      lat: 22.942045,
      lng: 120.248309,
    },
  },
  {
    id: "710347",
    fullname: "关庙区",
    location: {
      lat: 22.949032,
      lng: 120.339688,
    },
  },
  {
    id: "710348",
    fullname: "龙崎区",
    location: {
      lat: 22.956225,
      lng: 120.382468,
    },
  },
  {
    id: "710349",
    fullname: "官田区",
    location: {
      lat: 23.193342,
      lng: 120.35862,
    },
  },
  {
    id: "710350",
    fullname: "麻豆区",
    location: {
      lat: 23.186543,
      lng: 120.239562,
    },
  },
  {
    id: "710351",
    fullname: "佳里区",
    location: {
      lat: 23.1678,
      lng: 120.173454,
    },
  },
  {
    id: "710352",
    fullname: "西港区",
    location: {
      lat: 23.12515,
      lng: 120.201599,
    },
  },
  {
    id: "710353",
    fullname: "七股区",
    location: {
      lat: 23.145117,
      lng: 120.124612,
    },
  },
  {
    id: "710354",
    fullname: "将军区",
    location: {
      lat: 23.204576,
      lng: 120.127949,
    },
  },
  {
    id: "710355",
    fullname: "学甲区",
    location: {
      lat: 23.257636,
      lng: 120.184662,
    },
  },
  {
    id: "710356",
    fullname: "北门区",
    location: {
      lat: 23.279846,
      lng: 120.132727,
    },
  },
  {
    id: "710357",
    fullname: "新营区",
    location: {
      lat: 23.314666,
      lng: 120.292661,
    },
  },
  {
    id: "710358",
    fullname: "后壁区",
    location: {
      lat: 23.362476,
      lng: 120.345417,
    },
  },
  {
    id: "710359",
    fullname: "白河区",
    location: {
      lat: 23.349607,
      lng: 120.467307,
    },
  },
  {
    id: "710360",
    fullname: "东山区",
    location: {
      lat: 23.278461,
      lng: 120.446302,
    },
  },
  {
    id: "710361",
    fullname: "六甲区",
    location: {
      lat: 23.228525,
      lng: 120.376266,
    },
  },
  {
    id: "710362",
    fullname: "下营区",
    location: {
      lat: 23.233069,
      lng: 120.276062,
    },
  },
  {
    id: "710363",
    fullname: "柳营区",
    location: {
      lat: 23.258226,
      lng: 120.370182,
    },
  },
  {
    id: "710364",
    fullname: "盐水区",
    location: {
      lat: 23.304858,
      lng: 120.25491,
    },
  },
  {
    id: "710365",
    fullname: "善化区",
    location: {
      lat: 23.126557,
      lng: 120.292967,
    },
  },
  {
    id: "710366",
    fullname: "大内区",
    location: {
      lat: 23.136649,
      lng: 120.412236,
    },
  },
  {
    id: "710367",
    fullname: "山上区",
    location: {
      lat: 23.094024,
      lng: 120.374636,
    },
  },
  {
    id: "710368",
    fullname: "新市区",
    location: {
      lat: 23.082989,
      lng: 120.295171,
    },
  },
  {
    id: "710369",
    fullname: "安定区",
    location: {
      lat: 23.095684,
      lng: 120.234855,
    },
  },
  {
    id: "710401",
    fullname: "中区",
    location: {
      lat: 24.143171,
      lng: 120.679882,
    },
  },
  {
    id: "710402",
    fullname: "东区",
    location: {
      lat: 24.138753,
      lng: 120.69765,
    },
  },
  {
    id: "710403",
    fullname: "南区",
    location: {
      lat: 24.116054,
      lng: 120.665446,
    },
  },
  {
    id: "710404",
    fullname: "西区",
    location: {
      lat: 24.149559,
      lng: 120.667031,
    },
  },
  {
    id: "710405",
    fullname: "北区",
    location: {
      lat: 24.156085,
      lng: 120.681767,
    },
  },
  {
    id: "710406",
    fullname: "北屯区",
    location: {
      lat: 24.188236,
      lng: 120.725415,
    },
  },
  {
    id: "710407",
    fullname: "西屯区",
    location: {
      lat: 24.190929,
      lng: 120.636254,
    },
  },
  {
    id: "710408",
    fullname: "南屯区",
    location: {
      lat: 24.140259,
      lng: 120.616002,
    },
  },
  {
    id: "710431",
    fullname: "太平区",
    location: {
      lat: 24.106428,
      lng: 120.777203,
    },
  },
  {
    id: "710432",
    fullname: "大里区",
    location: {
      lat: 24.09987,
      lng: 120.693657,
    },
  },
  {
    id: "710433",
    fullname: "雾峰区",
    location: {
      lat: 24.047083,
      lng: 120.723791,
    },
  },
  {
    id: "710434",
    fullname: "乌日区",
    location: {
      lat: 24.080973,
      lng: 120.641699,
    },
  },
  {
    id: "710435",
    fullname: "丰原区",
    location: {
      lat: 24.243819,
      lng: 120.734314,
    },
  },
  {
    id: "710436",
    fullname: "后里区",
    location: {
      lat: 24.31981,
      lng: 120.726206,
    },
  },
  {
    id: "710437",
    fullname: "石冈区",
    location: {
      lat: 24.258623,
      lng: 120.789413,
    },
  },
  {
    id: "710438",
    fullname: "东势区",
    location: {
      lat: 24.259322,
      lng: 120.836671,
    },
  },
  {
    id: "710439",
    fullname: "和平区",
    location: {
      lat: 24.249379,
      lng: 121.095656,
    },
  },
  {
    id: "710440",
    fullname: "新社区",
    location: {
      lat: 24.184372,
      lng: 120.827267,
    },
  },
  {
    id: "710441",
    fullname: "潭子区",
    location: {
      lat: 24.211784,
      lng: 120.709288,
    },
  },
  {
    id: "710442",
    fullname: "大雅区",
    location: {
      lat: 24.225153,
      lng: 120.650078,
    },
  },
  {
    id: "710443",
    fullname: "神冈区",
    location: {
      lat: 24.254251,
      lng: 120.679992,
    },
  },
  {
    id: "710444",
    fullname: "大肚区",
    location: {
      lat: 24.147926,
      lng: 120.561819,
    },
  },
  {
    id: "710445",
    fullname: "沙鹿区",
    location: {
      lat: 24.229818,
      lng: 120.584346,
    },
  },
  {
    id: "710446",
    fullname: "龙井区",
    location: {
      lat: 24.200672,
      lng: 120.530022,
    },
  },
  {
    id: "710447",
    fullname: "梧栖区",
    location: {
      lat: 24.246571,
      lng: 120.524331,
    },
  },
  {
    id: "710448",
    fullname: "清水区",
    location: {
      lat: 24.300978,
      lng: 120.574911,
    },
  },
  {
    id: "710449",
    fullname: "大甲区",
    location: {
      lat: 24.374519,
      lng: 120.628102,
    },
  },
  {
    id: "710450",
    fullname: "外埔区",
    location: {
      lat: 24.334586,
      lng: 120.684158,
    },
  },
  {
    id: "710451",
    fullname: "大安区",
    location: {
      lat: 24.358855,
      lng: 120.591287,
    },
  },
  {
    id: "710614",
    fullname: "南投市",
    location: {
      lat: 23.919619,
      lng: 120.670008,
    },
  },
  {
    id: "710615",
    fullname: "中寮乡",
    location: {
      lat: 23.928176,
      lng: 120.742189,
    },
  },
  {
    id: "710616",
    fullname: "草屯镇",
    location: {
      lat: 23.983402,
      lng: 120.744932,
    },
  },
  {
    id: "710617",
    fullname: "国姓乡",
    location: {
      lat: 24.063789,
      lng: 120.848242,
    },
  },
  {
    id: "710618",
    fullname: "埔里镇",
    location: {
      lat: 23.96992,
      lng: 120.962669,
    },
  },
  {
    id: "710619",
    fullname: "仁爱乡",
    location: {
      lat: 24.104215,
      lng: 121.145366,
    },
  },
  {
    id: "710620",
    fullname: "名间乡",
    location: {
      lat: 23.847933,
      lng: 120.648523,
    },
  },
  {
    id: "710621",
    fullname: "集集镇",
    location: {
      lat: 23.837607,
      lng: 120.74978,
    },
  },
  {
    id: "710622",
    fullname: "水里乡",
    location: {
      lat: 23.799657,
      lng: 120.879628,
    },
  },
  {
    id: "710623",
    fullname: "鱼池乡",
    location: {
      lat: 23.895656,
      lng: 120.935361,
    },
  },
  {
    id: "710624",
    fullname: "信义乡",
    location: {
      lat: 23.602797,
      lng: 121.036224,
    },
  },
  {
    id: "710625",
    fullname: "竹山镇",
    location: {
      lat: 23.716798,
      lng: 120.717687,
    },
  },
  {
    id: "710626",
    fullname: "鹿谷乡",
    location: {
      lat: 23.727532,
      lng: 120.749945,
    },
  },
  {
    id: "710701",
    fullname: "仁爱区",
    location: {
      lat: 25.122105,
      lng: 121.741526,
    },
  },
  {
    id: "710702",
    fullname: "信义区",
    location: {
      lat: 25.122481,
      lng: 121.772292,
    },
  },
  {
    id: "710703",
    fullname: "中正区",
    location: {
      lat: 25.140903,
      lng: 121.783825,
    },
  },
  {
    id: "710704",
    fullname: "中山区",
    location: {
      lat: 25.148608,
      lng: 121.72943,
    },
  },
  {
    id: "710705",
    fullname: "安乐区",
    location: {
      lat: 25.14401,
      lng: 121.710078,
    },
  },
  {
    id: "710706",
    fullname: "暖暖区",
    location: {
      lat: 25.081103,
      lng: 121.745793,
    },
  },
  {
    id: "710707",
    fullname: "七堵区",
    location: {
      lat: 25.114398,
      lng: 121.681917,
    },
  },
  {
    id: "710801",
    fullname: "东区",
    location: {
      lat: 24.784924,
      lng: 120.990745,
    },
  },
  {
    id: "710802",
    fullname: "北区",
    location: {
      lat: 24.81327,
      lng: 120.952767,
    },
  },
  {
    id: "710803",
    fullname: "香山区",
    location: {
      lat: 24.764465,
      lng: 120.92949,
    },
  },
  {
    id: "710901",
    fullname: "东区",
    location: {
      lat: 23.485079,
      lng: 120.472462,
    },
  },
  {
    id: "710902",
    fullname: "西区",
    location: {
      lat: 23.47703,
      lng: 120.420075,
    },
  },
  {
    id: "711130",
    fullname: "万里区",
    location: {
      lat: 25.1853,
      lng: 121.663675,
    },
  },
  {
    id: "711131",
    fullname: "金山区",
    location: {
      lat: 25.223717,
      lng: 121.614289,
    },
  },
  {
    id: "711132",
    fullname: "板桥区",
    location: {
      lat: 24.999607,
      lng: 121.455052,
    },
  },
  {
    id: "711133",
    fullname: "汐止区",
    location: {
      lat: 25.068505,
      lng: 121.656665,
    },
  },
  {
    id: "711134",
    fullname: "深坑区",
    location: {
      lat: 25.00095,
      lng: 121.625318,
    },
  },
  {
    id: "711135",
    fullname: "石碇区",
    location: {
      lat: 24.962729,
      lng: 121.653655,
    },
  },
  {
    id: "711136",
    fullname: "瑞芳区",
    location: {
      lat: 25.10211,
      lng: 121.834401,
    },
  },
  {
    id: "711137",
    fullname: "平溪区",
    location: {
      lat: 25.016051,
      lng: 121.755539,
    },
  },
  {
    id: "711138",
    fullname: "双溪区",
    location: {
      lat: 24.996236,
      lng: 121.833182,
    },
  },
  {
    id: "711139",
    fullname: "贡寮区",
    location: {
      lat: 25.034199,
      lng: 121.92195,
    },
  },
  {
    id: "711140",
    fullname: "新店区",
    location: {
      lat: 24.937332,
      lng: 121.53035,
    },
  },
  {
    id: "711141",
    fullname: "坪林区",
    location: {
      lat: 24.927015,
      lng: 121.732708,
    },
  },
  {
    id: "711142",
    fullname: "乌来区",
    location: {
      lat: 24.783855,
      lng: 121.561115,
    },
  },
  {
    id: "711143",
    fullname: "永和区",
    location: {
      lat: 25.004642,
      lng: 121.513366,
    },
  },
  {
    id: "711144",
    fullname: "中和区",
    location: {
      lat: 24.987857,
      lng: 121.49308,
    },
  },
  {
    id: "711145",
    fullname: "土城区",
    location: {
      lat: 24.970764,
      lng: 121.454294,
    },
  },
  {
    id: "711146",
    fullname: "三峡区",
    location: {
      lat: 24.879017,
      lng: 121.407935,
    },
  },
  {
    id: "711147",
    fullname: "树林区",
    location: {
      lat: 24.988016,
      lng: 121.403688,
    },
  },
  {
    id: "711148",
    fullname: "莺歌区",
    location: {
      lat: 24.961511,
      lng: 121.341283,
    },
  },
  {
    id: "711149",
    fullname: "三重区",
    location: {
      lat: 25.064589,
      lng: 121.480337,
    },
  },
  {
    id: "711150",
    fullname: "新庄区",
    location: {
      lat: 25.033839,
      lng: 121.426902,
    },
  },
  {
    id: "711151",
    fullname: "泰山区",
    location: {
      lat: 25.059365,
      lng: 121.40782,
    },
  },
  {
    id: "711152",
    fullname: "林口区",
    location: {
      lat: 25.089143,
      lng: 121.382679,
    },
  },
  {
    id: "711153",
    fullname: "芦洲区",
    location: {
      lat: 25.085529,
      lng: 121.470634,
    },
  },
  {
    id: "711154",
    fullname: "五股区",
    location: {
      lat: 25.092216,
      lng: 121.425299,
    },
  },
  {
    id: "711155",
    fullname: "八里区",
    location: {
      lat: 25.112227,
      lng: 121.399739,
    },
  },
  {
    id: "711156",
    fullname: "淡水区",
    location: {
      lat: 25.198046,
      lng: 121.473666,
    },
  },
  {
    id: "711157",
    fullname: "三芝区",
    location: {
      lat: 25.237511,
      lng: 121.513036,
    },
  },
  {
    id: "711158",
    fullname: "石门区",
    location: {
      lat: 25.265218,
      lng: 121.555197,
    },
  },
  {
    id: "711214",
    fullname: "宜兰市",
    location: {
      lat: 24.759707,
      lng: 121.754442,
    },
  },
  {
    id: "711215",
    fullname: "头城镇",
    location: {
      lat: 24.911283,
      lng: 121.85085,
    },
  },
  {
    id: "711216",
    fullname: "礁溪乡",
    location: {
      lat: 24.808073,
      lng: 121.735693,
    },
  },
  {
    id: "711217",
    fullname: "壮围乡",
    location: {
      lat: 24.762833,
      lng: 121.799495,
    },
  },
  {
    id: "711218",
    fullname: "员山乡",
    location: {
      lat: 24.741324,
      lng: 121.662736,
    },
  },
  {
    id: "711219",
    fullname: "罗东镇",
    location: {
      lat: 24.678357,
      lng: 121.771539,
    },
  },
  {
    id: "711220",
    fullname: "三星乡",
    location: {
      lat: 24.663964,
      lng: 121.670054,
    },
  },
  {
    id: "711221",
    fullname: "大同乡",
    location: {
      lat: 24.563188,
      lng: 121.535637,
    },
  },
  {
    id: "711222",
    fullname: "五结乡",
    location: {
      lat: 24.68218,
      lng: 121.794432,
    },
  },
  {
    id: "711223",
    fullname: "冬山乡",
    location: {
      lat: 24.644049,
      lng: 121.753372,
    },
  },
  {
    id: "711224",
    fullname: "苏澳镇",
    location: {
      lat: 24.550648,
      lng: 121.835877,
    },
  },
  {
    id: "711225",
    fullname: "南澳乡",
    location: {
      lat: 24.461727,
      lng: 121.668148,
    },
  },
  {
    id: "711314",
    fullname: "竹北市",
    location: {
      lat: 24.839233,
      lng: 121.002012,
    },
  },
  {
    id: "711315",
    fullname: "湖口乡",
    location: {
      lat: 24.88866,
      lng: 121.06023,
    },
  },
  {
    id: "711316",
    fullname: "新丰乡",
    location: {
      lat: 24.904706,
      lng: 120.99771,
    },
  },
  {
    id: "711317",
    fullname: "新埔镇",
    location: {
      lat: 24.847222,
      lng: 121.105699,
    },
  },
  {
    id: "711318",
    fullname: "关西镇",
    location: {
      lat: 24.787338,
      lng: 121.178544,
    },
  },
  {
    id: "711319",
    fullname: "芎林乡",
    location: {
      lat: 24.76821,
      lng: 121.110301,
    },
  },
  {
    id: "711320",
    fullname: "宝山乡",
    location: {
      lat: 24.730908,
      lng: 120.998303,
    },
  },
  {
    id: "711321",
    fullname: "竹东镇",
    location: {
      lat: 24.736347,
      lng: 121.086714,
    },
  },
  {
    id: "711322",
    fullname: "五峰乡",
    location: {
      lat: 24.589114,
      lng: 121.145552,
    },
  },
  {
    id: "711323",
    fullname: "横山乡",
    location: {
      lat: 24.721278,
      lng: 121.157317,
    },
  },
  {
    id: "711324",
    fullname: "尖石乡",
    location: {
      lat: 24.581626,
      lng: 121.289331,
    },
  },
  {
    id: "711325",
    fullname: "北埔乡",
    location: {
      lat: 24.689326,
      lng: 121.062095,
    },
  },
  {
    id: "711326",
    fullname: "峨眉乡",
    location: {
      lat: 24.684883,
      lng: 121.001203,
    },
  },
  {
    id: "711414",
    fullname: "中坜区",
    location: {
      lat: 24.982757,
      lng: 121.213608,
    },
  },
  {
    id: "711415",
    fullname: "平镇区",
    location: {
      lat: 24.910699,
      lng: 121.217841,
    },
  },
  {
    id: "711416",
    fullname: "龙潭区",
    location: {
      lat: 24.864207,
      lng: 121.212691,
    },
  },
  {
    id: "711417",
    fullname: "杨梅区",
    location: {
      lat: 24.909366,
      lng: 121.130892,
    },
  },
  {
    id: "711418",
    fullname: "新屋区",
    location: {
      lat: 24.966086,
      lng: 121.061545,
    },
  },
  {
    id: "711419",
    fullname: "观音区",
    location: {
      lat: 25.019145,
      lng: 121.104048,
    },
  },
  {
    id: "711420",
    fullname: "桃园区",
    location: {
      lat: 24.997058,
      lng: 121.297711,
    },
  },
  {
    id: "711421",
    fullname: "龟山区",
    location: {
      lat: 25.027942,
      lng: 121.361175,
    },
  },
  {
    id: "711422",
    fullname: "八德区",
    location: {
      lat: 24.95089,
      lng: 121.286616,
    },
  },
  {
    id: "711423",
    fullname: "大溪区",
    location: {
      lat: 24.871416,
      lng: 121.297957,
    },
  },
  {
    id: "711424",
    fullname: "复兴区",
    location: {
      lat: 24.735521,
      lng: 121.373347,
    },
  },
  {
    id: "711425",
    fullname: "大园区",
    location: {
      lat: 25.050502,
      lng: 121.21119,
    },
  },
  {
    id: "711426",
    fullname: "芦竹区",
    location: {
      lat: 25.048653,
      lng: 121.28868,
    },
  },
  {
    id: "711519",
    fullname: "竹南镇",
    location: {
      lat: 24.696762,
      lng: 120.884337,
    },
  },
  {
    id: "711520",
    fullname: "头份市",
    location: {
      lat: 24.678692,
      lng: 120.925835,
    },
  },
  {
    id: "711521",
    fullname: "三湾乡",
    location: {
      lat: 24.632785,
      lng: 120.950962,
    },
  },
  {
    id: "711522",
    fullname: "南庄乡",
    location: {
      lat: 24.575053,
      lng: 120.995915,
    },
  },
  {
    id: "711523",
    fullname: "狮潭乡",
    location: {
      lat: 24.526451,
      lng: 120.924787,
    },
  },
  {
    id: "711524",
    fullname: "后龙镇",
    location: {
      lat: 24.603021,
      lng: 120.780127,
    },
  },
  {
    id: "711525",
    fullname: "通霄镇",
    location: {
      lat: 24.480949,
      lng: 120.723303,
    },
  },
  {
    id: "711526",
    fullname: "苑里镇",
    location: {
      lat: 24.412997,
      lng: 120.692407,
    },
  },
  {
    id: "711527",
    fullname: "苗栗市",
    location: {
      lat: 24.557396,
      lng: 120.801966,
    },
  },
  {
    id: "711528",
    fullname: "造桥乡",
    location: {
      lat: 24.61758,
      lng: 120.883509,
    },
  },
  {
    id: "711529",
    fullname: "头屋乡",
    location: {
      lat: 24.575174,
      lng: 120.882319,
    },
  },
  {
    id: "711530",
    fullname: "公馆乡",
    location: {
      lat: 24.503553,
      lng: 120.856771,
    },
  },
  {
    id: "711531",
    fullname: "大湖乡",
    location: {
      lat: 24.383789,
      lng: 120.846625,
    },
  },
  {
    id: "711532",
    fullname: "泰安乡",
    location: {
      lat: 24.393079,
      lng: 121.04939,
    },
  },
  {
    id: "711533",
    fullname: "铜锣乡",
    location: {
      lat: 24.456059,
      lng: 120.79846,
    },
  },
  {
    id: "711534",
    fullname: "三义乡",
    location: {
      lat: 24.375763,
      lng: 120.770133,
    },
  },
  {
    id: "711535",
    fullname: "西湖乡",
    location: {
      lat: 24.537724,
      lng: 120.760893,
    },
  },
  {
    id: "711536",
    fullname: "卓兰镇",
    location: {
      lat: 24.327224,
      lng: 120.835515,
    },
  },
  {
    id: "711727",
    fullname: "彰化市",
    location: {
      lat: 24.068523,
      lng: 120.557479,
    },
  },
  {
    id: "711728",
    fullname: "芬园乡",
    location: {
      lat: 23.998008,
      lng: 120.62741,
    },
  },
  {
    id: "711729",
    fullname: "花坛乡",
    location: {
      lat: 24.033045,
      lng: 120.562361,
    },
  },
  {
    id: "711730",
    fullname: "秀水乡",
    location: {
      lat: 24.028262,
      lng: 120.504495,
    },
  },
  {
    id: "711731",
    fullname: "鹿港镇",
    location: {
      lat: 24.084734,
      lng: 120.437596,
    },
  },
  {
    id: "711732",
    fullname: "福兴乡",
    location: {
      lat: 24.028755,
      lng: 120.442786,
    },
  },
  {
    id: "711733",
    fullname: "线西乡",
    location: {
      lat: 24.12308,
      lng: 120.45956,
    },
  },
  {
    id: "711734",
    fullname: "和美镇",
    location: {
      lat: 24.109369,
      lng: 120.50469,
    },
  },
  {
    id: "711735",
    fullname: "伸港乡",
    location: {
      lat: 24.15639,
      lng: 120.48277,
    },
  },
  {
    id: "711736",
    fullname: "员林市",
    location: {
      lat: 23.956915,
      lng: 120.61026,
    },
  },
  {
    id: "711737",
    fullname: "社头乡",
    location: {
      lat: 23.908552,
      lng: 120.620806,
    },
  },
  {
    id: "711738",
    fullname: "永靖乡",
    location: {
      lat: 23.924758,
      lng: 120.531078,
    },
  },
  {
    id: "711739",
    fullname: "埔心乡",
    location: {
      lat: 23.954411,
      lng: 120.528981,
    },
  },
  {
    id: "711740",
    fullname: "溪湖镇",
    location: {
      lat: 23.95219,
      lng: 120.487555,
    },
  },
  {
    id: "711741",
    fullname: "大村乡",
    location: {
      lat: 23.993085,
      lng: 120.563456,
    },
  },
  {
    id: "711742",
    fullname: "埔盐乡",
    location: {
      lat: 23.993031,
      lng: 120.465463,
    },
  },
  {
    id: "711743",
    fullname: "田中镇",
    location: {
      lat: 23.85855,
      lng: 120.609181,
    },
  },
  {
    id: "711744",
    fullname: "北斗镇",
    location: {
      lat: 23.868165,
      lng: 120.531918,
    },
  },
  {
    id: "711745",
    fullname: "田尾乡",
    location: {
      lat: 23.899768,
      lng: 120.524093,
    },
  },
  {
    id: "711746",
    fullname: "埤头乡",
    location: {
      lat: 23.87357,
      lng: 120.468527,
    },
  },
  {
    id: "711747",
    fullname: "溪州乡",
    location: {
      lat: 23.835111,
      lng: 120.51942,
    },
  },
  {
    id: "711748",
    fullname: "竹塘乡",
    location: {
      lat: 23.857407,
      lng: 120.411516,
    },
  },
  {
    id: "711749",
    fullname: "二林镇",
    location: {
      lat: 23.906247,
      lng: 120.39439,
    },
  },
  {
    id: "711750",
    fullname: "大城乡",
    location: {
      lat: 23.866757,
      lng: 120.318059,
    },
  },
  {
    id: "711751",
    fullname: "芳苑乡",
    location: {
      lat: 23.943069,
      lng: 120.355687,
    },
  },
  {
    id: "711752",
    fullname: "二水乡",
    location: {
      lat: 23.813199,
      lng: 120.628238,
    },
  },
  {
    id: "711919",
    fullname: "番路乡",
    location: {
      lat: 23.434473,
      lng: 120.624255,
    },
  },
  {
    id: "711920",
    fullname: "梅山乡",
    location: {
      lat: 23.557491,
      lng: 120.612016,
    },
  },
  {
    id: "711921",
    fullname: "竹崎乡",
    location: {
      lat: 23.505186,
      lng: 120.584341,
    },
  },
  {
    id: "711922",
    fullname: "阿里山乡",
    location: {
      lat: 23.436549,
      lng: 120.774203,
    },
  },
  {
    id: "711923",
    fullname: "中埔乡",
    location: {
      lat: 23.39845,
      lng: 120.519441,
    },
  },
  {
    id: "711924",
    fullname: "大埔乡",
    location: {
      lat: 23.287444,
      lng: 120.595475,
    },
  },
  {
    id: "711925",
    fullname: "水上乡",
    location: {
      lat: 23.421406,
      lng: 120.439266,
    },
  },
  {
    id: "711926",
    fullname: "鹿草乡",
    location: {
      lat: 23.41572,
      lng: 120.300877,
    },
  },
  {
    id: "711927",
    fullname: "太保市",
    location: {
      lat: 23.473933,
      lng: 120.35193,
    },
  },
  {
    id: "711928",
    fullname: "朴子市",
    location: {
      lat: 23.438053,
      lng: 120.25252,
    },
  },
  {
    id: "711929",
    fullname: "东石乡",
    location: {
      lat: 23.460083,
      lng: 120.199035,
    },
  },
  {
    id: "711930",
    fullname: "六脚乡",
    location: {
      lat: 23.508978,
      lng: 120.267776,
    },
  },
  {
    id: "711931",
    fullname: "新港乡",
    location: {
      lat: 23.540501,
      lng: 120.354005,
    },
  },
  {
    id: "711932",
    fullname: "民雄乡",
    location: {
      lat: 23.540418,
      lng: 120.460537,
    },
  },
  {
    id: "711933",
    fullname: "大林镇",
    location: {
      lat: 23.593549,
      lng: 120.481664,
    },
  },
  {
    id: "711934",
    fullname: "溪口乡",
    location: {
      lat: 23.5948,
      lng: 120.403861,
    },
  },
  {
    id: "711935",
    fullname: "义竹乡",
    location: {
      lat: 23.349636,
      lng: 120.228609,
    },
  },
  {
    id: "711936",
    fullname: "布袋镇",
    location: {
      lat: 23.396275,
      lng: 120.200917,
    },
  },
  {
    id: "712121",
    fullname: "斗南镇",
    location: {
      lat: 23.664943,
      lng: 120.480738,
    },
  },
  {
    id: "712122",
    fullname: "大埤乡",
    location: {
      lat: 23.64588,
      lng: 120.431074,
    },
  },
  {
    id: "712123",
    fullname: "虎尾镇",
    location: {
      lat: 23.714535,
      lng: 120.422854,
    },
  },
  {
    id: "712124",
    fullname: "土库镇",
    location: {
      lat: 23.699741,
      lng: 120.365932,
    },
  },
  {
    id: "712125",
    fullname: "褒忠乡",
    location: {
      lat: 23.716337,
      lng: 120.309003,
    },
  },
  {
    id: "712126",
    fullname: "东势乡",
    location: {
      lat: 23.698402,
      lng: 120.258172,
    },
  },
  {
    id: "712127",
    fullname: "台西乡",
    location: {
      lat: 23.702556,
      lng: 120.21318,
    },
  },
  {
    id: "712128",
    fullname: "仑背乡",
    location: {
      lat: 23.772894,
      lng: 120.335015,
    },
  },
  {
    id: "712129",
    fullname: "麦寮乡",
    location: {
      lat: 23.775929,
      lng: 120.255931,
    },
  },
  {
    id: "712130",
    fullname: "斗六市",
    location: {
      lat: 23.697529,
      lng: 120.586501,
    },
  },
  {
    id: "712131",
    fullname: "林内乡",
    location: {
      lat: 23.743124,
      lng: 120.61696,
    },
  },
  {
    id: "712132",
    fullname: "古坑乡",
    location: {
      lat: 23.628121,
      lng: 120.614675,
    },
  },
  {
    id: "712133",
    fullname: "莿桐乡",
    location: {
      lat: 23.77119,
      lng: 120.54166,
    },
  },
  {
    id: "712134",
    fullname: "西螺镇",
    location: {
      lat: 23.784749,
      lng: 120.457854,
    },
  },
  {
    id: "712135",
    fullname: "二仑乡",
    location: {
      lat: 23.790316,
      lng: 120.393944,
    },
  },
  {
    id: "712136",
    fullname: "北港镇",
    location: {
      lat: 23.584894,
      lng: 120.288855,
    },
  },
  {
    id: "712137",
    fullname: "水林乡",
    location: {
      lat: 23.568028,
      lng: 120.23913,
    },
  },
  {
    id: "712138",
    fullname: "口湖乡",
    location: {
      lat: 23.57919,
      lng: 120.178227,
    },
  },
  {
    id: "712139",
    fullname: "四湖乡",
    location: {
      lat: 23.646525,
      lng: 120.210561,
    },
  },
  {
    id: "712140",
    fullname: "元长乡",
    location: {
      lat: 23.645376,
      lng: 120.325652,
    },
  },
  {
    id: "712434",
    fullname: "屏东市",
    location: {
      lat: 22.666716,
      lng: 120.492005,
    },
  },
  {
    id: "712435",
    fullname: "三地门乡",
    location: {
      lat: 22.789423,
      lng: 120.678111,
    },
  },
  {
    id: "712436",
    fullname: "雾台乡",
    location: {
      lat: 22.756209,
      lng: 120.793046,
    },
  },
  {
    id: "712437",
    fullname: "玛家乡",
    location: {
      lat: 22.665118,
      lng: 120.672497,
    },
  },
  {
    id: "712438",
    fullname: "九如乡",
    location: {
      lat: 22.729198,
      lng: 120.489693,
    },
  },
  {
    id: "712439",
    fullname: "里港乡",
    location: {
      lat: 22.800353,
      lng: 120.509419,
    },
  },
  {
    id: "712440",
    fullname: "高树乡",
    location: {
      lat: 22.798633,
      lng: 120.614301,
    },
  },
  {
    id: "712441",
    fullname: "盐埔乡",
    location: {
      lat: 22.74091,
      lng: 120.560463,
    },
  },
  {
    id: "712442",
    fullname: "长治乡",
    location: {
      lat: 22.68574,
      lng: 120.542657,
    },
  },
  {
    id: "712443",
    fullname: "麟洛乡",
    location: {
      lat: 22.65031,
      lng: 120.52547,
    },
  },
  {
    id: "712444",
    fullname: "竹田乡",
    location: {
      lat: 22.584939,
      lng: 120.521566,
    },
  },
  {
    id: "712445",
    fullname: "内埔乡",
    location: {
      lat: 22.641802,
      lng: 120.596116,
    },
  },
  {
    id: "712446",
    fullname: "万丹乡",
    location: {
      lat: 22.578361,
      lng: 120.483664,
    },
  },
  {
    id: "712447",
    fullname: "潮州镇",
    location: {
      lat: 22.54354,
      lng: 120.544359,
    },
  },
  {
    id: "712448",
    fullname: "泰武乡",
    location: {
      lat: 22.592643,
      lng: 120.658259,
    },
  },
  {
    id: "712449",
    fullname: "来义乡",
    location: {
      lat: 22.493802,
      lng: 120.654836,
    },
  },
  {
    id: "712450",
    fullname: "万峦乡",
    location: {
      lat: 22.58091,
      lng: 120.612305,
    },
  },
  {
    id: "712451",
    fullname: "崁顶乡",
    location: {
      lat: 22.514032,
      lng: 120.505574,
    },
  },
  {
    id: "712452",
    fullname: "新埤乡",
    location: {
      lat: 22.475461,
      lng: 120.599996,
    },
  },
  {
    id: "712453",
    fullname: "南州乡",
    location: {
      lat: 22.481546,
      lng: 120.517214,
    },
  },
  {
    id: "712454",
    fullname: "林边乡",
    location: {
      lat: 22.444963,
      lng: 120.511888,
    },
  },
  {
    id: "712455",
    fullname: "东港镇",
    location: {
      lat: 22.467418,
      lng: 120.488541,
    },
  },
  {
    id: "712456",
    fullname: "琉球乡",
    location: {
      lat: 22.339902,
      lng: 120.371291,
    },
  },
  {
    id: "712457",
    fullname: "佳冬乡",
    location: {
      lat: 22.427043,
      lng: 120.548614,
    },
  },
  {
    id: "712458",
    fullname: "新园乡",
    location: {
      lat: 22.534032,
      lng: 120.464741,
    },
  },
  {
    id: "712459",
    fullname: "枋寮乡",
    location: {
      lat: 22.394506,
      lng: 120.606465,
    },
  },
  {
    id: "712460",
    fullname: "枋山乡",
    location: {
      lat: 22.255443,
      lng: 120.657004,
    },
  },
  {
    id: "712461",
    fullname: "春日乡",
    location: {
      lat: 22.396608,
      lng: 120.675329,
    },
  },
  {
    id: "712462",
    fullname: "狮子乡",
    location: {
      lat: 22.246141,
      lng: 120.735955,
    },
  },
  {
    id: "712463",
    fullname: "车城乡",
    location: {
      lat: 22.079205,
      lng: 120.727885,
    },
  },
  {
    id: "712464",
    fullname: "牡丹乡",
    location: {
      lat: 22.15295,
      lng: 120.817067,
    },
  },
  {
    id: "712465",
    fullname: "恒春镇",
    location: {
      lat: 21.989803,
      lng: 120.7392,
    },
  },
  {
    id: "712466",
    fullname: "满州乡",
    location: {
      lat: 22.050462,
      lng: 120.835152,
    },
  },
  {
    id: "712517",
    fullname: "台东市",
    location: {
      lat: 22.764364,
      lng: 121.113207,
    },
  },
  {
    id: "712518",
    fullname: "绿岛乡",
    location: {
      lat: 22.662919,
      lng: 121.493407,
    },
  },
  {
    id: "712519",
    fullname: "兰屿乡",
    location: {
      lat: 22.041169,
      lng: 121.550107,
    },
  },
  {
    id: "712520",
    fullname: "延平乡",
    location: {
      lat: 22.908597,
      lng: 121.021911,
    },
  },
  {
    id: "712521",
    fullname: "卑南乡",
    location: {
      lat: 22.758622,
      lng: 121.011738,
    },
  },
  {
    id: "712522",
    fullname: "鹿野乡",
    location: {
      lat: 22.949356,
      lng: 121.152351,
    },
  },
  {
    id: "712523",
    fullname: "关山镇",
    location: {
      lat: 23.037253,
      lng: 121.175444,
    },
  },
  {
    id: "712524",
    fullname: "海端乡",
    location: {
      lat: 23.104115,
      lng: 121.031316,
    },
  },
  {
    id: "712525",
    fullname: "池上乡",
    location: {
      lat: 23.088673,
      lng: 121.216977,
    },
  },
  {
    id: "712526",
    fullname: "东河乡",
    location: {
      lat: 22.973742,
      lng: 121.249396,
    },
  },
  {
    id: "712527",
    fullname: "成功镇",
    location: {
      lat: 23.117289,
      lng: 121.345975,
    },
  },
  {
    id: "712528",
    fullname: "长滨乡",
    location: {
      lat: 23.327925,
      lng: 121.419981,
    },
  },
  {
    id: "712529",
    fullname: "金峰乡",
    location: {
      lat: 22.602316,
      lng: 120.905713,
    },
  },
  {
    id: "712530",
    fullname: "大武乡",
    location: {
      lat: 22.381832,
      lng: 120.893472,
    },
  },
  {
    id: "712531",
    fullname: "达仁乡",
    location: {
      lat: 22.373402,
      lng: 120.845791,
    },
  },
  {
    id: "712532",
    fullname: "太麻里乡",
    location: {
      lat: 22.587472,
      lng: 120.972099,
    },
  },
  {
    id: "712615",
    fullname: "花莲市",
    location: {
      lat: 24.000674,
      lng: 121.59729,
    },
  },
  {
    id: "712616",
    fullname: "新城乡",
    location: {
      lat: 24.057068,
      lng: 121.612414,
    },
  },
  {
    id: "712618",
    fullname: "秀林乡",
    location: {
      lat: 24.151768,
      lng: 121.498359,
    },
  },
  {
    id: "712619",
    fullname: "吉安乡",
    location: {
      lat: 23.960472,
      lng: 121.565621,
    },
  },
  {
    id: "712620",
    fullname: "寿丰乡",
    location: {
      lat: 23.836802,
      lng: 121.530285,
    },
  },
  {
    id: "712621",
    fullname: "凤林镇",
    location: {
      lat: 23.742396,
      lng: 121.466684,
    },
  },
  {
    id: "712622",
    fullname: "光复乡",
    location: {
      lat: 23.652549,
      lng: 121.448891,
    },
  },
  {
    id: "712623",
    fullname: "丰滨乡",
    location: {
      lat: 23.577574,
      lng: 121.493017,
    },
  },
  {
    id: "712624",
    fullname: "瑞穗乡",
    location: {
      lat: 23.519192,
      lng: 121.410735,
    },
  },
  {
    id: "712625",
    fullname: "万荣乡",
    location: {
      lat: 23.704744,
      lng: 121.326024,
    },
  },
  {
    id: "712626",
    fullname: "玉里镇",
    location: {
      lat: 23.36682,
      lng: 121.358807,
    },
  },
  {
    id: "712627",
    fullname: "卓溪乡",
    location: {
      lat: 23.387536,
      lng: 121.187871,
    },
  },
  {
    id: "712628",
    fullname: "富里乡",
    location: {
      lat: 23.197242,
      lng: 121.299737,
    },
  },
  {
    id: "712707",
    fullname: "马公市",
    location: {
      lat: 23.552351,
      lng: 119.58457,
    },
  },
  {
    id: "712708",
    fullname: "西屿乡",
    location: {
      lat: 23.599165,
      lng: 119.507369,
    },
  },
  {
    id: "712709",
    fullname: "望安乡",
    location: {
      lat: 23.370874,
      lng: 119.501729,
    },
  },
  {
    id: "712710",
    fullname: "七美乡",
    location: {
      lat: 23.202822,
      lng: 119.429995,
    },
  },
  {
    id: "712711",
    fullname: "白沙乡",
    location: {
      lat: 23.653489,
      lng: 119.586317,
    },
  },
  {
    id: "712712",
    fullname: "湖西乡",
    location: {
      lat: 23.581998,
      lng: 119.635245,
    },
  },
];

export default areas
