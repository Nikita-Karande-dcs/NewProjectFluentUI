import {
	FontWeights,
	mergeStyleSets,
	loadTheme,
	IButtonStyles,
	ITextFieldStyles,
	ICheckboxStyles,
	IStackStyles,
	IRawStyle,
	ICommandBarStyles,
	ISearchBoxStyles,
	IStackProps,
	IDropdownStyleProps,
	IDropdownStyles,
	IDatePickerStyleProps,
	IDatePickerStyles,
	getTheme,
	IStyleSet,
	ILabelStyles,
	IProcessedStyleSet,
	ICommandBarProps,
	ICommandBarStyleProps,
} from '@fluentui/react';
import { NeutralColors } from '@fluentui/theme';
import React from 'react';
import { darkTheme, lightTheme } from '../themes/themes';

const theme = getTheme();

export const themePrimary = (myThemeContext: any): React.CSSProperties => {
	return {
		color: myThemeContext.palette.neutralDark,
	};
};

export const themePrimaryOverFlowItems: React.CSSProperties = {
	color: theme.palette.themePrimary,
};

export const themePrimaryBackground = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		color: myThemeContext.palette.themePrimary,
		background: myThemeContext.palette.neutralPrimaryAlt,
	};
};
export const themeBlackWhite = (myThemeContext: any): React.CSSProperties => {
	return {
		color: myThemeContext.palette.white,
	};
};
export const paddingTop20: React.CSSProperties = {
	paddingTop: '20px',
};

export const backgroundColorBlue: React.CSSProperties = {
	backgroundColor: 'blue',
};

export const neutralColorsGray100 = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		//color: NeutralColors.gray100,
		color: myThemeContext.palette.neutralTertiary,
	};
};

export const marginTB10: React.CSSProperties = {
	margin: '10px 0',
};

export const width100: React.CSSProperties = {
	width: '100%',
};

export const marginR5: React.CSSProperties = {
	marginRight: '5px',
};

export const divFlex: React.CSSProperties = {
	display: 'flex',
};

export const cyanColor: React.CSSProperties = {
	color: '#4f867b',
};

export const backgroundColorWhiteGreyOld: React.CSSProperties = {
	backgroundColor: 'rgb(231 231 231)', // "rgb(231 231 231)", //neutralTertiaryAlt
};

export const backgroundColorWhiteGrey = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		backgroundColor: myThemeContext.palette.neutralTertiaryAlt, // "rgb(231 231 231)", //neutralTertiaryAlt
	};
};

export const contactDetailContentsStyles: ICheckboxStyles = {
	checkbox: {
		height: '14px',
		width: ' 14px',
		marginRight: '7px',
		marginTop: '3px',
	},
	text: {
		fontSize: '12px',
		marginLeft: '0px',
	},
};
export const contactDetailContentsCommandBarDiv: React.CSSProperties = {
	position: 'absolute',
	top: '4px',
	right: '0',
	minWidth: '375px',
	background: 'yellow',
};

export const contactDetailContentsCommandBarDiv1: React.CSSProperties = {
	position: 'absolute',
	top: '4px',
	right: '0',
	minWidth: '130px',
};

export const contactDetailContentsCommandBarDiv2: React.CSSProperties = {
	position: 'absolute',
	top: '4px',
	right: '0',
	minWidth: '150px',
};

export const contactDetailContentsScrollbarPane: React.CSSProperties = {
	position: 'relative',
	height: '100%',
};

export const contactDetailContentsPivotItem: React.CSSProperties = {
	margin: '10px 0',
	height: '100%',
};
export const contactDetailContentsUnfollowedIcon: React.CSSProperties = {
	padding: '10px 0px 0px 15px',
	color: '#3585c8',
};
export const contactDetailContentsHiddenModuleRight: React.CSSProperties = {
	width: '100%',
	padding: '10px',
	border: '1px solid rgb(237, 235, 233)',
};
export const contactDetailContentsModuleRight = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		fontSize: '14px',
		color: `${myThemeContext.semanticColors.bodySubtext}`, //"#02005d",
	};
};
export const contactDetailContentsIcon = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		color: 'gray',
		fontSize: '12px',
	};
};

export const contactDetailContestsCardWidth: React.CSSProperties = {
	width: '293.5px',
};
export const contactDetailContentsstackStyles: Partial<IStackStyles> = {
	root: {
		border: '1px solid #ececec',
	},
};

