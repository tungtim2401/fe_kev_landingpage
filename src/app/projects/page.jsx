"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Thermometer, 
  ShieldCheck, 
  Factory, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X,
  CheckCircle2,
  Globe,
  Award
} from 'lucide-react';
import { cn } from '../../lib/utils';
// import { GoogleGenAI } from "@google/genai";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const generateHero = async () => {
      // try {
      //   // const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      //   const response = await ai.models.generateContent({
      //     model: 'gemini-2.5-flash-image',
      //     contents: {
      //       parts: [
      //         {
      //           text: 'A high-quality, professional photograph of a massive industrial pressure vessel and heat exchanger system inside a modern, clean factory. Dramatic lighting, cinematic atmosphere, 8k resolution, industrial engineering excellence.',
      //         },
      //       ],
      //     },
      //   });
        
      //   for (const part of response.candidates?.[0]?.content?.parts || []) {
      //     if (part.inlineData) {
      //       setHeroImage(`data:image/png;base64,${part.inlineData.data}`);
      //       break;
      //     }
      //   }
      // } catch (error) {
      //   console.error("Failed to generate hero image:", error);
      // }
    };

    generateHero();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Bồn Áp Lực (Pressure Vessels)",
      description: "Thiết kế và chế tạo bồn áp lực tiêu chuẩn ASME, đảm bảo an toàn tuyệt đối cho các hệ thống khí nén, LPG, và hóa chất.",
      icon: <ShieldCheck className="w-8 h-8 text-accent-orange" />,
    },
    {
      title: "Hệ Thống Trao Đổi Nhiệt",
      description: "Giải pháp tối ưu hóa nhiệt năng cho nhà máy giấy, thực phẩm và dệt nhuộm với hiệu suất truyền nhiệt vượt trội.",
      icon: <Thermometer className="w-8 h-8 text-accent-orange" />,
    },
    {
      title: "Lắp Đặt Đường Ống Công Nghiệp",
      description: "Thi công hệ thống đường ống áp lực cao, đường ống vi sinh cho các nhà máy dược phẩm và đồ uống.",
      icon: <Settings className="w-8 h-8 text-accent-orange" />,
    },
    {
      title: "Bảo Trì & Nâng Cấp",
      description: "Dịch vụ kiểm định, bảo trì định kỳ và cải tiến công nghệ cho các hệ thống nhiệt, áp suất hiện hữu.",
      icon: <Factory className="w-8 h-8 text-accent-orange" />,
    }
  ];

  const products = [
    {
      name: "Bình Tích Áp Cao Cấp",
      category: "Bồn Áp Lực",
      image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800",
      specs: ["Dung tích: 100L - 50,000L", "Áp suất: Lên đến 100 Bar", "Vật liệu: Thép Q345R, SUS304"]
    },
    {
      name: "Bộ Trao Đổi Nhiệt Dạng Bản",
      category: "Thiết Bị Nhiệt",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      specs: ["Hiệu suất: >95%", "Nhiệt độ: -50°C đến 250°C", "Tiêu chuẩn: ISO 9001"]
    },
    {
      name: "Hệ Thống Lò Hơi Tầng Sôi",
      category: "Năng Lượng",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
      specs: ["Công suất: 1 - 50 Tấn/h", "Nhiên liệu: Biomass, Than", "Tự động hóa: PLC/SCADA"]
    },
    {
      name: "Bồn Chứa Hóa Chất Vi Sinh",
      category: "Dược Phẩm",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      specs: ["Độ bóng: Ra < 0.4µm", "Tiệt trùng: SIP/CIP", "Chứng chỉ: FDA/GMP"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Khảo Sát & Tư Vấn",
      desc: "Đội ngũ kỹ sư trực tiếp khảo sát hiện trường, phân tích nhu cầu và đưa ra giải pháp kỹ thuật tối ưu nhất cho doanh nghiệp.",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600"
    },
    {
      step: "02",
      title: "Thiết Kế Kỹ Thuật",
      desc: "Sử dụng phần mềm chuyên dụng (PV Elite, AutoCAD) để tính toán độ bền áp lực và mô phỏng nhiệt theo tiêu chuẩn ASME.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600"
    },
    {
      step: "03",
      title: "Chế Tạo & Kiểm Định",
      desc: "Gia công tại xưởng với quy trình hàn tự động. Kiểm tra NDT (Siêu âm, Chụp X-quang) và thử áp thủy lực nghiêm ngặt.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
    },
    {
      step: "04",
      title: "Lắp Đặt & Bàn Giao",
      desc: "Vận chuyển, lắp đặt tại nhà máy và hướng dẫn vận hành. Cung cấp đầy đủ hồ sơ kiểm định và chứng nhận xuất xưởng.",
      img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const stats = [
    { label: "Năm Kinh Nghiệm", value: "15+" },
    { label: "Dự Án Hoàn Thành", value: "500+" },
    { label: "Kỹ Sư Chuyên Gia", value: "50+" },
    { label: "Đối Tác Doanh Nghiệp", value: "200+" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-industrial-blue selection:bg-accent-orange selection:text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent-orange flex items-center justify-center rounded-lg shadow-lg shadow-orange-500/20">
              <Factory className="text-white w-6 h-6" />
            </div>
            <span className={cn(
              "font-display text-xl font-bold tracking-tight",
              scrolled ? "text-industrial-blue" : "text-white"
            )}>
              INDUS<span className="text-accent-orange">PRO</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className={cn(
            "hidden md:flex items-center gap-8 font-medium",
            scrolled ? "text-industrial-gray" : "text-white/90"
          )}>
            <a href="#about" className="hover:text-accent-orange transition-colors">Về chúng tôi</a>
            <a href="#services" className="hover:text-accent-orange transition-colors">Dịch vụ</a>
            <a href="#projects" className="hover:text-accent-orange transition-colors">Sản phẩm</a>
            <a href="#process" className="hover:text-accent-orange transition-colors">Quy trình</a>
            <a href="#contact" className="px-5 py-2.5 bg-accent-orange text-white rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">Liên hệ ngay</a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-accent-orange" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 text-xl font-bold md:hidden"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Dịch vụ</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Sản phẩm</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>Quy trình</a>
            <a href="#contact" className="text-accent-orange" onClick={() => setIsMenuOpen(false)}>Liên hệ ngay</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-industrial-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-blue via-industrial-blue/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-sm font-bold mb-6">
              <Award size={16} />
              <span>TIÊU CHUẨN QUỐC TẾ ASME & ISO</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Giải Pháp <span className="text-accent-orange">Nhiệt & Áp Lực</span> Cho Công Nghiệp Nặng
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
              Chúng tôi cung cấp các hệ thống bồn áp lực và thiết bị trao đổi nhiệt hiệu suất cao cho các tập đoàn đa quốc gia và nhà máy quy mô lớn tại Việt Nam.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-accent-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-all flex items-center gap-2 group shadow-xl shadow-orange-500/30">
                Xem Catalog Sản Phẩm
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
                Tư Vấn Kỹ Thuật
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-industrial-blue mb-2">{stat.value}</div>
                <div className="text-industrial-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold mb-6">Năng Lực Sản Xuất & Dịch Vụ</h2>
            <p className="text-industrial-gray text-lg">
              Với dây chuyền công nghệ hiện đại và đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang đến những sản phẩm đạt chuẩn chất lượng khắt khe nhất.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-industrial-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="text-accent-orange font-bold flex items-center gap-2 group">
                  Chi tiết <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold mb-6">Sản Phẩm Tiêu Biểu</h2>
              <p className="text-industrial-gray text-lg">
                Danh mục thiết bị áp lực và nhiệt năng được tin dùng bởi các nhà máy hàng đầu trong khu vực KCN Hiệp Phước, Amata, VSIP.
              </p>
            </div>
            <button className="px-6 py-3 border-2 border-accent-orange text-accent-orange font-bold rounded-xl hover:bg-accent-orange hover:text-white transition-all">
              Tải Toàn Bộ Catalog
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-industrial-blue/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent-orange transition-colors">{product.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="text-sm text-industrial-gray flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent-orange rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-white border border-gray-200 text-industrial-blue font-bold rounded-xl hover:bg-industrial-blue hover:text-white transition-all text-sm">
                    Yêu Cầu Báo Giá
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-industrial-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold mb-6">Quy Trình Triển Khai Chuyên Nghiệp</h2>
            <p className="text-white/60 text-lg">
              Từ ý tưởng đến vận hành thực tế, chúng tôi áp dụng quy trình kiểm soát chất lượng 4 bước nghiêm ngặt.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-5xl font-display font-bold text-accent-orange/30 mb-2">{step.step}</div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed px-2">
                  {step.desc}
                </p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 z-20">
                    <ArrowRight className="text-accent-orange w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-orange/10 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
              alt="Factory Interior" 
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-industrial-blue p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4 text-white">
                <ShieldCheck className="text-accent-orange w-10 h-10" />
                <div>
                  <div className="font-bold text-xl">An Toàn Tuyệt Đối</div>
                  <div className="text-white/60 text-sm">Kiểm định độc lập 100%</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-4xl font-bold mb-8 leading-tight">Đối Tác Tin Cậy Của Các Nhà Máy Lớn</h2>
            <div className="space-y-6">
              {[
                "Thiết kế theo yêu cầu kỹ thuật đặc thù của từng ngành.",
                "Sử dụng vật liệu thép không gỉ, thép chịu nhiệt cao cấp.",
                "Quy trình hàn đạt chuẩn quốc tế với thợ hàn tay nghề cao.",
                "Hỗ trợ kỹ thuật 24/7 và bảo hành dài hạn lên đến 5 năm."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-accent-orange shrink-0 mt-1" />
                  <p className="text-industrial-gray text-lg">{item}</p>
                </div>
              ))}
            </div>
            <button className="mt-10 px-8 py-4 border-2 border-industrial-blue text-industrial-blue font-bold rounded-xl hover:bg-industrial-blue hover:text-white transition-all">
              Tìm Hiểu Thêm Về Chúng Tôi
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-industrial-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-orange/10 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gray-50 p-12">
              <h2 className="font-display text-3xl font-bold mb-8">Liên Hệ Tư Vấn</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-industrial-gray font-medium">Hotline 24/7</div>
                    <div className="font-bold text-lg">+84 123 456 789</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-orange">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-industrial-gray font-medium">Email</div>
                    <div className="font-bold text-lg">contact@induspro.vn</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-industrial-gray font-medium">Địa chỉ</div>
                    <div className="font-bold text-lg">KCN Hiệp Phước, Nhà Bè, TP. HCM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-12">
              <form className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold mb-2">Họ và tên</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-all" placeholder="Nguyễn Văn A" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-all" placeholder="090..." />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold mb-2">Tên doanh nghiệp</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-all" placeholder="Công ty TNHH..." />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold mb-2">Nội dung yêu cầu</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-all h-32" placeholder="Mô tả sơ lược về nhu cầu của bạn..."></textarea>
                </div>
                <div className="col-span-2">
                  <button className="w-full py-4 bg-accent-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                    Gửi Yêu Cầu Tư Vấn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-accent-orange flex items-center justify-center rounded-lg">
                  <Factory className="text-white w-5 h-5" />
                </div>
                <span className="font-display text-xl font-bold tracking-tight text-industrial-blue">
                  INDUS<span className="text-accent-orange">PRO</span>
                </span>
              </div>
              <p className="text-industrial-gray max-w-sm mb-8 leading-relaxed">
                Đơn vị hàng đầu trong lĩnh vực thiết kế, chế tạo và lắp đặt hệ thống bồn áp lực, thiết bị trao đổi nhiệt công nghiệp tại Việt Nam.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-industrial-gray hover:bg-accent-orange hover:text-white transition-all">
                  <Globe size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-industrial-gray hover:bg-accent-orange hover:text-white transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Sản Phẩm</h4>
              <ul className="space-y-4 text-industrial-gray">
                <li><a href="#" className="hover:text-accent-orange transition-colors">Bồn chứa LPG</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">Bình tích áp</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">Bộ trao đổi nhiệt</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">Lò hơi công nghiệp</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Hỗ Trợ</h4>
              <ul className="space-y-4 text-industrial-gray">
                <li><a href="#" className="hover:text-accent-orange transition-colors">Tư vấn kỹ thuật</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">Chính sách bảo hành</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">Hồ sơ năng lực</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">Tuyển dụng</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 IndusPro Manufacturing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-industrial-blue">Điều khoản sử dụng</a>
              <a href="#" className="hover:text-industrial-blue">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
