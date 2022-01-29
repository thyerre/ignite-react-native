import React from "react";
import { SkillTouch, TextSkill } from "./styles";

export function Skill({ value }: any) {
	return (
		<SkillTouch>
			<TextSkill>{value}</TextSkill>
		</SkillTouch>
	);
}
