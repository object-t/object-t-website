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

export const Default: Story = {
    args: {
        label: 'Blog',
        isActive: false,
        to: '/'
    },
};

export const HeaderLinkActive: Story = {
    args: {
        label: 'Blog',
        isActive: true,
        to: '/'
    },
};

