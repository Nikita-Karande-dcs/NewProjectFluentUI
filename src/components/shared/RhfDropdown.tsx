import * as React from 'react';
import { Controller } from 'react-hook-form';
import { Dropdown, IDropdownProps } from '@fluentui/react';
import { HookFormProps } from './HookFormProps';
import {
	ChoiceGroup,
	IChoiceGroupOption,
	Icon,
	IRenderFunction,
	Stack,
	Toggle,
} from '@fluentui/react';

export const RhfDropdown: React.FunctionComponent<
	(HookFormProps & IDropdownProps) | any
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
				<Dropdown
					{...props}
					selectedKey={value}
					onChange={(e, option?: any) => {
						onChange(option?.key);
						if (props?.bindSubType !== undefined) {
							props?.bindSubType(option?.key);
						}
					}}
					styles={{
						root: {
							backgroundColor:'#FFF',
						},
					}}
					onBlur={onBlur}
					errorMessage={error && error.message}
					defaultValue={undefined}
				/>
			)}
		/>
	);
};

export const RhfDropdownWithClearButton: React.FunctionComponent<
	(HookFormProps & IDropdownProps) | any
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
				<Dropdown
					{...props}
					selectedKey={value}
					onChange={(e, option) => {
						onChange(option?.key);
					}}
					onBlur={onBlur}
					errorMessage={error && error.message}
					defaultValue={undefined}
					onRenderCaretDown={(event) => {
						return props.disabled !== true ? (
							<Stack horizontal verticalAlign={'center'}>
								{value !== null && value !== undefined && value !== '' && (
									<Icon
										iconName={'Cancel'}
										styles={{
											root: {
												color: 'rgb(96, 94, 92)',
												paddingRight: '.7em',
												
												'&:hover': {
													fontWeight: 800,
												},
											},
										}}
										onClick={(event) => {
											event.stopPropagation();
											onChange(null);
										}}
									/>
								)}
								<Icon
									iconName={'ChevronDown'}
									styles={{
										root: {
											color: 'rgb(96, 94, 92)',
											'&:hover': {
												fontWeight: 800,
											},
										},
									}}
									onClick={(event: any) =>
										event.currentTarget.parentNode?.onClick
									}
								/>
							</Stack>
						) : (
							<></>
						);
					}}
				/>
			)}
		/>
	);
};

export const RhfDropdownMultiSelectWithClearButton: React.FunctionComponent<
	(HookFormProps & IDropdownProps) | any
> = (props) => {
	const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
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
				<Dropdown
					{...props}
					selectedKeys={selectedKeys.length > 0 ? selectedKeys : value}
					onChange={(e, item) => {
						if (item) {
							setSelectedKeys(() => {
								let newVal = item.selected
									? [...selectedKeys, item.key as string]
									: selectedKeys.filter((key) => key !== item.key);

								onChange(newVal);
								return newVal;
							});
						}
					}}
					onBlur={onBlur}
					errorMessage={error && error.message}
					defaultValue={undefined}
					onRenderCaretDown={(event) => {
						return (
							<Stack horizontal verticalAlign={'center'}>
								{value !== null && value !== undefined && value !== '' && (
									<Icon
										iconName={'Cancel'}
										styles={{
											root: {
												color: 'rgb(96, 94, 92)',
												paddingRight: '.7em',
												'&:hover': {
													fontWeight: 800,
												},
											},
										}}
										onClick={(event) => {
											event.stopPropagation();
											onChange(null);
											setSelectedKeys([]); // add this line to clear the selected keys state
										}}
									/>
								)}
								<Icon
									iconName={'ChevronDown'}
									styles={{
										root: {
											color: 'rgb(96, 94, 92)',
											'&:hover': {
												fontWeight: 800,
											},
										},
									}}
									onClick={(event: any) =>
										event.currentTarget.parentNode?.onClick
									}
								/>
							</Stack>
						);
					}}
				/>
			)}
		/>
	);
};

export const RhfToggleSwitch: React.FunctionComponent<
	(HookFormProps & IDropdownProps) | any
> = (props) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			rules={props.rules}
			defaultValue={props.defaultValue || false}
			render={({
				field: { onChange, onBlur, name: fieldName, value },
				fieldState: { error },
			}) => (
				<Toggle
					{...props}
					checked={value}
					onChange={(
						_event: React.MouseEvent<HTMLElement>,
						checked: boolean
					) => {
						onChange(checked);
					}}
				/>
			)}
		/>
	);
};

export const RhfChoiceGroup: React.FunctionComponent<
	(HookFormProps & IDropdownProps) | any
> = (props) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			rules={props.rules}
			defaultValue={props.defaultValue}
			render={({
				field: { onChange, onBlur, name: fieldName, value },
				fieldState: { error },
			}) => (
				<ChoiceGroup
					{...props}
					onChange={(
						ev: React.SyntheticEvent<HTMLElement>,
						option: IChoiceGroupOption
					) => {
						onChange(option.key);
					}}
				/>
			)}
		/>
	);
};
