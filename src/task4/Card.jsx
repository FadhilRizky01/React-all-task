const Card = (props) => {
  return (
    <div className="max-w-md border border-slate-200 rounded-xl mx-auto shadow-md font-serif my-10 p-5 hover:bg-sky-500 group dark:hover:bg-slate-400 ">
      {/* title */}
      <h5 className="font-bold text-slate-700 text-lg mb-3 group-hover:text-white dark:group-hover:text-slate-800">{props.title}</h5>
      {/* image */}
      <img src={props.image} alt="image" />
      {/* desc */}
      <p className="text-slate-600 group-hover:text-white selection:bg-lime-300 selection:text-slate-600 dark:group-hover:text-slate-800 pt-6">{props.desc}</p>
      {/* button */}
      <div className="mx-auto ">
        <a href={props.link} className="no-underline" target="_blank">
          <button className="my-10 bg-sky-500 px-5 py-2 rounded-full font-semibold font-inter mx-auto block group-hover:bg-sky-700 active:bg-sky-900 focus:ring focus:ring-sky-300 dark:bg-slate-300   dark:group-hover:bg-slate-100 group-hover:text-white dark:group-hover:text-black">
            Read More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
