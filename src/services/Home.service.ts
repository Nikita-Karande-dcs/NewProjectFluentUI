import { doGet, doPost } from '../http-common';
import * as API from '../api';

export async function getUserData() {
	return await doGet(API.GET_API_USER).then((response: any) => {
		return response.Data;
	});
}

// export async function saveUserData(data: any) {
// 	return await doPost(API.SAVE_API_USER, data).then((response: any) => {
// 		return response;
// 	});
// }
export function saveUserData(data: any) {
	return (dispatch: any) => {
		return doPost(API.SAVE_API_USER, data)
			.then((response: any) => {
				dispatch({ type: 'SAVE_USER_DATA', payload: response });
			})
			.catch((error: any) => {
				console.log(error);
		});
	};
}

export async function updateUserData(data: any) {
	return await doPost(API.UPDATE_API_USER, data).then((response: any) => {
		return response;
	});
}