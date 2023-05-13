import { Link } from "react-router-dom";

export default function Menus() {
  return (
    <section className="my-8">
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">Menus</h2>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a href="#" className="group block">
          <img src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className="h-[350px] w-full object-cover sm:h-[450px]" />
          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                Small Headphones
              </h3>
              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,
                quia soluta quisquam voluptatem nemo.
              </p>
            </div>
            <p className="text-gray-900">$299</p>
          </div>
        </a>
        <a href="#" className="group block">
          <img src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className="h-[350px] w-full object-cover sm:h-[450px]" />
          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                Small Headphones
              </h3>
              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,
                quia soluta quisquam voluptatem nemo.
              </p>
            </div>
            <p className="text-gray-900">$299</p>
          </div>
        </a>
        <a href="#" className="group block">
          <img src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className="h-[350px] w-full object-cover sm:h-[450px]" />
          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                Small Headphones
              </h3>
              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,
                quia soluta quisquam voluptatem nemo.
              </p>
            </div>
            <p className="text-gray-900">$299</p>
          </div>
        </a>
      </div>
      <div className="text-center mt-4">
        <Link className="group relative inline-block text-sm font-medium text-emerald-600 focus:outline-none focus:ring active:text-emerald-500" to="/download">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-emerald-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
          <span className="relative block border border-current bg-white px-8 py-3">
            See More
          </span>
        </Link>
      </div>
    </section>
  )
}