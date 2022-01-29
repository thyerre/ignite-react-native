import React from "react";
import { SkillTouch, TextSkill } from "./styles";

interface PropSkill {
	value: string
}

export function Skill({ value }: PropSkill) {
	return (
		<SkillTouch>
			<TextSkill>{value}</TextSkill>
		</SkillTouch>
	);
}
