"use client";
import { useState, createContext, useContext, Children } from "react";
import { create } from "zustand";

const createStore = create((set) => ({
  user: null,
  bookings: [],
  setUser: (user) => set({ user }),
  setBookings: (bookings) => set({ bookings }),
}));

const ZustandContext = createContext(null);
export const useStore = () => {
  if (!ZustandContext)
    throw new Error("useStore must be used within a ZustandProvider");
  return useContext(ZustandContext);
};

const ZustandProvider = (store, children) => {
    const [state] = useState(()=> createStore(store))
    return <ZustandContext.Provider value={state}>{children}</ZustandContext.Provider>
}
export default ZustandProvider
