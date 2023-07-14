import { doGet, doPost } from '../http-common';
import * as API from '../api';

// export async function getAllUserData() {
// 	return await doGet(API.GET_ALL_API_USER).then((response: any) => {
// 		// return response.Data;
// 	});
// }
export async function getAllUsers(params: any) {
	let data = {
		...params,
		isSubmitClicked: true,
	};
	return await doPost(API.GET_ALL_API_USER, data).then((response: any) => {
		return response;
	});
}

// export async function getWidgetDataSource(widgetId: number) {
// 	return await doGet(API.GET_WIDGET_SOURCE + widgetId)
// 		.then((response: any) => {
// 			if (response.Data) {
// 				return response.Data;
// 			}
// 		})
// 		.catch((error) => {
// 			throw error;
// 		});
// }

export async function getOneUser(Id: any) {
	try {
		const newData = {
			requestId: 999,
			userRequestType: "New",
			requestor: "John",
			firstName: "Jane",
			lastName: "Doe",
			startDate: "2023-07-15T00:00:00",
			office: "XYZ",
			email: "johndoe@gmail.com",
			lineManagerId: "123",
			permissionGroupId: "456",
			webApprovingManagerId: "789",
			training: true,
			trainingRemarks: "Training remarks",
			comment: "Additional comments",
			marketAccess: [
			  {
				regionName: "Asia",
				countries: [
				  {
					country: "Japan"
				  },
				  {
					country: "China"
				  }
				]
			  }
			],
			accesses: [
			  {
				key: "Reporting",
				accessDetailsDtos: [
				  {
					value: "Financial Reporting",
					description: "No description"
				  }
				]
			  }
			]
		  };
  
		  return newData;
		// const response = await doGet(API.GET_ONE_API_USER + Id);
		// console.log("response",response);
		// if (Array.isArray(response)) {
		// 	if (response.length > 0) {
		// console.log("response",response);
		// 		return response[0];
		// 	}
		// }
	} catch (error) {
		throw error;
	}
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