import React from 'react';
import {
	ActionButton,
	ThemeContext,
} from '@fluentui/react';
import { useTheme, ThemeName } from '../../../Context/ThemeContext';
import { headerButtonStyle } from '../../../styles/HeaderStyles';

export const HeaderSetting: React.FunctionComponent = () => {
	const { themeName, setTheme } = useTheme();

	const myThemeContext = React.useContext(ThemeContext);

	return (
		<>
			<ActionButton
				styles={headerButtonStyle(myThemeContext, themeName)}
				iconProps={{ iconName: themeName === 'Dark' ? 'Sunny' : 'ClearNight' }}
				onClick={() => {
					if (themeName === 'Light') {
						setTheme(ThemeName.Dark);
					} else {
						setTheme(ThemeName.Light);
					}
				}}
				title={themeName === 'Dark' ? 'Light Mode' : 'Dark Mode'}
			/>
		</>
	);
};

export default HeaderSetting;
