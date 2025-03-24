import type { Meta, StoryObj } from '@storybook/react';
import { MemberLink } from './MemberLink';


const meta = {
    title: 'Common/MemberLink',  
    component: MemberLink,       
    tags: ['autodocs'],              
    parameters: {
        layout: 'centered',        
    },
} satisfies Meta<typeof MemberLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const WithCustomOnClick: Story = {
    args: {
        label: 'Member',
    },
};