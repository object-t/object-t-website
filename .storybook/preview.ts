import type { Preview } from '@storybook/react';
import 'devicon/devicon.min.css';
import '../app/app.css';

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