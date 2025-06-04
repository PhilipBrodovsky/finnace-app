import { useEffect, useState } from "react";

function getIsMobile() {
	return window.matchMedia("(max-width: 600px)").matches;
}

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState(() => {
		return getIsMobile();
	});

	useEffect(() => {
		const callback = () => {
			setIsMobile(getIsMobile());
		};

		window.addEventListener("resize", callback);

		return () => {
			// UNMOUNT
			window.removeEventListener("resize", callback);
		};
	}, []);

	return isMobile;
}
