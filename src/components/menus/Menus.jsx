import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import Loading from "ui/Loading";

export default function Menus() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/coffees`)
      .then((res) => res.json())
      .then((data) => {
        setMenus(data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <section className="my-8">
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">Menus</h2>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {
          menus?.slice(0, 3).map((coffee) => <Menu key={coffee?._id} coffee={coffee} />)
        }
      </div>
      {/* see more button */}
      <div className="text-center mt-8">
        <Link className="group relative inline-block text-sm font-medium text-slate-600 focus:outline-none focus:ring active:text-slate-500" to="/all-menus">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-slate-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
          <span className="relative block border border-current bg-white px-8 py-3">
            See More
          </span>
        </Link>
      </div>
    </section>
  )
}