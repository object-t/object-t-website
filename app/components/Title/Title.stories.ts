import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta = {
    title: 'Common/Title',
    component: Title,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        align: {
            control: 'select',
            options: ['left', 'right'],
        }
    },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeTitle: Story = {
    args: {
        label: 'Object<T>',
        subLabel: '学生の未来をもっと「明るく」'
    },
};

export const SectionTitle: Story = {
    args: {
        label: 'ABOUT',
        subLabel: '私たちについて',
        align: 'left',
    },
};