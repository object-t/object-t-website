import type { Meta, StoryObj } from '@storybook/react';

import { ActivityCard } from './ActivityCard';

const meta = {
  title: 'Card/ActivityCard',
  component: ActivityCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActivityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ankylo: Story = {
  args: {
    headerImage: "https://pbs.twimg.com/profile_banners/1846395762277826560/1737992837/1500x500",
    title: "ハックツハッカソン初優勝",
    from: new Date('2024-03-01T12:00:00Z'),
    to: new Date('2024-03-02T12:00:00Z'),
    description: "株式会社ハックツ様主催のハッカソン「アンキロカップ」にて最優秀賞を獲得しました!\n2日間のハッカソン期間中徹夜で仕上げ、気持ちを込めた作品だったので優勝できてとても嬉しかったです！！",
  }
};



