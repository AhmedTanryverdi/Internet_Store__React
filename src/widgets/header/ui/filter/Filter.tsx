import React, { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import "./filter.scss";

export const Filter: React.FC = (): React.JSX.Element => {
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState<string>("");

	const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className="filter-container">
			<label className="filter__label" data-focus={isFocused}>
				<input
					type="text"
					id="filter"
					value={value}
					onChange={handleChangeValue}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					className="filter"
				/>
				{(value !== "" && (
					<IoIosClose size={17} color="red" onClick={()=>setValue("")} />
				)) || <CiSearch size={17} color="green" onClick={()=>setIsFocused(true)}/>}
			</label>
		</div>
	);
};
