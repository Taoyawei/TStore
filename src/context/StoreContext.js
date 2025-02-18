// 提供 Store 的 Context：用于管理 Store 实例的 React Context。
import React, { createContext, useContext } from 'react';

export const StoreContext = createContext({});

export const StoreProvider = ({ children, stores }) => {
  return (
    <StoreContext.Provider value={stores}>
      {children}
    </StoreContext.Provider>
  )
}