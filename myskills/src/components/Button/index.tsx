import React from "react";
import { ButtonText, ButtonTouch } from "./styles";

interface PropsButton {
	onPress: () => void;
	title: string;
}

export function Button({ title, ...rest }: PropsButton) {
	return (
		<ButtonTouch {...rest} activeOpacity={0.7}>
			<ButtonText>{title}</ButtonText>
		</ButtonTouch>
	);
}
