import type { Meta, StoryObj } from '@storybook/react';
import { SubTitle } from './SubTitle';

const meta = {
    title: 'Common/SubTitle',
    component: SubTitle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['home', 'section'],
        }
    },
} satisfies Meta<typeof SubTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
    args: {
        label: '学生の未来をもっと「明るく」',
        variant: 'home',
    },
};

export const Section: Story = {
    args: {
        label: 'お知らせ',
        variant: 'section',
    },
};