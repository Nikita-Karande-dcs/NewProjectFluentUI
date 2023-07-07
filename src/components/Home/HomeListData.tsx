import {
	CommandBar,
	ICommandBarItemProps,
	IconButton,
	IIconProps,
	NeutralColors,
	Persona,
	Pivot,
	PivotItem,
	Stack,
	PersonaPresence,
	PersonaSize,
	Checkbox,
	IDropdownOption,
	IPersonaProps,
	Icon,
	Link,
	ActionButton,
	Dropdown,
	Nav,
	INavStyles,
	INavLinkGroup,
	SelectionMode,
	ScrollablePane,
	DetailsList,
	ScrollbarVisibility,
	DetailsListLayoutMode,
	IRenderFunction,
	IDetailsColumnRenderTooltipProps,
	TooltipHost,
	Sticky,
	StickyPositionType,
	IDetailsHeaderProps,
	IColumn,
	StackItem,
	getTheme,
	IStackStyles,
	Text,
	TextField,
	Label,
	ThemeContext,
	Toggle,
} from '@fluentui/react';
import * as React from 'react';
import { useEffect, useState } from 'react';
// import Scrollbars from "react-custom-scrollbars";
import { useForm } from 'react-hook-form';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import {
// 	getContactDetail,
// 	getAssociateContacts,
// 	getContactBank,
// 	getMSTList,
// 	getContactModule,
// 	manageContact,
// 	getContactDelegationList,
// 	getAllContacts,
// 	getContactFundAccess,
// } from '../../../services/contact.service';
// import {
// 	dropwDownFieldCatStyle,
// 	dropwDownFieldStyle,
// 	largetTextFieldStyle,
// 	textFieldStyle,
// 	userNameFieldStyle,
// } from '../../shared/CTextField';
// import { RhfDropdown } from '../../shared/RhfDropdown';
// import { RhfTextField } from '../../shared/RhfTextField';
import { useBoolean } from '@fluentui/react-hooks';
// import { useAppDispatch, useAppSelector } from '../../../app/hooks';
// import {
// 	getContactAsync,
// 	selectedContact,
// 	setAssociateStatus,
// 	setBankAccountStatus,
// } from '../ContactSlice';
// import { scrollablePaneStyles, submitCommandBar } from '../../shared/Styles';
// import ContactSearch from '../ContactSearch';
import {
	contactDetailContentsStyles,
	contactDetailContentsstackStyles,
	contactDetailContentsParentNameStyle,
	contactDetailContentsParentNameStyles,
	contactDetailContentsiconButtonStyles,
	contactDetailContentsCommandBarDiv,
	contactDetailContentsIcon,
	contactDetailContestsCardWidth,
	contactDetailContentsCommandBarDiv1,
	contactDetailContentsPivotItem,
	contactDetailContentsUnfollowedIcon,
	contactDetailContentsHiddenModuleRight,
	contactDetailContentsModuleRight,
	contactDetailContentsCommandBarDiv2,
	contactDetailContentsScrollbarPane,
	stackTextStyle,
	labelstackTextStyle,
	neutralColorsGray100,
	contactDetailContestsPersonaBorder,
	themePrimaryOverFlowItems,
} from '../../styles/ContactStyles';
// import { taskDelegation } from '../ContactTypes';
// import NoRecords from '../../shared/NoRecords';
// import { convertServerDate } from '../../../utils/Common';
// import TaskDelegation from './TaskDelegation';
// import { ST_TrueFalseBlank } from 'igniteui-react-excel';
import {
	Gap10Token,
	Gap5Token,
	submitForApprovalButton,
} from '../../styles/SharedStyles';
import { useTheme } from '../../Context/ThemeContext';
// import { useTranslation } from 'react-i18next';
// import CheckboxTree from 'react-checkbox-tree';
import {
	dropwDownFieldCatStyle,
	dropwDownFieldStyle,
	largetTextFieldStyle,
	textFieldStyle,
	userNameFieldStyle,
} from '../shared/CTextField';
import { RhfTextField } from '../shared/RhfTextField';
import { RhfDropdown } from '../shared/RhfDropdown';
export interface IButtonPropertyProps {
	disabled?: boolean;
	checked?: boolean;
}
const fullScreenIcon: IIconProps = { iconName: 'FullScreen' };
const screenInPopup: IIconProps = { iconName: 'BackToWindow' };
const cancelIcon: IIconProps = { iconName: 'Cancel' };

export interface IButtonPropertyProps {
	disabled?: boolean;
	checked?: boolean;
}

export interface IContactDetailContentsProps {
	contentStyles: any;
	classNames: any;
	sectionStackTokens: any;
	handleHideModel: any;
	setContactModifySuccess: any;
	isPopUp?: boolean;
	fullScreen?: boolean;
	setFullScreen?: any;
	activeContact?: any;
	data?: any;
}

interface IModule {
	id: any;
	name: any;
}
interface IContactUserModel {
	contactCode: string;
	contactCategoryCode: string;
}

const initialState = {
	profile: {
		id: 0,
		status: '',
		contactActionType: '',
		type: '',
		code: null,
		externalCode: '',
		contactName: '',
		group: '',
		industryGroup: '',
		industryGroupCode: '',
		industry: '',
		industryCode: '',
		country: '',
		countryId: '',
		contactCategoryCode: '',
		contactCategoryName: '',
		active: true,
		lastName: '',
		firstName: '',
		lastNameOriginalScript: '',
		firstNameOriginalScript: '',
		companyName: '',
		companyNameOriginalScript: '',
		englishName: '',
		address: '',
		zipCode: '',
		aspnetUserId: null,
		userName: '',
		userDisplayName: '',
		email: '',
		parentContactCode: '',
		parentContactName: '',
		userRoles: '',
		userRolesFullName: '',
		userGroups: '',
		comments: '',
		telephoneNo: '',
		faxNo: '',
		validationMessage: '',
	},
	users: [],
	banks: [],
	countries: [],
	category: [],
	industryGroup: [],
	industry: [],
};

const addFriendIcon: IIconProps = { iconName: 'UserFollowed' };
export default function HomeListData({
	contentStyles,
	classNames,
	sectionStackTokens,
	handleHideModel,
	setContactModifySuccess,
	isPopUp,
	setFullScreen,
	fullScreen,
	activeContact,
	data
}: IContactDetailContentsProps) {
	let { selectedContactId } = useParams<any>();
	console.log("data", data);
	// const { t } = useTranslation();
	// if (selectedContactId == undefined) selectedContactId = activeContact.code;
	// const appDisptach = useAppDispatch();
	const { handleSubmit, control, setValue, watch, getValues } = useForm<
		any,
		any
	>({ reValidateMode: 'onSubmit', mode: 'all' });
	const [failedToLoad, setFailedToLoad] = useState({
		type: false,
		subType: false,
	});
	const [selectedKey, setSelectedKey] = React.useState(0);
	const [selectedCatItems, setSelectedCatItems] = useState<string[]>([]);
	const [personaName, setPersonaName] = useState<string>();
	const [moduleArray, setModuleArray] = useState<IModule[]>([]);

	const [isNew, setIsNew] = useState<boolean>(false);
	const [disableSubmitForApproval, setDisableSubmitForApproval] =
		useState<boolean>(false);
	const [typePersona, setTypePersona] = useState<PersonaPresence>();
	const [contactUserModelArray, setContactUserModelArray] = useState<
		IContactUserModel[]
	>([]);
	const [companyNameDisplayStyle, setCompanyNameDisplayStyle] = useState({
		display: 'none',
	});
	const [nameDisplayStyle, setNameDisplayStyle] = useState({
		display: 'block',
	});
	const [industryGroupDisplayStyle, setindustryGroupDisplayStyle] = useState({
		display: 'block',
	});
	const [industryDisplayStyle, setindustryDisplayStyle] = useState({
		display: 'block',
	});
	const [groupArray, setGroupArray] = useState([
		{ key: '', text: 'Select Group' },
	]);

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

	// const parentContact = useAppSelector(
	// 	(state) => state.contact.selectedContact
	// );

	const [isIndividualContact, setIndividualContact] = useState<boolean>(false);
	const [contactDetail, setContactDetail] = useState<any>(initialState);
	// const industryGroupWatch = watch('industryGroup');
	// const personaComapnyWatch = watch('companyName');
	// const personaNameWatch = watch('name');
	const [isModuleRightsOpen, setModuleRightsOpen] = useState(true);
	const [isAccessRightsOpen, setAccessRightsOpen] = useState(true);
	const [accessRightsData, setAccessRightsData] = useState([]);
	const [selectedNavKey, setSelectedNavKey] = useState('ModuleRights');
	const [parentContactName, setParentContactName] = useState<string | null>();
	const [parentContactCode, setParentContactCode] = useState<string | null>();
	const [isRoleChecked, setIsRoleChecked] = useState<any>([]);
	// const [delegationList, setDelegationList] = useState<taskDelegation[]>();
	const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
		useBoolean(false);
	const history = useNavigate();
	interface CustomizedState {
		type: string;
		place?: string | null;
	}
	const location = useLocation();
	// const countries = useAppSelector((state) => state.contact.countryList);

	// const initData = async () => {
	// 	setContactDetail({ ...initialState });
	// 	let industryGroupData = await getMSTList({
	// 		type: 'Industry',
	// 		listType: 'Parent',
	// 	});
	// 	setContactDetail((preVal: any) => {
	// 		return {
	// 			...preVal,
	// 			countries: countries,
	// 			industryGroup: industryGroupData,
	// 		};
	// 	});
	// 	let categoryType = 'IndividualContactCategory';
	// 	if (selectedContactId != 'new') {
	// 		let contactProfile = await getContactDetail(selectedContactId);
	// 		let contactUsers = await getAssociateContacts(selectedContactId);
	// 		let contactBanks = await getContactBank(selectedContactId);
	// 		let userRoleData = contactProfile[0]?.userRoles
	// 			?.split(', ')
	// 			.map((item: any) => ({ role: item.trim() }));

	// 		if (contactProfile[0]?.type == 'Corporation') {
	// 			categoryType = 'CorporationContactCategory';
	// 			setIndividualContact(false);
	// 		} else if (contactProfile[0]?.userName != null) {
	// 			let delegations = await getContactDelegationList(
	// 				contactProfile[0]?.userName
	// 			);
	// 			setDelegationList(delegations);

	// 			try {
	// 				//Load modules based on contact categories
	// 				let moduleQueryString =
	// 					'categoryCode=' + contactProfile[0].contactCategoryCode;
	// 				let moduleData = await getContactModule(moduleQueryString);

	// 				if (moduleData) {
	// 					var mArray = moduleData.map((x: any) => ({
	// 						id: x.key,
	// 						name: x.text,
	// 					}));
	// 					setModuleArray(mArray);
	// 				}
	// 			} catch (error) {
	// 				console.log('error ', error);
	// 			}
	// 		}

	// 		if (
	// 			contactProfile[0].comments != null &&
	// 			contactProfile[0].contactActionType != null
	// 		)
	// 			setDisableSubmitForApproval(true);
	// 		else {
	// 			setDisableSubmitForApproval(false);
	// 		}
	// 		//bindModuleArray(contactProfile[0].contactCategoryCode);

	// 		let categoryData = await getMSTList({ type: categoryType });
	// 		// setContactDetail((preVal: any) => {
	// 		// 	return {
	// 		// 		...preVal,
	// 		// 		category: categoryData,
	// 		// 	};
	// 		// });

	// 		setParentContactName(contactProfile[0].parentContactName);
	// 		setParentContactCode(contactProfile[0].parentContactCode);

	// 		setContactDetail((preVal: any) => {
	// 			return {
	// 				...preVal,
	// 				profile: contactProfile.length > 0 ? contactProfile[0] : {},
	// 				users: contactUsers,
	// 				banks: contactBanks,
	// 				userRoles: userRoleData,
	// 				category: categoryData,
	// 			};
	// 		});

	// 		let contactUserArray: IContactUserModel[] = contactUsers.map(
	// 			(item: any) => ({
	// 				contactCode: item.code,
	// 				contactCategoryCode: item.contactCategoryCode,
	// 			})
	// 		);
	// 		setContactUserModelArray(contactUserArray);
	// 		setIsRoleChecked(userRoleData?.map((r: any) => r.role));
	// 		setValue('industryGroup', contactProfile[0]?.industryGroupCode);
	// 		bindSubIndustryGroup(contactProfile[0]?.industryGroupCode);

	// 		if (contactProfile[0] != undefined) {
	// 			if (contactProfile[0]?.type != 'Individual') {
	// 				setPersonaName(contactProfile[0].companyName);
	// 			} else {
	// 				setPersonaName(
	// 					contactProfile[0].firstName +
	// 					(contactProfile[0].lastName != null
	// 						? ' ' + contactProfile[0].lastName
	// 						: '')
	// 				);
	// 			}
	// 		}
	// 	} else {
	// 		if (selectedContactId != undefined) {
	// 			if (location.state) {
	// 				const state = location.state as CustomizedState;
	// 				const type = state.type || '';
	// 				const place = state.place;
	// 				if (place != undefined && place == 'ribbon') {
	// 					setParentContactName(null);
	// 					setParentContactCode(null);
	// 				} else {
	// 					setParentContactName(parentContact?.contactName);
	// 					setParentContactCode(parentContact?.code);
	// 				}
	// 				categoryType =
	// 					type === 'Corporation'
	// 						? 'CorporationContactCategory'
	// 						: 'IndividualContactCategory';
	// 			}
	// 			setIndividualContact(
	// 				categoryType == 'CorporationContactCategory' ? false : true
	// 			);
	// 			let categoryData = await getMSTList({ type: categoryType });
	// 			setContactDetail((preVal: any) => {
	// 				return {
	// 					...preVal,
	// 					category: categoryData,
	// 				};
	// 			});

	// 			// setParentContactName(parentContact?.contactName);
	// 			// setParentContactCode(parentContact?.code);
	// 		}
	// 	}
	// };

	// const isBankAccountChange = useAppSelector(
	// 	(state) => state.contact.isBankAccountChange
	// );
	// const isAssociateChange = useAppSelector(
	// 	(state) => state.contact.isAssociateChange
	// );
	// useEffect(() => {
	// 	if (isBankAccountChange || isAssociateChange) {
	// 		appDisptach(setBankAccountStatus(false));
	// 		appDisptach(setAssociateStatus(false));
	// 		(async () => {
	// 			if (isBankAccountChange) {
	// 				let contactBanks = await getContactBank(selectedContactId);
	// 				setContactDetail((preVal: any) => {
	// 					return {
	// 						...preVal,
	// 						banks: contactBanks,
	// 					};
	// 				});
	// 			}
	// 			if (isAssociateChange) {
	// 				let contactUsers = await getAssociateContacts(selectedContactId);
	// 				setContactDetail((preVal: any) => {
	// 					return {
	// 						...preVal,
	// 						users: contactUsers,
	// 					};
	// 				});
	// 			}
	// 		})();
	// 	}
	// }, [location.key]);

	const newContactAccount = () => {
		// appDisptach(selectedContact(contactDetail.profile));
		history(`/contact/new`, { state: { background: location } });
	};

	const handleContactCodeClick = (
		event: React.MouseEvent<
			HTMLAnchorElement | HTMLElement | HTMLButtonElement,
			MouseEvent
		>,
		code: any,
		actionType?: string
	) => {
		// appDisptach(selectedContact(contactDetail.profile));
		if (actionType != 'Create') {
			if (event.button === 0) {
				if (event.ctrlKey) {
					window.open(`/contactDetailInTab/${code}`);
				} else {
					history(`/contact/${code}`, { state: { background: location } });
				}
			} else if (event.button == 1) {
				window.open(`/contactDetailInTab/${code}`);
			}
		}
	};

	const newBankAccount = () => {
		// appDisptach(selectedContact(contactDetail.profile));
		if (isPopUp) {
			let path = location.pathname.substring(
				0,
				location.pathname.lastIndexOf('/')
			);
			history(`${path}/bankAccount/new`);
		} else {
			history(`${location.pathname}/bankAccount/new`);
		}
	};

	const handleBankAccountClick = (
		event: React.MouseEvent<
			HTMLAnchorElement | HTMLElement | HTMLButtonElement,
			MouseEvent
		>,
		itemId: any,
		actionType?: string
	) => {
		if (actionType != 'Create') {
			if (event.button === 0) {
				if (event.ctrlKey) {
					window.open(`/bankAccountProfileTab/${itemId}`);
				} else {
					if (isPopUp) {
						let path = location.pathname.substring(
							0,
							location.pathname.lastIndexOf('/')
						);
						history(`${path}/bankAccount/${itemId}`);
					} else {
						history(`${location.pathname}/bankAccount/${itemId}`);
					}
				}
			} else if (event.button == 1) {
				window.open(`/bankAccountProfileTab/${itemId}`);
			}
		}
	};

	// const bindSubIndustryGroup = async (code: any) => {
	// 	try {
	// 		let groupReq = {
	// 			type: 'Industry',
	// 			listType: 'Child',
	// 			parentCode: code,
	// 		};
	// 		// let subgroupData = await getMSTList(groupReq);
	// 		if (subgroupData) {
	// 			setGroupArray(subgroupData);
	// 			// setValue('industry', contactDetail.profile.industryCode);
	// 		}
	// 	} catch (error) {
	// 		setFailedToLoad((preVal) => {
	// 			return { ...preVal, subType: true };
	// 		});
	// 	}
	// };

	// const bindModuleArray = async (categoryCode: string) => {
	// 	///In case of individual contact type only
	// 	if (isIndividualContact) {
	// 		try {
	// 			let moduleQueryString = 'categoryCode=' + categoryCode;
	// 			// let moduleData = await getContactModule(moduleQueryString);

	// 			if (moduleData) {
	// 				var mArray = moduleData.map((x: any) => ({
	// 					id: x.key,
	// 					name: x.text,
	// 				}));
	// 				setModuleArray(mArray);
	// 			}
	// 		} catch (error) {
	// 			setFailedToLoad((preVal) => {
	// 				return { ...preVal, type: true };
	// 			});
	// 		}
	// 	}
	// };

	useEffect(() => {
		if (selectedContactId) {
			setIndividualContact(selectedContactId.slice(3, 4) == 'I' ? true : false);
			// initData();
		}
	}, [selectedContactId]);

	// useEffect(() => {
	// 	let industryGroupSelectedValue = getValues('industryGroup');
	// 	bindSubIndustryGroup(industryGroupSelectedValue);
	// }, [industryGroupWatch]);

	// useEffect(() => {
	// 	let companyValue = getValues('companyName');
	// 	setPersonaName(companyValue);
	// }, [personaComapnyWatch]);

	// useEffect(() => {
	// 	let nameValue = getValues('name');
	// 	setPersonaName(nameValue);
	// }, [personaNameWatch]);

	// const setFormValues = () => {
	// 	Object.keys(contactDetail.profile).map((item) => {
	// 		setValue(item, contactDetail.profile[item]);
	// 	});

	// 	const fName = contactDetail.profile.firstName;
	// 	const lName = contactDetail.profile.lastName;
	// 	setValue('name', fName + (lName != '' && lName != null ? ' ' + lName : ''));
	// };

	const setCompanyNameShow = () => {
		setCompanyNameDisplayStyle({ display: 'block' });
		setNameDisplayStyle({ display: 'none' });
	};

	const setCompanyNameHide = () => {
		setCompanyNameDisplayStyle({ display: 'none' });
		setNameDisplayStyle({ display: 'block' });
	};

	// useEffect(() => {
	// 	if (
	// 		selectedContactId !== undefined &&
	// 		Object.keys(contactDetail.profile).length != 0
	// 	) {
	// 		setFormValues();
	// 		if (
	// 			selectedContactId !== undefined &&
	// 			contactDetail?.profile?.contactCategoryCode != ''
	// 		) {
	// 			let categoryArray: string[] =
	// 				contactDetail.profile.contactCategoryCode.split(', ');
	// 			setSelectedCatItems(categoryArray);
	// 		}
	// 	}
	// 	setValue(
	// 		'contactActionType',
	// 		contactDetail?.profile?.id > 0 ? 'Update' : 'Create'
	// 	);
	// 	const state = location.state as CustomizedState;
	// 	const type = state?.type || '';
	// 	if (
	// 		(contactDetail?.profile?.type != '' &&
	// 			contactDetail?.profile?.type != 'Individual') ||
	// 		type === 'Corporation'
	// 	) {
	// 		setTypePersona(PersonaPresence.busy);
	// 		setCompanyNameShow();
	// 		showHideIndustryGroup_Industry(true);
	// 	} else {
	// 		setTypePersona(PersonaPresence.offline);
	// 		setCompanyNameHide();
	// 		showHideIndustryGroup_Industry(false);
	// 	}

	// 	if (selectedContactId !== 'new') {
	// 		setIsNew(false);
	// 	} else {
	// 		setIsNew(true);
	// 	}
	// 	setSelectedKey(0);
	// }, [contactDetail.profile]);

	const onRoleChange = (
		ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
		checked?: boolean
	): void => {
		const roleid = (ev?.target as HTMLInputElement).id;
		setIsRoleChecked([...isRoleChecked, roleid]);
		if (!checked) {
			setIsRoleChecked(isRoleChecked.filter((item: any) => item !== roleid));
		}
	};

	const showHideIndustryGroup_Industry = (ContactType: boolean) => {
		if (ContactType == false) {
			setindustryGroupDisplayStyle({ display: 'none' });
			setindustryDisplayStyle({ display: 'none' });
		} else {
			setindustryGroupDisplayStyle({ display: 'block' });
			setindustryDisplayStyle({ display: 'block' });
		}
	};

	// const submitForm = () => {
	// 	setValue('contactMappings', contactUserModelArray);
	// 	setValue('parentContactCode', parentContactCode);
	// 	if (!isIndividualContact) {
	// 		setValue('type', 'Corporation');
	// 	} else {
	// 		setValue('type', 'Individual');
	// 		const fullNames = getValues('name').split(' ', 2);
	// 		setValue('firstName', fullNames[0]);
	// 		if (fullNames.length > 0) {
	// 			setValue('lastName', fullNames[1]);
	// 		}
	// 	}
	// 	if (isRoleChecked) {
	// 		const userRoleString = isRoleChecked
	// 			.filter((r: any) => !r.includes('Reader'))
	// 			.map((j: any) => j)
	// 			.join(', ')
	// 			.trim();
	// 		setValue('userRoles', userRoleString);
	// 	}

	// 	try {
	// 		//setDisableSubmitForApproval(true);
	// 		handleSubmit(async (data) => {
	// 			let response = await manageContact(data);
	// 			if (response.Data) {
	// 				setDisableSubmitForApproval(true);
	// 				appDisptach(setAssociateStatus(true));
	// 				setContactModifySuccess(true);
	// 				setTimeout(() => {
	// 					setContactModifySuccess(false);
	// 				}, 5000);
	// 				//appDisptach(getContactAsync());
	// 			}
	// 		})();
	// 	} catch (error) {
	// 		setDisableSubmitForApproval(false);
	// 	}
	// };

	// const onCategoryChange = (
	// 	event: React.FormEvent<HTMLDivElement>,
	// 	item?: IDropdownOption | undefined,
	// 	index?: number | undefined
	// ): void => {
	// 	if (item) {
	// 		let finalCategory: string[] = item.selected
	// 			? [...selectedCatItems, item.key as string]
	// 			: selectedCatItems.filter((key) => key !== item.key);
	// 		setSelectedCatItems(finalCategory);
	// 		setValue('contactCategoryCode', finalCategory.join(', '));
	// 		bindModuleArray(finalCategory.join(', '));
	// 	}
	// };

	const addAssociate = (contacts: any) => {
		let contactUserArray: IContactUserModel[] = contacts.map((item: any) => ({
			contactCode: item.code,
			contactCategoryCode: item.categoryCode,
		}));
		contactUserModelArray.push(...contactUserArray);
		setContactUserModelArray(contactUserModelArray);

		contacts.map((item: any) => {
			if (contactDetail.users.findIndex((c: any) => c.id == item.id) === -1) {
				setContactDetail((preVal: any) => {
					return {
						...preVal,
						users: [
							...preVal.users,
							{
								id: item.id,
								code: item.code,
								englishName: item.name,
								contactCategoryName: item.category,
								parentContactName: item.parentName,
								type: item.type,
							},
						],
					};
				});
			}
		});
	};

	const setParentContact = (contact: any) => {
		setParentContactName(contact[0].englishName);
		setParentContactCode(contact[0].code);
	};

	const removeContact = (contactCode: string) => {
		let contactUserArray = contactUserModelArray.filter(
			(item: any) => item.contactCode !== contactCode
		);
		setContactUserModelArray(contactUserArray);

		let contactDetailUserArray = contactDetail.users?.filter(
			(item: any) => item.code !== contactCode
		);
		setContactDetail((preVal: any) => {
			return {
				...preVal,

				users: contactDetailUserArray,
			};
		});
	};

	const _items: ICommandBarItemProps[] = [
		{
			key: 'associateContact',
			text: 'associateContact',
			iconProps: { iconName: 'ConnectContacts' },
			disabled: disableSubmitForApproval,
			style: themePrimaryOverFlowItems,
			subMenuProps: {
				items: [
					{
						key: 'searchContact',
						text: 'Contact Search',
						iconProps: { iconName: 'search' },
						// onRender: () => {
						// 	// return (
						// 	// 	// <ContactSearch
						// 	// 	// 	selectContact={addAssociate}
						// 	// 	// 	categoryType={null}
						// 	// 	// 	buttonText="Associate contact"
						// 	// 	// />
						// 	// );
						// },
					},
				],
			},
		},
		{
			key: 'addContact',
			// text: t('addContact').toString(),
			iconProps: { iconName: 'AddFriend' },
			style: themePrimaryOverFlowItems,
			onClick: () => {
				newContactAccount();
			},
			disabled: disableSubmitForApproval,
		},
	];

	const baItems: ICommandBarItemProps[] = [
		{
			key: 'addAccount',
			text: 'addAccount',
			iconProps: { iconName: 'Add' },
			style: themePrimaryOverFlowItems,
			onClick: () => {
				newBankAccount();
			},
			disabled: disableSubmitForApproval,
		},
	];

	const delegationtems: ICommandBarItemProps[] = [
		{
			key: 'taskDelegation',
			text: 'Task delegation',
			iconProps: { iconName: 'Add' },
			// onClick: () => {
			// 	appDisptach(selectedContact(contactDetail.profile));
			// 	showModal();
			// },
			disabled: disableSubmitForApproval,
		},
	];
	const myThemeContext = React.useContext(ThemeContext);
	const themeName = useTheme().themeName;
	// const _SubmitForApproval: ICommandBarItemProps[] = [
	// 	{
	// 		key: 'newItem',
	// 		text: t('submitForApproval').toString(),
	// 		iconProps: { iconName: 'Save' },
	// 		onClick: submitForm,
	// 		ariaLabel: 'Submit for approval',
	// 		renderedInOverflow: false,
	// 		disabled: disableSubmitForApproval,
	// 		// buttonStyles: {
	// 		// 	rootHovered: {
	// 		// 		background: myThemeContext?.palette.black,
	// 		// 		// color: "#4285f4",
	// 		// 		//backgroundColor: "red",
	// 		// 	},
	// 		// },
	// 		buttonStyles: submitForApprovalButton(myThemeContext, themeName),
	// 	},
	// ];

	useEffect(() => {
		let dataasdas = async () => {
			// let moduleData = await getContactFundAccess(selectedContactId);
			console.log('selectedContactId ', selectedContactId);
			// setAccessRightsData(moduleData);
		};
		dataasdas();
	}, [selectedContactId]);

	const navStyles: Partial<INavStyles> = {
		root: { width: 149, height: 88, overflowY: 'hidden' },
	};

	// const navLinkGroups: INavLinkGroup[] = [
	// 	{
	// 		links: [
	// 			{
	// 				key: 'ModuleRights',
	// 				name: t('moduleRights').toString(),
	// 				icon: 'PlayerSettings',
	// 				url: '',
	// 				onClick(ev?, item?) {
	// 					setSelectedNavKey('ModuleRights');
	// 					setModuleRightsOpen(true);
	// 				},
	// 			},
	// 			{
	// 				key: 'FundAccess',
	// 				name: t('fundAccess').toString(),
	// 				icon: 'ReportLock',
	// 				url: '',
	// 				onClick(ev?, item?) {
	// 					setSelectedNavKey('FundAccess');
	// 					setModuleRightsOpen(false);
	// 				},
	// 			},
	// 		],
	// 	},
	// ];
	// function _getKey(item: any, index?: number): string {
	// 	return `${index}`;
	// }

	// const renderFixedDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (
	// 	props,
	// 	defaultRender
	// ) => {
	// 	if (!props) {
	// 		return null;
	// 	}
	// 	const onRenderColumnHeaderTooltip: IRenderFunction<
	// 		IDetailsColumnRenderTooltipProps
	// 	> = (tooltipHostProps) => <TooltipHost {...tooltipHostProps} />;
	// 	return (
	// 		<Sticky stickyPosition={StickyPositionType.Header} isScrollSynced>
	// 			{defaultRender!({
	// 				...props,
	// 				onRenderColumnHeaderTooltip,
	// 			})}
	// 		</Sticky>
	// 	);
	// };

	const columns: IColumn[] = [
		{
			key: 'column2',
			name: 'To',
			isSorted: false,
			fieldName: 'toUser',
			minWidth: 200,
			maxWidth: 200,
			isResizable: true,
		},
		{
			key: 'column3',
			name: 'From date',
			isSorted: false,
			fieldName: 'from',
			minWidth: 100,
			maxWidth: 100,
			isResizable: true,
		},
		{
			key: 'column4',
			name: 'To date',
			isSorted: false,
			fieldName: 'to',
			minWidth: 100,
			maxWidth: 100,
			isResizable: true,
		},
	];

	const onItemRender = (item?: any, index?: number, column?: IColumn) => {
		// if (column?.fieldName == 'from' || column?.fieldName == 'to') {
		// 	return convertServerDate(item[column?.fieldName]);
		// }
		if (column?.fieldName == 'fromUser' || column?.fieldName == 'toUser') {
			return (
				<>
					<Persona
						text={item[column?.fieldName]}
						size={PersonaSize.size24}
						presence={PersonaPresence.online}
						styles={{
							primaryText: {
								fontSize: '12px',
							},
						}}
					/>
				</>
			);
		}
		if (column?.fieldName) return <>{item[column?.fieldName]}</>;
	};

	const [isEditVisible, setIsEditVisible] = useState(false);

	const [expandedcheck, setcheckExpanded] = useState<string[]>([]);
	const [checkedtree, setcheckedtree] = useState<string[]>([]);

	const checkBoxData: any = [
		{
			value: '1',
			label: 'GPF',
			children: [
				{
					value: '36',
					label: 'Australia',
					children: [
						{
							value: '2758',
							label: '1 Shelley St Landowning Trust',
							children: null,
						},
						{
							value: '2761',
							label: '1 Shelley St Trust',
							children: null,
						},
						{
							value: '2791',
							label: 'MILP Calibre Trust',
							children: null,
						},
						{
							value: '2788',
							label: 'MILP Campbelltown Trust',
							children: null,
						},
						{
							value: '2739',
							label: 'MILP Trust',
							children: null,
						},
						{
							value: '2759',
							label: 'MILP Westgate Trust',
							children: null,
						},
						{
							value: '2760',
							label: 'Mirvac Altona Trust No. 1',
							children: null,
						},
						{
							value: '2762',
							label: 'Mirvac Altona Trust No. 2',
							children: null,
						},
						{
							value: '2795',
							label: 'PPFA Bond Trust',
							children: null,
						},
						{
							value: '2776',
							label: 'PPFA Bourke Trust',
							children: null,
						},
						{
							value: '2738',
							label: 'PPFA Collins Sub-Trust',
							children: null,
						},
						{
							value: '2754',
							label: 'PPFA Collins Trust',
							children: null,
						},
						{
							value: '2753',
							label: 'PPFA Holding Trust',
							children: null,
						},
						{
							value: '2740',
							label: 'PPFA MILP Trust',
							children: null,
						},
						{
							value: '2737',
							label: 'PPFA Nominee Trust',
							children: null,
						},
						{
							value: '2736',
							label: 'PPFA Sub-Trust',
							children: null,
						},
					],
				},
				{
					value: '156',
					label: 'China',
					children: [
						{
							value: '2764',
							label: 'Shanghai Beiye Logistics Co., Ltd',
							children: null,
						},
						{
							value: '2792',
							label: 'Shanghai Cailiang Industrial Development Co., Ltd',
							children: null,
						},
					],
				},
				{
					value: '356',
					label: 'India',
					children: [
						{
							value: '5850',
							label: 'ACL India TMK',
							children: null,
						},
						{
							value: '5768',
							label: 'Additional Attribute Comp1',
							children: null,
						},
						{
							value: '5747',
							label: 'Additional Attribute Comp3',
							children: null,
						},
					],
				},
				{
					value: '39222',
					label: 'Japan',
					children: [
						{
							value: '58853',
							label: 'ACL Japan',
							children: null,
						},
						{
							value: '27351',
							label: 'G.K PPFA Japan I',
							children: null,
						},
						{
							value: '2793',
							label: 'G.K PPFA Japan III',
							children: null,
						},
						{
							value: '27633',
							label: 'GK Ichikawa Konodai Yamato Chuo Development Project',
							children: null,
						},
						{
							value: '2777',
							label: 'Ippan Shadan Hojin PPFA',
							children: null,
						},
						{
							value: '2728',
							label: 'PPFA Japan I TMK',
							children: null,
						},
						{
							value: '2729',
							label: 'PPFA Japan II TMK',
							children: null,
						},
						{
							value: '27305',
							label: 'PPFA Japan III TMK',
							children: null,
						},
						{
							value: '2732',
							label: 'PPFA Japan LPS',
							children: null,
						},
						{
							value: '27332',
							label: 'PPFA Pref Manager Pte. (Japan Branch)',
							children: null,
						},
						{
							value: '27671',
							label: 'Ashiya Holding TMK',
							children: null,
						},
						{
							value: '2765',
							label: 'Echigo Holding TMK',
							children: null,
						},
						{
							value: '27782',
							label: 'G8 Japan GK Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '27801',
							label: 'G8 Japan LPS',
							children: null,
						},
						{
							value: '27792',
							label: 'G8 Japan Pref Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '27661',
							label: 'G8 Shintomicho II TMK',
							children: null,
						},
						{
							value: '2772',
							label: 'GK G8 Ashiya',
							children: null,
						},
						{
							value: '2771',
							label: 'GK G8 Shinkiba',
							children: null,
						},
						{
							value: '2773',
							label: 'GK G8 Tatsumi',
							children: null,
						},
						{
							value: '27811',
							label: 'Ippan Shadan Hojin G8',
							children: null,
						},
						{
							value: '27682',
							label: 'Tsujido Holding TMK',
							children: null,
						},
						{
							value: '27751',
							label: 'G9 Edogawabashi TMK',
							children: null,
						},
						{
							value: '27822',
							label: 'G9 Japan GK Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '27692',
							label: 'G9 Japan I TMK',
							children: null,
						},
						{
							value: '2786',
							label: 'G9 Japan II TMK',
							children: null,
						},
						{
							value: '27701',
							label: 'G9 Japan III TMK',
							children: null,
						},
						{
							value: '27891',
							label: 'G9 Japan IV TMK',
							children: null,
						},
						{
							value: '2784',
							label: 'G9 Japan LPS',
							children: null,
						},
						{
							value: '27832',
							label: 'G9 Japan Pref Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '27742',
							label: 'GK G9 Japan I',
							children: null,
						},
						{
							value: '2785',
							label: 'Ippan Shadan Hojin G9',
							children: null,
						},
						{
							value: '27871',
							label: 'Ryukyu Hotel Management KK',
							children: null,
						},
					],
				},
				{
					value: '410',
					label: 'Korea',
					children: [
						{
							value: '2734',
							label: 'IGIS Private Real Estate Investment Trust No. 61',
							children: null,
						},
						{
							value: '2731',
							label: 'Koramco PPFA Real Estate Investment LLC',
							children: null,
						},
					],
				},
				{
					value: '702',
					label: 'Singapore',
					children: [
						{
							value: '2747',
							label: 'PPFA Korea I  PBE',
							children: null,
						},
						{
							value: '2752',
							label: 'PPFA Korea II PBE',
							children: null,
						},
					],
				},
			],
		},
		{
			value: '2',
			label: 'OFI',
			children: [
				{
					value: '392',
					label: 'Japan',
					children: [
						{
							value: '58852',
							label: 'ACL Japan',
							children: null,
						},
						{
							value: '27352',
							label: 'G.K PPFA Japan I',
							children: null,
						},
						{
							value: '27931',
							label: 'G.K PPFA Japan III',
							children: null,
						},
						{
							value: '2763',
							label: 'GK Ichikawa Konodai Yamato Chuo Development Project',
							children: null,
						},
						{
							value: '27771',
							label: 'Ippan Shadan Hojin PPFA',
							children: null,
						},
						{
							value: '27282',
							label: 'PPFA Japan I TMK',
							children: null,
						},
						{
							value: '27292',
							label: 'PPFA Japan II TMK',
							children: null,
						},
						{
							value: '2730',
							label: 'PPFA Japan III TMK',
							children: null,
						},
						{
							value: '27321',
							label: 'PPFA Japan LPS',
							children: null,
						},
						{
							value: '2733',
							label: 'PPFA Pref Manager Pte. (Japan Branch)',
							children: null,
						},
						{
							value: '27672',
							label: 'Ashiya Holding TMK',
							children: null,
						},
						{
							value: '27651',
							label: 'Echigo Holding TMK',
							children: null,
						},
						{
							value: '2778',
							label: 'G8 Japan GK Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '27802',
							label: 'G8 Japan LPS',
							children: null,
						},
						{
							value: '2779',
							label: 'G8 Japan Pref Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '27662',
							label: 'G8 Shintomicho II TMK',
							children: null,
						},
						{
							value: '27721',
							label: 'GK G8 Ashiya',
							children: null,
						},
						{
							value: '27712',
							label: 'GK G8 Shinkiba',
							children: null,
						},
						{
							value: '27732',
							label: 'GK G8 Tatsumi',
							children: null,
						},
						{
							value: '27812',
							label: 'Ippan Shadan Hojin G8',
							children: null,
						},
						{
							value: '27681',
							label: 'Tsujido Holding TMK',
							children: null,
						},
						{
							value: '2775',
							label: 'G9 Edogawabashi TMK',
							children: null,
						},
						{
							value: '2782',
							label: 'G9 Japan GK Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '27691',
							label: 'G9 Japan I TMK',
							children: null,
						},
						{
							value: '27861',
							label: 'G9 Japan II TMK',
							children: null,
						},
						{
							value: '2770',
							label: 'G9 Japan III TMK',
							children: null,
						},
						{
							value: '27892',
							label: 'G9 Japan IV TMK',
							children: null,
						},
						{
							value: '27842',
							label: 'G9 Japan LPS',
							children: null,
						},
						{
							value: '2783',
							label: 'G9 Japan Pref Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '27741',
							label: 'GK G9 Japan I',
							children: null,
						},
						{
							value: '27851',
							label: 'Ippan Shadan Hojin G9',
							children: null,
						},
						{
							value: '2787',
							label: 'Ryukyu Hotel Management KK',
							children: null,
						},
					],
				},
			],
		},
		{
			value: '3',
			label: 'OFII',
			children: [
				{
					value: '3921',
					label: 'Japan',
					children: [
						{
							value: '58851',
							label: 'ACL Japan',
							children: null,
						},
						{
							value: '2735',
							label: 'G.K PPFA Japan I',
							children: null,
						},
						{
							value: '27322',
							label: 'G.K PPFA Japan III',
							children: null,
						},
						{
							value: '27632',
							label: 'GK Ichikawa Konodai Yamato Chuo Development Project',
							children: null,
						},
						{
							value: '27772',
							label: 'Ippan Shadan Hojin PPFA',
							children: null,
						},
						{
							value: '27283',
							label: 'PPFA Japan I TMK',
							children: null,
						},
						{
							value: '27293',
							label: 'PPFA Japan II TMK',
							children: null,
						},
						{
							value: '27301',
							label: 'PPFA Japan III TMK',
							children: null,
						},
						{
							value: '27323',
							label: 'PPFA Japan LPS',
							children: null,
						},
						{
							value: '27331',
							label: 'PPFA Pref Manager Pte. (Japan Branch)',
							children: null,
						},
						{
							value: '2767',
							label: 'Ashiya Holding TMK',
							children: null,
						},
						{
							value: '27652',
							label: 'Echigo Holding TMK',
							children: null,
						},
						{
							value: '27781',
							label: 'G8 Japan GK Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '2780',
							label: 'G8 Japan LPS',
							children: null,
						},
						{
							value: '27791',
							label: 'G8 Japan Pref Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '2766',
							label: 'G8 Shintomicho II TMK',
							children: null,
						},
						{
							value: '27722',
							label: 'GK G8 Ashiya',
							children: null,
						},
						{
							value: '27711',
							label: 'GK G8 Shinkiba',
							children: null,
						},
						{
							value: '27733',
							label: 'GK G8 Tatsumi',
							children: null,
						},
						{
							value: '2781',
							label: 'Ippan Shadan Hojin G8',
							children: null,
						},
						{
							value: '2768',
							label: 'Tsujido Holding TMK',
							children: null,
						},
						{
							value: '27752',
							label: 'G9 Edogawabashi TMK',
							children: null,
						},
						{
							value: '27821',
							label: 'G9 Japan GK Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '2769',
							label: 'G9 Japan I TMK',
							children: null,
						},
						{
							value: '27862',
							label: 'G9 Japan II TMK',
							children: null,
						},
						{
							value: '27702',
							label: 'G9 Japan III TMK',
							children: null,
						},
						{
							value: '2789',
							label: 'G9 Japan IV TMK',
							children: null,
						},
						{
							value: '27841',
							label: 'G9 Japan LPS',
							children: null,
						},
						{
							value: '27831',
							label: 'G9 Japan Pref Manager Pte Japan Branch',
							children: null,
						},
						{
							value: '2774',
							label: 'GK G9 Japan I',
							children: null,
						},
						{
							value: '27852',
							label: 'Ippan Shadan Hojin G9',
							children: null,
						},
						{
							value: '27872',
							label: 'Ryukyu Hotel Management KK',
							children: null,
						},
					],
				},
			],
		},
	];



	const [isnew, setInsew] = React.useState(false);
	const [isAmend, setIsAmend] = React.useState(false);

	const handleNewToggleChange = React.useCallback(
		(event: any, checked: any) => {
			setInsew(checked);
		},
		[]
	);

	const handleAmendToggleChange = React.useCallback(
		(event: any, checked: any) => {
			setIsAmend(checked);
		},
		[]
	);

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
								text={personaName}
								imageAlt={personaName}
								hidePersonaDetails={true}
								size={PersonaSize.size100}
								presence={typePersona}
								presenceTitle={contactDetail?.profile?.type}
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
								<div style={companyNameDisplayStyle}>
									{/* <RhfTextField
										control={control}
										name="companyName"
										styles={largetTextFieldStyle}
										placeholder="Name"
									/> */}
								</div>
								<div style={nameDisplayStyle}>
									{/* <RhfTextField
										control={control}
										name="name"
										styles={largetTextFieldStyle}
										placeholder="Name"
									/> */}
								</div>
								{/* <Stack.Item> */}
								{/* <Dropdown
									multiSelect
									options={contactDetail.category}
									selectedKeys={selectedCatItems}
									placeholder="Category"
									// styles={dropwDownFieldCatStyle(myThemeContext)}
									// onChange={onCategoryChange}
									dropdownWidth={300}
								/> */}
								<h1>{data?.name}</h1>
								{/* </Stack.Item> */}
								<Stack horizontal>
									{isIndividualContact && (
										<>
											{/* <Stack.Item
												styles={stackTextStyle(myThemeContext)}
												// className={
												// 	ContactDetailContentsparentNameStyles.parentName
												// }
											>
												{parentContactName}
											</Stack.Item> */}
											{/* <Label styles={labelstackTextStyle(myThemeContext)}>
												<Text variant={'small'}>{parentContactName}</Text>
											</Label> */}
											<div style={{ width: '100px', marginTop: '5px' }}>
												<CommandBar
													className={`parentSelectionDropdown ${isEditVisible == true ? 'editVisible' : ''
														}`}
													onMouseEnter={() => {
														setIsEditVisible(true);
													}}
													onMouseLeave={() => {
														setIsEditVisible(false);
													}}
													items={[
														{
															key: 'parentContact',
															text:
																parentContactName == null
																	? 'Select parent'
																	: parentContactName,
															iconProps: {
																iconName:
																	parentContactName == null ? '' : 'Edit',
															},
															subMenuProps: {
																onDismiss: () => {
																	setIsEditVisible(false);
																},
																items: [
																	{
																		key: 'searchParent',
																		text: 'Contact Search',
																		// onRender: () => {
																		// 	setIsEditVisible(true);
																		// 	return (
																		// 		<ContactSearch
																		// 			selectContact={setParentContact}
																		// 			selectionMode={SelectionMode.single}
																		// 			categoryType={
																		// 				'CorporationContactCategory'
																		// 			}
																		// 			buttonText="Assign parent"
																		// 		/>
																		// 	);
																		// },
																	},
																],
															},
															buttonStyles: {
																root: {
																	background: 'transparent',
																	fontSize: '12px',
																	height: '10px',
																	padding: '0 0 15px 0 !important',
																	// color: "#4285f4",
																	marginTop: '3px',
																},
																rootHovered: {
																	background: 'transparent',
																	// color: "#4285f4",
																},
																rootFocused: {
																	background: 'transparent',
																	// color: "#4285f4",
																},
																rootPressed: {
																	background: 'transparent',
																	// color: "#4285f4",
																},
																rootExpanded: {
																	background: 'transparent',
																	// color: "#4285f4",
																},
																rootExpandedHovered: {
																	background: 'transparent',
																	// color: "#4285f4",
																},
															},
														},
													]}
													ariaLabel="Modal Commandbar"
													styles={contactDetailContentsParentNameStyle}
												/>
											</div>
										</>
									)}
								</Stack>
							</span>
						</Stack.Item>
					</Stack>
				</Stack.Item>
				<Stack.Item>
					<Stack horizontal>
						{/* <CommandBar
							className="ms-actionbar"
							items={_SubmitForApproval}
							ariaLabel="Modal Commandbar"
							styles={submitCommandBar}
						// style={{ minWidth: "200px" }}
						/> */}
						{isPopUp == true && (
							<>
								<IconButton
									id="btnFullScreen"
									onClick={() => setFullScreen((preVal: any) => !preVal)}
									styles={contactDetailContentsiconButtonStyles(myThemeContext)}
									iconProps={fullScreen ? screenInPopup : fullScreenIcon}
									ariaLabel="Fullscreen popup modal"
								/>
								<IconButton
									styles={contactDetailContentsiconButtonStyles(
										myThemeContext,
										'red'
									)}
									iconProps={cancelIcon}
									ariaLabel="Close popup modal"
									onClick={handleHideModel}
								/>
							</>
						)}
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
										themeName == 'Light'
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
													checked={isAmend}
													onChange={handleAmendToggleChange}
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
												<RhfTextField
													control={control}
													name="StartDate"
													styles={textFieldStyle}
												/>
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
											style={industryGroupDisplayStyle}>
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
											style={industryDisplayStyle}>
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
								{/* <Scrollbars
									autoHide
									autoHeightMax={"50%"}
									autoHideTimeout={1000}>
						
								</Scrollbars> */}
							</Stack.Item>
						</div>
						{/* </Stack> */}
					</PivotItem>
					{/* Action Tab */}

					{/* Market Access */}
					{!isIndividualContact &&
						(isNew ? null : (
							<PivotItem
								headerText={
									'Market Access'
								}
								headerButtonProps={{
									disabled: isNew,
								}}
								itemKey="1">
								<CommandBar
									className="ms-actionbar"
									items={_items}
									ariaLabel="Modal Commandbar"
									style={contactDetailContentsCommandBarDiv}
								/>
								<div className="pt-10 pb-10">
									<Stack.Item
										className={
											fullScreen
												? contentStyles.tileListContentFull
												: contentStyles.tileListContent
										}>
										<div
											className={
												themeName == 'Light'
													? 'customScrollbar'
													: 'customScrollbarDark'
											}>
											<div className="ms-Grid" dir="ltr">
												<div className="ms-Grid-row">
													{contactDetail.users &&
														contactDetail.users.length > 0 ? (
														contactDetail.users.map((item: any) => (
															<div
																className="ms-Grid-col"
																style={contactDetailContestsCardWidth}>
																<div
																	className={
																		themeName == 'Light'
																			? 'personaCard personaCardLight'
																			: 'personaCard personaCardDark'
																	}>
																	<Stack
																		horizontal
																		horizontalAlign="space-between">
																		<Persona
																			text={item.englishName}
																			secondaryText={item.contactCategoryName}
																			tertiaryText={item.parentContactName}
																			presence={
																				item.type == 'Individual'
																					? PersonaPresence.online
																					: PersonaPresence.busy
																			}
																			presenceTitle={item.type}
																			size={PersonaSize.size48}
																			onRenderPrimaryText={(
																				props?: IPersonaProps
																			) => (
																				<Link
																					style={{ textDecoration: 'none' }}
																					onMouseDown={(e) =>
																						handleContactCodeClick(
																							e,
																							item.code,
																							item.contactActionType
																						)
																					}>
																					{item.englishName}
																				</Link>
																			)}
																		/>
																		{/* </Stack.Item>
																		<Stack.Item> */}
																		<Stack
																			horizontalAlign="end"
																			verticalAlign="space-between">
																			<Icon
																				className="deleteIcon"
																				iconName={
																					item.contactCategoryCode != 'child'
																						? 'delete'
																						: 'Contact'
																				}
																				onClick={() => removeContact(item.code)}
																			/>
																			<Icon
																				style={contactDetailContentsIcon(
																					myThemeContext
																				)}
																				iconName={
																					item.type == 'Individual'
																						? 'Contact'
																						: 'ConnectContacts'
																				}
																			/>
																		</Stack>
																	</Stack>
																</div>
															</div>
														))
													) : (
														// <NoRecords
														// 	message={t('noRecordFound').toString()}
														// />
														<h1>No Content</h1>
													)}
												</div>
											</div>
										</div>
										{/* <Scrollbars
									autoHide
									autoHeightMax={"50%"}
									autoHideTimeout={1000}>
								
								</Scrollbars> */}
									</Stack.Item>
								</div>
							</PivotItem>
						))}
					{/* Market Access */}

					{/* Access */}
					{isNew ? null : (
						<PivotItem
							headerText={
								'Access'
							}
							// itemCount={contactDetail.banks.length}

							itemKey="2">
							<Stack horizontal horizontalAlign="end">
								<CommandBar
									className="ms-actionbar"
									items={baItems}
									ariaLabel="Modal Commandbar"
									style={contactDetailContentsCommandBarDiv1}
								/>
							</Stack>
							<div className="pt-10 pb-10">
								<Stack.Item
									className={
										fullScreen
											? contentStyles.tileListContentFull
											: contentStyles.tileListContent
									}>
									<div
										className={
											themeName == 'Light'
												? 'customScrollbar'
												: 'customScrollbarDark'
										}>
										<div className="ms-Grid" dir="ltr">
											<div className="ms-Grid-row">
												{contactDetail.banks &&
													contactDetail.banks.length > 0 ? (
													contactDetail.banks.map((item: any) => (
														<div
															className="ms-Grid-col"
															style={contactDetailContestsCardWidth}>
															<div
																className={
																	themeName == 'Light'
																		? 'personaCard personaCardLight'
																		: 'personaCard personaCardDark'
																}>
																<Stack
																	horizontal
																	horizontalAlign="space-between">
																	<Persona
																		imageUrl={'/img/' + item.bankCode + '.png'}
																		text={item.accountNumber}
																		secondaryText={item.name}
																		tertiaryText={
																			item.bankName +
																			'(' +
																			item.branchName +
																			')'
																		}
																		imageAlt={item.bankName}
																		size={PersonaSize.size48}
																		onRenderInitials={(
																			props?: IPersonaProps
																		) => <Icon iconName={'BankSolid'} />}
																		onRenderPrimaryText={(
																			props?: IPersonaProps
																		) => (
																			<Link
																				style={{ textDecoration: 'none' }}
																				onMouseDown={(e) =>
																					handleBankAccountClick(
																						e,
																						item.id,
																						item.accountActionType
																					)
																				}>
																				{props?.text}
																			</Link>
																		)}
																	/>
																	<Stack
																		horizontalAlign="end"
																		verticalAlign="space-between">
																		<Icon
																			className="deleteIcon"
																			iconName={
																				item.contactCategoryCode != 'child'
																					? 'delete'
																					: 'Contact'
																			}
																			onClick={() => removeContact(item.code)}
																		/>
																	</Stack>
																</Stack>
															</div>
														</div>
													))
												) : (
													// <NoRecords message={t('noRecordFound').toString()} />
													<h1>No Content</h1>
												)}
											</div>
										</div>
									</div>
									{/* <Scrollbars
									autoHide
									autoHeightMax={"50%"}
									autoHideTimeout={1000}>
								
								</Scrollbars> */}
								</Stack.Item>
							</div>
						</PivotItem>
					)}

					{/* Access */}
					{/* Access Rights */}
					{isIndividualContact && moduleArray.length > 0 ? (
						<PivotItem headerText='fundAccess' itemKey="3">
							<div className="pt-5">
								<Stack.Item
									className={
										fullScreen
											? contentStyles.tileListContentFull
											: contentStyles.tileListContent
									}>
									<Stack
										horizontal
										horizontalAlign="space-between"
										style={contactDetailContentsPivotItem}>
										<Stack.Item className="personaEditSidebar">
											<Stack styles={contactDetailContentsstackStyles}>
												{selectedContactId !== 'new' ? (
													<ActionButton
														iconProps={addFriendIcon}
														allowDisabledFocus>
														{contactDetail?.profile?.userName}
													</ActionButton>
												) : (
													<Stack horizontal tokens={Gap10Token}>
														<Icon
															style={contactDetailContentsUnfollowedIcon}
															iconName="UserFollowed"></Icon>
														{/* <RhfTextField
															control={control}
															name="userName"
															styles={userNameFieldStyle}
															placeholder="User Name"
														/> */}
													</Stack>
												)}
												{/* <Nav
													styles={navStyles}
													// groups={navLinkGroups}
													selectedKey={selectedNavKey}
												/> */}
											</Stack>
										</Stack.Item>
										<Stack.Item
											hidden={!isModuleRightsOpen}
											style={contactDetailContentsHiddenModuleRight}>
											<Stack
												tokens={Gap5Token}
												className="contactCol28 mb-20"
												horizontal
												verticalAlign="center"
												horizontalAlign="space-between">
												<Stack.Item
													className="medium text-truncate"
													style={contactDetailContentsModuleRight(
														myThemeContext
													)}>
													<Text variant={'small'}>
														moduleRights
													</Text>
												</Stack.Item>
												<Stack.Item className="medium text-medium text-truncate">
													<ActionButton
														style={{ color: 'red', cursor: 'pointer' }}
														onClick={() => setIsRoleChecked([])}>
														removeAllPrivileges
													</ActionButton>
												</Stack.Item>
											</Stack>

											<Stack wrap horizontal className="contactCol30">
												<Stack tokens={Gap5Token} className="contactCol29">
													<Stack.Item className="medium text-medium text-truncate">
														<Text variant={'small'}>
															modal
														</Text>
													</Stack.Item>
												</Stack>
												<Stack tokens={Gap5Token} className="contactCol31">
													<Stack.Item className="medium text-medium text-truncate">
														<Text variant={'small'}>
															submitter
														</Text>
													</Stack.Item>
												</Stack>
												<Stack tokens={Gap5Token} className="contactCol31">
													<Stack.Item className="medium text-medium text-truncate">
														<Text variant={'small'}>
															reviewer
														</Text>
													</Stack.Item>
												</Stack>
												<Stack tokens={Gap5Token} className="contactCol31">
													<Stack.Item className="medium text-medium text-truncate">
														<Text variant={'small'}>
															approver
														</Text>
													</Stack.Item>
												</Stack>
												<Stack tokens={Gap5Token} className="contactCol31">
													<Stack.Item className="medium text-medium text-truncate">
														<Text variant={'small'}>
															admin
														</Text>
													</Stack.Item>
												</Stack>
											</Stack>
											{/* <Scrollbars
												autoHide
												autoHeightMax={"50%"}
												autoHideTimeout={1000}>
												
											</Scrollbars> */}
											<div
												className={
													themeName == 'Light'
														? 'customScrollbar'
														: 'customScrollbarDark'
												}>
												{moduleArray && moduleArray.length > 0 ? (
													moduleArray.map((item: any) => (
														<Stack
															key={item.id}
															wrap
															horizontal
															className="contactCol30">
															<Stack
																tokens={Gap5Token}
																className="contactCol29">
																<Stack.Item className="text-medium">
																	<Text variant={'small'}>{item.name}</Text>
																</Stack.Item>
															</Stack>
															<Stack
																tokens={Gap5Token}
																className="contactCol31">
																<Checkbox
																	id={item.id + 'Submitter'}
																	checked={
																		isRoleChecked != null
																			? isRoleChecked.includes(
																				item.id + 'Submitter'
																			)
																			: false
																	}
																	onChange={onRoleChange}
																	styles={
																		contactDetailContentsStyles
																	}></Checkbox>
															</Stack>
															<Stack
																tokens={Gap5Token}
																className="contactCol31">
																<Checkbox
																	id={item.id + 'Reviewer'}
																	// checked={
																	// 	isRoleChecked != null
																	// 		? isRoleChecked.includes(
																	// 			item.id + 'Reviewer'
																	// 		)
																	// 		: ST_TrueFalseBlank
																	// }
																	onChange={onRoleChange}
																	styles={
																		contactDetailContentsStyles
																	}></Checkbox>
															</Stack>
															<Stack
																tokens={Gap5Token}
																className="contactCol31">
																<Checkbox
																	id={item.id + 'Approver'}
																	checked={
																		isRoleChecked != null
																			? isRoleChecked.includes(
																				item.id + 'Approver'
																			)
																			: false
																	}
																	onChange={onRoleChange}
																	styles={
																		contactDetailContentsStyles
																	}></Checkbox>
															</Stack>
															<Stack
																tokens={Gap5Token}
																className="contactCol31">
																<Checkbox
																	id={item.id + 'Admin'}
																	checked={
																		isRoleChecked != null
																			? isRoleChecked.includes(
																				item.id + 'Admin'
																			)
																			: false
																	}
																	onChange={onRoleChange}
																	styles={
																		contactDetailContentsStyles
																	}></Checkbox>
															</Stack>
														</Stack>
													))
												) : (
													// <NoRecords message={t('noRecordFound').toString()} />
													<h1>No record</h1>
												)}
											</div>
										</Stack.Item>
										<Stack.Item
											hidden={isModuleRightsOpen}
											style={contactDetailContentsHiddenModuleRight}>
											<Stack
												tokens={Gap5Token}
												className="contactCol28 mb-20"
												horizontal
												verticalAlign="center"
												horizontalAlign="space-between">
												<Stack.Item
													className="medium text-truncate"
													style={contactDetailContentsModuleRight(
														myThemeContext
													)}>
													<Text variant={'small'}>
														fundAccess
													</Text>
													<Stack className="mt-10" horizontal>
														<Checkbox
															styles={{
																text: {
																	fontSize: '12px',
																},
																checkbox: {
																	width: '18px',
																	height: '18px',
																},
															}}
															label={'Same as parent'}
														/>
													</Stack>
													<Stack style={{ marginTop: '10px' }}>
														{/* <CheckboxTree
															nodes={accessRightsData as any}
															showNodeIcon={false}
															checked={checkedtree}
															expanded={expandedcheck}
															// onCheck={(checkedtree) =>
															// 	setcheckedtree(checkedtree)
															// }
															// onExpand={(expandedcheck) =>
															// 	setcheckExpanded(expandedcheck)
															// }
														/> */}
													</Stack>
												</Stack.Item>
											</Stack>
										</Stack.Item>
									</Stack>
								</Stack.Item>
							</div>
						</PivotItem>
					) : null}
				</Pivot>
			</div>
			{/* {isIndividualContact && (
				<TaskDelegation
					showModal={showModal}
					isModalOpen={isModalOpen}
					hideModal={hideModal}
				/>
			)} */}
		</div>
	);
}
