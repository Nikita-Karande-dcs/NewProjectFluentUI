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
}
  from '@fluentui/react';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { neutralColorsGray100, } from '../../styles/ContactStyles';
import { Gap5Token, }
  from '../../styles/SharedStyles';
import { useTheme } from '../../Context/ThemeContext';
import { dropwDownFieldStyle, textFieldStyle, }
  from '../shared/CTextField';
import { RhfTextField } from '../shared/RhfTextField';
import { RhfDropdown } from '../shared/RhfDropdown';
// const stackTokens: IStackTokens = { childrenGap: 10 };


function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
  // console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}



export default function HomeListData({
  contentStyles,
  classNames,
  sectionStackTokens,
  fullScreen,
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
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
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
                            <RhfDropdown options={options} control={control} name="Office" placeholder='select a value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Line Manager </label>
                            <RhfTextField control={control} name="LineManager" styles={textFieldStyle} />
                          </div>
                        </div>
                        <div className={`clearBoth`}></div>
                        <div className="ms-Grid-col ms-lg12 ms-xl6">
                          <div className={`formGroup`}>
                            <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}> Permission Group </label>
                            <RhfDropdown options={options2} control={control} name="PermissionGroup" placeholder='select a value' styles={dropwDownFieldStyle} />
                          </div>
                        </div>
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
                              <RhfDropdown options={options2} control={control} name="PermissionGroup" placeholder='select a value' styles={dropwDownFieldStyle} />
                            </div>
                          </div>
                          <div className="ms-Grid-col ms-lg12 ms-xl6">
                            <div className={`formGroup`}>
                              <label className={`${classNames.stackItemLabelStyles}`} style={neutralColorsGray100(myThemeContext)}>Training</label>
                              <div className="switchList">
                                <Stack className={`toggleswichbtn`}> <Toggle inlineLabel onText="Yes" offText="No" defaultChecked onChange={_onChange} /> </Stack>
                              </div>
                            </div>
                          </div>
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