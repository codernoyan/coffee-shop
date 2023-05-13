import Banner from "components/banner/Banner";
import Menus from "components/menus/Menus";

export default function Home() {
  return (
    <main className="container mx-auto px-2 md:px-0">
      <Banner />
      <Menus />
    </main>
  )
}