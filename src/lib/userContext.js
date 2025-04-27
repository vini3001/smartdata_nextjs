import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from "react";

import { trpc } from "@/lib/trpc";

const UserContext = createContext();

export const UserProvider = ({ children, isMobile }) => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(true);
  const { isLoading } = trpc.system.user.useQuery(undefined, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => setUser(data),
    onError: () => setUser(null),
    retry: false,
  });

  const setMenuOpen = () => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    setMenuOpen();
  }, [isMobile]);

  const toggleDrawer = () => setOpen((prevOpen) => !prevOpen);

  const value = useMemo(
    () => ({
      isLoading,
      ...user,
      open,
      setOpen,
      toggleDrawer,
      isMobile,
    }),
    [user, isLoading, open],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
