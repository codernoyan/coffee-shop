import cupOne from 'assets/cup-1.jpg';
import cupTwo from 'assets/cup-2.jpg';
import cupThree from 'assets/cup-3.jpg';
import cupFour from 'assets/cup-4.jpg';
import cupFive from 'assets/cup-5.jpg';
import cupSix from 'assets/cup-6.jpg';
import cupSeven from 'assets/cup-7.jpg';
import cupEight from 'assets/cup-8.jpg';

export default function AllMenus() {
  return (
    <section className="container mx-auto px-2 md:px-0">
      <section className="my-8">
        <div>
          <h2 className="text-2xl text-center font-bold mb-4">All Menus</h2>
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
              <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2 duration-300 transition-colors">Order Now</button>
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
              <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2 duration-300 transition-colors">Order Now</button>
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
              <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2 duration-300 transition-colors">Order Now</button>
            </div>
          </div>
          {/* coffee - 4 */}
          <div className="group block border p-1">
            <img src={cupFour} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
            <div className="mt-3 flex justify-between text-sm">
              <div>
                <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                  Caramel Frappuccino® Blended Beverage
                </h3>
                <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                  Caramel syrup meets coffee, milk and ice for a rendezvous in the blender, while whipped cream and buttery caramel sauce layer the love on top.
                </p>
              </div>
              <p className="text-gray-900 text-lg font-bold">$8</p>
            </div>
            <div className="mt-2">
              <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2 duration-300 transition-colors">Order Now</button>
            </div>
          </div>
          {/* coffee - 5 */}
          <div className="group block border p-1">
            <img src={cupFive} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
            <div className="mt-3 flex justify-between text-sm">
              <div>
                <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                  Espresso Frappuccino® Blended Beverage
                </h3>
                <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                  Coffee is combined with a shot of espresso and milk, then blended with ice to give you a nice little jolt and lots of sipping joy.
                </p>
              </div>
              <p className="text-gray-900 text-lg font-bold">$8</p>
            </div>
            <div className="mt-2">
              <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2 duration-300 transition-colors">Order Now</button>
            </div>
          </div>
          {/* coffee - 6 */}
          <div className="group block border p-1">
            <img src={cupSix} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
            <div className="mt-3 flex justify-between text-sm">
              <div>
                <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                  Mocha Frappuccino Blended Beverage
                </h3>
                <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                  Mocha sauce, Frappuccino® Roast coffee, milk and ice all come together for a mocha flavor that will leave you wanting more.
                </p>
              </div>
              <p className="text-gray-900 text-lg font-bold">$8</p>
            </div>
            <div className="mt-2">
              <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2 duration-300 transition-colors">Order Now</button>
            </div>
          </div>
          {/* coffee - 7 */}
          <div className="group block border p-1">
            <img src={cupSeven} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
            <div className="mt-3 flex justify-between text-sm">
              <div>
                <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                  Salted Caramel Cream Cold Brew
                </h3>
                <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                  Here is a savory-meets-sweet refreshing beverage certain to delight: our signature, super-smooth cold brew, sweetened with a touch of caramel.
                </p>
              </div>
              <p className="text-gray-900 text-lg font-bold">$9</p>
            </div>
            <div className="mt-2">
              <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2 duration-300 transition-colors">Order Now</button>
            </div>
          </div>
          {/* coffee - 8 */}
          <div className="group block border p-1">
            <img src={cupEight} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
            <div className="mt-3 flex justify-between text-sm">
              <div>
                <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                  White Chocolate Macadamia Cream Cold Brew
                </h3>
                <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                  Starbucks® signature cold brew sweetened with macadamia syrup, topped with a silky white-chocolate macadamia cream cold foam.
                </p>
              </div>
              <p className="text-gray-900 text-lg font-bold">$11</p>
            </div>
            <div className="mt-2">
              <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2 duration-300 transition-colors">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}