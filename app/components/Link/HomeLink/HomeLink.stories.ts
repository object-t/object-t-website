import type { Meta, StoryObj } from '@storybook/react';
import { HomeLink } from './HomeLink';


const meta = {
    title: 'Common/HomeLink',
    component: HomeLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof HomeLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const WithCustomOnClick: Story = {
    args: {
        label: 'Home',
    },
};