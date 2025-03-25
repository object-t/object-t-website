import type { Meta, StoryObj } from '@storybook/react';
import { FigmaLink } from './FigmaLink';


const meta = {
    title: 'Common/FigmaLink',
    component: FigmaLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof FigmaLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Figma: Story = {
    args: {
        label: 'Figma',
        link: 'https://www.figma.com/design/YWBtX9qhd0QKOTY4a2SEWx/Untitled?node-id=0-1&t=xTES000ahny4EJt1-1'
    },
};