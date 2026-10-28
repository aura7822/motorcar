export type Vehicle = {
  id: string; year: number; make: string; model: string; trim: string;
  price: number; mileage: number; fuel: "Petrol" | "Hybrid" | "Electric" | "Diesel";
  body: string; location: string; tag?: string; color: string;
};

export const MAKES: Record<string, string[]> = {
  Toyota: ["RAV4", "Corolla", "Prius"],
  Honda: ["CR-V", "Civic"],
  Tesla: ["Model 3", "Model Y"],
  Subaru: ["Outback", "Forester"],
};

// Replace with a Neon query (e.g. Drizzle/Prisma) once the inventory table exists.
export const VEHICLES: Vehicle[] = [
  { id: "1", year: 2022, make: "Toyota", model: "RAV4", trim: "XLE AWD", price: 27490, mileage: 28400, fuel: "Petrol", body: "SUV", location: "Austin, TX", tag: "Great deal", color: "#b9c4c9" },
  { id: "2", year: 2023, make: "Honda", model: "CR-V", trim: "EX-L", price: 29900, mileage: 14200, fuel: "Hybrid", body: "SUV", location: "Denver, CO", tag: "New arrival", color: "#7a2e34" },
  { id: "3", year: 2021, make: "Tesla", model: "Model 3", trim: "Long Range", price: 28750, mileage: 33100, fuel: "Electric", body: "Sedan", location: "San Jose, CA", color: "#e8e8e8" },
  { id: "4", year: 2020, make: "Subaru", model: "Outback", trim: "Premium", price: 21800, mileage: 52000, fuel: "Petrol", body: "Wagon", location: "Portland, OR", tag: "Price drop", color: "#2f4a3a" },
  { id: "5", year: 2022, make: "Toyota", model: "Prius", trim: "LE", price: 23400, mileage: 21800, fuel: "Hybrid", body: "Hatchback", location: "Miami, FL", color: "#274a78" },
  { id: "6", year: 2019, make: "Honda", model: "Civic", trim: "Sport", price: 16900, mileage: 61000, fuel: "Petrol", body: "Sedan", location: "Chicago, IL", color: "#3a3a3c" },
];

export const fmt = (n: number) => "$" + n.toLocaleString("en-US");

/** Monthly payment: amortised loan. */
export function monthly(price: number, down = 0.1, apr = 0.069, months = 60) {
  const p = price * (1 - down), r = apr / 12;
  return Math.round((p * r) / (1 - Math.pow(1 + r, -months)));
}
