import * as React from 'react';
import { Stack, ThemeContext } from '@fluentui/react';
import HeaderLogo from './Header_Logo';
import HeaderSearch from './Header_Search';
import HeaderSetting from './Header_Setting';
import HeaderUser from './Header_User';
import { stackBorderBottomStyle } from '../../../styles/HeaderStyles';
export class Header extends React.Component {
	render() {
		return (
			<>
				<ThemeContext.Consumer>
					{(theme) => (
						<Stack
							horizontal
							verticalAlign="center"
							id="mc-header"
							className="mc__header"
							styles={stackBorderBottomStyle(theme)}>
							<HeaderLogo />
							<HeaderSearch />
							<Stack
								horizontal
								verticalAlign="center"
								tokens={{ childrenGap: '15' }}
								horizontalAlign="end"
								id="mcHeaderRight"
								className="mc-header-right"
								>
								<HeaderSetting />
								<HeaderUser />
							</Stack>
						</Stack>
					)}
				</ThemeContext.Consumer>
			</>
		);
	}
}

export default Header;
