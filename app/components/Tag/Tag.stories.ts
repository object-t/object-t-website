import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
    title: 'Common/Tag',
    component: Tag,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Hackathon: Story = {
    args: {
        kind: 'hackathon',
    },
};

export const Recruitment: Story = {
    args: {
        kind: 'recruitment',
    },
};

export const Urgent: Story = {
    args: {
        kind: 'urgent',
    },
};