window.DASHBOARD_DATA = {
  "sourceWorkbook": "数据源9.1-10.31.xlsx",
  "dateMin": "2026-09-01",
  "dateMax": "2026-10-31",
  "period": "2026/10/25—10/31",
  "comparisonPeriod": "2026/10/18—10/24",
  "currentPeriodKey": "10/25—10/31",
  "ratingPreviousDate": "9.30",
  "ratingCurrentDate": "10.31",
  "standardOrdersPerPerson": 150,
  "hourlyPeriod": "10/1—10/31",
  "hourlyNote": "小时表按10月31天计算参考画像，较10月日单量合计少8单，保留源值；小时画像固定，不随经营周期切换。",
  "laborCostNote": "人工成本按所选日期对应月份计算：9月成本÷30、10月成本÷31；跨月按天加权，含所有应计人员。",
  "ratingStatus": "评分变化按9.30与10.31两期同店对比，可比门店7/8家。",
  "notes": [
    "统计期：2026/10/25—10/31；环比：2026/10/18—10/24。",
    "周期平均在职拣货员共32人，不含店长；按入职日至离职日逐日计算。",
    "人效标准为150单/人/天。",
    "人工成本按所选日期对应月份计算：9月成本÷30、10月成本÷31；跨月按天加权，含所有应计人员。"
  ],
  "managementNotes": [
    "高负荷门店优先核查高峰履约、缺货和实际出勤；低负荷门店先调班和查经营原因。",
    "评分采用9.30与10.31对比，缺失门店不记为0分。"
  ],
  "totals": {
    "staff": 32,
    "staffEnd": 32,
    "dailyOrders": 3679.8571428571427,
    "ordersPerPerson": 115,
    "wow": -0.0468,
    "laborDaily": 8781.894371523915,
    "registeredStaff": 36,
    "baseDailyShifts": 28,
    "conservativeRegisteredStaff": 52,
    "overallLoadRate": 0.7666,
    "laborPerOrder": 2.39,
    "dailyChange": -180.9,
    "periodOrdersPerPerson": 122.6,
    "periodLoadRate": 0.817,
    "periodLaborPerOrder": 2.5443451186469255,
    "surplusOrders": -1120.1,
    "workloadPeople": 24.53,
    "peopleGap": -7.47
  },
  "signals": {
    "highLoadStores": [],
    "lowLoadStores": [
      "广丰路店",
      "皮革城店",
      "青浦店",
      "东站店",
      "滨湖店"
    ],
    "decliningStores": [
      "康桥店",
      "广丰路店",
      "皮革城店",
      "青浦店",
      "七宝店",
      "东站店",
      "洛社店",
      "滨湖店"
    ],
    "growthStores": []
  },
  "stores": [
    {
      "name": "康桥店",
      "staff": 5,
      "staffEnd": 5,
      "dailyOrders": 829.7142857142857,
      "ordersPerPerson": 165.94285714285712,
      "wow": -0.0273,
      "laborDaily": 1722.8486318131256,
      "loadRate": 1.106285714285714,
      "standardOrders": 750,
      "surplusOrders": 79.7,
      "workloadPeople": 5.53,
      "peopleGap": 0.53,
      "dailyChange": -23.3,
      "laborPerOrder": 2.076436023190751,
      "periodOrdersPerPerson": 180.9,
      "periodLoadRate": 1.2059,
      "periodLaborPerOrder": 2.085203620801071,
      "baseDailyShifts": 6,
      "registeredStaff": 7,
      "registeredGap": 2,
      "peakDayOrders": 1020,
      "peakDayMinimum": 7,
      "shifts": [
        {
          "label": "A",
          "start": 8,
          "end": 20,
          "count": 2
        },
        {
          "label": "B",
          "start": 12,
          "end": 0,
          "count": 2
        },
        {
          "label": "C",
          "start": 20,
          "end": 8,
          "count": 2
        }
      ],
      "requiredPeakSpeed": 17.2,
      "monthlyShifts": 203,
      "averageDailyAttendance": 6.55,
      "scheduledOrdersPerShift": 126.7,
      "scheduledLoadRate": 0.8447,
      "conservativeDailyShifts": 9,
      "conservativeRegisteredStaff": 10,
      "conservativePlan": {
        "a": "08:00 ×3",
        "b": "12:00 ×3",
        "c": "20:00 ×3"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "startDate": "2026-09-04",
          "endDate": "2026-09-10",
          "days": 7,
          "periodOrders": 4662,
          "dailyOrders": 666,
          "staff": 3.5714285714285716,
          "staffEnd": 2,
          "ordersPerPerson": 186.48,
          "laborDaily": 1538.8111904761902,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "9/11—9/17",
          "startDate": "2026-09-11",
          "endDate": "2026-09-17",
          "days": 7,
          "periodOrders": 5482,
          "dailyOrders": 783.1428571428571,
          "staff": 5,
          "staffEnd": 5,
          "ordersPerPerson": 156.62857142857143,
          "laborDaily": 1538.8111904761902,
          "previousDailyOrders": 666,
          "wow": 0.1759,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "startDate": "2026-09-18",
          "endDate": "2026-09-24",
          "days": 7,
          "periodOrders": 5658,
          "dailyOrders": 808.2857142857143,
          "staff": 4.142857142857143,
          "staffEnd": 4,
          "ordersPerPerson": 195.10344827586206,
          "laborDaily": 1538.8111904761902,
          "previousDailyOrders": 783.1428571428571,
          "wow": 0.0321,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "startDate": "2026-09-25",
          "endDate": "2026-10-01",
          "days": 7,
          "periodOrders": 5566,
          "dailyOrders": 795.1428571428571,
          "staff": 3.2857142857142856,
          "staffEnd": 3,
          "ordersPerPerson": 242,
          "laborDaily": 1565.102253524324,
          "previousDailyOrders": 808.2857142857143,
          "wow": -0.0163,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "startDate": "2026-10-02",
          "endDate": "2026-10-08",
          "days": 7,
          "periodOrders": 5414,
          "dailyOrders": 773.4285714285714,
          "staff": 3.7142857142857144,
          "staffEnd": 4,
          "ordersPerPerson": 208.23076923076923,
          "laborDaily": 1722.8486318131256,
          "previousDailyOrders": 795.1428571428571,
          "wow": -0.0273,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "startDate": "2026-10-09",
          "endDate": "2026-10-15",
          "days": 7,
          "periodOrders": 5529,
          "dailyOrders": 789.8571428571429,
          "staff": 4.857142857142857,
          "staffEnd": 5,
          "ordersPerPerson": 162.61764705882354,
          "laborDaily": 1722.8486318131256,
          "previousDailyOrders": 773.4285714285714,
          "wow": 0.0212,
          "comparison": "10/2—10/8"
        },
        {
          "period": "10/16—10/22",
          "startDate": "2026-10-16",
          "endDate": "2026-10-22",
          "days": 7,
          "periodOrders": 5844,
          "dailyOrders": 834.8571428571429,
          "staff": 5,
          "staffEnd": 5,
          "ordersPerPerson": 166.9714285714286,
          "laborDaily": 1722.8486318131256,
          "previousDailyOrders": 789.8571428571429,
          "wow": 0.057,
          "comparison": "10/9—10/15"
        },
        {
          "period": "10/18—10/24",
          "startDate": "2026-10-18",
          "endDate": "2026-10-24",
          "days": 7,
          "periodOrders": 5971,
          "dailyOrders": 853,
          "staff": 5,
          "staffEnd": 5,
          "ordersPerPerson": 170.6,
          "laborDaily": 1722.8486318131256,
          "previousDailyOrders": 814.2857142857143,
          "wow": 0.0475,
          "comparison": "10/11—10/17"
        },
        {
          "period": "10/25—10/31",
          "startDate": "2026-10-25",
          "endDate": "2026-10-31",
          "days": 7,
          "periodOrders": 5808,
          "dailyOrders": 829.7142857142857,
          "staff": 5,
          "staffEnd": 5,
          "ordersPerPerson": 165.94285714285712,
          "laborDaily": 1722.8486318131256,
          "previousDailyOrders": 853,
          "wow": -0.0273,
          "comparison": "10/18—10/24"
        },
        {
          "period": "9/1—10/31 全期",
          "startDate": "2026-09-01",
          "endDate": "2026-10-31",
          "days": 61,
          "periodOrders": 47752,
          "dailyOrders": 782.8196721311475,
          "staff": 4.327868852459017,
          "staffEnd": 5,
          "ordersPerPerson": 180.87878787878785,
          "laborDaily": 1632.338414762176,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "monthly": [
        {
          "period": "2026年9月",
          "startDate": "2026-09-01",
          "endDate": "2026-09-30",
          "days": 30,
          "periodOrders": 22427,
          "dailyOrders": 747.5666666666667,
          "staff": 4.033333333333333,
          "staffEnd": 3,
          "ordersPerPerson": 185.34710743801654,
          "laborDaily": 1538.8111904761902,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "2026年10月",
          "startDate": "2026-10-01",
          "endDate": "2026-10-31",
          "days": 31,
          "periodOrders": 25325,
          "dailyOrders": 816.9354838709677,
          "staff": 4.612903225806452,
          "staffEnd": 5,
          "ordersPerPerson": 177.09790209790208,
          "laborDaily": 1722.8486318131256,
          "previousDailyOrders": 747.5666666666667,
          "wow": 0.0928,
          "comparison": "9/1—9/30"
        }
      ],
      "gradeHistory": [
        {
          "date": "2026-09-16",
          "grade": "黄金"
        },
        {
          "date": "2026-09-22",
          "grade": "黄金"
        },
        {
          "date": "2026-09-28",
          "grade": "黄金"
        },
        {
          "date": "2026-09-30",
          "grade": "黄金"
        },
        {
          "date": "2026-10-08",
          "grade": "黄金"
        },
        {
          "date": "2026-10-31",
          "grade": "黄金"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "isoDate": "2026-09-01",
          "orders": 676,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/2",
          "isoDate": "2026-09-02",
          "orders": 600,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/3",
          "isoDate": "2026-09-03",
          "orders": 615,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/4",
          "isoDate": "2026-09-04",
          "orders": 616,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/5",
          "isoDate": "2026-09-05",
          "orders": 683,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/6",
          "isoDate": "2026-09-06",
          "orders": 771,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/7",
          "isoDate": "2026-09-07",
          "orders": 644,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/8",
          "isoDate": "2026-09-08",
          "orders": 556,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/9",
          "isoDate": "2026-09-09",
          "orders": 720,
          "staff": 3,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/10",
          "isoDate": "2026-09-10",
          "orders": 672,
          "staff": 2,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/11",
          "isoDate": "2026-09-11",
          "orders": 716,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/12",
          "isoDate": "2026-09-12",
          "orders": 875,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/13",
          "isoDate": "2026-09-13",
          "orders": 816,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/14",
          "isoDate": "2026-09-14",
          "orders": 720,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/15",
          "isoDate": "2026-09-15",
          "orders": 715,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/16",
          "isoDate": "2026-09-16",
          "orders": 827,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/17",
          "isoDate": "2026-09-17",
          "orders": 813,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/18",
          "isoDate": "2026-09-18",
          "orders": 848,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/19",
          "isoDate": "2026-09-19",
          "orders": 974,
          "staff": 5,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/20",
          "isoDate": "2026-09-20",
          "orders": 769,
          "staff": 3,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/21",
          "isoDate": "2026-09-21",
          "orders": 735,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/22",
          "isoDate": "2026-09-22",
          "orders": 794,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/23",
          "isoDate": "2026-09-23",
          "orders": 741,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/24",
          "isoDate": "2026-09-24",
          "orders": 797,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/25",
          "isoDate": "2026-09-25",
          "orders": 916,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/26",
          "isoDate": "2026-09-26",
          "orders": 810,
          "staff": 4,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/27",
          "isoDate": "2026-09-27",
          "orders": 785,
          "staff": 3,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/28",
          "isoDate": "2026-09-28",
          "orders": 748,
          "staff": 3,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/29",
          "isoDate": "2026-09-29",
          "orders": 740,
          "staff": 3,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "9/30",
          "isoDate": "2026-09-30",
          "orders": 735,
          "staff": 3,
          "laborDaily": 1538.8111904761904
        },
        {
          "date": "10/1",
          "isoDate": "2026-10-01",
          "orders": 832,
          "staff": 3,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/2",
          "isoDate": "2026-10-02",
          "orders": 749,
          "staff": 3,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/3",
          "isoDate": "2026-10-03",
          "orders": 805,
          "staff": 3,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/4",
          "isoDate": "2026-10-04",
          "orders": 795,
          "staff": 4,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/5",
          "isoDate": "2026-10-05",
          "orders": 740,
          "staff": 4,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/6",
          "isoDate": "2026-10-06",
          "orders": 719,
          "staff": 4,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/7",
          "isoDate": "2026-10-07",
          "orders": 783,
          "staff": 4,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/8",
          "isoDate": "2026-10-08",
          "orders": 823,
          "staff": 4,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/9",
          "isoDate": "2026-10-09",
          "orders": 813,
          "staff": 4,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/10",
          "isoDate": "2026-10-10",
          "orders": 787,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/11",
          "isoDate": "2026-10-11",
          "orders": 907,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/12",
          "isoDate": "2026-10-12",
          "orders": 789,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/13",
          "isoDate": "2026-10-13",
          "orders": 810,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/14",
          "isoDate": "2026-10-14",
          "orders": 709,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/15",
          "isoDate": "2026-10-15",
          "orders": 714,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/16",
          "isoDate": "2026-10-16",
          "orders": 784,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/17",
          "isoDate": "2026-10-17",
          "orders": 987,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/18",
          "isoDate": "2026-10-18",
          "orders": 935,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/19",
          "isoDate": "2026-10-19",
          "orders": 739,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/20",
          "isoDate": "2026-10-20",
          "orders": 810,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/21",
          "isoDate": "2026-10-21",
          "orders": 750,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/22",
          "isoDate": "2026-10-22",
          "orders": 839,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/23",
          "isoDate": "2026-10-23",
          "orders": 901,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/24",
          "isoDate": "2026-10-24",
          "orders": 997,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/25",
          "isoDate": "2026-10-25",
          "orders": 971,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/26",
          "isoDate": "2026-10-26",
          "orders": 716,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/27",
          "isoDate": "2026-10-27",
          "orders": 779,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/28",
          "isoDate": "2026-10-28",
          "orders": 785,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/29",
          "isoDate": "2026-10-29",
          "orders": 757,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/30",
          "isoDate": "2026-10-30",
          "orders": 780,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        },
        {
          "date": "10/31",
          "isoDate": "2026-10-31",
          "orders": 1020,
          "staff": 5,
          "laborDaily": 1722.8486318131258
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 33.9,
          "baseStaff": 2,
          "peakSpeed": 17,
          "conservativeStaff": 3,
          "gap": 8.9
        },
        {
          "hour": 1,
          "recentEstimate": 22,
          "baseStaff": 2,
          "peakSpeed": 11,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 14.8,
          "baseStaff": 2,
          "peakSpeed": 7.4,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 10.3,
          "baseStaff": 2,
          "peakSpeed": 5.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 8.3,
          "baseStaff": 2,
          "peakSpeed": 4.1,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 7.5,
          "baseStaff": 2,
          "peakSpeed": 3.8,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 9.2,
          "baseStaff": 2,
          "peakSpeed": 4.6,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 15.7,
          "baseStaff": 2,
          "peakSpeed": 7.9,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 24.1,
          "baseStaff": 2,
          "peakSpeed": 12,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 30.6,
          "baseStaff": 2,
          "peakSpeed": 15.3,
          "conservativeStaff": 3,
          "gap": 5.6
        },
        {
          "hour": 10,
          "recentEstimate": 34.4,
          "baseStaff": 2,
          "peakSpeed": 17.2,
          "conservativeStaff": 3,
          "gap": 9.4
        },
        {
          "hour": 11,
          "recentEstimate": 33.6,
          "baseStaff": 2,
          "peakSpeed": 16.8,
          "conservativeStaff": 3,
          "gap": 8.6
        },
        {
          "hour": 12,
          "recentEstimate": 36.6,
          "baseStaff": 4,
          "peakSpeed": 9.1,
          "conservativeStaff": 6,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 37.2,
          "baseStaff": 4,
          "peakSpeed": 9.3,
          "conservativeStaff": 6,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 36.4,
          "baseStaff": 4,
          "peakSpeed": 9.1,
          "conservativeStaff": 6,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 36.7,
          "baseStaff": 4,
          "peakSpeed": 9.2,
          "conservativeStaff": 6,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 37.5,
          "baseStaff": 4,
          "peakSpeed": 9.4,
          "conservativeStaff": 6,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 46.3,
          "baseStaff": 4,
          "peakSpeed": 11.6,
          "conservativeStaff": 6,
          "gap": 0
        },
        {
          "hour": 18,
          "recentEstimate": 49.6,
          "baseStaff": 4,
          "peakSpeed": 12.4,
          "conservativeStaff": 6,
          "gap": 0
        },
        {
          "hour": 19,
          "recentEstimate": 58.9,
          "baseStaff": 4,
          "peakSpeed": 14.7,
          "conservativeStaff": 6,
          "gap": 8.9
        },
        {
          "hour": 20,
          "recentEstimate": 64.4,
          "baseStaff": 4,
          "peakSpeed": 16.1,
          "conservativeStaff": 6,
          "gap": 14.4
        },
        {
          "hour": 21,
          "recentEstimate": 61.3,
          "baseStaff": 4,
          "peakSpeed": 15.3,
          "conservativeStaff": 6,
          "gap": 11.3
        },
        {
          "hour": 22,
          "recentEstimate": 57.9,
          "baseStaff": 4,
          "peakSpeed": 14.5,
          "conservativeStaff": 6,
          "gap": 7.9
        },
        {
          "hour": 23,
          "recentEstimate": 49.7,
          "baseStaff": 4,
          "peakSpeed": 12.4,
          "conservativeStaff": 6,
          "gap": 0
        }
      ],
      "judgment": "负荷接近标准但订单回落，需跟进转化与时段效率。",
      "risk": "订单回落可能继续影响人效和单位人工成本。",
      "action": "复盘订单回落时段和转化原因，调整班次并连续跟踪一周。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 829.7142857142857 单，环比 -2.7%\n5 人，人均 165.94285714285712 单\n负荷 110.6%，单均人工 2.08 元",
      "rating": {
        "name": "优沃森超市（康桥店）",
        "grade916": "黄金",
        "score916": 54.5,
        "grade922": "黄金",
        "score922": 63.4,
        "scoreChange": 8.9,
        "display916": 4.1,
        "display922": 4.3,
        "displayChange": 0.2,
        "service922": 4.5,
        "product922": 4,
        "fulfillment922": 4.8,
        "metrics922": {
          "缺货退款率": 50.1,
          "3分钟IM人工回复率": 46.9,
          "配送准时率": 84.1,
          "商品负反馈率": 50.1,
          "有效配送信息回传率": 100,
          "商责介入率": 91.4,
          "配送时效": 73.8,
          "商品评价分": 28.3
        },
        "shortBoard": "商品评价分28.3、3分钟IM人工回复率46.9、缺货退款率50.1",
        "risk": "商品维度相对较弱；需结合商品评价分28.3、3分钟IM人工回复率46.9、缺货退款率50.1继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "广丰路店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 449.42857142857144,
      "ordersPerPerson": 112.35714285714286,
      "wow": -0.0603,
      "laborDaily": 1195.3169521690768,
      "loadRate": 0.7490476190476191,
      "standardOrders": 600,
      "surplusOrders": -150.6,
      "workloadPeople": 3,
      "peopleGap": -1,
      "dailyChange": -28.9,
      "laborPerOrder": 2.6596372108021415,
      "periodOrdersPerPerson": 122.6,
      "periodLoadRate": 0.8173,
      "periodLaborPerOrder": 2.6721363762347474,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 0,
      "peakDayOrders": 551,
      "peakDayMinimum": 4,
      "shifts": [
        {
          "label": "A",
          "start": 8,
          "end": 20,
          "count": 1
        },
        {
          "label": "B",
          "start": 12,
          "end": 0,
          "count": 1
        },
        {
          "label": "C",
          "start": 20,
          "end": 8,
          "count": 1
        }
      ],
      "requiredPeakSpeed": 23.7,
      "monthlyShifts": 116,
      "averageDailyAttendance": 3.74,
      "scheduledOrdersPerShift": 120.1,
      "scheduledLoadRate": 0.8007,
      "conservativeDailyShifts": 6,
      "conservativeRegisteredStaff": 7,
      "conservativePlan": {
        "a": "08:00 ×2",
        "b": "12:00 ×2",
        "c": "20:00 ×2"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "startDate": "2026-09-04",
          "endDate": "2026-09-10",
          "days": 7,
          "periodOrders": 3446,
          "dailyOrders": 492.2857142857143,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 164.0952380952381,
          "laborDaily": 1319.9359523809524,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "9/11—9/17",
          "startDate": "2026-09-11",
          "endDate": "2026-09-17",
          "days": 7,
          "periodOrders": 3622,
          "dailyOrders": 517.4285714285714,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 129.35714285714286,
          "laborDaily": 1319.9359523809524,
          "previousDailyOrders": 492.2857142857143,
          "wow": 0.0511,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "startDate": "2026-09-18",
          "endDate": "2026-09-24",
          "days": 7,
          "periodOrders": 3254,
          "dailyOrders": 464.85714285714283,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 116.21428571428571,
          "laborDaily": 1319.9359523809524,
          "previousDailyOrders": 517.4285714285714,
          "wow": -0.1016,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "startDate": "2026-09-25",
          "endDate": "2026-10-01",
          "days": 7,
          "periodOrders": 3365,
          "dailyOrders": 480.7142857142857,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 120.17857142857143,
          "laborDaily": 1302.1332380649699,
          "previousDailyOrders": 464.85714285714283,
          "wow": 0.0341,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "startDate": "2026-10-02",
          "endDate": "2026-10-08",
          "days": 7,
          "periodOrders": 3360,
          "dailyOrders": 480,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 120,
          "laborDaily": 1195.3169521690768,
          "previousDailyOrders": 480.7142857142857,
          "wow": -0.0015,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "startDate": "2026-10-09",
          "endDate": "2026-10-15",
          "days": 7,
          "periodOrders": 2976,
          "dailyOrders": 425.14285714285717,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 106.28571428571429,
          "laborDaily": 1195.3169521690768,
          "previousDailyOrders": 480,
          "wow": -0.1143,
          "comparison": "10/2—10/8"
        },
        {
          "period": "10/16—10/22",
          "startDate": "2026-10-16",
          "endDate": "2026-10-22",
          "days": 7,
          "periodOrders": 3216,
          "dailyOrders": 459.42857142857144,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 114.85714285714286,
          "laborDaily": 1195.3169521690768,
          "previousDailyOrders": 425.14285714285717,
          "wow": 0.0806,
          "comparison": "10/9—10/15"
        },
        {
          "period": "10/18—10/24",
          "startDate": "2026-10-18",
          "endDate": "2026-10-24",
          "days": 7,
          "periodOrders": 3348,
          "dailyOrders": 478.2857142857143,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 119.57142857142857,
          "laborDaily": 1195.3169521690768,
          "previousDailyOrders": 432.2857142857143,
          "wow": 0.1064,
          "comparison": "10/11—10/17"
        },
        {
          "period": "10/25—10/31",
          "startDate": "2026-10-25",
          "endDate": "2026-10-31",
          "days": 7,
          "periodOrders": 3146,
          "dailyOrders": 449.42857142857144,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 112.35714285714286,
          "laborDaily": 1195.3169521690768,
          "previousDailyOrders": 478.2857142857143,
          "wow": -0.0603,
          "comparison": "10/18—10/24"
        },
        {
          "period": "9/1—10/31 全期",
          "startDate": "2026-09-01",
          "endDate": "2026-10-31",
          "days": 61,
          "periodOrders": 28686,
          "dailyOrders": 470.26229508196724,
          "staff": 3.8360655737704916,
          "staffEnd": 4,
          "ordersPerPerson": 122.5897435897436,
          "laborDaily": 1256.6049850601635,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "monthly": [
        {
          "period": "2026年9月",
          "startDate": "2026-09-01",
          "endDate": "2026-09-30",
          "days": 30,
          "periodOrders": 14441,
          "dailyOrders": 481.3666666666667,
          "staff": 3.6666666666666665,
          "staffEnd": 4,
          "ordersPerPerson": 131.28181818181818,
          "laborDaily": 1319.9359523809521,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "2026年10月",
          "startDate": "2026-10-01",
          "endDate": "2026-10-31",
          "days": 31,
          "periodOrders": 14245,
          "dailyOrders": 459.51612903225805,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 114.87903225806451,
          "laborDaily": 1195.3169521690768,
          "previousDailyOrders": 481.3666666666667,
          "wow": -0.0454,
          "comparison": "9/1—9/30"
        }
      ],
      "gradeHistory": [
        {
          "date": "2026-09-16",
          "grade": "黄金"
        },
        {
          "date": "2026-09-22",
          "grade": "黄金"
        },
        {
          "date": "2026-09-28",
          "grade": "黄金"
        },
        {
          "date": "2026-09-30",
          "grade": "黄金"
        },
        {
          "date": "2026-10-08",
          "grade": "黄金"
        },
        {
          "date": "2026-10-31",
          "grade": "黄金"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "isoDate": "2026-09-01",
          "orders": 379,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/2",
          "isoDate": "2026-09-02",
          "orders": 419,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/3",
          "isoDate": "2026-09-03",
          "orders": 429,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/4",
          "isoDate": "2026-09-04",
          "orders": 463,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/5",
          "isoDate": "2026-09-05",
          "orders": 525,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/6",
          "isoDate": "2026-09-06",
          "orders": 522,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/7",
          "isoDate": "2026-09-07",
          "orders": 428,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/8",
          "isoDate": "2026-09-08",
          "orders": 513,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/9",
          "isoDate": "2026-09-09",
          "orders": 501,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/10",
          "isoDate": "2026-09-10",
          "orders": 494,
          "staff": 3,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/11",
          "isoDate": "2026-09-11",
          "orders": 494,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/12",
          "isoDate": "2026-09-12",
          "orders": 685,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/13",
          "isoDate": "2026-09-13",
          "orders": 616,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/14",
          "isoDate": "2026-09-14",
          "orders": 496,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/15",
          "isoDate": "2026-09-15",
          "orders": 447,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/16",
          "isoDate": "2026-09-16",
          "orders": 448,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/17",
          "isoDate": "2026-09-17",
          "orders": 436,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/18",
          "isoDate": "2026-09-18",
          "orders": 499,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/19",
          "isoDate": "2026-09-19",
          "orders": 515,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/20",
          "isoDate": "2026-09-20",
          "orders": 519,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/21",
          "isoDate": "2026-09-21",
          "orders": 455,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/22",
          "isoDate": "2026-09-22",
          "orders": 446,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/23",
          "isoDate": "2026-09-23",
          "orders": 394,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/24",
          "isoDate": "2026-09-24",
          "orders": 426,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/25",
          "isoDate": "2026-09-25",
          "orders": 559,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/26",
          "isoDate": "2026-09-26",
          "orders": 499,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/27",
          "isoDate": "2026-09-27",
          "orders": 501,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/28",
          "isoDate": "2026-09-28",
          "orders": 451,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/29",
          "isoDate": "2026-09-29",
          "orders": 437,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "9/30",
          "isoDate": "2026-09-30",
          "orders": 445,
          "staff": 4,
          "laborDaily": 1319.9359523809521
        },
        {
          "date": "10/1",
          "isoDate": "2026-10-01",
          "orders": 473,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/2",
          "isoDate": "2026-10-02",
          "orders": 460,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/3",
          "isoDate": "2026-10-03",
          "orders": 498,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/4",
          "isoDate": "2026-10-04",
          "orders": 471,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/5",
          "isoDate": "2026-10-05",
          "orders": 469,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/6",
          "isoDate": "2026-10-06",
          "orders": 511,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/7",
          "isoDate": "2026-10-07",
          "orders": 510,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/8",
          "isoDate": "2026-10-08",
          "orders": 441,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/9",
          "isoDate": "2026-10-09",
          "orders": 396,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/10",
          "isoDate": "2026-10-10",
          "orders": 496,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/11",
          "isoDate": "2026-10-11",
          "orders": 444,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/12",
          "isoDate": "2026-10-12",
          "orders": 408,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/13",
          "isoDate": "2026-10-13",
          "orders": 398,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/14",
          "isoDate": "2026-10-14",
          "orders": 436,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/15",
          "isoDate": "2026-10-15",
          "orders": 398,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/16",
          "isoDate": "2026-10-16",
          "orders": 419,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/17",
          "isoDate": "2026-10-17",
          "orders": 523,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/18",
          "isoDate": "2026-10-18",
          "orders": 547,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/19",
          "isoDate": "2026-10-19",
          "orders": 461,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/20",
          "isoDate": "2026-10-20",
          "orders": 430,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/21",
          "isoDate": "2026-10-21",
          "orders": 419,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/22",
          "isoDate": "2026-10-22",
          "orders": 417,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/23",
          "isoDate": "2026-10-23",
          "orders": 536,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/24",
          "isoDate": "2026-10-24",
          "orders": 538,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/25",
          "isoDate": "2026-10-25",
          "orders": 454,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/26",
          "isoDate": "2026-10-26",
          "orders": 399,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/27",
          "isoDate": "2026-10-27",
          "orders": 418,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/28",
          "isoDate": "2026-10-28",
          "orders": 441,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/29",
          "isoDate": "2026-10-29",
          "orders": 455,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/30",
          "isoDate": "2026-10-30",
          "orders": 428,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        },
        {
          "date": "10/31",
          "isoDate": "2026-10-31",
          "orders": 551,
          "staff": 4,
          "laborDaily": 1195.3169521690768
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 16.5,
          "baseStaff": 1,
          "peakSpeed": 16.5,
          "conservativeStaff": 2,
          "gap": 4
        },
        {
          "hour": 1,
          "recentEstimate": 10.8,
          "baseStaff": 1,
          "peakSpeed": 10.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 6.9,
          "baseStaff": 1,
          "peakSpeed": 6.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 3.6,
          "baseStaff": 1,
          "peakSpeed": 3.6,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 3.1,
          "baseStaff": 1,
          "peakSpeed": 3.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 2.5,
          "baseStaff": 1,
          "peakSpeed": 2.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 4.1,
          "baseStaff": 1,
          "peakSpeed": 4.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 8.4,
          "baseStaff": 1,
          "peakSpeed": 8.4,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 14.3,
          "baseStaff": 1,
          "peakSpeed": 14.3,
          "conservativeStaff": 2,
          "gap": 1.8
        },
        {
          "hour": 9,
          "recentEstimate": 18.6,
          "baseStaff": 1,
          "peakSpeed": 18.6,
          "conservativeStaff": 2,
          "gap": 6.1
        },
        {
          "hour": 10,
          "recentEstimate": 20.5,
          "baseStaff": 1,
          "peakSpeed": 20.5,
          "conservativeStaff": 2,
          "gap": 8
        },
        {
          "hour": 11,
          "recentEstimate": 23.7,
          "baseStaff": 1,
          "peakSpeed": 23.7,
          "conservativeStaff": 2,
          "gap": 11.2
        },
        {
          "hour": 12,
          "recentEstimate": 21.6,
          "baseStaff": 2,
          "peakSpeed": 10.8,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 21.9,
          "baseStaff": 2,
          "peakSpeed": 11,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 21.4,
          "baseStaff": 2,
          "peakSpeed": 10.7,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 19.5,
          "baseStaff": 2,
          "peakSpeed": 9.7,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 24.3,
          "baseStaff": 2,
          "peakSpeed": 12.1,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 28.5,
          "baseStaff": 2,
          "peakSpeed": 14.2,
          "conservativeStaff": 4,
          "gap": 3.5
        },
        {
          "hour": 18,
          "recentEstimate": 31,
          "baseStaff": 2,
          "peakSpeed": 15.5,
          "conservativeStaff": 4,
          "gap": 6
        },
        {
          "hour": 19,
          "recentEstimate": 31.7,
          "baseStaff": 2,
          "peakSpeed": 15.9,
          "conservativeStaff": 4,
          "gap": 6.7
        },
        {
          "hour": 20,
          "recentEstimate": 34.7,
          "baseStaff": 2,
          "peakSpeed": 17.3,
          "conservativeStaff": 4,
          "gap": 9.7
        },
        {
          "hour": 21,
          "recentEstimate": 38.3,
          "baseStaff": 2,
          "peakSpeed": 19.2,
          "conservativeStaff": 4,
          "gap": 13.3
        },
        {
          "hour": 22,
          "recentEstimate": 31.6,
          "baseStaff": 2,
          "peakSpeed": 15.8,
          "conservativeStaff": 4,
          "gap": 6.6
        },
        {
          "hour": 23,
          "recentEstimate": 22.1,
          "baseStaff": 2,
          "peakSpeed": 11,
          "conservativeStaff": 4,
          "gap": 0
        }
      ],
      "judgment": "负荷偏低且订单回落，先查经营与排班原因。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 449.42857142857144 单，环比 -6.0%\n4 人，人均 112.35714285714286 单\n负荷 74.9%，单均人工 2.66 元",
      "rating": {
        "name": "优沃森超市（广丰路店）",
        "grade916": "黄金",
        "score916": 75.5,
        "grade922": "黄金",
        "score922": 74.7,
        "scoreChange": -0.8,
        "display916": 4.6,
        "display922": 4.5,
        "displayChange": -0.1,
        "service922": 5,
        "product922": 4.5,
        "fulfillment922": 4,
        "metrics922": {
          "缺货退款率": 86.1,
          "3分钟IM人工回复率": 100,
          "配送准时率": 10.2,
          "商品负反馈率": 62.1,
          "有效配送信息回传率": 100,
          "商责介入率": 100,
          "配送时效": 30.1,
          "商品评价分": 72.2
        },
        "shortBoard": "配送准时率10.2、配送时效30.1、商品负反馈率62.1",
        "risk": "履约维度相对较弱；需结合配送准时率10.2、配送时效30.1、商品负反馈率62.1继续核查。",
        "action": "专项检查配送准时率、配送时效和高峰覆盖，形成时段整改清单。"
      }
    },
    {
      "name": "皮革城店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 467.7142857142857,
      "ordersPerPerson": 116.92857142857143,
      "wow": -0.0142,
      "laborDaily": 1010.3332369299222,
      "loadRate": 0.7795238095238095,
      "standardOrders": 600,
      "surplusOrders": -132.3,
      "workloadPeople": 3.12,
      "peopleGap": -0.88,
      "dailyChange": -6.7,
      "laborPerOrder": 2.1601504760261014,
      "periodOrdersPerPerson": 130.8,
      "periodLoadRate": 0.8721,
      "periodLaborPerOrder": 2.1106754272523154,
      "baseDailyShifts": 4,
      "registeredStaff": 5,
      "registeredGap": 1,
      "peakDayOrders": 571,
      "peakDayMinimum": 4,
      "shifts": [
        {
          "label": "A",
          "start": 8,
          "end": 20,
          "count": 2
        },
        {
          "label": "C",
          "start": 20,
          "end": 8,
          "count": 2
        }
      ],
      "requiredPeakSpeed": 18.5,
      "monthlyShifts": 145,
      "averageDailyAttendance": 4.68,
      "scheduledOrdersPerShift": 100,
      "scheduledLoadRate": 0.6666,
      "conservativeDailyShifts": 5,
      "conservativeRegisteredStaff": 6,
      "conservativePlan": {
        "a": "08:00 ×2",
        "b": "12:00 ×1",
        "c": "20:00 ×2"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "startDate": "2026-09-04",
          "endDate": "2026-09-10",
          "days": 7,
          "periodOrders": 3287,
          "dailyOrders": 469.57142857142856,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 117.39285714285714,
          "laborDaily": 1045.2762380952379,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "9/11—9/17",
          "startDate": "2026-09-11",
          "endDate": "2026-09-17",
          "days": 7,
          "periodOrders": 3413,
          "dailyOrders": 487.57142857142856,
          "staff": 3.4285714285714284,
          "staffEnd": 4,
          "ordersPerPerson": 142.20833333333334,
          "laborDaily": 1045.2762380952379,
          "previousDailyOrders": 469.57142857142856,
          "wow": 0.0383,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "startDate": "2026-09-18",
          "endDate": "2026-09-24",
          "days": 7,
          "periodOrders": 3343,
          "dailyOrders": 477.57142857142856,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 119.39285714285714,
          "laborDaily": 1045.2762380952379,
          "previousDailyOrders": 487.57142857142856,
          "wow": -0.0205,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "startDate": "2026-09-25",
          "endDate": "2026-10-01",
          "days": 7,
          "periodOrders": 3482,
          "dailyOrders": 497.42857142857144,
          "staff": 3.857142857142857,
          "staffEnd": 3,
          "ordersPerPerson": 128.96296296296296,
          "laborDaily": 1040.2843807859072,
          "previousDailyOrders": 477.57142857142856,
          "wow": 0.0416,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "startDate": "2026-10-02",
          "endDate": "2026-10-08",
          "days": 7,
          "periodOrders": 3496,
          "dailyOrders": 499.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 166.47619047619048,
          "laborDaily": 1010.3332369299222,
          "previousDailyOrders": 497.42857142857144,
          "wow": 0.004,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "startDate": "2026-10-09",
          "endDate": "2026-10-15",
          "days": 7,
          "periodOrders": 3558,
          "dailyOrders": 508.2857142857143,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 169.42857142857142,
          "laborDaily": 1010.3332369299222,
          "previousDailyOrders": 499.42857142857144,
          "wow": 0.0177,
          "comparison": "10/2—10/8"
        },
        {
          "period": "10/16—10/22",
          "startDate": "2026-10-16",
          "endDate": "2026-10-22",
          "days": 7,
          "periodOrders": 3480,
          "dailyOrders": 497.14285714285717,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 124.28571428571429,
          "laborDaily": 1010.3332369299222,
          "previousDailyOrders": 508.2857142857143,
          "wow": -0.0219,
          "comparison": "10/9—10/15"
        },
        {
          "period": "10/18—10/24",
          "startDate": "2026-10-18",
          "endDate": "2026-10-24",
          "days": 7,
          "periodOrders": 3321,
          "dailyOrders": 474.42857142857144,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 118.60714285714286,
          "laborDaily": 1010.3332369299222,
          "previousDailyOrders": 515.4285714285714,
          "wow": -0.0795,
          "comparison": "10/11—10/17"
        },
        {
          "period": "10/25—10/31",
          "startDate": "2026-10-25",
          "endDate": "2026-10-31",
          "days": 7,
          "periodOrders": 3274,
          "dailyOrders": 467.7142857142857,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 116.92857142857143,
          "laborDaily": 1010.3332369299222,
          "previousDailyOrders": 474.42857142857144,
          "wow": -0.0142,
          "comparison": "10/18—10/24"
        },
        {
          "period": "9/1—10/31 全期",
          "startDate": "2026-09-01",
          "endDate": "2026-10-31",
          "days": 61,
          "periodOrders": 29696,
          "dailyOrders": 486.8196721311475,
          "staff": 3.721311475409836,
          "staffEnd": 4,
          "ordersPerPerson": 130.8193832599119,
          "laborDaily": 1027.518319470242,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "monthly": [
        {
          "period": "2026年9月",
          "startDate": "2026-09-01",
          "endDate": "2026-09-30",
          "days": 30,
          "periodOrders": 14457,
          "dailyOrders": 481.9,
          "staff": 3.933333333333333,
          "staffEnd": 4,
          "ordersPerPerson": 122.51694915254237,
          "laborDaily": 1045.2762380952374,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "2026年10月",
          "startDate": "2026-10-01",
          "endDate": "2026-10-31",
          "days": 31,
          "periodOrders": 15239,
          "dailyOrders": 491.5806451612903,
          "staff": 3.5161290322580645,
          "staffEnd": 4,
          "ordersPerPerson": 139.80733944954127,
          "laborDaily": 1010.3332369299214,
          "previousDailyOrders": 481.9,
          "wow": 0.0201,
          "comparison": "9/1—9/30"
        }
      ],
      "gradeHistory": [
        {
          "date": "2026-09-16",
          "grade": "钻石"
        },
        {
          "date": "2026-09-22",
          "grade": "钻石"
        },
        {
          "date": "2026-09-28",
          "grade": "黄金"
        },
        {
          "date": "2026-09-30",
          "grade": "黄金"
        },
        {
          "date": "2026-10-08",
          "grade": "黄金"
        },
        {
          "date": "2026-10-31",
          "grade": "黄金"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "isoDate": "2026-09-01",
          "orders": 477,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/2",
          "isoDate": "2026-09-02",
          "orders": 474,
          "staff": 5,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/3",
          "isoDate": "2026-09-03",
          "orders": 503,
          "staff": 5,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/4",
          "isoDate": "2026-09-04",
          "orders": 446,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/5",
          "isoDate": "2026-09-05",
          "orders": 501,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/6",
          "isoDate": "2026-09-06",
          "orders": 531,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/7",
          "isoDate": "2026-09-07",
          "orders": 460,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/8",
          "isoDate": "2026-09-08",
          "orders": 452,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/9",
          "isoDate": "2026-09-09",
          "orders": 457,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/10",
          "isoDate": "2026-09-10",
          "orders": 440,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/11",
          "isoDate": "2026-09-11",
          "orders": 431,
          "staff": 3,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/12",
          "isoDate": "2026-09-12",
          "orders": 579,
          "staff": 3,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/13",
          "isoDate": "2026-09-13",
          "orders": 546,
          "staff": 3,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/14",
          "isoDate": "2026-09-14",
          "orders": 481,
          "staff": 3,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/15",
          "isoDate": "2026-09-15",
          "orders": 476,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/16",
          "isoDate": "2026-09-16",
          "orders": 432,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/17",
          "isoDate": "2026-09-17",
          "orders": 468,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/18",
          "isoDate": "2026-09-18",
          "orders": 489,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/19",
          "isoDate": "2026-09-19",
          "orders": 551,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/20",
          "isoDate": "2026-09-20",
          "orders": 500,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/21",
          "isoDate": "2026-09-21",
          "orders": 445,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/22",
          "isoDate": "2026-09-22",
          "orders": 431,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/23",
          "isoDate": "2026-09-23",
          "orders": 440,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/24",
          "isoDate": "2026-09-24",
          "orders": 487,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/25",
          "isoDate": "2026-09-25",
          "orders": 609,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/26",
          "isoDate": "2026-09-26",
          "orders": 524,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/27",
          "isoDate": "2026-09-27",
          "orders": 488,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/28",
          "isoDate": "2026-09-28",
          "orders": 435,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/29",
          "isoDate": "2026-09-29",
          "orders": 450,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "9/30",
          "isoDate": "2026-09-30",
          "orders": 454,
          "staff": 4,
          "laborDaily": 1045.2762380952379
        },
        {
          "date": "10/1",
          "isoDate": "2026-10-01",
          "orders": 522,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/2",
          "isoDate": "2026-10-02",
          "orders": 497,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/3",
          "isoDate": "2026-10-03",
          "orders": 519,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/4",
          "isoDate": "2026-10-04",
          "orders": 498,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/5",
          "isoDate": "2026-10-05",
          "orders": 484,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/6",
          "isoDate": "2026-10-06",
          "orders": 494,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/7",
          "isoDate": "2026-10-07",
          "orders": 530,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/8",
          "isoDate": "2026-10-08",
          "orders": 474,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/9",
          "isoDate": "2026-10-09",
          "orders": 483,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/10",
          "isoDate": "2026-10-10",
          "orders": 535,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/11",
          "isoDate": "2026-10-11",
          "orders": 551,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/12",
          "isoDate": "2026-10-12",
          "orders": 481,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/13",
          "isoDate": "2026-10-13",
          "orders": 492,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/14",
          "isoDate": "2026-10-14",
          "orders": 486,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/15",
          "isoDate": "2026-10-15",
          "orders": 530,
          "staff": 3,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/16",
          "isoDate": "2026-10-16",
          "orders": 489,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/17",
          "isoDate": "2026-10-17",
          "orders": 579,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/18",
          "isoDate": "2026-10-18",
          "orders": 538,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/19",
          "isoDate": "2026-10-19",
          "orders": 479,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/20",
          "isoDate": "2026-10-20",
          "orders": 472,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/21",
          "isoDate": "2026-10-21",
          "orders": 488,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/22",
          "isoDate": "2026-10-22",
          "orders": 435,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/23",
          "isoDate": "2026-10-23",
          "orders": 440,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/24",
          "isoDate": "2026-10-24",
          "orders": 469,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/25",
          "isoDate": "2026-10-25",
          "orders": 530,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/26",
          "isoDate": "2026-10-26",
          "orders": 437,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/27",
          "isoDate": "2026-10-27",
          "orders": 446,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/28",
          "isoDate": "2026-10-28",
          "orders": 427,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/29",
          "isoDate": "2026-10-29",
          "orders": 414,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/30",
          "isoDate": "2026-10-30",
          "orders": 449,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        },
        {
          "date": "10/31",
          "isoDate": "2026-10-31",
          "orders": 571,
          "staff": 4,
          "laborDaily": 1010.3332369299222
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 21.1,
          "baseStaff": 2,
          "peakSpeed": 10.6,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 1,
          "recentEstimate": 16.6,
          "baseStaff": 2,
          "peakSpeed": 8.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 11.5,
          "baseStaff": 2,
          "peakSpeed": 5.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 9.4,
          "baseStaff": 2,
          "peakSpeed": 4.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 5.8,
          "baseStaff": 2,
          "peakSpeed": 2.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 5.7,
          "baseStaff": 2,
          "peakSpeed": 2.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 6.7,
          "baseStaff": 2,
          "peakSpeed": 3.4,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 9.5,
          "baseStaff": 2,
          "peakSpeed": 4.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 17.3,
          "baseStaff": 2,
          "peakSpeed": 8.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 17.8,
          "baseStaff": 2,
          "peakSpeed": 8.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 10,
          "recentEstimate": 19.4,
          "baseStaff": 2,
          "peakSpeed": 9.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 11,
          "recentEstimate": 21.8,
          "baseStaff": 2,
          "peakSpeed": 10.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 12,
          "recentEstimate": 22.4,
          "baseStaff": 2,
          "peakSpeed": 11.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 19.3,
          "baseStaff": 2,
          "peakSpeed": 9.6,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 19.3,
          "baseStaff": 2,
          "peakSpeed": 9.6,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 18.7,
          "baseStaff": 2,
          "peakSpeed": 9.4,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 22.6,
          "baseStaff": 2,
          "peakSpeed": 11.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 28.2,
          "baseStaff": 2,
          "peakSpeed": 14.1,
          "conservativeStaff": 3,
          "gap": 3.2
        },
        {
          "hour": 18,
          "recentEstimate": 31.3,
          "baseStaff": 2,
          "peakSpeed": 15.7,
          "conservativeStaff": 3,
          "gap": 6.3
        },
        {
          "hour": 19,
          "recentEstimate": 34.5,
          "baseStaff": 2,
          "peakSpeed": 17.2,
          "conservativeStaff": 3,
          "gap": 9.5
        },
        {
          "hour": 20,
          "recentEstimate": 36.9,
          "baseStaff": 2,
          "peakSpeed": 18.5,
          "conservativeStaff": 3,
          "gap": 11.9
        },
        {
          "hour": 21,
          "recentEstimate": 34.6,
          "baseStaff": 2,
          "peakSpeed": 17.3,
          "conservativeStaff": 3,
          "gap": 9.6
        },
        {
          "hour": 22,
          "recentEstimate": 33,
          "baseStaff": 2,
          "peakSpeed": 16.5,
          "conservativeStaff": 3,
          "gap": 8
        },
        {
          "hour": 23,
          "recentEstimate": 27.9,
          "baseStaff": 2,
          "peakSpeed": 13.9,
          "conservativeStaff": 3,
          "gap": 2.9
        }
      ],
      "judgment": "负荷偏低且订单回落，先查经营与排班原因。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 467.7142857142857 单，环比 -1.4%\n4 人，人均 116.92857142857143 单\n负荷 78.0%，单均人工 2.16 元",
      "rating": {
        "name": "优沃森超市（皮革城店）",
        "grade916": "黄金",
        "score916": 57.7,
        "grade922": "黄金",
        "score922": 83.3,
        "scoreChange": 25.6,
        "display916": 4.2,
        "display922": 4.7,
        "displayChange": 0.5,
        "service922": 5,
        "product922": 4.6,
        "fulfillment922": 4.7,
        "metrics922": {
          "缺货退款率": 86.3,
          "3分钟IM人工回复率": 92.8,
          "配送准时率": 89.3,
          "商品负反馈率": 69.5,
          "有效配送信息回传率": 100,
          "商责介入率": 100,
          "配送时效": 54.4,
          "商品评价分": 76.4
        },
        "shortBoard": "配送时效54.4、商品负反馈率69.5、商品评价分76.4",
        "risk": "商品维度相对较弱；需结合配送时效54.4、商品负反馈率69.5、商品评价分76.4继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "青浦店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 376.42857142857144,
      "ordersPerPerson": 94.10714285714286,
      "wow": -0.0387,
      "laborDaily": 1140.7262513904336,
      "loadRate": 0.6273809523809524,
      "standardOrders": 600,
      "surplusOrders": -223.6,
      "workloadPeople": 2.51,
      "peopleGap": -1.49,
      "dailyChange": -15.1,
      "laborPerOrder": 3.030392318684264,
      "periodOrdersPerPerson": 100.4,
      "periodLoadRate": 0.6694,
      "periodLaborPerOrder": 3.21052565045301,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 0,
      "peakDayOrders": 475,
      "peakDayMinimum": 4,
      "shifts": [
        {
          "label": "A",
          "start": 8,
          "end": 20,
          "count": 1
        },
        {
          "label": "B",
          "start": 12,
          "end": 0,
          "count": 1
        },
        {
          "label": "C",
          "start": 20,
          "end": 8,
          "count": 1
        }
      ],
      "requiredPeakSpeed": 18.7,
      "monthlyShifts": 116,
      "averageDailyAttendance": 3.74,
      "scheduledOrdersPerShift": 100.6,
      "scheduledLoadRate": 0.6706,
      "conservativeDailyShifts": 5,
      "conservativeRegisteredStaff": 6,
      "conservativePlan": {
        "a": "08:00 ×2",
        "b": "12:00 ×1",
        "c": "20:00 ×2"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "startDate": "2026-09-04",
          "endDate": "2026-09-10",
          "days": 7,
          "periodOrders": 1776,
          "dailyOrders": 253.71428571428572,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 84.57142857142857,
          "laborDaily": 1249.798159754224,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "9/11—9/17",
          "startDate": "2026-09-11",
          "endDate": "2026-09-17",
          "days": 7,
          "periodOrders": 2835,
          "dailyOrders": 405,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 135,
          "laborDaily": 1249.798159754224,
          "previousDailyOrders": 253.71428571428572,
          "wow": 0.5963,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "startDate": "2026-09-18",
          "endDate": "2026-09-24",
          "days": 7,
          "periodOrders": 3072,
          "dailyOrders": 438.85714285714283,
          "staff": 3.857142857142857,
          "staffEnd": 4,
          "ordersPerPerson": 113.77777777777777,
          "laborDaily": 1249.798159754224,
          "previousDailyOrders": 405,
          "wow": 0.0836,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "startDate": "2026-09-25",
          "endDate": "2026-10-01",
          "days": 7,
          "periodOrders": 3163,
          "dailyOrders": 451.85714285714283,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 112.96428571428571,
          "laborDaily": 1234.2164585593966,
          "previousDailyOrders": 438.85714285714283,
          "wow": 0.0296,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "startDate": "2026-10-02",
          "endDate": "2026-10-08",
          "days": 7,
          "periodOrders": 2696,
          "dailyOrders": 385.14285714285717,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 96.28571428571429,
          "laborDaily": 1140.7262513904336,
          "previousDailyOrders": 451.85714285714283,
          "wow": -0.1476,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "startDate": "2026-10-09",
          "endDate": "2026-10-15",
          "days": 7,
          "periodOrders": 2890,
          "dailyOrders": 412.85714285714283,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 103.21428571428571,
          "laborDaily": 1140.7262513904336,
          "previousDailyOrders": 385.14285714285717,
          "wow": 0.072,
          "comparison": "10/2—10/8"
        },
        {
          "period": "10/16—10/22",
          "startDate": "2026-10-16",
          "endDate": "2026-10-22",
          "days": 7,
          "periodOrders": 2740,
          "dailyOrders": 391.42857142857144,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 97.85714285714286,
          "laborDaily": 1140.7262513904336,
          "previousDailyOrders": 412.85714285714283,
          "wow": -0.0519,
          "comparison": "10/9—10/15"
        },
        {
          "period": "10/18—10/24",
          "startDate": "2026-10-18",
          "endDate": "2026-10-24",
          "days": 7,
          "periodOrders": 2741,
          "dailyOrders": 391.57142857142856,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 97.89285714285714,
          "laborDaily": 1140.7262513904336,
          "previousDailyOrders": 414.57142857142856,
          "wow": -0.0555,
          "comparison": "10/11—10/17"
        },
        {
          "period": "10/25—10/31",
          "startDate": "2026-10-25",
          "endDate": "2026-10-31",
          "days": 7,
          "periodOrders": 2635,
          "dailyOrders": 376.42857142857144,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 94.10714285714286,
          "laborDaily": 1140.7262513904336,
          "previousDailyOrders": 391.57142857142856,
          "wow": -0.0387,
          "comparison": "10/18—10/24"
        },
        {
          "period": "9/1—10/31 全期",
          "startDate": "2026-09-01",
          "endDate": "2026-10-31",
          "days": 61,
          "periodOrders": 22693,
          "dailyOrders": 372.0163934426229,
          "staff": 3.7049180327868854,
          "staffEnd": 4,
          "ordersPerPerson": 100.41150442477876,
          "laborDaily": 1194.3681735365599,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "monthly": [
        {
          "period": "2026年9月",
          "startDate": "2026-09-01",
          "endDate": "2026-09-30",
          "days": 30,
          "periodOrders": 10453,
          "dailyOrders": 348.43333333333334,
          "staff": 3.4,
          "staffEnd": 4,
          "ordersPerPerson": 102.48039215686275,
          "laborDaily": 1249.798159754224,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "2026年10月",
          "startDate": "2026-10-01",
          "endDate": "2026-10-31",
          "days": 31,
          "periodOrders": 12240,
          "dailyOrders": 394.83870967741933,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 98.70967741935483,
          "laborDaily": 1140.7262513904343,
          "previousDailyOrders": 348.43333333333334,
          "wow": 0.1332,
          "comparison": "9/1—9/30"
        }
      ],
      "gradeHistory": [
        {
          "date": "2026-09-16",
          "grade": "黄金"
        },
        {
          "date": "2026-09-22",
          "grade": "黄金"
        },
        {
          "date": "2026-09-28",
          "grade": "黄金"
        },
        {
          "date": "2026-09-30",
          "grade": "黄金"
        },
        {
          "date": "2026-10-08",
          "grade": "黄金"
        },
        {
          "date": "2026-10-31",
          "grade": "黄金"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "isoDate": "2026-09-01",
          "orders": 0,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/2",
          "isoDate": "2026-09-02",
          "orders": 0,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/3",
          "isoDate": "2026-09-03",
          "orders": 36,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/4",
          "isoDate": "2026-09-04",
          "orders": 66,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/5",
          "isoDate": "2026-09-05",
          "orders": 209,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/6",
          "isoDate": "2026-09-06",
          "orders": 246,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/7",
          "isoDate": "2026-09-07",
          "orders": 235,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/8",
          "isoDate": "2026-09-08",
          "orders": 347,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/9",
          "isoDate": "2026-09-09",
          "orders": 356,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/10",
          "isoDate": "2026-09-10",
          "orders": 317,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/11",
          "isoDate": "2026-09-11",
          "orders": 354,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/12",
          "isoDate": "2026-09-12",
          "orders": 419,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/13",
          "isoDate": "2026-09-13",
          "orders": 440,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/14",
          "isoDate": "2026-09-14",
          "orders": 338,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/15",
          "isoDate": "2026-09-15",
          "orders": 369,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/16",
          "isoDate": "2026-09-16",
          "orders": 444,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/17",
          "isoDate": "2026-09-17",
          "orders": 471,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/18",
          "isoDate": "2026-09-18",
          "orders": 453,
          "staff": 3,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/19",
          "isoDate": "2026-09-19",
          "orders": 478,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/20",
          "isoDate": "2026-09-20",
          "orders": 491,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/21",
          "isoDate": "2026-09-21",
          "orders": 417,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/22",
          "isoDate": "2026-09-22",
          "orders": 365,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/23",
          "isoDate": "2026-09-23",
          "orders": 410,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/24",
          "isoDate": "2026-09-24",
          "orders": 458,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/25",
          "isoDate": "2026-09-25",
          "orders": 502,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/26",
          "isoDate": "2026-09-26",
          "orders": 481,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/27",
          "isoDate": "2026-09-27",
          "orders": 473,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/28",
          "isoDate": "2026-09-28",
          "orders": 414,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/29",
          "isoDate": "2026-09-29",
          "orders": 447,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "9/30",
          "isoDate": "2026-09-30",
          "orders": 417,
          "staff": 4,
          "laborDaily": 1249.798159754224
        },
        {
          "date": "10/1",
          "isoDate": "2026-10-01",
          "orders": 429,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/2",
          "isoDate": "2026-10-02",
          "orders": 369,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/3",
          "isoDate": "2026-10-03",
          "orders": 366,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/4",
          "isoDate": "2026-10-04",
          "orders": 327,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/5",
          "isoDate": "2026-10-05",
          "orders": 403,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/6",
          "isoDate": "2026-10-06",
          "orders": 403,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/7",
          "isoDate": "2026-10-07",
          "orders": 433,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/8",
          "isoDate": "2026-10-08",
          "orders": 395,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/9",
          "isoDate": "2026-10-09",
          "orders": 393,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/10",
          "isoDate": "2026-10-10",
          "orders": 444,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/11",
          "isoDate": "2026-10-11",
          "orders": 465,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/12",
          "isoDate": "2026-10-12",
          "orders": 407,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/13",
          "isoDate": "2026-10-13",
          "orders": 421,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/14",
          "isoDate": "2026-10-14",
          "orders": 373,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/15",
          "isoDate": "2026-10-15",
          "orders": 387,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/16",
          "isoDate": "2026-10-16",
          "orders": 429,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/17",
          "isoDate": "2026-10-17",
          "orders": 420,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/18",
          "isoDate": "2026-10-18",
          "orders": 413,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/19",
          "isoDate": "2026-10-19",
          "orders": 371,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/20",
          "isoDate": "2026-10-20",
          "orders": 401,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/21",
          "isoDate": "2026-10-21",
          "orders": 370,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/22",
          "isoDate": "2026-10-22",
          "orders": 336,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/23",
          "isoDate": "2026-10-23",
          "orders": 430,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/24",
          "isoDate": "2026-10-24",
          "orders": 420,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/25",
          "isoDate": "2026-10-25",
          "orders": 401,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/26",
          "isoDate": "2026-10-26",
          "orders": 351,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/27",
          "isoDate": "2026-10-27",
          "orders": 328,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/28",
          "isoDate": "2026-10-28",
          "orders": 351,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/29",
          "isoDate": "2026-10-29",
          "orders": 390,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/30",
          "isoDate": "2026-10-30",
          "orders": 339,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        },
        {
          "date": "10/31",
          "isoDate": "2026-10-31",
          "orders": 475,
          "staff": 4,
          "laborDaily": 1140.7262513904338
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 13.8,
          "baseStaff": 1,
          "peakSpeed": 13.8,
          "conservativeStaff": 2,
          "gap": 1.3
        },
        {
          "hour": 1,
          "recentEstimate": 9.8,
          "baseStaff": 1,
          "peakSpeed": 9.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 8.1,
          "baseStaff": 1,
          "peakSpeed": 8.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 4.6,
          "baseStaff": 1,
          "peakSpeed": 4.6,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 3.5,
          "baseStaff": 1,
          "peakSpeed": 3.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 3.1,
          "baseStaff": 1,
          "peakSpeed": 3.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 5,
          "baseStaff": 1,
          "peakSpeed": 5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 6.9,
          "baseStaff": 1,
          "peakSpeed": 6.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 13.2,
          "baseStaff": 1,
          "peakSpeed": 13.2,
          "conservativeStaff": 2,
          "gap": 0.7
        },
        {
          "hour": 9,
          "recentEstimate": 14.8,
          "baseStaff": 1,
          "peakSpeed": 14.8,
          "conservativeStaff": 2,
          "gap": 2.3
        },
        {
          "hour": 10,
          "recentEstimate": 16.9,
          "baseStaff": 1,
          "peakSpeed": 16.9,
          "conservativeStaff": 2,
          "gap": 4.4
        },
        {
          "hour": 11,
          "recentEstimate": 18.7,
          "baseStaff": 1,
          "peakSpeed": 18.7,
          "conservativeStaff": 2,
          "gap": 6.2
        },
        {
          "hour": 12,
          "recentEstimate": 19.6,
          "baseStaff": 2,
          "peakSpeed": 9.8,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 19.1,
          "baseStaff": 2,
          "peakSpeed": 9.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 18.5,
          "baseStaff": 2,
          "peakSpeed": 9.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 19.5,
          "baseStaff": 2,
          "peakSpeed": 9.7,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 20.3,
          "baseStaff": 2,
          "peakSpeed": 10.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 23,
          "baseStaff": 2,
          "peakSpeed": 11.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 18,
          "recentEstimate": 28.1,
          "baseStaff": 2,
          "peakSpeed": 14,
          "conservativeStaff": 3,
          "gap": 3.1
        },
        {
          "hour": 19,
          "recentEstimate": 28.6,
          "baseStaff": 2,
          "peakSpeed": 14.3,
          "conservativeStaff": 3,
          "gap": 3.6
        },
        {
          "hour": 20,
          "recentEstimate": 27.6,
          "baseStaff": 2,
          "peakSpeed": 13.8,
          "conservativeStaff": 3,
          "gap": 2.6
        },
        {
          "hour": 21,
          "recentEstimate": 27.4,
          "baseStaff": 2,
          "peakSpeed": 13.7,
          "conservativeStaff": 3,
          "gap": 2.4
        },
        {
          "hour": 22,
          "recentEstimate": 24.9,
          "baseStaff": 2,
          "peakSpeed": 12.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 23,
          "recentEstimate": 20,
          "baseStaff": 2,
          "peakSpeed": 10,
          "conservativeStaff": 3,
          "gap": 0
        }
      ],
      "judgment": "负荷偏低且订单回落，先查经营与排班原因。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 376.42857142857144 单，环比 -3.9%\n4 人，人均 94.10714285714286 单\n负荷 62.7%，单均人工 3.03 元",
      "rating": {
        "name": "优沃森超市（青浦店）",
        "grade916": "黄金",
        "score916": 64.9,
        "grade922": "黄金",
        "score922": 58.9,
        "scoreChange": -6,
        "display916": 4.3,
        "display922": 4.2,
        "displayChange": -0.1,
        "service922": 4.7,
        "product922": 3.7,
        "fulfillment922": 4.9,
        "metrics922": {
          "缺货退款率": 41.9,
          "3分钟IM人工回复率": 100,
          "配送准时率": 89.8,
          "商品负反馈率": 27,
          "有效配送信息回传率": 100,
          "商责介入率": 73.3,
          "配送时效": 83,
          "商品评价分": 21.9
        },
        "shortBoard": "商品评价分21.9、商品负反馈率27、缺货退款率41.9",
        "risk": "商品维度相对较弱；需结合商品评价分21.9、商品负反馈率27、缺货退款率41.9继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "七宝店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 562.4285714285714,
      "ordersPerPerson": 140.60714285714286,
      "wow": -0.0317,
      "laborDaily": 1199.761935483871,
      "loadRate": 0.9373809523809524,
      "standardOrders": 600,
      "surplusOrders": -37.6,
      "workloadPeople": 3.75,
      "peopleGap": -0.25,
      "dailyChange": -18.4,
      "laborPerOrder": 2.133180987652298,
      "periodOrdersPerPerson": 135.6,
      "periodLoadRate": 0.9042,
      "periodLaborPerOrder": 2.4873031945430104,
      "baseDailyShifts": 4,
      "registeredStaff": 5,
      "registeredGap": 1,
      "peakDayOrders": 655,
      "peakDayMinimum": 5,
      "shifts": [
        {
          "label": "A",
          "start": 8,
          "end": 20,
          "count": 2
        },
        {
          "label": "B",
          "start": 12,
          "end": 0,
          "count": 1
        },
        {
          "label": "C",
          "start": 20,
          "end": 8,
          "count": 1
        }
      ],
      "requiredPeakSpeed": 18.8,
      "monthlyShifts": 145,
      "averageDailyAttendance": 4.68,
      "scheduledOrdersPerShift": 120.2,
      "scheduledLoadRate": 0.8016,
      "conservativeDailyShifts": 6,
      "conservativeRegisteredStaff": 7,
      "conservativePlan": {
        "a": "08:00 ×2",
        "b": "12:00 ×2",
        "c": "20:00 ×2"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "startDate": "2026-09-04",
          "endDate": "2026-09-10",
          "days": 7,
          "periodOrders": 4359,
          "dailyOrders": 622.7142857142857,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 207.57142857142856,
          "laborDaily": 1380.4540952380955,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "9/11—9/17",
          "startDate": "2026-09-11",
          "endDate": "2026-09-17",
          "days": 7,
          "periodOrders": 4137,
          "dailyOrders": 591,
          "staff": 3.857142857142857,
          "staffEnd": 4,
          "ordersPerPerson": 153.22222222222223,
          "laborDaily": 1380.4540952380955,
          "previousDailyOrders": 622.7142857142857,
          "wow": -0.0509,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "startDate": "2026-09-18",
          "endDate": "2026-09-24",
          "days": 7,
          "periodOrders": 3757,
          "dailyOrders": 536.7142857142857,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 134.17857142857142,
          "laborDaily": 1380.4540952380955,
          "previousDailyOrders": 591,
          "wow": -0.0919,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "startDate": "2026-09-25",
          "endDate": "2026-10-01",
          "days": 7,
          "periodOrders": 3018,
          "dailyOrders": 431.14285714285717,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 107.78571428571429,
          "laborDaily": 1354.6409295589206,
          "previousDailyOrders": 536.7142857142857,
          "wow": -0.1967,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "startDate": "2026-10-02",
          "endDate": "2026-10-08",
          "days": 7,
          "periodOrders": 2404,
          "dailyOrders": 343.42857142857144,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 85.85714285714286,
          "laborDaily": 1199.761935483871,
          "previousDailyOrders": 431.14285714285717,
          "wow": -0.2034,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "startDate": "2026-10-09",
          "endDate": "2026-10-15",
          "days": 7,
          "periodOrders": 3029,
          "dailyOrders": 432.7142857142857,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 108.17857142857143,
          "laborDaily": 1199.761935483871,
          "previousDailyOrders": 343.42857142857144,
          "wow": 0.26,
          "comparison": "10/2—10/8"
        },
        {
          "period": "10/16—10/22",
          "startDate": "2026-10-16",
          "endDate": "2026-10-22",
          "days": 7,
          "periodOrders": 4090,
          "dailyOrders": 584.2857142857143,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 146.07142857142858,
          "laborDaily": 1199.761935483871,
          "previousDailyOrders": 432.7142857142857,
          "wow": 0.3503,
          "comparison": "10/9—10/15"
        },
        {
          "period": "10/18—10/24",
          "startDate": "2026-10-18",
          "endDate": "2026-10-24",
          "days": 7,
          "periodOrders": 4066,
          "dailyOrders": 580.8571428571429,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 145.21428571428572,
          "laborDaily": 1199.761935483871,
          "previousDailyOrders": 504.85714285714283,
          "wow": 0.1505,
          "comparison": "10/11—10/17"
        },
        {
          "period": "10/25—10/31",
          "startDate": "2026-10-25",
          "endDate": "2026-10-31",
          "days": 7,
          "periodOrders": 3937,
          "dailyOrders": 562.4285714285714,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 140.60714285714286,
          "laborDaily": 1199.761935483871,
          "previousDailyOrders": 580.8571428571429,
          "wow": -0.0317,
          "comparison": "10/18—10/24"
        },
        {
          "period": "9/1—10/31 全期",
          "startDate": "2026-09-01",
          "endDate": "2026-10-31",
          "days": 61,
          "periodOrders": 31603,
          "dailyOrders": 518.0819672131148,
          "staff": 3.819672131147541,
          "staffEnd": 4,
          "ordersPerPerson": 135.6351931330472,
          "laborDaily": 1288.6269320843076,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "monthly": [
        {
          "period": "2026年9月",
          "startDate": "2026-09-01",
          "endDate": "2026-09-30",
          "days": 30,
          "periodOrders": 16568,
          "dailyOrders": 552.2666666666667,
          "staff": 3.6333333333333333,
          "staffEnd": 4,
          "ordersPerPerson": 152,
          "laborDaily": 1380.4540952380949,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "2026年10月",
          "startDate": "2026-10-01",
          "endDate": "2026-10-31",
          "days": 31,
          "periodOrders": 15035,
          "dailyOrders": 485,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 121.25,
          "laborDaily": 1199.761935483871,
          "previousDailyOrders": 552.2666666666667,
          "wow": -0.1218,
          "comparison": "9/1—9/30"
        }
      ],
      "gradeHistory": [
        {
          "date": "2026-09-16",
          "grade": "黄金"
        },
        {
          "date": "2026-09-22",
          "grade": "黄金"
        },
        {
          "date": "2026-09-28",
          "grade": "黄金"
        },
        {
          "date": "2026-09-30",
          "grade": "黄金"
        },
        {
          "date": "2026-10-08",
          "grade": "黄金"
        },
        {
          "date": "2026-10-31",
          "grade": "黄金"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "isoDate": "2026-09-01",
          "orders": 521,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/2",
          "isoDate": "2026-09-02",
          "orders": 608,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/3",
          "isoDate": "2026-09-03",
          "orders": 595,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/4",
          "isoDate": "2026-09-04",
          "orders": 572,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/5",
          "isoDate": "2026-09-05",
          "orders": 623,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/6",
          "isoDate": "2026-09-06",
          "orders": 650,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/7",
          "isoDate": "2026-09-07",
          "orders": 531,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/8",
          "isoDate": "2026-09-08",
          "orders": 637,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/9",
          "isoDate": "2026-09-09",
          "orders": 686,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/10",
          "isoDate": "2026-09-10",
          "orders": 660,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/11",
          "isoDate": "2026-09-11",
          "orders": 597,
          "staff": 3,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/12",
          "isoDate": "2026-09-12",
          "orders": 686,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/13",
          "isoDate": "2026-09-13",
          "orders": 665,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/14",
          "isoDate": "2026-09-14",
          "orders": 582,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/15",
          "isoDate": "2026-09-15",
          "orders": 527,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/16",
          "isoDate": "2026-09-16",
          "orders": 533,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/17",
          "isoDate": "2026-09-17",
          "orders": 547,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/18",
          "isoDate": "2026-09-18",
          "orders": 567,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/19",
          "isoDate": "2026-09-19",
          "orders": 684,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/20",
          "isoDate": "2026-09-20",
          "orders": 594,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/21",
          "isoDate": "2026-09-21",
          "orders": 502,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/22",
          "isoDate": "2026-09-22",
          "orders": 518,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/23",
          "isoDate": "2026-09-23",
          "orders": 440,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/24",
          "isoDate": "2026-09-24",
          "orders": 452,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/25",
          "isoDate": "2026-09-25",
          "orders": 519,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/26",
          "isoDate": "2026-09-26",
          "orders": 508,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/27",
          "isoDate": "2026-09-27",
          "orders": 405,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/28",
          "isoDate": "2026-09-28",
          "orders": 403,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/29",
          "isoDate": "2026-09-29",
          "orders": 392,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "9/30",
          "isoDate": "2026-09-30",
          "orders": 364,
          "staff": 4,
          "laborDaily": 1380.4540952380955
        },
        {
          "date": "10/1",
          "isoDate": "2026-10-01",
          "orders": 427,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/2",
          "isoDate": "2026-10-02",
          "orders": 403,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/3",
          "isoDate": "2026-10-03",
          "orders": 398,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/4",
          "isoDate": "2026-10-04",
          "orders": 334,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/5",
          "isoDate": "2026-10-05",
          "orders": 311,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/6",
          "isoDate": "2026-10-06",
          "orders": 305,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/7",
          "isoDate": "2026-10-07",
          "orders": 359,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/8",
          "isoDate": "2026-10-08",
          "orders": 294,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/9",
          "isoDate": "2026-10-09",
          "orders": 279,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/10",
          "isoDate": "2026-10-10",
          "orders": 388,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/11",
          "isoDate": "2026-10-11",
          "orders": 454,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/12",
          "isoDate": "2026-10-12",
          "orders": 428,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/13",
          "isoDate": "2026-10-13",
          "orders": 462,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/14",
          "isoDate": "2026-10-14",
          "orders": 501,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/15",
          "isoDate": "2026-10-15",
          "orders": 517,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/16",
          "isoDate": "2026-10-16",
          "orders": 559,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/17",
          "isoDate": "2026-10-17",
          "orders": 613,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/18",
          "isoDate": "2026-10-18",
          "orders": 630,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/19",
          "isoDate": "2026-10-19",
          "orders": 595,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/20",
          "isoDate": "2026-10-20",
          "orders": 616,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/21",
          "isoDate": "2026-10-21",
          "orders": 582,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/22",
          "isoDate": "2026-10-22",
          "orders": 495,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/23",
          "isoDate": "2026-10-23",
          "orders": 540,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/24",
          "isoDate": "2026-10-24",
          "orders": 608,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/25",
          "isoDate": "2026-10-25",
          "orders": 589,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/26",
          "isoDate": "2026-10-26",
          "orders": 496,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/27",
          "isoDate": "2026-10-27",
          "orders": 477,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/28",
          "isoDate": "2026-10-28",
          "orders": 564,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/29",
          "isoDate": "2026-10-29",
          "orders": 580,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/30",
          "isoDate": "2026-10-30",
          "orders": 576,
          "staff": 4,
          "laborDaily": 1199.761935483871
        },
        {
          "date": "10/31",
          "isoDate": "2026-10-31",
          "orders": 655,
          "staff": 4,
          "laborDaily": 1199.761935483871
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 14,
          "baseStaff": 1,
          "peakSpeed": 14,
          "conservativeStaff": 2,
          "gap": 1.5
        },
        {
          "hour": 1,
          "recentEstimate": 10.9,
          "baseStaff": 1,
          "peakSpeed": 10.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 8,
          "baseStaff": 1,
          "peakSpeed": 8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 6.4,
          "baseStaff": 1,
          "peakSpeed": 6.4,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 5.2,
          "baseStaff": 1,
          "peakSpeed": 5.2,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 4.7,
          "baseStaff": 1,
          "peakSpeed": 4.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 5.3,
          "baseStaff": 1,
          "peakSpeed": 5.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 8.7,
          "baseStaff": 1,
          "peakSpeed": 8.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 13,
          "baseStaff": 2,
          "peakSpeed": 6.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 18.1,
          "baseStaff": 2,
          "peakSpeed": 9.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 10,
          "recentEstimate": 21.3,
          "baseStaff": 2,
          "peakSpeed": 10.6,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 11,
          "recentEstimate": 23.4,
          "baseStaff": 2,
          "peakSpeed": 11.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 12,
          "recentEstimate": 21.7,
          "baseStaff": 3,
          "peakSpeed": 7.2,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 24.3,
          "baseStaff": 3,
          "peakSpeed": 8.1,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 23.1,
          "baseStaff": 3,
          "peakSpeed": 7.7,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 23.2,
          "baseStaff": 3,
          "peakSpeed": 7.7,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 24.7,
          "baseStaff": 3,
          "peakSpeed": 8.2,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 27.5,
          "baseStaff": 3,
          "peakSpeed": 9.2,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 18,
          "recentEstimate": 30.5,
          "baseStaff": 3,
          "peakSpeed": 10.2,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 19,
          "recentEstimate": 37,
          "baseStaff": 3,
          "peakSpeed": 12.3,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 20,
          "recentEstimate": 37.6,
          "baseStaff": 2,
          "peakSpeed": 18.8,
          "conservativeStaff": 4,
          "gap": 12.6
        },
        {
          "hour": 21,
          "recentEstimate": 35.5,
          "baseStaff": 2,
          "peakSpeed": 17.8,
          "conservativeStaff": 4,
          "gap": 10.5
        },
        {
          "hour": 22,
          "recentEstimate": 35.8,
          "baseStaff": 2,
          "peakSpeed": 17.9,
          "conservativeStaff": 4,
          "gap": 10.8
        },
        {
          "hour": 23,
          "recentEstimate": 25,
          "baseStaff": 2,
          "peakSpeed": 12.5,
          "conservativeStaff": 4,
          "gap": 0
        }
      ],
      "judgment": "负荷接近标准但订单回落，需跟进转化与时段效率。",
      "risk": "订单回落可能继续影响人效和单位人工成本。",
      "action": "复盘订单回落时段和转化原因，调整班次并连续跟踪一周。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 562.4285714285714 单，环比 -3.2%\n4 人，人均 140.60714285714286 单\n负荷 93.7%，单均人工 2.13 元",
      "rating": {
        "name": "优沃森超市（七宝店）",
        "grade916": "黄金",
        "score916": 64.6,
        "grade922": "黄金",
        "score922": 64.6,
        "scoreChange": 0,
        "display916": 4.3,
        "display922": 4.3,
        "displayChange": 0,
        "service922": 4.6,
        "product922": 4,
        "fulfillment922": 4.7,
        "metrics922": {
          "缺货退款率": 77.3,
          "3分钟IM人工回复率": 63.8,
          "配送准时率": 93.4,
          "商品负反馈率": 33.3,
          "有效配送信息回传率": 100,
          "商责介入率": 89,
          "配送时效": 52.3,
          "商品评价分": 53
        },
        "shortBoard": "商品负反馈率33.3、配送时效52.3、商品评价分53",
        "risk": "商品维度相对较弱；需结合商品负反馈率33.3、配送时效52.3、商品评价分53继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "东站店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 421.57142857142856,
      "ordersPerPerson": 105.39285714285714,
      "wow": -0.0369,
      "laborDaily": 887.0759288097887,
      "loadRate": 0.7026190476190476,
      "standardOrders": 600,
      "surplusOrders": -178.4,
      "workloadPeople": 2.81,
      "peopleGap": -1.19,
      "dailyChange": -16.1,
      "laborPerOrder": 2.1042126403485333,
      "periodOrdersPerPerson": 132.6,
      "periodLoadRate": 0.8838,
      "periodLaborPerOrder": 2.1141453943258086,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 0,
      "peakDayOrders": 527,
      "peakDayMinimum": 4,
      "shifts": [
        {
          "label": "A",
          "start": 8,
          "end": 20,
          "count": 1
        },
        {
          "label": "B",
          "start": 12,
          "end": 0,
          "count": 1
        },
        {
          "label": "C",
          "start": 20,
          "end": 8,
          "count": 1
        }
      ],
      "requiredPeakSpeed": 20.5,
      "monthlyShifts": 116,
      "averageDailyAttendance": 3.74,
      "scheduledOrdersPerShift": 112.7,
      "scheduledLoadRate": 0.7511,
      "conservativeDailyShifts": 5,
      "conservativeRegisteredStaff": 6,
      "conservativePlan": {
        "a": "08:00 ×2",
        "b": "12:00 ×1",
        "c": "20:00 ×2"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "startDate": "2026-09-04",
          "endDate": "2026-09-10",
          "days": 7,
          "periodOrders": 3302,
          "dailyOrders": 471.7142857142857,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 157.23809523809524,
          "laborDaily": 942.5343333333332,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "9/11—9/17",
          "startDate": "2026-09-11",
          "endDate": "2026-09-17",
          "days": 7,
          "periodOrders": 3185,
          "dailyOrders": 455,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 151.66666666666666,
          "laborDaily": 942.5343333333332,
          "previousDailyOrders": 471.7142857142857,
          "wow": -0.0354,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "startDate": "2026-09-18",
          "endDate": "2026-09-24",
          "days": 7,
          "periodOrders": 2838,
          "dailyOrders": 405.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 135.14285714285714,
          "laborDaily": 942.5343333333332,
          "previousDailyOrders": 455,
          "wow": -0.1089,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "startDate": "2026-09-25",
          "endDate": "2026-10-01",
          "days": 7,
          "periodOrders": 3020,
          "dailyOrders": 431.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 143.80952380952382,
          "laborDaily": 934.611704115684,
          "previousDailyOrders": 405.42857142857144,
          "wow": 0.0641,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "startDate": "2026-10-02",
          "endDate": "2026-10-08",
          "days": 7,
          "periodOrders": 2944,
          "dailyOrders": 420.57142857142856,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 140.19047619047618,
          "laborDaily": 887.0759288097887,
          "previousDailyOrders": 431.42857142857144,
          "wow": -0.0252,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "startDate": "2026-10-09",
          "endDate": "2026-10-15",
          "days": 7,
          "periodOrders": 2803,
          "dailyOrders": 400.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 133.47619047619048,
          "laborDaily": 887.0759288097887,
          "previousDailyOrders": 420.57142857142856,
          "wow": -0.0479,
          "comparison": "10/2—10/8"
        },
        {
          "period": "10/16—10/22",
          "startDate": "2026-10-16",
          "endDate": "2026-10-22",
          "days": 7,
          "periodOrders": 3086,
          "dailyOrders": 440.85714285714283,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 110.21428571428571,
          "laborDaily": 887.0759288097887,
          "previousDailyOrders": 400.42857142857144,
          "wow": 0.101,
          "comparison": "10/9—10/15"
        },
        {
          "period": "10/18—10/24",
          "startDate": "2026-10-18",
          "endDate": "2026-10-24",
          "days": 7,
          "periodOrders": 3064,
          "dailyOrders": 437.7142857142857,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 109.42857142857143,
          "laborDaily": 887.0759288097887,
          "previousDailyOrders": 415,
          "wow": 0.0547,
          "comparison": "10/11—10/17"
        },
        {
          "period": "10/25—10/31",
          "startDate": "2026-10-25",
          "endDate": "2026-10-31",
          "days": 7,
          "periodOrders": 2951,
          "dailyOrders": 421.57142857142856,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 105.39285714285714,
          "laborDaily": 887.0759288097887,
          "previousDailyOrders": 437.7142857142857,
          "wow": -0.0369,
          "comparison": "10/18—10/24"
        },
        {
          "period": "9/1—10/31 全期",
          "startDate": "2026-09-01",
          "endDate": "2026-10-31",
          "days": 61,
          "periodOrders": 26382,
          "dailyOrders": 432.4918032786885,
          "staff": 3.262295081967213,
          "staffEnd": 4,
          "ordersPerPerson": 132.57286432160805,
          "laborDaily": 914.350553985303,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "monthly": [
        {
          "period": "2026年9月",
          "startDate": "2026-09-01",
          "endDate": "2026-09-30",
          "days": 30,
          "periodOrders": 13284,
          "dailyOrders": 442.8,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 147.6,
          "laborDaily": 942.5343333333332,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "2026年10月",
          "startDate": "2026-10-01",
          "endDate": "2026-10-31",
          "days": 31,
          "periodOrders": 13098,
          "dailyOrders": 422.51612903225805,
          "staff": 3.5161290322580645,
          "staffEnd": 4,
          "ordersPerPerson": 120.1651376146789,
          "laborDaily": 887.075928809788,
          "previousDailyOrders": 442.8,
          "wow": -0.0458,
          "comparison": "9/1—9/30"
        }
      ],
      "gradeHistory": [
        {
          "date": "2026-09-16",
          "grade": "黄金"
        },
        {
          "date": "2026-09-22",
          "grade": "黄金"
        },
        {
          "date": "2026-09-28",
          "grade": "黄金"
        },
        {
          "date": "2026-09-30",
          "grade": "黄金"
        },
        {
          "date": "2026-10-08",
          "grade": "黄金"
        },
        {
          "date": "2026-10-31",
          "grade": "黄金"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "isoDate": "2026-09-01",
          "orders": 491,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/2",
          "isoDate": "2026-09-02",
          "orders": 446,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/3",
          "isoDate": "2026-09-03",
          "orders": 447,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/4",
          "isoDate": "2026-09-04",
          "orders": 440,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/5",
          "isoDate": "2026-09-05",
          "orders": 525,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/6",
          "isoDate": "2026-09-06",
          "orders": 548,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/7",
          "isoDate": "2026-09-07",
          "orders": 447,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/8",
          "isoDate": "2026-09-08",
          "orders": 453,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/9",
          "isoDate": "2026-09-09",
          "orders": 503,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/10",
          "isoDate": "2026-09-10",
          "orders": 386,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/11",
          "isoDate": "2026-09-11",
          "orders": 411,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/12",
          "isoDate": "2026-09-12",
          "orders": 518,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/13",
          "isoDate": "2026-09-13",
          "orders": 543,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/14",
          "isoDate": "2026-09-14",
          "orders": 460,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/15",
          "isoDate": "2026-09-15",
          "orders": 397,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/16",
          "isoDate": "2026-09-16",
          "orders": 419,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/17",
          "isoDate": "2026-09-17",
          "orders": 437,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/18",
          "isoDate": "2026-09-18",
          "orders": 396,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/19",
          "isoDate": "2026-09-19",
          "orders": 460,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/20",
          "isoDate": "2026-09-20",
          "orders": 443,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/21",
          "isoDate": "2026-09-21",
          "orders": 353,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/22",
          "isoDate": "2026-09-22",
          "orders": 398,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/23",
          "isoDate": "2026-09-23",
          "orders": 382,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/24",
          "isoDate": "2026-09-24",
          "orders": 406,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/25",
          "isoDate": "2026-09-25",
          "orders": 496,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/26",
          "isoDate": "2026-09-26",
          "orders": 431,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/27",
          "isoDate": "2026-09-27",
          "orders": 459,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/28",
          "isoDate": "2026-09-28",
          "orders": 374,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/29",
          "isoDate": "2026-09-29",
          "orders": 447,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "9/30",
          "isoDate": "2026-09-30",
          "orders": 368,
          "staff": 3,
          "laborDaily": 942.5343333333333
        },
        {
          "date": "10/1",
          "isoDate": "2026-10-01",
          "orders": 445,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/2",
          "isoDate": "2026-10-02",
          "orders": 417,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/3",
          "isoDate": "2026-10-03",
          "orders": 435,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/4",
          "isoDate": "2026-10-04",
          "orders": 374,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/5",
          "isoDate": "2026-10-05",
          "orders": 439,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/6",
          "isoDate": "2026-10-06",
          "orders": 415,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/7",
          "isoDate": "2026-10-07",
          "orders": 438,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/8",
          "isoDate": "2026-10-08",
          "orders": 426,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/9",
          "isoDate": "2026-10-09",
          "orders": 373,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/10",
          "isoDate": "2026-10-10",
          "orders": 416,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/11",
          "isoDate": "2026-10-11",
          "orders": 462,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/12",
          "isoDate": "2026-10-12",
          "orders": 428,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/13",
          "isoDate": "2026-10-13",
          "orders": 354,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/14",
          "isoDate": "2026-10-14",
          "orders": 379,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/15",
          "isoDate": "2026-10-15",
          "orders": 391,
          "staff": 3,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/16",
          "isoDate": "2026-10-16",
          "orders": 412,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/17",
          "isoDate": "2026-10-17",
          "orders": 479,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/18",
          "isoDate": "2026-10-18",
          "orders": 511,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/19",
          "isoDate": "2026-10-19",
          "orders": 432,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/20",
          "isoDate": "2026-10-20",
          "orders": 443,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/21",
          "isoDate": "2026-10-21",
          "orders": 403,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/22",
          "isoDate": "2026-10-22",
          "orders": 406,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/23",
          "isoDate": "2026-10-23",
          "orders": 393,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/24",
          "isoDate": "2026-10-24",
          "orders": 476,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/25",
          "isoDate": "2026-10-25",
          "orders": 457,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/26",
          "isoDate": "2026-10-26",
          "orders": 398,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/27",
          "isoDate": "2026-10-27",
          "orders": 393,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/28",
          "isoDate": "2026-10-28",
          "orders": 396,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/29",
          "isoDate": "2026-10-29",
          "orders": 361,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/30",
          "isoDate": "2026-10-30",
          "orders": 419,
          "staff": 4,
          "laborDaily": 887.0759288097886
        },
        {
          "date": "10/31",
          "isoDate": "2026-10-31",
          "orders": 527,
          "staff": 4,
          "laborDaily": 887.0759288097886
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 12.3,
          "baseStaff": 1,
          "peakSpeed": 12.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 1,
          "recentEstimate": 8,
          "baseStaff": 1,
          "peakSpeed": 8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 5.5,
          "baseStaff": 1,
          "peakSpeed": 5.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 3.7,
          "baseStaff": 1,
          "peakSpeed": 3.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 2.9,
          "baseStaff": 1,
          "peakSpeed": 2.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 2.5,
          "baseStaff": 1,
          "peakSpeed": 2.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 3.5,
          "baseStaff": 1,
          "peakSpeed": 3.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 8.3,
          "baseStaff": 1,
          "peakSpeed": 8.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 12.8,
          "baseStaff": 1,
          "peakSpeed": 12.8,
          "conservativeStaff": 2,
          "gap": 0.3
        },
        {
          "hour": 9,
          "recentEstimate": 15.5,
          "baseStaff": 1,
          "peakSpeed": 15.5,
          "conservativeStaff": 2,
          "gap": 3
        },
        {
          "hour": 10,
          "recentEstimate": 19.2,
          "baseStaff": 1,
          "peakSpeed": 19.2,
          "conservativeStaff": 2,
          "gap": 6.7
        },
        {
          "hour": 11,
          "recentEstimate": 20.5,
          "baseStaff": 1,
          "peakSpeed": 20.5,
          "conservativeStaff": 2,
          "gap": 8
        },
        {
          "hour": 12,
          "recentEstimate": 21,
          "baseStaff": 2,
          "peakSpeed": 10.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 19.9,
          "baseStaff": 2,
          "peakSpeed": 10,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 20.2,
          "baseStaff": 2,
          "peakSpeed": 10.1,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 19.7,
          "baseStaff": 2,
          "peakSpeed": 9.9,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 22.1,
          "baseStaff": 2,
          "peakSpeed": 11.1,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 26.6,
          "baseStaff": 2,
          "peakSpeed": 13.3,
          "conservativeStaff": 3,
          "gap": 1.6
        },
        {
          "hour": 18,
          "recentEstimate": 31.8,
          "baseStaff": 2,
          "peakSpeed": 15.9,
          "conservativeStaff": 3,
          "gap": 6.8
        },
        {
          "hour": 19,
          "recentEstimate": 32.3,
          "baseStaff": 2,
          "peakSpeed": 16.2,
          "conservativeStaff": 3,
          "gap": 7.3
        },
        {
          "hour": 20,
          "recentEstimate": 32.3,
          "baseStaff": 2,
          "peakSpeed": 16.2,
          "conservativeStaff": 3,
          "gap": 7.3
        },
        {
          "hour": 21,
          "recentEstimate": 34.4,
          "baseStaff": 2,
          "peakSpeed": 17.2,
          "conservativeStaff": 3,
          "gap": 9.4
        },
        {
          "hour": 22,
          "recentEstimate": 27.7,
          "baseStaff": 2,
          "peakSpeed": 13.9,
          "conservativeStaff": 3,
          "gap": 2.7
        },
        {
          "hour": 23,
          "recentEstimate": 19.6,
          "baseStaff": 2,
          "peakSpeed": 9.8,
          "conservativeStaff": 3,
          "gap": 0
        }
      ],
      "judgment": "负荷偏低且订单回落，先查经营与排班原因。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 421.57142857142856 单，环比 -3.7%\n4 人，人均 105.39285714285714 单\n负荷 70.3%，单均人工 2.10 元",
      "rating": {
        "name": "优沃森超市（东站店）",
        "grade916": "黄金",
        "score916": 63.6,
        "grade922": "黄金",
        "score922": 68.8,
        "scoreChange": 5.2,
        "display916": 4.3,
        "display922": 4.4,
        "displayChange": 0.1,
        "service922": 5,
        "product922": 4,
        "fulfillment922": 4.6,
        "metrics922": {
          "缺货退款率": 72.1,
          "3分钟IM人工回复率": 100,
          "配送准时率": 86.3,
          "商品负反馈率": 36.4,
          "有效配送信息回传率": 100,
          "商责介入率": 100,
          "配送时效": 35.7,
          "商品评价分": 36.8
        },
        "shortBoard": "配送时效35.7、商品负反馈率36.4、商品评价分36.8",
        "risk": "商品维度相对较弱；需结合配送时效35.7、商品负反馈率36.4、商品评价分36.8继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "洛社店",
      "staff": 3,
      "staffEnd": 3,
      "dailyOrders": 410.85714285714283,
      "ordersPerPerson": 136.95238095238093,
      "wow": -0.0764,
      "laborDaily": 833.3842936596218,
      "loadRate": 0.913015873015873,
      "standardOrders": 450,
      "surplusOrders": -39.1,
      "workloadPeople": 2.74,
      "peopleGap": -0.26,
      "dailyChange": -34,
      "laborPerOrder": 2.028404052718134,
      "periodOrdersPerPerson": 102.8,
      "periodLoadRate": 0.6851,
      "periodLaborPerOrder": 2.805804306345209,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 1,
      "peakDayOrders": 487,
      "peakDayMinimum": 4,
      "shifts": [
        {
          "label": "A",
          "start": 8,
          "end": 20,
          "count": 1
        },
        {
          "label": "B",
          "start": 12,
          "end": 0,
          "count": 1
        },
        {
          "label": "C",
          "start": 20,
          "end": 8,
          "count": 1
        }
      ],
      "requiredPeakSpeed": 21,
      "monthlyShifts": 116,
      "averageDailyAttendance": 3.74,
      "scheduledOrdersPerShift": 109.8,
      "scheduledLoadRate": 0.732,
      "conservativeDailyShifts": 5,
      "conservativeRegisteredStaff": 6,
      "conservativePlan": {
        "a": "08:00 ×2",
        "b": "12:00 ×1",
        "c": "20:00 ×2"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "startDate": "2026-09-04",
          "endDate": "2026-09-10",
          "days": 7,
          "periodOrders": 0,
          "dailyOrders": 0,
          "staff": 0,
          "staffEnd": 0,
          "ordersPerPerson": null,
          "laborDaily": 609.4517936507935,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "9/11—9/17",
          "startDate": "2026-09-11",
          "endDate": "2026-09-17",
          "days": 7,
          "periodOrders": 0,
          "dailyOrders": 0,
          "staff": 2.857142857142857,
          "staffEnd": 3,
          "ordersPerPerson": 0,
          "laborDaily": 609.4517936507935,
          "previousDailyOrders": 0,
          "wow": null,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "startDate": "2026-09-18",
          "endDate": "2026-09-24",
          "days": 7,
          "periodOrders": 286,
          "dailyOrders": 40.857142857142854,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 13.619047619047619,
          "laborDaily": 609.4517936507935,
          "previousDailyOrders": 0,
          "wow": null,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "startDate": "2026-09-25",
          "endDate": "2026-10-01",
          "days": 7,
          "periodOrders": 2636,
          "dailyOrders": 376.57142857142856,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 125.52380952380952,
          "laborDaily": 641.4421507949119,
          "previousDailyOrders": 40.857142857142854,
          "wow": 8.2168,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "startDate": "2026-10-02",
          "endDate": "2026-10-08",
          "days": 7,
          "periodOrders": 2767,
          "dailyOrders": 395.2857142857143,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 131.76190476190476,
          "laborDaily": 833.3842936596218,
          "previousDailyOrders": 376.57142857142856,
          "wow": 0.0497,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "startDate": "2026-10-09",
          "endDate": "2026-10-15",
          "days": 7,
          "periodOrders": 3125,
          "dailyOrders": 446.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 148.80952380952382,
          "laborDaily": 833.3842936596218,
          "previousDailyOrders": 395.2857142857143,
          "wow": 0.1294,
          "comparison": "10/2—10/8"
        },
        {
          "period": "10/16—10/22",
          "startDate": "2026-10-16",
          "endDate": "2026-10-22",
          "days": 7,
          "periodOrders": 3087,
          "dailyOrders": 441,
          "staff": 3.142857142857143,
          "staffEnd": 3,
          "ordersPerPerson": 140.3181818181818,
          "laborDaily": 833.3842936596218,
          "previousDailyOrders": 446.42857142857144,
          "wow": -0.0122,
          "comparison": "10/9—10/15"
        },
        {
          "period": "10/18—10/24",
          "startDate": "2026-10-18",
          "endDate": "2026-10-24",
          "days": 7,
          "periodOrders": 3114,
          "dailyOrders": 444.85714285714283,
          "staff": 3.142857142857143,
          "staffEnd": 3,
          "ordersPerPerson": 141.54545454545453,
          "laborDaily": 833.3842936596218,
          "previousDailyOrders": 458.2857142857143,
          "wow": -0.0293,
          "comparison": "10/11—10/17"
        },
        {
          "period": "10/25—10/31",
          "startDate": "2026-10-25",
          "endDate": "2026-10-31",
          "days": 7,
          "periodOrders": 2876,
          "dailyOrders": 410.85714285714283,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 136.95238095238093,
          "laborDaily": 833.3842936596218,
          "previousDailyOrders": 444.85714285714283,
          "wow": -0.0764,
          "comparison": "10/18—10/24"
        },
        {
          "period": "9/1—10/31 全期",
          "startDate": "2026-09-01",
          "endDate": "2026-10-31",
          "days": 61,
          "periodOrders": 15724,
          "dailyOrders": 257.7704918032787,
          "staff": 2.5081967213114753,
          "staffEnd": 3,
          "ordersPerPerson": 102.77124183006536,
          "laborDaily": 723.2535559503617,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "monthly": [
        {
          "period": "2026年9月",
          "startDate": "2026-09-01",
          "endDate": "2026-09-30",
          "days": 30,
          "periodOrders": 2445,
          "dailyOrders": 81.5,
          "staff": 1.9666666666666666,
          "staffEnd": 3,
          "ordersPerPerson": 41.440677966101696,
          "laborDaily": 609.4517936507933,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "2026年10月",
          "startDate": "2026-10-01",
          "endDate": "2026-10-31",
          "days": 31,
          "periodOrders": 13279,
          "dailyOrders": 428.35483870967744,
          "staff": 3.032258064516129,
          "staffEnd": 3,
          "ordersPerPerson": 141.26595744680853,
          "laborDaily": 833.384293659622,
          "previousDailyOrders": 81.5,
          "wow": 4.2559,
          "comparison": "9/1—9/30"
        }
      ],
      "gradeHistory": [
        {
          "date": "2026-09-28",
          "grade": "黄金"
        },
        {
          "date": "2026-09-30",
          "grade": "黄金"
        },
        {
          "date": "2026-10-08",
          "grade": "黄金"
        },
        {
          "date": "2026-10-31",
          "grade": "黄金"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "isoDate": "2026-09-01",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/2",
          "isoDate": "2026-09-02",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/3",
          "isoDate": "2026-09-03",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/4",
          "isoDate": "2026-09-04",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/5",
          "isoDate": "2026-09-05",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/6",
          "isoDate": "2026-09-06",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/7",
          "isoDate": "2026-09-07",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/8",
          "isoDate": "2026-09-08",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/9",
          "isoDate": "2026-09-09",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/10",
          "isoDate": "2026-09-10",
          "orders": 0,
          "staff": 0,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/11",
          "isoDate": "2026-09-11",
          "orders": 0,
          "staff": 2,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/12",
          "isoDate": "2026-09-12",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/13",
          "isoDate": "2026-09-13",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/14",
          "isoDate": "2026-09-14",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/15",
          "isoDate": "2026-09-15",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/16",
          "isoDate": "2026-09-16",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/17",
          "isoDate": "2026-09-17",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/18",
          "isoDate": "2026-09-18",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/19",
          "isoDate": "2026-09-19",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/20",
          "isoDate": "2026-09-20",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/21",
          "isoDate": "2026-09-21",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/22",
          "isoDate": "2026-09-22",
          "orders": 0,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/23",
          "isoDate": "2026-09-23",
          "orders": 81,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/24",
          "isoDate": "2026-09-24",
          "orders": 205,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/25",
          "isoDate": "2026-09-25",
          "orders": 362,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/26",
          "isoDate": "2026-09-26",
          "orders": 352,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/27",
          "isoDate": "2026-09-27",
          "orders": 378,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/28",
          "isoDate": "2026-09-28",
          "orders": 310,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/29",
          "isoDate": "2026-09-29",
          "orders": 379,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "9/30",
          "isoDate": "2026-09-30",
          "orders": 378,
          "staff": 3,
          "laborDaily": 609.4517936507935
        },
        {
          "date": "10/1",
          "isoDate": "2026-10-01",
          "orders": 477,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/2",
          "isoDate": "2026-10-02",
          "orders": 406,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/3",
          "isoDate": "2026-10-03",
          "orders": 374,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/4",
          "isoDate": "2026-10-04",
          "orders": 347,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/5",
          "isoDate": "2026-10-05",
          "orders": 388,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/6",
          "isoDate": "2026-10-06",
          "orders": 368,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/7",
          "isoDate": "2026-10-07",
          "orders": 468,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/8",
          "isoDate": "2026-10-08",
          "orders": 416,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/9",
          "isoDate": "2026-10-09",
          "orders": 387,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/10",
          "isoDate": "2026-10-10",
          "orders": 450,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/11",
          "isoDate": "2026-10-11",
          "orders": 521,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/12",
          "isoDate": "2026-10-12",
          "orders": 434,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/13",
          "isoDate": "2026-10-13",
          "orders": 426,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/14",
          "isoDate": "2026-10-14",
          "orders": 457,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/15",
          "isoDate": "2026-10-15",
          "orders": 450,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/16",
          "isoDate": "2026-10-16",
          "orders": 434,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/17",
          "isoDate": "2026-10-17",
          "orders": 486,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/18",
          "isoDate": "2026-10-18",
          "orders": 454,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/19",
          "isoDate": "2026-10-19",
          "orders": 439,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/20",
          "isoDate": "2026-10-20",
          "orders": 396,
          "staff": 4,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/21",
          "isoDate": "2026-10-21",
          "orders": 433,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/22",
          "isoDate": "2026-10-22",
          "orders": 445,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/23",
          "isoDate": "2026-10-23",
          "orders": 459,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/24",
          "isoDate": "2026-10-24",
          "orders": 488,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/25",
          "isoDate": "2026-10-25",
          "orders": 433,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/26",
          "isoDate": "2026-10-26",
          "orders": 392,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/27",
          "isoDate": "2026-10-27",
          "orders": 390,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/28",
          "isoDate": "2026-10-28",
          "orders": 381,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/29",
          "isoDate": "2026-10-29",
          "orders": 406,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/30",
          "isoDate": "2026-10-30",
          "orders": 387,
          "staff": 3,
          "laborDaily": 833.3842936596217
        },
        {
          "date": "10/31",
          "isoDate": "2026-10-31",
          "orders": 487,
          "staff": 3,
          "laborDaily": 833.3842936596217
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 16.8,
          "baseStaff": 1,
          "peakSpeed": 16.8,
          "conservativeStaff": 2,
          "gap": 4.3
        },
        {
          "hour": 1,
          "recentEstimate": 10.2,
          "baseStaff": 1,
          "peakSpeed": 10.2,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 7.8,
          "baseStaff": 1,
          "peakSpeed": 7.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 5.3,
          "baseStaff": 1,
          "peakSpeed": 5.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 3.5,
          "baseStaff": 1,
          "peakSpeed": 3.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 3.2,
          "baseStaff": 1,
          "peakSpeed": 3.2,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 4.1,
          "baseStaff": 1,
          "peakSpeed": 4.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 6.8,
          "baseStaff": 1,
          "peakSpeed": 6.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 11.7,
          "baseStaff": 1,
          "peakSpeed": 11.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 17,
          "baseStaff": 1,
          "peakSpeed": 17,
          "conservativeStaff": 2,
          "gap": 4.5
        },
        {
          "hour": 10,
          "recentEstimate": 18.5,
          "baseStaff": 1,
          "peakSpeed": 18.5,
          "conservativeStaff": 2,
          "gap": 6
        },
        {
          "hour": 11,
          "recentEstimate": 21,
          "baseStaff": 1,
          "peakSpeed": 21,
          "conservativeStaff": 2,
          "gap": 8.5
        },
        {
          "hour": 12,
          "recentEstimate": 20.2,
          "baseStaff": 2,
          "peakSpeed": 10.1,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 20.4,
          "baseStaff": 2,
          "peakSpeed": 10.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 17.8,
          "baseStaff": 2,
          "peakSpeed": 8.9,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 21.1,
          "baseStaff": 2,
          "peakSpeed": 10.6,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 21.9,
          "baseStaff": 2,
          "peakSpeed": 11,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 26.2,
          "baseStaff": 2,
          "peakSpeed": 13.1,
          "conservativeStaff": 3,
          "gap": 1.2
        },
        {
          "hour": 18,
          "recentEstimate": 29.7,
          "baseStaff": 2,
          "peakSpeed": 14.9,
          "conservativeStaff": 3,
          "gap": 4.7
        },
        {
          "hour": 19,
          "recentEstimate": 31.8,
          "baseStaff": 2,
          "peakSpeed": 15.9,
          "conservativeStaff": 3,
          "gap": 6.8
        },
        {
          "hour": 20,
          "recentEstimate": 32.2,
          "baseStaff": 2,
          "peakSpeed": 16.1,
          "conservativeStaff": 3,
          "gap": 7.2
        },
        {
          "hour": 21,
          "recentEstimate": 32.9,
          "baseStaff": 2,
          "peakSpeed": 16.5,
          "conservativeStaff": 3,
          "gap": 7.9
        },
        {
          "hour": 22,
          "recentEstimate": 27.2,
          "baseStaff": 2,
          "peakSpeed": 13.6,
          "conservativeStaff": 3,
          "gap": 2.2
        },
        {
          "hour": 23,
          "recentEstimate": 21.2,
          "baseStaff": 2,
          "peakSpeed": 10.6,
          "conservativeStaff": 3,
          "gap": 0
        }
      ],
      "judgment": "负荷接近标准但订单回落，需跟进转化与时段效率。",
      "risk": "订单回落可能继续影响人效和单位人工成本。",
      "action": "复盘订单回落时段和转化原因，调整班次并连续跟踪一周。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 410.85714285714283 单，环比 -7.6%\n3 人，人均 136.95238095238093 单\n负荷 91.3%，单均人工 2.03 元",
      "rating": {
        "name": "优沃森超市（洛社店）",
        "grade916": "黄金",
        "score916": 70.4,
        "grade922": "黄金",
        "score922": 63.5,
        "scoreChange": -6.9,
        "display916": 4.5,
        "display922": 4.3,
        "displayChange": -0.2,
        "service922": 4.9,
        "product922": 3.8,
        "fulfillment922": 4.6,
        "metrics922": {
          "缺货退款率": 79.7,
          "3分钟IM人工回复率": 86.7,
          "配送准时率": 83.3,
          "商品负反馈率": 19.9,
          "有效配送信息回传率": 100,
          "商责介入率": 100,
          "配送时效": 38.4,
          "商品评价分": 40.6
        },
        "shortBoard": "商品负反馈率19.9、配送时效38.4、商品评价分40.6",
        "risk": "商品维度相对较弱；需结合商品负反馈率19.9、配送时效38.4、商品评价分40.6继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "滨湖店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 161.71428571428572,
      "ordersPerPerson": 40.42857142857143,
      "wow": -0.1914,
      "laborDaily": 792.4471412680754,
      "loadRate": 0.26952380952380955,
      "standardOrders": 600,
      "surplusOrders": -438.3,
      "workloadPeople": 1.08,
      "peopleGap": -2.92,
      "dailyChange": -38.3,
      "laborPerOrder": 4.900291509608239,
      "periodOrdersPerPerson": 38.9,
      "periodLoadRate": 0.2595,
      "periodLaborPerOrder": 6.308918638922983,
      "baseDailyShifts": 2,
      "registeredStaff": 3,
      "registeredGap": -1,
      "peakDayOrders": 202,
      "peakDayMinimum": 2,
      "shifts": [
        {
          "label": "A",
          "start": 8,
          "end": 20,
          "count": 1
        },
        {
          "label": "C",
          "start": 20,
          "end": 8,
          "count": 1
        }
      ],
      "requiredPeakSpeed": 14.2,
      "monthlyShifts": 87,
      "averageDailyAttendance": 2.81,
      "scheduledOrdersPerShift": 57.6,
      "scheduledLoadRate": 0.3841,
      "conservativeDailyShifts": 3,
      "conservativeRegisteredStaff": 4,
      "conservativePlan": {
        "a": "08:00 ×1",
        "b": "12:00 ×1",
        "c": "20:00 ×1"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "startDate": "2026-09-04",
          "endDate": "2026-09-10",
          "days": 7,
          "periodOrders": 0,
          "dailyOrders": 0,
          "staff": 0.42857142857142855,
          "staffEnd": 3,
          "ordersPerPerson": 0,
          "laborDaily": 581.087,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "9/11—9/17",
          "startDate": "2026-09-11",
          "endDate": "2026-09-17",
          "days": 7,
          "periodOrders": 0,
          "dailyOrders": 0,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 0,
          "laborDaily": 581.087,
          "previousDailyOrders": 0,
          "wow": null,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "startDate": "2026-09-18",
          "endDate": "2026-09-24",
          "days": 7,
          "periodOrders": 39,
          "dailyOrders": 5.571428571428571,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 1.857142857142857,
          "laborDaily": 581.087,
          "previousDailyOrders": 0,
          "wow": null,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "startDate": "2026-09-25",
          "endDate": "2026-10-01",
          "days": 7,
          "periodOrders": 1100,
          "dailyOrders": 157.14285714285714,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 52.38095238095238,
          "laborDaily": 611.2813058954392,
          "previousDailyOrders": 5.571428571428571,
          "wow": 27.2051,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "startDate": "2026-10-02",
          "endDate": "2026-10-08",
          "days": 7,
          "periodOrders": 1276,
          "dailyOrders": 182.28571428571428,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 60.76190476190476,
          "laborDaily": 792.4471412680754,
          "previousDailyOrders": 157.14285714285714,
          "wow": 0.16,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "startDate": "2026-10-09",
          "endDate": "2026-10-15",
          "days": 7,
          "periodOrders": 1320,
          "dailyOrders": 188.57142857142858,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 62.85714285714286,
          "laborDaily": 792.4471412680754,
          "previousDailyOrders": 182.28571428571428,
          "wow": 0.0345,
          "comparison": "10/2—10/8"
        },
        {
          "period": "10/16—10/22",
          "startDate": "2026-10-16",
          "endDate": "2026-10-22",
          "days": 7,
          "periodOrders": 1353,
          "dailyOrders": 193.28571428571428,
          "staff": 3.857142857142857,
          "staffEnd": 4,
          "ordersPerPerson": 50.11111111111111,
          "laborDaily": 792.4471412680754,
          "previousDailyOrders": 188.57142857142858,
          "wow": 0.025,
          "comparison": "10/9—10/15"
        },
        {
          "period": "10/18—10/24",
          "startDate": "2026-10-18",
          "endDate": "2026-10-24",
          "days": 7,
          "periodOrders": 1400,
          "dailyOrders": 200,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 50,
          "laborDaily": 792.4471412680754,
          "previousDailyOrders": 191.28571428571428,
          "wow": 0.0456,
          "comparison": "10/11—10/17"
        },
        {
          "period": "10/25—10/31",
          "startDate": "2026-10-25",
          "endDate": "2026-10-31",
          "days": 7,
          "periodOrders": 1132,
          "dailyOrders": 161.71428571428572,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 40.42857142857143,
          "laborDaily": 792.4471412680754,
          "previousDailyOrders": 200,
          "wow": -0.1914,
          "comparison": "10/18—10/24"
        },
        {
          "period": "9/1—10/31 全期",
          "startDate": "2026-09-01",
          "endDate": "2026-10-31",
          "days": 61,
          "periodOrders": 6657,
          "dailyOrders": 109.1311475409836,
          "staff": 2.80327868852459,
          "staffEnd": 4,
          "ordersPerPerson": 38.929824561403514,
          "laborDaily": 688.4995308083655,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "monthly": [
        {
          "period": "2026年9月",
          "startDate": "2026-09-01",
          "endDate": "2026-09-30",
          "days": 30,
          "periodOrders": 928,
          "dailyOrders": 30.933333333333334,
          "staff": 2.1,
          "staffEnd": 3,
          "ordersPerPerson": 14.73015873015873,
          "laborDaily": 581.0869999999996,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "源表缺少完整前一周期"
        },
        {
          "period": "2026年10月",
          "startDate": "2026-10-01",
          "endDate": "2026-10-31",
          "days": 31,
          "periodOrders": 5729,
          "dailyOrders": 184.80645161290323,
          "staff": 3.4838709677419355,
          "staffEnd": 4,
          "ordersPerPerson": 53.0462962962963,
          "laborDaily": 792.4471412680758,
          "previousDailyOrders": 30.933333333333334,
          "wow": 4.9743,
          "comparison": "9/1—9/30"
        }
      ],
      "gradeHistory": [],
      "daily": [
        {
          "date": "9/1",
          "isoDate": "2026-09-01",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/2",
          "isoDate": "2026-09-02",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/3",
          "isoDate": "2026-09-03",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/4",
          "isoDate": "2026-09-04",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/5",
          "isoDate": "2026-09-05",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/6",
          "isoDate": "2026-09-06",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/7",
          "isoDate": "2026-09-07",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/8",
          "isoDate": "2026-09-08",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/9",
          "isoDate": "2026-09-09",
          "orders": 0,
          "staff": 0,
          "laborDaily": 581.087
        },
        {
          "date": "9/10",
          "isoDate": "2026-09-10",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/11",
          "isoDate": "2026-09-11",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/12",
          "isoDate": "2026-09-12",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/13",
          "isoDate": "2026-09-13",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/14",
          "isoDate": "2026-09-14",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/15",
          "isoDate": "2026-09-15",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/16",
          "isoDate": "2026-09-16",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/17",
          "isoDate": "2026-09-17",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/18",
          "isoDate": "2026-09-18",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/19",
          "isoDate": "2026-09-19",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/20",
          "isoDate": "2026-09-20",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/21",
          "isoDate": "2026-09-21",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/22",
          "isoDate": "2026-09-22",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/23",
          "isoDate": "2026-09-23",
          "orders": 0,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/24",
          "isoDate": "2026-09-24",
          "orders": 39,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/25",
          "isoDate": "2026-09-25",
          "orders": 140,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/26",
          "isoDate": "2026-09-26",
          "orders": 140,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/27",
          "isoDate": "2026-09-27",
          "orders": 150,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/28",
          "isoDate": "2026-09-28",
          "orders": 156,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/29",
          "isoDate": "2026-09-29",
          "orders": 130,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "9/30",
          "isoDate": "2026-09-30",
          "orders": 173,
          "staff": 3,
          "laborDaily": 581.087
        },
        {
          "date": "10/1",
          "isoDate": "2026-10-01",
          "orders": 211,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/2",
          "isoDate": "2026-10-02",
          "orders": 189,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/3",
          "isoDate": "2026-10-03",
          "orders": 218,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/4",
          "isoDate": "2026-10-04",
          "orders": 145,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/5",
          "isoDate": "2026-10-05",
          "orders": 200,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/6",
          "isoDate": "2026-10-06",
          "orders": 172,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/7",
          "isoDate": "2026-10-07",
          "orders": 176,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/8",
          "isoDate": "2026-10-08",
          "orders": 176,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/9",
          "isoDate": "2026-10-09",
          "orders": 192,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/10",
          "isoDate": "2026-10-10",
          "orders": 179,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/11",
          "isoDate": "2026-10-11",
          "orders": 208,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/12",
          "isoDate": "2026-10-12",
          "orders": 205,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/13",
          "isoDate": "2026-10-13",
          "orders": 182,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/14",
          "isoDate": "2026-10-14",
          "orders": 199,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/15",
          "isoDate": "2026-10-15",
          "orders": 155,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/16",
          "isoDate": "2026-10-16",
          "orders": 189,
          "staff": 3,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/17",
          "isoDate": "2026-10-17",
          "orders": 201,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/18",
          "isoDate": "2026-10-18",
          "orders": 211,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/19",
          "isoDate": "2026-10-19",
          "orders": 211,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/20",
          "isoDate": "2026-10-20",
          "orders": 198,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/21",
          "isoDate": "2026-10-21",
          "orders": 175,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/22",
          "isoDate": "2026-10-22",
          "orders": 168,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/23",
          "isoDate": "2026-10-23",
          "orders": 200,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/24",
          "isoDate": "2026-10-24",
          "orders": 237,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/25",
          "isoDate": "2026-10-25",
          "orders": 157,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/26",
          "isoDate": "2026-10-26",
          "orders": 131,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/27",
          "isoDate": "2026-10-27",
          "orders": 163,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/28",
          "isoDate": "2026-10-28",
          "orders": 165,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/29",
          "isoDate": "2026-10-29",
          "orders": 152,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/30",
          "isoDate": "2026-10-30",
          "orders": 162,
          "staff": 4,
          "laborDaily": 792.4471412680755
        },
        {
          "date": "10/31",
          "isoDate": "2026-10-31",
          "orders": 202,
          "staff": 4,
          "laborDaily": 792.4471412680755
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 4.1,
          "baseStaff": 1,
          "peakSpeed": 4.1,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 1,
          "recentEstimate": 2.5,
          "baseStaff": 1,
          "peakSpeed": 2.5,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 1.5,
          "baseStaff": 1,
          "peakSpeed": 1.5,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 0.7,
          "baseStaff": 1,
          "peakSpeed": 0.7,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 0.6,
          "baseStaff": 1,
          "peakSpeed": 0.6,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 1,
          "baseStaff": 1,
          "peakSpeed": 1,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 2.2,
          "baseStaff": 1,
          "peakSpeed": 2.2,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 4.5,
          "baseStaff": 1,
          "peakSpeed": 4.5,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 6.8,
          "baseStaff": 1,
          "peakSpeed": 6.8,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 8.4,
          "baseStaff": 1,
          "peakSpeed": 8.4,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 10,
          "recentEstimate": 8.9,
          "baseStaff": 1,
          "peakSpeed": 8.9,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 11,
          "recentEstimate": 9.8,
          "baseStaff": 1,
          "peakSpeed": 9.8,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 12,
          "recentEstimate": 9.9,
          "baseStaff": 1,
          "peakSpeed": 9.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 8.4,
          "baseStaff": 1,
          "peakSpeed": 8.4,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 8.4,
          "baseStaff": 1,
          "peakSpeed": 8.4,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 9.1,
          "baseStaff": 1,
          "peakSpeed": 9.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 11.9,
          "baseStaff": 1,
          "peakSpeed": 11.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 13.8,
          "baseStaff": 1,
          "peakSpeed": 13.8,
          "conservativeStaff": 2,
          "gap": 1.3
        },
        {
          "hour": 18,
          "recentEstimate": 12.9,
          "baseStaff": 1,
          "peakSpeed": 12.9,
          "conservativeStaff": 2,
          "gap": 0.4
        },
        {
          "hour": 19,
          "recentEstimate": 13.5,
          "baseStaff": 1,
          "peakSpeed": 13.5,
          "conservativeStaff": 2,
          "gap": 1
        },
        {
          "hour": 20,
          "recentEstimate": 14.2,
          "baseStaff": 1,
          "peakSpeed": 14.2,
          "conservativeStaff": 2,
          "gap": 1.7
        },
        {
          "hour": 21,
          "recentEstimate": 13.3,
          "baseStaff": 1,
          "peakSpeed": 13.3,
          "conservativeStaff": 2,
          "gap": 0.8
        },
        {
          "hour": 22,
          "recentEstimate": 11,
          "baseStaff": 1,
          "peakSpeed": 11,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 23,
          "recentEstimate": 7.4,
          "baseStaff": 1,
          "peakSpeed": 7.4,
          "conservativeStaff": 2,
          "gap": 0
        }
      ],
      "judgment": "负荷偏低且订单回落，先查经营与排班原因。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 161.71428571428572 单，环比 -19.1%\n4 人，人均 40.42857142857143 单\n负荷 27.0%，单均人工 4.90 元",
      "rating": {
        "name": "淘宝便利店（滨湖店）",
        "grade916": null,
        "score916": null,
        "grade922": null,
        "score922": null,
        "scoreChange": null,
        "display916": null,
        "display922": null,
        "displayChange": null,
        "service922": null,
        "product922": null,
        "fulfillment922": null,
        "metrics922": {},
        "shortBoard": "10.31暂无评分数据",
        "risk": "滨湖店未出现在10.31评分明细中，不能用0分代替。",
        "action": "补齐10.31评分后，再判断质量变化和整改优先级。"
      }
    }
  ],
  "weeklyTotals": [
    {
      "period": "9/4—9/10",
      "startDate": "2026-09-04",
      "endDate": "2026-09-10",
      "days": 7,
      "periodOrders": 20832,
      "dailyOrders": 2976,
      "staff": 19.999999999999996,
      "staffEnd": 21,
      "ordersPerPerson": 148.80000000000004,
      "laborDaily": 8667.348762928827,
      "previousDailyOrders": null,
      "wow": null,
      "comparison": "源表缺少完整前一周期"
    },
    {
      "period": "9/11—9/17",
      "startDate": "2026-09-11",
      "endDate": "2026-09-17",
      "days": 7,
      "periodOrders": 22674,
      "dailyOrders": 3239.1428571428573,
      "staff": 28.142857142857142,
      "staffEnd": 29,
      "ordersPerPerson": 115.09644670050763,
      "laborDaily": 8667.348762928827,
      "previousDailyOrders": 2976,
      "wow": 0.0884,
      "comparison": "9/4—9/10"
    },
    {
      "period": "9/18—9/24",
      "startDate": "2026-09-18",
      "endDate": "2026-09-24",
      "days": 7,
      "periodOrders": 22247,
      "dailyOrders": 3178.1428571428573,
      "staff": 29,
      "staffEnd": 29,
      "ordersPerPerson": 109.59113300492612,
      "laborDaily": 8667.348762928827,
      "previousDailyOrders": 3239.142857142857,
      "wow": -0.0188,
      "comparison": "9/11—9/17"
    },
    {
      "period": "9/25—10/1",
      "startDate": "2026-09-25",
      "endDate": "2026-10-01",
      "days": 7,
      "periodOrders": 25350,
      "dailyOrders": 3621.4285714285716,
      "staff": 28.142857142857142,
      "staffEnd": 27,
      "ordersPerPerson": 128.6802030456853,
      "laborDaily": 8683.712421299553,
      "previousDailyOrders": 3178.142857142857,
      "wow": 0.1395,
      "comparison": "9/18—9/24"
    },
    {
      "period": "10/2—10/8",
      "startDate": "2026-10-02",
      "endDate": "2026-10-08",
      "days": 7,
      "periodOrders": 24357,
      "dailyOrders": 3479.5714285714284,
      "staff": 27.714285714285715,
      "staffEnd": 28,
      "ordersPerPerson": 125.55154639175257,
      "laborDaily": 8781.894371523915,
      "previousDailyOrders": 3621.4285714285716,
      "wow": -0.0392,
      "comparison": "9/25—10/1"
    },
    {
      "period": "10/9—10/15",
      "startDate": "2026-10-09",
      "endDate": "2026-10-15",
      "days": 7,
      "periodOrders": 25230,
      "dailyOrders": 3604.285714285714,
      "staff": 28.857142857142858,
      "staffEnd": 29,
      "ordersPerPerson": 124.9009900990099,
      "laborDaily": 8781.894371523915,
      "previousDailyOrders": 3479.571428571429,
      "wow": 0.0358,
      "comparison": "10/2—10/8"
    },
    {
      "period": "10/16—10/22",
      "startDate": "2026-10-16",
      "endDate": "2026-10-22",
      "days": 7,
      "periodOrders": 26896,
      "dailyOrders": 3842.285714285714,
      "staff": 32,
      "staffEnd": 32,
      "ordersPerPerson": 120.07142857142857,
      "laborDaily": 8781.894371523915,
      "previousDailyOrders": 3604.285714285714,
      "wow": 0.066,
      "comparison": "10/9—10/15"
    },
    {
      "period": "10/18—10/24",
      "startDate": "2026-10-18",
      "endDate": "2026-10-24",
      "days": 7,
      "periodOrders": 27025,
      "dailyOrders": 3860.714285714286,
      "staff": 32.14285714285714,
      "staffEnd": 32,
      "ordersPerPerson": 120.11111111111113,
      "laborDaily": 8781.894371523915,
      "previousDailyOrders": 3745.9999999999995,
      "wow": 0.0306,
      "comparison": "10/11—10/17"
    },
    {
      "period": "10/25—10/31",
      "startDate": "2026-10-25",
      "endDate": "2026-10-31",
      "days": 7,
      "periodOrders": 25759,
      "dailyOrders": 3679.8571428571427,
      "staff": 32,
      "staffEnd": 32,
      "ordersPerPerson": 114.99553571428571,
      "laborDaily": 8781.894371523915,
      "previousDailyOrders": 3860.7142857142853,
      "wow": -0.0468,
      "comparison": "10/18—10/24"
    },
    {
      "period": "9/1—10/31 全期",
      "startDate": "2026-09-01",
      "endDate": "2026-10-31",
      "days": 61,
      "periodOrders": 209193,
      "dailyOrders": 3429.3934426229507,
      "staff": 27.983606557377048,
      "staffEnd": 32,
      "ordersPerPerson": 122.55008787346222,
      "laborDaily": 8725.56046565748,
      "previousDailyOrders": null,
      "wow": null,
      "comparison": "全期汇总不计算周环比"
    }
  ],
  "aggregateHours": [
    {
      "hour": 0,
      "label": "00:00 - 01:00",
      "康桥店": 1051,
      "广丰路店": 512,
      "皮革城店": 655,
      "青浦店": 427,
      "七宝店": 434,
      "东站店": 381,
      "洛社店": 521,
      "滨湖店": 128
    },
    {
      "hour": 1,
      "label": "01:00 - 02:00",
      "康桥店": 683,
      "广丰路店": 336,
      "皮革城店": 516,
      "青浦店": 305,
      "七宝店": 339,
      "东站店": 249,
      "洛社店": 316,
      "滨湖店": 77.5
    },
    {
      "hour": 2,
      "label": "02:00 - 03:00",
      "康桥店": 458,
      "广丰路店": 213,
      "皮革城店": 356,
      "青浦店": 251,
      "七宝店": 247,
      "东站店": 169,
      "洛社店": 242,
      "滨湖店": 45.5
    },
    {
      "hour": 3,
      "label": "03:00 - 04:00",
      "康桥店": 320,
      "广丰路店": 113,
      "皮革城店": 291,
      "青浦店": 144,
      "七宝店": 199,
      "东站店": 116,
      "洛社店": 163,
      "滨湖店": 21.5
    },
    {
      "hour": 4,
      "label": "04:00 - 05:00",
      "康桥店": 256,
      "广丰路店": 96,
      "皮革城店": 181,
      "青浦店": 107,
      "七宝店": 162,
      "东站店": 90,
      "洛社店": 107,
      "滨湖店": 19.5
    },
    {
      "hour": 5,
      "label": "05:00 - 06:00",
      "康桥店": 233,
      "广丰路店": 78,
      "皮革城店": 178,
      "青浦店": 95,
      "七宝店": 145,
      "东站店": 76,
      "洛社店": 98,
      "滨湖店": 32
    },
    {
      "hour": 6,
      "label": "06:00 - 07:00",
      "康桥店": 285,
      "广丰路店": 126,
      "皮革城店": 209,
      "青浦店": 156,
      "七宝店": 163,
      "东站店": 108,
      "洛社店": 126,
      "滨湖店": 68
    },
    {
      "hour": 7,
      "label": "07:00 - 08:00",
      "康桥店": 487,
      "广丰路店": 260,
      "皮革城店": 294,
      "青浦店": 213,
      "七宝店": 271,
      "东站店": 257,
      "洛社店": 211,
      "滨湖店": 139
    },
    {
      "hour": 8,
      "label": "08:00 - 09:00",
      "康桥店": 747,
      "广丰路店": 442,
      "皮革城店": 537,
      "青浦店": 409,
      "七宝店": 403,
      "东站店": 397,
      "洛社店": 362,
      "滨湖店": 211.5
    },
    {
      "hour": 9,
      "label": "09:00 - 10:00",
      "康桥店": 948,
      "广丰路店": 577,
      "皮革城店": 553,
      "青浦店": 458,
      "七宝店": 562,
      "东站店": 482,
      "洛社店": 528,
      "滨湖店": 261.5
    },
    {
      "hour": 10,
      "label": "10:00 - 11:00",
      "康桥店": 1066,
      "广丰路店": 634,
      "皮革城店": 601,
      "青浦店": 525,
      "七宝店": 659,
      "东站店": 594,
      "洛社店": 574,
      "滨湖店": 274.5
    },
    {
      "hour": 11,
      "label": "11:00 - 12:00",
      "康桥店": 1041,
      "广丰路店": 735,
      "皮革城店": 677,
      "青浦店": 579,
      "七宝店": 724,
      "东站店": 637,
      "洛社店": 650,
      "滨湖店": 303
    },
    {
      "hour": 12,
      "label": "12:00 - 13:00",
      "康桥店": 1134,
      "广丰路店": 670,
      "皮革城店": 694,
      "青浦店": 607,
      "七宝店": 673,
      "东站店": 652,
      "洛社店": 625,
      "滨湖店": 307
    },
    {
      "hour": 13,
      "label": "13:00 - 14:00",
      "康桥店": 1154,
      "广丰路店": 679,
      "皮革城店": 598,
      "青浦店": 592,
      "七宝店": 752,
      "东站店": 617,
      "洛社店": 632,
      "滨湖店": 261.5
    },
    {
      "hour": 14,
      "label": "14:00 - 15:00",
      "康桥店": 1128,
      "广丰路店": 663,
      "皮革城店": 598,
      "青浦店": 573,
      "七宝店": 715,
      "东站店": 626,
      "洛社店": 551,
      "滨湖店": 260
    },
    {
      "hour": 15,
      "label": "15:00 - 16:00",
      "康桥店": 1139,
      "广丰路店": 603,
      "皮革城店": 581,
      "青浦店": 604,
      "七宝店": 720,
      "东站店": 612,
      "洛社店": 655,
      "滨湖店": 281.5
    },
    {
      "hour": 16,
      "label": "16:00 - 17:00",
      "康桥店": 1162,
      "广丰路店": 753,
      "皮革城店": 701,
      "青浦店": 630,
      "七宝店": 767,
      "东站店": 686,
      "洛社店": 680,
      "滨湖店": 369.5
    },
    {
      "hour": 17,
      "label": "17:00 - 18:00",
      "康桥店": 1435,
      "广丰路店": 882,
      "皮革城店": 875,
      "青浦店": 712,
      "七宝店": 854,
      "东站店": 826,
      "洛社店": 813,
      "滨湖店": 428
    },
    {
      "hour": 18,
      "label": "18:00 - 19:00",
      "康桥店": 1537,
      "广丰路店": 961,
      "皮革城店": 971,
      "青浦店": 870,
      "七宝店": 947,
      "东站店": 986,
      "洛社店": 922,
      "滨湖店": 400.5
    },
    {
      "hour": 19,
      "label": "19:00 - 20:00",
      "康桥店": 1826,
      "广丰路店": 983,
      "皮革城店": 1069,
      "青浦店": 886,
      "七宝店": 1146,
      "东站店": 1002,
      "洛社店": 985,
      "滨湖店": 419
    },
    {
      "hour": 20,
      "label": "20:00 - 21:00",
      "康桥店": 1995,
      "广丰路店": 1075,
      "皮革城店": 1144,
      "青浦店": 857,
      "七宝店": 1165,
      "东站店": 1002,
      "洛社店": 997,
      "滨湖店": 439.5
    },
    {
      "hour": 21,
      "label": "21:00 - 22:00",
      "康桥店": 1901,
      "广丰路店": 1188,
      "皮革城店": 1072,
      "青浦店": 848,
      "七宝店": 1101,
      "东站店": 1066,
      "洛社店": 1020,
      "滨湖店": 412
    },
    {
      "hour": 22,
      "label": "22:00 - 23:00",
      "康桥店": 1795,
      "广丰路店": 980,
      "皮革城店": 1024,
      "青浦店": 772,
      "七宝店": 1109,
      "东站店": 859,
      "洛社店": 843,
      "滨湖店": 341
    },
    {
      "hour": 23,
      "label": "23:00 - 00:00",
      "康桥店": 1542,
      "广丰路店": 685,
      "皮革城店": 864,
      "青浦店": 619,
      "七宝店": 776,
      "东站店": 607,
      "洛社店": 657,
      "滨湖店": 228
    }
  ],
  "ratingSummary": {
    "score916": 64.5,
    "score922": 68.2,
    "scoreChange": 3.7,
    "ratedStoreCount": 7,
    "currentRatedStoreCount": 7,
    "previousRatedStoreCount": 7,
    "comparableStoreCount": 7,
    "totalStoreCount": 8,
    "missingStores": [
      "滨湖店"
    ],
    "missingPreviousStores": [
      "滨湖店"
    ],
    "diamondStores": [],
    "biggestImprovement": "皮革城店",
    "biggestImprovementChange": 25.6,
    "mainRisk": "评分短板主要分布在商品体验、配送履约和缺货退款；滨湖店缺少9.30评分，滨湖店缺少10.31评分。",
    "action": "评分变化只使用两期均有数据的同一批门店；缺失门店先补齐数据再判断变化。",
    "dimensions922": {
      "展示": 4.4,
      "服务": 4.8,
      "商品": 4.1,
      "履约": 4.6
    },
    "display916": 4.3,
    "display922": 4.4,
    "displayChange": 0.1
  }
};
