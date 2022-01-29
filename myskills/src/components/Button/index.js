import React from 'react';
import { ButtonText, ButtonTouch} from './styles';


export function Button() {

  function handleAddNewSkill() {
		// addSkill(newSkill);
		// setNewSkill("");
	}

	return (
		<ButtonTouch onPress={handleAddNewSkill}>
			<ButtonText>Add</ButtonText>
		</ButtonTouch>
	);
}
