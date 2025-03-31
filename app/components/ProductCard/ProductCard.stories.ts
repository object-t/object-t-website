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
    linkedButtons: [
      {
        url: 'https://github.com/naoido/neko-bot',
        label: 'Github',
      },
    ]
  }
}

export const Website: Story = {
  args: {
    headerImage: "https://pbs.twimg.com/profile_banners/1846395762277826560/1737992837/1500x500",
    title: "団体公式サイト",
    stacks: ["Cloudflare", "React", "Cloudflareworkers"],
    description: "団体公式のウェブサイトです。Reactで構成されており、Cloudfalre Workers使用し記事の更新などを行い、Cloudflare Pagesにデプロイしています。",
    stars: 2,
    commits: 86,
    pullRequests: 54,
    linkedButtons: [
      {
        url: 'https://github.com/object-t/object-t-website',
        label: 'Github',
      },
      {
        url: "https://www.figma.com/design/YWBtX9qhd0QKOTY4a2SEWx",
        label: "Figma",
      }
    ]
  }
}

