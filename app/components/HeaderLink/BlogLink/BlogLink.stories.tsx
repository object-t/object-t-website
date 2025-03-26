import type { Meta, StoryObj } from '@storybook/react';
import { BlogLink } from './BlogLink';
import { BrowserRouter } from 'react-router-dom';


const withRouter = (Story) => (
    <BrowserRouter>
    <Story />
    </BrowserRouter>
);

const meta = {
    title: 'HeaderLink/BlogLink',
    component: BlogLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [withRouter], 
} satisfies Meta<typeof BlogLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Blog',
        isActive: false,
        to: '/'
    },
};

export const Active: Story = {
    args: {
        label: 'Blog',
        isActive: true,
        to: '/'
    },
};