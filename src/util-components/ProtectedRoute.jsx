// HOC

import { Redirect } from "wouter";
import { useAuth } from "../contexts/AuthContext/AuthContext";

// HOC - protected route
export function WithProtectedRoute(Component) {
	function PrivateRoute(props) {
		const { user } = useAuth();

		if (!user) {
			return <Redirect to="/login" />;
		}

		return <Component {...props} />;
	}
	return PrivateRoute;
}
