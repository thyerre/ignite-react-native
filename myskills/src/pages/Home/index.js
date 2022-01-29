import React, { useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Skill } from "../../components/Skill";
import { ContainerView, Input, TitleHome, TitleSkill } from "./styles";

export function Home() {
	const [newSkill, setNewSkill] = useState("");
	const [mySkills, setMySkills] = useState([]);

	function handleAddNewSkill() {
		if (newSkill !== "") {
			addSkill(newSkill);
			setNewSkill("");
		}
	}

	function addSkill(skill) {
		setMySkills([...mySkills, skill]);
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

			<Button onPress={handleAddNewSkill} />

			<TitleSkill>My Skills</TitleSkill>

			<FlatList
				data={mySkills}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
          <Skill value={item} key={item} />
        )}
        showsVerticalScrollIndicator={false}
			/>
		</ContainerView>
	);
}