export const contactDetailContestsPersonaBorder = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		//borderTop: "6px solid red",
		borderTop: `6px solid ${myThemeContext.semanticColors.smallInputBorder}`,
		// borderRadius: `8px `,
		// borderTop: `${myThemeContext.semanticColors.neutralPrimaryAlt}`,
		// backgroundColor: `10px solid ${myThemeContext.semanticColors.primaryButtonBackground}`,
		//${myThemeContext.semanticColors.borderTop}
	};
};

export const contactDetailContentsParentNameStyle: ICommandBarStyles = {
	root: {
		padding: '0',
	},
};
export const contactDetailContentsParentNameStyles = (myThemeContext: any) => {
	return mergeStyleSets({
		foo: {
			height: '10px',
			fontSize: '12px',
			fontWeight: '600',
			padding: '0px !important',
		},
		parentName: {
			height: '10px',
			fontSize: '12px',
			fontWeight: '400',
			padding: '0px 5px',
			color: `${myThemeContext.semanticColors.bodyText}`,
		},
	});
};
export const stackTextStyle = (myThemeContext: any): IStackStyles => {
	return {
		root: {
			height: '10px',
			fontSize: '12px',
			fontWeight: '400',
			padding: '0px 5px',
			color: `${myThemeContext.semanticColors.bodyText} !important`,
		},
	};
};

export const labelstackTextStyle = (myThemeContext: any): ILabelStyles => {
	return {
		root: {
			height: '10px',
			fontSize: '12px',
			fontWeight: '400',
			padding: '0px 5px',
			//color: "white",
			color: `${myThemeContext.semanticColors.bodyText} !important`,
		},
	};
};

export const contactDetailContentsiconButtonStyles = (
	myThemeContext: any,
	hoverColor?: string
): Partial<IButtonStyles> => {
	return {
		root: {
			color: myThemeContext.palette.neutralDark,
			marginLeft: 'auto',
			marginTop: '4px',
			marginRight: '2px',
		},
		rootHovered: {
			color: hoverColor ? hoverColor : `#4285f4`,
		},
	};
};

export const headerDetailAddNewContactButtonStyles = (
	myThemeContext: any
): Partial<IButtonStyles> => {
	return {
		rootHovered: {
			// backgroundColor: "transparent",
			color: myThemeContext.palette.neutralPrimary,
			// border: 0,
		},
	};
};

export const contactDetailAddNewContactButtonStyles = (
	myThemeContext: any
): Partial<IButtonStyles> => {
	return {
		root: {
			color: myThemeContext.semanticColors.primaryButtonBackground,
			// marginLeft: "auto",
			marginTop: '4px',
			marginRight: '0px',
			backgroundColor: 'transparent',
			border: 0,
			alignSelf: 'left',
		},
		rootHovered: {
			backgroundColor: 'transparent',
			color: myThemeContext.semanticColors.primaryButtonBackground,
			border: 0,
		},
		iconHovered: {
			color: myThemeContext.semanticColors.primaryButtonBackgroundHovered,
		},
	};
};
export const contactDetailInTabcontentStyles = (myThemeContext: any) => {
	return mergeStyleSets({
		tileListContent: {
			height: 'calc(100vh - 17rem)',
			width: '100%',
			padding: '0px 0px 0 0',
		},
		container: {
			display: 'flex',
			flexFlow: 'column nowrap',
			alignItems: 'stretch',
			minWidth: '80%',
			maxWidth: 'calc(80% - 32px)',
			minHeight: '75%',
		},
		header: [
			theme.fonts.xLargePlus,
			{
				flex: '1 1 auto',
				color: myThemeContext.palette.neutralPrimary,
				display: 'flex',
				alignItems: 'start',
				fontWeight: FontWeights.semibold,
				padding: '12px 12px 0px 12px',
			},
		],
		body: {
			flex: '4 4 auto',
			padding: '0 12px 0px',
			overflowY: 'hidden',
			selectors: {
				p: { margin: '14px 0' },
				'p:first-child': { marginTop: 0 },
				'p:last-child': { marginBottom: 0 },
			},
		},
	});
};
export const contactDetailInTabcontentStylesOld = mergeStyleSets({
	tileListContent: {
		height: 'calc(100vh - 17rem)',
		width: '100%',
		padding: '0px 0px 0 0',
	},
	container: {
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'stretch',
		minWidth: '80%',
		maxWidth: 'calc(80% - 32px)',
		minHeight: '75%',
	},
	header: [
		theme.fonts.xLargePlus,
		{
			flex: '1 1 auto',
			color: theme.palette.neutralPrimary,
			display: 'flex',
			alignItems: 'start',
			fontWeight: FontWeights.semibold,
			padding: '12px 12px 0px 12px',
		},
	],
	body: {
		flex: '4 4 auto',
		padding: '0 12px 0px',
		overflowY: 'hidden',
		selectors: {
			p: { margin: '14px 0' },
			'p:first-child': { marginTop: 0 },
			'p:last-child': { marginBottom: 0 },
		},
	},
});

