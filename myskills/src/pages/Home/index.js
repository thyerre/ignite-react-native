import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Skill } from "../../components/Skill";
import {
	ContainerView,
	Input,
	TitleHome,
	TitleSkill,
} from "./styles";

export function Home() {
	const [newSkill, setNewSkill] = useState("");
	const [mySkills, setMySkills] = useState([]);

	function handleAddNewSkill() {
		addSkill(newSkill);
		setNewSkill("");
	}

	function addSkill(skill) {
		setMySkills((oldState) => [...oldState, skill]);
	}

	return (
		<ContainerView>
			<StatusBar
				barStyle="light-content"
				backgroundColor="#121015"
				translucent={false}
				networkActivityIndicatorVisible={true}
			/>
			<TitleHome>Welcome, Thyerre</TitleHome>
			<Input
				placeholder="new skill"
				onChangeText={setNewSkill}
				placeholderTextColor="#555"
        value={newSkill}
			/>

      <Button />

			<TitleSkill>My Skills</TitleSkill>
			{mySkills.map((skill) => (
				<Skill />
			))}
		</ContainerView>
	);
}
