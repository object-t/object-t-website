import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta = {
  title: 'Common/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomTooltip: Story = {
  args: {
    content: 'content',
    location: 'bottom',
    children: (
      <button>クリック</button>
    )
  },
};
