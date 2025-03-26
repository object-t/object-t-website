import type { Meta, StoryObj } from '@storybook/react';

import { MemberCard } from './MemberCard';

const meta = {
  title: 'Card/MemberCard',
  component: MemberCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MemberCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Naoto Kido",
    role: "代表",
    description: "よわよわプログラマ",
    stacks: ["Kubernetes", "AWS", "Java", "Go-wordmark", "Flutter"],
    headerImage: "https://pbs.twimg.com/profile_banners/1846395762277826560/1737992837/1500x500",
    iconImage: "https://avatars.githubusercontent.com/u/54303857",
    githubName: "naoido",
  },
};
