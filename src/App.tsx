import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Login } from "./pages/auth/ui/login/Login";
import { Register } from "./pages/auth/ui/register/Register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/main" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
