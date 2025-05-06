import { useEffect } from "react";

export const useScroll = (parentRef: any, childRef: any, isLoading: boolean, callback: any) => {
	useEffect(() => {
		const options = {
			root: parentRef.current,
			rootMargin: "0px",
			threshold: 0,
		};

		const observer = new IntersectionObserver(([target]) => {
			if (target.isIntersecting && !isLoading) {
				callback();
			}
		}, options);

		observer.observe(childRef.current);

		return () => {
			childRef.current && observer?.unobserve(childRef.current);
		};
	}, [callback]);
};
