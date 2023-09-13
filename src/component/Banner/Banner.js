import Link from "next/link";
import Image from "next/image";
import customer1 from "../../assets/img/customers/customer-1.jpg";
import customer2 from "../../assets/img/customers/customer-2.jpg";
import customer3 from "../../assets/img/customers/customer-3.jpg";
import customer4 from "../../assets/img/customers/customer-4.jpg";
import customer5 from "../../assets/img/customers/customer-5.jpg";
import ismayyl from "../../assets/img/customers/ismayyl.jpg";
import hero from "../../assets/img/hero.png";

function Banner() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className="btn btn--full margin-right-sm">
            Start eating well
          </a>
          <a href="#" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <Image src={customer1} alt="Customer photo" />
              <Image src={customer2} alt="Customer photo" />
              <Image src={customer3} alt="Customer photo" />
              <Image src={customer4} alt="Customer photo" />
              <Image src={customer5} alt="Customer photo" />
              <Image src={ismayyl} alt="Customer photo" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <Image
            src={hero}
            className="hero-img"
            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
