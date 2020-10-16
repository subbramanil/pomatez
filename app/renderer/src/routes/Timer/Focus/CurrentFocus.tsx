import React, { useState } from "react";

import { StyledCurrentTaskContainer, StyledCurrentTaskWrapper } from "styles";

import TaskHeader from "./FocusItem";

const PriorityCard: React.FC = () => {
	const [currentTask, setCurrentTask] = useState("Test");

	const handleTask = (taskTitle: string) => {
		console.log("Current Task is", taskTitle);
		setCurrentTask(taskTitle);
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
