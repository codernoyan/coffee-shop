/* eslint-disable react/prop-types */
export default function Menu({ coffee }) {

  const { name, coffeeImg, description, price } = coffee || {};

  return (
    <div className="group block">
      <img src={coffeeImg} alt="coffee" className="h-[350px] w-full object-cover sm:h-[450px]" />
      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>
          <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
            {description}
          </p>
        </div>
        <p className="text-gray-900">${price}</p>
      </div>
    </div>
  )
}