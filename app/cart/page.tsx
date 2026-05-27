import CartClient from './CartClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart | AL HIKMATH ENTERPRISES',
};

export default function CartPage() {
  return <CartClient />;
}