import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@fluentui/react';
import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFoundPage from './pages/404';
import React from 'react';
import { ThemeContext, ThemeName } from './Context/ThemeContext';
import { darkTheme, lightTheme } from './themes/themes';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import Dashboard from './pages/Dashboard';
import HomeDetailModal from './components/Home/HomeDetailModal';

import UserLogin from './pages/UserLogin';

initializeIcons();
const Main = () => {
	const [themeName, setTheme] = React.useState<any>(
		window.localStorage.getItem('theme') == null
			? ThemeName.Light
			: window.localStorage.getItem('theme')
	);
	const [themes, setthemes] = React.useState(darkTheme);

	React.useEffect(() => {
		if (themeName === 'Dark') {
			window.localStorage.setItem('theme', ThemeName.Dark);
			setthemes(darkTheme);
			setTheme(ThemeName.Dark);
		} else {
			window.localStorage.setItem('theme', ThemeName.Light);
			setthemes(lightTheme);
			setTheme(ThemeName.Light);
		}
	}, [themeName, themes]);
	return (
		<>
			<ThemeProvider applyTo="element" theme={themes} className="themeroot">
				<ThemeContext.Provider value={{ themeName, setTheme }}>
				<Routes>
					<Route element={<App />}>
						<Route path="/home" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="*" element={<NotFoundPage />} />
						<Route
								path="/contact/:selectedContactId"
								element={<HomeDetailModal />
								}
							/>
					</Route>
					<Route path={'/'} element={<UserLogin />} />
				</Routes>
			</ThemeContext.Provider>
		</ThemeProvider >
		</>
	);
};
export default Main;
