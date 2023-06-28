	import {
	mergeStyleSets,
	IButtonStyles,
	IRawStyle,
} from '@fluentui/react';

export const themePrimary = (myThemeContext: any): React.CSSProperties => {
	return {
		color: myThemeContext.palette.themePrimary,
	};
};

const commonStyles: IRawStyle = {
	display: 'inline-block',
	cursor: 'default',
	boxSizing: 'border-box',
	verticalAlign: 'top',
	background: 'none',
	backgroundColor: 'transparent',
	border: 'none',
};


export const BankAccountListClassNames = mergeStyleSets({
	stackItemLabelStyles: {
		fontSize: '11px',
	},
	stackItemValueStyles: {
		fontSize: '12px',
		fontWeight: '600',
	},
	// Overwrites the default style for Button
	check: [commonStyles, { padding: '11px 8px' }],
	ListStyle: {
		width: '100%',
		borderRadius: '15px',
		padding: '0px',
		maxHeight: 'calc(100vh - 16rem)',
	},
	Shape: {
		width: '70px',
		height: '20px',
		// backgroundColor: "#fe7e00",
		margin: '0px',
	},
	CheckBooks: {
		paddingRight: '10px',
		float: 'left',
		width: '50%',
	},
});

export const pageIconButtonStyles = (
	myThemeContext: any
): Partial<IButtonStyles> => {
	return {
		root: {
			color: myThemeContext.palette.neutralSecondary,
			marginLeft: 'auto',
			marginRight: '0',
		},
		rootHovered: {
			color: myThemeContext.palette.neutralPrimary,
			backgroundColor: 'transparent',
		},
	};
};