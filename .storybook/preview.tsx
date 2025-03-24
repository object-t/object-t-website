import type { Preview } from '@storybook/react';
import 'devicon/devicon.min.css';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import '../app/app.css';
import "../app/i18n/config";
import i18n from '../app/i18n/config';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};

export default preview;