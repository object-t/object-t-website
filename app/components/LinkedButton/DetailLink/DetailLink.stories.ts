import type { Meta, StoryObj } from '@storybook/react';
import { DetailLink } from './DetailLink';


const meta = {
    title: 'LinkedButton/DetailLink',
    component: DetailLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DetailLink>;

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

export const Outlined: Story = {
    args: {
        url: 'https://example.com',
        label: '詳細',
        style: 'outlined',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};