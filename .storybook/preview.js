
import React from "react";
import { GlobalStyle } from "../src/components/shared/global";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

const loaderFn = () => {
	return [
		require("../src/stories/Introduction.stories.mdx"),
    require("../src/stories/Color.stories.mdx"),
    require("../src/stories/Typography.stories.mdx"),
	];
};
configure(loaderFn, module);
addParameters({
  options: {
    showRoots: true,
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
});
addDecorator(withA11y);
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}