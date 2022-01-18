import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "./content/content";
const Stack = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-dosis">
      <h1 className="text-5xl font-bold">Stack I Use</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {content.stack.tech.map((tech, index) => {
          return (
            <span className="w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 animate-bounce" id="stack">
              <LazyLoadImage src={tech.img} alt={tech.alt} />;
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10"> {content.stack.desc}</p>
    </div>
  );
};

export default Stack;
