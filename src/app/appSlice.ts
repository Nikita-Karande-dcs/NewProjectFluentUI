import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TappSlice {
	fullScreen: boolean;
	isMenuOpen: boolean;
}

type Tblock = {
	container?: boolean;
	popup?: boolean;
	others?: boolean;
};

const initialState: TappSlice = {
	fullScreen: false,
	isMenuOpen:
		String(localStorage.getItem('mainMenuState')).toLowerCase() == 'true'
			? true
			: false,
};

const AppSettingSlice = createSlice({
	name: 'appSetting',
	initialState,
	reducers: {
		toggleFullScreen(state) {
			state.fullScreen = !state.fullScreen;
		},
		toggleMainMenu(state) {
			state.isMenuOpen = !state.isMenuOpen;
			localStorage.setItem('mainMenuState', state.isMenuOpen.toString());
		},
	},
});

export const { toggleFullScreen, toggleMainMenu } = AppSettingSlice.actions;
export default AppSettingSlice.reducer;
