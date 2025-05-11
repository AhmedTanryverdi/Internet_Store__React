import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "../../pages/main/Main";
import { Login } from "../../pages/auth/ui/login/Login";
import { Register } from "../../pages/auth/ui/register/Register";
import { ProductInfo } from "../../pages/main/ui/ProductInfo";
import { Layout } from "./Layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="main" element={<Main />} />
					<Route path="main/:id" element={<ProductInfo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
