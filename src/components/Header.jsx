import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-0 bg-emerald-900 text-center dark:bg-neutral-600 text-amber-200/80 dark:text-neutral-200">
      <Link to={`/`} className="flex justify-center my-5  items-center gap-2">
        <img
          src="logo.svg"
          className="text-3xl max-w-[7rem] font-medium font-serif items-center hover:cursor-pointer"
          alt="lost-place-logo" />
      
      </Link>
    <div className="flex flex-row justify-center items-center mt-0 bg-emerald-900 text-center dark:bg-neutral-600 text-amber-200/80 dark:text-neutral-200">

    </div>
    </div>

  );
};

export default Header;