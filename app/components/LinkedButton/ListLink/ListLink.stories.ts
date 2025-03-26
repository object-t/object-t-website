import type { Meta, StoryObj } from '@storybook/react';
import { ListLink } from './ListLink';


const meta = {
    title: 'LinkedButton/ListLink',
    component: ListLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ListLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        url: 'https://example.com',
        label: '一覧',
        style: 'default',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const Outlined: Story = {
    args: {
        url: 'https://example.com',
        label: '一覧',
        style: 'outlined',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};