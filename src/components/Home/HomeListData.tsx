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
  CommandBar,
  IconButton,
  IIconProps,
}
  from '@fluentui/react';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { contactDetailContentsiconButtonStyles, neutralColorsGray100, themePrimaryOverFlowItems, } from '../../styles/ContactStyles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Gap5Token, }
  from '../../styles/SharedStyles';
import { useTheme } from '../../Context/ThemeContext';

import { dropwDownFieldStyle, textFieldStyle, }
  from '../shared/CTextField';
import { RhfTextField } from '../shared/RhfTextField';
import { RhfDropdown } from '../shared/RhfDropdown';
// const stackTokens: IStackTokens = { childrenGap: 10 };



import { useBoolean } from '@fluentui/react-hooks';
import { useCallback, useEffect, useState } from 'react';
import { getAllApplicationAccess, getAllMarketAccess, getLineManagerDropdown, getOfficeDropdown, getOneUser, getPermissionDropdown, saveUserData } from '../../services/Home.service';
import { useParams } from 'react-router-dom';
const fullScreenIcon: IIconProps = { iconName: 'FullScreen' };
const screenInPopup: IIconProps = { iconName: 'BackToWindow' };
const cancelIcon: IIconProps = { iconName: 'Cancel' };

export interface IHomeProps {
  contentStyles: any;
  classNames: any;
  sectionStackTokens: any;
  handleHideModel: any;
  setContactModifySuccess?: any;
  isPopUp?: boolean;
  fullScreen?: boolean;
  setFullScreen?: any;
  activeUser?: any;
  data?: any;
}

const initialState = [
  {
    requestId: null,
    userRequestType: "",
    requestor: "",
    firstName: "fvdfv",
    lastName: "",
    startDate: "",
    office: "",
    email: "",
    lineManagerId: "",
    permissionGroupId: "",
    webApprovingManagerId: "",
    training: false,
    trainingRemarks: "",
    comment: "",
    marketAccess: [],
    accesses: []
  }
];


