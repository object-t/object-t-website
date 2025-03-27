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
        variant: {
            control: 'select',
            options: ['home', 'section'],
        }
    },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
    args: {
        label: 'Object<T>',
        variant: 'home',
    },
};

export const Section: Story = {
    args: {
        label: 'NOTICE',
        variant: 'section',
    },
};