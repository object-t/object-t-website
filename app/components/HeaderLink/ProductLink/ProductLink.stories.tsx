import type { Meta, StoryObj } from '@storybook/react';
import { ProductLink } from './ProductLink';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


const withRouter = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);

const meta = {
    title: 'HeaderLink/ProductLink',
    component: ProductLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [withRouter],
} satisfies Meta<typeof ProductLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Product',
        isActive: false,
        to: '/product'
    },
};

export const Active: Story = {
    args: {
        label: 'Product',
        isActive: true,
        to: '/product'
    },
};