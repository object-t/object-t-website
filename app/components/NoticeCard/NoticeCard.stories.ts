import type { Meta, StoryObj } from '@storybook/react';
import { NoticeCard } from './NoticeCard';
import logo from '../assets/logo.webp';

const meta: Meta<typeof NoticeCard> = {
    title: 'Card/NoticeCard',
    component: NoticeCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imageUrl: logo,
        tags: ['hackathon', 'recruitment' ],
        title: '学内ハッカソン開催',
        description: '今回は学内のスキルアップを目指して学内ハッカソンを開催することになりました！詳細ページはこちらをクリック！',
        date: '開催日: 2025年5月12日(月)',
    },
};
