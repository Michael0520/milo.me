import config from '@slidev/client/uno.config';
import { mergeConfigs, presetIcons, presetWebFonts } from 'unocss';

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient':
        'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    presets: [
      presetIcons({
        scale: 1.2,
        cdn: 'https://esm.sh/',
      }),
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          strong: 'Rubik Iso',
          fast: 'Ubuntu',
          hand: 'Caveat',
        },
      }),
    ],
  },
]);



