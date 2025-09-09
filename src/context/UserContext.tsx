import React, { createContext, useContext, useState, type ReactNode } from "react";

interface User {
    name: string;
    handle: string;
    avatar: string;
}

interface UserContextType {
    user: User;
    updateUser: (newUser: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({
        name: "John Doe",
        handle: "@johndoe",
        avatar: "https://i.pravatar.cc/150?img=5",
    });

    const updateUser = (newUser: User) => setUser(newUser);

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};