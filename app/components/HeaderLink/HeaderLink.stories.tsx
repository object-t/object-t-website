import type { Meta, StoryObj } from '@storybook/react';
import { HeaderLink } from './HeaderLink';
import { BrowserRouter } from 'react-router-dom';


const withRouter = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);

const meta = {
    title: 'Common/HeaderLink',
    component: HeaderLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [withRouter],
} satisfies Meta<typeof HeaderLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blog1: Story = {
    args: {
        label: 'Blog',
        isActive: false,
        to: '/'
    },
};

export const Blog2: Story = {
    args: {
        label: 'Blog',
        isActive: true,
        to: '/'
    },
};

export const Home1: Story = {
    args: {
        label: 'Home',
        isActive: false,
        to: '/'
    },
};

export const Home2: Story = {
    args: {
        label: 'Home',
        isActive: true,
        to: '/'
    },
};

export const Member1: Story = {
    args: {
        label: 'Member',
        isActive: false,
        to: '/member'
    },
};

export const Member2: Story = {
    args: {
        label: 'Member',
        isActive: true,
        to: '/member'
    },
};

export const Product1: Story = {
    args: {
        label: 'Product',
        isActive: false,
        to: '/product'
    },
};

export const Product2: Story = {
    args: {
        label: 'Product',
        isActive: true,
        to: '/product'
    },
};