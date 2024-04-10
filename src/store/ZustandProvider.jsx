"use client";
import { useState, createContext, useContext, Children } from "react";
import { create } from "zustand";

const createStore = create((set) => ({
  user: null,
  bookings: [],
  allBookings: [],
  setUser: (user) => set({ user }),
  setBookings: (bookings) => set({ bookings }),
  setAllBookings: (allBookings) => set({ allBookings }),
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
  dismissUserData: async () => {
    set({ user: null });
  },
  fetchUsersBookings: async () => {
    try {
      const response = await fetch("/api/bookings/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const bookingData = await response.json();
        set({ bookings: [...bookingData.bookings] });
      } else {
        console.error(
          "There was an error on the backend or in assigned state."
        );
      }
    } catch (error) {
      console.error("Failed to fetch users bookings:", error);
    }
  },
  createBooking: async (userData) => {
    try {
      console.log('entering backend fetch')
      const response = await fetch("/api/bookings/attending", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      // console.log('response went to backend')
      if (response.ok) {
        const bookingData = await response.json();
        set({ bookings: [bookingData] });
      } else {
        console.error("Bad response from the backend.");
      }
    } catch (error) {
      console.error("There was a problem registering the user.");
    }
  },
  updateUserInfo: async (userData) => {
    try {
      const response = await fetch("/api/auth/updateinfo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const updatedUser = await response.json();
        set({ user: { ...user, ...updatedUser } });
      } else {
        console.error(
          "There was a problem with the response from the backend."
        );
      }
    } catch (error) {
      console.error("There was a problem updating the user.");
    }
  },
  updateBookingInfo: async (userData) => {
    try {
      const response = await fetch("/api/bookings/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const updatedBooking = await response.json();
        set({ bookings: [...bookings, updatedBooking] });
      } else {
        console.error("There was a problem updating the booking.");
      }
    } catch (error) {
      console.error("There was a problem updating the booking.");
    }
  },
  deleteBookingInfo: async (data) => {
    try {
      const response = await fetch("/api/bookings/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const message = await response.json();
        console.log('mssg',message)
        const { bookingId } = message;
        const editted = bookings.filter((b) => b.id != bookingId);
        set({
          bookings: [...editted],
        });
      }
    } catch (error) {
      console.error("There was a problem updating the booking.");
    }
  },
  fetchAllBookings: async (conferenceId) => {
    const response = await fetch(`/api/bookings/conference/${conferenceId}`);
    if (response.ok) {
      const data = await response.json();
      set({
        allBookings: [...data.bookings],
      });
    }
  },
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
