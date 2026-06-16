import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import "antd/dist/reset.css";
import "../lib/swiper";
import "@/lib/i18n";
import "../lib/i18n";
import I18nProvider from "@/components/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SEV-EV",
  description: `SEV-EV: Soltec Engineering Vietnam phiên bản mới đã chính thức khởi động.

Chúng tôi đã tái cấu trúc và xây dựng cơ sở sản xuất tại Việt Nam, nhằm cung cấp kịp thời các sản phẩm có giá trị gia tăng cao dựa trên năng lực kỹ thuật chế tạo. Đồng thời, chúng tôi cũng đã đạt được các giấy phép gia công có thể đáp ứng tiêu chuẩn toàn cầu, qua đó đáp ứng kỳ vọng của Quý khách hàng.

Bên cạnh việc thiết kế và chế tạo các thiết bị như tháp, bồn, thiết bị trao đổi nhiệt và các loại máy móc công nghiệp, chúng tôi còn cung cấp dịch vụ trọn gói từ lắp đặt tại chỗ đến bảo trì. Phát huy những thành tựu đã đạt được, chúng tôi sẽ tiếp tục nỗ lực đáp ứng nhu cầu của khách hàng dựa trên QCDS (Chất lượng – Chi phí – Tiến độ – An toàn).

Hơn nữa, với việc trở thành một thành viên của Tập đoàn Soltec, thông qua sự phối hợp giữa công ty mẹ tại Nhật Bản, Soltec Vietnam và các đơn vị trong tập đoàn như Rutenchem, chúng tôi sẽ phát huy sức mạnh tổng hợp và nâng cao giá trị cung cấp đến khách hàng.

Không chỉ tại Nhật Bản, chúng tôi còn hướng tới cung cấp kịp thời các sản phẩm có giá trị gia tăng cao với năng lực sản xuất vượt trội đến khu vực ASEAN và các thị trường quốc tế khác.

Toàn thể cán bộ nhân viên sẽ đồng lòng nỗ lực hết mình. Kính mong Quý vị tiếp tục tin tưởng và kỳ vọng vào chúng tôi.`,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
