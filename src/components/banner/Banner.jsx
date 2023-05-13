import coffeeImage from 'assets/coffee-2.jpg';

export default function Banner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img src={coffeeImage} alt="coffee" className="aspect-video object-cover" />
      </div>
      <div className="flex justify-center items-center bg-slate-100 p-4">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">For your mind refreshness</h2>
          <p className="text-xl font-medium text-slate-500">Hooray for our newest cooler-than-cool Chocolate Java Mint Frappuccino blended beverage.</p>
        </div>
      </div>
    </section>
  )
}