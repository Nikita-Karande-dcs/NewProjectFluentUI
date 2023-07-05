import {
	Checkbox,
	CommandBarButton,
	Icon,
	IIconProps,
	IPersonaSharedProps,
	Persona,
	Stack,
	ThemeContext,
} from '@fluentui/react';
import React from 'react';
import { DetailsList, IColumn } from '@fluentui/react';
import {
	BankAccountListClassNames,
} from '../../styles/ListStyle';
import { HandleStyles, Resizable } from 're-resizable';
import SelectionItem from '../shared/SelectionItem';
import HomeListData from './HomeListData';

export interface IHomeListProps {
	fullScreen: boolean;
}

const ButtonIcon: IIconProps = { iconName: 'Breadcrumb' };

interface IStaticListState {
	data: any[];
	active: any;
}
class HomeList extends React.Component<
	IHomeListProps,
	IStaticListState
> {
	items = 20;
	public _overflowColumns: IColumn[];
	constructor(props: IHomeListProps) {
		super(props);

		this._overflowColumns = [
			{
				key: 'selector',
				name: 'Select All',
				isSorted: false,
				fieldName: 'Select All',
				minWidth: 300,
				maxWidth: 300,
				isResizable: true,
			},
		];

		const state: IStaticListState = {
			data: [
				{
					"id": 1,
					"name": "Spiderman",
				},
				{
					"id": 2,
					"name": "Hulk",
				},
				{
					"id": 3,
					"name": "Iron Man",
				},
				{
					"id": 3,
					"name": "Mr Strange",
				}
			],
			active: null,
		};
		this.state = state;
	}

	handleRowClick = (
		item?: any,
		index?: number,
		ev?: React.FocusEvent<HTMLElement>
	) => {
		this.setState({ active: item });
	};

	public render() {
		return (
			<>
				<ThemeContext.Consumer>
					{(theme) => (
						<div
							style={{
								margin: 0,
								paddingTop: '5px',
								display: 'flex',
								alignItems: 'start',
							}}>
							<div>
								{/* list menu */}
								<div
									style={{
										display: 'flex',
										paddingInlineStart: '1.2rem',
										justifyContent: 'space-between',
										alignItems: 'center',
										paddingTop: '3px',
										paddingBottom: '3px',
										borderRight: `1px solid ${theme?.palette.neutralLight}`,
									}}>
									<Checkbox
										data-selection-toggle-all
										label='selectAll'
										// checked={this._selection.isAllSelected()}
										// onChange={this.handleSelectAll}
										className={BankAccountListClassNames.CheckBooks}
										styles={{
											checkbox: {
												borderRadius: '100%',
												width: '18px',
												height: '18px',
											},
										}}
									/>
									<CommandBarButton
										iconProps={ButtonIcon}
										text='sort'
									// menuProps={menuProps}
									/>
								</div>

								{/* user list */}
								<div
									style={{
										paddingTop: '5px',
										borderRight: `1px solid ${theme?.palette.neutralLight}`,
										height: this.props.fullScreen
											? 'calc(100vh - 6.5rem)'
											: 'calc(100vh - 13.2rem)',
									}}>
									<Resizable
										minWidth={400}
										maxWidth={900}
										handleStyles={
											{
												bottom: { cursor: 'default' },
												left: { cursor: 'default' },
												topRight: { cursor: 'default' },
												topLeft: { cursor: 'default' },
												bottomLeft: { cursor: 'default' },
												bottomRight: { cursor: 'default' },
											} as HandleStyles
										}
										size={{
											width: 400,
											height: '100%',
										}}
									// onResizeStop={this.handleResize}
									>
										<div
											className={
												window.localStorage.getItem('theme') === 'Light'
													? 'customScrollbar'
													: 'customScrollbarDark'
											}>
											<div
												className="twoPaneList"
											>
												<Stack
													className={BankAccountListClassNames.ListStyle}>
													<DetailsList
														className={window.localStorage.getItem('theme') === 'Light'
															? 'detailListLight'
															: 'detailListDark'}
														items={this.state?.data || []}
														onActiveItemChanged={this.handleRowClick}
														// getKey={this._getKey}
														setKey="multiple"
														columns={this._overflowColumns}
														onRenderItemColumn={this._onItemRender}
														selectionPreservedOnEmptyClick={true}
														isHeaderVisible={false}
													/>
												</Stack>
											</div>
										</div>
										{/* </ScrollablePane> */}
									</Resizable>
								</div>
							</div>

							{/* <h2>Welcome!</h2> */}
							<HomeListData items={this.state.active} />
						</div>
					)}
				</ThemeContext.Consumer>
			</>
		);
	}

	onRenderPersonaCoin = (personaProps?: IPersonaSharedProps): JSX.Element => {
		return <Icon iconName={'BankSolid'} />;
	};

	private _onItemRender = (item: any, index?: number, column?: IColumn) => {
		if (column?.name === 'Select All') {
			return (
				<div className="cardSection">
					<div
						style={{ width: '300px' }}
						dir="ltr">
						<SelectionItem
							key={item.id}
							item={item}
							itemIndex={index}
						/>
						<Persona
							text={item.name}
							secondaryText="Demo"
							styles={{
								root: {
									width: 300,
								},
							}}
						/>
					</div>
					<div dir="ltr">
						<span data-selection-disabled={true}>
						</span>
					</div>
				</div>
			);
		}
	};
}


export default HomeList;
