import {
	IButtonProps,
	IButtonStyles,
	ICommandBarProps,
	ICommandBarStyles,
	IPartialTheme,
	ITextProps,
	ITextStyles,
} from '@fluentui/react';

export const lightTextFieldStyle = (
	props: ITextProps
): Partial<ITextStyles> => {
	return {
		// dropdown: { width: 500 },
		root: {
			color: 'rgb(151, 149, 147)',
		},
	};
};

export const darkTextFieldStyle = (props: ITextProps): Partial<ITextStyles> => {
	return {
		// dropdown: { width: 500 },
		root: {
			color: 'white',
		},
	};
};

export const darkButtonFieldStyle = (
	props: IButtonProps
): Partial<IButtonStyles> => {
	return {
		// dropdown: { width: 500 },
		root: {
			color: 'red !important',
			background: 'red',
		},
	};
};

export const darkButtonFieldStyle1: React.CSSProperties = {
	color: 'green',
};

export const lightButtonFieldStyle = (
	props: IButtonProps
): Partial<IButtonStyles> => {
	return {
		// dropdown: { width: 500 },
		root: {
			color: 'green !important',
		},
	};
};

export const darkTheme: IPartialTheme = {
	palette: {
		themePrimary: '#98c6ff', //"#9ccbee",
		themeLighterAlt: '#060809',
		themeLighter: '#192026',
		themeLight: '#2f3d47',
		themeTertiary: '#5e798e',
		themeSecondary: '#8ab2d1',
		themeDarkAlt: '#a6cfef',
		themeDark: '#b3d6f1',
		themeDarker: '#c6e1f5',
		neutralLighterAlt: '#3a3938',
		neutralLighter: '#252423',
		neutralLight: '#474645', //usedsubmenuopened
		neutralQuaternaryAlt: '#525150',
		neutralQuaternary: '#3b3a39',
		neutralTertiaryAlt: '#121212',
		neutralTertiary: '#9a9a9a',
		neutralSecondary: '#cdc6c6',
		neutralPrimaryAlt: 'rgb(59,58,57)',
		neutralPrimary: '#e6e6e6',
		neutralDark: '#fffffff2',
		black: '#323130',
		white: '#252423',
		blue: '#0f6cbd',
	},
	semanticColors: {
		//Defaults
		bodyBackground: '#252423',
		bodyFrameBackground: '#323130',
		buttonBackground: '#323130',
		primaryButtonText: '#252423',
		primaryButtonTextHovered: '#252423',
		primaryButtonTextPressed: '#252423',
		inputBackground: '#252423',
		inputForegroundChecked: '#252423',
		listBackground: '#323130',
		menuBackground: '#252423',
		bodyTextChecked: 'rgb(248, 248, 248)',
		buttonTextCheckedHovered: 'rgb(248, 248, 248)',
		link: 'rgb(156, 203, 238)',

		primaryButtonBackground: 'rgb(179,214,252)',

		//		primaryButtonBackground: "rgb(156, 203, 238)",
		inputBackgroundChecked: 'rgb(156, 203, 238)',
		inputIcon: 'rgb(156, 203, 238)',
		inputFocusBorderAlt: 'rgb(156, 203, 238)',
		//Links
		menuIcon: 'rgb(156, 203, 238)',
		menuHeader: 'rgb(156, 203, 238)',
		primaryButtonBackgroundPressed: 'rgb(179, 214, 241)',
		inputBackgroundCheckedHovered: 'rgb(179, 214, 241)',
		//Buttons
		inputIconHovered: 'rgb(179, 214, 241)',
		linkHovered: 'rgb(198, 225, 245)',
		primaryButtonBackgroundHovered: 'rgb(166, 207, 239)',
		inputPlaceholderBackgroundChecked: 'rgb(25, 32, 38)',
		bodyBackgroundChecked: 'rgb(37, 37, 37)',
		bodyFrameDivider: 'rgb(37, 37, 37)',
		bodyDivider: 'rgb(37, 37, 37)',
		variantBorder: 'rgb(37, 37, 37)',
		buttonBackgroundCheckedHovered: 'rgb(37, 37, 37)',
		buttonBackgroundPressed: 'rgb(37, 37, 37)',
		listItemBackgroundChecked: 'rgb(37, 37, 37)',
		listHeaderBackgroundPressed: 'rgb(37, 37, 37)',
		menuItemBackgroundPressed: 'rgb(37, 37, 37)',
		menuItemBackgroundChecked: 'rgb(37, 37, 37)',
		bodyBackgroundHovered: '#0f6cbd',
		buttonBackgroundHovered: '#0f6cbd',
		buttonBackgroundDisabled: '#0f6cbd',
		buttonBorderDisabled: 'rgb(21, 21, 21)',
		primaryButtonBackgroundDisabled: 'rgb(21, 21, 21)',
		disabledBackground: 'rgb(21, 21, 21)',
		listItemBackgroundHovered: 'rgb(21, 21, 21)',
		listHeaderBackgroundHovered: 'rgb(21, 21, 21)',
		menuItemBackgroundHovered: 'rgb(21, 21, 21)',
		//Inputs
		primaryButtonTextDisabled: 'rgb(55, 55, 55)',
		disabledSubtext: 'rgb(55, 55, 55)',
		listItemBackgroundCheckedHovered: 'rgb(55, 55, 55)',
		disabledBodyText: 'rgb(200, 200, 200)',
		variantBorderHovered: 'rgb(200, 200, 200)',
		buttonTextDisabled: 'rgb(200, 200, 200)',
		inputIconDisabled: 'rgb(200, 200, 200)',
		disabledText: 'rgb(200, 200, 200)',
		bodyText: 'rgb(255, 255, 255)',
		actionLink: 'rgb(255, 255, 255)',
		buttonText: 'rgb(255, 255, 255)',
		inputBorderHovered: 'rgb(255, 255, 255)',
		inputText: 'rgb(255, 255, 255)',
		listText: 'rgb(255, 255, 255)',
		menuItemText: 'rgb(255, 255, 255)',
		bodyStandoutBackground: 'rgb(11, 11, 11)',
		defaultStateBackground: 'rgb(11, 11, 11)',
		actionLinkHovered: 'rgb(244, 244, 244)',
		//Lists
		buttonTextHovered: 'rgb(244, 244, 244)',
		buttonTextChecked: 'rgb(244, 244, 244)',
		buttonTextPressed: 'rgb(244, 244, 244)',
		inputTextHovered: 'rgb(244, 244, 244)',
		menuItemTextHovered: 'rgb(244, 244, 244)',
		bodySubtext: 'rgb(208, 208, 208)',
		focusBorder: 'rgb(75, 75, 78)',

		//Menus
		inputBorder: 'rgb(200, 200, 200)',
		//smallInputBorder: "red", // for modal outline

		smallInputBorder: 'rgb(221,221,221)', // for modal outline

		inputPlaceholderText: 'rgb(208, 208, 208)',
		buttonBorder: 'rgb(208, 208, 208)',
		disabledBodySubtext: 'rgb(89, 89, 89)',
		disabledBorder: 'rgb(89, 89, 89)',
		buttonBackgroundChecked: 'rgb(89, 89, 89)',
		menuDivider: 'rgb(89, 89, 89)',
	},
	components: {
		Text: {
			styles: darkTextFieldStyle,
		},
	},
};

