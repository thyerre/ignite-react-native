import React from "react";
import { SkillTouch, TextSkill } from "./styles";

interface PropSkill {
	name: string;
	onPress: () => void
}

export function Skill({ name, ...rest}: PropSkill) {
	return (
		<SkillTouch {...rest}>
			<TextSkill>{name}</TextSkill>
		</SkillTouch>
	);
}
