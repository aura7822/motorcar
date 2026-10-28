import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Featured, WhyUs, TradeFinance, Reviews, Delivery, FAQ, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <WhyUs />
        <TradeFinance />
        <Reviews />
        <Delivery />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
