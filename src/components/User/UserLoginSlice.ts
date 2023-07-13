import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { loginUser } from './UserAPI';
import { useNavigate } from 'react-router-dom';

const initialState = {
	username: '',
	password: '',
	token: '',
	refreshToken: '',
	status: 'idle',
	isLogged: true,
};

export const auth = createAsyncThunk(
	'userLogin/auth',
	async (userInfo: any) => {
		const response: any = await loginUser(userInfo);
		console.log('Login response', response);
		return response;
	}
);

export const getUserDetails = (state: RootState) => state.userLogin.token;

export const userLoginSlice = createSlice({
	name: 'userLogin',
	initialState,
	reducers: {
		doLogin: (state, action) => {
			state.username = action.payload.username;
			state.password = action.payload.password;
		},
		logout: (state, action) => {
			state.isLogged = !action.payload;
			//code to redirect user to home page using react router 6
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(auth.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(auth.fulfilled, (state, action) => {
				if (action.payload.token) {
					state.status = 'idle';
					state.token = action.payload.token;
					state.refreshToken = action.payload.refreshToken;
					state.isLogged = true;
				}
			})
			.addCase(auth.rejected, (state) => {
				console.log('Rejected');
				state.status = 'idle';
				state.isLogged = false;
			});
	},
});
export const { logout } = userLoginSlice.actions;
export default userLoginSlice.reducer;
