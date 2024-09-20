import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Highlights from "./Highlights";
import HowItWorks from "./HowItWorks";
import Model from "./Model";

export default function App() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
} 