import { createContext, useState } from "react";


export const PageContext = createContext();
export function PageProvider({ children }) {
  const [page, setPage] = useState('TaskPage');

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}