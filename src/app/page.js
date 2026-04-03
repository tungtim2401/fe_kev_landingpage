"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Factory,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { processSteps, products, services, stats } from "@/constants/config";
import { NavHeader } from "./components/NavHeader";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import ProductSection from "./components/ProductSection";
import Image from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const generateHero = async () => {};

    generateHero();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-industrial-blue selection:bg-primary selection:text-white">
      {/* Navigation */}
      <NavHeader
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
      />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-industrial-blue">
        <HeroSection />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <StatsSection />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <ServicesSection />
      </section>

      {/* Product Gallery Section */}
      <section id="projects" className="py-24 bg-white">
        <ProductSection />
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-24 bg-industrial-blue text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold mb-6">
              Quy Trình Triển Khai Chuyên Nghiệp
            </h2>
            <p className="text-white/60 text-lg">
              Từ ý tưởng đến vận hành thực tế, chúng tôi áp dụng quy trình kiểm
              soát chất lượng 4 bước nghiêm ngặt.
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
                    <div className="text-5xl font-display font-bold text-primary/30 mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed px-2">
                  {step.desc}
                </p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 z-20">
                    <ArrowRight className="text-primary w-8 h-8" />
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
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000"
              alt="Factory Interior"
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-industrial-blue p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4 text-white">
                <ShieldCheck className="text-primary w-10 h-10" />
                <div>
                  <div className="font-bold text-xl">An Toàn Tuyệt Đối</div>
                  <div className="text-white/60 text-sm">
                    Kiểm định độc lập 100%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold mb-8 leading-tight">
              Đối Tác Tin Cậy Của Các Nhà Máy Lớn
            </h2>
            <div className="space-y-6">
              {[
                "Thiết kế theo yêu cầu kỹ thuật đặc thù của từng ngành.",
                "Sử dụng vật liệu thép không gỉ, thép chịu nhiệt cao cấp.",
                "Quy trình hàn đạt chuẩn quốc tế với thợ hàn tay nghề cao.",
                "Hỗ trợ kỹ thuật 24/7 và bảo hành dài hạn lên đến 5 năm.",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" />
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
      <section
        id="contact"
        className="py-24 bg-industrial-blue relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gray-50 p-12">
              <h2 className="font-display text-3xl font-bold mb-8">
                Liên Hệ Tư Vấn
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-industrial-gray font-medium">
                      Hotline 24/7
                    </div>
                    <div className="font-bold text-lg">+84 123 456 789</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-industrial-gray font-medium">
                      Email
                    </div>
                    <div className="font-bold text-lg">contact@induspro.vn</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-industrial-gray font-medium">
                      Địa chỉ
                    </div>
                    <div className="font-bold text-lg">
                      KCN Hiệp Phước, Nhà Bè, TP. HCM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-12">
              <form className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="090..."
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold mb-2">
                    Tên doanh nghiệp
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Công ty TNHH..."
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold mb-2">
                    Nội dung yêu cầu
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32"
                    placeholder="Mô tả sơ lược về nhu cầu của bạn..."
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
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
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
                  <Factory className="text-white w-5 h-5" />
                </div>
                <Image
                  src="/images/logo-cut.png"
                  alt=""
                  width={100}
                  height={50}
                />
              </div>
              <p className="text-industrial-gray max-w-sm mb-8 leading-relaxed">
                Đơn vị hàng đầu trong lĩnh vực thiết kế, chế tạo và lắp đặt hệ
                thống bồn áp lực, thiết bị trao đổi nhiệt công nghiệp tại Việt
                Nam.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-industrial-gray hover:bg-primary hover:text-white transition-all"
                >
                  <Globe size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-industrial-gray hover:bg-primary hover:text-white transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Sản Phẩm</h4>
              <ul className="space-y-4 text-industrial-gray">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bồn chứa LPG
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bình tích áp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bộ trao đổi nhiệt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Lò hơi công nghiệp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Hỗ Trợ</h4>
              <ul className="space-y-4 text-industrial-gray">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Tư vấn kỹ thuật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Chính sách bảo hành
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Hồ sơ năng lực
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Tuyển dụng
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 IndusPro Manufacturing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-industrial-blue">
                Điều khoản sử dụng
              </a>
              <a href="#" className="hover:text-industrial-blue">
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
