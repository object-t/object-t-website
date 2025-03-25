import type { Meta, StoryObj } from '@storybook/react';
import { MemberLink } from './MemberLink';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


const withRouter = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);

const meta = {
    title: 'Common/MemberLink',  
    component: MemberLink,       
    tags: ['autodocs'],              
    parameters: {
        layout: 'centered',        
    },
    decorators: [withRouter],
} satisfies Meta<typeof MemberLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Member',
        isActive: false,
        to: '/member'
    },
};

export const Active: Story = {
    args: {
        label: 'Member',
        isActive: true,
        to: '/member'
    },
};