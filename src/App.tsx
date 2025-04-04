import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./pages";
import { Main } from "./pages/main/Main";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Auth />}/>
					<Route path="main" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