export default function HomeListData({
  contentStyles,
  classNames,
  sectionStackTokens,
  fullScreen,
  isPopUp,
  handleHideModel,
  setFullScreen,
  data,
  activeUser
}: IHomeProps) {
  let { selectedUserId } = useParams<any>();
  // console.log("activeUser", activeUser.requestId);
  if (selectedUserId == undefined) selectedUserId = activeUser?.requestId;
  const { handleSubmit, control, setValue } = useForm<
    any,
    any
  >({ reValidateMode: 'onSubmit', mode: 'all' });

  console.log("selectedUserId", selectedUserId);
  const myThemeContext = React.useContext(ThemeContext);
  const themeName = useTheme().themeName;
  const [isnew, setInsew] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState(0);
  const appDisptach = useAppDispatch();
  const [selectedValueUserRequestType, setSelectedValueUserRequestType] = useState('New');
  const [isIndividualUser, setIndividualUser] = useState<any>("");
  // const [userDetail, setUserDetail] = useState<any>(initialState);
  const [isNew, setIsNew] = useState<boolean>(false);
  const _onChangeUserRequestType = () => {
    const newValue = selectedValueUserRequestType === 'New' ? 'Amend' : 'New';
    setSelectedValueUserRequestType(newValue);
  };
  const [userDetail, setUserDetail] = useState<any>({
    profile: [],
    office: [],
    LineManager: [],
    Permission: [],
    MarketAccess: [],
    ApplicationAccess: [],
  });

  const [selectedValueTraining, setSelectedValueTraining] = useState(true);

  const _onChangeTraining = () => {
    const newValue = selectedValueTraining === true ? false : true;
    setSelectedValueTraining(newValue);
  };

  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date: any) => {
    const formattedDate = date.toISOString().split('T')[0];
    setStartDate(formattedDate);
  };

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


  const setFormValues = () => {
    if (userDetail && userDetail.profile) {
      Object.keys(userDetail.profile).map((item) => {
        setValue(item, userDetail.profile[item]);
      });
      console.log("userDetail.profile", userDetail.profile);
      // const fName = userDetail.profile.firstName;
      // const lName = userDetail.profile.lastName;
      // setValue('firstName', fName);
    }
  }

  useEffect(() => {
    setFormValues();
    if (selectedUserId !== 'new') {
      setIsNew(false);
    } else {
      setIsNew(true);
    }
  }, [userDetail.profile]);

  useEffect(() => {
    if (selectedUserId) {
      setIndividualUser(selectedUserId);
      initData();
    }
  }, [selectedUserId]);

  useEffect(()=>{
    async function APIcall(){
      let Office = await getOfficeDropdown();
      let LineManager = await getLineManagerDropdown();
      let Permission = await getPermissionDropdown();
      let MarketAccess = await getAllMarketAccess();
     let ApplicationAccess = await getAllApplicationAccess();
     let officetext;
     let OfficeDropdown: any[] = [];
     Office.Data.map((item: any) => {
       officetext = item.name != null ? item.name.split('~~') : item.name;
       OfficeDropdown.push({ key: item.code, text: officetext });
     });
 
     let LineManagertext;
     let LineManagertextDropdown: any[] = [];
     LineManager.Data.map((item: any) => {
       LineManagertext = item.u_NAME != null ? item.u_NAME.split('~~') : item.u_NAME;
       LineManagertextDropdown.push({ key: item.userId, text: LineManagertext });
     });
 
     let Permissiontext;
     let PermissiontextDropdown: any[] = [];
     Permission.Data.map((item: any) => {
       Permissiontext = item.groupName != null ? item.groupName.split('~~') : item.groupName;
       PermissiontextDropdown.push({ key: item.groupId, text: Permissiontext });
     });
 
     setUserDetail((preVal: any) => {
      return {
        office: OfficeDropdown,
        LineManager: LineManagertextDropdown,
        Permission: PermissiontextDropdown,
        MarketAccess: MarketAccess,
        ApplicationAccess: ApplicationAccess
      };
    });
    }
    APIcall();
  },[])

  const initData = async () => {
    let Office = await getOfficeDropdown();
    let LineManager = await getLineManagerDropdown();
    let Permission = await getPermissionDropdown();
    // let MarketAccess = await getAllMarketAccess();
    // let ApplicationAccess = await getAllApplicationAccess();

    let officetext;
    let OfficeDropdown: any[] = [];
    Office.Data.map((item: any) => {
      officetext = item.name != null ? item.name.split('~~') : item.name;
      OfficeDropdown.push({ key: item.code, text: officetext });
    });

    let LineManagertext;
    let LineManagertextDropdown: any[] = [];
    LineManager.Data.map((item: any) => {
      LineManagertext = item.u_NAME != null ? item.u_NAME.split('~~') : item.u_NAME;
      LineManagertextDropdown.push({ key: item.userId, text: LineManagertext });
    });

    let Permissiontext;
    let PermissiontextDropdown: any[] = [];
    Permission.Data.map((item: any) => {
      Permissiontext = item.groupName != null ? item.groupName.split('~~') : item.groupName;
      PermissiontextDropdown.push({ key: item.groupId, text: Permissiontext });
    });

    setUserDetail({ ...initialState });
    if (selectedUserId) {
      let contactProfile: any = await getOneUser(selectedUserId);

      setUserDetail((preVal: any) => {
        return {
          ...preVal,
          profile: contactProfile,
          office: OfficeDropdown,
          LineManager: LineManagertextDropdown,
          Permission: PermissiontextDropdown,
          // MarketAccess: MarketAccess,
          // ApplicationAccess: ApplicationAccess
        };
      });
    }
  };

  const [showManagerInformationAction, { toggle: toggleShowManagerInformationAction }] = useBoolean(false);
  const [showManagerInformationAccess, { toggle: toggleShowManagerInformationAccess }] = useBoolean(false);

  const handleCountryToggleChange = (dataId: any, dbName: any) => {
    const dataItem = userDetail.MarketAccess?.Data?.find((data: any) => data.id === dataId);
    const countryItem = dataItem?.region[0].country.find((country: any) => country.dbName === dbName);
    if (countryItem) {
      countryItem.checked = !countryItem.checked;
    }
  };

  const handleToggleChangeAccess = (dataId: any, value: any) => {
    const dataItem = userDetail.ApplicationAccess?.Data?.find((data: any) => data.id === dataId);
    const valueItem = dataItem?.key[0].valuedata.find((valuedata: any) => valuedata.value === value);
    if (valueItem) {
      valueItem.checked = !valueItem.checked;
    }
  };


  const submitForm = () => {
    try {
      handleSubmit(async (data) => {
        const marketAccess = userDetail.MarketAccess?.Data?.map((data: any) => {
          const regionName = data.region[0].name;
          const countries = data.region[0].country
            .filter((country: any) => country.checked)
            .map((country: any) => ({
              country: country.dbName,
              firstApproval: "myfirst Approval",
              secondApproval: "myfirst Approval",
              permissionGroup: "My permission group"
            }));
        
          if (countries.length === 0) {
            return null; 
          }
        
          return { regionName, countries };
        }).filter(Boolean) || [];
        

        const accesses = userDetail.ApplicationAccess?.Data?.map((data:any) => {
          const key = data.key[0].name;
          const accessDetailsDtos = data.key[0].valuedata
            .filter((valuedata:any) => valuedata.checked)
            .map((valuedata:any) => ({
              value: valuedata.value,
              description: valuedata.description
            }));
        
          if (accessDetailsDtos.length === 0) {
            return null; 
          }
        
          return { key, accessDetailsDtos };
        }).filter(Boolean) || [];
        
        let postData = {
          userRequestType: selectedValueUserRequestType,
          requestor: data.requestor ? data.requestor : "",
          firstName: data.firstName ? data.firstName : "",
          lastName: data.lastName ? data.lastName : "",
          startDate: startDate ? startDate : null,
          office: data.office ? data.office : "",
          email: data.email ? data.email : "",
          lineManagerId: data.lineManagerId ? data.lineManagerId.toString() : null,
          permissionGroupId: data.permissionGroupId ? data.permissionGroupId.toString() : null,
          webApprovingManagerId: data.webApprovingManagerId ? data.webApprovingManagerId : null,
          training: selectedValueTraining,
          trainingRemarks: data.trainingRemarks ? data.trainingRemarks : "",
          comment: data.comment ? data.comment : null,
          marketAccess,
          accesses,
        };

        let apidata = await appDisptach(saveUserData(postData));
        console.log("apidata", apidata);
      })();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 10.5rem)', }}>
      <Stack className={contentStyles.header} horizontal>
        <Stack.Item grow={1}>
          <Stack horizontal>
            <Stack.Item style={{ marginLeft: '10px', }}>
              <Persona hidePersonaDetails={true} size={PersonaSize.size100} />
            </Stack.Item>
            <Stack.Item style={{ marginLeft: '5px', marginTop: '3px', marginBottom: '5px', }} grow={1}>
              <span>
                <div style={{ visibility: 'hidden', height: '0px', width: '0px', }}> <input type="text" /> </div>
                <h1>{data?.name}</h1>
              </span>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal>
            <PrimaryButton className={'mb-20'} onClick={() => submitForm()} text="Submit" />
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
              <Stack.Item className={fullScreen ? contentStyles.tileListContentFull : contentStyles.tileListContent}>
                <div className={themeName === 'Light' ? 'customScrollbar' : 'customScrollbarDark'}>
                  <div>
                    <div className="ms-Grid" dir="ltr">
                      <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                          <div className='pagesubtitle'>
                            <h2>{'Action'}</h2>
                          </div>
                          <div className="switchList">
                            <Stack className={`toggleswichbtn`}> <Toggle
                              inlineLabel
                              onText="New"
                              offText="Amend"
                              defaultChecked={selectedValueUserRequestType === 'New'}
                              onChange={_onChangeUserRequestType}
                            /> </Stack>
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Requestor </label>
                            <RhfTextField control={control} name="requestor" styles={textFieldStyle} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ms-Grid" dir="ltr">
                      <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                          <div className='pagesubtitle'>
                            <h3>{'New User Details'}</h3>
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> First Name </label>
                            <RhfTextField control={control} name="firstName" styles={textFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 msRhfTextField-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Last Name </label>
                            <RhfTextField control={control} name="lastName" styles={textFieldStyle} />
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Email </label>
                            <RhfTextField control={control} name="email" styles={textFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className="formGroup">
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Start Date </label>
                            <DatePicker
                              id="fromDate"
                              placeholder="fromDate"
                              isMonthPickerVisible={true}
                              style={{ marginTop: '5px', color: 'red' }}
                              onSelectDate={handleDateChange}
                              value={startDate ? new Date(startDate) : undefined}
                            />
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Office </label>
                            <RhfDropdown options={userDetail.office} control={control} name="office" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Permission Group </label>
                            <RhfDropdown options={userDetail.Permission} control={control} name="permissionGroupId" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Line Manager </label>
                            <RhfDropdown options={userDetail.LineManager} control={control} name="lineManagerId" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Other</label>
                            <div className="switchList">
                              <Stack className={`toggleswichbtn`}> <Toggle inlineLabel onText="Yes" offText="No" checked={showManagerInformationAction} onChange={toggleShowManagerInformationAction} /> </Stack>
                            </div>
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        {showManagerInformationAction &&
                          <div className="ms-Grid" dir="ltr">
                            <div className="newManagerInformationSection" style={neutralColorsGray100(myThemeContext)}>
                              <div className="ms-Grid-row">
                                <div className="ms-Grid-col ms-lg12 ms-xl12">
                                  <h3>New Manager information</h3>
                                </div>
                                <div className={`clearBoth`}></div>
                                <div className="ms-Grid-col ms-lg12 ms-xl6">
                                  <div className={`formGroup`}>
                                    <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> First Name </label>
                                    <RhfTextField control={control} name="FirstNameother" styles={textFieldStyle} />
                                  </div>
                                </div>
                                <div className="ms-Grid-col ms-lg12 ms-xl6">
                                  <div className={`formGroup`}>
                                    <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Last Name </label>
                                    <RhfTextField control={control} name="LastNameother" styles={textFieldStyle} />
                                  </div>
                                </div>
                                <div className={`clearBoth`}></div>
                                <div className="ms-Grid-col ms-lg12 ms-xl6">
                                  <div className={`formGroup`}>
                                    <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Email </label>
                                    <RhfTextField control={control} name="Emailother" styles={textFieldStyle} />
                                  </div>
                                </div>
                                <div className="ms-Grid-col ms-lg12 ms-xl6">
                                  <div className={`formGroup`}>
                                    <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Office </label>
                                    <RhfDropdown options={options} control={control} name="Officeother" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                                  </div>
                                </div>
                                <div className={`clearBoth`}></div>
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </Stack.Item>
            </div>
          </PivotItem>
          {/* Action Tab */}

          {/* Market Access */}
          <PivotItem headerText={'Market Access'} itemKey="1">
            <div className="pt-10 pb-10">
              <Stack.Item className={fullScreen ? contentStyles.tileListContentFull : contentStyles.tileListContent}>
                <div className={themeName === 'Light' ? 'customScrollbar' : 'customScrollbarDark'}>
                  <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                      <>
                        <Stack wrap horizontal verticalAlign="center">
                          {userDetail.MarketAccess?.Data?.map((data: any) => (
                            <div className="ms-Grid-col ms-sm12 mt-10 mb-10" key={data.id}>
                              <div className="pagesubtitle">
                                <h3>{data.region[0].name}</h3>
                              </div>
                              <div className="toggleswichList">
                                {data.region[0].country.map((country: any) => (
                                  <div className="ms-Grid-col ms-md12 ms-lg6 ms-xl3 mb-20" key={country.dbName}>
                                    <div className="newCardBox" style={{ backgroundColor: themeName == 'Light' ? "#D9D9D9" : "#474645" }}>
                                      <div className="toggleswichListInner">
                                        <Toggle checked={country.checked} onChange={() => handleCountryToggleChange(data.id, country.dbName)} />
                                        <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{country.displayAs}</Label>
                                      </div>
                                      <div className="ms-Grid" dir="ltr">
                                        <div className="ms-Grid-row">
                                          <div className="ms-Grid-col ms-md12 mt-10">
                                            <RhfDropdown options={options} control={control} name="Office" placeholder='First Approval' styles={dropwDownFieldStyle} />
                                          </div>
                                          <div className="ms-Grid-col ms-md12 mt-10">
                                            <RhfDropdown options={options} control={control} name="Office" placeholder='Second Approval' styles={dropwDownFieldStyle} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
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
          <PivotItem headerText='Access' itemKey="2">
            <div className="pt-10 pb-10">
              <Stack.Item className={fullScreen ? contentStyles.tileListContentFull : contentStyles.tileListContent}>
                <div className={themeName === 'Light' ? 'customScrollbar' : 'customScrollbarDark'}>
                  <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                      <>
                        <Stack wrap horizontal verticalAlign="center">
                          {userDetail.ApplicationAccess?.Data?.map((data: any) => (
                            <div className="ms-Grid-col ms-sm12 mt-10 mb-10" key={data.id}>
                              <div className="pagesubtitle">
                                <h3>{data.key[0].name}</h3>
                              </div>
                              <div className="toggleswichList">
                                {data.key[0].valuedata.map((valuedata: any) => (
                                  <div className="ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10" key={valuedata.value}>
                                    <Toggle checked={valuedata.checked} onChange={() => handleToggleChangeAccess(data.id, valuedata.value)} />
                                    <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{valuedata.value}</Label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </Stack>

                        <Stack wrap horizontal verticalAlign="center">
                          <div className={`clearBoth`}></div>
                          <div className="ms-Grid-col ms-lg12 ms-xl6">
                            <div className={`formGroup`}>
                              <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Web Approving Manager</label>
                              <RhfDropdown options={options2} control={control} name="webApprovingManagerId" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-lg12 ms-xl6">
                            <div className="ms-Grid" dir="ltr">
                              <div className="ms-Grid-col ms-lg6">
                                <div className={`formGroup`}>
                                  <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Other</label>
                                  <div className="switchList">
                                    <Stack className={`toggleswichbtn`}>
                                      <Toggle inlineLabel onText="Yes" offText="No" checked={showManagerInformationAccess} onChange={toggleShowManagerInformationAccess} />
                                    </Stack>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-Grid-col ms-lg6">
                                <div className={`formGroup`}>
                                  <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Training</label>
                                  <div className="switchList">
                                    <Stack className={`toggleswichbtn`}> <Toggle inlineLabel onText="Yes" offText="No" defaultChecked onChange={_onChangeTraining} /> </Stack>
                                  </div>
                                </div>
                              </div>
                              <div className={`clearBoth`}></div>
                            </div>
                          </div>
                          <div className={`clearBoth`}></div>
                          {showManagerInformationAccess &&
                            <div className="ms-Grid-col ms-lg12 ms-xl12">
                              <div className="ms-Grid" dir="ltr">
                                <div className="newManagerInformationSection" style={neutralColorsGray100(myThemeContext)}>
                                  <div className="ms-Grid-row">
                                    <div className="ms-Grid-col ms-lg12 ms-xl12">
                                      <h3>New Manager information</h3>
                                    </div>
                                    <div className={`clearBoth`}></div>
                                    <div className="ms-Grid-col ms-lg12 ms-xl6">
                                      <div className={`formGroup`}>
                                        <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> First Name </label>
                                        <RhfTextField control={control} name="FirstNameaccess" styles={textFieldStyle} />
                                      </div>
                                    </div>
                                    <div className="ms-Grid-col ms-lg12 ms-xl6">
                                      <div className={`formGroup`}>
                                        <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Last Name </label>
                                        <RhfTextField control={control} name="LastNameaccess" styles={textFieldStyle} />
                                      </div>
                                    </div>
                                    <div className={`clearBoth`}></div>
                                    <div className="ms-Grid-col ms-lg12 ms-xl6">
                                      <div className={`formGroup`}>
                                        <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Email </label>
                                        <RhfTextField control={control} name="Emailaccess" styles={textFieldStyle} />
                                      </div>
                                    </div>
                                    <div className="ms-Grid-col ms-lg12 ms-xl6">
                                      <div className={`formGroup`}>
                                        <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Office </label>
                                        <RhfDropdown options={options} control={control} name="Officeaccess" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                                      </div>
                                    </div>
                                    <div className={`clearBoth`}></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                          <div className={`clearBoth`}></div>
                          <div className="ms-Grid-col ms-lg12 ms-xl6">
                            <div className={`formGroup`}>
                              <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>if yes, any requirement?</label>
                              <RhfTextField control={control} name="trainingRemarks" styles={textFieldStyle} />
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-lg12 ms-xl6">
                            <div className={`formGroup`}>
                              <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Comment</label>
                              <RhfTextField control={control} name="comment" styles={textFieldStyle} />
                            </div>
                          </div>
                        </Stack>
                      </>
                    </div>
                  </div>
                </div>
              </Stack.Item>
            </div>
          </PivotItem>
          {/* Access */}
        </Pivot >
      </div >
    </div >
  );
}