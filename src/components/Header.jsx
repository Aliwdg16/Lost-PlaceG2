const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-0 bg-emerald-900 text-center dark:bg-neutral-600 text-amber-200/80 dark:text-neutral-200">
      <img
        className="w-16 mr-2 mt-4 border-transparent items-center hover:cursor-pointer"
        src="logo.svg"
        alt="Lost Place logo"
      ></img>

      <h1 className="mb-2 mt-4 text-3xl font-medium font-serif items-center  hover:cursor-pointer">
        Lost Place
      </h1>
      {/* <button className="search button" type="submit">
        Find
      </button> */}
    </div>
  );
};

export default Header;

