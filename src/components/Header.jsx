import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-0 bg-emerald-900 text-center dark:bg-neutral-600 text-amber-200/80 dark:text-neutral-200">
      <Link to={`/`} className="flex justify-center my-5  items-center gap-2">
        <img
          src="logo.svg"
          className="mb-2 mt-4 text-3xl font-medium font-serif items-center  hover:cursor-pointer"
          alt="lost-place-logo" />
      </Link>

      <Link
        to={`/`}
        className="mb-2 mt-4 text-3xl font-medium items-center hover:cursor-pointer"
      >
        Lost Place
      </Link>
    </div>
  );
};

export default Header;