export const contactDetailInTabclassNames = mergeStyleSets({
	mcDashboard: {
		width: '100%',
		height: '100%',
	},
	mcCard: {
		borderRadius: '4px',
		boxShadow: '0 0 5px rgba(0,0,0,0.1)',
		padding: '10px 10px 0',
	},
	mcDashboardScroll: {
		overflowX: 'hidden scroll',
		overflowY: 'auto',
		padding: '20px 8px',
		margin: '0 -15px',
	},
	mcCardHeader: {
		position: 'relative',
		borderRadius: '4px',
		background: '#ddd',
		padding: '0 0 50%',
		overflow: 'hidden',
	},
	mcCardImage: {
		position: 'absolute',
		height: '100%',
	},
	mcCardHeaderAction: {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%',
		padding: '5px 10px 0',
		color: '#fff',
		zIndex: '2',
		background:
			'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)',
	},
	mcCardHeaderTitle: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		width: '100%',
		padding: '5px 10px',
		color: '#fff',
		background: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)',
	},
	mcCardFooter: {
		background: '#f5f9ff',
		color: '#0b49ae',
		margin: '0 -10px',
		padding: '10px',
		borderRadius: '0 0 4px 4px',
		fontSize: '12px',
	},
	modalTitleBar: {
		background: '#f5f9ff',
		padding: '10px 24px',
		margin: '0 -24px',
	},
	stackItemLabelStyles: {
		fontSize: '11px',
	},
	stackItemValueStyles: {
		fontSize: '12px',
		fontWeight: '600',
	},
	stackItemColor: {
		width: '14px',
		height: '14px',
		borderRadius: '4px',
		marginRight: '5px',
		verticalAlign: 'middle',
		display: 'inline-block',
		backgroundColor: '#0b49ae',
	},
	stackItemDevider: {
		borderRight: 'solid 1px rgba(0,0,0,0.1)',
		paddingRight: '15px',
	},
	stackItemSidebar: {
		minWidth: '320px',
		padding: '10px 0 0 20px',
		borderLeft: 'solid 1px rgba(0,0,0,0.1)',
	},
	stackItemSidebarMap: {
		overflow: 'hidden',
		borderRadius: '10px',
		position: 'relative',
		height: '200px',
	},
	stackItemSidebarMapIframe: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		border: 'none',
		top: 0,
		left: 0,
	},
	summaryContactFacePileStyles: {
		width: '200px',
	},
});

export const contactDetailInTabsectionStackTokens: IStackStyles = {
	root: {
		width: '225px',
		padding: '10px 20px 20px 0',
	},
};

export const contactDetailModalcontentStyles = (myThemeContext: any) => {
	return mergeStyleSets({
		tileListContent: {
			height: 'calc(100vh - 24rem)',
			width: '100%',
			padding: '0px 0px 0 0',
		},
		tileListContentFull: {
			height: 'calc(100vh - 14rem)',
			width: '100%',
			padding: '0px 0px 0 0',
		},
		container: {
			display: 'flex',
			flexFlow: 'column nowrap',
			alignItems: 'stretch',
			minWidth: '80%',
			maxWidth: 'calc(80% - 32px)',
			minHeight: '60%',
			background: `${myThemeContext.semanticColors.bodyBackground}`,
			//	outline: `${myThemeContext.semanticColors.focusBorder} solid 3px`,
			border: `1px solid ${myThemeContext.palette.neutralLight}`,
		},
		Fullcontainer: {
			display: 'flex',
			flexFlow: 'column nowrap',
			alignItems: 'stretch',
			minWidth: '100%',
			minHeight: '100%',
			maxWidth: 'calc(80% - 32px)',
		},
		header: [
			theme.fonts.xLargePlus,
			{
				flex: '1 1 auto',
				display: 'flex',
				alignItems: 'start',
				fontWeight: FontWeights.semibold,
				padding: '12px 12px 0px 12px',
			},
		],
		body: {
			flex: '4 4 auto',
			padding: '0 12px 0px',
			overflow: 'hidden',
			selectors: {
				p: { margin: '14px 0' },
				'p:first-child': { marginTop: 0 },
				'p:last-child': { marginBottom: 0 },
			},
		},
	});
};

