import type { Meta, StoryObj } from '@storybook/react';
import { SectionSubTitle } from './SectionSubTitle';

const meta = {
    title: 'Common/SectionSubTitle',
    component: SectionSubTitle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SectionSubTitle>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SectionSub: Story = {
    args: {
        label: 'お知らせ',
    },
};