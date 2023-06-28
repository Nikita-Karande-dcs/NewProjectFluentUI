import React from 'react';
import { Stack, SearchBox, Dropdown, ThemeContext } from '@fluentui/react';

const dropdownControlled = [
	{ key: 'all', text: 'All' },
	{ key: 'report', text: 'Report' },
	{ key: 'property', text: 'Property' },
];

export class HeaderSearch extends React.Component<any, any> {
	render() {
		return (
			<>
				<ThemeContext.Consumer>
					{(theme) => (
						<Stack
							horizontal
							style={{
								border: `1px solid ${theme?.palette.neutralLight}`,
								boxShadow: 'rgba(0, 0, 0, 0.4) 1px 1px 2px',
							}}
							className="mc__search">
							<SearchBox placeholder="Search Here" />
							<Dropdown
								placeholder="All"
								label=""
								options={dropdownControlled}
							/>
						</Stack>
					)}
				</ThemeContext.Consumer>
			</>
		);
	}
}

export default HeaderSearch;
