import type { Meta, StoryObj } from '@storybook/react';
import { DetailLink } from './DetailLink';


const meta = {
    title: 'Common/DetailLink',
    component: DetailLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DetailLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Detail: Story = {
    args: {
        link: 'https://www.google.com',//適当に変えてください
    },
};