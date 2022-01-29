import React from "react";
import { ButtonText, ButtonTouch } from "./styles";

export function Button({ onPress }: any) {
	return (
		<ButtonTouch onPress={onPress}>
			<ButtonText>Add</ButtonText>
		</ButtonTouch>
	);
}
