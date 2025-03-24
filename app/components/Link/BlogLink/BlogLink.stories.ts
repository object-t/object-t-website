import type { Meta, StoryObj } from '@storybook/react';
import { BlogLink } from './BlogLink';


const meta = {
    title: 'Common/BlogLink',  
    component: BlogLink,       
    tags: ['autodocs'],              
    parameters: {
        layout: 'centered',        
    },
} satisfies Meta<typeof BlogLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const WithCustomOnClick: Story = {
    args: {
        label: 'Blog',
    },
};