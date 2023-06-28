import * as React from 'react';
import { Stack, ThemeContext } from '@fluentui/react';
import navs from './navbar.json';
import MenuItem from './MenuItem';
import {
	parentMenuClasses,
} from '../../../styles/MenuStyles';
import { useTheme } from '../../../Context/ThemeContext';

type Props = {};

function NavBarCallout({}: Props) {
	const myThemeContext = React.useContext(ThemeContext);
	const themeName = useTheme().themeName;
	return (
		<>
			<Stack
				id="mc-sidebar"
				className={`${themeName == 'Light' ? 'sideBarLight' : 'sideBarDark'}`}>
				<div
					id="mc-sidebar__Stack"
					className={`sidebar__nav ${parentMenuClasses(myThemeContext).base}`}>
					<ul className="commonNav" style={{listStyleType:"none"}}>
						{navs
							.filter((item) => item.common === true)
							.map((item) => {
								return (
									<MenuItem
										key={item.id}
										id={item.id}
										url={item.url}
										icon={item.icon}
										iconHover={item.iconHover}
										title={item.title}
										dropdownShow={item.dropdownShow}
										visited={item.visited}
										dropdown={item.dropdown}
									/>
								);
							})}
						<hr
							className={`${parentMenuClasses(myThemeContext).menudivider}`}
						/>
					</ul>
					<div style={{height:"700px" }} className={`navbox ${parentMenuClasses(myThemeContext).scroll}`}>
						<ul className="nav" style={{listStyleType:"none"}}>
							{navs
								.filter((item) => item.common === false)
								.map((item) => {
									return (
										<MenuItem
											key={item.id}
											id={item.id}
											url={item.url}
											icon={item.icon}
											iconHover={item.iconHover}
											title={item.title}
											dropdownShow={item.dropdownShow}
											visited={item.visited}
											dropdown={item.dropdown}
										/>
									);
								})}
						</ul>
					</div>
				</div>
			</Stack>
		</>
	);
}

export default NavBarCallout;
