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
import {
	contactListContentStylesOld,
	contactListSectionStackTokens
} from '../../styles/ContactStyles';
import React from 'react';
import { DetailsList, IColumn } from '@fluentui/react';
import {
 ListClassNames,
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
					"name": "John",
					"age": 25,
					"email": "john@example.com",
					"phone": "123-456-7890",
					"address": "123 Main Street",
					"city": "New York",
					"country": "USA",
					"occupation": "Software Engineer",
					"salary": 75000
				},
				{
					"id": 2,
					"name": "Emily",
					"age": 32,
					"email": "emily@example.com",
					"phone": "987-654-3210",
					"address": "456 Elm Street",
					"city": "San Francisco",
					"country": "USA",
					"occupation": "Marketing Manager",
					"salary": 90000
				},
				{
					"id": 3,
					"name": "Michael",
					"age": 40,
					"email": "michael@example.com",
					"phone": "555-123-4567",
					"address": "789 Oak Avenue",
					"city": "London",
					"country": "UK",
					"occupation": "Financial Analyst",
					"salary": 85000
				},
				{
					"id": 4,
					"name": "Sophia",
					"age": 28,
					"email": "sophia@example.com",
					"phone": "456-789-0123",
					"address": "321 Pine Street",
					"city": "Paris",
					"country": "France",
					"occupation": "Graphic Designer",
					"salary": 60000
				},
				{
					"id": 5,
					"name": "William",
					"age": 35,
					"email": "william@example.com",
					"phone": "789-012-3456",
					"address": "567 Maple Avenue",
					"city": "Toronto",
					"country": "Canada",
					"occupation": "Project Manager",
					"salary": 80000
				},
				{
					"id": 6,
					"name": "Olivia",
					"age": 29,
					"email": "olivia@example.com",
					"phone": "012-345-6789",
					"address": "890 Cedar Street",
					"city": "Sydney",
					"country": "Australia",
					"occupation": "Sales Representative",
					"salary": 65000
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
										className={ListClassNames.CheckBooks}
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
											}
											>
											<div
												className="twoPaneList"
												style={{
													backgroundColor: 'rgb(231 231 231)',
												}}
											>
												<Stack
													className={ListClassNames.ListStyle}>
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
							<HomeListData data={this.state.active} contentStyles={contactListContentStylesOld} classNames={ListClassNames} sectionStackTokens={contactListSectionStackTokens} handleHideModel={undefined} setContactModifySuccess={undefined} />
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
