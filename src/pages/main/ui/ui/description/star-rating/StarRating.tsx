import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import "./starRating.scss";


export const StarRating: React.FC<{ rating: number }> = ({
	rating,
}): React.JSX.Element => {
    let fullStarsCount = Math.floor(rating); // Целые звёзды
	let hasHalfStar = rating % 1 >= 0.5; // Есть половина звезды?
	let totalStars = [...Array(5)];
	return (
		<div className="rating-star">
			{totalStars.map((_, idx) => {
				if (idx < fullStarsCount) {
					return <FontAwesomeIcon icon={fullStar} key={idx} />;
				} else if (hasHalfStar && idx === fullStarsCount) {
					return <FontAwesomeIcon icon={halfStar} key={idx} />;
				} else {
					return <FontAwesomeIcon icon={emptyStar} key={idx} />;
				}
			})}
		</div>
	);
};
