import type { Meta, StoryObj } from '@storybook/react';
import { HomeLink } from './HomeLink';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


const withRouter = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);

const meta = {
    title: 'HeaderLink/HomeLink',
    component: HomeLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [withRouter],
} satisfies Meta<typeof HomeLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Home',
        isActive: false,
        to: '/'
    },
};

export const Active: Story = {
    args: {
        label: 'Home',
        isActive: true,
        to: '/'
    },
};