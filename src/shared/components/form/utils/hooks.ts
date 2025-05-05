import { useActionState, useState } from "react";
import { UserType } from "../../../utils/types/types";
import { fetchUser, validate } from "./functions";
import { setUser } from "../../../../entities/model/slices/userSlice";

type StatusType = {
	error: boolean;
	ok: boolean;
	message: string;
};

export const useCustomForm = (
	initialState: Partial<UserType>,
	url: string,
	dispatch: any
): [Partial<UserType>, (payload: FormData) => void, boolean, StatusType] => {

	const [status, setStatus] = useState<StatusType>({
		error: true,
		ok: false,
		message: "",
	});
	const [state, formAction, isPending] = useActionState(
		async (
			initialState: Partial<UserType>,
			formData: FormData
		): Promise<Partial<UserType>> => {
			const dataInputs: UserType = Object.fromEntries(
				formData.entries()
			) as UserType;

			const errorValidate = validate(dataInputs);

			if (errorValidate) {
				setStatus({
					...status,
					error: true,
					message: "Ошибка в поле ввода!",
				});
				return dataInputs;
			}

			const {
				data: resultData,
				status: statusFetch,
				ok,
			} = await fetchUser(url, dataInputs);

			if (!ok) {
				switch (statusFetch) {
					case 400: {
						setStatus({
							...status,
							error: true,
							message: "Некорректные входные данные!",
						});
						break;
					}

					case 401: {
						setStatus({
							...status,
							error: true,
							message: "Пользователь не авторизован",
						});
					}
				}
				return resultData;
			}
			setStatus({
				error: false,
				ok: true,
				message: "",
			});
			dispatch(setUser(resultData.user));
			localStorage.setItem("user", JSON.stringify(resultData));
			return await initialState;
		},
		initialState
	);

	return [state, formAction, isPending, status];
};
