import React from "react";
import { StyledSectionSticky, StyledStarButton } from "styles";

const StickySection: React.FC = () => {
	return (
		<StyledSectionSticky>
			<StyledStarButton as="a" href="https://github.com/subbramanil/pomatez">
				Star it on GitHub
			</StyledStarButton>
		</StyledSectionSticky>
	);
};

export default StickySection;
