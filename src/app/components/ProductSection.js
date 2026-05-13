import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react"; // Thêm useRef
import { ChevronDown, ChevronUp, Maximize2, X } from "lucide-react";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade } from "swiper/modules";

export default function ProductSection() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  const products = [
    {
      name: t("product_1"),
      category: t("cate_product_1"),
      images: [
        "/images/product/0/ggg.png",
        "/images/product/0/hhh.png",
        "/images/product/0/Product_image 1.png",
      ],
      specs: [t("specs_product_1_1"), t("specs_product_1_2")],
    },
    {
      name: t("product_2"),
      category: t("cate_product_2"),
      images: ["/images/product/1/hhh.png", "/images/product/1/towerr.png"],
      specs: [t("specs_product_2_1"), t("specs_product_2_2")],
    },
    {
      name: t("product_3"),
      category: t("cate_product_3"),
      images: ["/images/product/2/3.png", "/images/product/2/hhh.png"],
      specs: [t("specs_product_3_1"), t("specs_product_3_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      images: [
        "/images/product/3/22K54 (2).png",
        "/images/product/3/Product 3 (22K54).png",
      ],
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_5"),
      category: t("cate_product_5"),
      images: [
        "/images/product/4/04.png",
        "/images/product/4/19K21 (product 4).png",
        "/images/product/4/Product 4 (19K21).png",
        "/images/product/4/Product 4 (23K52).png",
      ],
      specs: [t("specs_product_5_1"), t("specs_product_5_2")],
    },
    {
      name: t("product_6"),
      category: t("cate_product_6"),
      images: [
        "/images/product/5/19K65 (Product 5-1).png",
        "/images/product/5/19K65 (Product 05-2).png",
        "/images/product/5/19K65 (Product 05-3).png",
        "/images/product/5/19K65 (product 05).png",
      ],
      specs: [t("specs_product_6_1"), t("specs_product_6_2")],
    },
    {
      name: t("product_7"),
      category: t("cate_product_7"),
      images: [
        "/images/product/6/6.png",
        "/images/product/6/06.png",
        "/images/product/6/ảnh 06.png",
      ],
      specs: [t("specs_product_7_1"), t("specs_product_7_2")],
    },
    {
      name: t("product_8"),
      category: t("cate_product_8"),
      images: ["/images/product/7/07.png", "/images/product/7/21K01.png"],
      specs: [t("specs_product_8_1"), t("specs_product_8_2")],
    },
    {
      name: t("product_9"),
      category: t("cate_product_9"),
      images: [
        "/images/product/8/08.png",
        "/images/product/8/008.png",
        "/images/product/8/ddd.png",
        "/images/product/8/gggg.png",
      ],
      specs: [t("specs_product_9_1"), t("specs_product_9_2")],
    },
    {
      name: t("product_10"),
      category: t("cate_product_10"),
      images: ["/images/product/9/09.png", "/images/product/9/15K64.png"],
      specs: [t("specs_product_10_1"), t("specs_product_10_2")],
    },
    {
      name: t("product_11"),
      category: t("cate_product_11"),
      images: [
        "/images/product/10/16K60 (Product 10).png",
        "/images/product/10/16K60.png",
      ],
      specs: [t("specs_product_11_1"), t("specs_product_11_2")],
    },
    {
      name: t("product_12"),
      category: t("cate_product_12"),
      images: [
        "/images/product/11/17K24 (2).png",
        "/images/product/11/17K24.png",
      ],
      specs: [t("specs_product_12_1"), t("specs_product_12_2")],
    },
    {
      name: t("product_13"),
      category: t("cate_product_13"),
      images: [
        "/images/product/12/17K52 (Product 12).png",
        "/images/product/12/17K52-2 (12).png",
      ],
      specs: [t("specs_product_13_1"), t("specs_product_13_2")],
    },
    {
      name: t("product_14"),
      category: t("cate_product_14"),
      images: [
        "/images/product/13/12K03 (13).png",
        "/images/product/13/13.png",
      ],
      specs: [t("specs_product_14_1"), t("specs_product_14_2")],
    },
    {
      name: t("product_15"),
      category: t("cate_product_15"),
      images: [
        "/images/product/14/24K43 (Product 14).png",
        "/images/product/14/24K43.png",
      ],
      specs: [t("specs_product_15_1"), t("specs_product_15_2")],
    },
    {
      name: t("product_16"),
      category: t("cate_product_16"),
      images: [
        "/images/product/15/15.png",
        "/images/product/15/Product 15.png",
      ],
      specs: [t("specs_product_16_1"), t("specs_product_16_2")],
    },
    {
      name: t("product_17"),
      category: t("cate_product_17"),
      images: ["/images/product/16/15K36 (Product 16).png"],
      specs: [t("specs_product_17_1"), t("specs_product_17_2")],
    },
    {
      name: t("product_18"),
      category: t("cate_product_18"),
      images: [
        "/images/product/17/bbb.png",
        "/images/product/17/ccc.png",
        "/images/product/17/gggg.png",
      ],
      // specs: [t("specs_product_18_1"), t("specs_product_18_2")],
    },
    {
      name: t("product_19"),
      category: t("cate_product_19"),
      images: [
        "/images/product/18/hhhh.png",
        "/images/product/18/rrrr.png",
        "/images/product/18/ssss.png",
      ],
      // specs: [t("specs_product_19_1"), t("specs_product_19_2")],
    },
    {
      name: t("product_20"),
      category: t("cate_product_20"),
      images: [
        "/images/product/19/14K40_POT (Small)2.png",
        "/images/product/19/19.png",
      ],
      // specs: [t("specs_product_20_1"), t("specs_product_20_2")],
    },
    {
      name: t("product_21"),
      category: t("cate_product_21"),
      images: [
        "/images/product/20/đaad.png",
        "/images/product/20/dd.png",
        "/images/product/20/ffff.png",
        "/images/product/20/ggfgf.png",
      ],
      // specs: [t("specs_product_21_1"), t("specs_product_21_2")],
    },
  ];
  const visibleProducts = isExpanded ? products : products.slice(0, 4);

  const handleToggle = () => {
    if (isExpanded) {
      // Khi đóng lại, cuộn nhẹ lên đầu Section để không bị mất dấu
      const offset = sectionRef.current.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
      // Delay việc set state một chút để khớp với nhịp cuộn (tùy chọn)
      setTimeout(() => setIsExpanded(false), 100);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-white/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-[110]"
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary">
            {t("nav_header_4")}
          </h2>
          {/* <p className="text-gray-300 text-lg">{t("product_desc")}</p> */}
        </div>
      </div>

      {/* Grid với layout transition */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product, idx) => (
          <motion.div
            key={idx}
            layout // Quan trọng: Giúp các card tự trượt về vị trí mới mượt mà
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
            className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <Swiper
                modules={[EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                className="h-full w-full"
                slideToClickedSlide={true}
                onClick={(swiper) => {
                  swiper.slideNext();
                }}
              >
                {product.images.map((item, idx) => (
                  <SwiperSlide key={idx} className="relative h-full w-full">
                    <img
                      src={item}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(item);
                      }}
                      className="absolute bottom-4 right-4 p-2.5 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 border border-white/30 shadow-lg"
                    >
                      <Maximize2 size={20} />
                    </button>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-industrial-blue/80 backdrop-blur-sm text-white text-xs font-bold rounded-full whitespace-pre-line">
                      {product.category}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors text-gray-800">
                {product.name}
              </h3>
              <ul className="space-y-2 mb-6">
                {product.specs?.map((spec, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    <div className="flex-1">{spec}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nút Toggle */}
      {products.length > 4 && (
        <motion.div layout className="mt-12 flex justify-center">
          <button
            onClick={handleToggle}
            className="cursor-pointer flex items-center gap-2 px-10 py-4 bg-primary !text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/30"
          >
            {isExpanded ? (
              <>
                {t("show_less")} <ChevronUp size={20} />
              </>
            ) : (
              <>
                {t("view_all")} <ChevronDown size={20} />
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
}
