import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Categories from "@/components/Categories";
import FeaturedMenu from "@/components/FeaturedMenu";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Premium Transparent Navbar */}
      <Navbar />

      <main className="flex-1 w-full bg-[#050505] text-[#f7f7f7]">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section */}
        <AboutUs />

        {/* 3. Our Services Section */}
        <Services />

        {/* 4. Popular Food Categories */}
        <Categories />

        {/* 5. Featured Menu Section */}
        <FeaturedMenu />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Customer Testimonials */}
        <Testimonials />

        {/* 8. Gallery Section */}
        <Gallery />

        {/* 9. Statistics Section */}
        <Statistics />

        {/* 10. Reservation Section */}
        <Reservation />

        {/* 11. Location Section */}
        <Location />

        {/* 12. Contact Section */}
        <Contact />
      </main>

      {/* 13. Unified Luxury Footer */}
      <Footer />
    </>
  );
}
