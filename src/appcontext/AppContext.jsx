// AppContext.js

import { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);

// Create the provider component
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open/close state

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};
