// import { ITextFieldStyleProps, ITextFieldStyles } from "@fluentui/react";

import {
	IDatePickerStyleProps,
	IDatePickerStyles,
	IDropdownStyleProps,
	IDropdownStyles,
	ITextFieldStyleProps,
	ITextFieldStyles,
} from '@fluentui/react';
import { NeutralColors } from '@fluentui/theme';

export const textFieldStyle = (
	props: ITextFieldStyleProps
): Partial<ITextFieldStyles> => ({
	...(props.disabled
		? {
				fieldGroup: {
					border: 'none',
					paddingLeft: '10px',
				},
				field: {
					fontWeight: 600,
					paddingLeft: '10px',
					color: 'rgb(51, 51, 51)',
					backgroundColor: 'transparent',
					':hover': {
						backgroundColor: 'rgb(226, 226, 226)',
					},
				},
		  }
		: props.focused
		? {
				fieldGroup: {
					border: 'none',
					':after': {
						border: 'none',
					},
				},
				field: {
					border: '1px solid rgb(102, 102, 102)',
					width: '100% !important',
					fontSize: '12px',
					fontWeight: 600,
					paddingLeft: '4px',
				},
		  }
		: {
				fieldGroup: {
					borderColor: 'transparent !important',
					width: '100%',
					':after': {
						border: '4px solid red',
					},
					':hover': {
						borderColor: 'lightgrey !important',
						width: '100% !important',
					},
					':focus': {
						borderColor: 'lightgrey !important',
						width: '100% !important',
						fontSize: '12px',
						fontWeight: 600,
						paddingLeft: '4px',
					},
				},
				field: {
					fontSize: '12px',
					fontWeight: 600,
					paddingLeft: '4px',
					':hover': {
						fontWeight: 600,
						width: '100% !important',
						fontSize: '12px',
					},
				},
		  }),
});

export const textFieldCommandBarStyle = (
	props: ITextFieldStyleProps
): Partial<ITextFieldStyles> => ({
	...(props.disabled
		? {
				fieldGroup: {
					border: 'none',
					paddingLeft: '10px',
				},
				field: {
					fontWeight: 600,
					paddingLeft: '10px',
					//color: "rgb(51, 51, 51)",
					backgroundColor: 'transparent',
					':hover': {
						backgroundColor: 'transparent',
					},
				},
		  }
		: props.focused
		? {
				fieldGroup: {
					border: 'none',
					':after': {
						border: 'none',
					},
				},
				field: {
					border: '1px solid rgb(102, 102, 102)',
					width: '100% !important',
					fontSize: '12px',
					fontWeight: 600,
					paddingLeft: '4px',
					background: 'yellow',
				},
		  }
		: {
				fieldGroup: {
					// borderColor: "rgb(245, 249, 255) !important",
					borderColor: 'transparent !important',
					width: '100%',
					background: 'transparent',
					':after': {
						border: '4px solid red',
					},
					':hover': {
						borderColor: 'lightgrey !important',
						width: '100% !important',
						background: 'transparent',
					},
					':focus': {
						borderColor: 'lightgrey !important',
						width: '100% !important',
						fontSize: '12px',
						fontWeight: 600,
						paddingLeft: '4px',
						background: 'transparent',
					},
				},
				field: {
					fontSize: '12px',
					fontWeight: 600,
					paddingLeft: '4px',
					background: 'transparent',
					':hover': {
						fontWeight: 600,
						width: '100% !important',
						fontSize: '12px',
					},
				},
		  }),
});

export const datePickerStyle = (
	props: IDatePickerStyleProps
): Partial<IDatePickerStyles> => {
	let retunObj = {
		textField: {},
	};
	return retunObj;
};
export const largetTextFieldStyle = (
	props: ITextFieldStyleProps
): Partial<ITextFieldStyles> => ({
	...(props.disabled
		? {
				fieldGroup: {
					border: 'none',
					paddingLeft: '10px',
				},
				field: {
					fontWeight: 700,
					paddingLeft: '10px',
					color: 'rgb(51, 51, 51)',
					backgroundColor: 'transparent',
					':hover': {
						backgroundColor: 'rgb(226, 226, 226)',
					},
				},
		  }
		: props.focused
		? {
				fieldGroup: {
					border: 'none',
					':after': {
						border: 'none',
					},
				},
				field: {
					border: '1px solid transparent',
					width: '100% !important',
					fontSize: '20px',
					fontWeight: 700,
					paddingLeft: '4px',
				},
		  }
		: {
				fieldGroup: {
					borderColor: 'transparent !important',
					width: '100%',
					':after': {
						border: '4px solid red',
					},
					':hover': {
						borderColor: 'lightgrey !important',
						width: '100% !important',
					},
					':focus': {
						borderColor: 'lightgrey !important',
						width: '100% !important',
						fontSize: '20px',
						fontWeight: 700,
						paddingLeft: '2px',
					},
				},
				field: {
					fontSize: '20px',
					fontWeight: 700,
					paddingLeft: '2px',
					//color: "#02005d",
					':hover': {
						fontWeight: 700,
						width: '100% !important',
						fontSize: '20px',
					},
				},
		  }),
});

