import React from "react";
import "./img.scss";

export const Img: React.FC<{
	id: number;
	image: string;
	setMainImage: (image: number) => void;
}> = ({ id, image, setMainImage }) => {
	return <img src={image} alt="image" onClick={() => setMainImage(id)} />;
};
