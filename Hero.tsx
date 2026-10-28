"use client";
import { useState } from "react";
import { MAKES } from "@/lib/vehicles";

const chips = [["SUVs", "body=SUV"], ["Under $20k", "maxPrice=20000"], ["Electric and hybrid", "fuel=Electric"], ["Low mileage", "maxMileage=30000"]];
const sel = "h-12 w-full rounded-lg border border-line bg-white px-3 text-sm";

export default function Hero() {
  const [make, setMake] = useState("");
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pt-20">
      <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
        Find the car you'll love, at a price you will too.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-ink/75">
        Browse thousands of new and pre-owned vehicles for every style and budget. Compare, finance and get it delivered, all online.
      </p>

      <form action="/inventory" className="mt-10 rounded-2xl bg-ink p-4 text-white shadow-xl md:p-5">
        <fieldset className="mb-4 flex gap-2" aria-label="Condition">
          {["New", "Used", "Electric"].map((c, i) => (
            <label key={c} className="cursor-pointer">
              <input type="radio" name="condition" value={c} defaultChecked={i === 1} className="peer sr-only" />
              <span className="inline-block rounded-full px-4 py-1.5 text-sm peer-checked:bg-amber peer-checked:font-semibold peer-checked:text-ink peer-focus-visible:outline">{c}</span>
            </label>
          ))}
        </fieldset>
        <div className="grid gap-3 text-ink md:grid-cols-5">
          <select name="make" value={make} onChange={(e) => setMake(e.target.value)} className={sel} aria-label="Make">
            <option value="">Any make</option>{Object.keys(MAKES).map((m) => <option key={m}>{m}</option>)}
          </select>
          <select name="model" disabled={!make} className={sel} aria-label="Model">
            <option value="">Any model</option>{(MAKES[make] ?? []).map((m) => <option key={m}>{m}</option>)}
          </select>
          <select name="maxPrice" className={sel} aria-label="Max price">
            <option value="">Any price</option>{[15000, 25000, 35000, 50000].map((p) => <option key={p} value={p}>Up to ${p.toLocaleString()}</option>)}
          </select>
          <input name="location" placeholder="City or postal code" className={sel} aria-label="Location" />
          <button className="h-12 rounded-lg bg-amber font-semibold text-ink hover:brightness-95">Search 12,480 cars</button>
        </div>
      </form>

      <ul className="mt-5 flex flex-wrap gap-2">
        {chips.map(([l, q]) => <li key={l}><a href={`/inventory?${q}`} className="inline-block rounded-full border border-line bg-white px-4 py-1.5 text-sm hover:border-sea">{l}</a></li>)}
      </ul>
      <p className="mt-6 text-sm text-ink/70">Rated 4.8 from 9,200+ buyers. Every car comes with a vehicle history report.</p>
    </section>
  );
}
