import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from '../../services/Home.service';

const initialState: any = {
	UserList: [
		{
		  "requestId": 21,
		  "userRequestType": "new",
		  "requestor": "rizavan",
		  "firstName": "dev",
		  "lastName": "job",
		  "startDate": "2023-07-13T00:00:00",
		  "office": "Abc",
		  "email": "Abc@gmail.com",
		  "lineManagerId": "112",
		  "permissionGroupId": "1123",
		  "webApprovingManagerId": "11332",
		  "training": true,
		  "trainingRemarks": "remarks for trainee",
		  "comment": "comments for trainig",
		  "marketAccess": [
			{
			  "regionName": "America",
			  "countries": [
				{
				  "country": "Argetina"
				},
				{
				  "country": "Brazil"
				}
			  ]
			},
			{
			  "regionName": "Mena",
			  "countries": [
				{
				  "country": "Mena1"
				}
			  ]
			}
		  ],
		  "accesses": [
			{
			  "key": "Finance",
			  "accessDetailsDtos": [
				{
				  "value": "SAPOne",
				  "description": "No discription"
				},
				{
				  "value": "DataTransfer",
				  "description": "No discription"
				}
			  ]
			},
			{
			  "key": "Reporting",
			  "accessDetailsDtos": [
				{
				  "value": "Finanuser Reporting",
				  "description": "No discription"
				}
			  ]
			}
		  ]
		},
		{
		  "requestId": 22,
		  "userRequestType": "New",
		  "requestor": "Bob",
		  "firstName": "Adam",
		  "lastName": "Marsh",
		  "startDate": "2023-07-14T00:00:00",
		  "office": "UK",
		  "email": "Adam@gmail.com",
		  "lineManagerId": "112",
		  "permissionGroupId": "1123",
		  "webApprovingManagerId": "332",
		  "training": true,
		  "trainingRemarks": "my training Remarks",
		  "comment": "my comments",
		  "marketAccess": [
			{
			  "regionName": "America",
			  "countries": [
				{
				  "country": "Brazil"
				},
				{
				  "country": "VIO"
				}
			  ]
			},
			{
			  "regionName": "Asia",
			  "countries": [
				{
				  "country": "India"
				}
			  ]
			}
		  ],
		  "accesses": [
			{
			  "key": "Finance",
			  "accessDetailsDtos": [
				{
				  "value": "SAPOne",
				  "description": "Description"
				}
			  ]
			}
		  ]
		},
		{
		  "requestId": 23,
		  "userRequestType": "New",
		  "requestor": "Rizavan",
		  "firstName": "Tom",
		  "lastName": "Abdc",
		  "startDate": "2023-07-14T00:00:00",
		  "office": "UK",
		  "email": "tom@gmail.com",
		  "lineManagerId": "22334",
		  "permissionGroupId": "33443",
		  "webApprovingManagerId": "33445",
		  "training": true,
		  "trainingRemarks": "Training Remarks for me",
		  "comment": "my comments",
		  "marketAccess": [
			{
			  "regionName": "Europe",
			  "countries": [
				{
				  "country": "Denmark"
				}
			  ]
			},
			{
			  "regionName": "Mena",
			  "countries": [
				{
				  "country": "Mena1"
				}
			  ]
			}
		  ],
		  "accesses": [
			{
			  "key": "Finance",
			  "accessDetailsDtos": [
				{
				  "value": "SAP Client",
				  "description": "No description"
				},
				{
				  "value": "Data Transfer",
				  "description": "my description"
				}
			  ]
			},
			{
			  "key": "Report",
			  "accessDetailsDtos": [
				{
				  "value": "Sharperlight reporting",
				  "description": "No description"
				}
			  ]
			}
		  ]
		},
		{
		  "requestId": 24,
		  "userRequestType": "New",
		  "requestor": "demo",
		  "firstName": "myfirst",
		  "lastName": "mylast",
		  "startDate": "2023-07-11T00:00:00",
		  "office": "option2",
		  "email": "mydemo@gmail.com",
		  "lineManagerId": "option2",
		  "permissionGroupId": "option2",
		  "webApprovingManagerId": "option2",
		  "training": true,
		  "trainingRemarks": "test",
		  "comment": "test comment",
		  "marketAccess": [
			{
			  "regionName": "America",
			  "countries": [
				{
				  "country": "Brazil"
				}
			  ]
			}
		  ],
		  "accesses": [
			{
			  "key": "Finance",
			  "accessDetailsDtos": [
				{
				  "value": "SData Transfer Workbench (DTW)",
				  "description": "No description"
				}
			  ]
			}
		  ]
		},
		{
		  "requestId": 25,
		  "userRequestType": "New",
		  "requestor": "Bob",
		  "firstName": "Tom",
		  "lastName": "Adam",
		  "startDate": "2023-07-11T00:00:00",
		  "office": "option2",
		  "email": "Tom@gmail.com",
		  "lineManagerId": "option2",
		  "permissionGroupId": "option1",
		  "webApprovingManagerId": "option1",
		  "training": true,
		  "trainingRemarks": "no requirement",
		  "comment": "my comment",
		  "marketAccess": [
			{
			  "regionName": "America",
			  "countries": [
				{
				  "country": "Brazil"
				}
			  ]
			}
		  ],
		  "accesses": [
			{
			  "key": "Finance",
			  "accessDetailsDtos": [
				{
				  "value": "SData Transfer Workbench (DTW)",
				  "description": "No description"
				}
			  ]
			}
		  ]
		},
		{
		  "requestId": 26,
		  "userRequestType": "New",
		  "requestor": "rizavanG",
		  "firstName": "myfirstNameG",
		  "lastName": "myLastNameG",
		  "startDate": "2023-07-11T00:00:00",
		  "office": "option2",
		  "email": "G@gmail.com",
		  "lineManagerId": "option2",
		  "permissionGroupId": "option1",
		  "webApprovingManagerId": "option2",
		  "training": true,
		  "trainingRemarks": "myrequirment",
		  "comment": "mycomment",
		  "marketAccess": [
			{
			  "regionName": "America",
			  "countries": [
				{
				  "country": "Brazil"
				},
				{
				  "country": "VIO"
				}
			  ]
			},
			{
			  "regionName": "Mena",
			  "countries": [
				{
				  "country": "Mena"
				}
			  ]
			}
		  ],
		  "accesses": [
			{
			  "key": "Finance",
			  "accessDetailsDtos": [
				{
				  "value": "SAP Business One(Client access)",
				  "description": "No description"
				}
			  ]
			},
			{
			  "key": "Reporting",
			  "accessDetailsDtos": [
				{
				  "value": "Sharperlight Reporting - Web user",
				  "description": "No description"
				}
			  ]
			}
		  ]
		},
		{
		  "requestId": 27,
		  "userRequestType": "New",
		  "requestor": "RizavanN7",
		  "firstName": "myname",
		  "lastName": "myname7",
		  "startDate": "2023-07-12T00:00:00",
		  "office": "option2",
		  "email": "myname@gmail.com",
		  "lineManagerId": "option3",
		  "permissionGroupId": "option1",
		  "webApprovingManagerId": "option2",
		  "training": true,
		  "trainingRemarks": "requirment text",
		  "comment": "mycomment",
		  "marketAccess": [
			{
			  "regionName": "America",
			  "countries": [
				{
				  "country": "Argentina"
				},
				{
				  "country": "VIO"
				}
			  ]
			},
			{
			  "regionName": "Mena",
			  "countries": [
				{
				  "country": "Cloud -EG (Non-extreme reach company)"
				}
			  ]
			},
			{
			  "regionName": "Europe",
			  "countries": [
				{
				  "country": "Hungary"
				},
				{
				  "country": "Italy"
				}
			  ]
			},
			{
			  "regionName": "AsiaPacific",
			  "countries": [
				{
				  "country": "Japan"
				}
			  ]
			},
			{
			  "regionName": "FinanceManagement",
			  "countries": [
				{
				  "country": "Dormant Cos"
				},
				{
				  "country": "Adjustments"
				},
				{
				  "country": "Hong Kong (Non-Trading)"
				},
				{
				  "country": "Portland PMS Ltd (Non-Trading)"
				}
			  ]
			}
		  ],
		  "accesses": [
			{
			  "key": "Finance",
			  "accessDetailsDtos": [
				{
				  "value": "SData Transfer Workbench (DTW)",
				  "description": "No description"
				}
			  ]
			},
			{
			  "key": "Reporting",
			  "accessDetailsDtos": [
				{
				  "value": "Sharperlight Reporting - Web user",
				  "description": "No description"
				}
			  ]
			},
			{
			  "key": "WebPortal",
			  "accessDetailsDtos": [
				{
				  "value": "Account Manager",
				  "description": "No description"
				}
			  ]
			}
		  ]
		},
		{
		  "requestId": 28,
		  "userRequestType": "New",
		  "requestor": "mydemo3",
		  "firstName": "firstname",
		  "lastName": "lastname",
		  "startDate": "2023-07-09T00:00:00",
		  "office": "option2",
		  "email": "myemial@gmail.com",
		  "lineManagerId": "option3",
		  "permissionGroupId": "option2",
		  "webApprovingManagerId": "option2",
		  "training": true,
		  "trainingRemarks": "test",
		  "comment": "test",
		  "marketAccess": [
			{
			  "regionName": "America",
			  "countries": [
				{
				  "country": "Brazil"
				}
			  ]
			},
			{
			  "regionName": "AsiaPacific",
			  "countries": [
				{
				  "country": "India"
				}
			  ]
			}
		  ],
		  "accesses": [
			{
			  "key": "Finance",
			  "accessDetailsDtos": [
				{
				  "value": "SData Transfer Workbench (DTW)",
				  "description": "No description"
				}
			  ]
			},
			{
			  "key": "WebPortal",
			  "accessDetailsDtos": [
				{
				  "value": "Advertiser Manager",
				  "description": "No description"
				}
			  ]
			}
		  ]
		}
	  ],
	modifiedUserList: [],
	status: 'idle',
	selectedUser: null,
	selectedUserList: null,
};

export const getUserAsync = createAsyncThunk(
	'api/UserRequest/GetAllRequestUser',
	async (_, { getState }) => {
		let localState = getState() as any;
		let filterObj = localState.User.selectedUserFilters;
		let payload = Object.keys(filterObj).reduce((accu, filterKey) => {
			return Object.assign(accu, {
				[filterKey]: filterObj[filterKey].filterValue,
			});
		}, {} as any);
		const response = await getAllUsers(payload);
		return response.Data;
	}
);

export const UserSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		selectedUser: (state, action) => {
			state.selectedUser = action.payload;
		},
		selectedUserList: (state, action) => {
			state.selectedUserList = action.payload;
			console.log('state.selectedUserList', state.selectedUserList);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUserAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getUserAsync.fulfilled, (state, action) => {
				state.status = 'idle';
				console.log("mmmmmmmmmmmmm");
				state.UserList = action.payload.Data;
				// state.modifiedUserList = action.payload;
			})
			.addCase(getUserAsync.rejected, (state, action) => {
				state.status = 'failed';
			})
	},
});

export const {
	selectedUser,
	selectedUserList
} = UserSlice.actions;
export default UserSlice.reducer;
