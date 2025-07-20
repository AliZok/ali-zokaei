
import HomeSlider from "@/components/home/HomeSlider"
import AboutSection from "@/components/home/AboutSection"
import AdInformations from "@/components/home/AdInformations"
import SlideGallery from "@/components/SlideGallery"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';

export default function Home() {
  return (
    <>
      <SEO
        title="Caspian"
        description="Learn about our mission and team"
        keywords="about, company, mission"
        url="https://domain.com"
      />

      <div className="">
        <main className="">
          <HomeSlider />
          <AboutSection />
          <AdInformations />
          <SlideGallery />

        </main>
      </div>
      <ScrollToTop></ScrollToTop>
    </>

  );
}
