import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Utensils, Clock, Sparkles } from 'lucide-react';

interface FoodItem {
  id: number;
  name: string;
  price: number;
  rating: string;
  category: string;
}

export const BiteBuddyDemo: React.FC = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [activeCategory, setActiveCategory] = useState('All');

  const foodItems: FoodItem[] = [
    { id: 1, name: 'Truffle Artisan Burger', price: 16.99, rating: '4.9', category: 'Burgers' },
    { id: 2, name: 'Wood-fired Pepperoni Pizza', price: 18.50, rating: '4.8', category: 'Pizza' },
    { id: 3, name: 'Matcha Boba Milk Tea', price: 6.50, rating: '4.9', category: 'Drinks' },
    { id: 4, name: 'Avocado Crunch Salad', price: 12.99, rating: '4.7', category: 'Salads' },
  ];

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[id] > 1) copy[id] -= 1;
      else delete copy[id];
      return copy;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = foodItems.reduce((acc, item) => acc + (cart[item.id] || 0) * item.price, 0);

  return (
    <div className="w-full rounded-2xl bg-[#0D0B12] border border-white/10 p-6 font-sans text-zinc-100 shadow-2xl space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Utensils className="w-5 h-5 text-amber-400" />
          <h4 className="text-lg font-bold font-mono text-white">BITE BUDDY ordering UI</h4>
        </div>

        {/* Live Cart Counter */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
          <ShoppingBag className="w-4 h-4" />
          <span>CART ({totalItems} ITEMS)</span>
          <span className="font-bold text-white">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 text-xs font-mono">
        {['All', 'Burgers', 'Pizza', 'Drinks', 'Salads'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full border transition-all ${
              activeCategory === cat
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold'
                : 'bg-white/5 text-zinc-400 border-white/5 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {foodItems
          .filter((item) => activeCategory === 'All' || item.category === activeCategory)
          .map((item) => {
            const qty = cart[item.id] || 0;
            return (
              <div key={item.id} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-amber-500/40 transition-all">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-white font-mono">{item.name}</span>
                  <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">
                    ★ {item.rating}
                  </span>
                </div>
                <div className="text-sm font-bold font-mono text-amber-400">${item.price.toFixed(2)}</div>

                <div className="flex items-center justify-between pt-2">
                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="w-full py-1.5 text-xs font-mono bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-1 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" /> ADD TO CART
                    </button>
                  ) : (
                    <div className="w-full flex items-center justify-between bg-black/50 border border-amber-500/30 rounded-lg p-1 text-xs font-mono">
                      <button onClick={() => removeFromCart(item.id)} className="p-1 hover:bg-white/10 rounded text-amber-300">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-white">{qty}</span>
                      <button onClick={() => addToCart(item.id)} className="p-1 hover:bg-white/10 rounded text-amber-300">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>

      {totalItems > 0 && (
        <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg flex items-center justify-between text-xs font-mono text-amber-200">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" /> Estimated delivery: 22 mins
          </span>
          <button className="px-4 py-1.5 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 transition-colors">
            CHECKOUT (${totalPrice.toFixed(2)})
          </button>
        </div>
      )}
    </div>
  );
};
