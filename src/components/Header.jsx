import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center h-24 mt-0  bg-green-950 opacity-95 text-center dark:bg-neutral-600 text-amber-200/80 dark:text-neutral-200">
      <Link to={`/`} className="flex justify-center my-5  items-center gap-2">
        <img
          src="logo.svg"
          className="text-3xl max-w-[7rem] font-medium font-serif items-center hover:cursor-pointer"
          alt="lost-place-logo"
        />
        {/* <img
        className="w-16 mr-2 mt-4 border-transparent items-center hover:cursor-pointer"
        src="logo.svg"
        alt="Lost Place logo"
        /> */}
      </Link>
      <div className="flex flex-row justify-center items-center mt-0 bg-emerald-900 text-center dark:bg-neutral-600 text-amber-200/80 dark:text-neutral-200">
        {/* <Link
        to={`/`}
        className="mb-2 mt-4 text-3xl font-medium items-center hover:cursor-pointer"
      >
      <h1 className="mb-2 mt-4 text-3xl font-medium font-serif items-center  hover:cursor-pointer">
        Lost Place
      </h1>
      </Link> */}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