export const contactDetailModalclassNamesOld = mergeStyleSets({
	mcDashboard: {
		width: '100%',
		height: '100%',
	},
	mcCard: {
		borderRadius: '4px',
		boxShadow: '0 0 5px rgba(0,0,0,0.1)',
		padding: '10px 10px 0',
	},
	mcDashboardScroll: {
		overflowX: 'hidden',
		overflowY: 'auto',
		padding: '20px 8px',
		margin: '0 -15px',
	},
	mcCardHeader: {
		position: 'relative',
		borderRadius: '4px',
		background: '#ddd',
		padding: '0 0 50%',
		overflow: 'hidden',
	},
	mcCardImage: {
		position: 'absolute',
		height: '100%',
		width: '100%',
	},
	mcCardHeaderAction: {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%',
		padding: '5px 10px 0',
		zIndex: '2',
	},
	mcCardHeaderActionIcon: {
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		textAlign: 'center',
		lineHeight: '20px',
		cursor: 'pointer',
	},
	mcCardHeaderTitle: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		width: '100%',
		padding: '5px 10px',
		color: `${theme.palette.white}`,
	},
	mcCardFooter: {
		margin: '0 -10px',
		padding: '10px',
		borderRadius: '0 0 4px 4px',
		fontSize: '12px',
	},
	modalTitleBar: {
		padding: '10px 24px',
		margin: '0 -24px',
	},
	stackItemLabelStyles: {
		fontSize: '11px',
	},
	stackItemCardValueStyles: {
		fontSize: '12px',
		fontWeight: '600',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	stackItemValueStyles: {
		fontSize: '12px',
		fontWeight: '600',
	},
	stackItemColor: {
		width: '14px',
		height: '14px',
		borderRadius: '4px',
		marginRight: '5px',
		verticalAlign: 'middle',
		display: 'inline-block',
	},
	stackItemDevider: {
		borderTop: 'solid 1px rgba(0,0,0,0.1)',
		paddingTop: '15px',
	},
	stackItemSidebar: {
		minWidth: '150px',
		padding: '10px 30px 0 0',
	},
	iconRed: {
		color: 'red',
		icon: { color: 'white', fontSize: 72 },
	},
	iconBlue: {
		color: 'blue',
	},
	contactContent: {
		maxheight: '60%',
		overflow: 'hidden scroll !important',
	},
	deleteIcon: {
		color: 'red',
		icon: { color: 'red', fontSize: 12 },
		visibility: 'hidden',
	},
});

export const contactDetailModalClassNames = (myThemeContext: any) => {
	return mergeStyleSets({
		mcDashboard: {
			width: '100%',
			height: '100%',
		},
		mcCard: {
			borderRadius: '4px',
			boxShadow: '0 0 5px rgba(0,0,0,0.1)',
			padding: '10px 10px 0',
		},
		mcDashboardScroll: {
			overflowX: 'hidden',
			overflowY: 'auto',
			padding: '20px 8px',
			margin: '0 -15px',
		},
		mcCardHeader: {
			position: 'relative',
			borderRadius: '4px',
			background: '#ddd',
			padding: '0 0 50%',
			overflow: 'hidden',
		},
		mcCardImage: {
			position: 'absolute',
			height: '100%',
			width: '100%',
		},
		mcCardHeaderAction: {
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			padding: '5px 10px 0',
			zIndex: '2',
		},
		mcCardHeaderActionIcon: {
			width: '20px',
			height: '20px',
			borderRadius: '50%',
			textAlign: 'center',
			lineHeight: '20px',
			cursor: 'pointer',
		},
		mcCardHeaderTitle: {
			position: 'absolute',
			bottom: '0',
			left: '0',
			width: '100%',
			padding: '5px 10px',
			color: `${myThemeContext.palette.white}`,
		},
		mcCardFooter: {
			margin: '0 -10px',
			padding: '10px',
			borderRadius: '0 0 4px 4px',
			fontSize: '12px',
		},
		modalTitleBar: {
			padding: '10px 24px',
			margin: '0 -24px',
		},
		stackItemLabelStyles: {
			fontSize: '11px',
		},
		stackItemCardValueStyles: {
			fontSize: '12px',
			fontWeight: '600',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		stackItemValueStyles: {
			fontSize: '12px',
			fontWeight: '600',
		},
		stackItemColor: {
			width: '14px',
			height: '14px',
			borderRadius: '4px',
			marginRight: '5px',
			verticalAlign: 'middle',
			display: 'inline-block',
		},
		stackItemDevider: {
			borderTop: 'solid 1px rgba(0,0,0,0.1)',
			paddingTop: '15px',
		},
		stackItemSidebar: {
			minWidth: '150px',
			padding: '10px 30px 0 0',
		},
		iconRed: {
			color: 'red',
			icon: { color: 'white', fontSize: 72 },
		},
		iconBlue: {
			color: 'blue',
		},
		contactContent: {
			maxheight: '60%',
			overflow: 'hidden scroll !important',
		},
		deleteIcon: {
			color: 'red',
			icon: { color: 'red', fontSize: 12 },
			visibility: 'hidden',
		},
	});
};

export const contactListSearchBar = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		// background: myThemeContext.palette.neutralQuaternary,
		padding: '6px 10px',
		border: `1.5px solid ${myThemeContext.palette.neutralLight}`,
		margin: '0 10px 2px 10px',
		borderRadius: '10px',
		boxShadow: 'rgba(0, 0, 0, 0.28) 0px 1px 5px',
		zIndex: '9999',
	};
};

