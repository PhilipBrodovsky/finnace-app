import { useIsMobile } from "../hooks/useIsMobile";

// render props pattern (children is function)
export function WIthMobile({ children }) {
	const isMobile = useIsMobile();

	return children(isMobile);
}
