import type { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "../components/TableHeader";

const meta = {
    title: "Table Header",
    component: TableHeader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data for props
const handleSort = () => {};
const order = "asc";
const orderBy = "name";
const data = { items: [] };
const isPending = false;

export const Base: Story = {
    args: {
        handleSort,
        order,
        orderBy,
        data,
        isPending,
    },
};
