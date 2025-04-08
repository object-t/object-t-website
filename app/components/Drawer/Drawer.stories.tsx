import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';


const meta = {
  title: 'Common/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        'label': "HOME",
        'to': "#home"
      },
      {
        'label': "MEMBER",
        'to': "#member"
      },
      {
        'label': "PRODUCT",
        'to': "#product"
      },
      {
        'label': "BLOG",
        'to': "#blog"
      }
    ],
    onClick: () => {},
    children: (
      <button>クリック</button>
    )
  }
};
