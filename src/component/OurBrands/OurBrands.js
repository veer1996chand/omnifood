import Link from "next/link";
import Image from "next/image";
import techcrunch from "../../assets/img/logos/techcrunch.png";
import businessInsider from "../../assets/img/logos/business-insider.png";
import newYorkTimes from "../../assets/img/logos/the-new-york-times.png";
import forbes from "../../assets/img/logos/forbes.png";
import usaToday from "../../assets/img/logos/usa-today.png";
function OurBrands() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <Image
            src={techcrunch}
            alt="Techcrunch logo"
            width={224}
            height={32}
          />
          <Image
            src={businessInsider}
            alt="Business Insider logo"
            width={224}
            height={32}
          />
          <Image
            src={newYorkTimes}
            alt="The New York Times logo"
            width={224}
            height={32}
          />
          <Image src={forbes} alt="Forbes logo" width={224} height={32} />
          <Image src={usaToday} alt="USA Today logo" width={224} height={32} />
        </div>
      </div>
    </section>
  );
}

export default OurBrands;
