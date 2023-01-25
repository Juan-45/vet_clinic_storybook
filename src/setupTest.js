import { setGlobalConfig } from "@storybook/testing-react";
import "@testing-library/jest-dom/extend-expect";
// path of your preview.js file
import * as globalStorybookConfig from "../.storybook/preview";
// add all jest-extended matchers
import * as matchers from "jest-extended";

setGlobalConfig(globalStorybookConfig);

expect.extend(matchers);
