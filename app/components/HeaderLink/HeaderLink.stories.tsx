import type { Meta, StoryObj } from '@storybook/react';
import { HeaderLink } from './HeaderLink';

const meta = {
    title: 'Common/HeaderLink',
    component: HeaderLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof HeaderLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'HOME',
        isActive: false,
        to: '#home'
    },
};

export const HeaderLinkActive: Story = {
    args: {
        label: 'BLOG',
        isActive: true,
        to: '/blog'
    },
};

