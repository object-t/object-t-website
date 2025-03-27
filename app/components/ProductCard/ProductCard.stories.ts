import type { Meta, StoryObj } from "@storybook/react";

import { ProductCard } from "./ProductCard";

const meta = {
  title: "Card/ProductCard",
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NekoBot: Story = {
  args: {
    headerImage: "https://pbs.twimg.com/profile_banners/1846395762277826560/1737992837/1500x500",
    title: "Neko Bot",
    stacks: ["Go-wordmark", "Jenkins"],
    description: "ねこbotは団体discordで運用しているbotです。\n団体内での情報共有や、AIによる質問返答、グループ管理の役割を担っています。",
    stars: 1,
    commits: 142,
    pullRequests: 75,
  }
}
