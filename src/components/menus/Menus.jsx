import { Link } from "react-router-dom";
import cupOne from 'assets/cup-1.jpg';
import cupTwo from 'assets/cup-8.jpg';
import cupThree from 'assets/cup-3.jpg';

export default function Menus() {

  // const coffeeMenus = [
  //   {
  //     id: 1,
  //     name: 'Oleato Golden Foam™ Cold Brew',
  //     coffeImg: cupOne,
  //     description: 'Cold foam contrasts with dark, smooth cold brew, yielding an inviting aroma with lush Partanna® infused cold foam.',
  //     price: 4,
  //   },
  //   {
  //     id: 2,
  //     name: 'White Chocolate Macadamia Cream Cold Brew',
  //     coffeImg: cupTwo,
  //     description: 'Cold brew sweetened with macadamia syrup, topped with a silky white-chocolate macadamia cream cold foam and finished with toasted cookie crumbles.',
  //     price: 6,
  //   },
  //   {
  //     id: 3,
  //     name: 'Cinnamon Caramel Cream Cold Brew',
  //     coffeImg: cupThree,
  //     description: 'Cold Brew packed with flavors of cinnamon caramel, topped with vanilla sweet cream cold foam and dusted with even more flavor for a special personal treat.',
  //     price: 8,
  //   },
  // ]

  return (
    <section className="my-8">
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">Menus</h2>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* {
          coffeeMenus?.map((coffee) => <Menu key={coffee?.id} coffee={coffee} />)
        } */}
        {/* coffee - 1 */}
        <div className="group block border p-1">
          <img src={cupOne} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                Oleato Golden Foam™ Cold Brew
              </h3>
              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Cold foam contrasts with dark, smooth cold brew, yielding an inviting aroma with lush Partanna® infused cold foam.
              </p>
            </div>
            <p className="text-gray-900 text-lg font-bold">$4</p>
          </div>
          <div className="mt-2">
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2">Order Now</button>
          </div>
        </div>
        {/* coffee - 2 */}
        <div className="group block border p-1">
          <img src={cupTwo} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                White Chocolate Macadamia Cream Cold Brew
              </h3>
              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Cold brew sweetened with macadamia syrup, topped with a silky white-chocolate macadamia cream cold foam and finished with toasted cookie crumbles.
              </p>
            </div>
            <p className="text-gray-900 text-lg font-bold">$6</p>
          </div>
          <div className="mt-2">
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2">Order Now</button>
          </div>
        </div>
        {/* coffee - 3 */}
        <div className="group block border p-1">
          <img src={cupThree} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                Cinnamon Caramel Cream Cold Brew
              </h3>
              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Cold Brew packed with flavors of cinnamon caramel, topped with vanilla sweet cream cold foam and dusted with even more flavor for a special personal treat.
              </p>
            </div>
            <p className="text-gray-900 text-lg font-bold">$8</p>
          </div>
          <div className="mt-2">
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2">Order Now</button>
          </div>
        </div>
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