import Menu from 'components/menus/Menu';
import { useEffect, useState } from 'react';

export default function AllMenus() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/coffees`)
      .then((res) => res.json())
      .then((data) => setMenus(data))
      .catch((error) => console.log(error.message))
  }, []);

  return (
    <section className="container mx-auto px-2 md:px-0">
      <section className="my-8">
        <div>
          <h2 className="text-2xl text-center font-bold mb-4">All Menus</h2>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {
            menus?.map((coffee) => <Menu key={coffee?._id} coffee={coffee} />)
          }
        </div>
      </section>
    </section>
  )
}