export const contactListContentStylesOld = mergeStyleSets({
	tileListContent: {
		height: 'calc(100vh - 23rem)',
		width: '100%',
		padding: '0px 0px 0 0',
	},
	tileListContentFull: {
		height: 'calc(100vh - 18rem)',
		width: '100%',
		padding: '0px 0px 0 0',
	},
	container: {
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'stretch',
		minWidth: '80%',
		maxWidth: 'calc(80% - 32px)',
		minHeight: '75%',
	},
	header: [
		theme.fonts.xLargePlus,
		{
			flex: '1 1 auto',
			color: theme.palette.neutralPrimary,
			display: 'flex',
			alignItems: 'start',
			fontWeight: FontWeights.semibold,
			padding: '12px 12px 0px 12px',
		},
	],
	body: {
		flex: '4 4 auto',
		padding: '0 12px 0px',
		overflowY: 'hidden',
		selectors: {
			p: { margin: '14px 0' },
			'p:first-child': { marginTop: 0 },
			'p:last-child': { marginBottom: 0 },
		},
	},
});

export const contactListContentStyles = (myThemeContext: any) => {
	return mergeStyleSets({
		tileListContent: {
			height: 'calc(100vh - 23rem)',
			width: '100%',
			padding: '0px 0px 0 0',
		},
		tileListContentFull: {
			height: 'calc(100vh - 18rem)',
			width: '100%',
			padding: '0px 0px 0 0',
		},
		container: {
			display: 'flex',
			flexFlow: 'column nowrap',
			alignItems: 'stretch',
			minWidth: '80%',
			maxWidth: 'calc(80% - 32px)',
			minHeight: '75%',
		},
		header: [
			myThemeContext.fonts.xLargePlus,
			{
				flex: '1 1 auto',
				color: myThemeContext.palette.neutralPrimary,
				display: 'flex',
				alignItems: 'start',
				fontWeight: FontWeights.semibold,
				padding: '12px 12px 0px 12px',
			},
		],
		body: {
			flex: '4 4 auto',
			padding: '0 12px 0px',
			overflowY: 'hidden',
			selectors: {
				p: { margin: '14px 0' },
				'p:first-child': { marginTop: 0 },
				'p:last-child': { marginBottom: 0 },
			},
		},
	});
};

export const contactListSectionStackTokens: IStackStyles = {
	root: {
		width: '225px',
		padding: '10px 20px 20px 0',
	},
};

export const contactListCommonStyles: IRawStyle = {
	display: 'inline-block',
	cursor: 'default',
	boxSizing: 'border-box',
	verticalAlign: 'top',
	background: 'none',
	backgroundColor: 'transparent',
	border: 'none',
};

