import content from "./content/content";

const Navigation = () => {
  return (
    <div
      style={{
        backgroundColor: "#091c29",
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white">
        <h1 className="text-3xl font-bold">
          {content.nav.logo}
          <span className="w-3 h-3 bg-red-400 inline-block rounded-full"></span>
        </h1>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <span key={index} className="text-xl mr-4">
                {link.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
