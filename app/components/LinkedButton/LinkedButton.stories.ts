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


export const Detail1: Story = {
    args: {
        url: 'https://example.com',
        label: '詳細',
        style: 'default',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const Detail2: Story = {
    args: {
        url: 'https://example.com',
        label: '詳細',
        style: 'outlined',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const Figma1: Story = {
    args: {
        url: 'https://www.figma.com/design/YWBtX9qhd0QKOTY4a2SEWx/Untitled?node-id=0-1&t=xTES000ahny4EJt1-1',
        label: 'Figma',
        style: 'default',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const Figma2: Story = {
    args: {
        url: 'https://www.figma.com/design/YWBtX9qhd0QKOTY4a2SEWx/Untitled?node-id=0-1&t=xTES000ahny4EJt1-1',
        label: 'Figma',
        style: 'outlined',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const Github1: Story = {
    args: {
        url: 'https://github.com/naoido/neko-bot',
        label: 'Github',
        style: 'default',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const Github2: Story = {
    args: {
        url: 'https://github.com/naoido/neko-bot',
        label: 'Github',
        style: 'outlined',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const List1: Story = {
    args: {
        url: 'https://example.com',
        label: '一覧',
        style: 'default',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const List2: Story = {
    args: {
        url: 'https://example.com',
        label: '一覧',
        style: 'outlined',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};