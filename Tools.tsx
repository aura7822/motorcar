"use client";
import { useState } from "react";
import { monthly, fmt } from "@/lib/vehicles";

const field = "h-11 w-full rounded-lg border border-line bg-white px-3 text-sm text-ink";

export function TradeIn() {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); /* POST to /api/trade-in, email result via Resend */ }} className="rounded-2xl border border-line bg-white p-6">
      <h3 className="font-display text-2xl font-bold">What's your car worth? Find out in 60 seconds.</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input required placeholder="Plate or VIN" className={field} aria-label="Plate or VIN" />
        <input required type="number" placeholder="Mileage" className={field} aria-label="Mileage" />
      </div>
      <button className="mt-4 rounded-lg bg-ink px-5 py-3 font-semibold text-white">Get my instant offer</button>
      {sent && <p role="status" className="mt-3 text-sm text-sea">Thanks. We'll show your offer here once valuation is connected.</p>}
    </form>
  );
}

export function FinanceCalc() {
  const [price, setPrice] = useState(25000);
  const [down, setDown] = useState(10);
  const [months, setMonths] = useState(60);
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h3 className="font-display text-2xl font-bold">Know your payment before you shop.</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <label className="text-sm">Price<input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} className={field} /></label>
        <label className="text-sm">Down payment (%)<input type="number" value={down} onChange={(e) => setDown(+e.target.value)} className={field} /></label>
        <label className="text-sm">Term<select value={months} onChange={(e) => setMonths(+e.target.value)} className={field}>{[36, 48, 60, 72].map((m) => <option key={m} value={m}>{m} months</option>)}</select></label>
      </div>
      <p className="mt-5 text-3xl font-bold" aria-live="polite">{fmt(monthly(price, down / 100, 0.069, months))}<span className="text-base font-normal text-ink/70">/mo at an estimated 6.9% APR</span></p>
      <a href="/pre-approval" className="mt-4 inline-block rounded-lg bg-amber px-5 py-3 font-semibold">Get pre-approved</a>
      <p className="mt-2 text-xs text-ink/60">Checking your rate won't affect your credit score.</p>
    </div>
  );
}

export function DeliveryEstimator() {
  const [code, setCode] = useState("");
  const [quote, setQuote] = useState<{ cost: number; days: string } | null>(null);
  // Placeholder maths. Replace with a call to your logistics/carrier API.
  const calc = () => {
    const n = [...code].reduce((a, c) => a + c.charCodeAt(0), 0);
    setQuote({ cost: 250 + (n % 6) * 90, days: `${3 + (n % 4)} to ${5 + (n % 4)} days` });
  };
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Postal or ZIP code" className={field} aria-label="Postal or ZIP code" />
        <button onClick={calc} disabled={code.length < 3} className="h-11 rounded-lg bg-ink px-5 font-semibold text-white disabled:opacity-40">Calculate delivery</button>
      </div>
      {quote && <p role="status" className="mt-4">Delivery to {code}: <strong>{fmt(quote.cost)}</strong>, arriving in {quote.days}.</p>}
      <ol className="mt-6 grid grid-cols-5 gap-2 text-center text-xs text-ink/70" aria-label="Delivery stages">
        {["Confirmed", "Inspected", "In transit", "Out for delivery", "Delivered"].map((s, i) => (
          <li key={s}><div className={`mx-auto mb-2 h-2 rounded-full ${i < 2 ? "bg-sea" : "bg-line"}`} />{s}</li>
        ))}
      </ol>
    </div>
  );
}