export const contactListClassNames = mergeStyleSets({
	mcDashboard: {
		width: '100%',
		height: '100%',
	},
	mcCard: {
		borderRadius: '4px',
		boxShadow: '0 0 5px rgba(0,0,0,0.1)',
		padding: '10px 10px 0',
	},
	mcDashboardScroll: {
		overflowX: 'hidden scroll',
		overflowY: 'auto',
		padding: '20px 8px',
		margin: '0 -15px',
	},
	mcCardHeader: {
		position: 'relative',
		borderRadius: '4px',
		background: '#ddd',
		padding: '0 0 50%',
		overflow: 'hidden',
	},
	mcCardImage: {
		position: 'absolute',
		height: '100%',
	},
	mcCardHeaderAction: {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%',
		padding: '5px 10px 0',
		color: '#fff',
		zIndex: '2',
		background:
			'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)',
	},
	mcCardHeaderTitle: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		width: '100%',
		padding: '5px 10px',
		color: '#fff',
		background: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)',
	},
	mcCardFooter: {
		background: '#f5f9ff',
		color: '#0b49ae',
		margin: '0 -10px',
		padding: '10px',
		borderRadius: '0 0 4px 4px',
		fontSize: '12px',
	},
	modalTitleBar: {
		background: '#f5f9ff',
		padding: '10px 24px',
		margin: '0 -24px',
	},
	stackItemLabelStyles: {
		fontSize: '11px',
	},
	stackItemValueStyles: {
		fontSize: '12px',
		fontWeight: '600',
	},
	stackItemColor: {
		width: '14px',
		height: '14px',
		borderRadius: '4px',
		marginRight: '5px',
		verticalAlign: 'middle',
		display: 'inline-block',
		backgroundColor: '#0b49ae',
	},
	stackItemDevider: {
		borderRight: 'solid 1px rgba(0,0,0,0.1)',
		paddingRight: '15px',
	},
	stackItemSidebar: {
		minWidth: '320px',
		padding: '10px 0 0 20px',
		borderLeft: 'solid 1px rgba(0,0,0,0.1)',
	},
	stackItemSidebarMap: {
		overflow: 'hidden',
		borderRadius: '10px',
		position: 'relative',
		height: '200px',
	},
	stackItemSidebarMapIframe: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		border: 'none',
		top: 0,
		left: 0,
	},
	summaryContactFacePileStyles: {
		width: '200px',
	},
	compactCard: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	expandedCard: {
		padding: '16px 24px',
	},
	item: {
		selectors: {
			'&:hover': { background: '#eee' },
		},
	},
	// Overwrites the default style for Button
	check: [contactListCommonStyles, { padding: '11px 8px' }],
	ListStyle: {
		width: '100%',
		borderRadius: '15px',
		padding: '0px',
		maxHeight: 'calc(100vh - 16rem)',
	},
	Shape: {
		width: '70px',
		height: '20px',
		margin: '0px',
	},
	CheckBooks: {
		paddingRight: '10px',
		float: 'left',
		width: '50%',
	},
});

export const contactListCardSection: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '5px 0px',
};
export const contactListMainSection: React.CSSProperties = {
	margin: 0,
	paddingTop: '5px',
	display: 'flex',
	alignItems: 'start',
};
export const contactListMenuList = (theme: any): React.CSSProperties => {
	return {
		display: 'flex',
		paddingInlineStart: '1.2rem',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: '3px',
		paddingBottom: '3px',
		borderRight: `1px solid ${theme.palette.neutralLight}`,
	};
};

export const contactSearchClassNames = mergeStyleSets({
	ListStyle: {
		width: '100%',
		borderRadius: '15px',
		padding: '0px',
		maxHeight: 'calc(100vh - 16rem)',
	},
});
export const contactSearchCardSection: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '5px 0px',
};
export const contactSearchResult: React.CSSProperties = {
	minWidth: '300px',
};
export const manageColumnsSearchBoxStyles = (
	myThemeContext: any
): Partial<ISearchBoxStyles> => {
	return {
		root: {
			borderRadius: '4px',
			borderColor: '#ccc',
			fontSize: '12px',
		},
	};
};

export const manageColumnsClassNames = (myThemeContext: any) => {
	return mergeStyleSets({
		cardColumns: {
			borderRadius: '6px',
			backgroundColor: myThemeContext.palette.neutralPrimaryAlt,
		},
		cardHeader: {
			borderBottom: 'solid 1px rgba(0,0,0,0.05)',
			padding: '10px 15px',
		},
		cardBody: {
			padding: '15px',
		},
		dragIcon: {
			color: '#4285f4',
			opacity: '0.6',
			cursor: 'pointer',
			fontSize: '16px',
			'&:hover': {
				opacity: '1',
			},
		},
		badge: {
			padding: '2px 6px',
			fontSize: '10px',
			fontWeight: 'bold',
			borderRadius: '10px',
			color: 'white',
			backgroundColor: 'black',
		},
	});
};
export const pageContactClassNames = mergeStyleSets({
	mcDashboard: {
		width: '100%',
	},
	Main: {
		maxHeight: '100vh',
		overflow: 'hidden',
	},
});
export const pageContactTextFieldStyles: Partial<ITextFieldStyles> = {
	root: { maxWidth: '300px' },
};

