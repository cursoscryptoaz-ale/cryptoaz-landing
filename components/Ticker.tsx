"use client";

import { useEffect, useState } from "react";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export function Ticker() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((r) => r.json())
      .then((data: Coin[]) => setCoins(data))
      .catch(() => {});

    const interval = setInterval(() => {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
        .then((r) => r.json())
        .then((data: Coin[]) => setCoins(data))
        .catch(() => {});
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!coins.length) return null;

  const doubled = [...coins, ...coins];

  return (
    <div
      className="border-y overflow-hidden py-3"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((coin, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-sm">
            <span className="font-bold uppercase" style={{ color: "var(--brand)" }}>
              {coin.symbol}
            </span>
            <span className="font-mono text-white">
              ${coin.current_price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
            </span>
            <span
              className="text-xs font-medium"
              style={{
                color: coin.price_change_percentage_24h >= 0 ? "#4ade80" : "#f87171",
              }}
            >
              {coin.price_change_percentage_24h >= 0 ? "+" : ""}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
            <span style={{ color: "var(--border)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}