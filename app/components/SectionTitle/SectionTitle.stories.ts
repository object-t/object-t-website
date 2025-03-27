import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitle } from './SectionTitle';

const meta = {
    title: 'Common/SectionTitle',
    component: SectionTitle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Section: Story = {
    args: {
        label: 'NOTICE',
    },
};