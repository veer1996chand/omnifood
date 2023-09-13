import Banner from "@/component/Banner/Banner";
import Feature from "@/component/Feature/Feature";
import Footer from "@/component/Footer/Footer";
import NavBar from "@/component/NavBar/NavBar";
import OurBrands from "@/component/OurBrands/OurBrands";
import Pricing from "@/component/Pricing/Pricing";
import Subscribe from "@/component/Subscribe/Subscribe";
import Testimonials from "@/component/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <OurBrands />
      <Feature />
      <Testimonials />
      <Pricing />
      <Subscribe />
      {/* <Footer /> */}
    </div>
  );
}
