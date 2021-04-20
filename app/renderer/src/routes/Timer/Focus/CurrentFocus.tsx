import React, { useState } from "react";

import { StyledCurrentTaskContainer, StyledCurrentTaskWrapper } from "styles";

import TaskHeader from "./FocusItem";
import { addTask } from "../../../store/airtabledb";

const PriorityCard: React.FC = () => {
	const [currentTask, setCurrentTask] = useState("Test");

	const handleTask = (taskTitle: string) => {
		console.log("Current Task is", taskTitle);
		setCurrentTask(taskTitle);
		addTask(taskTitle, 0, "Todo");
	};

	return (
		<StyledCurrentTaskContainer>
			<StyledCurrentTaskWrapper>
				<TaskHeader title={currentTask} onEditTitle={handleTask} />
			</StyledCurrentTaskWrapper>
		</StyledCurrentTaskContainer>
	);
};

export default React.memo(PriorityCard);
