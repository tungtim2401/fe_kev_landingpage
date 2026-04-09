import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react"; // Thêm useRef
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProductSection() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null); // Tạo ref để định vị khi đóng

 const products = [
    {
      name: t("product_1"),
      category: t("cate_product_1"),
      image: "/images/product_1.png",
      specs: [t("specs_product_1_1"), t("specs_product_1_2")],
    },
    {
      name: t("product_2"),
      category: t("cate_product_2"),
      image: "/images/product_2.png",
      specs: [t("specs_product_2_1"), t("specs_product_2_2")],
    },
    {
      name: t("product_3"),
      category: t("cate_product_3"),
      image: "/images/product_3.png",
      specs: [t("specs_product_3_1"), t("specs_product_3_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
    },
    {
      name: t("product_4"),
      category: t("cate_product_4"),
      image: "/images/product_4.png",
      specs: [t("specs_product_4_1"), t("specs_product_4_2")],
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
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold mb-6 text-gray-200">
            {t("product")}
          </h2>
          <p className="text-gray-300 text-lg">{t("product_desc")}</p>
        </div>
      </div>

      {/* Grid với layout transition */}
      <motion.div 
        layout 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
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
                opacity: { duration: 0.2 } 
              }}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-industrial-blue/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors text-gray-800">
                  {product.name}
                </h3>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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