import CreateYourOwnPackages from "./CreateYourOwnPackages";
import Footer from "./Footer";
import Hero from "./Hero";
import LatestProduct from "./LatestProduct";
import MakeupCollections from "./MakeupCollections";
import SocialMediaLinks from "./SocialMediaLinks";

export default function App() {
  return (
    <main>
      <Hero />
      <LatestProduct />
      <MakeupCollections />
      <CreateYourOwnPackages />
      <SocialMediaLinks />
      <Footer />
    </main>
  );
}
