import { IButtonStyles, IStackTokens } from "@fluentui/react";

export const SelectionItemCheck: React.CSSProperties = {
	marginLeft: '0px',
	marginTop: '8px',
	width: '32px',
};
export const Gap5Token: IStackTokens = {
	childrenGap: 5,
};
export const Gap10Token: IStackTokens = {
	childrenGap: 5,
};
export const submitForApprovalButton = (
	myThemeContext: any,
	themeName: any
): Partial<IButtonStyles> => {
	return {
		rootHovered: {
			backgroundColor:
				themeName === 'Dark'
					? `${myThemeContext?.palette.black} !important`
					: `${myThemeContext?.palette.neutralLighter} !important`,
		},
		root: {
			color:
				themeName === 'Dark'
					? `${myThemeContext?.palette.neutralDark} !important`
					: `${myThemeContext?.palette.themePrimary} !important`,
		},
		rootDisabled: {
			backgroundColor:
				themeName === 'Dark'
					? `${myThemeContext?.palette.neutralLighter} !important`
					: '',
		},
	};
};