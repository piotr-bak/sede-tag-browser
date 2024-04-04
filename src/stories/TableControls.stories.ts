import type { Meta, StoryObj } from "@storybook/react";
import { TableControls } from "../components/TableControls";

const meta: Meta = {
    title: "Table Controls",
    component: TableControls,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Define mock data for props
const currentRowsPerPage = 10;
const handleRowsPerPageChange = () => {}; // Mock handleRowsPerPageChange function
const isPlaceholderData = false; // Mock isPlaceholderData
const isPending = false; // Mock isPending
const isError = false; // Mock isError

// Define the Base story
export const Base: Story = {
    args: {
        currentRowsPerPage,
        handleRowsPerPageChange,
        isPlaceholderData,
        isPending,
        isError,
    },
};
