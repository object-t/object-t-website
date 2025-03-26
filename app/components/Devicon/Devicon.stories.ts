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
    icon: "storybook",
    tooltip: 'disable',
    size: '100px'
  },
};

export const IconWithTooltip: Story = {
  args: {
    icon: "storybook",
    tooltip: 'enable',
    size: '100px'
  },
};

export const IconWhenSpecialClassPattern: Story = {
  parameters: {
    docs: {
      description: {
        story: "`icon`に技術名がそのまま使用できない場合、`devicon-`以降のクラス名を入力することで反映されます。(`go-original-wordmark`)\n\n"
        + "もしくは、クラス名をそのまま入力することでも反映されます。(`devicon-go-original-wordmark`)\n\n"
        + "技術名に大文字を入れた場合は、Tooltipの文字列に大文字が反映されます。"
      }
    }
  },
  args: {
    icon: "Go-wordmark",
    tooltip: 'enable',
    size: '100px'
  },
};
