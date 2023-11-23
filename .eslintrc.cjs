/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const INLINE_ELEMENTS = [
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'canvas',
  'cite',
  'code',
  'data',
  'del',
  'dfn',
  'em',
  'i',
  'iframe',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'noscript',
  'object',
  'output',
  'picture',
  'q',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'time',
  'u',
  'var',
  'video',
];

const rules = {
  'import/extensions': 0,
  'vue/max-attributes-per-line': [2,
    {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    },
  ],
  'vue/html-closing-bracket-newline': ['error', {
    singleline: 'never',
    multiline: 'always',
  }],
  'vue/singleline-html-element-content-newline': ['error', {
    ignoreWhenNoAttributes: true,
    ignores: ['pre', 'textarea', 'a', ...INLINE_ELEMENTS],
  }],

  'vue/multiline-html-element-content-newline': ['error', {
    allowEmptyLines: true,
    ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
  }],
};

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },
  rules,

  overrides: [
    {
      files: ['vite.config.ts'],
      rules: {
        ...rules,

        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
