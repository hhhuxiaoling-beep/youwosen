window.DASHBOARD_DATA = {
  "sourceWorkbook": "数据源9.1-10.15（已补充10.16评分）.xlsx",
  "period": "2026/10/9—10/15",
  "comparisonPeriod": "2026/10/2—10/8",
  "currentPeriodKey": "10/9—10/15",
  "ratingPreviousDate": "9.16",
  "ratingCurrentDate": "10.16",
  "standardOrdersPerPerson": 150,
  "hourlyPeriod": "9/1—10/15",
  "laborCostNote": "人工成本采用9月人力成本÷30天，作为本期经营分析参考。",
  "ratingStatus": "评分变化按9.16与10.16两期同店对比，可比门店6/8家。",
  "notes": [
    "统计期：2026/10/9—10/15；环比：2026/10/2—10/8。",
    "周期平均在职拣货员共28人，不含店长；按入职日至离职日逐日计算。",
    "人效标准为150单/人/天；24小时排班按12小时班、月休2天测算。",
    "人工成本采用9月人力成本除以30天，为10月经营判断的参考口径。"
  ],
  "managementNotes": [
    "高负荷门店优先核查高峰履约、缺货和实际出勤；低负荷门店先调班和查经营原因。",
    "评分采用9.16与10.16对比，缺失门店不记为0分。",
    "排班在册建议是覆盖测算，不直接等于招聘人数。"
  ],
  "totals": {
    "staff": 28,
    "staffEnd": 28,
    "dailyOrders": 3604.285714285714,
    "ordersPerPerson": 128.72,
    "wow": 0.0358,
    "laborDaily": 8667.348762928827,
    "registeredStaff": 35,
    "baseDailyShifts": 27,
    "conservativeRegisteredStaff": 50,
    "overallLoadRate": 0.8582,
    "laborPerOrder": 2.4,
    "dailyChange": 124.7,
    "periodOrdersPerPerson": 125.8,
    "periodLoadRate": 0.8385,
    "periodLaborPerOrder": 2.63,
    "surplusOrders": -595.7,
    "workloadPeople": 24.03,
    "peopleGap": -3.97
  },
  "signals": {
    "highLoadStores": [
      "康桥店"
    ],
    "lowLoadStores": [
      "广丰路店",
      "青浦店",
      "七宝店",
      "滨湖店"
    ],
    "decliningStores": [
      "广丰路店",
      "东站店"
    ],
    "growthStores": [
      "康桥店",
      "皮革城店",
      "青浦店",
      "七宝店",
      "洛社店",
      "滨湖店"
    ]
  },
  "stores": [
    {
      "name": "康桥店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 789.8571428571429,
      "ordersPerPerson": 197.46428571428572,
      "wow": 0.0212,
      "laborDaily": 1538.8111904761904,
      "loadRate": 1.3164285714285715,
      "standardOrders": 600,
      "surplusOrders": 189.9,
      "workloadPeople": 5.27,
      "peopleGap": 1.27,
      "dailyChange": 16.4,
      "laborPerOrder": 1.9482145656236811,
      "periodOrdersPerPerson": 192.1,
      "periodLoadRate": 1.281,
      "periodLaborPerOrder": 2.02,
      "baseDailyShifts": 6,
      "registeredStaff": 7,
      "registeredGap": 3,
      "peakDayOrders": 907,
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
      "requiredPeakSpeed": 15.9,
      "monthlyShifts": 196,
      "averageDailyAttendance": 6.53,
      "scheduledOrdersPerShift": 120.9,
      "scheduledLoadRate": 0.806,
      "conservativeDailyShifts": 8,
      "conservativeRegisteredStaff": 9,
      "conservativePlan": {
        "a": "08:00 ×3",
        "b": "12:00 ×2",
        "c": "20:00 ×3"
      },
      "weekly": [
        {
          "period": "9/4—9/10",
          "days": 7,
          "periodOrders": 4662,
          "dailyOrders": 666,
          "staff": 3.5714285714285716,
          "staffEnd": 2,
          "ordersPerPerson": 186.48,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/11—9/17",
          "days": 7,
          "periodOrders": 5482,
          "dailyOrders": 783.1428571428571,
          "staff": 5,
          "staffEnd": 5,
          "ordersPerPerson": 156.62857142857143,
          "previousDailyOrders": 666,
          "wow": 0.1759,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "days": 7,
          "periodOrders": 5658,
          "dailyOrders": 808.2857142857143,
          "staff": 4.142857142857143,
          "staffEnd": 4,
          "ordersPerPerson": 195.10344827586206,
          "previousDailyOrders": 783.1428571428571,
          "wow": 0.0321,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "days": 7,
          "periodOrders": 5566,
          "dailyOrders": 795.1428571428571,
          "staff": 3.2857142857142856,
          "staffEnd": 3,
          "ordersPerPerson": 242,
          "previousDailyOrders": 808.2857142857143,
          "wow": -0.0163,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "days": 7,
          "periodOrders": 5414,
          "dailyOrders": 773.4285714285714,
          "staff": 3.7142857142857144,
          "staffEnd": 4,
          "ordersPerPerson": 208.23076923076923,
          "previousDailyOrders": 795.1428571428571,
          "wow": -0.0273,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "days": 7,
          "periodOrders": 5529,
          "dailyOrders": 789.8571428571429,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 197.46428571428572,
          "previousDailyOrders": 773.4285714285714,
          "wow": 0.0212,
          "comparison": "10/2—10/8"
        },
        {
          "period": "9/1—10/15 全期",
          "days": 45,
          "periodOrders": 34202,
          "dailyOrders": 760.0444444444445,
          "staff": 3.9555555555555557,
          "staffEnd": 4,
          "ordersPerPerson": 192.14606741573033,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "orders": 676
        },
        {
          "date": "9/2",
          "orders": 600
        },
        {
          "date": "9/3",
          "orders": 615
        },
        {
          "date": "9/4",
          "orders": 616
        },
        {
          "date": "9/5",
          "orders": 683
        },
        {
          "date": "9/6",
          "orders": 771
        },
        {
          "date": "9/7",
          "orders": 644
        },
        {
          "date": "9/8",
          "orders": 556
        },
        {
          "date": "9/9",
          "orders": 720
        },
        {
          "date": "9/10",
          "orders": 672
        },
        {
          "date": "9/11",
          "orders": 716
        },
        {
          "date": "9/12",
          "orders": 875
        },
        {
          "date": "9/13",
          "orders": 816
        },
        {
          "date": "9/14",
          "orders": 720
        },
        {
          "date": "9/15",
          "orders": 715
        },
        {
          "date": "9/16",
          "orders": 827
        },
        {
          "date": "9/17",
          "orders": 813
        },
        {
          "date": "9/18",
          "orders": 848
        },
        {
          "date": "9/19",
          "orders": 974
        },
        {
          "date": "9/20",
          "orders": 769
        },
        {
          "date": "9/21",
          "orders": 735
        },
        {
          "date": "9/22",
          "orders": 794
        },
        {
          "date": "9/23",
          "orders": 741
        },
        {
          "date": "9/24",
          "orders": 797
        },
        {
          "date": "9/25",
          "orders": 916
        },
        {
          "date": "9/26",
          "orders": 810
        },
        {
          "date": "9/27",
          "orders": 785
        },
        {
          "date": "9/28",
          "orders": 748
        },
        {
          "date": "9/29",
          "orders": 740
        },
        {
          "date": "9/30",
          "orders": 735
        },
        {
          "date": "10/1",
          "orders": 832
        },
        {
          "date": "10/2",
          "orders": 749
        },
        {
          "date": "10/3",
          "orders": 805
        },
        {
          "date": "10/4",
          "orders": 795
        },
        {
          "date": "10/5",
          "orders": 740
        },
        {
          "date": "10/6",
          "orders": 719
        },
        {
          "date": "10/7",
          "orders": 783
        },
        {
          "date": "10/8",
          "orders": 823
        },
        {
          "date": "10/9",
          "orders": 813
        },
        {
          "date": "10/10",
          "orders": 787
        },
        {
          "date": "10/11",
          "orders": 907
        },
        {
          "date": "10/12",
          "orders": 789
        },
        {
          "date": "10/13",
          "orders": 810
        },
        {
          "date": "10/14",
          "orders": 709
        },
        {
          "date": "10/15",
          "orders": 714
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 31.8,
          "baseStaff": 2,
          "peakSpeed": 15.9,
          "conservativeStaff": 3,
          "gap": 6.8
        },
        {
          "hour": 1,
          "recentEstimate": 21.1,
          "baseStaff": 2,
          "peakSpeed": 10.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 16.2,
          "baseStaff": 2,
          "peakSpeed": 8.1,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 11,
          "baseStaff": 2,
          "peakSpeed": 5.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 7.7,
          "baseStaff": 2,
          "peakSpeed": 3.8,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 7,
          "baseStaff": 2,
          "peakSpeed": 3.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 9.8,
          "baseStaff": 2,
          "peakSpeed": 4.9,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 15.8,
          "baseStaff": 2,
          "peakSpeed": 7.9,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 21.1,
          "baseStaff": 2,
          "peakSpeed": 10.6,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 27.1,
          "baseStaff": 2,
          "peakSpeed": 13.5,
          "conservativeStaff": 3,
          "gap": 2.1
        },
        {
          "hour": 10,
          "recentEstimate": 30.3,
          "baseStaff": 2,
          "peakSpeed": 15.2,
          "conservativeStaff": 3,
          "gap": 5.3
        },
        {
          "hour": 11,
          "recentEstimate": 30.7,
          "baseStaff": 2,
          "peakSpeed": 15.3,
          "conservativeStaff": 3,
          "gap": 5.7
        },
        {
          "hour": 12,
          "recentEstimate": 32.5,
          "baseStaff": 4,
          "peakSpeed": 8.1,
          "conservativeStaff": 5,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 33.1,
          "baseStaff": 4,
          "peakSpeed": 8.3,
          "conservativeStaff": 5,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 33.2,
          "baseStaff": 4,
          "peakSpeed": 8.3,
          "conservativeStaff": 5,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 32.9,
          "baseStaff": 4,
          "peakSpeed": 8.2,
          "conservativeStaff": 5,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 37.1,
          "baseStaff": 4,
          "peakSpeed": 9.3,
          "conservativeStaff": 5,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 40.4,
          "baseStaff": 4,
          "peakSpeed": 10.1,
          "conservativeStaff": 5,
          "gap": 0
        },
        {
          "hour": 18,
          "recentEstimate": 46.9,
          "baseStaff": 4,
          "peakSpeed": 11.7,
          "conservativeStaff": 5,
          "gap": 0
        },
        {
          "hour": 19,
          "recentEstimate": 53.6,
          "baseStaff": 4,
          "peakSpeed": 13.4,
          "conservativeStaff": 5,
          "gap": 3.6
        },
        {
          "hour": 20,
          "recentEstimate": 58.4,
          "baseStaff": 4,
          "peakSpeed": 14.6,
          "conservativeStaff": 5,
          "gap": 8.4
        },
        {
          "hour": 21,
          "recentEstimate": 60.7,
          "baseStaff": 4,
          "peakSpeed": 15.2,
          "conservativeStaff": 5,
          "gap": 10.7
        },
        {
          "hour": 22,
          "recentEstimate": 57,
          "baseStaff": 4,
          "peakSpeed": 14.3,
          "conservativeStaff": 5,
          "gap": 7
        },
        {
          "hour": 23,
          "recentEstimate": 44.6,
          "baseStaff": 4,
          "peakSpeed": 11.1,
          "conservativeStaff": 5,
          "gap": 0
        }
      ],
      "judgment": "增长与高负荷并存，优先保障高峰承接。",
      "risk": "高峰时段可能出现拣货超时、差错、加班和人员稳定风险。",
      "action": "核查高峰履约、缺货取消和实际出勤，必要时安排跨店支援或补充高峰班次。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 789.8571428571429 单，环比 +2.1%\n4 人，人均 197.46428571428572 单\n负荷 131.6%，单均人工 1.95 元",
      "rating": {
        "name": "优沃森超市（康桥店）",
        "grade916": "黄金",
        "score916": 47.7,
        "grade922": "黄金",
        "score922": 70,
        "scoreChange": 22.3,
        "display916": 4,
        "display922": 4.4,
        "displayChange": 0.4,
        "service922": 4.6,
        "product922": 4.2,
        "fulfillment922": 4.9,
        "metrics922": {
          "缺货退款率": 68.1,
          "3分钟IM人工回复率": 52.4,
          "配送准时率": 91.9,
          "商品负反馈率": 54.7,
          "有效配送信息回传率": 100,
          "商责介入率": 93.8,
          "配送时效": 76.5,
          "商品评价分": 44.1
        },
        "shortBoard": "商品评价分44.1、3分钟IM人工回复率52.4、商品负反馈率54.7",
        "risk": "商品维度相对较弱；需结合商品评价分44.1、3分钟IM人工回复率52.4、商品负反馈率54.7继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "广丰路店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 425.14285714285717,
      "ordersPerPerson": 106.28571428571429,
      "wow": -0.1143,
      "laborDaily": 1319.9359523809521,
      "loadRate": 0.7085714285714286,
      "standardOrders": 600,
      "surplusOrders": -174.9,
      "workloadPeople": 2.83,
      "peopleGap": -1.17,
      "dailyChange": -54.9,
      "laborPerOrder": 3.1046880600358415,
      "periodOrdersPerPerson": 125,
      "periodLoadRate": 0.8333,
      "periodLaborPerOrder": 2.8,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 0,
      "peakDayOrders": 496,
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
      "requiredPeakSpeed": 22.9,
      "monthlyShifts": 112,
      "averageDailyAttendance": 3.73,
      "scheduledOrdersPerShift": 113.9,
      "scheduledLoadRate": 0.7592,
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
          "days": 7,
          "periodOrders": 3446,
          "dailyOrders": 492.2857142857143,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 164.0952380952381,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/11—9/17",
          "days": 7,
          "periodOrders": 3622,
          "dailyOrders": 517.4285714285714,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 129.35714285714286,
          "previousDailyOrders": 492.2857142857143,
          "wow": 0.0511,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "days": 7,
          "periodOrders": 3254,
          "dailyOrders": 464.85714285714283,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 116.21428571428571,
          "previousDailyOrders": 517.4285714285714,
          "wow": -0.1016,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "days": 7,
          "periodOrders": 3365,
          "dailyOrders": 480.7142857142857,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 120.17857142857143,
          "previousDailyOrders": 464.85714285714283,
          "wow": 0.0341,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "days": 7,
          "periodOrders": 3360,
          "dailyOrders": 480,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 120,
          "previousDailyOrders": 480.7142857142857,
          "wow": -0.0015,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "days": 7,
          "periodOrders": 2976,
          "dailyOrders": 425.14285714285717,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 106.28571428571429,
          "previousDailyOrders": 480,
          "wow": -0.1143,
          "comparison": "10/2—10/8"
        },
        {
          "period": "9/1—10/15 全期",
          "days": 45,
          "periodOrders": 21250,
          "dailyOrders": 472.22222222222223,
          "staff": 3.7777777777777777,
          "staffEnd": 4,
          "ordersPerPerson": 125,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "orders": 379
        },
        {
          "date": "9/2",
          "orders": 419
        },
        {
          "date": "9/3",
          "orders": 429
        },
        {
          "date": "9/4",
          "orders": 463
        },
        {
          "date": "9/5",
          "orders": 525
        },
        {
          "date": "9/6",
          "orders": 522
        },
        {
          "date": "9/7",
          "orders": 428
        },
        {
          "date": "9/8",
          "orders": 513
        },
        {
          "date": "9/9",
          "orders": 501
        },
        {
          "date": "9/10",
          "orders": 494
        },
        {
          "date": "9/11",
          "orders": 494
        },
        {
          "date": "9/12",
          "orders": 685
        },
        {
          "date": "9/13",
          "orders": 616
        },
        {
          "date": "9/14",
          "orders": 496
        },
        {
          "date": "9/15",
          "orders": 447
        },
        {
          "date": "9/16",
          "orders": 448
        },
        {
          "date": "9/17",
          "orders": 436
        },
        {
          "date": "9/18",
          "orders": 499
        },
        {
          "date": "9/19",
          "orders": 515
        },
        {
          "date": "9/20",
          "orders": 519
        },
        {
          "date": "9/21",
          "orders": 455
        },
        {
          "date": "9/22",
          "orders": 446
        },
        {
          "date": "9/23",
          "orders": 394
        },
        {
          "date": "9/24",
          "orders": 426
        },
        {
          "date": "9/25",
          "orders": 559
        },
        {
          "date": "9/26",
          "orders": 499
        },
        {
          "date": "9/27",
          "orders": 501
        },
        {
          "date": "9/28",
          "orders": 451
        },
        {
          "date": "9/29",
          "orders": 437
        },
        {
          "date": "9/30",
          "orders": 445
        },
        {
          "date": "10/1",
          "orders": 473
        },
        {
          "date": "10/2",
          "orders": 460
        },
        {
          "date": "10/3",
          "orders": 498
        },
        {
          "date": "10/4",
          "orders": 471
        },
        {
          "date": "10/5",
          "orders": 469
        },
        {
          "date": "10/6",
          "orders": 511
        },
        {
          "date": "10/7",
          "orders": 510
        },
        {
          "date": "10/8",
          "orders": 441
        },
        {
          "date": "10/9",
          "orders": 396
        },
        {
          "date": "10/10",
          "orders": 496
        },
        {
          "date": "10/11",
          "orders": 444
        },
        {
          "date": "10/12",
          "orders": 408
        },
        {
          "date": "10/13",
          "orders": 398
        },
        {
          "date": "10/14",
          "orders": 436
        },
        {
          "date": "10/15",
          "orders": 398
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 16.2,
          "baseStaff": 1,
          "peakSpeed": 16.2,
          "conservativeStaff": 2,
          "gap": 3.7
        },
        {
          "hour": 1,
          "recentEstimate": 11.2,
          "baseStaff": 1,
          "peakSpeed": 11.2,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 7.6,
          "baseStaff": 1,
          "peakSpeed": 7.6,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 4.1,
          "baseStaff": 1,
          "peakSpeed": 4.1,
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
          "recentEstimate": 4.9,
          "baseStaff": 1,
          "peakSpeed": 4.9,
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
          "recentEstimate": 15.2,
          "baseStaff": 1,
          "peakSpeed": 15.2,
          "conservativeStaff": 2,
          "gap": 2.7
        },
        {
          "hour": 9,
          "recentEstimate": 18,
          "baseStaff": 1,
          "peakSpeed": 18,
          "conservativeStaff": 2,
          "gap": 5.5
        },
        {
          "hour": 10,
          "recentEstimate": 21.4,
          "baseStaff": 1,
          "peakSpeed": 21.4,
          "conservativeStaff": 2,
          "gap": 8.9
        },
        {
          "hour": 11,
          "recentEstimate": 22.9,
          "baseStaff": 1,
          "peakSpeed": 22.9,
          "conservativeStaff": 2,
          "gap": 10.4
        },
        {
          "hour": 12,
          "recentEstimate": 22.8,
          "baseStaff": 2,
          "peakSpeed": 11.4,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 22.2,
          "baseStaff": 2,
          "peakSpeed": 11.1,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 21.8,
          "baseStaff": 2,
          "peakSpeed": 10.9,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 21,
          "baseStaff": 2,
          "peakSpeed": 10.5,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 24.2,
          "baseStaff": 2,
          "peakSpeed": 12.1,
          "conservativeStaff": 4,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 28.7,
          "baseStaff": 2,
          "peakSpeed": 14.3,
          "conservativeStaff": 4,
          "gap": 3.7
        },
        {
          "hour": 18,
          "recentEstimate": 32.4,
          "baseStaff": 2,
          "peakSpeed": 16.2,
          "conservativeStaff": 4,
          "gap": 7.4
        },
        {
          "hour": 19,
          "recentEstimate": 35,
          "baseStaff": 2,
          "peakSpeed": 17.5,
          "conservativeStaff": 4,
          "gap": 10
        },
        {
          "hour": 20,
          "recentEstimate": 38.2,
          "baseStaff": 2,
          "peakSpeed": 19.1,
          "conservativeStaff": 4,
          "gap": 13.2
        },
        {
          "hour": 21,
          "recentEstimate": 36.1,
          "baseStaff": 2,
          "peakSpeed": 18.1,
          "conservativeStaff": 4,
          "gap": 11.1
        },
        {
          "hour": 22,
          "recentEstimate": 30.6,
          "baseStaff": 2,
          "peakSpeed": 15.3,
          "conservativeStaff": 4,
          "gap": 5.6
        },
        {
          "hour": 23,
          "recentEstimate": 22.9,
          "baseStaff": 2,
          "peakSpeed": 11.4,
          "conservativeStaff": 4,
          "gap": 0
        }
      ],
      "judgment": "负荷偏低且订单回落，先查经营与排班原因。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 425.14285714285717 单，环比 -11.4%\n4 人，人均 106.28571428571429 单\n负荷 70.9%，单均人工 3.10 元",
      "rating": {
        "name": "优沃森超市（广丰路店）",
        "grade916": "黄金",
        "score916": 70.5,
        "grade922": "钻石",
        "score922": 80.3,
        "scoreChange": 9.8,
        "display916": 4.5,
        "display922": 4.7,
        "displayChange": 0.2,
        "service922": 5,
        "product922": 4.7,
        "fulfillment922": 4,
        "metrics922": {
          "缺货退款率": 97.7,
          "3分钟IM人工回复率": 100,
          "配送准时率": 10.5,
          "商品负反馈率": 72.1,
          "有效配送信息回传率": 100,
          "商责介入率": 100,
          "配送时效": 28,
          "商品评价分": 92.2
        },
        "shortBoard": "配送准时率10.5、配送时效28、商品负反馈率72.1",
        "risk": "履约维度相对较弱；需结合配送准时率10.5、配送时效28、商品负反馈率72.1继续核查。",
        "action": "专项检查配送准时率、配送时效和高峰覆盖，形成时段整改清单。"
      }
    },
    {
      "name": "皮革城店",
      "staff": 3,
      "staffEnd": 3,
      "dailyOrders": 508.2857142857143,
      "ordersPerPerson": 169.42857142857142,
      "wow": 0.0177,
      "laborDaily": 1045.2762380952379,
      "loadRate": 1.1295238095238094,
      "standardOrders": 450,
      "surplusOrders": 58.3,
      "workloadPeople": 3.39,
      "peopleGap": 0.39,
      "dailyChange": 8.9,
      "laborPerOrder": 2.056473768034476,
      "periodOrdersPerPerson": 143.1,
      "periodLoadRate": 0.9538,
      "periodLaborPerOrder": 2.13,
      "baseDailyShifts": 4,
      "registeredStaff": 5,
      "registeredGap": 2,
      "peakDayOrders": 551,
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
      "requiredPeakSpeed": 17.6,
      "monthlyShifts": 140,
      "averageDailyAttendance": 4.67,
      "scheduledOrdersPerShift": 108.9,
      "scheduledLoadRate": 0.7261,
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
          "days": 7,
          "periodOrders": 3287,
          "dailyOrders": 469.57142857142856,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 156.52380952380952,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/11—9/17",
          "days": 7,
          "periodOrders": 3413,
          "dailyOrders": 487.57142857142856,
          "staff": 3.4285714285714284,
          "staffEnd": 4,
          "ordersPerPerson": 142.20833333333334,
          "previousDailyOrders": 469.57142857142856,
          "wow": 0.0383,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "days": 7,
          "periodOrders": 3343,
          "dailyOrders": 477.57142857142856,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 119.39285714285714,
          "previousDailyOrders": 487.57142857142856,
          "wow": -0.0205,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "days": 7,
          "periodOrders": 3482,
          "dailyOrders": 497.42857142857144,
          "staff": 3.857142857142857,
          "staffEnd": 3,
          "ordersPerPerson": 128.96296296296296,
          "previousDailyOrders": 477.57142857142856,
          "wow": 0.0416,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "days": 7,
          "periodOrders": 3496,
          "dailyOrders": 499.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 166.47619047619048,
          "previousDailyOrders": 497.42857142857144,
          "wow": 0.004,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "days": 7,
          "periodOrders": 3558,
          "dailyOrders": 508.2857142857143,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 169.42857142857142,
          "previousDailyOrders": 499.42857142857144,
          "wow": 0.0177,
          "comparison": "10/2—10/8"
        },
        {
          "period": "9/1—10/15 全期",
          "days": 45,
          "periodOrders": 22033,
          "dailyOrders": 489.6222222222222,
          "staff": 3.422222222222222,
          "staffEnd": 3,
          "ordersPerPerson": 143.07142857142858,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "orders": 477
        },
        {
          "date": "9/2",
          "orders": 474
        },
        {
          "date": "9/3",
          "orders": 503
        },
        {
          "date": "9/4",
          "orders": 446
        },
        {
          "date": "9/5",
          "orders": 501
        },
        {
          "date": "9/6",
          "orders": 531
        },
        {
          "date": "9/7",
          "orders": 460
        },
        {
          "date": "9/8",
          "orders": 452
        },
        {
          "date": "9/9",
          "orders": 457
        },
        {
          "date": "9/10",
          "orders": 440
        },
        {
          "date": "9/11",
          "orders": 431
        },
        {
          "date": "9/12",
          "orders": 579
        },
        {
          "date": "9/13",
          "orders": 546
        },
        {
          "date": "9/14",
          "orders": 481
        },
        {
          "date": "9/15",
          "orders": 476
        },
        {
          "date": "9/16",
          "orders": 432
        },
        {
          "date": "9/17",
          "orders": 468
        },
        {
          "date": "9/18",
          "orders": 489
        },
        {
          "date": "9/19",
          "orders": 551
        },
        {
          "date": "9/20",
          "orders": 500
        },
        {
          "date": "9/21",
          "orders": 445
        },
        {
          "date": "9/22",
          "orders": 431
        },
        {
          "date": "9/23",
          "orders": 440
        },
        {
          "date": "9/24",
          "orders": 487
        },
        {
          "date": "9/25",
          "orders": 609
        },
        {
          "date": "9/26",
          "orders": 524
        },
        {
          "date": "9/27",
          "orders": 488
        },
        {
          "date": "9/28",
          "orders": 435
        },
        {
          "date": "9/29",
          "orders": 450
        },
        {
          "date": "9/30",
          "orders": 454
        },
        {
          "date": "10/1",
          "orders": 522
        },
        {
          "date": "10/2",
          "orders": 497
        },
        {
          "date": "10/3",
          "orders": 519
        },
        {
          "date": "10/4",
          "orders": 498
        },
        {
          "date": "10/5",
          "orders": 484
        },
        {
          "date": "10/6",
          "orders": 494
        },
        {
          "date": "10/7",
          "orders": 530
        },
        {
          "date": "10/8",
          "orders": 474
        },
        {
          "date": "10/9",
          "orders": 483
        },
        {
          "date": "10/10",
          "orders": 535
        },
        {
          "date": "10/11",
          "orders": 551
        },
        {
          "date": "10/12",
          "orders": 481
        },
        {
          "date": "10/13",
          "orders": 492
        },
        {
          "date": "10/14",
          "orders": 486
        },
        {
          "date": "10/15",
          "orders": 530
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 19.6,
          "baseStaff": 2,
          "peakSpeed": 9.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 1,
          "recentEstimate": 14,
          "baseStaff": 2,
          "peakSpeed": 7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 12.6,
          "baseStaff": 2,
          "peakSpeed": 6.3,
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
          "recentEstimate": 6.6,
          "baseStaff": 2,
          "peakSpeed": 3.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 5.5,
          "baseStaff": 2,
          "peakSpeed": 2.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 6.7,
          "baseStaff": 2,
          "peakSpeed": 3.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 9.7,
          "baseStaff": 2,
          "peakSpeed": 4.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 17.6,
          "baseStaff": 2,
          "peakSpeed": 8.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 18.2,
          "baseStaff": 2,
          "peakSpeed": 9.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 10,
          "recentEstimate": 21.6,
          "baseStaff": 2,
          "peakSpeed": 10.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 11,
          "recentEstimate": 22.6,
          "baseStaff": 2,
          "peakSpeed": 11.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 12,
          "recentEstimate": 20.6,
          "baseStaff": 2,
          "peakSpeed": 10.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 20.6,
          "baseStaff": 2,
          "peakSpeed": 10.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 18.6,
          "baseStaff": 2,
          "peakSpeed": 9.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 20.3,
          "baseStaff": 2,
          "peakSpeed": 10.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 22.3,
          "baseStaff": 2,
          "peakSpeed": 11.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 27.3,
          "baseStaff": 2,
          "peakSpeed": 13.7,
          "conservativeStaff": 3,
          "gap": 2.3
        },
        {
          "hour": 18,
          "recentEstimate": 32.9,
          "baseStaff": 2,
          "peakSpeed": 16.5,
          "conservativeStaff": 3,
          "gap": 7.9
        },
        {
          "hour": 19,
          "recentEstimate": 34.3,
          "baseStaff": 2,
          "peakSpeed": 17.1,
          "conservativeStaff": 3,
          "gap": 9.3
        },
        {
          "hour": 20,
          "recentEstimate": 35.1,
          "baseStaff": 2,
          "peakSpeed": 17.6,
          "conservativeStaff": 3,
          "gap": 10.1
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
          "recentEstimate": 32.4,
          "baseStaff": 2,
          "peakSpeed": 16.2,
          "conservativeStaff": 3,
          "gap": 7.4
        },
        {
          "hour": 23,
          "recentEstimate": 26.4,
          "baseStaff": 2,
          "peakSpeed": 13.2,
          "conservativeStaff": 3,
          "gap": 1.4
        }
      ],
      "judgment": "负荷接近标准且订单增长，保持排班与服务质量。",
      "risk": "当前经营指标相对平稳，仍需防止增长过程中评分与履约回落。",
      "action": "维持当前编排，持续跟踪订单、人效、单均人工和评分变化。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 508.2857142857143 单，环比 +1.8%\n3 人，人均 169.42857142857142 单\n负荷 113.0%，单均人工 2.06 元",
      "rating": {
        "name": "优沃森超市（皮革城店）",
        "grade916": "钻石",
        "score916": 81,
        "grade922": "黄金",
        "score922": 60.9,
        "scoreChange": -20.1,
        "display916": 4.7,
        "display922": 4.3,
        "displayChange": -0.4,
        "service922": 4.5,
        "product922": 4,
        "fulfillment922": 4.7,
        "metrics922": {
          "缺货退款率": 71.8,
          "3分钟IM人工回复率": 100,
          "配送准时率": 90.9,
          "商品负反馈率": 31.1,
          "有效配送信息回传率": 100,
          "商责介入率": 52,
          "配送时效": 51,
          "商品评价分": 61.3
        },
        "shortBoard": "商品负反馈率31.1、配送时效51、商责介入率52",
        "risk": "商品维度相对较弱；需结合商品负反馈率31.1、配送时效51、商责介入率52继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "青浦店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 412.85714285714283,
      "ordersPerPerson": 103.21428571428571,
      "wow": 0.072,
      "laborDaily": 1249.798159754224,
      "loadRate": 0.6880952380952381,
      "standardOrders": 600,
      "surplusOrders": -187.1,
      "workloadPeople": 2.75,
      "peopleGap": -1.25,
      "dailyChange": 27.7,
      "laborPerOrder": 3.0271927744912,
      "periodOrdersPerPerson": 101.7,
      "periodLoadRate": 0.6777,
      "periodLaborPerOrder": 3.42,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 0,
      "peakDayOrders": 465,
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
      "requiredPeakSpeed": 18.1,
      "monthlyShifts": 112,
      "averageDailyAttendance": 3.73,
      "scheduledOrdersPerShift": 110.6,
      "scheduledLoadRate": 0.7372,
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
          "days": 7,
          "periodOrders": 1776,
          "dailyOrders": 253.71428571428572,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 84.57142857142857,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/11—9/17",
          "days": 7,
          "periodOrders": 2835,
          "dailyOrders": 405,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 135,
          "previousDailyOrders": 253.71428571428572,
          "wow": 0.5963,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "days": 7,
          "periodOrders": 3072,
          "dailyOrders": 438.85714285714283,
          "staff": 3.857142857142857,
          "staffEnd": 4,
          "ordersPerPerson": 113.77777777777777,
          "previousDailyOrders": 405,
          "wow": 0.0836,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "days": 7,
          "periodOrders": 3163,
          "dailyOrders": 451.85714285714283,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 112.96428571428571,
          "previousDailyOrders": 438.85714285714283,
          "wow": 0.0296,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "days": 7,
          "periodOrders": 2696,
          "dailyOrders": 385.14285714285717,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 96.28571428571429,
          "previousDailyOrders": 451.85714285714283,
          "wow": -0.1476,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "days": 7,
          "periodOrders": 2890,
          "dailyOrders": 412.85714285714283,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 103.21428571428571,
          "previousDailyOrders": 385.14285714285717,
          "wow": 0.072,
          "comparison": "10/2—10/8"
        },
        {
          "period": "9/1—10/15 全期",
          "days": 45,
          "periodOrders": 16468,
          "dailyOrders": 365.9555555555556,
          "staff": 3.6,
          "staffEnd": 4,
          "ordersPerPerson": 101.65432098765433,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "orders": 0
        },
        {
          "date": "9/2",
          "orders": 0
        },
        {
          "date": "9/3",
          "orders": 36
        },
        {
          "date": "9/4",
          "orders": 66
        },
        {
          "date": "9/5",
          "orders": 209
        },
        {
          "date": "9/6",
          "orders": 246
        },
        {
          "date": "9/7",
          "orders": 235
        },
        {
          "date": "9/8",
          "orders": 347
        },
        {
          "date": "9/9",
          "orders": 356
        },
        {
          "date": "9/10",
          "orders": 317
        },
        {
          "date": "9/11",
          "orders": 354
        },
        {
          "date": "9/12",
          "orders": 419
        },
        {
          "date": "9/13",
          "orders": 440
        },
        {
          "date": "9/14",
          "orders": 338
        },
        {
          "date": "9/15",
          "orders": 369
        },
        {
          "date": "9/16",
          "orders": 444
        },
        {
          "date": "9/17",
          "orders": 471
        },
        {
          "date": "9/18",
          "orders": 453
        },
        {
          "date": "9/19",
          "orders": 478
        },
        {
          "date": "9/20",
          "orders": 491
        },
        {
          "date": "9/21",
          "orders": 417
        },
        {
          "date": "9/22",
          "orders": 365
        },
        {
          "date": "9/23",
          "orders": 410
        },
        {
          "date": "9/24",
          "orders": 458
        },
        {
          "date": "9/25",
          "orders": 502
        },
        {
          "date": "9/26",
          "orders": 481
        },
        {
          "date": "9/27",
          "orders": 473
        },
        {
          "date": "9/28",
          "orders": 414
        },
        {
          "date": "9/29",
          "orders": 447
        },
        {
          "date": "9/30",
          "orders": 417
        },
        {
          "date": "10/1",
          "orders": 429
        },
        {
          "date": "10/2",
          "orders": 369
        },
        {
          "date": "10/3",
          "orders": 366
        },
        {
          "date": "10/4",
          "orders": 327
        },
        {
          "date": "10/5",
          "orders": 403
        },
        {
          "date": "10/6",
          "orders": 403
        },
        {
          "date": "10/7",
          "orders": 433
        },
        {
          "date": "10/8",
          "orders": 395
        },
        {
          "date": "10/9",
          "orders": 393
        },
        {
          "date": "10/10",
          "orders": 444
        },
        {
          "date": "10/11",
          "orders": 465
        },
        {
          "date": "10/12",
          "orders": 407
        },
        {
          "date": "10/13",
          "orders": 421
        },
        {
          "date": "10/14",
          "orders": 373
        },
        {
          "date": "10/15",
          "orders": 387
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 14.5,
          "baseStaff": 1,
          "peakSpeed": 14.5,
          "conservativeStaff": 2,
          "gap": 2
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
          "recentEstimate": 7.9,
          "baseStaff": 1,
          "peakSpeed": 7.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 4.9,
          "baseStaff": 1,
          "peakSpeed": 4.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 3.9,
          "baseStaff": 1,
          "peakSpeed": 3.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 3.3,
          "baseStaff": 1,
          "peakSpeed": 3.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 5.1,
          "baseStaff": 1,
          "peakSpeed": 5.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 7.5,
          "baseStaff": 1,
          "peakSpeed": 7.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 11.6,
          "baseStaff": 1,
          "peakSpeed": 11.6,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 14.5,
          "baseStaff": 1,
          "peakSpeed": 14.5,
          "conservativeStaff": 2,
          "gap": 2
        },
        {
          "hour": 10,
          "recentEstimate": 18.1,
          "baseStaff": 1,
          "peakSpeed": 18.1,
          "conservativeStaff": 2,
          "gap": 5.6
        },
        {
          "hour": 11,
          "recentEstimate": 18.1,
          "baseStaff": 1,
          "peakSpeed": 18.1,
          "conservativeStaff": 2,
          "gap": 5.6
        },
        {
          "hour": 12,
          "recentEstimate": 18.1,
          "baseStaff": 2,
          "peakSpeed": 9.1,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 17.8,
          "baseStaff": 2,
          "peakSpeed": 8.9,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 17.5,
          "baseStaff": 2,
          "peakSpeed": 8.7,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 18.5,
          "baseStaff": 2,
          "peakSpeed": 9.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 19.2,
          "baseStaff": 2,
          "peakSpeed": 9.6,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 20.9,
          "baseStaff": 2,
          "peakSpeed": 10.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 18,
          "recentEstimate": 25.6,
          "baseStaff": 2,
          "peakSpeed": 12.8,
          "conservativeStaff": 3,
          "gap": 0.6
        },
        {
          "hour": 19,
          "recentEstimate": 28.7,
          "baseStaff": 2,
          "peakSpeed": 14.3,
          "conservativeStaff": 3,
          "gap": 3.7
        },
        {
          "hour": 20,
          "recentEstimate": 26.9,
          "baseStaff": 2,
          "peakSpeed": 13.5,
          "conservativeStaff": 3,
          "gap": 1.9
        },
        {
          "hour": 21,
          "recentEstimate": 26.5,
          "baseStaff": 2,
          "peakSpeed": 13.2,
          "conservativeStaff": 3,
          "gap": 1.5
        },
        {
          "hour": 22,
          "recentEstimate": 24.7,
          "baseStaff": 2,
          "peakSpeed": 12.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 23,
          "recentEstimate": 19.4,
          "baseStaff": 2,
          "peakSpeed": 9.7,
          "conservativeStaff": 3,
          "gap": 0
        }
      ],
      "judgment": "订单增长但当前负荷仍偏低，关注增长能否持续。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 412.85714285714283 单，环比 +7.2%\n4 人，人均 103.21428571428571 单\n负荷 68.8%，单均人工 3.03 元",
      "rating": {
        "name": "优沃森超市（青浦店）",
        "grade916": "黄金",
        "score916": 49,
        "grade922": "黄金",
        "score922": 56.9,
        "scoreChange": 7.9,
        "display916": 4,
        "display922": 4.2,
        "displayChange": 0.2,
        "service922": 4.4,
        "product922": 3.8,
        "fulfillment922": 4.8,
        "metrics922": {
          "缺货退款率": 55,
          "3分钟IM人工回复率": 100,
          "配送准时率": 84.9,
          "商品负反馈率": 30.9,
          "有效配送信息回传率": 100,
          "商责介入率": 42.5,
          "配送时效": 79.4,
          "商品评价分": 40.8
        },
        "shortBoard": "商品负反馈率30.9、商品评价分40.8、商责介入率42.5",
        "risk": "商品维度相对较弱；需结合商品负反馈率30.9、商品评价分40.8、商责介入率42.5继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "七宝店",
      "staff": 4,
      "staffEnd": 4,
      "dailyOrders": 432.7142857142857,
      "ordersPerPerson": 108.17857142857143,
      "wow": 0.26,
      "laborDaily": 1380.4540952380955,
      "loadRate": 0.7211904761904762,
      "standardOrders": 600,
      "surplusOrders": -167.3,
      "workloadPeople": 2.88,
      "peopleGap": -1.12,
      "dailyChange": 89.3,
      "laborPerOrder": 3.1902207549246184,
      "periodOrdersPerPerson": 132.7,
      "periodLoadRate": 0.8847,
      "periodLaborPerOrder": 2.77,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 0,
      "peakDayOrders": 517,
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
      "requiredPeakSpeed": 22.1,
      "monthlyShifts": 112,
      "averageDailyAttendance": 3.73,
      "scheduledOrdersPerShift": 115.9,
      "scheduledLoadRate": 0.7727,
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
          "days": 7,
          "periodOrders": 4359,
          "dailyOrders": 622.7142857142857,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 207.57142857142856,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/11—9/17",
          "days": 7,
          "periodOrders": 4137,
          "dailyOrders": 591,
          "staff": 3.857142857142857,
          "staffEnd": 4,
          "ordersPerPerson": 153.22222222222223,
          "previousDailyOrders": 622.7142857142857,
          "wow": -0.0509,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "days": 7,
          "periodOrders": 3757,
          "dailyOrders": 536.7142857142857,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 134.17857142857142,
          "previousDailyOrders": 591,
          "wow": -0.0919,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "days": 7,
          "periodOrders": 3018,
          "dailyOrders": 431.14285714285717,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 107.78571428571429,
          "previousDailyOrders": 536.7142857142857,
          "wow": -0.1967,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "days": 7,
          "periodOrders": 2404,
          "dailyOrders": 343.42857142857144,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 85.85714285714286,
          "previousDailyOrders": 431.14285714285717,
          "wow": -0.2034,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "days": 7,
          "periodOrders": 3029,
          "dailyOrders": 432.7142857142857,
          "staff": 4,
          "staffEnd": 4,
          "ordersPerPerson": 108.17857142857143,
          "previousDailyOrders": 343.42857142857144,
          "wow": 0.26,
          "comparison": "10/2—10/8"
        },
        {
          "period": "9/1—10/15 全期",
          "days": 45,
          "periodOrders": 22428,
          "dailyOrders": 498.4,
          "staff": 3.7555555555555555,
          "staffEnd": 4,
          "ordersPerPerson": 132.71005917159763,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "orders": 521
        },
        {
          "date": "9/2",
          "orders": 608
        },
        {
          "date": "9/3",
          "orders": 595
        },
        {
          "date": "9/4",
          "orders": 572
        },
        {
          "date": "9/5",
          "orders": 623
        },
        {
          "date": "9/6",
          "orders": 650
        },
        {
          "date": "9/7",
          "orders": 531
        },
        {
          "date": "9/8",
          "orders": 637
        },
        {
          "date": "9/9",
          "orders": 686
        },
        {
          "date": "9/10",
          "orders": 660
        },
        {
          "date": "9/11",
          "orders": 597
        },
        {
          "date": "9/12",
          "orders": 686
        },
        {
          "date": "9/13",
          "orders": 665
        },
        {
          "date": "9/14",
          "orders": 582
        },
        {
          "date": "9/15",
          "orders": 527
        },
        {
          "date": "9/16",
          "orders": 533
        },
        {
          "date": "9/17",
          "orders": 547
        },
        {
          "date": "9/18",
          "orders": 567
        },
        {
          "date": "9/19",
          "orders": 684
        },
        {
          "date": "9/20",
          "orders": 594
        },
        {
          "date": "9/21",
          "orders": 502
        },
        {
          "date": "9/22",
          "orders": 518
        },
        {
          "date": "9/23",
          "orders": 440
        },
        {
          "date": "9/24",
          "orders": 452
        },
        {
          "date": "9/25",
          "orders": 519
        },
        {
          "date": "9/26",
          "orders": 508
        },
        {
          "date": "9/27",
          "orders": 405
        },
        {
          "date": "9/28",
          "orders": 403
        },
        {
          "date": "9/29",
          "orders": 392
        },
        {
          "date": "9/30",
          "orders": 364
        },
        {
          "date": "10/1",
          "orders": 427
        },
        {
          "date": "10/2",
          "orders": 403
        },
        {
          "date": "10/3",
          "orders": 398
        },
        {
          "date": "10/4",
          "orders": 334
        },
        {
          "date": "10/5",
          "orders": 311
        },
        {
          "date": "10/6",
          "orders": 305
        },
        {
          "date": "10/7",
          "orders": 359
        },
        {
          "date": "10/8",
          "orders": 294
        },
        {
          "date": "10/9",
          "orders": 279
        },
        {
          "date": "10/10",
          "orders": 388
        },
        {
          "date": "10/11",
          "orders": 454
        },
        {
          "date": "10/12",
          "orders": 428
        },
        {
          "date": "10/13",
          "orders": 462
        },
        {
          "date": "10/14",
          "orders": 501
        },
        {
          "date": "10/15",
          "orders": 517
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 19.1,
          "baseStaff": 1,
          "peakSpeed": 19.1,
          "conservativeStaff": 2,
          "gap": 6.6
        },
        {
          "hour": 1,
          "recentEstimate": 13.8,
          "baseStaff": 1,
          "peakSpeed": 13.8,
          "conservativeStaff": 2,
          "gap": 1.3
        },
        {
          "hour": 2,
          "recentEstimate": 11.1,
          "baseStaff": 1,
          "peakSpeed": 11.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 8,
          "baseStaff": 1,
          "peakSpeed": 8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 6.8,
          "baseStaff": 1,
          "peakSpeed": 6.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 5.5,
          "baseStaff": 1,
          "peakSpeed": 5.5,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 6.1,
          "baseStaff": 1,
          "peakSpeed": 6.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 10,
          "baseStaff": 1,
          "peakSpeed": 10,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 14.4,
          "baseStaff": 1,
          "peakSpeed": 14.4,
          "conservativeStaff": 2,
          "gap": 1.9
        },
        {
          "hour": 9,
          "recentEstimate": 17.8,
          "baseStaff": 1,
          "peakSpeed": 17.8,
          "conservativeStaff": 2,
          "gap": 5.3
        },
        {
          "hour": 10,
          "recentEstimate": 22.1,
          "baseStaff": 1,
          "peakSpeed": 22.1,
          "conservativeStaff": 2,
          "gap": 9.6
        },
        {
          "hour": 11,
          "recentEstimate": 22,
          "baseStaff": 1,
          "peakSpeed": 22,
          "conservativeStaff": 2,
          "gap": 9.5
        },
        {
          "hour": 12,
          "recentEstimate": 23.7,
          "baseStaff": 2,
          "peakSpeed": 11.8,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 25.2,
          "baseStaff": 2,
          "peakSpeed": 12.6,
          "conservativeStaff": 3,
          "gap": 0.2
        },
        {
          "hour": 14,
          "recentEstimate": 22.7,
          "baseStaff": 2,
          "peakSpeed": 11.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 22.6,
          "baseStaff": 2,
          "peakSpeed": 11.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 24.4,
          "baseStaff": 2,
          "peakSpeed": 12.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 25.3,
          "baseStaff": 2,
          "peakSpeed": 12.6,
          "conservativeStaff": 3,
          "gap": 0.3
        },
        {
          "hour": 18,
          "recentEstimate": 32.2,
          "baseStaff": 2,
          "peakSpeed": 16.1,
          "conservativeStaff": 3,
          "gap": 7.2
        },
        {
          "hour": 19,
          "recentEstimate": 34.5,
          "baseStaff": 2,
          "peakSpeed": 17.3,
          "conservativeStaff": 3,
          "gap": 9.5
        },
        {
          "hour": 20,
          "recentEstimate": 37.1,
          "baseStaff": 2,
          "peakSpeed": 18.6,
          "conservativeStaff": 3,
          "gap": 12.1
        },
        {
          "hour": 21,
          "recentEstimate": 36.6,
          "baseStaff": 2,
          "peakSpeed": 18.3,
          "conservativeStaff": 3,
          "gap": 11.6
        },
        {
          "hour": 22,
          "recentEstimate": 33.3,
          "baseStaff": 2,
          "peakSpeed": 16.7,
          "conservativeStaff": 3,
          "gap": 8.3
        },
        {
          "hour": 23,
          "recentEstimate": 24,
          "baseStaff": 2,
          "peakSpeed": 12,
          "conservativeStaff": 3,
          "gap": 0
        }
      ],
      "judgment": "订单增长但当前负荷仍偏低，关注增长能否持续。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 432.7142857142857 单，环比 +26.0%\n4 人，人均 108.17857142857143 单\n负荷 72.1%，单均人工 3.19 元",
      "rating": {
        "name": "优沃森超市（七宝店）",
        "grade916": "黄金",
        "score916": 58.4,
        "grade922": "黄金",
        "score922": 70.9,
        "scoreChange": 12.5,
        "display916": 4.2,
        "display922": 4.5,
        "displayChange": 0.3,
        "service922": 5,
        "product922": 4,
        "fulfillment922": 4.7,
        "metrics922": {
          "缺货退款率": 83,
          "3分钟IM人工回复率": 93.9,
          "配送准时率": 94.7,
          "商品负反馈率": 35.9,
          "有效配送信息回传率": 100,
          "商责介入率": 100,
          "配送时效": 55,
          "商品评价分": 29.9
        },
        "shortBoard": "商品评价分29.9、商品负反馈率35.9、配送时效55",
        "risk": "商品维度相对较弱；需结合商品评价分29.9、商品负反馈率35.9、配送时效55继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "东站店",
      "staff": 3,
      "staffEnd": 3,
      "dailyOrders": 400.42857142857144,
      "ordersPerPerson": 133.47619047619048,
      "wow": -0.0479,
      "laborDaily": 942.5343333333333,
      "loadRate": 0.8898412698412699,
      "standardOrders": 450,
      "surplusOrders": -49.6,
      "workloadPeople": 2.67,
      "peopleGap": -0.33,
      "dailyChange": -20.1,
      "laborPerOrder": 2.3538138898798904,
      "periodOrdersPerPerson": 144.3,
      "periodLoadRate": 0.9618,
      "periodLaborPerOrder": 2.18,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 1,
      "peakDayOrders": 462,
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
      "requiredPeakSpeed": 20.6,
      "monthlyShifts": 112,
      "averageDailyAttendance": 3.73,
      "scheduledOrdersPerShift": 107.3,
      "scheduledLoadRate": 0.7151,
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
          "days": 7,
          "periodOrders": 3302,
          "dailyOrders": 471.7142857142857,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 157.23809523809524,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/11—9/17",
          "days": 7,
          "periodOrders": 3185,
          "dailyOrders": 455,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 151.66666666666666,
          "previousDailyOrders": 471.7142857142857,
          "wow": -0.0354,
          "comparison": "9/4—9/10"
        },
        {
          "period": "9/18—9/24",
          "days": 7,
          "periodOrders": 2838,
          "dailyOrders": 405.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 135.14285714285714,
          "previousDailyOrders": 455,
          "wow": -0.1089,
          "comparison": "9/11—9/17"
        },
        {
          "period": "9/25—10/1",
          "days": 7,
          "periodOrders": 3020,
          "dailyOrders": 431.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 143.80952380952382,
          "previousDailyOrders": 405.42857142857144,
          "wow": 0.0641,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "days": 7,
          "periodOrders": 2944,
          "dailyOrders": 420.57142857142856,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 140.19047619047618,
          "previousDailyOrders": 431.42857142857144,
          "wow": -0.0252,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "days": 7,
          "periodOrders": 2803,
          "dailyOrders": 400.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 133.47619047619048,
          "previousDailyOrders": 420.57142857142856,
          "wow": -0.0479,
          "comparison": "10/2—10/8"
        },
        {
          "period": "9/1—10/15 全期",
          "days": 45,
          "periodOrders": 19476,
          "dailyOrders": 432.8,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 144.26666666666668,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "orders": 491
        },
        {
          "date": "9/2",
          "orders": 446
        },
        {
          "date": "9/3",
          "orders": 447
        },
        {
          "date": "9/4",
          "orders": 440
        },
        {
          "date": "9/5",
          "orders": 525
        },
        {
          "date": "9/6",
          "orders": 548
        },
        {
          "date": "9/7",
          "orders": 447
        },
        {
          "date": "9/8",
          "orders": 453
        },
        {
          "date": "9/9",
          "orders": 503
        },
        {
          "date": "9/10",
          "orders": 386
        },
        {
          "date": "9/11",
          "orders": 411
        },
        {
          "date": "9/12",
          "orders": 518
        },
        {
          "date": "9/13",
          "orders": 543
        },
        {
          "date": "9/14",
          "orders": 460
        },
        {
          "date": "9/15",
          "orders": 397
        },
        {
          "date": "9/16",
          "orders": 419
        },
        {
          "date": "9/17",
          "orders": 437
        },
        {
          "date": "9/18",
          "orders": 396
        },
        {
          "date": "9/19",
          "orders": 460
        },
        {
          "date": "9/20",
          "orders": 443
        },
        {
          "date": "9/21",
          "orders": 353
        },
        {
          "date": "9/22",
          "orders": 398
        },
        {
          "date": "9/23",
          "orders": 382
        },
        {
          "date": "9/24",
          "orders": 406
        },
        {
          "date": "9/25",
          "orders": 496
        },
        {
          "date": "9/26",
          "orders": 431
        },
        {
          "date": "9/27",
          "orders": 459
        },
        {
          "date": "9/28",
          "orders": 374
        },
        {
          "date": "9/29",
          "orders": 447
        },
        {
          "date": "9/30",
          "orders": 368
        },
        {
          "date": "10/1",
          "orders": 445
        },
        {
          "date": "10/2",
          "orders": 417
        },
        {
          "date": "10/3",
          "orders": 435
        },
        {
          "date": "10/4",
          "orders": 374
        },
        {
          "date": "10/5",
          "orders": 439
        },
        {
          "date": "10/6",
          "orders": 415
        },
        {
          "date": "10/7",
          "orders": 438
        },
        {
          "date": "10/8",
          "orders": 426
        },
        {
          "date": "10/9",
          "orders": 373
        },
        {
          "date": "10/10",
          "orders": 416
        },
        {
          "date": "10/11",
          "orders": 462
        },
        {
          "date": "10/12",
          "orders": 428
        },
        {
          "date": "10/13",
          "orders": 354
        },
        {
          "date": "10/14",
          "orders": 379
        },
        {
          "date": "10/15",
          "orders": 391
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 12.9,
          "baseStaff": 1,
          "peakSpeed": 12.9,
          "conservativeStaff": 2,
          "gap": 0.4
        },
        {
          "hour": 1,
          "recentEstimate": 7.9,
          "baseStaff": 1,
          "peakSpeed": 7.9,
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
          "recentEstimate": 4.1,
          "baseStaff": 1,
          "peakSpeed": 4.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 2.8,
          "baseStaff": 1,
          "peakSpeed": 2.8,
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
          "recentEstimate": 4,
          "baseStaff": 1,
          "peakSpeed": 4,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 8.5,
          "baseStaff": 1,
          "peakSpeed": 8.5,
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
          "recentEstimate": 17.2,
          "baseStaff": 1,
          "peakSpeed": 17.2,
          "conservativeStaff": 2,
          "gap": 4.7
        },
        {
          "hour": 10,
          "recentEstimate": 19.1,
          "baseStaff": 1,
          "peakSpeed": 19.1,
          "conservativeStaff": 2,
          "gap": 6.6
        },
        {
          "hour": 11,
          "recentEstimate": 20.6,
          "baseStaff": 1,
          "peakSpeed": 20.6,
          "conservativeStaff": 2,
          "gap": 8.1
        },
        {
          "hour": 12,
          "recentEstimate": 21.8,
          "baseStaff": 2,
          "peakSpeed": 10.9,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 21,
          "baseStaff": 2,
          "peakSpeed": 10.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 19.6,
          "baseStaff": 2,
          "peakSpeed": 9.8,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 19,
          "baseStaff": 2,
          "peakSpeed": 9.5,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 22.5,
          "baseStaff": 2,
          "peakSpeed": 11.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 26.5,
          "baseStaff": 2,
          "peakSpeed": 13.3,
          "conservativeStaff": 3,
          "gap": 1.5
        },
        {
          "hour": 18,
          "recentEstimate": 31.6,
          "baseStaff": 2,
          "peakSpeed": 15.8,
          "conservativeStaff": 3,
          "gap": 6.6
        },
        {
          "hour": 19,
          "recentEstimate": 34,
          "baseStaff": 2,
          "peakSpeed": 17,
          "conservativeStaff": 3,
          "gap": 9
        },
        {
          "hour": 20,
          "recentEstimate": 33.1,
          "baseStaff": 2,
          "peakSpeed": 16.6,
          "conservativeStaff": 3,
          "gap": 8.1
        },
        {
          "hour": 21,
          "recentEstimate": 34.8,
          "baseStaff": 2,
          "peakSpeed": 17.4,
          "conservativeStaff": 3,
          "gap": 9.8
        },
        {
          "hour": 22,
          "recentEstimate": 28.5,
          "baseStaff": 2,
          "peakSpeed": 14.3,
          "conservativeStaff": 3,
          "gap": 3.5
        },
        {
          "hour": 23,
          "recentEstimate": 20.4,
          "baseStaff": 2,
          "peakSpeed": 10.2,
          "conservativeStaff": 3,
          "gap": 0
        }
      ],
      "judgment": "负荷接近标准但订单回落，需跟进转化与时段效率。",
      "risk": "订单回落可能继续影响人效和单位人工成本。",
      "action": "复盘订单回落时段和转化原因，调整班次并连续跟踪一周。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 400.42857142857144 单，环比 -4.8%\n3 人，人均 133.47619047619048 单\n负荷 89.0%，单均人工 2.35 元",
      "rating": {
        "name": "优沃森超市（东站店）",
        "grade916": "黄金",
        "score916": 50.3,
        "grade922": "黄金",
        "score922": 68.1,
        "scoreChange": 17.8,
        "display916": 4.1,
        "display922": 4.4,
        "displayChange": 0.3,
        "service922": 5,
        "product922": 4,
        "fulfillment922": 4.6,
        "metrics922": {
          "缺货退款率": 91.3,
          "3分钟IM人工回复率": 89.7,
          "配送准时率": 88.7,
          "商品负反馈率": 32.4,
          "有效配送信息回传率": 100,
          "商责介入率": 100,
          "配送时效": 34.9,
          "商品评价分": 11.7
        },
        "shortBoard": "商品评价分11.7、商品负反馈率32.4、配送时效34.9",
        "risk": "商品维度相对较弱；需结合商品评价分11.7、商品负反馈率32.4、配送时效34.9继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "洛社店",
      "staff": 3,
      "staffEnd": 3,
      "dailyOrders": 446.42857142857144,
      "ordersPerPerson": 148.80952380952382,
      "wow": 0.1294,
      "laborDaily": 609.4517936507935,
      "loadRate": 0.9920634920634922,
      "standardOrders": 450,
      "surplusOrders": -3.6,
      "workloadPeople": 2.98,
      "peopleGap": -0.02,
      "dailyChange": 51.1,
      "laborPerOrder": 1.3651720177777775,
      "periodOrdersPerPerson": 84.8,
      "periodLoadRate": 0.565,
      "periodLaborPerOrder": 3.11,
      "baseDailyShifts": 3,
      "registeredStaff": 4,
      "registeredGap": 1,
      "peakDayOrders": 521,
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
      "requiredPeakSpeed": 19,
      "monthlyShifts": 112,
      "averageDailyAttendance": 3.73,
      "scheduledOrdersPerShift": 119.6,
      "scheduledLoadRate": 0.7972,
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
          "days": 7,
          "periodOrders": 0,
          "dailyOrders": 0,
          "staff": 0,
          "staffEnd": 0,
          "ordersPerPerson": null,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/11—9/17",
          "days": 7,
          "periodOrders": 0,
          "dailyOrders": 0,
          "staff": 2.857142857142857,
          "staffEnd": 3,
          "ordersPerPerson": 0,
          "previousDailyOrders": 0,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/18—9/24",
          "days": 7,
          "periodOrders": 286,
          "dailyOrders": 40.857142857142854,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 13.619047619047619,
          "previousDailyOrders": 0,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/25—10/1",
          "days": 7,
          "periodOrders": 2636,
          "dailyOrders": 376.57142857142856,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 125.52380952380952,
          "previousDailyOrders": 40.857142857142854,
          "wow": 8.2168,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "days": 7,
          "periodOrders": 2767,
          "dailyOrders": 395.2857142857143,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 131.76190476190476,
          "previousDailyOrders": 376.57142857142856,
          "wow": 0.0497,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "days": 7,
          "periodOrders": 3125,
          "dailyOrders": 446.42857142857144,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 148.80952380952382,
          "previousDailyOrders": 395.2857142857143,
          "wow": 0.1294,
          "comparison": "10/2—10/8"
        },
        {
          "period": "9/1—10/15 全期",
          "days": 45,
          "periodOrders": 8814,
          "dailyOrders": 195.86666666666667,
          "staff": 2.311111111111111,
          "staffEnd": 3,
          "ordersPerPerson": 84.75000000000001,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "orders": 0
        },
        {
          "date": "9/2",
          "orders": 0
        },
        {
          "date": "9/3",
          "orders": 0
        },
        {
          "date": "9/4",
          "orders": 0
        },
        {
          "date": "9/5",
          "orders": 0
        },
        {
          "date": "9/6",
          "orders": 0
        },
        {
          "date": "9/7",
          "orders": 0
        },
        {
          "date": "9/8",
          "orders": 0
        },
        {
          "date": "9/9",
          "orders": 0
        },
        {
          "date": "9/10",
          "orders": 0
        },
        {
          "date": "9/11",
          "orders": 0
        },
        {
          "date": "9/12",
          "orders": 0
        },
        {
          "date": "9/13",
          "orders": 0
        },
        {
          "date": "9/14",
          "orders": 0
        },
        {
          "date": "9/15",
          "orders": 0
        },
        {
          "date": "9/16",
          "orders": 0
        },
        {
          "date": "9/17",
          "orders": 0
        },
        {
          "date": "9/18",
          "orders": 0
        },
        {
          "date": "9/19",
          "orders": 0
        },
        {
          "date": "9/20",
          "orders": 0
        },
        {
          "date": "9/21",
          "orders": 0
        },
        {
          "date": "9/22",
          "orders": 0
        },
        {
          "date": "9/23",
          "orders": 81
        },
        {
          "date": "9/24",
          "orders": 205
        },
        {
          "date": "9/25",
          "orders": 362
        },
        {
          "date": "9/26",
          "orders": 352
        },
        {
          "date": "9/27",
          "orders": 378
        },
        {
          "date": "9/28",
          "orders": 310
        },
        {
          "date": "9/29",
          "orders": 379
        },
        {
          "date": "9/30",
          "orders": 378
        },
        {
          "date": "10/1",
          "orders": 477
        },
        {
          "date": "10/2",
          "orders": 406
        },
        {
          "date": "10/3",
          "orders": 374
        },
        {
          "date": "10/4",
          "orders": 347
        },
        {
          "date": "10/5",
          "orders": 388
        },
        {
          "date": "10/6",
          "orders": 368
        },
        {
          "date": "10/7",
          "orders": 468
        },
        {
          "date": "10/8",
          "orders": 416
        },
        {
          "date": "10/9",
          "orders": 387
        },
        {
          "date": "10/10",
          "orders": 450
        },
        {
          "date": "10/11",
          "orders": 521
        },
        {
          "date": "10/12",
          "orders": 434
        },
        {
          "date": "10/13",
          "orders": 426
        },
        {
          "date": "10/14",
          "orders": 457
        },
        {
          "date": "10/15",
          "orders": 450
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 13.2,
          "baseStaff": 1,
          "peakSpeed": 13.2,
          "conservativeStaff": 2,
          "gap": 0.7
        },
        {
          "hour": 1,
          "recentEstimate": 9.7,
          "baseStaff": 1,
          "peakSpeed": 9.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 6.6,
          "baseStaff": 1,
          "peakSpeed": 6.6,
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
          "recentEstimate": 3.1,
          "baseStaff": 1,
          "peakSpeed": 3.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 3,
          "baseStaff": 1,
          "peakSpeed": 3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 6,
          "recentEstimate": 4.4,
          "baseStaff": 1,
          "peakSpeed": 4.4,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 7,
          "recentEstimate": 5.8,
          "baseStaff": 1,
          "peakSpeed": 5.8,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 11.1,
          "baseStaff": 1,
          "peakSpeed": 11.1,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 14.5,
          "baseStaff": 1,
          "peakSpeed": 14.5,
          "conservativeStaff": 2,
          "gap": 2
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
          "recentEstimate": 19,
          "baseStaff": 1,
          "peakSpeed": 19,
          "conservativeStaff": 2,
          "gap": 6.5
        },
        {
          "hour": 12,
          "recentEstimate": 18.2,
          "baseStaff": 2,
          "peakSpeed": 9.1,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 18.9,
          "baseStaff": 2,
          "peakSpeed": 9.4,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 16.6,
          "baseStaff": 2,
          "peakSpeed": 8.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 18.3,
          "baseStaff": 2,
          "peakSpeed": 9.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 20.6,
          "baseStaff": 2,
          "peakSpeed": 10.3,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 24.1,
          "baseStaff": 2,
          "peakSpeed": 12,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 18,
          "recentEstimate": 26.6,
          "baseStaff": 2,
          "peakSpeed": 13.3,
          "conservativeStaff": 3,
          "gap": 1.6
        },
        {
          "hour": 19,
          "recentEstimate": 25.6,
          "baseStaff": 2,
          "peakSpeed": 12.8,
          "conservativeStaff": 3,
          "gap": 0.6
        },
        {
          "hour": 20,
          "recentEstimate": 28.6,
          "baseStaff": 2,
          "peakSpeed": 14.3,
          "conservativeStaff": 3,
          "gap": 3.6
        },
        {
          "hour": 21,
          "recentEstimate": 30.5,
          "baseStaff": 2,
          "peakSpeed": 15.3,
          "conservativeStaff": 3,
          "gap": 5.5
        },
        {
          "hour": 22,
          "recentEstimate": 24.3,
          "baseStaff": 2,
          "peakSpeed": 12.2,
          "conservativeStaff": 3,
          "gap": 0
        },
        {
          "hour": 23,
          "recentEstimate": 18.3,
          "baseStaff": 2,
          "peakSpeed": 9.2,
          "conservativeStaff": 3,
          "gap": 0
        }
      ],
      "judgment": "负荷接近标准且订单增长，保持排班与服务质量。",
      "risk": "当前经营指标相对平稳，仍需防止增长过程中评分与履约回落。",
      "action": "维持当前编排，持续跟踪订单、人效、单均人工和评分变化。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 446.42857142857144 单，环比 +12.9%\n3 人，人均 148.80952380952382 单\n负荷 99.2%，单均人工 1.37 元",
      "rating": {
        "name": "优沃森超市（洛社店）",
        "grade916": null,
        "score916": null,
        "grade922": "黄金",
        "score922": 50.1,
        "scoreChange": null,
        "display916": null,
        "display922": 4.1,
        "displayChange": null,
        "service922": 4,
        "product922": 3.9,
        "fulfillment922": 4.6,
        "metrics922": {
          "缺货退款率": 62.6,
          "3分钟IM人工回复率": 96.2,
          "配送准时率": 86.1,
          "商品负反馈率": 31.8,
          "有效配送信息回传率": 100,
          "商责介入率": 12,
          "配送时效": 37.5,
          "商品评价分": 43.2
        },
        "shortBoard": "商责介入率12、商品负反馈率31.8、配送时效37.5",
        "risk": "商品维度相对较弱；需结合商责介入率12、商品负反馈率31.8、配送时效37.5继续核查。",
        "action": "专项检查缺货退款、商品负反馈和商品评价，明确责任人与完成时间。"
      }
    },
    {
      "name": "滨湖店",
      "staff": 3,
      "staffEnd": 3,
      "dailyOrders": 188.57142857142858,
      "ordersPerPerson": 62.85714285714286,
      "wow": 0.0345,
      "laborDaily": 581.087,
      "loadRate": 0.41904761904761906,
      "standardOrders": 450,
      "surplusOrders": -261.4,
      "workloadPeople": 1.26,
      "peopleGap": -1.74,
      "dailyChange": 6.3,
      "laborPerOrder": 3.0815219696969693,
      "periodOrdersPerPerson": 34.6,
      "periodLoadRate": 0.2306,
      "periodLaborPerOrder": 7,
      "baseDailyShifts": 2,
      "registeredStaff": 3,
      "registeredGap": 0,
      "peakDayOrders": 208,
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
      "requiredPeakSpeed": 13.3,
      "monthlyShifts": 84,
      "averageDailyAttendance": 2.8,
      "scheduledOrdersPerShift": 67.3,
      "scheduledLoadRate": 0.449,
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
          "days": 7,
          "periodOrders": 0,
          "dailyOrders": 0,
          "staff": 0.42857142857142855,
          "staffEnd": 3,
          "ordersPerPerson": 0,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/11—9/17",
          "days": 7,
          "periodOrders": 0,
          "dailyOrders": 0,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 0,
          "previousDailyOrders": 0,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/18—9/24",
          "days": 7,
          "periodOrders": 39,
          "dailyOrders": 5.571428571428571,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 1.857142857142857,
          "previousDailyOrders": 0,
          "wow": null,
          "comparison": "无前一周期数据"
        },
        {
          "period": "9/25—10/1",
          "days": 7,
          "periodOrders": 1100,
          "dailyOrders": 157.14285714285714,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 52.38095238095238,
          "previousDailyOrders": 5.571428571428571,
          "wow": 27.2051,
          "comparison": "9/18—9/24"
        },
        {
          "period": "10/2—10/8",
          "days": 7,
          "periodOrders": 1276,
          "dailyOrders": 182.28571428571428,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 60.76190476190476,
          "previousDailyOrders": 157.14285714285714,
          "wow": 0.16,
          "comparison": "9/25—10/1"
        },
        {
          "period": "10/9—10/15",
          "days": 7,
          "periodOrders": 1320,
          "dailyOrders": 188.57142857142858,
          "staff": 3,
          "staffEnd": 3,
          "ordersPerPerson": 62.85714285714286,
          "previousDailyOrders": 182.28571428571428,
          "wow": 0.0345,
          "comparison": "10/2—10/8"
        },
        {
          "period": "9/1—10/15 全期",
          "days": 45,
          "periodOrders": 3735,
          "dailyOrders": 83,
          "staff": 2.4,
          "staffEnd": 3,
          "ordersPerPerson": 34.583333333333336,
          "previousDailyOrders": null,
          "wow": null,
          "comparison": "全期汇总不计算周环比"
        }
      ],
      "daily": [
        {
          "date": "9/1",
          "orders": 0
        },
        {
          "date": "9/2",
          "orders": 0
        },
        {
          "date": "9/3",
          "orders": 0
        },
        {
          "date": "9/4",
          "orders": 0
        },
        {
          "date": "9/5",
          "orders": 0
        },
        {
          "date": "9/6",
          "orders": 0
        },
        {
          "date": "9/7",
          "orders": 0
        },
        {
          "date": "9/8",
          "orders": 0
        },
        {
          "date": "9/9",
          "orders": 0
        },
        {
          "date": "9/10",
          "orders": 0
        },
        {
          "date": "9/11",
          "orders": 0
        },
        {
          "date": "9/12",
          "orders": 0
        },
        {
          "date": "9/13",
          "orders": 0
        },
        {
          "date": "9/14",
          "orders": 0
        },
        {
          "date": "9/15",
          "orders": 0
        },
        {
          "date": "9/16",
          "orders": 0
        },
        {
          "date": "9/17",
          "orders": 0
        },
        {
          "date": "9/18",
          "orders": 0
        },
        {
          "date": "9/19",
          "orders": 0
        },
        {
          "date": "9/20",
          "orders": 0
        },
        {
          "date": "9/21",
          "orders": 0
        },
        {
          "date": "9/22",
          "orders": 0
        },
        {
          "date": "9/23",
          "orders": 0
        },
        {
          "date": "9/24",
          "orders": 39
        },
        {
          "date": "9/25",
          "orders": 140
        },
        {
          "date": "9/26",
          "orders": 140
        },
        {
          "date": "9/27",
          "orders": 150
        },
        {
          "date": "9/28",
          "orders": 156
        },
        {
          "date": "9/29",
          "orders": 130
        },
        {
          "date": "9/30",
          "orders": 173
        },
        {
          "date": "10/1",
          "orders": 211
        },
        {
          "date": "10/2",
          "orders": 189
        },
        {
          "date": "10/3",
          "orders": 218
        },
        {
          "date": "10/4",
          "orders": 145
        },
        {
          "date": "10/5",
          "orders": 200
        },
        {
          "date": "10/6",
          "orders": 172
        },
        {
          "date": "10/7",
          "orders": 176
        },
        {
          "date": "10/8",
          "orders": 176
        },
        {
          "date": "10/9",
          "orders": 192
        },
        {
          "date": "10/10",
          "orders": 179
        },
        {
          "date": "10/11",
          "orders": 208
        },
        {
          "date": "10/12",
          "orders": 205
        },
        {
          "date": "10/13",
          "orders": 182
        },
        {
          "date": "10/14",
          "orders": 199
        },
        {
          "date": "10/15",
          "orders": 155
        }
      ],
      "hourlyDetail": [
        {
          "hour": 0,
          "recentEstimate": 3.6,
          "baseStaff": 1,
          "peakSpeed": 3.6,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 1,
          "recentEstimate": 2.2,
          "baseStaff": 1,
          "peakSpeed": 2.2,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 2,
          "recentEstimate": 1.2,
          "baseStaff": 1,
          "peakSpeed": 1.2,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 3,
          "recentEstimate": 0.5,
          "baseStaff": 1,
          "peakSpeed": 0.5,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 4,
          "recentEstimate": 0.4,
          "baseStaff": 1,
          "peakSpeed": 0.4,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 5,
          "recentEstimate": 0.8,
          "baseStaff": 1,
          "peakSpeed": 0.8,
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
          "recentEstimate": 4.3,
          "baseStaff": 1,
          "peakSpeed": 4.3,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 8,
          "recentEstimate": 6.1,
          "baseStaff": 1,
          "peakSpeed": 6.1,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 9,
          "recentEstimate": 7.1,
          "baseStaff": 1,
          "peakSpeed": 7.1,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 10,
          "recentEstimate": 7.7,
          "baseStaff": 1,
          "peakSpeed": 7.7,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 11,
          "recentEstimate": 9.3,
          "baseStaff": 1,
          "peakSpeed": 9.3,
          "conservativeStaff": 1,
          "gap": 0
        },
        {
          "hour": 12,
          "recentEstimate": 9.6,
          "baseStaff": 1,
          "peakSpeed": 9.6,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 13,
          "recentEstimate": 8.3,
          "baseStaff": 1,
          "peakSpeed": 8.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 14,
          "recentEstimate": 7.9,
          "baseStaff": 1,
          "peakSpeed": 7.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 15,
          "recentEstimate": 8.3,
          "baseStaff": 1,
          "peakSpeed": 8.3,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 16,
          "recentEstimate": 11.4,
          "baseStaff": 1,
          "peakSpeed": 11.4,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 17,
          "recentEstimate": 13.3,
          "baseStaff": 1,
          "peakSpeed": 13.3,
          "conservativeStaff": 2,
          "gap": 0.8
        },
        {
          "hour": 18,
          "recentEstimate": 11.7,
          "baseStaff": 1,
          "peakSpeed": 11.7,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 19,
          "recentEstimate": 12.2,
          "baseStaff": 1,
          "peakSpeed": 12.2,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 20,
          "recentEstimate": 13,
          "baseStaff": 1,
          "peakSpeed": 13,
          "conservativeStaff": 2,
          "gap": 0.5
        },
        {
          "hour": 21,
          "recentEstimate": 12.2,
          "baseStaff": 1,
          "peakSpeed": 12.2,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 22,
          "recentEstimate": 9.9,
          "baseStaff": 1,
          "peakSpeed": 9.9,
          "conservativeStaff": 2,
          "gap": 0
        },
        {
          "hour": 23,
          "recentEstimate": 6.3,
          "baseStaff": 1,
          "peakSpeed": 6.3,
          "conservativeStaff": 2,
          "gap": 0
        }
      ],
      "judgment": "订单增长但当前负荷仍偏低，关注增长能否持续。",
      "risk": "低负荷可能推高单均人工；未核查订单和峰谷原因前不宜直接减员。",
      "action": "先拆解订单来源、缺货取消和小时覆盖，优先调班或共享替休，再评估编制。",
      "acceptance": "跟踪日均单量、负荷率、单均人工、小时覆盖、缺货取消、履约与评分变化。",
      "keyDataText": "日均 188.57142857142858 单，环比 +3.5%\n3 人，人均 62.85714285714286 单\n负荷 41.9%，单均人工 3.08 元",
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
        "shortBoard": "10.16暂无评分数据",
        "risk": "滨湖店未出现在10.16评分明细中，不能用0分代替。",
        "action": "补齐10.16评分后，再判断质量变化和整改优先级。"
      }
    }
  ],
  "weeklyTotals": [
    {
      "period": "9/4—9/10",
      "days": 7,
      "periodOrders": 20832,
      "dailyOrders": 2976,
      "staff": 18.999999999999996,
      "staffEnd": 20,
      "ordersPerPerson": 156.63157894736844,
      "previousDailyOrders": null,
      "wow": null,
      "comparison": "无前一周期数据"
    },
    {
      "period": "9/11—9/17",
      "days": 7,
      "periodOrders": 22674,
      "dailyOrders": 3239.1428571428573,
      "staff": 28.142857142857142,
      "staffEnd": 29,
      "ordersPerPerson": 115.09644670050763,
      "previousDailyOrders": 2976,
      "wow": 0.0884,
      "comparison": "9/4—9/10"
    },
    {
      "period": "9/18—9/24",
      "days": 7,
      "periodOrders": 22247,
      "dailyOrders": 3178.1428571428573,
      "staff": 29,
      "staffEnd": 29,
      "ordersPerPerson": 109.59113300492612,
      "previousDailyOrders": 3239.1428571428573,
      "wow": -0.0188,
      "comparison": "9/11—9/17"
    },
    {
      "period": "9/25—10/1",
      "days": 7,
      "periodOrders": 25350,
      "dailyOrders": 3621.4285714285716,
      "staff": 28.142857142857142,
      "staffEnd": 27,
      "ordersPerPerson": 128.6802030456853,
      "previousDailyOrders": 3178.1428571428573,
      "wow": 0.1395,
      "comparison": "9/18—9/24"
    },
    {
      "period": "10/2—10/8",
      "days": 7,
      "periodOrders": 24357,
      "dailyOrders": 3479.5714285714284,
      "staff": 27.714285714285715,
      "staffEnd": 28,
      "ordersPerPerson": 125.55154639175257,
      "previousDailyOrders": 3621.4285714285716,
      "wow": -0.0392,
      "comparison": "9/25—10/1"
    },
    {
      "period": "10/9—10/15",
      "days": 7,
      "periodOrders": 25230,
      "dailyOrders": 3604.285714285714,
      "staff": 28,
      "staffEnd": 28,
      "ordersPerPerson": 128.72448979591837,
      "previousDailyOrders": 3479.5714285714284,
      "wow": 0.0358,
      "comparison": "10/2—10/8"
    },
    {
      "period": "9/1—10/15 全期",
      "days": 45,
      "periodOrders": 148406,
      "dailyOrders": 3297.911111111111,
      "staff": 26.222222222222218,
      "staffEnd": 28,
      "ordersPerPerson": 125.76779661016951,
      "previousDailyOrders": null,
      "wow": null,
      "comparison": "全期汇总不计算周环比"
    }
  ],
  "aggregateHours": [
    {
      "hour": 0,
      "label": "00:00 - 01:00",
      "康桥店": 1433,
      "广丰路店": 727,
      "皮革城店": 884,
      "青浦店": 622,
      "七宝店": 859,
      "东站店": 580,
      "洛社店": 304,
      "滨湖店": 79.5
    },
    {
      "hour": 1,
      "label": "01:00 - 02:00",
      "康桥店": 948,
      "广丰路店": 506,
      "皮革城店": 632,
      "青浦店": 423,
      "七宝店": 622,
      "东站店": 357,
      "洛社店": 223,
      "滨湖店": 48.5
    },
    {
      "hour": 2,
      "label": "02:00 - 03:00",
      "康桥店": 729,
      "广丰路店": 340,
      "皮革城店": 569,
      "青浦店": 338,
      "七宝店": 500,
      "东站店": 248,
      "洛社店": 152,
      "滨湖店": 27
    },
    {
      "hour": 3,
      "label": "03:00 - 04:00",
      "康桥店": 494,
      "广丰路店": 185,
      "皮革城店": 422,
      "青浦店": 212,
      "七宝店": 362,
      "东站店": 183,
      "洛社店": 121,
      "滨湖店": 12
    },
    {
      "hour": 4,
      "label": "04:00 - 05:00",
      "康桥店": 346,
      "广丰路店": 158,
      "皮革城店": 296,
      "青浦店": 168,
      "七宝店": 305,
      "东站店": 128,
      "洛社店": 72,
      "滨湖店": 9.5
    },
    {
      "hour": 5,
      "label": "05:00 - 06:00",
      "康桥店": 314,
      "广丰路店": 142,
      "皮革城店": 247,
      "青浦店": 144,
      "七宝店": 249,
      "东站店": 139,
      "洛社店": 68,
      "滨湖店": 17
    },
    {
      "hour": 6,
      "label": "06:00 - 07:00",
      "康桥店": 439,
      "广丰路店": 219,
      "皮革城店": 300,
      "青浦店": 220,
      "七宝店": 276,
      "东站店": 182,
      "洛社店": 102,
      "滨湖店": 49
    },
    {
      "hour": 7,
      "label": "07:00 - 08:00",
      "康桥店": 713,
      "广丰路店": 372,
      "皮革城店": 436,
      "青浦店": 321,
      "七宝店": 449,
      "东站店": 381,
      "洛社店": 134,
      "滨湖店": 95
    },
    {
      "hour": 8,
      "label": "08:00 - 09:00",
      "康桥店": 951,
      "广丰路店": 683,
      "皮革城店": 794,
      "青浦店": 498,
      "七宝店": 646,
      "东站店": 644,
      "洛社店": 255,
      "滨湖店": 134
    },
    {
      "hour": 9,
      "label": "09:00 - 10:00",
      "康桥店": 1218,
      "广丰路店": 808,
      "皮革城店": 821,
      "青浦店": 623,
      "七宝店": 803,
      "东站店": 772,
      "洛社店": 334,
      "滨湖店": 157
    },
    {
      "hour": 10,
      "label": "10:00 - 11:00",
      "康桥店": 1365,
      "广丰路店": 964,
      "皮革城店": 972,
      "青浦店": 780,
      "七宝店": 993,
      "东站店": 859,
      "洛社店": 388,
      "滨湖店": 170
    },
    {
      "hour": 11,
      "label": "11:00 - 12:00",
      "康桥店": 1381,
      "广丰路店": 1031,
      "皮革城店": 1015,
      "青浦店": 778,
      "七宝店": 992,
      "东站店": 928,
      "洛社店": 436,
      "滨湖店": 205.5
    },
    {
      "hour": 12,
      "label": "12:00 - 13:00",
      "康桥店": 1462,
      "广丰路店": 1026,
      "皮革城店": 925,
      "青浦店": 779,
      "七宝店": 1066,
      "东站店": 979,
      "洛社店": 419,
      "滨湖店": 211
    },
    {
      "hour": 13,
      "label": "13:00 - 14:00",
      "康桥店": 1490,
      "广丰路店": 1000,
      "皮革城店": 928,
      "青浦店": 765,
      "七宝店": 1134,
      "东站店": 945,
      "洛社店": 434,
      "滨湖店": 181.5
    },
    {
      "hour": 14,
      "label": "14:00 - 15:00",
      "康桥店": 1495,
      "广丰路店": 982,
      "皮革城店": 837,
      "青浦店": 752,
      "七宝店": 1020,
      "东站店": 884,
      "洛社店": 381,
      "滨湖店": 174
    },
    {
      "hour": 15,
      "label": "15:00 - 16:00",
      "康桥店": 1479,
      "广丰路店": 945,
      "皮革城店": 914,
      "青浦店": 796,
      "七宝店": 1017,
      "东站店": 853,
      "洛社店": 422,
      "滨湖店": 182
    },
    {
      "hour": 16,
      "label": "16:00 - 17:00",
      "康桥店": 1668,
      "广丰路店": 1089,
      "皮革城店": 1005,
      "青浦店": 824,
      "七宝店": 1098,
      "东站店": 1012,
      "洛社店": 474,
      "滨湖店": 251.5
    },
    {
      "hour": 17,
      "label": "17:00 - 18:00",
      "康桥店": 1820,
      "广丰路店": 1291,
      "皮革城店": 1230,
      "青浦店": 899,
      "七宝店": 1138,
      "东站店": 1194,
      "洛社店": 554,
      "滨湖店": 292
    },
    {
      "hour": 18,
      "label": "18:00 - 19:00",
      "康桥店": 2109,
      "广丰路店": 1456,
      "皮革城店": 1481,
      "青浦店": 1099,
      "七宝店": 1449,
      "东站店": 1421,
      "洛社店": 612,
      "滨湖店": 257.5
    },
    {
      "hour": 19,
      "label": "19:00 - 20:00",
      "康桥店": 2414,
      "广丰路店": 1577,
      "皮革城店": 1543,
      "青浦店": 1234,
      "七宝店": 1554,
      "东站店": 1531,
      "洛社店": 588,
      "滨湖店": 269
    },
    {
      "hour": 20,
      "label": "20:00 - 21:00",
      "康桥店": 2628,
      "广丰路店": 1719,
      "皮革城店": 1581,
      "青浦店": 1158,
      "七宝店": 1671,
      "东站店": 1491,
      "洛社店": 658,
      "滨湖店": 287
    },
    {
      "hour": 21,
      "label": "21:00 - 22:00",
      "康桥店": 2733,
      "广丰路店": 1625,
      "皮革城店": 1559,
      "青浦店": 1139,
      "七宝店": 1645,
      "东站店": 1564,
      "洛社店": 702,
      "滨湖店": 269
    },
    {
      "hour": 22,
      "label": "22:00 - 23:00",
      "康桥店": 2567,
      "广丰路店": 1375,
      "皮革城店": 1456,
      "青浦店": 1061,
      "七宝店": 1499,
      "东站店": 1284,
      "洛社店": 559,
      "滨湖店": 217.5
    },
    {
      "hour": 23,
      "label": "23:00 - 00:00",
      "康桥店": 2006,
      "广丰路店": 1030,
      "皮革城店": 1186,
      "青浦店": 835,
      "七宝店": 1081,
      "东站店": 917,
      "洛社店": 422,
      "滨湖店": 139
    }
  ],
  "ratingSummary": {
    "score916": 59.5,
    "score922": 67.9,
    "scoreChange": 8.4,
    "ratedStoreCount": 6,
    "currentRatedStoreCount": 7,
    "previousRatedStoreCount": 6,
    "comparableStoreCount": 6,
    "totalStoreCount": 8,
    "missingStores": [
      "滨湖店"
    ],
    "missingPreviousStores": [
      "洛社店",
      "滨湖店"
    ],
    "diamondStores": [
      "广丰路店"
    ],
    "biggestImprovement": "康桥店",
    "biggestImprovementChange": 22.3,
    "mainRisk": "评分短板主要分布在商品体验、配送履约和缺货退款；洛社店、滨湖店缺少9.16评分，滨湖店缺少10.16评分。",
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
