import { useContext, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({});
	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
