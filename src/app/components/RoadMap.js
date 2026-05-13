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
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RoadMap() {
  const { t } = useTranslation();
  const [activeGoalTab, setActiveGoalTab] = useState(0);

  const departmentalGoals = [
    {
      id: "prod-mgmt",
      name: t("goal_name_1"),
      icon: <GanttChartSquare className="w-6 h-6" />,
      color: "blue",
      images: [
        "/images/roadmap/Phòng Quản Lí Sản Xuất/qlsx.jpg",
        "/images/roadmap/Phòng Quản Lí Sản Xuất/8 (5).png",
        "/images/roadmap/Phòng Quản Lí Sản Xuất/8 (12).png",
      ],
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
          items: [t("sub_goal_desc_1_2_1")],
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
      name: t("goal_name_2"),
      icon: <Wrench className="w-6 h-6" />,
      color: "orange",
      images: [
        "/images/roadmap/Phòng Chế tạo/z7807469404550_0e3d425597109b4dad04987d4195def2.jpg",
      ],
      objectives: [
        {
          title: t("sub_goal_name_2_1"),
          items: [t("sub_goal_desc_2_1_1"), t("sub_goal_desc_2_1_2")],
        },
        {
          title: t("sub_goal_name_2_2"),
          items: [
            t("sub_goal_desc_2_2_1"),
            t("sub_goal_desc_2_2_2"),
            t("sub_goal_desc_2_2_3"),
            t("sub_goal_desc_2_2_4"),
            t("sub_goal_desc_2_2_5"),
          ],
        },
      ],
    },
    {
      id: "qa-qc",
      name: t("goal_name_3"),
      icon: <SearchCheck className="w-6 h-6" />,
      color: "green",
      images: ["/images/roadmap/Phòng QA_QC/8 (14).png"],
      objectives: [
        {
          title: t("sub_goal_name_3_1"),
          items: [t("sub_goal_desc_3_1_1"), t("sub_goal_desc_3_1_2")],
        },
        {
          title: t("sub_goal_name_3_2"),
          items: [t("sub_goal_desc_3_2_1"), t("sub_goal_desc_3_2_2")],
        },
        {
          title: t("sub_goal_name_3_3"),
          items: [
            t("sub_goal_desc_3_3_1"),
            t("sub_goal_desc_3_3_2"),
            t("sub_goal_desc_3_3_3"),
          ],
        },
      ],
    },
    {
      id: "design",
      name: t("goal_name_4"),
      icon: <PencilRuler className="w-6 h-6" />,
      color: "purple",
      images: [
        "/images/roadmap/Phòng Thiết Kế/8 (11).png",
        "/images/roadmap/Phòng Thiết Kế/8 (13).png",
      ],
      objectives: [
        {
          title: t("sub_goal_name_4_1"),
          items: [t("sub_goal_desc_4_1_1"), t("sub_goal_desc_4_1_2")],
        },

        {
          title: t("sub_goal_name_4_2"),
          items: [
            t("sub_goal_desc_4_2_1"),
            t("sub_goal_desc_4_2_2"),
            t("sub_goal_desc_4_2_3"),
          ],
        },
        {
          title: t("sub_goal_name_4_3"),
          items: [
            t("sub_goal_desc_4_3_1"),
            t("sub_goal_desc_4_3_2"),
            t("sub_goal_desc_4_3_3"),
          ],
        },
      ],
    },
    {
      id: "admin",
      name: t("goal_name_5"),
      icon: <LayoutList className="w-6 h-6" />,
      color: "gray",
      images: ["/images/roadmap/Phòng Tổng vụ/tv.jpg"],
      objectives: [
        {
          title: t("sub_goal_name_5_1"),
          items: [t("sub_goal_desc_5_1_1"), t("sub_goal_desc_5_1_2")],
        },
        {
          title: t("sub_goal_name_5_2"),
          items: [t("sub_goal_desc_5_2_1"), t("sub_goal_desc_5_2_2")],
        },
        {
          title: t("sub_goal_name_5_3"),
          items: [t("sub_goal_desc_5_3_1"), t("sub_goal_desc_5_3_2")],
        },
      ],
    },
    {
      id: "hr",
      name: t("goal_name_6"),
      icon: <Users className="w-6 h-6" />,
      color: "pink",
      images: ["/images/roadmap/Phòng Nhân sự/ns.png"],
      objectives: [
        {
          title: t("sub_goal_name_6_1"),
          items: [t("sub_goal_desc_6_1_1"), t("sub_goal_desc_6_1_2")],
        },
        {
          title: t("sub_goal_name_6_2"),
          items: [t("sub_goal_desc_6_2_1"), t("sub_goal_desc_6_2_2")],
        },
      ],
    },
    {
      id: "accounting",
      name: t("goal_name_7"),
      icon: <Calculator className="w-6 h-6" />,
      color: "cyan",
      images: ["/images/roadmap/Phòng Kế toán/8 (2).png"],
      objectives: [
        {
          title: t("sub_goal_name_7_1"),
          items: [
            t("sub_goal_desc_7_1_1"),
            t("sub_goal_desc_7_1_2"),
            t("sub_goal_desc_7_1_3"),
          ],
        },
        {
          title: t("sub_goal_name_7_2"),
          items: [t("sub_goal_desc_7_2_1")],
        },
      ],
    },
    {
      id: "sales",
      name: t("goal_name_8"),
      icon: <Globe className="w-6 h-6" />,
      color: "emerald",
      images: [
        "/images/roadmap/Phòng Kinh doanh/kd1.jpg",
        "/images/roadmap/Phòng Kinh doanh/kd2.jpg",
      ],
      objectives: [
        {
          title: t("sub_goal_name_8_1"),
          items: [t("sub_goal_desc_8_1_1"), t("sub_goal_desc_8_1_2")],
        },
        {
          title: t("sub_goal_name_8_2"),
          items: [t("sub_goal_desc_8_2_1"), t("sub_goal_desc_8_2_2")],
        },
      ],
    },
    {
      id: "purchasing",
      name: t("goal_name_9"),
      icon: <Wallet className="w-6 h-6" />,
      color: "amber",
      images: ["/images/roadmap/Phòng Mua hàng/8 (3).png"],
      objectives: [
        {
          title: t("sub_goal_name_9_1"),
          items: [t("sub_goal_desc_9_1_1"), t("sub_goal_desc_9_1_2")],
        },
        {
          title: t("sub_goal_name_9_2"),
          items: [t("sub_goal_desc_9_2_1"), t("sub_goal_desc_9_2_2")],
        },
      ],
    },
  ];

  return (
    <section id="strategic-goals" className="py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-industrial-blue/10 text-industrial-blue font-bold text-xs mb-4 tracking-widest uppercase">
              2026 ROADMAP
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-industrial-blue leading-tight">
              {t("goal_title")}
            </h2>
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Sidebar */}
          <div className="lg:w-[320px] w-full flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 no-scrollbar pb-2 lg:pb-0 shrink-0">
            {departmentalGoals.map((dept, idx) => (
              <button
                key={dept.id}
                onClick={() => setActiveGoalTab(idx)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 shrink-0 lg:w-full border",
                  activeGoalTab === idx
                    ? "bg-industrial-blue !text-white shadow-xl shadow-industrial-blue/20 border-industrial-blue"
                    : "bg-gray-50 text-industrial-gray border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0",
                    activeGoalTab === idx
                      ? "bg-primary text-white"
                      : "bg-white text-industrial-gray shadow-sm",
                  )}
                >
                  {dept.icon}
                </div>

                <span className="font-bold text-sm whitespace-nowrap lg:whitespace-normal leading-snug">
                  {dept.name}
                </span>

                {activeGoalTab === idx && (
                  <ChevronRight
                    className="ml-auto hidden lg:block shrink-0"
                    size={18}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGoalTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg shrink-0">
                    {departmentalGoals[activeGoalTab].icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-industrial-blue leading-tight">
                      {departmentalGoals[activeGoalTab].name}
                    </h3>

                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">
                      Deployment Year: 2026
                    </p>
                  </div>
                </div>

                {/* Hero Image */}
                {departmentalGoals[activeGoalTab].images && (
                  <div className="mb-12 h-64 md:h-80 w-full rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 relative group">
                    <Swiper
                      modules={[Autoplay, Pagination, EffectFade]}
                      effect="fade"
                      speed={1000}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      pagination={{ clickable: true }}
                      className="h-full w-full"
                    >
                      {departmentalGoals[activeGoalTab].images?.map(
                        (img, idx) => (
                          <SwiperSlide key={idx} className="h-full w-full">
                            <img
                              src={img}
                              alt={`${departmentalGoals[activeGoalTab].name} ${
                                idx + 1
                              }`}
                              className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                          </SwiperSlide>
                        ),
                      )}
                    </Swiper>

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none z-10" />
                  </div>
                )}

                {/* Objectives */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                  {departmentalGoals[activeGoalTab].objectives.map(
                    (obj, oIdx) => (
                      <div
                        key={oIdx}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-2 h-8 bg-primary rounded-full shrink-0" />

                          <h4 className="font-bold text-industrial-blue text-lg leading-snug">
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
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>

                {/* Status */}
                {departmentalGoals[activeGoalTab].currentStatus && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-industrial-blue rounded-[2rem] p-6 md:p-8 text-white relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <BarChart3 size={120} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8 gap-4">
                        <h4 className="text-xl font-bold flex items-center gap-3">
                          <ShieldAlert className="text-primary shrink-0" />

                          {lang === "VN"
                            ? "Tình trạng thực hiện"
                            : "Current Performance"}
                        </h4>

                        <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold backdrop-blur-md whitespace-nowrap">
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
