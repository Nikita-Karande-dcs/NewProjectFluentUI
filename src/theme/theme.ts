import { createTheme, Theme } from '@fluentui/react';

export const darkTheme: Theme = createTheme({
	palette: {
		themePrimary: '#128712',
		themeLighterAlt: '#f1faf1',
		themeLighter: '#cbeccb',
		themeLight: '#a2dba2',
		themeTertiary: '#58b758',
		themeSecondary: '#239623',
		themeDarkAlt: '#107a10',
		themeDark: '#0d670d',
		themeDarker: '#0a4c0a',
		neutralLighterAlt: '#faf9f8',
		neutralLighter: '#f3f2f1',
		neutralLight: '#edebe9',
		neutralQuaternaryAlt: '#e1dfdd',
		neutralQuaternary: '#a9a9a9',
		neutralTertiaryAlt: '#c8c6c4',
		neutralTertiary: '#a19f9d',
		neutralSecondary: '#605e5c',
		neutralPrimaryAlt: '#3b3a39',
		neutralPrimary: '#323130',
		neutralDark: '#201f1e',
		black: '#000000',
		white: '#ffffff',
	},
});

export const lightTheme: Theme = createTheme({
	palette: {
		themePrimary: '#0078d4', //used
		themeLighterAlt: '#eff6fc',
		themeLighter: '#deecf9',
		themeLight: '#c7e0f4',
		themeTertiary: '#71afe5',
		themeSecondary: '#2b88d8',
		themeDarkAlt: '#106ebe',
		themeDark: '#005a9e',
		themeDarker: '#004578',
		neutralLighterAlt: '#faf9f8',
		neutralLighter: '#fbfbfb', //used
		neutralLight: '#edebe9',
		neutralQuaternaryAlt: '#e1dfdd',
		neutralQuaternary: '#eaeaea',
		neutralTertiaryAlt: '#ebebeb', //used
		neutralTertiary: '#323130', //used
		neutralSecondary: '#605e5c',
		neutralPrimaryAlt: '#f5f9ff', //used
		//neutralPrimaryAlt: "yellow", //used

		neutralPrimary: '#323130', //used
		neutralDark: '#201f1e',
		black: '#000000',
		white: '#ffffff',
		//blackTranslucent40: "rgba(0,0,0,.1)", //used
	},
});
