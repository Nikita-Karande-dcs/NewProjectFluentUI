import {
	Checkbox,
	CommandBarButton,
	Icon,
	IIconProps,
	IObjectWithKey,
	IPersonaSharedProps,
	ISelection,
	Persona,
	Stack,
	ThemeContext,
	Selection
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
import { connect } from 'react-redux';
import { getUserAsync, selectedUser, selectedUserList } from './UserSlice';

export interface IHomeListProps {
	getUserAsync: any;
	fullScreen: boolean;
	setSelectedItemCount: Function;
	selectedUser:any;
	selectedUserList: any;
	Users: any;
}

const ButtonIcon: IIconProps = { iconName: 'Breadcrumb' };

interface IStaticListState {
	items: any;
	activeContact: any;
	selectionDetails: string;
	selectedItems: any;
	listWidth: number;
	Users:any[];
}


class HomeList extends React.Component<
	IHomeListProps,
	IStaticListState
> {
	public _items: any = 100;
	private _selection: ISelection<IObjectWithKey | any>;
	public _overflowColumns: IColumn[];
	constructor(props: IHomeListProps) {
		super(props);
		this._selection = new Selection<IObjectWithKey | any>({
			onSelectionChanged: () => {
				this.setState({ selectionDetails: this._getSelectionDetails() });
				this.setState({ selectedItems: this._getSelectedItems() });
				this.props.setSelectedItemCount(this._selection.getSelectedCount());
			},
			getKey: this._getKey,
		});
		this._items = this.props.Users;
		console.log("Users",this.props.Users);
		console.log("this._items",this._items);
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

		// const state: IStaticListState = {
		// 	data: [
		// 		{
		// 			"id": 1,
		// 			"name": "John",
		// 			"age": 25,
		// 			"email": "john@example.com",
		// 			"phone": "123-456-7890",
		// 			"address": "123 Main Street",
		// 			"city": "New York",
		// 			"country": "USA",
		// 			"occupation": "Software Engineer",
		// 			"salary": 75000
		// 		},
		// 		{
		// 			"id": 2,
		// 			"name": "Emily",
		// 			"age": 32,
		// 			"email": "emily@example.com",
		// 			"phone": "987-654-3210",
		// 			"address": "456 Elm Street",
		// 			"city": "San Francisco",
		// 			"country": "USA",
		// 			"occupation": "Marketing Manager",
		// 			"salary": 90000
		// 		},
		// 		{
		// 			"id": 3,
		// 			"name": "Michael",
		// 			"age": 40,
		// 			"email": "michael@example.com",
		// 			"phone": "555-123-4567",
		// 			"address": "789 Oak Avenue",
		// 			"city": "London",
		// 			"country": "UK",
		// 			"occupation": "Financial Analyst",
		// 			"salary": 85000
		// 		},
		// 		{
		// 			"id": 4,
		// 			"name": "Sophia",
		// 			"age": 28,
		// 			"email": "sophia@example.com",
		// 			"phone": "456-789-0123",
		// 			"address": "321 Pine Street",
		// 			"city": "Paris",
		// 			"country": "France",
		// 			"occupation": "Graphic Designer",
		// 			"salary": 60000
		// 		},
		// 		{
		// 			"id": 5,
		// 			"name": "William",
		// 			"age": 35,
		// 			"email": "william@example.com",
		// 			"phone": "789-012-3456",
		// 			"address": "567 Maple Avenue",
		// 			"city": "Toronto",
		// 			"country": "Canada",
		// 			"occupation": "Project Manager",
		// 			"salary": 80000
		// 		},
		// 		{
		// 			"id": 6,
		// 			"name": "Olivia",
		// 			"age": 29,
		// 			"email": "olivia@example.com",
		// 			"phone": "012-345-6789",
		// 			"address": "890 Cedar Street",
		// 			"city": "Sydney",
		// 			"country": "Australia",
		// 			"occupation": "Sales Representative",
		// 			"salary": 65000
		// 		}
		// 	],
		// 	activeContact: {},
		// };
		// this.state = state;
		this.state = {
			items: this._items,
			listWidth: 400,
			selectionDetails: this._getSelectionDetails(),
			selectedItems: [],
			activeContact: {},
			Users:[]
		};
	}

	private _getSelectedItems() {
		return this._selection.getSelection();
	}

	public componentDidMount() {
		this.props.getUserAsync();
	}

	private _getKey(item: any, index?: number): string {
		return `${index}${item.code}`;
	}

	private _getSelectionDetails(): string {
		const selectionCount = this._selection.getSelectedCount();
		const selectedItems = this._selection.getSelection();
		const selectedIds = selectedItems.map((item: any) => item.requestId);
		this.props?.selectedUserList?.(selectedIds);
		this.props?.selectedUser?.(this._selection.getSelection()[0]);

		switch (selectionCount) {
			case 0:
				return 'No items selected';
			case 1:
				return (
					'1 item selected: ' +
					(this._selection.getSelection()[0] as any).requester
				);
			default:
				return `${selectionCount} items selected`;
		}
	}

	handleSelectAll = (
		ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
		isChecked?: boolean
	) => {
		if (!this._selection.isAllSelected()) {
			const arr: any = this.state.items.map((item: any) => item.id);
			this.props.selectedUserList(arr);
		} else {
			this.props.selectedUserList([]);
		}
		this._selection.toggleAllSelected();
	};

	handleRowClick = (
		item?: any,
		index?: number,
		ev?: React.FocusEvent<HTMLElement>
	) => {
		this.setState({ activeContact: item });
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
										label='Select All'
										checked={this._selection.isAllSelected()}
										onChange={this.handleSelectAll}
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
														items={this.state.items}
														onActiveItemChanged={this.handleRowClick}
														getKey={this._getKey}
														setKey="multiple"
														columns={this._overflowColumns}
														onRenderItemColumn={this._onItemRender}
														selectionPreservedOnEmptyClick={true}
														isHeaderVisible={false}
														checkboxVisibility={
															this.state.selectionDetails ===
																'No items selected'
																? 2
																: 2
														}
														selection={
															this._selection as ISelection<IObjectWithKey | any>
														}
													/>
												</Stack>
											</div>
										</div>
										{/* </ScrollablePane> */}
									</Resizable>
								</div>
							</div>

							{this._selection.getSelectedCount() == 1 && (
							<HomeListData contentStyles={contactListContentStylesOld} classNames={ListClassNames} sectionStackTokens={contactListSectionStackTokens} handleHideModel={undefined} activeUser={this._selection.getSelection()[0]} fullScreen={this.props.fullScreen}/>
							)}
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
							selection={
								this._selection as ISelection<IObjectWithKey | any>
							}
						/>
						<Persona
							text={item.firstName +" "+ item.lastName}
							secondaryText={item.email}
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
HomeList.contextType = ThemeContext;
const mapStateToProps = (state: any) => ({
	Users: state.User.UserList,
});

const mapDispatchToProps: any = {
	getUserAsync,
	selectedUser,
	selectedUserList,
};

export default
	connect(mapStateToProps, mapDispatchToProps)(React.memo(HomeList)
	);

