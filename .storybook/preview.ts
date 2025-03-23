import type { Preview } from '@storybook/react';
<<<<<<< HEAD
import 'devicon/devicon.min.css';
import '../app/app.css';
=======
>>>>>>> 5b0b5a5 (fix: Storybookのtestでエラーが出る問題を修正)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;