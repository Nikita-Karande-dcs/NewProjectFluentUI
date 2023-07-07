import { Control, RegisterOptions, UseFormSetValue } from 'react-hook-form';

export interface HookFormProps {
	control?: Control<any>|any;
	name: string;
	rules?: RegisterOptions;
	defaultValue?: any;
	setValue?: UseFormSetValue<any>;
	valueDataType?: string;
}
