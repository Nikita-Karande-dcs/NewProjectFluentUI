import { doPost } from '../../http-common';
import { USER_LOGIN } from '../../api';

export async function loginUser(userInfo: any) {
	return await doPost(USER_LOGIN, userInfo).then((response: any) => {
		if (response.token) {
			localStorage.setItem('token', response.token);
			localStorage.setItem('refreshToken', response.refreshToken);
			localStorage.setItem('user', JSON.stringify(response));
		}
		return response;
	});
}
