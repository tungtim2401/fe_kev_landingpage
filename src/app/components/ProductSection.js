import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ProductSection() {
  const { t } = useTranslation();

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
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold mb-6">
            {t("product")}
          </h2>
          <p className="text-industrial-gray text-lg">{t("product_desc")}</p>
        </div>
        {/* <button className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
          Tải Toàn Bộ Catalog
        </button> */}
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
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <ul className="space-y-2 mb-6">
                {product.specs.map((spec, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-sm text-industrial-gray flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {spec}
                  </li>
                ))}
              </ul>
              {/* <button className="w-full py-3 bg-white border border-gray-200 text-industrial-blue font-bold rounded-xl hover:bg-industrial-blue hover:text-white transition-all text-sm">
                Yêu Cầu Báo Giá
              </button> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
