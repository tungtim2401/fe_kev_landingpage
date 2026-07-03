import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  const heroContent = {
    title: t("hero_title_1"),
    desc: t("hero_desc_1"),
    video: "https://video.gumlet.io/6a45183a18d11bffd5f47cd5/6a479d0618d11bffd53ca01c/download.mp4", // Update with your video path
    tag: [t("hero_tag_1")],
  };

  return (
    <>
      <div className="relative h-full w-full hero-video">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-screen object-cover"
          >
            <source src={heroContent.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 z-20">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </>
  );
}
export default HeroSection;
