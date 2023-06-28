import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { parentMenuClasses } from '../../../styles/MenuStyles';
import {
	Callout,
	DirectionalHint,
	Stack,
	ThemeContext,
	TooltipHost,
} from '@fluentui/react';
import { useTheme } from '../../../Context/ThemeContext';
import { calloutStyles } from '../../../styles/MenuStyles';
import { useAppSelector } from '../../../app/hooks';

type IProps = {
	id: number;
	url: string;
	icon: string;
	iconHover: string;
	title: string;
	dropdownShow: boolean;
	visited: any;
	dropdown: any;
};

const MenuItem = ({
	id,
	url,
	icon,
	iconHover,
	title,
	dropdownShow,
	visited,
	dropdown,
}: IProps) => {
	let location = useLocation();
	let isChildOpened = () => {
		let result = dropdown.find((data: any, index: number) =>
			location.pathname === data.url ? true : false
		);
		if (result) {
			return Object.keys(result).length > 0 ? true : false;
		} else {
			return false;
		}
	};
	const myThemeContext = React.useContext(ThemeContext);
	const themeName = useTheme().themeName;
	const { isMenuOpen } = useAppSelector((state) => state.appSetting);
	const [isCalloutVisible, setIsCalloutVisible] = React.useState(false);
	const onShowCallout = () => {
		setIsCalloutVisible(true);
	};
	const onHideCallout = () => {
		setIsCalloutVisible(false);
	};

	return (
		<>
			<li
				className={
					dropdownShow
						? isChildOpened()
							? ` nav__itemparent opened ${
									parentMenuClasses(myThemeContext).submenuopened
							  }`
							: ` nav__itemparent ${parentMenuClasses(myThemeContext).links}`
						: ` nav__item ${parentMenuClasses(myThemeContext).links}`
				}
				key={id}
				style={{ flexDirection: 'column' }}>
				{dropdownShow ? (
					<>
						<Link
							className={`nav__link dropdown`}
							id={`id_${id}`}
							onMouseEnter={onShowCallout}
							onMouseLeave={onHideCallout}
							to={url}>
							<div className="nav__link-icon">
								{icon ? (
									<img src={icon} alt="" className="icon-default"></img>
								) : (
									''
								)}
								{iconHover ? (
									<img src={icon} alt="" className="icon-hover"></img>
								) : (
									''
								)}
							</div>
							<span className={`nav__link-text`}>{title}</span>
						</Link>
						{dropdown.find((data: any, index: number) =>
							location.pathname === data.url ? true : false
						)
							? ''
							: isCalloutVisible && (
									<Callout
										onMouseEnter={onShowCallout}
										onMouseLeave={onHideCallout}
										directionalHint={DirectionalHint.rightTopEdge}
										isBeakVisible={false}
										role="dialog"
										gapSpace={0}
										target={`#id_${id}`}
										onDismiss={onHideCallout}
										setInitialFocus>
										{/*-------------- */}
										<div
											className={`${parentMenuClasses(myThemeContext).callout}`}
											style={calloutStyles(myThemeContext)}>
											<div
												className="calloutnav__header-title"
												style={{ padding: '5px 10px' }}>
												{title}
											</div>
											{dropdown.map((data: any, index: number) => (
												<li
													onClick={onHideCallout}
													key={index}
													style={{
														listStyleType: 'none',
														padding: '5px 10px',
													}}>
													<Link
														style={{ textDecoration: 'none' }}
														to={data.url}>
														<Stack
															horizontal
															verticalAlign={'center'}
															style={{
																color: themeName == 'Light' ? 'black' : 'white',
																border: 'none',
															}}>
															{icon ? (
																<img
																	src={
																		themeName == 'Light'
																			? data.icon
																			: data.icondark
																	}
																	alt=""
																	style={{
																		width: '1.3rem',
																		height: '1.3rem',
																		marginRight: '10px',
																	}}
																	className="icon-hover"></img>
															) : (
																''
															)}
															<span style={{ fontSize: '12px' }}>
																{data.title}
															</span>
														</Stack>
													</Link>
												</li>
											))}
										</div>
									</Callout>
							  )}
					</>
				) : isMenuOpen ? (
					<NavLink className={`nav__link dropdown`} to={url}>
						<div className="nav__link-icon">
							{icon ? (
								<img src={icon} alt="" className="icon-default"></img>
							) : (
								''
							)}
							{iconHover ? (
								<img src={icon} alt="" className="icon-hover"></img>
							) : (
								''
							)}
						</div>
						<span className={`nav__link-text`}>title</span>
					</NavLink>
				) : (
					<TooltipHost
						calloutProps={{ isBeakVisible: false }}
						content={title}
						directionalHint={DirectionalHint.rightCenter}>
						<NavLink className={`nav__link dropdown`} to={url}>
							<div className="nav__link-icon">
								{icon ? (
									<img src={icon} alt="" className="icon-default"></img>
								) : (
									''
								)}
								{iconHover ? (
									<img src={icon} alt="" className="icon-hover"></img>
								) : (
									''
								)}
							</div>
							<span className={`nav__link-text`}>title</span>
						</NavLink>
					</TooltipHost>
				)}

				{dropdownShow &&
				dropdown.find((data: any, index: number) =>
					location.pathname === data.url ? true : false
				) ? (
					<div>
						<ul className="subNav">
							{dropdown.map((data: any, index: number) =>
								isMenuOpen ? (
									<li className={'nav__item'} key={index}>
										<NavLink
											style={{ paddingLeft: '4px !important' }}
											className={'nav__link'}
											to={data.url}>
											<div className="nav__link-icon">
												{data.icon ? (
													<img
														src={
															themeName == 'Light' ? data.icon : data.icondark
														}
														alt=""
														className="icon-default"></img>
												) : (
													''
												)}
												{icon ? (
													<img
														src={
															themeName == 'Light' ? data.icon : data.icondark
														}
														alt=""
														className="icon-hover"></img>
												) : (
													''
												)}
											</div>
											<span className="nav__link-text">{data.title}</span>
										</NavLink>
									</li>
								) : (
									<TooltipHost
										calloutProps={{ isBeakVisible: false }}
										style={{ width: '100%' }}
										content={data.title}
										directionalHint={DirectionalHint.rightCenter}>
										<li className={'nav__item'} key={index}>
											<NavLink
												style={{ paddingLeft: '4px !important' }}
												className={'nav__link'}
												to={data.url}>
												<div className="nav__link-icon">
													{data.icon ? (
														<img
															src={
																themeName == 'Light' ? data.icon : data.icondark
															}
															alt=""
															className="icon-default"></img>
													) : (
														''
													)}
													{icon ? (
														<img
															src={
																themeName == 'Light' ? data.icon : data.icondark
															}
															alt=""
															className="icon-hover"></img>
													) : (
														''
													)}
												</div>
												<span className="nav__link-text">data.title</span>
											</NavLink>
										</li>
									</TooltipHost>
								)
							)}
						</ul>
					</div>
				) : (
					<>
					</>
				)}
			</li>
		</>
	);
};

export default MenuItem;
