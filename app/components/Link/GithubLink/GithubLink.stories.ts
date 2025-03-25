import type { Meta, StoryObj } from '@storybook/react';
import { GithubLink } from './GithubLink';


const meta = {
    title: 'Common/GithubLink',
    component: GithubLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GithubLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Github: Story = {
    args: {
        label: 'Github',
        link: 'https://github.com/naoido/neko-bot'
    },
};