import React, {
  createContext, useCallback, useState, useContext,
} from 'react';

interface RouteContextData {
  navigateTo(route: string): void;
  currentRoute: string;
}

const RouteContext = createContext<RouteContextData>({} as RouteContextData);

const RouteProvider: React.FC = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('form');

  const navigateTo = useCallback((route: string) => {
    setCurrentRoute(route);
  }, []);

  return (
    <RouteContext.Provider
      value={{
        navigateTo,
        currentRoute,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

function useRoute(): RouteContextData {
  const context = useContext(RouteContext);

  if (!context) {
    throw new Error('useRoute must be used within an RouteProvider');
  }

  return context;
}

export { RouteProvider, useRoute };
