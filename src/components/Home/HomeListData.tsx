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
import { useAppDispatch } from '../../app/hooks';
import { Gap5Token, }
  from '../../styles/SharedStyles';
import { useTheme } from '../../Context/ThemeContext';

import { dropwDownFieldStyle, textFieldStyle, }
  from '../shared/CTextField';
import { RhfTextField } from '../shared/RhfTextField';
import { RhfDropdown } from '../shared/RhfDropdown';
// const stackTokens: IStackTokens = { childrenGap: 10 };



import { useBoolean } from '@fluentui/react-hooks';
import { useCallback, useState } from 'react';
import { saveUserData } from '../../services/Home.service';

function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
  // console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}

const fullScreenIcon: IIconProps = { iconName: 'FullScreen' };
const screenInPopup: IIconProps = { iconName: 'BackToWindow' };
const cancelIcon: IIconProps = { iconName: 'Cancel' };


export default function HomeListData({
  contentStyles,
  classNames,
  sectionStackTokens,
  fullScreen,
  isPopUp,
  handleHideModel,
  setFullScreen,
  data
}: any) {

  const { handleSubmit, control } = useForm<
    any,
    any
  >({ reValidateMode: 'onSubmit', mode: 'all' });

  const myThemeContext = React.useContext(ThemeContext);
  const themeName = useTheme().themeName;
  const [isnew, setInsew] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState(0);
  const appDisptach = useAppDispatch();
  const [selectedValueUserRequestType, setSelectedValueUserRequestType] = useState('New');

  const _onChangeUserRequestType = () => {
    const newValue = selectedValueUserRequestType === 'New' ? 'Amend' : 'New';
    setSelectedValueUserRequestType(newValue);
  };


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

  const handleNewToggleChange = React.useCallback(
    (event: any, checked: any) => {
      setInsew(checked);
    },
    []
  );

  const [toggleDataAmerica, setToggleDataAmerica] = useState([
    { id: 1, checked: false, label: 'Argentina' },
    { id: 2, checked: false, label: 'Brazil' },
    { id: 3, checked: false, label: 'NADS' },
    { id: 4, checked: false, label: 'VIO' }
  ]);

  const handleToggleChange = useCallback(
    (id: any) => {
      setToggleDataAmerica((prevToggleData) => {
        const updatedToggleData = prevToggleData.map((data) => {
          if (data.id === id) {
            return { ...data, checked: !data.checked };
          }
          return data;
        });
        return updatedToggleData;
      });
    },
    []
  );

  //dont remove handleSubmit function
  // const handleSubmit = () => {
  //   const selectedToggles = toggleDataAmerica.filter((data) => data.checked);
  //   console.log(selectedToggles);
  // };


  const [toggleDataEurope, setToggleDataEurope] = useState([
    { id: 1, checked: false, label: 'Czech' },
    { id: 2, checked: false, label: 'Denmark' },
    { id: 3, checked: false, label: 'Germany' },
    { id: 4, checked: false, label: 'Spain' },
    { id: 5, checked: false, label: 'France' },
    { id: 6, checked: false, label: 'Greece' },
    { id: 7, checked: false, label: 'Hungary' },
    { id: 8, checked: false, label: 'Italy' },
    { id: 9, checked: false, label: 'Netherland' },
    { id: 10, checked: false, label: 'United Kingdom' },
    { id: 11, checked: false, label: 'Beam (Non-extreme reach company)' },
    { id: 12, checked: false, label: 'Spotgate (Non-extreme reach company)' }
  ]);

  const handleToggleChangeEurope = useCallback(
    (id: any) => {
      setToggleDataEurope((prevToggleData) => {
        const updatedToggleData = prevToggleData.map((data) => {
          if (data.id === id) {
            return { ...data, checked: !data.checked };
          }
          return data;
        });
        return updatedToggleData;
      });
    },
    []
  );


  const [toggleDataMena, setToggleDataMena] = useState([
    { id: 1, checked: false, label: 'Mena' },
    { id: 2, checked: false, label: 'Cloud -EG (Non-extreme reach company)' }
  ]);

  const handleToggleChangeMena = useCallback(
    (id: any) => {
      setToggleDataMena((prevToggleData) => {
        const updatedToggleData = prevToggleData.map((data) => {
          if (data.id === id) {
            return { ...data, checked: !data.checked };
          }
          return data;
        });
        return updatedToggleData;
      });
    },
    []
  );

  const [toggleDataAsiaPacific, setToggleDataAsiaPacific] = useState([
    { id: 1, checked: false, label: 'China' },
    { id: 2, checked: false, label: 'India' },
    { id: 3, checked: false, label: 'Japan' },
    { id: 4, checked: false, label: 'Malaysia' },
    { id: 5, checked: false, label: 'Singapore' },
    { id: 6, checked: false, label: 'Thailand' },
    { id: 7, checked: false, label: 'Australia' },
    { id: 8, checked: false, label: 'New Zealand' }
  ]);

  const handleToggleChangeAsiaPacific = useCallback(
    (id: any) => {
      setToggleDataAsiaPacific((prevToggleData) => {
        const updatedToggleData = prevToggleData.map((data) => {
          if (data.id === id) {
            return { ...data, checked: !data.checked };
          }
          return data;
        });
        return updatedToggleData;
      });
    },
    []
  );

  const [toggleDataFinanceManagement, setToggleDataFinanceManagement] = useState([
    { id: 1, checked: false, label: 'Adstream Holdings Pty Limited' },
    { id: 2, checked: false, label: 'Dormant Cos' },
    { id: 3, checked: false, label: 'Adjustments' },
    { id: 4, checked: false, label: 'Hong Kong (Non-Trading)' },
    { id: 5, checked: false, label: 'The Traffic Bureae Limited (Historical)' },
    { id: 6, checked: false, label: 'Citizen Ltd(UK) (Non-trading)' },
    { id: 7, checked: false, label: 'Portland PMS Ltd (Non-Trading)' },
    { id: 8, checked: false, label: 'Portland PMS Ltd (Non-Trading)' },
    { id: 9, checked: false, label: 'Portland PMS Ltd (Non-Trading)' },
    { id: 10, checked: false, label: 'Pelagon Limited (Non-Trading)' }
  ]);

  const handleToggleChangeFinanceManagement = useCallback(
    (id: any) => {
      setToggleDataFinanceManagement((prevToggleData) => {
        const updatedToggleData = prevToggleData.map((data) => {
          if (data.id === id) {
            return { ...data, checked: !data.checked };
          }
          return data;
        });
        return updatedToggleData;
      });
    },
    []
  );


  const [toggleDataFinance, setToggleDataFinance] = useState([
    { id: 1, label: 'SAP Business One(Client access)', checked: false },
    { id: 2, label: 'SData Transfer Workbench (DTW)', checked: false }
  ]);

  const handleToggleChangeFinance = useCallback(
    (id: any) => {
      setToggleDataFinance((prevToggleData) => {
        const updatedToggleData = prevToggleData.map((data) => {
          if (data.id === id) {
            return { ...data, checked: !data.checked };
          }
          return data;
        });
        return updatedToggleData;
      });
    },
    []
  );

  const [toggleDataReporting, setToggleDataReporting] = useState([
    { id: 1, label: 'Sharperlight Reporting - Finance user', checked: false },
    { id: 2, label: 'Sharperlight Reporting - Web user', checked: false }
  ]);

  const handleToggleChangeReporting = useCallback(
    (id: any) => {
      setToggleDataReporting((prevToggleData) => {
        const updatedToggleData = prevToggleData.map((data) => {
          if (data.id === id) {
            return { ...data, checked: !data.checked };
          }
          return data;
        });
        return updatedToggleData;
      });
    },
    []
  );

  const [toggleDataSAPWEBPORTAL, setToggleDataSAPWEBPORTAL] = useState([
    { id: 1, checked: false, label: 'Open Orders' },
    { id: 2, checked: false, label: 'Rate Cards' },
    { id: 3, checked: false, label: 'Invoice Request' },
    { id: 4, checked: false, label: 'Credit Note Request' },
    { id: 5, checked: false, label: 'Account Manager' },
    { id: 6, checked: false, label: 'Advertiser Manager' },
    { id: 7, checked: false, label: 'Quotation Module' },
    { id: 8, checked: false, label: 'Purchase Order Request' }
  ]);

  const handleToggleChangeSAPWEBPORTAL = useCallback(
    (id: any) => {
      setToggleDataSAPWEBPORTAL((prevToggleData) => {
        const updatedToggleData = prevToggleData.map((data) => {
          if (data.id === id) {
            return { ...data, checked: !data.checked };
          }
          return data;
        });
        return updatedToggleData;
      });
    },
    []
  );

  const [showManagerInformationAction, { toggle: toggleShowManagerInformationAction }] = useBoolean(false);
  const [showManagerInformationAccess, { toggle: toggleShowManagerInformationAccess }] = useBoolean(false);


  const submitForm = () => {
    try {
      handleSubmit(async (data) => {
        const marketAccess = [
          {
            regionName: 'America',
            countries: toggleDataAmerica
              .filter((data) => data.checked)
              .map((data) => ({ country: data.label }))
          },
          {
            regionName: 'Mena',
            countries: toggleDataMena
              .filter((data) => data.checked)
              .map((data) => ({ country: data.label }))
          }
        ];

        const accesses = [
          {
            key: 'Finance',
            accessDetailsDtos: toggleDataFinance
              .filter((data) => data.checked)
              .map((data) => ({
                value: data.label,
                description: 'No description'
              }))
          },
          {
            key: 'Reporting',
            accessDetailsDtos: toggleDataReporting
              .filter((data) => data.checked)
              .map((data) => ({
                value: data.label,
                description: 'No description'
              }))
          }
        ];

        let postData = {
          userRequestType: selectedValueUserRequestType,
          requestor: data.requestor,
          firstName: data.firstName,
          lastName: data.lastName,
          startDate: startDate,
          office: data.office,
          email: data.email,
          lineManagerId: data.lineManagerId,
          permissionGroupId: data.permissionGroupId,
          webApprovingManagerId: data.webApprovingManagerId,
          training: selectedValueTraining,
          trainingRemarks: data.trainingRemarks,
          comment: data.comment,
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
                            <RhfTextField control={control} name="Requestor" styles={textFieldStyle} />
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
                            <RhfDropdown options={options} control={control} name="office" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Permission Group </label>
                            <RhfDropdown options={options2} control={control} name="permissionGroupId" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Line Manager </label>
                            <RhfDropdown options={options2} control={control} name="lineManagerId" placeholder='Select a Value' styles={dropwDownFieldStyle} />
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
                          <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                            <div className='pagesubtitle'>
                              <h3>{'America'}</h3>
                            </div>
                            <div className={`toggleswichList`}>
                              {toggleDataAmerica?.map((data: any) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 mb-20`} key={data.id}>
                                  <div className={`newCardBox`} style={{ backgroundColor: themeName == 'Light' ? " #D9D9D9" : "#474645", }}>
                                    <div className={`toggleswichListInner`}>
                                      <Toggle checked={data.checked} onChange={() => handleToggleChange(data.id)} />
                                      <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                    </div>
                                    <div className="ms-Grid" dir="ltr">
                                      <div className="ms-Grid-row">
                                        <div className='ms-Grid-col ms-md12 mt-10'> <RhfDropdown options={options} control={control} name="Office" placeholder='First Approval' styles={dropwDownFieldStyle} /> </div>
                                        <div className='ms-Grid-col ms-md12 mt-10'> <RhfDropdown options={options} control={control} name="Office" placeholder='Second Approval' styles={dropwDownFieldStyle} /> </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                            <div className='pagesubtitle'>
                              <h3>{'Europe'}</h3>
                            </div>
                            <div className={`toggleswichList`}>
                              {toggleDataEurope.map((data) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 mb-20`} key={data.id}>
                                  <div className={`newCardBox`} style={{ backgroundColor: themeName == 'Light' ? " #D9D9D9" : "#474645", }}>
                                    <div className={`toggleswichListInner `}>
                                      <Toggle checked={data.checked} onChange={() => handleToggleChangeEurope(data.id)} />
                                      <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                    </div>
                                    <div className="ms-Grid" dir="ltr">
                                      <div className="ms-Grid-row">
                                        <div className='ms-Grid-col ms-md12 mt-10'><RhfDropdown options={options} control={control} name="Office" placeholder='First Approval' styles={dropwDownFieldStyle} /></div>
                                        <div className='ms-Grid-col ms-md12 mt-10'><RhfDropdown options={options} control={control} name="Office" placeholder='Second Approval' styles={dropwDownFieldStyle} /></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                            <div className='pagesubtitle'>
                              <h3>{'Mena'}</h3>
                            </div>
                            <div className={`toggleswichList`}>
                              {toggleDataMena.map((data) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 mb-20`} key={data.id}>
                                  <div className={`newCardBox`} style={{ backgroundColor: themeName == 'Light' ? " #D9D9D9" : "#474645", }}>
                                    <div className={`toggleswichListInner`}>
                                      <Toggle checked={data.checked} onChange={() => handleToggleChangeMena(data.id)} />
                                      <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                    </div>
                                    <div className="ms-Grid" dir="ltr">
                                      <div className="ms-Grid-row">
                                        <div className='ms-Grid-col ms-md12 mt-10'><RhfDropdown options={options} control={control} name="Office1" placeholder='First Approval' styles={dropwDownFieldStyle} /></div>
                                        <div className='ms-Grid-col ms-md12 mt-10'><RhfDropdown options={options} control={control} name="Office2" placeholder='Second Approval' styles={dropwDownFieldStyle} /></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                              <div className='pagesubtitle'>
                                <h3>{'Asia-Pacific'}</h3>
                              </div>
                              <div className={`toggleswichList`}>
                                {toggleDataAsiaPacific.map((data) => (
                                  <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 mb-10`} key={data.id}>
                                    <div className={`newCardBox`} style={{ backgroundColor: themeName == 'Light' ? " #D9D9D9" : "#474645", }}>
                                      <div className={`toggleswichListInner`}>
                                        <Toggle checked={data.checked} onChange={() => handleToggleChangeAsiaPacific(data.id)} />
                                        <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                      </div>
                                      <div className="ms-Grid" dir="ltr">
                                        <div className="ms-Grid-row">
                                          <div className='ms-Grid-col ms-md12 mt-10'><RhfDropdown options={options} control={control} name="Office3" placeholder='First Approval' styles={dropwDownFieldStyle} /></div>
                                          <div className='ms-Grid-col ms-md12 mt-10'><RhfDropdown options={options} control={control} name="Office4" placeholder='Second Approval' styles={dropwDownFieldStyle} /></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                              <div className='pagesubtitle'>
                                <h3>{'Finance Management/Dormant/Non Trading Companies'}</h3>
                              </div>
                              <div className={`toggleswichList`}>
                                {toggleDataFinanceManagement.map((data) => (
                                  <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 mb-20`} key={data.id}>
                                    <div className={`newCardBox`} style={{ backgroundColor: themeName == 'Light' ? " #D9D9D9" : "#474645", }}>
                                      <div className={`toggleswichListInner`}>
                                        <Toggle checked={data.checked} onChange={() => handleToggleChangeFinanceManagement(data.id)} />
                                        <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                      </div>
                                      <div className="ms-Grid" dir="ltr">
                                        <div className="ms-Grid-row">
                                          <div className='ms-Grid-col ms-md12 mt-10'><RhfDropdown options={options} control={control} name="Office3" placeholder='First Approval' styles={dropwDownFieldStyle} /></div>
                                          <div className='ms-Grid-col ms-md12 mt-10'><RhfDropdown options={options} control={control} name="Office4" placeholder='Second Approval' styles={dropwDownFieldStyle} /></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
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
                          <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                            <div className='pagesubtitle'>
                              <h3>{'Finance'}</h3>
                            </div>
                            <div className={`toggleswichList`}>
                              {toggleDataFinance.map((data) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                  <Toggle checked={data.checked} onChange={() => handleToggleChangeFinance(data.id)} />
                                  <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                            <div className='pagesubtitle'>
                              <h3>{'Reporting'}</h3>
                            </div>
                            <div className={`toggleswichList`}>
                              {toggleDataReporting.map((data) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                  <Toggle checked={data.checked} onChange={() => handleToggleChangeReporting(data.id)} />
                                  <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                            <div className='pagesubtitle'>
                              <h3>{'SAP WEB PORTAL'}</h3>
                            </div>
                            <div className={`toggleswichList`}>
                              {toggleDataSAPWEBPORTAL.map((data) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                  <Toggle checked={data.checked} onChange={() => handleToggleChangeSAPWEBPORTAL(data.id)} />
                                  <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
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
                                  <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Ohter</label>
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