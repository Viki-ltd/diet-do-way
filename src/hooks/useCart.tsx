import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('importrade-cart');
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  const addToCart = (product: Omit<CartItem, 'quantity'>, quantity = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    let updated: CartItem[];

    if (existingItem) {
      updated = cartItems.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updated = [...cartItems, { ...product, quantity }];
    }

    setCartItems(updated);
    localStorage.setItem('importrade-cart', JSON.stringify(updated));
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (id: string) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('importrade-cart', JSON.stringify(updated));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('importrade-cart', JSON.stringify(updated));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('importrade-cart');
  };

  const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + (price * item.quantity);
    }, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
}