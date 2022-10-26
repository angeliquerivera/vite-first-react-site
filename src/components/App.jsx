import CreateYourOwnPackages from "./CreateYourOwnPackages";
import Footer from "./Footer";
import Hero from "./Hero";
import LatestProduct from "./LatestProduct";
import MakeupCollections from "./MakeupCollections";
import FeaturedIn from "./FeaturedIn";

export default function App() {
  return (
    <main>
      <Hero />
      <LatestProduct />
      <MakeupCollections />
      <CreateYourOwnPackages />
      <FeaturedIn />
      <Footer />
    </main>
  );
}
