import React from "react";
import { Border } from "./index";
import {
	withKnobs,
	text,
	boolean,
	color,
	select,
} from "@storybook/addon-knobs";

export default {
	title: "Border",
	component: Border,
	decorators: [withKnobs],
};

export const knobsBtn = () => (
    <Border />
);