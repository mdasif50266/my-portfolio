"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

const products = [
  { id: "lamp", name: "Desk lamp", price: 48 },
  { id: "notebook", name: "Cloth notebook", price: 14 },
  { id: "mug", name: "Stoneware mug", price: 22 },
];

export function EcommerceDemo() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const items = useMemo(
    () =>
      products
        .filter((product) => cart[product.id])
        .map((product) => ({ ...product, qty: cart[product.id] })),
    [cart],
  );
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Storefront prototype</p>
      <h2 className="mt-2 text-2xl font-semibold">Sample catalog</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg border border-border p-4">
            <div className="mb-4 h-20 rounded-md bg-white/5" />
            <p className="font-medium">{product.name}</p>
            <p className="text-sm text-muted">${product.price}</p>
            <Button
              className="mt-3"
              size="sm"
              variant="ghost"
              onClick={() =>
                setCart((current) => ({
                  ...current,
                  [product.id]: (current[product.id] ?? 0) + 1,
                }))
              }
            >
              Add to cart
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-border p-4">
        <h3 className="font-medium">Cart</h3>
        {items.length === 0 ? (
          <p className="mt-2 text-sm text-muted">Empty — add a sample product.</p>
        ) : (
          <ul className="mt-3 space-y-2 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                {item.name} × {item.qty}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-3 text-sm text-muted">Subtotal ${total} · Payments are not connected.</p>
      </div>
    </div>
  );
}
