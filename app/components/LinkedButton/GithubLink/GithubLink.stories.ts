import type { Meta, StoryObj } from '@storybook/react';
import { GithubLink } from './GithubLink';


const meta = {
    title: 'LinkedButton/GithubLink',
    component: GithubLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GithubLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        url: 'https://github.com/naoido/neko-bot',
        label: 'Github',
        style: 'default',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};

export const Outlined: Story = {
    args: {
        url: 'https://github.com/naoido/neko-bot',
        label: 'Github',
        style: 'outlined',
        backgroundColor: 'var(--primery-color)',
        color: 'var(--accent-color)'
    },
};