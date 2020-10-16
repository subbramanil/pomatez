import React, { useContext, useCallback } from "react";
import { CounterContext } from "contexts";
import { StyledTimer } from "styles";

import Counter from "./Counter";
import Control from "./Control";
import CurrentTask from "./Focus/CurrentFocus";

export default () => {
	const { resetTimerAction } = useContext(CounterContext);

	const onResetCallback = useCallback(() => {
		if (resetTimerAction) resetTimerAction();
	}, [resetTimerAction]);

	return (
		<StyledTimer>
			<Counter />
			<CurrentTask />
			<Control resetTimerAction={onResetCallback} />
		</StyledTimer>
	);
};
