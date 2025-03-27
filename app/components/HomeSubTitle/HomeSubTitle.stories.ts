import type { Meta, StoryObj } from '@storybook/react';
import { HomeSubTitle } from './HomeSubTitle';

const meta = {
    title: 'Common/HomeSubTitle',
    component: HomeSubTitle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof HomeSubTitle>;

export default meta;
type Story = StoryObj<typeof meta>;


export const HomeSub: Story = {
    args: {
        label: '学生の未来をもっと「明るく」',
    },
};