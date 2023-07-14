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

export async function getOfficeDropdown() {
	const res={
		"Data": [
		  {
			"code": "AR",
			"name": "Argentina"
		  },
		  {
			"code": "BR",
			"name": "Brazil"
		  },
		  {
			"code": "GB",
			"name": "United Kingdom"
		  },
		  {
			"code": "HU",
			"name": "Hungary"
		  },
		  {
			"code": "MY",
			"name": "Malaysia"
		  },
		  {
			"code": "RO",
			"name": "Romania"
		  },
		  {
			"code": "US",
			"name": "United States"
		  }
		]
	  }
	  return res;
	// return await doGet(API.GET_OFFICE).then((response: any) => {
	// return response.Data;
	// });
}
export async function getLineManagerDropdown() {
	const res={
		"Data": [
		  {
			"userId": 2,
			"u_NAME": "B1i - Business One Integration"
		  },
		  {
			"userId": 20,
			"u_NAME": "Elizabeth Sebuliba"
		  },
		  {
			"userId": 37,
			"u_NAME": "NA - Dilyan Andreev"
		  },
		  {
			"userId": 43,
			"u_NAME": "NA - Saheed Bakare"
		  },
		  {
			"userId": 59,
			"u_NAME": "Temp"
		  },
		  {
			"userId": 82,
			"u_NAME": "NA"
		  },
		  {
			"userId": 106,
			"u_NAME": "NA"
		  },
		  {
			"userId": 112,
			"u_NAME": "N/A"
		  },
		  {
			"userId": 114,
			"u_NAME": "NA"
		  },
		  {
			"userId": 131,
			"u_NAME": "Tom Geary"
		  },
		  {
			"userId": 132,
			"u_NAME": "NA - Rachel Hawes"
		  },
		  {
			"userId": 133,
			"u_NAME": "NA - Alina Kandinova"
		  },
		  {
			"userId": 151,
			"u_NAME": "NA - Miloud Aniba"
		  },
		  {
			"userId": 156,
			"u_NAME": "NA"
		  },
		  {
			"userId": 157,
			"u_NAME": "Rebecca Taylor"
		  },
		  {
			"userId": 171,
			"u_NAME": "NA"
		  },
		  {
			"userId": 192,
			"u_NAME": "NA - Chantel Matthan-Beia"
		  },
		  {
			"userId": 198,
			"u_NAME": "NA - Sital Mistry"
		  },
		  {
			"userId": 227,
			"u_NAME": "NA - Diana Opinca"
		  },
		  {
			"userId": 232,
			"u_NAME": "Sophie Teakle"
		  },
		  {
			"userId": 233,
			"u_NAME": "NA - Zita Monostori"
		  },
		  {
			"userId": 237,
			"u_NAME": "NA - Teodora Munteanu"
		  },
		  {
			"userId": 241,
			"u_NAME": "Shobha Samudrala"
		  },
		  {
			"userId": 244,
			"u_NAME": "NA - Cornel Sutiu"
		  },
		  {
			"userId": 253,
			"u_NAME": "Daniela Necula"
		  },
		  {
			"userId": 260,
			"u_NAME": "NA - Adina Ionela Gheorgiaanu"
		  },
		  {
			"userId": 263,
			"u_NAME": "Mariana Manole"
		  },
		  {
			"userId": 275,
			"u_NAME": "NA - Alexandra Rotaru"
		  },
		  {
			"userId": 276,
			"u_NAME": "NA - Sumit Mishra"
		  }
		]
	  }
	return res;
	// return await doGet(API.GET_LINE_MANAGER).then((response: any) => {
	// 	return response.Data;
	// });
}
export async function getPermissionDropdown() {
	const res={
		"Data": [
		  {
			"groupId": 19,
			"groupName": "A/Receivable & A/Payables"
		  },
		  {
			"groupId": 3,
			"groupName": "Accounts Payable"
		  },
		  {
			"groupId": 4,
			"groupName": "Accounts Receivable"
		  },
		  {
			"groupId": 2,
			"groupName": "Apps Admin"
		  },
		  {
			"groupId": 12,
			"groupName": "Credit Control"
		  },
		  {
			"groupId": 5,
			"groupName": "Finance Manager"
		  },
		  {
			"groupId": 13,
			"groupName": "FP&A"
		  },
		  {
			"groupId": 16,
			"groupName": "Group Finance"
		  },
		  {
			"groupId": 6,
			"groupName": "Local Finance"
		  },
		  {
			"groupId": 15,
			"groupName": "Read Only"
		  },
		  {
			"groupId": 9,
			"groupName": "The Traffic Bureau"
		  },
		  {
			"groupId": 18,
			"groupName": "The Traffic Bureau - Billing"
		  },
		  {
			"groupId": 11,
			"groupName": "Web Portal"
		  }
		]
	  }
	return res;
	// return await doGet(API.GET_PERMISSION).then((response: any) => {
	// 	 return response.Data;
	// });
}

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