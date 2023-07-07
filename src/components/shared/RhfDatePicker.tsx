import * as React from 'react';
import { Controller } from 'react-hook-form';
import { DatePicker, IDatePickerProps } from '@fluentui/react';
import { HookFormProps } from './HookFormProps';
import { useTheme } from '../../Context/ThemeContext';

export const RhfDatePicker: React.FunctionComponent<
	HookFormProps & IDatePickerProps
> = (props) => {
	const themeName = useTheme().themeName;

	return (
		<Controller
			name={props.name}
			control={props.control}
			rules={props.rules}
			defaultValue={props.defaultValue || ''}
			render={({
				field: { onChange, onBlur, name: fieldName, value },
				fieldState: { error },
			}) => (
				<DatePicker
					{...props}
					textField={{
						name: fieldName,
						errorMessage: error && error.message,
					}}
					calloutProps={{
						className: `${
							themeName == 'Light'
								? 'datePickerCalloutLight'
								: 'datePickerCalloutDark'
						}`,
					}}
					onSelectDate={(date) => {
						onChange(date);
					}}
					value={value}
					onBlur={onBlur}
					defaultValue={undefined}
				/>
			)}
		/>
	);
};