export const dropwDownFieldStyle = (
	props: IDropdownStyleProps
): Partial<IDropdownStyles> => {
	return {
		root: {
			border: '1px solid transparent !important',
			':hover': {
				border: '1px solid lightgray !important',
			},
			':focus': {
				border: '1px solid black !important',
				outline: 'none !important',
			},
		},
		title: {
			border: 'none !important',
			paddingLeft: '4px',
			fontSize: '12px',
			fontWeight: 600,
			background: 'transparent',
		},
		dropdownItem: {
			fontSize: '12px',
		},
		caretDownWrapper: {
			visibility: 'hidden',
		},
	};
};
export const dropwDownFieldStyleLarge = (
	props: IDropdownStyleProps
): Partial<IDropdownStyles> => {
	return {
		root: {
			border: '1px solid transparent !important',
			':hover': {
				border: '1px solid lightgray !important',
			},
			':focus': {
				border: '1px solid black !important',
				outline: 'none !important',
			},
		},
		title: {
			border: 'none !important',
			fontWeight: '500',
			color: NeutralColors.gray100,
			paddingLeft: '0px',
		},
		caretDownWrapper: {
			visibility: 'hidden',
		},
	};
};
export const dropwDownFieldPinStyle = (
	props: IDropdownStyleProps
): Partial<IDropdownStyles> => {
	return {
		root: {
			padding: '0px',
			textAlign: 'center',
			border: 'none',
			':hover': {
				border: 'none',
				backgroundColor: 'transparent',
				color: 'white',
				caretDownWrapper: {
					display: 'none',
				},
			},
			':focus': {
				padding: '0px',
				border: '1px solid black !important',
				outline: 'none !important',
				caretDownWrapper: {
					display: 'none',
				},
			},
		},
		title: {
			border: 'none !important',
			fontWeight: '500',
			color: NeutralColors.gray100,
			paddingRight: '10px',
			paddingLeft: '0px',
			background: 'transparent',
		},
		caretDownWrapper: {
			display: 'none',
		},
		caretDown: {
			display: 'none',
		},
		dropdownOptionText: {
			padding: '0px',
		},
		dropdownItems: {
			textAlign: 'center',
			marginLeft: '-8px',
		},
		dropdownItemSelected: {
			display: 'none',
		},
		// callout: {
		// 	top: "245px !important",
		// },
	};
};

export const dropwDownFieldCatStyle =
	(myThemeContext: any) =>
	(props: IDropdownStyleProps): Partial<IDropdownStyles> => {
		return {
			// dropdown: { width: 500 },

			root: {
				width: 'fit-content',
				minWidth: 300,

				border: '1px solid transparent !important',
				':hover': {
					border: '1px solid lightgray !important',
				},
				':focus': {
					border: '1px solid black !important',
					outline: 'none !important',
				},
			},

			title: {
				border: 'none !important',
				paddingLeft: '4px',
				fontSize: '12px',
			},
			dropdownItems: {
				color: `${myThemeContext.semanticColors.inputTextHovered}`,
			},
			caretDownWrapper: {
				visibility: 'hidden',
			},
		};
	};

export const userNameFieldStyle = (
	props: ITextFieldStyleProps
): Partial<ITextFieldStyles> => ({
	...(props.focused
		? {
				fieldGroup: {
					border: 'none',
					':after': {
						border: 'none',
					},
				},
				field: {
					width: '110px !important',
					fontSize: '12px',
					fontWeight: 600,
					paddingLeft: '0px',
				},
		  }
		: {
				fieldGroup: {
					borderColor: 'transparent !important',
					width: '110px',
					':after': {
						border: '4px solid red',
					},
					':hover': {
						width: '110px !important',
					},
					':focus': {
						width: '110px !important',
						fontSize: '12px',
						fontWeight: 600,
						paddingLeft: '0px',
					},
				},
				field: {
					fontSize: '12px',
					fontWeight: 600,
					paddingLeft: '0px',
					':hover': {
						fontWeight: 600,
						width: '110px !important',
						fontSize: '12px',
					},
				},
		  }),
});
