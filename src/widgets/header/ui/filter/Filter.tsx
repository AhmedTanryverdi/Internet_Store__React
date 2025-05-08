import React, { ChangeEvent, useCallback, useState } from "react";
import throttle from "lodash.throttle";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useAppDispatch } from "../../../../shared/utils/types/types";
import { setTextInput } from "../../../../entities/model/slices/filterSlice";
import "./filter.scss";

export const Filter: React.FC = (): React.JSX.Element => {
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState<string>("");
	const dispatch = useAppDispatch();

	const updateInputText = useCallback(
		throttle((str: string) => {
			dispatch(setTextInput(str));
		}, 700),
		[]
	);

	const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		updateInputText(e.target.value);
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
					<IoIosClose
						size={17}
						color="red"
						onClick={() => {
							setValue("");
							dispatch(setTextInput(""));
						}}
					/>
				)) || (
					<CiSearch
						size={17}
						color="green"
						onClick={() => setIsFocused(true)}
					/>
				)}
			</label>
		</div>
	);
};
