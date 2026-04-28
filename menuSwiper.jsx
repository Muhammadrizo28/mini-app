import { createContext, useState } from "react";


export const SideMenuContext = createContext();
export function SideMenuProvider({ children }) {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <SideMenuContext.Provider value={{ sideMenu, setSideMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
}