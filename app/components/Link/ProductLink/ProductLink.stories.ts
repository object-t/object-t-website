import type { Meta, StoryObj } from '@storybook/react';
import { ProductLink } from './ProductLink';


const meta = {
    title: 'Common/ProductLink',
    component: ProductLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProductLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const WithCustomOnClick: Story = {
    args: {
        label: 'Product',
    },
};