import Features from "@/components/Home/Features";
import { Header } from "../components/Home/Header";
import { Hero } from "../components/Home/Hero";
import LogoTicker from "../components/Home/LogoTicker";
import ProductShowcase from "../components/Home/ProductShowcase";
import Pricing from "@/components/Home/Pricing";

export default function Home() {

  return (
    <div className="bg-white">
    <Header />
    <Hero />
    <LogoTicker />
    <ProductShowcase />
    <Features />
    <Pricing />
    </div>
  );
}