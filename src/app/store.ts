import {
	configureStore,
	ThunkAction,
	Action,
} from '@reduxjs/toolkit';
import appSettingReducer from '../app/appSlice';
import userLoginReducer from '../components/User/UserLoginSlice';

export const store = configureStore({
	reducer: {
		appSetting: appSettingReducer,
		userLogin: userLoginReducer,
	},
	devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
