import {
	IconButton,
	Stack,
	mergeStyleSets,
	IIconProps,
	ThemeContext,
	Spinner,
	SpinnerSize,
	CommandBar,
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
import { themePrimaryOverFlowItems } from '../styles/ContactStyles';
import { useNavigate, useLocation } from 'react-router-dom';

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
	const history = useNavigate();
	const location = useLocation();
	const myThemeContext = useContext(ThemeContext);
	const [selectedItemCount, setSelectedItemCount] = React.useState<number>(0);
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

	const _items = [
		{
			key: 'addUser',
			text: 'Add User',
			iconProps: { iconName: 'Add' },
			style: themePrimaryOverFlowItems,
			onClick: () => {
				newContactAccount();
			},
		},
	];


	const newContactAccount = () => {
		history(`/contact/new`, { state: { background: location } });
	};

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


									<CommandBar
										className="ms-actionbar"
										items={_items}
										ariaLabel="Modal Commandbar"
										// style={contactDetailContentsCommandBarDiv}
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
						<HomeList fullScreen={fullScreen} setSelectedItemCount={setSelectedItemCount} selectedUserList={undefined} selectedUser={undefined} Users={null} getUserAsync={null}/>
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
