import {
	Check,
	ICheckStyles,
	IObjectWithKey,
	ISelection,
	SelectionMode,
} from '@fluentui/react';
import { SelectionItemCheck } from '../../styles/SharedStyles';

interface ISelectionItemProps {
	item: any;
	itemIndex?: number;
	selection?: ISelection<IObjectWithKey | any>;
	selectionMode?: SelectionMode;
}

export const SelectionItem: React.FunctionComponent<ISelectionItemProps> = (
	props: ISelectionItemProps
) => {
	const { item, itemIndex, selection } = props;
	let isSelected = false;

	if (selection && itemIndex !== undefined) {
		isSelected = selection.isIndexSelected(itemIndex);
	}

	const checkboxStyle: ICheckStyles = {
		root: {
			margin: '0 auto',
		},
		check: undefined,
		circle: undefined,
		checkHost: undefined,
	};

	return (
		<div
			className={isSelected ? '' : 'workflowSelectBoxDiv'}
			data-is-focusable
			data-selection-index={itemIndex}>
			{selection &&
				selection.canSelectItem(item as any) &&
				selection.mode !== SelectionMode.none && (
					<div
						style={SelectionItemCheck}
						data-is-focusable
						data-selection-toggle>
						<Check checked={isSelected} styles={checkboxStyle} />
					</div>
				)}
		</div>
	);
};

export default SelectionItem;
