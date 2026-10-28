import Link from "next/link";
import { Vehicle, fmt, monthly } from "@/lib/vehicles";

export default function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-white">
      <div className="relative aspect-[4/3]" style={{ background: `linear-gradient(160deg, ${v.color}, ${v.color}99)` }}>
        {/* Swap for <Image> (Cloudflare Images / R2) when photos exist */}
        {v.tag && <span className="absolute left-3 top-3 rounded bg-amber px-2 py-1 text-xs font-semibold">{v.tag}</span>}
        <div className="absolute right-3 top-3 flex gap-2">
          <button aria-label={`Save ${v.make} ${v.model}`} className="grid size-9 place-items-center rounded-full bg-white/90">♡</button>
          <button aria-label={`Compare ${v.make} ${v.model}`} className="grid size-9 place-items-center rounded-full bg-white/90">⇄</button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-bold">{v.year} {v.make} {v.model}</h3>
        <p className="text-sm text-ink/70">{v.trim}</p>
        <p className="mt-3 text-2xl font-bold">{fmt(v.price)}</p>
        <p className="text-sm text-sea">est. {fmt(monthly(v.price))}/mo</p>
        <p className="mt-2 text-sm text-ink/70">{v.mileage.toLocaleString()} mi, {v.fuel}, {v.location}</p>
        <Link href={`/vehicles/${v.id}`} className="mt-4 block rounded-lg border border-ink py-2 text-center text-sm font-semibold hover:bg-ink hover:text-white">View details</Link>
      </div>
    </article>
  );
}
