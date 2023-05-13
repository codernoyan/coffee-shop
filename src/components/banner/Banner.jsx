import coffeeImage from 'assets/coffee-shop-3.jpg';

export default function Banner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-4">
      <div>
        <img src={coffeeImage} alt="coffee" className="aspect-video md:aspect-square object-cover" loading="lazy" />
      </div>
      <div className="flex justify-center items-center bg-slate-100 p-4 aspect-video md:aspect-square">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">For your mind refreshness</h2>
          <p className="text-xl font-medium text-slate-500">Hooray for our newest cooler-than-cool Chocolate Java Mint Frappuccino blended beverage.</p>
        </div>
      </div>
    </section>
  )
}