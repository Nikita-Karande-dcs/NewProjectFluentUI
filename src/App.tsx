import React, { Suspense, useState } from 'react';
import { Spinner, SpinnerSize, mergeStyleSets } from '@fluentui/react';
import { Outlet } from 'react-router-dom';
import { Stack } from '@fluentui/react';
import './scss/main.scss';
import NavBarCallout from './components/layout/navbar/NavBarCallout';
import Header from './components/layout/header/Header';
import { useAppSelector } from './app/hooks';

const classNames = mergeStyleSets({
	mcDashboard: {
		position: 'relative',
		overflow: 'hidden',
		width: '100%',
		height: '100%',
	},
	mcDashboardContainer: {
		overflowY: 'auto',
		overflowX: 'hidden',
		width: '100%',
		padding: '15px',
	},
});

function App() {
	const { fullScreen } = useAppSelector((state) => state.appSetting);
	const { isMenuOpen } = useAppSelector((state) => state.appSetting);
	return (
		<>
			{!fullScreen && <Header />}
			<Stack
				id="mc-dashboard"
				horizontal
				className={`${classNames.mcDashboard} ${isMenuOpen ? '' : 'sb-sidenav-toggled'
					}`}>
				{!fullScreen && <NavBarCallout />}
				<Stack
					id="mc-container"
					className={`${classNames.mcDashboardContainer}
						${window.localStorage.getItem('theme') === 'Light'
							? 'customScrollbar'
							: 'customScrollbarDark'
						} `}>
					<Suspense fallback={<Spinner size={SpinnerSize.medium} />}>
						<Outlet />
					</Suspense>
				</Stack>
			</Stack>
		</>
	);
}
export default App;

