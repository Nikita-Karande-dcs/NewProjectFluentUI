import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { POST_GET_REFRESH_TOKEN } from './api';
import { store } from './app/store';
import { auth, logout } from './components/User/UserLoginSlice';
let baseURL: string;
baseURL = 'https://localhost:7127';

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-type': 'application/json',
	},
});

const axiosInstanceFormData = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-type': 'multipart/form-data',
	},
});

axiosInstanceFormData.interceptors.request.use((config: any) => {
	store.dispatch(showLoading());
	let userInfo: string = localStorage.getItem('user') || '';
	if (userInfo !== '' && config.url !== 'account/login') {
		let userInfoObject = JSON.parse(userInfo);
		config.headers.Authorization = 'Bearer ' + userInfoObject.token;
	}
	return config;
});

const interceptorFormData = axiosInstanceFormData.interceptors.response.use(
	(response) => {
		store.dispatch(hideLoading());
		return response;
	},
	(error) => {
		store.dispatch(hideLoading());
		if (error.response.status === 401) {
			localStorage.removeItem('user');
		}
		if (error.response.status !== 401) {
			return Promise.reject(error);
		}
		localStorage.removeItem('user');
		axios.interceptors.response.eject(interceptorFormData);
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.request.use((config) => {
	store.dispatch(showLoading());
	let token: string = localStorage.getItem('token') || '';
	if (token !== '' && config.url !== 'account/login') {
		config.headers.Authorization = 'Bearer ' + token;
	}
	return config;
});

let interceptor = axiosInstance.interceptors.response.use(
	(response) => {
		store.dispatch(hideLoading());
		return response;
	},
	async (error) => {
		store.dispatch(hideLoading());
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			// axiosInstance.interceptors.response.eject(interceptor);
			originalRequest._retry = true;
			let token: any = localStorage.getItem('token');
			let refreshToken: any = localStorage.getItem('refreshToken');
			// Try to refresh the JWT token
			try {
				const res = await axios.post(baseURL + POST_GET_REFRESH_TOKEN, {
					refreshToken,
					token,
				});

				if (res.status === 200) {
					const { token, refreshToken, expiration } = res.data;
					let userInfoObj = JSON.parse(localStorage.getItem('user') || '');
					userInfoObj = { ...userInfoObj, token, refreshToken, expiration };
					localStorage.setItem('user', JSON.stringify(userInfoObj));
					localStorage.setItem('token', token);
					localStorage.setItem('refreshToken', refreshToken);
					return axiosInstance(originalRequest);
				} else {
					store.dispatch(hideLoading());
					return Promise.reject(error);
				}
			} catch (error) {
				store.dispatch(hideLoading());
				store.dispatch(logout(true));
				console.log('refresh token api error', error);
			}
		}
	}
);

export function doPost(taregetURL: string = '', requestParam = {}) {
	return new Promise((resolve, reject) => {
		axiosInstance.post(taregetURL, requestParam).then(
			(response) => {
				if (response.data) {
					resolve(response.data);
				} else {
					// reject(response.message);
					// reject(response);
				}
			},
			(error) => {
				reject(error);
				console.log(error);
			}
		);
	});
}

export function doPostFormData(taregetURL: string = '', requestParam = {}) {
	return new Promise((resolve, reject) => {
		axiosInstanceFormData.post(taregetURL, requestParam).then(
			(response) => {
				if (response.data) {
					resolve(response.data);
				}
			},
			(error) => {
				reject(error);
				console.log(error);
			}
		);
	});
}

export function doGet(taregetURL: string = '', requestParam = {}) {
	return new Promise<object[]>((resolve, reject) => {
		axiosInstance
			.get(taregetURL, { params: { ...requestParam } })
			.then((response) => {
				if (response.data) {
					resolve(response.data);
				} else {
					// reject(response.message);
					// reject(response);
				}
			})
			.catch((error) => {
				console.log(error.response);
				reject(error.response);
			});
	});
}
export function doDelete(taregetURL: string = '', requestParam = {}) {
	return new Promise<object[]>((resolve, reject) => {
		axiosInstance
			.delete(taregetURL, { params: { ...requestParam } })
			.then((response) => {
				if (response.data) {
					resolve(response.data);
				} else {
					// reject(response.message);
					// reject(response);
				}
			})
			.catch((error) => {
				console.log(error.response);
				reject(error.response);
			});
	});
}

function sendDataToFile(taregetURL: string, data: any) {
	fetch('http://localhost:3000/' + taregetURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
}
