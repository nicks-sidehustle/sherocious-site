'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export function AddToCartButton({ product, className = '' }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} ${
        added
          ? 'bg-green-600 text-white'
          : 'bg-[#c9a227] text-[#1a1a2e] hover:bg-[#e8d48a]'
      } px-6 py-3 rounded font-bold transition-all`}
    >
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}
