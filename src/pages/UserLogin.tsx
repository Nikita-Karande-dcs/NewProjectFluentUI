import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
// import { auth } from '../components/User/UserLoginSlice';
import { useNavigate } from 'react-router-dom';
import {
	IStackProps,
	IStackStyles,
	PrimaryButton,
	mergeStyleSets,
	Stack,
	ThemeContext,
	Text,
	Checkbox,
	// FontIcon,
	// Image,
	// ImageFit,
} from '@fluentui/react';
import { RhfTextField } from '../components/shared/RhfTextField';
import { useForm } from 'react-hook-form';
import React from 'react';
import { ThemeName, useTheme } from '../Context/ThemeContext';

const classNames = mergeStyleSets({
	login: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginForm: {
		height: '50%',
		// width: '50%',
		// margin: '0 auto',
	},
});

const stackTokens = { childrenGap: 50 };

const stackStyles: Partial<IStackStyles> = {
	root: { justifyContent: 'center', display: 'flex' },
};

const columnProps: Partial<IStackProps> = {
	tokens: { childrenGap: 15 },
	styles: { root: { width: 300 } },
};

const UserLogin = () => {
	const myThemeContext = React.useContext(ThemeContext);

	const dispatch = useAppDispatch();
	const { control, handleSubmit } = useForm<any>();
	// const [error, setError] = useState<string>();
	const history = useNavigate();
	const { themeName, setTheme } = useTheme();

	useEffect(() => {
		if (themeName === 'Dark') {
			setTheme(ThemeName.Light);
		}
		let userInfoString: any = localStorage.getItem('user');
		let userInfoObject: any;
		userInfoObject = JSON.parse(userInfoString) as object;
		if (userInfoObject && userInfoObject.token !== '') {
			history('/dashboard');
		}
	}, []);

	useEffect(() => {
		let userPreference = JSON.stringify({
			Data: [
				{
					object: 'Property',
					key: 'Pin',
					data: [
						{ type: 'UI', value: 'layedPin', objectId: '9', isJson: false },
						{ type: 'UI', value: 'layedPin', objectId: '15', isJson: false },
						{ type: 'UI', value: 'layedPin', objectId: '16', isJson: false },
						{ type: 'UI', value: 'layedPin', objectId: '17', isJson: false },
						{ type: 'UI', value: 'layedPin', objectId: '98', isJson: false },
						{ type: 'UI', value: 'layedPin', objectId: '115', isJson: false },
					],
				},
				{
					object: 'Unit',
					key: 'selectedUnitProperty',
					data: [
						{
							type: 'UI',
							value: '9',
							objectId: 'selectedUnitProperty',
							isJson: false,
						},
					],
				},
			],
		});
		window.localStorage.setItem('userPreference', userPreference);
	}, []);

	// const handleSave = useCallback(
	// 	(data: any) => {
	// 		console.log('data', data);
	// 		setError('');
	// 		let response = dispatch(auth(data));
	// 		response
	// 			.then((res) => {
	// 				console.log(res);
	// 				if (res.payload.token) {
	// 					localStorage.setItem('user', JSON.stringify(res.payload));
	// 					history('/dashboard');
	// 				}
	// 			})
	// 			.catch((e) => {
	// 				console.log('error');
	// 				console.log("eeeeeeee", e);
	// 				setError('Username or Password is incorrect');
	// 			});
	// 	},
	// 	[dispatch]
	// );
	// useEffect(() => {
	// 	pageTitle('Sign-in');
	// }, []);

	function Redirect(){
		history('/home');
	}

	return (
		<div
			className={classNames.login}
			style={{
				// padding: '100px',
				height: '100%',
				background: 'url("/img/gradientbackround.svg")',
				position: 'relative',
				backgroundSize: 'cover',
			}}>
			{/* <Stack
				style={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					padding: '3px 10px',
					width: '100%',
				}}
				horizontalAlign="space-between"
				className="copyrightfooter"
				horizontal>
				<Text style={{ color: myThemeContext?.semanticColors.bodyText }}>
					&#169; {new Date().getFullYear()} TDL, All rights reserved.
				</Text>
				<Stack horizontal>
					<Text
						style={{ color: myThemeContext?.semanticColors.bodyText }}
						className="mr-10">
						Terms of use
					</Text>
					<Text style={{ color: myThemeContext?.semanticColors.bodyText }}>
						Privacy & Cookies
					</Text>
				</Stack>
			</Stack> */}
			{/* <Stack
				className="loginParentDiv"
				horizontal
				styles={{
					root: {
						background: 'white',
						// width: '84.5%',
						maxWidth: '1588px',
						// margin: '0px 100px',
						height: '100%',

						justifyContent: 'center',
						boxShadow: `0 2px 6px rgba(0,0,0,.2)`,
						overflow: 'hidden',
					},
				}}>
				<Stack
					className={'loginBannnerDiv'}
					style={{
						borderRight: `2px solid ${myThemeContext?.palette.neutralQuaternary}`,
						width: '100%',
						// maxWidth: '1192px',
						minWidth: '400px',
						display: 'flex',
					}}>
					<Image
						imageFit={ImageFit.cover}
						maximizeFrame
						src="/img/bannerwithshapes.svg"
					/>
				</Stack> */}
				<Stack
					className="loginFormDiv"
					style={{
						padding: '44px',
						width: '400px',
						marginTop: '15px',
					}}>
					<form
						className={classNames.loginForm}
						// onSubmit={handleSubmit(handleSave)}
						>
						<Stack horizontal tokens={stackTokens} styles={stackStyles}>
							<Stack {...columnProps}>
								<h1 style={{ marginBottom: '0px', color: '#555555' }}>Web Portal</h1>
								<h2
									style={{
										fontWeight: '600',
										marginBottom: '0',
									}}>
									Sign In
								</h2>
								{/* {error && (
									<NotificationBar
										messageType="serverError"
										messageText={error}></NotificationBar>
								)} */}
								<RhfTextField
									styles={{
										fieldGroup: {
											border: '1px solid transparent !important',
											':hover': {
												border: '1px solid transparent',
											},
										},
										field: {
											padding: 0,
										},
									}}
									underlined
									control={control}
									name="Email"
									placeholder="Username or email"
									rules={{
										required: 'fieldRequired',
									}}
								/>
								<RhfTextField
									styles={{
										fieldGroup: {
											border: '1px solid transparent !important',
											':hover': {
												border: '1px solid transparent',
											},
										},
										field: {
											padding: 0,
										},
									}}
									underlined
									type="password"
									control={control}
									name="Password"
									placeholder="Password"
									rules={{ required: 'fieldRequired' }}
								/>
								<Checkbox label="Remember me" />
								<div>
									No account ?{' '}
									<Text
										styles={{
											root: {
												color: myThemeContext?.palette.themeSecondary,
												cursor: 'pointer',
												':hover': {
													color: myThemeContext?.palette.themePrimary,
												},
											},
										}}>
										Create one
									</Text>
								</div>
								<PrimaryButton
									style={{ marginTop: '15px' }}
									text='Sign In'
									onClick={()=>Redirect()}
									// type="submit"
								/>
								{/* <Stack
									style={{
										fontSize: '20px',
										marginTop: '20px',
										padding: '5px',
										border: `1px solid ${myThemeContext?.palette.neutralLight}`,
									}}
									horizontalAlign="center"
									horizontal>
									<FontIcon className="mr-10" iconName="Permissions" />
									<Text style={{ color: 'black' }}>Sign-in options</Text>
								</Stack> */}
							</Stack>
						</Stack>
					</form>
				</Stack>
			{/* </Stack> */}
		</div>
	);
};

export default UserLogin;
