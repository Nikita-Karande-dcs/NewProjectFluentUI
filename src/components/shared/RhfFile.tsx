import * as React from 'react';
import { Controller } from 'react-hook-form';
import {
	IconButton,
	IIconProps,
	ITextFieldProps,
	Stack,
	TextField,
} from '@fluentui/react';
import { HookFormProps } from './HookFormProps';
import { RhfTextField } from './RhfTextField';
import { textFieldStyle } from './CTextField';

export interface IFileUploader {
	handleFile: Function;
}

export const RhfFile: React.FunctionComponent<
	HookFormProps & ITextFieldProps & IFileUploader
> = (props) => {
	const hiddenFileInput = React.useRef<any>();
	const uploadIcon: IIconProps = { iconName: 'Upload' };

	const handleFileUpload = (event: any) => {
		if (event.target.files) {
			const fileUploaded = event.target.files[0];
			props.handleFile(fileUploaded);
		}
	};

	const handleClick = (event: any) => {
		hiddenFileInput.current.click();
	};

	return (
		<Controller
			control={props.control}
			name="supportFileName"
			render={({ field, fieldState }) => (
				<Stack horizontal>
					<RhfTextField
						control={props.control}
						name="supportFileName"
						styles={textFieldStyle}
					/>
					<IconButton iconProps={uploadIcon} onClick={handleClick}>
						<input
							ref={hiddenFileInput}
							onChange={handleFileUpload}
							type="file"
							style={{ display: 'none' }}
							// multiple={false}
						/>
					</IconButton>
				</Stack>
			)}
		/>
	);
};