export const pageContactIconButtonStyles = (
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

export const pageContactsClassNames = (myThemeContext: any) => {
	return mergeStyleSets({
		mcDashboard: {
			width: '100%',
			height: '100%',
		},
		mcCard: {
			borderRadius: '4px',
			boxShadow: '0 0 5px rgba(0,0,0,0.1)',
			padding: '10px 10px 0',
		},
		mcDashboardScroll: {
			overflowX: 'hidden',
			overflowY: 'auto',
			padding: '0 15px',
			margin: '0 -15px',
		},
		contactNameCircle: {
			width: '30px',
			float: 'left',
			height: '30px',
			background: '#d9e7fd',
			alignItems: 'center',
			padding: '7px',
			borderRadius: '51%',
			marginRight: '10px',
			textTransform: 'uppercase',
			textAlign: 'center',
		},
		bankCircle: {
			margin: 'auto',
			width: '48px',
			height: '30px',
			background: 'rgb(228 228 228)',
			textAlign: 'center',
			padding: '7px',
			borderRadius: '50px',
		},
	});
};

export const conatctTileViewDataMainDiv: React.CSSProperties = {
	margin: '0 0 15px',
};

export const conatctTileViewSearchMainDiv: React.CSSProperties = {
	padding: '20px',
	minWidth: '300px',
};
export const conatctTileViewSearchActionButton: React.CSSProperties = {
	padding: '0 20px 20px',
	minWidth: '300px',
};

export const contactTileViewModuleRightMainDiv = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		width: '100%',
		borderRadius: '4px',
		backgroundColor: '#f8f8f8',
		padding: '10px',
	};
};

export const contactTileViewModuleRightTitle = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		fontSize: '14px',
		color: '#02005d',
	};
};

export const contactTileViewCursor = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		color: 'red',
		cursor: 'pointer',
	};
};

export const contactTileViewStyles: ICheckboxStyles = {
	checkbox: {
		height: '14px',
		width: ' 14px',
		marginRight: '7px',
		marginTop: '3px',
	},
	text: {
		fontSize: '12px',
		marginLeft: '0px',
	},
};

export const contactTileViewStackStyles = (
	myThemeContext: any
): Partial<IStackStyles> => {
	return {
		root: {
			border: '1px solid #ececec',
			borderRadius: '4px',
		},
	};
};

export const contactTileViewColumnProps: Partial<IStackProps> = {
	tokens: {
		childrenGap: 100,
	},
	styles: {
		root: {
			width: '100%',
		},
	},
};

export const contactTileViewContentStyles = mergeStyleSets({
	container: {
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'stretch',
		minWidth: '80%',
		maxWidth: 'calc(80% - 32px)',
	},
	fullcontainer: {
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'stretch',
		minWidth: '100%',
		minHeight: '100%',
		maxWidth: 'calc(80% - 32px)',
	},
});

export const commonMargin15: React.CSSProperties = {
	margin: '0 -15px',
};

export const commonMargin20: React.CSSProperties = {
	margin: '0 -20px',
};

export const contactFullScreenTitleH1: React.CSSProperties = {
	padding: ' 0px 17px',
	lineHeight: '34px',
	margin: '0',
};
export const contactTitleH1: React.CSSProperties = {
	padding: ' 0px 17px',
};
export const iconStyle: React.CSSProperties = {
	flex: 1,
	marginLeft: 9,
	color: '#777',
	fontSize: '16px',
};

export const workFlowSvg: React.CSSProperties = {
	flex: 1,
	marginLeft: 9,
	width: '16px',
};

export const contactTileViewClassNames = (myThemeContext: any) => {
	return mergeStyleSets({
		Cu_Button: {
			backgroundColor: '#dddddd',
			padding: '10px',
			fontSize: '12px',
			cursor: 'pointer',
			'&:hover': {
				backgroundColor: '#ccab84',
				color: 'white',
			},
		},
	});
};

export const iconButtonStyle: Partial<IButtonStyles> = {
	icon: { color: 'blue', fontSize: '12' },
};

export const iconButtonViewDetailStyle = (
	myThemeContext: any
): Partial<IButtonStyles> => {
	return {
		icon: { color: '#0b49ae', fontSize: '12' },
	};
};

