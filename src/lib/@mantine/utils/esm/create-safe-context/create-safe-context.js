import React, { createContext, useContext } from 'react';

function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React.createElement(Context.Provider, {
    value
  }, children);
  return [Provider, useSafeContext];
}

export { createSafeContext };
//# sourceMappingURL=create-safe-context.js.map
