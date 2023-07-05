import React from 'react';
import {
	Persona,
	PersonaSize,
	ContextualMenu,
	ContextualMenuItemType,
	IContextualMenuItem,
} from '@fluentui/react';
import { useTheme } from '../../../Context/ThemeContext';

export const HeaderUser: React.FunctionComponent = () => {
	const themeName = useTheme().themeName;
	const linkRef = React.useRef(null);
	const [showContextualMenu, setShowContextualMenu] = React.useState(false);
	const onShowContextualMenu = React.useCallback(
		(ev: React.MouseEvent<HTMLElement>) => {
			ev.preventDefault(); // don't navigate
			setShowContextualMenu(true);
		},
		[]
	);
	const onHideContextualMenu = React.useCallback(
		() => setShowContextualMenu(false),
		[]
	);

	const menuItems: IContextualMenuItem[] = [
		{
			key: 'profile',
			text: 'Profile',
			href: '',
			target: '',
		},
		{
			key: 'prefrenses',
			text: 'Prefrenses',
			href: '',
			target: '',
		},
		{
			key: 'divider_1',
			itemType: ContextualMenuItemType.Divider,
		},
		{
			key: 'english',
			text: 'English',
		},
		{
			key: 'japan',
			text: 'Japanese',
		},

		{
			key: 'divider_3',
			itemType: ContextualMenuItemType.Divider,
		},
		{
			key: 'logout',
			text: 'Logout',
			href: '',
			target: '',
		},
	];
	return (
		<>
			<div
				onClick={onShowContextualMenu}
				ref={linkRef}
				className={
					themeName === 'Light'
						? 'btn-user btn-userlight d-flex align-items-center'
						: 'btn-user btn-userdark d-flex align-items-center'
				}
				>
				<Persona text="User" size={PersonaSize.size32} />
				<ContextualMenu
					items={menuItems}
					hidden={!showContextualMenu}
					target={linkRef}
					onItemClick={onHideContextualMenu}
					onDismiss={onHideContextualMenu}
				/>
				<i className="ms-Icon ms-Icon--ChevronDown" aria-hidden="true"></i>
			</div>
		</>
	);
};
export default HeaderUser;
