import React, { useContext, useEffect } from "react";
import SettingSection from "./SettingSection";
import { ElectronContext } from "contexts";
import { Help } from "components";

const HelpSection: React.FC = () => {
	const { openExternalCallback } = useContext(ElectronContext);

	useEffect(() => {
		if (openExternalCallback) {
			openExternalCallback();
		}
	}, [openExternalCallback]);

	return (
		<SettingSection heading="Need Help ?">
			<Help label="Official website" link="https://subbramanil.github.io" />
			<Help
				label="Open an issue"
				link="https://github.com/subbramanil/pomatez/issues"
			/>
			<Help
				label="Release notes"
				link="https://github.com/subbramanil/pomatez/releases/latest"
			/>
			<Help label="Contact the developer" link="mailto:subbramanil@gmail.com" />
		</SettingSection>
	);
};

export default HelpSection;
