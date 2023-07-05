import {
	IconButton,
	Stack,
	mergeStyleSets,
	IIconProps,
	ThemeContext,
	Spinner,
	SpinnerSize,
} from '@fluentui/react';
import { Outlet } from 'react-router-dom';
import React, {
	Suspense,
	useContext,
} from 'react';
import {
	pageIconButtonStyles,
} from '../styles/ListStyle';
import HomeCommandBar from '../components/Home/HomeCommandBar';
import HomeList from '../components/Home/HomeList';
import { toggleFullScreen } from '../app/appSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export const SearchBar = (
	myThemeContext: any
): React.CSSProperties => {
	return {
		verticalAlign: 'center',
		padding: '6px 10px',
		border: `1.5px solid ${myThemeContext.palette.neutralLight}`,
		margin: '0 10px 2px 10px',
		borderRadius: '10px',
		boxShadow: 'rgba(0, 0, 0, 0.28) 0px 1px 5px',
		zIndex: '9999',
	};
};

const Home = () => {
	const appDisptach = useAppDispatch();
	const myThemeContext = useContext(ThemeContext);
	const classNames = mergeStyleSets({
		mcDashboard: {
			width: '100%',
		},
		Main: {
			maxHeight: '100vh',
			overflow: 'hidden',
		},
	});
	const fullScreen = useAppSelector((state) => state.appSetting.fullScreen);
	const fullScreenIcon: IIconProps = {
		iconName: 'FullScreen',
	};
	const screenInPopup: IIconProps = { iconName: 'BackToWindow' };

	return (
		<>
			{/* <ThemeContext.Consumer>
				{(theme) => ( */}
			<section className="wh-100 d-flex flex-column">
				{!fullScreen && (
					<Stack className={'titleAboveRibbon'} horizontal>
						<h1
							style={{
								marginLeft: '2px',
								marginTop: '-2px',
								display: 'inline-block',
							}}
							className="ms-fontSize-20 ms-fontWeight-semibold">
							Home
						</h1>
					</Stack>
				)}
				<Stack
					className={classNames.Main}
					style={{
						margin: '0 -15px',
						marginTop: fullScreen ? '-15px' : 'initial',
					}}>
					<Stack className={classNames.mcDashboard}>
						<Stack.Item>
							<Stack
								style={{
									...SearchBar(myThemeContext),
									marginTop: fullScreen ? '10px' : 'initial',
								}}
								horizontal
								verticalAlign="center"
								horizontalAlign="space-between">
								<Stack horizontal verticalAlign="center">
									{fullScreen && (
										<Stack>
											<h1
												className="ms-fontSize-20 ms-fontWeight-semibold "
												style={{
													padding: ' 0px 17px',
													lineHeight: '34px',
													margin: '0',
													paddingLeft: '0',
												}}>
												Home
											</h1>
										</Stack>
									)}
								</Stack>

								<Stack
									horizontal
									verticalAlign="center"
									horizontalAlign="center"
									tokens={{ childrenGap: '10' }}
									className="ms__table-view">
									<HomeCommandBar
										selectedItemCount={50}
									/>
									
									<IconButton
										id="btnFullScreen"
										text="full Screen"
										onClick={() => appDisptach(toggleFullScreen())}
										styles={pageIconButtonStyles(myThemeContext)}
										iconProps={fullScreen ? screenInPopup : fullScreenIcon}
										ariaLabel="Fullscreen popup modal"
									/> 
								</Stack>
							</Stack>
						</Stack.Item>
					</Stack>
					<Stack>
						<HomeList fullScreen={fullScreen}/>
						<Suspense fallback={<Spinner size={SpinnerSize.medium} />}>
							<Outlet />
						</Suspense>
					</Stack>
				</Stack>
			</section>
			{/* )}
			</ThemeContext.Consumer> */}
		</>
	);
};

export default Home;
