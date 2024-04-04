import type { Meta, StoryObj } from "@storybook/react";
import { ErrorSnackbar } from "../components/ErrorSnackbar";

const meta = {
    title: "Error Snackbar",
    component: ErrorSnackbar,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ErrorSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
    args: {
        label: "Error Snackbar",
    },
};
