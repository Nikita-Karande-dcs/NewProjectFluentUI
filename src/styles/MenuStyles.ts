import { mergeStyleSets, getTheme } from '@fluentui/react';

const theme = getTheme();
export const parentMenuStyles = (myThemeContext: any) => {
	return {
		paddingRight: '2px',
		borderRight: '1px solid lightgrey',
		background: myThemeContext.palette.neutralQuaternary,
	};
};
export const subMenuStyles = (myThemeContext: any) => {
	return {
		background: myThemeContext.semanticColors.bodyBackground,
	};
};
export const calloutStyles = (myThemeContext: any) => {
	return {
		background: myThemeContext.semanticColors.bodyBackground,
		color: myThemeContext.semanticColors.bodyText,
	};
};
export const parentMenuClasses = (myThemeContext: any) => {
	return mergeStyleSets({
		base: {
			background: `${myThemeContext.palette.neutralQuaternary}`,
			color: `${myThemeContext.palette.neutralDark}`,
		},
		callout: {
			background: `${myThemeContext.palette.neutralLighter}`,
			border: `2px solid ${myThemeContext.palette.neutralLight}`,
			width: '155px',
			' li:hover': {
				background: `${myThemeContext.palette.neutralLighterAlt}`,
			},
		},
		borderright: {
			borderRight: `2px solid ${myThemeContext.palette.neutralLight}`,
		},
		links: {
			color: `${myThemeContext.palette.neutralDark} !important`,
			' span': {
				color: `${myThemeContext.palette.neutralDark} !important`,
				fontSize: '0.875rem !important',
			},
			':hover': {
				backgroundColor: `${myThemeContext.palette.neutralQuaternaryAlt} !important`,
			},
		},
		submenuopened: {
			backgroundColor: `${myThemeContext.palette.neutralLight} !important`,
			' dropdown': {
				backgroundColor: `${myThemeContext.palette.neutralLight} !important`,
			},
			' span': {
				color: `${myThemeContext.palette.neutralDark} !important`,
				fontSize: '0.875rem !important',
			},
			' subNav': {
				backgroundColor: `${myThemeContext.palette.neutralLight} !important`,
			},
			' a:hover': {
				backgroundColor: `${myThemeContext.palette.neutralQuaternaryAlt} !important`,
			},
		},
		menudivider: {
			backgroundColor: `${myThemeContext.palette.neutralLight} !important`,
			width: '90%',
			marginTop: '0px',
			marginBottom: '5px',
			borderTop: `2px solid ${myThemeContext.palette.neutralLight}`,
		},
		scroll: {
			' ul.nav::-webkit-scrollbar': {
				width: '6px',
				height: '6px',
			},
			' ul.nav::-webkit-scrollbar-thumb': {
				background: `${myThemeContext.palette.neutralLight}`,
				borderRadius: '3px',
			},
			' ul.nav::-webkit-scrollbar-track': {
				backgroundColor: `${myThemeContext.palette.neutralQuaternary} !important`,
			},
		},
	});
};
