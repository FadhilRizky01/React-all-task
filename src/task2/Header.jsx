import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "./content/content";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundColor: "#091c29",
      }}
    >
      {/*Pake lazy load image */}

      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className=" w-full md:w-2/5">
          <LazyLoadImage src={content.header.img} effect="blur" alt={content.header.alt} placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"} />
        </div>

        <div className="text-white font-dosis text-center">
          <h2 className={`${animated ? "" : "translate-y-10 opacity-0"} transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold`}>
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1 className="font-bold text-2xl text-gray-700">
            {content.header.text[2]}
            <Typical steps={content.header.typical} loop={Infinity} className="inline-block" />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className="bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg animate-bounce">{content.header.btnText}</button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
