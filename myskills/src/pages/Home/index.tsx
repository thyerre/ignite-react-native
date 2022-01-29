import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Skill } from "../../components/Skill";
import { ContainerView, Input, TitleHome, TitleSkill } from "./styles";

export function Home() {
	const [newSkill, setNewSkill] = useState<string>("");
	const [mySkills, setMySkills] = useState<string[]>([]);

	function handleAddNewSkill(): void {
		if (newSkill !== "") {
			addSkill(newSkill);
			setNewSkill("");
		}
	}

	function addSkill(skill: string): void {
		setMySkills([...mySkills, skill]);
	}

	function handleRemoveSkill(skill: string): void {
		setMySkills(mySkills.filter((elem) => elem !== skill));
	}

	useEffect(() => {}, []);

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

			<Button onPress={handleAddNewSkill} title="Add" />

			<TitleSkill>My Skills</TitleSkill>

			<FlatList
				data={mySkills}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Skill 
						name={item} 
						key={item} 
						onPress={() => handleRemoveSkill(item)} 
					/>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</ContainerView>
	);
}
