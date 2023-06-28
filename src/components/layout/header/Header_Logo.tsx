import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ActionButton, Stack } from '@fluentui/react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useTheme } from '../../../Context/ThemeContext';
import { toggleMainMenu } from '../../../app/appSlice';

type Props = {};
const Header_Logo = (props: Props) => {
	const appDisptach = useAppDispatch();
	const themeName = useTheme().themeName;

	return (
		<>
			<Stack horizontal className="mc__logo">
				<ActionButton
					className="btn-hamburger"
					id="sidebarToggle"
					onClick={() => appDisptach(toggleMainMenu())}
					></ActionButton>
				<Link
					className="navbar-brand"
					style={{ color: themeName == 'Light' ? '#555555' : '#e5e5e5' }}
					to="/home">
					Project Name
				</Link>
			</Stack>
		</>
	);
};

export default Header_Logo;
