import * as React from 'react';
import { Controller } from 'react-hook-form';
import { ITextFieldProps, Icon, TextField, ThemeContext } from '@fluentui/react';
import { HookFormProps } from './HookFormProps';
import { NumericFormat } from 'react-number-format';

export const RhfTextField: React.FunctionComponent<
	HookFormProps & ITextFieldProps
> = (props: any) => {
	const myThemeContext = React.useContext(ThemeContext);
	return (
		<>
			{props.valueDataType === 'number' ? (
				<Controller
					name={props.name}
					control={props.control}
					rules={props.rules}
					defaultValue={props.defaultValue || ''}
					render={({
						field: { onChange, onBlur, name: fieldName, value },
						fieldState: { error },
					}) => (
						<NumericFormat
							{...props}
							onChange={onChange}
							value={value}
							onBlur={onBlur}
							name={fieldName}
							errorMessage={error && error.message}
							defaultValue={undefined}
							customInput={TextField}
							thousandSeparator={true}
							onValueChange={(v) => {
								//value without dollar signe
								console.log(v.value);
							}}
						/>
					)}
				/>
			) : (
				<Controller
					name={props.name}
					control={props.control}
					rules={props.rules}
					defaultValue={props.defaultValue || ''}
					render={({
						field: { onChange, onBlur, name: fieldName, value },
						fieldState: { error },
					}) => (
						<TextField
							{...props}
							onChange={onChange}
							value={value}
							onBlur={onBlur}
							name={fieldName}
							errorMessage={error && error.message}
							defaultValue={undefined}
							underlined={props.underlined ? true : false}
						/>
					)}
				/>
			)}
		</>
	);
};

export const RhfTextboxWithClearButton: React.FunctionComponent<
	(HookFormProps & ITextFieldProps) | any
> = (props) => {
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
				<TextField
					{...props}
					value={value}
					onChange={(e, newValue) => {
						onChange(newValue);
					}}
					onBlur={onBlur}
					errorMessage={error && error.message}
					onRenderSuffix={(props) => {
						return value !== null && value !== undefined && value !== '' ? (
							<Icon
								iconName={'Cancel'}
								styles={{
									root: {
										color: 'rgb(96, 94, 92)',
										'&:hover': {
											fontWeight: 800,
										},
									},
								}}
								onClick={(event) => {
									event.stopPropagation();
									onChange('');
								}}
							/>
						) : null;
					}}
					styles={{
						suffix: { backgroundColor: 'transparent', },
					}}
				/>
			)}
		/>
	);
};