export const lightTheme: IPartialTheme = {
	palette: {
		themePrimary: '#0078d4', //used
		themeLighterAlt: '#eff6fc',
		themeLighter: '#deecf9',
		themeLight: '#c7e0f4',
		themeTertiary: '#71afe5',
		themeSecondary: '#2b88d8',
		themeDarkAlt: '#106ebe',
		themeDark: '#005a9e',
		themeDarker: '#004578',
		neutralLighterAlt: '#f5f5f5', //used callouthover
		neutralLighter: '#fbfbfb', //used
		neutralLight: '#dcdcdc', //usedsubmenuopened
		neutralQuaternaryAlt: '#cfcfcf', //used
		neutralQuaternary: '#eaeaea', //used
		neutralTertiaryAlt: '#E7E7E7', //used
		neutralTertiary: '#323130', //used
		// neutralSecondary: "#cfcfcf", //used menu hover
		neutralSecondary: '#605e5c',
		neutralPrimaryAlt: '#f5f9ff', //used
		neutralPrimary: '#323130', //used
		neutralDark: '#201f1e',
		black: '#000000',
		white: '#ffffff',
		//blackTranslucent40: "rgba(0,0,0,.1)", //used
	},
	semanticColors: {
		//Defaults
		bodyBackground: 'rgb(255, 255, 255)',
		bodyFrameBackground: 'rgb(255, 255, 255)',
		buttonBackground: 'rgb(255, 255, 255)',
		primaryButtonText: 'rgb(255, 255, 255)',
		primaryButtonTextHovered: 'rgb(255, 255, 255)',
		primaryButtonTextPressed: 'rgb(255, 255, 255)',
		inputBackground: 'rgb(255, 255, 255)',
		inputForegroundChecked: 'rgb(255, 255, 255)',
		listBackground: 'rgb(255, 255, 255)',
		menuBackground: 'rgb(255, 255, 255)',
		bodyTextChecked: 'rgb(0, 0, 0)',
		buttonTextCheckedHovered: 'rgb(0, 0, 0)',
		link: 'rgb(0, 120, 212)',

		primaryButtonBackground: 'rgb(17,94,163)',

		//primaryButtonBackground: "rgb(0, 120, 212)",
		inputBackgroundChecked: 'rgb(0, 120, 212)',
		inputIcon: 'rgb(0, 120, 212)',
		inputFocusBorderAlt: 'rgb(0, 120, 212)',
		//Links
		menuIcon: 'rgb(0, 120, 212)',
		menuHeader: 'rgb(0, 120, 212)',
		primaryButtonBackgroundPressed: 'rgb(0, 90, 158)',
		inputBackgroundCheckedHovered: 'rgb(0, 90, 158)',
		//Buttons
		inputIconHovered: 'rgb(0, 90, 158)',
		linkHovered: 'rgb(0, 90, 158)',
		primaryButtonBackgroundHovered: 'rgb(16, 110, 190)',
		inputPlaceholderBackgroundChecked: 'rgb(222, 236, 249)',
		bodyBackgroundChecked: 'rgb(237, 235, 233)',
		bodyFrameDivider: 'rgb(237, 235, 233)',
		bodyDivider: 'rgb(237, 235, 233)',
		variantBorder: 'rgb(237, 235, 233)',
		buttonBackgroundCheckedHovered: 'rgb(237, 235, 233)',
		buttonBackgroundPressed: 'rgb(237, 235, 233)',
		listItemBackgroundChecked: 'rgb(237, 235, 233)',
		listHeaderBackgroundPressed: 'rgb(237, 235, 233)',
		menuItemBackgroundPressed: 'rgb(237, 235, 233)',
		menuItemBackgroundChecked: 'rgb(237, 235, 233)',
		bodyBackgroundHovered: 'rgb(243, 242, 241)',
		buttonBackgroundHovered: 'rgb(243, 242, 241)',
		buttonBackgroundDisabled: 'rgb(243, 242, 241)',
		buttonBorderDisabled: 'rgb(243, 242, 241)',
		primaryButtonBackgroundDisabled: 'rgb(243, 242, 241)',
		disabledBackground: 'rgb(243, 242, 241)',
		listItemBackgroundHovered: '#4285f4',
		listHeaderBackgroundHovered: 'rgb(243, 242, 241)',
		menuItemBackgroundHovered: 'rgb(243, 242, 241)',

		//Inputs
		primaryButtonTextDisabled: 'rgb(208, 208, 208)',
		disabledSubtext: 'rgb(208, 208, 208)',
		listItemBackgroundCheckedHovered: 'rgb(225, 223, 221)',
		disabledBodyText: 'rgb(161, 159, 157)',
		variantBorderHovered: 'rgb(161, 159, 157)',
		buttonTextDisabled: 'rgb(161, 159, 157)',
		inputIconDisabled: 'rgb(161, 159, 157)',
		disabledText: 'rgb(161, 159, 157)',
		bodyText: 'rgb(50, 49, 48)',
		actionLink: 'rgb(50, 49, 48)',
		buttonText: 'rgb(50, 49, 48)',
		inputBorderHovered: 'rgb(50, 49, 48)',
		inputText: 'rgb(50, 49, 48)',
		listText: 'rgb(50, 49, 48)',
		menuItemText: 'rgb(50, 49, 48)',
		bodyStandoutBackground: 'rgb(250, 249, 248)',
		defaultStateBackground: 'rgb(250, 249, 248)',
		actionLinkHovered: 'rgb(32, 31, 30)',
		//Lists
		buttonTextHovered: 'rgb(32, 31, 30)',
		buttonTextChecked: 'rgb(32, 31, 30)',
		buttonTextPressed: 'rgb(32, 31, 30)',
		inputTextHovered: 'rgb(32, 31, 30)',
		menuItemTextHovered: 'rgb(32, 31, 30)',
		bodySubtext: 'rgb(96, 94, 92)',
		focusBorder: 'rgb(96, 94, 92)',
		//Menus
		inputBorder: 'rgb(96, 94, 92)',
		smallInputBorder: 'rgb(212, 212, 217)',
		inputPlaceholderText: 'rgb(96, 94, 92)',
		buttonBorder: 'rgb(138, 136, 134)',
		disabledBodySubtext: 'rgb(200, 198, 196)',
		disabledBorder: 'rgb(200, 198, 196)',
		buttonBackgroundChecked: 'rgb(200, 198, 196)',
		menuDivider: 'rgb(200, 198, 196)',
	},
	components: {
		Text: {
			styles: lightTextFieldStyle,
		},
		Button: {
			styles: {
				backGround: '',
			},
		},
	},
};
