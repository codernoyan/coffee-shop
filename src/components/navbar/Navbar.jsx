import { AuthContext } from "contexts/AuthProvider";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "ui/Loading";

export default function Navbar() {
  const { user, logoutUser, loading, setLoading } = useContext(AuthContext);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  // handle log out
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setLoading(false);
        toast.success('Logout Successful');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      })
  };

  // navbar menus
  const menus = <>
    {
      user?.uid ?
        <li role="none" className="flex items-stretch">
          <div className="me-auto flex items-center md:px-6 lg:ml-0 lg:p-0">
            <button onClick={handleLogout}
              type="button"
              className="group relative inline-block text-sm font-medium text-slate-600 focus:outline-none focus:ring active:text-slate-500"
            >
              <span
                className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-slate-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>

              <span className="relative block border border-current bg-white font-bold px-8 py-3">
                Logout
              </span>
            </button>
          </div>
        </li>
        :
        <li role="none" className="flex items-stretch">
          <div className="me-auto flex items-center md:px-6 lg:ml-0 lg:p-0">
            <Link to="/login"
              className="group relative inline-block text-sm font-medium text-slate-600 focus:outline-none focus:ring active:text-slate-500"
            >
              <span
                className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-slate-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>

              <span className="relative block border border-current bg-white font-bold px-8 py-3">
                Login
              </span>
            </Link>
          </div>
        </li>
    }
  </>


  if (loading) {
    return <Loading />
  }


  return (
    <section className="w-full z-50">
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="relative z-20 w-full bg-slate-100/20 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full backdrop-blur-sm lg:after:hidden border-b border-indigo-100">
        <div className="relative md:px-0 container mx-auto px-2 font-radio">
          <nav
            aria-label="main navigation"
            className="flex h-16 items-stretch justify-between font-medium text-slate-700"
            role="navigation">
            {/*      <!-- Brand logo --> */}
            <div
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            >
              <Link to="/" className="font-bold text-slate-700">Coffeebeans</Link>
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
                }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 pr-8 pb-12 pt-16 font-semibold transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 px-2 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100  ${isToggleOpen
                ? "visible opacity-100 backdrop-blur-md"
                : "invisible opacity-0"
                }`}
            >
              {menus}
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </section>
  )
}