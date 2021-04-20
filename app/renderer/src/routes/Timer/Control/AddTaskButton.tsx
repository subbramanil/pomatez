import React, { useRef, useCallback } from "react";
import { StyledAddButton } from "styles";
import { useRippleEffect } from "hooks";
import { SVG } from "components";
import { useDispatch } from "react-redux";

type Props = {
} & React.HTMLProps<HTMLButtonElement>;

const AddTaskButton: React.FC<Props> = ({ onClick }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	const buttonClickAction = useRippleEffect();

	const onAddTaskButton = useCallback(
		(e) =>
			buttonClickAction(e, buttonRef, () => {
				if (onClick) {
					onClick(e);
				}
			}),
		[buttonClickAction, onClick]
	);

	return (
		<StyledAddButton ref={buttonRef} onClick={onAddTaskButton}>
			{<SVG name="volume-on" />}
		</StyledAddButton>
	);
};

export default React.memo(AddTaskButton);
