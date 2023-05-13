/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";

export default function Menu({ coffee }) {
  const { name, image, description, price } = coffee || {};

  // to show a toast for every button click
  const showTostHandler = () => {
    toast.success('Coffee is added to cart');
  };

  return (
    <div className="group block border p-1">
      <img src={image} alt="coffe" className="h-[350px] w-full object-cover sm:h-[400px]" loading="lazy" />
      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>
          <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
            {description}
          </p>
        </div>
        <p className="text-gray-900 text-lg font-bold">${price}</p>
      </div>
      <div className="mt-2">
        <button onClick={showTostHandler} className="bg-slate-800 hover:bg-slate-900 text-white font-medium w-full py-2">Order Now</button>
      </div>
    </div>
  )
}