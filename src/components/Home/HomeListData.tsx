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
import { contactDetailContentsCommandBarDiv, contactDetailContentsiconButtonStyles, neutralColorsGray100, themePrimaryOverFlowItems, } from '../../styles/ContactStyles';
import { Gap5Token, }
  from '../../styles/SharedStyles';
import { useTheme } from '../../Context/ThemeContext';

import { dropwDownFieldStyle, textFieldStyle, }
  from '../shared/CTextField';
import { RhfTextField } from '../shared/RhfTextField';
import { RhfDropdown } from '../shared/RhfDropdown';
// const stackTokens: IStackTokens = { childrenGap: 10 };
import { useNavigate, useLocation } from 'react-router-dom';
import { useBoolean } from '@fluentui/react-hooks';
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

  const { control } = useForm<
    any,
    any
  >({ reValidateMode: 'onSubmit', mode: 'all' });

  const myThemeContext = React.useContext(ThemeContext);
  const themeName = useTheme().themeName;
  const [isnew, setInsew] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState(0);
  const history = useNavigate();
  const location = useLocation();

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
    { id: 1, checked: isnew, onChange: handleNewToggleChange, label: 'Argentina', },
    { id: 2, label: 'Brazil', },
    { id: 3, label: 'NADS', },
    { id: 4, label: 'VIO', },
  ];

  const toggleBtnEurope = [
    { id: 1, checked: isnew, onChange: handleNewToggleChange, label: 'Czech', },
    { id: 2, label: 'Denmark', },
    { id: 3, label: 'Germany', },
    { id: 4, label: 'Spain', },
    { id: 5, label: 'France', },
    { id: 6, label: 'Greece', },
    { id: 7, label: 'Hungary', },
    { id: 8, label: 'Italy', },
    { id: 9, label: 'Netherland', },
    { id: 10, label: 'United Kingdom', },
    { id: 11, label: 'Beam (Non-extreme reach company)', },
    { id: 12, label: 'Spotgate (Non-extreme reach company)', },
  ];

  const toggleDataMena = [
    { id: 1, checked: isnew, onChange: handleNewToggleChange, label: 'Mena', },
    { id: 2, label: 'Cloud -EG (Non-extreme reach company)', },
  ];

  const toggleBtnAsiaPacific = [
    { id: 1, checked: isnew, onChange: handleNewToggleChange, label: 'China', },
    { id: 2, label: 'India', },
    { id: 3, label: 'Japan', },
    { id: 4, label: 'Malaysia', },
    { id: 5, label: 'Singapore', },
    { id: 6, label: 'Thailand', },
    { id: 7, label: 'Australia', },
    { id: 8, label: 'New Zealand', }
  ];

  const toggleBtnFinanceManagement = [
    { id: 1, checked: isnew, onChange: handleNewToggleChange, label: 'Adstream Holdings Pty Limited', },
    { id: 2, label: 'Dormant Cos', },
    { id: 3, label: 'Adjustments', },
    { id: 4, label: 'Hong Kong (Non-Trading)', },
    { id: 5, label: 'The Traffic Bureae Limited (Historical)', },
    { id: 6, label: 'Citizen Ltd(UK) (Non-trading)', },
    { id: 7, label: 'Portland PMS Ltd (Non-Trading)', },
    { id: 8, label: 'Portland PMS Ltd (Non-Trading)', },
    { id: 9, label: 'Portland PMS Ltd (Non-Trading)', },
    { id: 10, label: 'Pelagon Limited (Non-Trading)', }
  ];

  const toggleDataFinance = [
    { id: 1, label: 'SAP Business One(Client access)', checked: isnew, onChange: handleNewToggleChange, },
    { id: 2, label: 'SData Transfer Workbench (DTW)', },
  ];
  const toggleDataReporting = [
    { id: 1, label: 'Sharperlight Reporting - Finance user', checked: isnew, onChange: handleNewToggleChange, },
    { id: 2, label: 'Sharperlight Reporting - Web user', },
  ];
  const toggleBtnSAPWEBPORTAL = [
    { id: 1, checked: isnew, onChange: handleNewToggleChange, label: 'Open Orders', },
    { id: 2, label: 'Rate Cards', },
    { id: 3, label: 'Invoice Request', },
    { id: 4, label: 'Credit Note Request', },
    { id: 5, label: 'Account Manager', },
    { id: 6, label: 'Advertiser Manager', },
    { id: 7, label: 'Quotation Module', },
    { id: 8, label: 'Purchase Order Request ', }
  ];

  const _items = [
    {
      key: 'addUser',
      text: 'Add User',
      iconProps: { iconName: 'Add' },
      style: themePrimaryOverFlowItems,
      onClick: () => {
        newContactAccount();
      },
    },
  ];


  const newContactAccount = () => {
    history(`/contact/new`, { state: { background: location } });
  };

  const [showManagerInformationAction, { toggle: toggleShowManagerInformationAction }] = useBoolean(false);
  const [showManagerInformationAccess, { toggle: toggleShowManagerInformationAccess }] = useBoolean(false);

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
            {
              !isPopUp ?
                <>
                  <CommandBar
                    className="ms-actionbar"
                    items={_items}
                    ariaLabel="Modal Commandbar"
                    style={contactDetailContentsCommandBarDiv}
                  />
                </>
                : null
            }
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
                            <Stack className={`toggleswichbtn`}> <Toggle inlineLabel onText="New" offText="Amend" defaultChecked onChange={_onChange} /> </Stack>
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Requester </label>
                            <RhfTextField control={control} name="Requester" styles={textFieldStyle} />
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
                            <RhfTextField control={control} name="FirstName" styles={textFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 msRhfTextField-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Last Name </label>
                            <RhfTextField control={control} name="LastName" styles={textFieldStyle} />
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Email </label>
                            <RhfTextField control={control} name="Email" styles={textFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className="formGroup">
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Start Date </label>
                            <DatePicker
                              id="fromDate"
                              placeholder='fromDate'
                              isMonthPickerVisible={true}
                              style={{ marginTop: '5px', color: 'red' }}
                              // styles={{
                              // 	callout: {
                              // 		background: 'red !important',
                              // 	},
                              // }}
                              calloutProps={{
                                className: `${themeName == 'Light'
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
                            >
                            </DatePicker>
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Office </label>
                            <RhfDropdown options={options} control={control} name="Office" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Permission Group </label>
                            <RhfDropdown options={options2} control={control} name="PermissionGroup" placeholder='Select a Value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Line Manager </label>
                            <RhfDropdown options={options2} control={control} name="Line Manager" placeholder='Select a Value' styles={dropwDownFieldStyle} />
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
                              {toggleDataAmerica.map((data) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                  <Toggle checked={data.checked} onChange={data.onChange} />
                                  <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                            <div className='pagesubtitle'>
                              <h3>{'Europe'}</h3>
                            </div>
                            <div className={`toggleswichList`}>
                              {toggleBtnEurope.map((data) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                  <Toggle checked={data.checked} onChange={data.onChange} />
                                  <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
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
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                  <Toggle checked={data.checked} onChange={data.onChange} />
                                  <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                </div>
                              ))}
                            </div>
                            <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                              <div className='pagesubtitle'>
                                <h3>{'Asia-Pacific'}</h3>
                              </div>
                              <div className={`toggleswichList`}>
                                {toggleBtnAsiaPacific.map((data) => (
                                  <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                    <Toggle checked={data.checked} onChange={data.onChange} />
                                    <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="ms-Grid-col ms-sm12 mt-10 mb-10">
                              <div className='pagesubtitle'>
                                <h3>{'Finance Management/Dormant/Non Trading Companies'}</h3>
                              </div>
                              <div className={`toggleswichList`}>
                                {toggleBtnFinanceManagement.map((data) => (
                                  <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                    <Toggle checked={data.checked} onChange={data.onChange} />
                                    <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
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
                                  <Toggle checked={data.checked} onChange={data.onChange} />
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
                                  <Toggle checked={data.checked} onChange={data.onChange} />
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
                              {toggleBtnSAPWEBPORTAL.map((data) => (
                                <div className={`ms-Grid-col ms-md12 ms-lg6 ms-xl3 toggleswichListInner mb-10`} key={data.id}>
                                  <Toggle checked={data.checked} onChange={data.onChange} />
                                  <Label className={`${classNames.stackItemLabelStyles} ml-5`}>{data.label}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className={`clearBoth`}></div>
                          <div className="ms-Grid-col ms-lg12 ms-xl6">
                            <div className={`formGroup`}>
                              <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Web Approving Manager</label>
                              <RhfDropdown options={options2} control={control} name="PermissionGroup" placeholder='Select a Value' styles={dropwDownFieldStyle} />
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
                                    <Stack className={`toggleswichbtn`}> <Toggle inlineLabel onText="Yes" offText="No" defaultChecked onChange={_onChange} /> </Stack>
                                  </div>
                                </div>
                              </div>
                              <div className={`clearBoth`}></div>
                            </div>
                          </div>
                          <div className={`clearBoth`}></div>
                          { showManagerInformationAccess &&
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
                              <RhfTextField control={control} name="requirement" styles={textFieldStyle} />
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-lg12 ms-xl6">
                            <div className={`formGroup`}>
                              <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Comment</label>
                              <RhfTextField control={control} name="Comment" styles={textFieldStyle} />
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-lg12 ms-x12">
                            <div className={`text-right`}>
                              <PrimaryButton className={'mb-20'} text="Submit" />
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