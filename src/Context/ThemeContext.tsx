import { createContext, useContext } from 'react';
export enum ThemeName {
	Dark = 'Dark',
	Light = 'Light',
}
export const getThemeMode = () => {
	return window.localStorage.getItem('theme');
};

export type ThemeContextType = {
	themeName: ThemeName;
	setTheme: (Theme: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
	themeName: ThemeName.Dark,
	setTheme: (theme) => {
		window.localStorage.setItem('theme', theme);
	},
});
export const useTheme = () => useContext(ThemeContext);
