import React, { useRef, useEffect } from "react";
import {
	StyledTaskHeader,
	StyledCurrentTask,
	StyledTaskHeadeInput,
} from "styles";
import { useTargetOutside } from "hooks";

type Props = {
	title: string;
	onEditTitle?: (title: string) => void;
};

const FocusItem: React.FC<Props> = ({ title, onEditTitle }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const [editing, setEditing] = useTargetOutside({ ref: inputRef });

	useEffect(() => {
		if (editing) {
			if (inputRef.current) {
				inputRef.current.focus();
				inputRef.current.value = title;

				inputRef.current.onblur = () => {
					if (inputRef.current) {
						if (onEditTitle && inputRef.current.value) {
							onEditTitle(inputRef.current.value);
						}
						setEditing(false);
					}
				};

				inputRef.current.onkeyup = (e: KeyboardEvent) => {
					if (e.keyCode === 13) {
						if (inputRef.current) {
							if (onEditTitle && inputRef.current.value) {
								onEditTitle(inputRef.current.value);
							}
							setEditing(false);
						}
					}
				};
			}
		}
	}, [editing, title, setEditing, onEditTitle]);

	const onEditTitleAction = () => setEditing(true);

	const renderFocusItemTitle = () =>
		editing ? (
			<StyledTaskHeadeInput ref={inputRef} />
		) : (
			<StyledCurrentTask onClick={onEditTitleAction}>{title}</StyledCurrentTask>
		);

	return <StyledTaskHeader>{renderFocusItemTitle()}</StyledTaskHeader>;
};

export default React.memo(FocusItem);
