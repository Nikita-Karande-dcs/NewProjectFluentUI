import { Modal, ThemeContext } from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import NotificationBar from '../shared/NotificationBar';
import ContactDetailContents from './HomeListData';
import {
	contactDetailModalcontentStyles,
	contactDetailInTabsectionStackTokens,
	contactDetailModalClassNames,
} from '../../styles/ContactStyles';
const HomeDetailModal: React.FunctionComponent<IButtonPropertyProps> = (
	props
) => {
	const titleId = useId('title');

	const history = useNavigate();

	const handleHideModel = () => {
		history(-1);
	};
	const myThemeContext = React.useContext(ThemeContext);

	const [contactModifySuccess, setContactModifySuccess] = useState(false);

	const [fullScreen, setFullScreen] = React.useState(false);

	return (
		<Modal
			titleAriaId={titleId}
			isOpen={true}
			onDismiss={handleHideModel}
			isBlocking={false}
			containerClassName={
				fullScreen
					? contactDetailModalcontentStyles(myThemeContext).Fullcontainer
					: contactDetailModalcontentStyles(myThemeContext).container
			}
			>
			{/* {contactModifySuccess == true && (
				<NotificationBar
					messageType="success"
					messageText="Request has been sent successfully for approval."
				/>
			)} */}
			<ContactDetailContents
				contentStyles={contactDetailModalcontentStyles(myThemeContext)}
				classNames={contactDetailModalClassNames(myThemeContext)}
				sectionStackTokens={contactDetailInTabsectionStackTokens}
				handleHideModel={handleHideModel}
				setContactModifySuccess={setContactModifySuccess}
				fullScreen={fullScreen}
				setFullScreen={setFullScreen}
				isPopUp={true}
			/>
		</Modal>
	);
};

export interface IButtonPropertyProps {
	disabled?: boolean;
	checked?: boolean;
}

export default HomeDetailModal;
