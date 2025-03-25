import type { Meta, StoryObj } from '@storybook/react';
import { ListLink } from './ListLink';


const meta = {
    title: 'Common/ListLink',
    component: ListLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ListLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const List: Story = {
    args: {
        link: 'https://www.google.com',//適当に変えてください
    },
};