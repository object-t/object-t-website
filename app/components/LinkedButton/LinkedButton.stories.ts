import type { Meta, StoryObj } from '@storybook/react';
import { LinkedButton } from './LinkedButton';


const meta = {
    title: 'Common/LinkedButton',
    component: LinkedButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof LinkedButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        url: 'https://example.com',
        label: '詳細',
        style: 'default',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const LinkedButtonOutlined: Story = {
    args: {
        url: 'https://example.com',
        label: '詳細',
        style: 'outlined',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

