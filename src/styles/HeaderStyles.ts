import { IButtonStyles, IStackStyles } from '@fluentui/react';

export const stackBorderBottomStyle = (myThemeContext: any): IStackStyles => {
	return {
		root: {
			background: myThemeContext?.palette.neutralQuaternary,
			boxShadow: 'red 3px',
			boxSizing: '2px',
		},
	};
};
export const headerButtonStyle = (
	myThemeContext: any,
	themeName: any
): Partial<IButtonStyles> => {
	return {
		root: {
			backgroundColor:
				themeName === 'Light'
					? `${myThemeContext?.palette.neutralQuaternary} !important`
					: `${myThemeContext?.palette.neutralQuaternary} !important`,
			color:
				themeName === 'Dark'
					? `${myThemeContext.semanticColors.bodyText} !important`
					: `${myThemeContext.palette.themePrimary} !important`,
			border: 'none',
		},
		rootHovered: {
			border: 'none',
			backgroundColor:
				themeName === 'Dark' ? `#151515 !important` : `#f3f2f1 !important`,
		},
	};
};
