import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { buildPages } from "./buildsPages";
import { isMobile } from "react-device-detect";
import Header from "./components/header";
import MobileHeader from "./pages/home/Header/header";
import Contact from "./components/contact";
import Footer from "./components/Footer/Footer";

const App = () => {
	const location = useLocation();

	return (
		<div>
			{isMobile ? null : <Contact />}
			{isMobile ? <MobileHeader /> : <Header />}
			{buildPages.includes(location.pathname) ? (
				<div>
					<Outlet />
				</div>
			) : (
				<div>
					<Outlet />
				</div>
			)}

			{isMobile ? null : <Footer />}
		</div>
	);
};

export default App;
