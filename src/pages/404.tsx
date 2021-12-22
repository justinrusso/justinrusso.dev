import { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div className="error_page">
      <div className="hero bg-image">
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            The page you are looking for could not be found.
          </p>

          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link href="/">BACK HOME</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
