import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calculator,
  ChevronRight,
  GanttChartSquare,
  Globe,
  LayoutList,
  PencilRuler,
  SearchCheck,
  Target,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function RoadMap() {
  const { t } = useTranslation();
  const [activeGoalTab, setActiveGoalTab] = useState(0);

  const departmentalGoals = [
    {
      id: "prod-mgmt",
      name: t("goal_name_1"),
      icon: <GanttChartSquare className="w-6 h-6" />,
      color: "blue",
      objectives: [
        {
          title: t("sub_goal_name_1_1"),
          items: [
            t("sub_goal_desc_1_1_1"),
            t("sub_goal_desc_1_1_2"),
            t("sub_goal_desc_1_1_3"),
          ],
        },
        {
          title: t("sub_goal_name_1_2"),
          items: [
            t("sub_goal_desc_1_2_1"),
            t("sub_goal_desc_1_2_2"),
            t("sub_goal_desc_1_2_3"),
          ],
        },
        {
          title: t("sub_goal_name_1_3"),
          items: [
            t("sub_goal_desc_1_3_1"),
            t("sub_goal_desc_1_3_2"),
            t("sub_goal_desc_1_3_3"),
          ],
        },
      ],
    },
    {
      id: "fabrication",
      name: t("goal_name_4"),
      icon: <Wrench className="w-6 h-6" />,
      color: "orange",
      objectives: [
        {
          title: t("goal_name_5"),
          items: [t("sub_goal_desc_2_1_1"), t("sub_goal_desc_2_1_2")],
        },
        {
          title: t("goal_name_6"),
          items: [
            t("sub_goal_desc_2_1_3"),
            t("sub_goal_desc_2_1_4"),
            t("sub_goal_desc_2_1_5"),
            t("sub_goal_desc_2_1_6"),
          ],
        },
      ],
    },
    {
      id: "qa-qc",
      name: t("goal_name_7"),
      icon: <SearchCheck className="w-6 h-6" />,
      color: "green",
      objectives: [
        {
          title: t("goal_name_8"),
          items: [t("sub_goal_desc_3_1_1"), t("sub_goal_desc_3_1_2")],
        },
        {
          title: t("goal_name_9"),
          items: [t("sub_goal_desc_3_1_3"), t("sub_goal_desc_3_1_4")],
        },
        {
          title: t("goal_name_10"),
          items: [t("sub_goal_desc_3_1_5"), t("sub_goal_desc_3_1_6")],
        },
      ],
    },
    {
      id: "design",
      name: t("goal_name_11"),
      icon: <PencilRuler className="w-6 h-6" />,
      color: "purple",
      objectives: [
        {
          title: t("goal_name_12"),
          items: [t("sub_goal_desc_4_1_1"), t("sub_goal_desc_4_1_2")],
        },
      ],
      currentStatus: {
        month: "Tháng 04/2026",
        data: [
          {
            label: "Trễ tiến độ > 7 ngày",
            value: 0,
            target: "≤ 1",
          },
          {
            label: "Lỗi không phù hợp (KPH)",
            value: 0,
            target: "≤ 4",
          },
          {
            label: "Khiếu nại (KNKH)",
            value: 0,
            target: "≤ 3",
            value: 0,
            target: "≤ 3",
          },
        ],
      },
    },
    {
      id: "admin",
      name: t("goal_name_13"),
      icon: <LayoutList className="w-6 h-6" />,
      color: "gray",
      objectives: [
        {
          title: t("goal_name_14"),
          items: [t("sub_goal_desc_5_1_1"), t("sub_goal_desc_5_1_2")],
        },
        {
          title: t("goal_name_15"),
          items: [t("sub_goal_desc_5_1_3"), t("sub_goal_desc_5_1_4")],
        },
      ],
    },
    {
      id: "hr",
      name: t("goal_name_16"),
      icon: <Users className="w-6 h-6" />,
      color: "pink",
      objectives: [
        {
          title: t("goal_name_17"),
          items: ["Chuẩn hóa & Cải tiến"],
          items: [
            "Chuẩn hóa nội quy phù hợp pháp luật và văn hóa công ty.",
            "Cải tiến phần mềm Mankichi: đúng, nhanh, thuận tiện.",
          ],
        },
        {
          title: t("goal_name_18"),
          items: [
            "Hệ thống đánh giá công bằng, minh bạch.",
            "Kiểm soát chi phí vận hành: VPP, thiết bị văn phòng.",
          ],
        },
      ],
    },
    {
      id: "accounting",
      name: t("goal_name_19"),
      icon: <Calculator className="w-6 h-6" />,
      color: "cyan",
      objectives: [
        {
          title: t("goal_name_20"),
          items: [
            "Giảm lỗi nhập liệu, tăng tốc xử lý dữ liệu.",
            "Cải thiện quản lý giá thành dự án và giờ công thực tế.",
          ],
        },
        {
          title: t("goal_name_21"),
          items: ["Nâng cao chất lượng và tính ứng dụng của báo cáo nội bộ."],
        },
      ],
    },
    {
      id: "sales",
      name: t("goal_name_22"),
      icon: <Globe className="w-6 h-6" />,
      color: "emerald",
      objectives: [
        {
          title: "Thị trường & Doanh thu",
          items: [
            "Mở rộng khách hàng thiết bị áp lực, heat exchanger, kết cấu thép.",
            "Tăng lợi nhuận qua kiểm soát giá thành và tối ưu hiệu quả dự án.",
          ],
        },
        {
          title: "Chăm sóc & Năng lực",
          items: [
            "Phản hồi khách hàng nhanh chóng, đúng tiến độ.",
            "Nâng cao kỹ năng Sales, ngoại ngữ và quản lý dự án.",
          ],
        },
      ],
    },
    {
      id: "purchasing",
      name: t("goal_name_23"),
      icon: <Wallet className="w-6 h-6" />,
      color: "amber",
      objectives: [
        {
          title: t("goal_name_24"),
          items: [
            "Đảm bảo mua hàng đúng kỹ thuật; tỷ lệ KPH ≤ 5%.",
            "Giao hàng đúng tiến độ; số đơn trễ ≤ 3 đơn/năm.",
          ],
        },
        {
          title: t("goal_name_25"),
          items: [
            "Chi phí thực tế thấp hơn dự toán tối thiểu 3% mỗi đơn hàng.",
            "Đảm bảo giá thành cạnh tranh mang lại lợi ích cao nhất.",
          ],
        },
      ],
    },
  ];

  return (
    <section id="strategic-goals" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-industrial-blue/10 text-industrial-blue font-bold text-xs mb-4 tracking-widest uppercase">
              2026 ROADMAP
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-industrial-blue leading-tight">
              {"Mục Tiêu Chiến Lược 2026"}
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Dept Sidebar */}
          <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 no-scrollbar pb-4 lg:pb-0">
            {departmentalGoals.map((dept, idx) => (
              <button
                key={dept.id}
                onClick={() => setActiveGoalTab(idx)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-2xl text-left transition-all shrink-0 lg:shrink",
                  activeGoalTab === idx
                    ? "bg-industrial-blue !text-white shadow-xl shadow-industrial-blue/20"
                    : "bg-gray-50 text-industrial-gray hover:bg-gray-100",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    activeGoalTab === idx
                      ? "bg-primary text-white"
                      : "bg-white text-industrial-gray shadow-sm",
                  )}
                >
                  {dept.icon}
                </div>
                <span className="font-bold text-sm whitespace-nowrap lg:whitespace-normal">
                  {dept.name}
                </span>
                {activeGoalTab === idx && (
                  <ChevronRight className="ml-auto hidden lg:block" size={18} />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGoalTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg">
                    {departmentalGoals[activeGoalTab].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-industrial-blue">
                      {departmentalGoals[activeGoalTab].name}
                    </h3>
                  
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {departmentalGoals[activeGoalTab].objectives.map(
                    (obj, oIdx) => (
                      <div
                        key={oIdx}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-2 h-8 bg-primary rounded-full" />
                          <h4 className="font-bold text-industrial-blue text-lg">
                            {obj.title}
                          </h4>
                        </div>
                        <ul className="space-y-4">
                          {obj.items.map((item, iIdx) => (
                            <li
                              key={iIdx}
                              className="flex gap-3 text-sm text-industrial-gray leading-relaxed"
                            >
                              <Target className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>

                {/* Special Status for Design Department */}
                {departmentalGoals[activeGoalTab].currentStatus && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-industrial-blue rounded-[2rem] p-8 text-white relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <BarChart3 size={120} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <h4 className="text-xl font-bold flex items-center gap-3">
                          <ShieldAlert className="text-primary" />
                          {"Tình trạng thực hiện"}
                        </h4>
                        <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold backdrop-blur-md">
                          {
                            departmentalGoals[activeGoalTab].currentStatus
                              ?.month
                          }
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {departmentalGoals[
                          activeGoalTab
                        ].currentStatus?.data.map((stat, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-white/5 border border-white/10 p-5 rounded-2xl"
                          >
                            <div className="text-gray-400 text-xs font-bold uppercase mb-2">
                              {stat.label}
                            </div>
                            <div className="flex items-end gap-3">
                              <div className="text-3xl font-display font-bold text-primary">
                                {stat.value}
                              </div>
                              <div className="text-xs text-white/40 mb-1">
                                Target: {stat.target}
                              </div>
                            </div>
                            <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-1000"
                                style={{
                                  width: stat.value === 0 ? "0%" : "100%",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-8 text-white/50 text-xs italic">
                        *{" "}
                        {
                          "Dữ liệu được cập nhật tự động hàng tháng từ hệ thống QLSX."
                        }
                      </p>
                    </div>
                  </motion.div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
