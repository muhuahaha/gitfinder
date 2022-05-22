import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

function NavbarTest() {
  return (
    <div className="relative container m-3 bg-red-600 p-6">
      {/* flex container */}
      <div className="flex items-center justify-between text-brightRedSupLight">
        <div className="pt-2">
          <FaGithub className="inline pr-2 text-3xl" />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn underline decoration-amber-300 font-extrabold">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>
      <div className="bg-pink-300 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            />
          </span>
        </div>
        <h3 className="text-pink-600  dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm selection:bg-sky-500 selection:text-white">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
          space.
        </p>
        <div className="btn btn-ghost btn-sm rounded-btn bg-white shadow-lg text-pink-600 shadow-pink-600/30">asda</div>
      </div>
    </div>
  );
}

export default NavbarTest;
