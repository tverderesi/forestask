import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import { Lost } from "../atoms/svgs/Lost";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 dark:bg-night-900">
      <Logo className="my-5 scale-150" />
      <div className="w-96 h-96 my-6">
        <Lost />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-6">
        Oops! Page not found.
      </h1>
      <p className="text-gray-600 dark:text-slate-100 mb-4 text-xl">
        Sorry, but the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-night-900 text-seal-brown-50 hover:bg-mantis dark:bg-mantis hover:text-night-900 btn border-none drop-shadow-lg w-auto  px-10"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
