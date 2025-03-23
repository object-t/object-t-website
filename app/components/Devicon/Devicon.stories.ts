import type { Meta, StoryObj } from '@storybook/react';

import { Devicon } from './Devicon';

const meta = {
  title: 'Common/Devicon',
  component: Devicon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Devicon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    icon: 'storybook',
    tooltip: 'disable',
    size: '100px'
  },
};

export const IconWithTooltip: Story = {
  args: {
    icon: 'storybook',
    tooltip: 'enable',
    size: '100px'
  },
};
