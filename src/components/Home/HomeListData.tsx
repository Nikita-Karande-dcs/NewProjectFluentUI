import {
	Persona,
	Pivot,
	PivotItem,
	Stack,
	PersonaSize,
	Label,
	ThemeContext,
	Toggle,
	PrimaryButton,
	DatePicker,
} from '@fluentui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
	neutralColorsGray100,
} from '../../styles/ContactStyles';
import {
	Gap5Token,
} from '../../styles/SharedStyles';
import { useTheme } from '../../Context/ThemeContext';
import {
	dropwDownFieldStyle,
	textFieldStyle,
} from '../shared/CTextField';
import { RhfTextField } from '../shared/RhfTextField';
import { RhfDropdown } from '../shared/RhfDropdown';

export default function HomeListData({
	contentStyles,
	classNames,
	sectionStackTokens,
	fullScreen,
	data
}: any) {

	const {  control } = useForm<
		any,
		any
	>({ reValidateMode: 'onSubmit', mode: 'all' });

	const myThemeContext = React.useContext(ThemeContext);
	const themeName = useTheme().themeName;
	const [isnew, setInsew] = React.useState(false);
	const [selectedKey, setSelectedKey] = React.useState(0);


	const options = [
		{ key: 'option1', text: 'Option 1' },
		{ key: 'option2', text: 'Option 2' },
		{ key: 'option3', text: 'Option 3' },
	];

	const options2 = [
		{ key: 'option1', text: 'Option 1' },
		{ key: 'option2', text: 'Option 2' },
		{ key: 'option3', text: 'Option 3' },
	];

	const handleNewToggleChange = React.useCallback(
		(event: any, checked: any) => {
			setInsew(checked);
		},
		[]
	);

	const toggleDataAmerica = [
		{
			id: 1,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Argentina',
		},
		{
			id: 2,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Brazil',
		},
		{
			id: 3,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'NADS',
		},
		{
			id: 4,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'VIO',
		},

	];

	const toggleBtnEurope = [
		{
			id: 1,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Czech',
		},
		{
			id: 2,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Denmark',
		},
		{
			id: 3,
			// checked: isnew,
			// onChange: handleNewToggleChange,
			label: 'Germany',
		},
		{
			id: 4,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Spain',
		},
		{
			id: 5,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'France',
		},
		{
			id: 6,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Greece',
		},
		{
			id: 7,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Hungary',
		},
		{
			id: 8,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Italy',
		},
		{
			id: 9,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Netherland',
		},
		{
			id: 10,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'United Kingdom',
		},
		{
			id: 11,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Beam (Non-extreme reach company)',
		},
		{
			id: 12,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Spotgate (Non-extreme reach company)',
		},
	];

	const toggleDataMena = [
		{
			id: 1,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Mena',
		},
		{
			id: 2,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Cloud -EG (Non-extreme reach company)',
		},
	];

	const toggleBtnAsiaPacific = [
		{
			id: 1,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'China',
		},
		{
			id: 2,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'India',
		},
		{
			id: 3,
			// checked: isnew,
			// onChange: handleNewToggleChange,
			label: 'Japan',
		},
		{
			id: 4,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Malaysia',
		},
		{
			id: 5,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Singapore',
		},
		{
			id: 6,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Thailand',
		},
		{
			id: 7,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Australia',
		},
		{
			id: 8,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'New Zealand',
		}
	];

	const toggleBtnFinanceManagement = [
		{
			id: 1,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Adstream Holdings Pty Limited',
		},
		{
			id: 2,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Dormant Cos',
		},
		{
			id: 3,
			// checked: isnew,
			// onChange: handleNewToggleChange,
			label: 'Adjustments',
		},
		{
			id: 4,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Hong Kong (Non-Trading)',
		},
		{
			id: 5,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'The Traffic Bureae Limited (Historical)',
		},
		{
			id: 6,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Citizen Ltd(UK) (Non-trading)',
		},
		{
			id: 7,
			// checked: isnew,
			// onChange: handleNewToggleChange,
			label: 'Portland PMS Ltd (Non-Trading)',
		},
		{
			id: 8,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Portland PMS Ltd (Non-Trading)',
		},
		{
			id: 9,
			// checked: isnew,
			// onChange: handleNewToggleChange,
			label: 'Portland PMS Ltd (Non-Trading)',
		},
		{
			id: 10,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Pelagon Limited (Non-Trading)',
		}
	];

	const toggleDataFinance = [
		{
			id: 1,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'SAP Business One(Client access)',
		},
		{
			id: 2,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Sharperlight Reporting - Finance user',
		},
		{
			id: 3,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Data Transfer Workbench (DTW)',
		},
		{
			id: 4,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Sharperlight Reporting - Web user',
		},
	];

	const toggleBtnSAPWEBPORTAL = [
		{
			id: 1,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Open Orders',
		},
		{
			id: 2,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Rate Cards',
		},
		{
			id: 3,
			// checked: isnew,
			// onChange: handleNewToggleChange,
			label: 'Invoice Request',
		},
		{
			id: 4,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Credit Note Request',
		},
		{
			id: 5,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Account Manager',
		},
		{
			id: 6,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Advertiser Manager',
		},
		{
			id: 7,
			checked: isnew,
			onChange: handleNewToggleChange,
			label: 'Quotation Module',
		},
		{
			id: 8,
			// checked: isNew,
			// onChange: handleNewToggleChange,
			label: 'Purchase Order Request ',
		}
	];

	return (
		<div
			style={{
				width: '100%',
				height: 'calc(100vh - 10.5rem)',
			}}>
			<Stack className={contentStyles.header} horizontal>
				<Stack.Item grow={1}>
					<Stack horizontal>
						<Stack.Item
							style={{
								marginLeft: '10px',
							}}>
							<Persona
								hidePersonaDetails={true}
								size={PersonaSize.size100}
							/>
						</Stack.Item>
						<Stack.Item
							style={{
								marginLeft: '5px',
								marginTop: '3px',
								marginBottom: '5px',
							}}
							grow={1}>
							<span>
								<div
									style={{
										visibility: 'hidden',
										height: '0px',
										width: '0px',
									}}>
									<input type="text" />
								</div>
								<h1>{data?.name}</h1>
							</span>
						</Stack.Item>
					</Stack>
				</Stack.Item>
			</Stack>

			<div className={contentStyles.body}>
				<Pivot
					className="pivotControl"
					selectedKey={String(selectedKey)}
					onLinkClick={(contact: any) => {
						setSelectedKey(contact.props.itemKey);
					}}
					style={{ position: 'relative' }}>
					{/* Action Tab */}
					<PivotItem headerText='Action'>
						<div className="pt-10 pb-10">
							<Stack.Item
								className={
									fullScreen
										? contentStyles.tileListContentFull
										: contentStyles.tileListContent
								}>
								<div
									className={
										themeName === 'Light'
											? 'customScrollbar'
											: 'customScrollbarDark'
									}>
									<Stack wrap horizontal>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												<Toggle
													label="New"
													checked={isnew}
													onChange={handleNewToggleChange}
												/>
												<Toggle
													label="Amend"
												/>
											</Stack.Item>
										</Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												Requester
											</Stack.Item>
											<Stack.Item className={classNames.stackItemValueStyles}>
												<RhfTextField
													control={control}
													name="Requester"
													styles={textFieldStyle} />
											</Stack.Item>
										</Stack>

										<Stack tokens={Gap5Token} styles={sectionStackTokens}></Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												New User Details
											</Stack.Item>
										</Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}></Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}></Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												First Name
											</Stack.Item>
											<Stack.Item className={classNames.stackItemValueStyles}>
												<RhfTextField
													control={control}
													name="FirstName"
													styles={textFieldStyle}
												/>
											</Stack.Item>
										</Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												Start Date
											</Stack.Item>
											<Stack.Item className={classNames.stackItemValueStyles}>
											<DatePicker
											id="fromDate"
											placeholder='fromDate'
											isMonthPickerVisible={true}
											style={{ width: '150px', marginTop: '5px', color: 'red' }}
											// styles={{
											// 	callout: {
											// 		background: 'red !important',
											// 	},
											// }}
											calloutProps={{
												className: `${
													themeName === 'Light'
														? 'datePickerCalloutLight'
														: 'datePickerCalloutDark'
												}`,
											}}
											// styles={datePickerStyle(myThemeContext)}
											// value={transactionFilter?.fromDate}
											// onSelectDate={
											// 	fromDateSelect as (
											// 		date: Date | null | undefined
											// 	) => void
											// }
											></DatePicker>
											</Stack.Item>
										</Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												Last Name
											</Stack.Item>
											<Stack.Item className={classNames.stackItemValueStyles}>
												<RhfTextField
													control={control}
													name="LastName"
													styles={textFieldStyle}
												/>
											</Stack.Item>
										</Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												Office
											</Stack.Item>

											<Stack.Item className={classNames.stackItemValueStyles}>
												<RhfDropdown
													options={options}
													control={control}
													name="Office"
													placeholder='select a value'
													styles={dropwDownFieldStyle}
												/>
											</Stack.Item>
										</Stack>
										<Stack tokens={Gap5Token} styles={sectionStackTokens}>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												Email
											</Stack.Item>
											<Stack.Item className={classNames.stackItemValueStyles}>
												<RhfTextField
													control={control}
													name="Email"
													styles={textFieldStyle}
												/>
											</Stack.Item>
										</Stack>
										<Stack
											tokens={Gap5Token}
											styles={sectionStackTokens}
											>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												Line Manager
											</Stack.Item>
											<Stack.Item className={classNames.stackItemValueStyles}>
												<RhfTextField
													control={control}
													name="LineManager"
													styles={textFieldStyle}
												/>
											</Stack.Item>
										</Stack>
										<Stack
											tokens={Gap5Token}
											styles={sectionStackTokens}
											>
											<Stack.Item
												className={`${classNames.stackItemLabelStyles} ml-5`}
												style={neutralColorsGray100(myThemeContext)}>
												Permission Group
											</Stack.Item>
											<Stack.Item className={classNames.stackItemValueStyles}>
												<RhfDropdown
													options={options2}
													control={control}
													name="PermissionGroup"
													placeholder='select a value'
													styles={dropwDownFieldStyle}
												/>
											</Stack.Item>
										</Stack>
									</Stack>
								</div>
							</Stack.Item>
						</div>
					</PivotItem>
					{/* Action Tab */}

					{/* Market Access */}
							<PivotItem
								headerText={
									'Market Access'
								}
								itemKey="1">
								<div className="pt-10 pb-10">
									<Stack.Item
										className={
											fullScreen
												? contentStyles.tileListContentFull
												: contentStyles.tileListContent
										}>
										<div
											className={
												themeName === 'Light'
													? 'customScrollbar'
													: 'customScrollbarDark'
											}>
											<div className="ms-Grid" dir="ltr">
												<div className="ms-Grid-row">

													<>
														<Stack wrap horizontal verticalAlign="center">
															<h3 style={{ marginRight: "10px" }}>America</h3>

															{toggleDataAmerica.map((data) => (
																<div key={data.id} style={{ display: 'flex', alignItems: 'center' }}>
																	<Toggle
																		style={{ marginTop: '13px', marginRight: '10px' }}
																		checked={data.checked}
																		onChange={data.onChange}
																	/>
																	<Label style={{ marginRight: '40px', alignContent: 'center' }}
																		className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
																</div>
															))}
														</Stack>
														<Stack wrap horizontal verticalAlign="center">
															<h3 style={{ marginRight: "10px" }}>Europe</h3>

															{toggleBtnEurope.map((data) => (
																<div key={data.id} style={{ display: 'flex', alignItems: 'center' }}>
																	<Toggle
																		style={{ marginTop: '13px', marginRight: '10px' }}
																		checked={data.checked}
																		onChange={data.onChange}
																	/>
																	<Label style={{ marginRight: '40px', alignContent: 'center' }}
																		className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
																</div>
															))}
														</Stack>

														<Stack wrap horizontal verticalAlign="center">
															<h3 style={{ marginRight: "10px" }}>Mena</h3>

															{toggleDataMena.map((data) => (
																<div key={data.id} style={{ display: 'flex', alignItems: 'center' }}>
																	<Toggle
																		style={{ marginTop: '13px', marginRight: '10px' }}
																		checked={data.checked}
																		onChange={data.onChange}
																	/>
																	<Label style={{ marginRight: '40px', alignContent: 'center' }}
																		className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
																</div>
															))}
														</Stack>

														<Stack wrap horizontal verticalAlign="center">
															<h3 style={{ marginRight: "10px" }}>Asia-Pacific</h3>

															{toggleBtnAsiaPacific.map((data) => (
																<div key={data.id} style={{ display: 'flex', alignItems: 'center' }}>
																	<Toggle
																		style={{ marginTop: '13px', marginRight: '10px' }}
																		checked={data.checked}
																		onChange={data.onChange}
																	/>
																	<Label style={{ marginRight: '40px', alignContent: 'center' }}
																		className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
																</div>
															))}
														</Stack>

														<Stack wrap horizontal verticalAlign="center">
															<h3 style={{ marginRight: "10px" }}>Finance Management/Dormant/Non Trading Companies</h3>

															{toggleBtnFinanceManagement.map((data) => (
																<div key={data.id} style={{ display: 'flex', alignItems: 'center' }}>
																	<Toggle
																		style={{ marginTop: '13px', marginRight: '10px' }}
																		checked={data.checked}
																		onChange={data.onChange}
																	/>
																	<Label style={{ marginRight: '40px', alignContent: 'center' }}
																		className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
																</div>
															))}
														</Stack>
													</>
												</div>
											</div>
										</div>
									</Stack.Item>
								</div>
							</PivotItem>
					{/* Market Access */}

					{/* Access */}

					<PivotItem
						headerText='Access'
						itemKey="2">
						<div className="pt-10 pb-10">
							<Stack.Item
								className={
									fullScreen
										? contentStyles.tileListContentFull
										: contentStyles.tileListContent
								}>
								<div
									className={
										themeName === 'Light'
											? 'customScrollbar'
											: 'customScrollbarDark'
									}>
									<div className="ms-Grid" dir="ltr">
										<div className="ms-Grid-row">

											<>
												<Stack wrap horizontal verticalAlign="center">
													<h3 style={{ marginRight: "10px" }}>Finance</h3>

													{toggleDataFinance.map((data) => (
														<div key={data.id} style={{ display: 'flex', alignItems: 'center' }}>
															<Toggle
																style={{ marginTop: '13px', marginRight: '10px' }}
																checked={data.checked}
																onChange={data.onChange}
															/>
															<Label style={{ marginRight: '40px', alignContent: 'center' }}
																className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
														</div>
													))}
												</Stack>

												<Stack wrap verticalAlign="center">
													<h3 style={{ marginRight: "10px" }}>SAP WEB PORTAL</h3>

													{toggleBtnSAPWEBPORTAL.map((data) => (
														<div key={data.id} style={{ display: 'flex', alignItems: 'center' }}>
															<Toggle
																style={{ marginTop: '13px', marginRight: '10px' }}
																checked={data.checked}
																onChange={data.onChange}
															/>
															<Label style={{ marginRight: '40px', alignContent: 'center' }}
																className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
														</div>
													))}
												</Stack>

												<Stack
													tokens={Gap5Token}
													styles={sectionStackTokens}
													>
													<Label style={{ marginRight: '40px', alignContent: 'center' }}
														className={`${classNames.stackItemLabelStyles} ml-5`}>Web Approving Manager</Label>
													<Stack.Item className={classNames.stackItemValueStyles}>
														<RhfDropdown
															options={options2}
															control={control}
															name="PermissionGroup"
															placeholder='select a value'
															styles={dropwDownFieldStyle}
														/>
													</Stack.Item>
												</Stack>
												<Stack wrap horizontal verticalAlign="center">
													<h3 style={{ marginRight: "10px" }}>Training</h3>

													<Toggle
														style={{ marginTop: "13px", marginRight: "10px" }}
													/>
													<Label style={{ marginRight: "40px", alignContent: "center" }}>Yes</Label>

													<Toggle
														style={{ marginTop: "13px", marginRight: "10px" }}
													/>
													<Label style={{ marginRight: "40px", alignContent: "center" }}>No</Label>
												</Stack>
												<h5>if yes, any requirement?</h5>
												<Stack
													tokens={Gap5Token}
													styles={sectionStackTokens}
													>
													<RhfTextField
														control={control}
														name="requirement"
														styles={textFieldStyle}
													/>
												</Stack>
												<h5>Comment</h5>
												<Stack
													tokens={Gap5Token}
													>
													<RhfTextField
														control={control}
														name="Comment"
														styles={textFieldStyle}
													/>
												</Stack>
												<PrimaryButton text="Submit" 
												 />
											</>
										</div>
									</div>
								</div>
							</Stack.Item>
						</div>
					</PivotItem>
					{/* Access */}
				</Pivot>
			</div>
		</div>
	);
}
