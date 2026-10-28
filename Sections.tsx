import { VEHICLES } from "@/lib/vehicles";
import VehicleCard from "./VehicleCard";
import { TradeIn, FinanceCalc, DeliveryEstimator } from "./Tools";

const wrap = "mx-auto max-w-6xl px-4";
const h2 = "font-display text-3xl font-bold md:text-4xl";

export function Featured() {
  return (
    <section className={`${wrap} py-14`}>
      <h2 className={h2}>Fresh arrivals, ready when you are</h2>
      <p className="mt-2 text-ink/70">Every car is inspected, history-checked and priced transparently.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{VEHICLES.map((v) => <VehicleCard key={v.id} v={v} />)}</div>
      <a href="/inventory" className="mt-8 inline-block rounded-lg bg-ink px-6 py-3 font-semibold text-white">Browse all vehicles</a>
    </section>
  );
}

const pillars = [
  ["Transparent pricing", "The price you see is the price you pay. No hidden fees."],
  ["Verified history", "A vehicle history report comes with every car."],
  ["Flexible financing", "Check your rate in minutes without hurting your credit score."],
  ["Delivered to you", "Nationwide delivery, tracked from lot to driveway."],
];

export function WhyUs() {
  return (
    <section className="bg-ink py-14 text-white">
      <div className={wrap}>
        <h2 className={h2}>Car buying, without the runaround</h2>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([t, d]) => <div key={t}><dt className="font-display text-xl font-bold text-amber">{t}</dt><dd className="mt-2 text-white/80">{d}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

export function TradeFinance() {
  return <section id="trade-in" className={`${wrap} grid gap-6 py-14 lg:grid-cols-2`}><TradeIn /><FinanceCalc /></section>;
}

const reviews = [
  { name: "Amara K.", car: "2023 Honda CR-V", stars: 5, text: "Pricing matched the listing, and the car arrived exactly as photographed." },
  { name: "Daniel R.", car: "2021 Tesla Model 3", stars: 5, text: "The history report and 360 view answered every question before I paid." },
  { name: "Priya S.", car: "2020 Subaru Outback", stars: 4, text: "Delivery took a day longer than quoted, but updates were clear throughout." },
];

export function Reviews() {
  return (
    <section className={`${wrap} py-14`}>
      <h2 className={h2}>Real buyers, real stories</h2>
      <p className="mt-2 text-ink/70">4.8 average from 9,214 reviews. Every review comes from a verified purchase.</p>
      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        {["All ratings", "Verified buyers", "With photos or video"].map((f) => <button key={f} className="rounded-full border border-line bg-white px-4 py-1.5">{f}</button>)}
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-xl border border-line bg-white p-5">
            <p aria-label={`${r.stars} out of 5 stars`} className="text-amber">{"★".repeat(r.stars)}<span className="text-line">{"★".repeat(5 - r.stars)}</span></p>
            <blockquote className="mt-3">{r.text}</blockquote>
            <figcaption className="mt-4 text-sm text-ink/70">{r.name}, {r.car}. <span className="font-semibold text-sea">Verified buyer</span></figcaption>
          </figure>
        ))}
      </div>
      <a href="/reviews" className="mt-8 inline-block font-semibold underline decoration-amber decoration-2 underline-offset-4">Read all reviews</a>
    </section>
  );
}

export function Delivery() {
  return (
    <section id="delivery" className={`${wrap} py-14`}>
      <h2 className={h2}>Delivered straight to your door</h2>
      <p className="mb-6 mt-2 max-w-xl text-ink/70">Enter your postal code for an instant quote and arrival window, then follow your car with live updates by SMS and email.</p>
      <DeliveryEstimator />
    </section>
  );
}

const faqs = [
  ["How does online car buying work?", "Search, reserve, get pre-approved, then choose delivery or pick-up. Paperwork is handled online."],
  ["Can I return the car?", "Yes. You get a return window after delivery. Check the vehicle page for the exact terms."],
  ["Will pre-approval affect my credit score?", "Checking your rate uses a soft inquiry and does not affect your score."],
  ["How is delivery priced?", "By distance from the car's location to your postal code. Pick-up is free."],
  ["How does the trade-in offer work?", "Enter your plate or VIN and mileage. The offer is valid for 7 days."],
];

export function FAQ() {
  return (
    <section className={`${wrap} max-w-3xl py-14`}>
      <h2 className={h2}>Questions? We've got answers.</h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {faqs.map(([q, a]) => (
          <details key={q} className="group py-4">
            <summary className="cursor-pointer list-none font-semibold">{q}</summary>
            <p className="mt-2 text-ink/75">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  const cols: Record<string, string[]> = {
    Shop: ["New cars", "Used cars", "Electric and hybrid", "Compare"],
    "Sell and finance": ["Trade-in", "Pre-approval", "Payment calculator"],
    Company: ["About", "Careers", "Reviews"],
    Support: ["Help centre", "Contact", "Delivery"],
  };
  return (
    <footer className="border-t border-line bg-white py-12 text-sm">
      <div className={`${wrap} grid gap-8 md:grid-cols-5`}>
        <div className="md:col-span-1">
          <p className="font-display text-xl font-bold">Carweb</p>
          <p className="mt-2 text-ink/70">Get price drops and new arrivals in your inbox.</p>
          <form className="mt-3 flex gap-2"><input type="email" aria-label="Email" placeholder="you@email.com" className="h-10 w-full rounded-lg border border-line px-3" /><button className="rounded-lg bg-ink px-3 text-white">Subscribe</button></form>
        </div>
        {Object.entries(cols).map(([h, ls]) => (
          <nav key={h} aria-label={h}><p className="mb-3 font-semibold">{h}</p><ul className="space-y-2 text-ink/70">{ls.map((l) => <li key={l}><a href="#" className="hover:text-sea">{l}</a></li>)}</ul></nav>
        ))}
      </div>
      <p className={`${wrap} mt-10 text-ink/60`}>© {new Date().getFullYear()} Carweb. Terms, Privacy and Cookies.</p>
    </footer>
  );
}
