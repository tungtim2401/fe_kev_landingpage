import { Factory, Settings, ShieldCheck, Thermometer } from "lucide-react";

export const products = [
  {
    name: "Bình Tích Áp Cao Cấp",
    category: "Bồn Áp Lực",
    image:
      "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800",
    specs: [
      "Dung tích: 100L - 50,000L",
      "Áp suất: Lên đến 100 Bar",
      "Vật liệu: Thép Q345R, SUS304",
    ],
  },
  {
    name: "Bộ Trao Đổi Nhiệt Dạng Bản",
    category: "Thiết Bị Nhiệt",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    specs: [
      "Hiệu suất: >95%",
      "Nhiệt độ: -50°C đến 250°C",
      "Tiêu chuẩn: ISO 9001",
    ],
  },
  {
    name: "Hệ Thống Lò Hơi Tầng Sôi",
    category: "Năng Lượng",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
    specs: [
      "Công suất: 1 - 50 Tấn/h",
      "Nhiên liệu: Biomass, Than",
      "Tự động hóa: PLC/SCADA",
    ],
  },
  {
    name: "Bồn Chứa Hóa Chất Vi Sinh",
    category: "Dược Phẩm",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    specs: ["Độ bóng: Ra < 0.4µm", "Tiệt trùng: SIP/CIP", "Chứng chỉ: FDA/GMP"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Khảo Sát & Tư Vấn",
    desc: "Đội ngũ kỹ sư trực tiếp khảo sát hiện trường, phân tích nhu cầu và đưa ra giải pháp kỹ thuật tối ưu nhất cho doanh nghiệp.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600",
  },
  {
    step: "02",
    title: "Thiết Kế Kỹ Thuật",
    desc: "Sử dụng phần mềm chuyên dụng (PV Elite, AutoCAD) để tính toán độ bền áp lực và mô phỏng nhiệt theo tiêu chuẩn ASME.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
  },
  {
    step: "03",
    title: "Chế Tạo & Kiểm Định",
    desc: "Gia công tại xưởng với quy trình hàn tự động. Kiểm tra NDT (Siêu âm, Chụp X-quang) và thử áp thủy lực nghiêm ngặt.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
  },
  {
    step: "04",
    title: "Lắp Đặt & Bàn Giao",
    desc: "Vận chuyển, lắp đặt tại nhà máy và hướng dẫn vận hành. Cung cấp đầy đủ hồ sơ kiểm định và chứng nhận xuất xưởng.",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600",
  },
];

export const services = [
  {
    title: "Bồn Áp Lực (Pressure Vessels)",
    description:
      "Thiết kế và chế tạo bồn áp lực tiêu chuẩn ASME, đảm bảo an toàn tuyệt đối cho các hệ thống khí nén, LPG, và hóa chất.",
    icon: <ShieldCheck className="w-8 h-8 text-accent-orange" />,
  },
  {
    title: "Hệ Thống Trao Đổi Nhiệt",
    description:
      "Giải pháp tối ưu hóa nhiệt năng cho nhà máy giấy, thực phẩm và dệt nhuộm với hiệu suất truyền nhiệt vượt trội.",
    icon: <Thermometer className="w-8 h-8 text-accent-orange" />,
  },
  {
    title: "Lắp Đặt Đường Ống Công Nghiệp",
    description:
      "Thi công hệ thống đường ống áp lực cao, đường ống vi sinh cho các nhà máy dược phẩm và đồ uống.",
    icon: <Settings className="w-8 h-8 text-accent-orange" />,
  },
  {
    title: "Bảo Trì & Nâng Cấp",
    description:
      "Dịch vụ kiểm định, bảo trì định kỳ và cải tiến công nghệ cho các hệ thống nhiệt, áp suất hiện hữu.",
    icon: <Factory className="w-8 h-8 text-accent-orange" />,
  },
];

export const STARTS = [
  { label: "STARTS_1", value: "15+" },
  { label: "STARTS_2", value: "500+" },
  { label: "STARTS_3", value: "50+" },
  { label: "STARTS_4", value: "200+" },
];
