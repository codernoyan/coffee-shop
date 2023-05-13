import Lottie from "lottie-react";
import coffeeLoading from 'assets/coffee-loading.json';

export default function Loading() {
  return (
    <section className="flex justify-center items-center h-screen">
      {/* lottie */}
      <Lottie className="aspect-video" animationData={coffeeLoading} loop={true} />
    </section>
  )
}