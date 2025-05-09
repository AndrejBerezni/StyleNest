'use client';

import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import CartControl from '@/features/cart/components/cart-control';
import useAddToCart from '@/features/cart/hooks/useAddToCart';

import useInventory from '../../hooks/useInventory';
import { ProductWithInventory } from '../../types';

interface AddToCartProps {
  product: ProductWithInventory;
}

export default function AddToCart({ product }: AddToCartProps) {
  const translate = useTranslations('productPage');

  const { item, max, disabled } = useInventory(product);
  const {
    amount,
    increment: handleIncrement,
    decrement: handleDecrement,
    addToCart,
  } = useAddToCart({
    sku: item?.sku ?? '',
    max,
    initialAmount: 1,
    disabled: disabled || !item,
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 id={`quantity-selector-heading`} className="text-sm text-ink-500">
          {translate('quantity')}
        </h3>
        <CartControl
          max={disabled ? 1 : max}
          amount={amount}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>

      <Button
        className="mb-2"
        onClick={addToCart}
        aria-label={`Add ${amount} of ${item?.sku} to cart`}
        disabled={disabled}
      >
        {translate('addToCart')}
      </Button>
    </>
  );
}
