"use client";
import { useState, createContext, useContext, Children } from "react";
import { create } from "zustand";

const createStore = create((set) => ({
  user: null,
  bookings: [],
  setUser: (user) => set({ user }),
  setBookings: (bookings) => set({ bookings }),
  fetchUserData: async () => {
    try {
      const response = await fetch("/api/auth/authenticated", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const userData = await response.json();
        set({ user: userData });
      } else {
        console.error("There was an authentication error on the backend");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  },
  fetchUsersBookings: async () => {
    try {
        const response = await fetch("/api/bookings/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const bookingData = await response.json();
          set({ bookings: [...bookingData] });
        } else {
          console.error("There was an error on the backend");
        }
      } catch (error) {
        console.error("Failed to fetch users bookings:", error);
      }
  }
}));

const ZustandContext = createContext(null);

export const useStore = () => {
  const context = useContext(ZustandContext);
  if (!context)
    throw new Error("useStore must be used within a ZustandProvider");
  return context;
};

const ZustandProvider = ({ children }) => {
  const store = createStore();
  return (
    <ZustandContext.Provider value={store}>{children}</ZustandContext.Provider>
  );
};

export default ZustandProvider;
