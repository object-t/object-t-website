import type { Meta, StoryObj } from '@storybook/react';
import logo from '../assets/logo.webp';
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
    headerImage: "https://pbs.twimg.com/media/Ge1P7h9bkAARNb9?format=jpg&name=medium",
    title: "ハックツハッカソン初優勝",
    from: new Date('2024-03-01T12:00:00Z'),
    to: new Date('2024-03-02T12:00:00Z'),
    description: "株式会社ハックツ様主催のハッカソン「アンキロカップ」にて最優秀賞を獲得しました!\n2日間のハッカソン期間中徹夜で仕上げ、気持ちを込めた作品だったので優勝できてとても嬉しかったです！！",
    url: "https://github.com/object-t/object-t-website"
  }
};

export const sakata: Story = {
  args: {
    headerImage: "https://pbs.twimg.com/media/GkyBWsiaoAA0nwH?format=jpg&name=medium",
    title: "2度目のハッカソン優勝",
    from: new Date("2025-02-26T12:00:00.000Z"),
    to: new Date("2024-02-27T12:00:00.000Z"),
    description: "今回も株式会社ハックツ様のハッカソンに参加してきました！\n株式会社ヌーラボ様のオフィスをお借りしてのハッカソン、そして年1回の野良ハッカソンだったのでとても楽しかったです！そして副代表のthirld03が優勝しました！！",
    url: "https://github.com/object-t/object-t-website"
  }
};



export const ObjectT: Story = {
  args: {
    headerImage: logo,
    title: "学生団体Object<T>結成",
    from: new Date("2024-03-01T12:00:00.000Z"),
    description: "念願の学生団体Object<T>を結成しました！これからたくさんの学生のスキルアップなどを目指した学生団体を目指し、この学生団体に入ってよかったと思っていただけるような団体を目指しがんばります！",
    url: "https://github.com/object-t/object-t-website"
  }
};



