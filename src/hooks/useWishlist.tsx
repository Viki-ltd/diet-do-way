import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useWishlist() {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('importrade-wishlist');
    if (saved) {
      setWishlistItems(JSON.parse(saved));
    }
  }, []);

  const addToWishlist = (id: string, name: string) => {
    const updated = [...wishlistItems, id];
    setWishlistItems(updated);
    localStorage.setItem('importrade-wishlist', JSON.stringify(updated));
    toast({
      title: "Added to Wishlist",
      description: `${name} has been saved to your wishlist.`,
    });
  };

  const removeFromWishlist = (id: string, name: string) => {
    const updated = wishlistItems.filter(item => item !== id);
    setWishlistItems(updated);
    localStorage.setItem('importrade-wishlist', JSON.stringify(updated));
    toast({
      title: "Removed from Wishlist",
      description: `${name} has been removed from your wishlist.`,
    });
  };

  const isInWishlist = (id: string) => wishlistItems.includes(id);

  const toggleWishlist = (id: string, name: string) => {
    if (isInWishlist(id)) {
      removeFromWishlist(id, name);
    } else {
      addToWishlist(id, name);
    }
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
  };
}