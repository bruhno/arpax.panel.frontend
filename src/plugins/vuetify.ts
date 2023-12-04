import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { mdiClockOutline } from '@mdi/js';
import { ru, en } from 'vuetify/locale';

export default createVuetify({
  locale: {
    locale: 'ru',
    fallback: 'en',
    messages: { ru, en },
  },
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    aliases: {
      ...aliases,
      clockOutline: mdiClockOutline,
    },
    sets: {
      mdi,
    },
  },
});
