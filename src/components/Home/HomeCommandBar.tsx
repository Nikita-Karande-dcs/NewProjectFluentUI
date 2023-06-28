import {
	ThemeContext,
	CommandBarButton,
	OverflowSet,
	IStackStyles,
	IButtonStyles,
	IButtonProps,
	memoizeFunction,
	concatStyleSets,
} from '@fluentui/react';
import { ICommandBarItemProps } from '@fluentui/react';
import {
	IContextualMenuItemStyles,
} from '@fluentui/react';
import { useContext } from 'react';
import React from 'react';
const itemStyles: Partial<IContextualMenuItemStyles> = {
	root: {
		background: 'transparent',
	},
};

export const HomeCommandBar = ({ selectedItemCount }: any) => {
	const myThemeContext = useContext(ThemeContext);
	const _items: ICommandBarItemProps[] = [];
	const commandbarStyles: Partial<IStackStyles> = {
		root: {
			height: '32px',
			background: 'transparent',
		},
	};
	const onRenderOverflowButton = (
		overflowItems: any[] | undefined
	): JSX.Element => {
		const buttonStyles: Partial<IButtonStyles> = {
			root: {
				width: '32px',
				padding: '8px 5px',
				alignSelf: 'stretch',
				height: 'auto',
				background: 'transparent',
			},
		};
		return (
			<CommandBarButton
				ariaLabel="More items"
				styles={{
					...buttonStyles,
					rootHovered: {
						background: myThemeContext?.palette.neutralQuaternary,
					},
				}}
				menuIconProps={{ iconName: 'More' }}
				menuProps={{ items: overflowItems! }}
			/>
		);
	};

	const getCommandBarButtonStyles = memoizeFunction(
		(
			originalStyles: IButtonStyles | undefined
		): Partial<IContextualMenuItemStyles> => {
			if (!originalStyles) {
				return itemStyles;
			}
			return concatStyleSets(originalStyles, itemStyles);
		}
	);

	const CustomButton: React.FunctionComponent<IButtonProps> = (props) => {
		const buttonOnMouseClick = () => alert(`${props.text} clicked`);
		return (
			<CommandBarButton
				{...props}
				onClick={buttonOnMouseClick}
				styles={{
					...getCommandBarButtonStyles(props.styles),
					rootHovered: {
						background: myThemeContext?.palette.neutralQuaternary,
					},
				}}
			/>
		);
	};
	return (
		<>
			<OverflowSet
				styles={commandbarStyles}
				aria-label="Custom Example"
				items={_items}
				onRenderOverflowButton={onRenderOverflowButton}
				onRenderItem={CustomButton}
			/>
		</>
	);
};

export default HomeCommandBar;
