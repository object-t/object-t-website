import type { Meta, StoryObj } from '@storybook/react';
import { HomeTitle } from './HomeTitle';

const meta = {
    title: 'Common/HomeTitle',
    component: HomeTitle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof HomeTitle>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Home: Story = {
    args: {
        label: 'Object<T>',
    },
};