export const contactPlaceHolderMainDiv: React.CSSProperties = {
	marginLeft: '33%',
	marginTop: '10%',
	textAlign: 'justify',
};
export const contactPlaceHolderImage: React.CSSProperties = {
	alignSelf: 'center',
	width: '70px',
	height: '70px',
	paddingTop: '30px',
};
export const contactPlaceHolderText: React.CSSProperties = {
	alignSelf: 'center',
	paddingTop: '10px',
};
export const contactPlaceHolderUnselectedText = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		color: NeutralColors.gray130,
		alignSelf: 'center',
		paddingTop: '10px',
	};
};
export const contactPlaceHolderToggle: React.CSSProperties = {
	alignSelf: 'center',
	paddingTop: '15px',
};
export const contactDataTableTextFieldStyles: Partial<ITextFieldStyles> = {
	root: { maxWidth: '300px' },
};

export const taskDelegationActionButton: React.CSSProperties = {
	padding: '10px 0',
	textAlign: 'center',
};

export const taskDelegationContentStyles = (myThemeContext: any) => {
	return mergeStyleSets({
		container: {
			display: 'flex',
			flexFlow: 'column nowrap',
			alignItems: 'stretch',
			border: `1px solid ${myThemeContext.palette.neutralTertiaryAlt}`,
		},
		header: [
			myThemeContext.fonts.xLargePlus,
			{
				flex: '1 1 auto',
				color: myThemeContext.palette.neutralPrimary,
				display: 'flex',
				alignItems: 'center',
				fontWeight: 700,
				padding: '12px 12px 14px 24px',
			},
		],
		body: {
			flex: '4 4 auto',
			padding: '0 24px 24px 24px',
			overflowY: 'hidden',
			selectors: {
				p: { margin: '14px 0' },
				'p:first-child': { marginTop: 0 },
				'p:last-child': { marginBottom: 0 },
				width: 500,
			},
		},
	});
};

export const taskDelegationIconButtonStyles = (
	myThemeContext: any
): Partial<IButtonStyles> => {
	return {
		root: {
			color: myThemeContext.palette.neutralPrimary,
			marginLeft: 'auto',
			marginTop: '4px',
			marginRight: '2px',
		},
		rootHovered: {
			color: myThemeContext.palette.neutralDark,
		},
	};
};

export const taskDelegationStackItemStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'left',
	width: 250,
};

export const taskDelegationStackFullRowItemStyle: React.CSSProperties = {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'left',
	width: 520,
};

export const taskDelegationStackDropDownStyle = (
	props: IDropdownStyleProps
): Partial<IDropdownStyles> => {
	return {
		title: {
			textAlign: 'left',
			width: '100%',
		},
	};
};

export const taskDelegationStackDatePickerStyle = (
	props: IDatePickerStyleProps
): Partial<IDatePickerStyles> => {
	return {
		textField: {
			width: '250px',
		},
	};
};

export const commandBarBackgroundElpsis = (
	props: ICommandBarStyleProps
): Partial<ICommandBarStyles> => {
	return {
		root: {
			backgroundColor: 'rgb(151, 149, 147)',
		},
		primarySet: {
			backgroundColor: 'rgb(151, 149, 147)',
		},
	};
};

export const filterButtonStyle = (
	myThemeContext: any,
	themeName: any
): Partial<IButtonStyles> => {
	return {
		root: {
			backgroundColor:
				themeName === 'Dark'
					? `${myThemeContext?.palette.neutralLighter} !important`
					: `${myThemeContext?.palette.white} !important`,
			color:
				themeName === 'Dark'
					? `${myThemeContext.semanticColors.bodyText} !important`
					: `${myThemeContext.palette.themePrimary} !important`,
			border: 'none',
			minWidth: 'auto !important',
		},
		rootHovered: {
			border: 'none',
			// color:
			// 	themeName === 'Dark'
			// 		? `${myThemeContext.semanticColors.bodyText} !important`
			// 		: `${myThemeContext.palette.white} !important`,
			backgroundColor:
				themeName === 'Dark'
					? `${myThemeContext?.palette.neutralLighter} !important`
					: `${myThemeContext?.palette.neutralLighter} !important`,
		},
	};
};

export const dropwDownFieldCatStyle =
	(myThemeContext: any) =>
	(props: IDropdownStyleProps): Partial<IDropdownStyles> => {
		return {
			dropdownItems: {
				color: `${myThemeContext.semanticColors.inputTextHovered}`,
			},
		};
	};
