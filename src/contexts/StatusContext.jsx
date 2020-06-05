import React, { createContext } from "react";

const StatusContext = createContext({});

export default StatusContext;

export function StatusProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [redoCallback, setRedoCallback] = React.useState(() => alert("kek"));

  const redo = (callback = () => {}) => {
    setIsLoading(true);
    callback();
    setIsLoading(false);
  };

  return (
    <StatusContext.Provider
      value={{ setRedoCallback, isLoading, redo: () => redo(redoCallback) }}
    >
      {children}
    </StatusContext.Provider>
  );
}
