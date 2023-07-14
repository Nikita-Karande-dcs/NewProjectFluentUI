import {
	configureStore,
	ThunkAction,
	Action,
} from '@reduxjs/toolkit';
import appSettingReducer from '../app/appSlice';
import userLoginReducer from '../components/User/UserLoginSlice';
import UserReducer from '../components/Home/UserSlice';

export const store = configureStore({
	reducer: {
		appSetting: appSettingReducer,
		userLogin: userLoginReducer,
		User: UserReducer,
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
