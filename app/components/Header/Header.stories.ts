import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  title: 'Common/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: [
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
    ]
  },
};
