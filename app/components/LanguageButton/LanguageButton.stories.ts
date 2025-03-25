import type { Meta, StoryObj } from '@storybook/react';
import { LanguageButton } from './LanguageButton';

const meta = {
    title: 'Common/LanguageButton',  
    component: LanguageButton,       
    tags: ['autodocs'],              
    parameters: {
        layout: 'centered',        
    },
} satisfies Meta<typeof LanguageButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Language: Story = {
    args: {
        icon: 'globe',
    },
};