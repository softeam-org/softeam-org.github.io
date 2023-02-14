// @ts-check

const GITHUB_USER = 'softeam-org';
const GITHUB_ORG = `https://github.com/${GITHUB_USER}`;
const LINKEDIN_URL = 'https://www.linkedin.com/company/softeam-ejc/';
const INSTAGRAM_URL = 'https://www.instagram.com/softeam.ejc/';
const YOUTUBE_URL = 'https://www.youtube.com/channel/UC3wCFTcdiqRpQg1tMat6xSA';

const DEFAULT_BRANCH = 'main';
const PROJECT_NAME = 'softeam-org.github.io';
const PROJECT_REPO = `${GITHUB_ORG}/${PROJECT_NAME}`;

const DEPLOY_URL = `https://${PROJECT_NAME}`;
const EDIT_URL = `${PROJECT_REPO}/tree/${DEFAULT_BRANCH}/`;

const TITLE = 'SofTeam';
const LOCALE = 'pt-BR';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: TITLE,
  tagline: 'Empresa Junior de Computação',
  url: DEPLOY_URL,
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  organizationName: GITHUB_USER,
  projectName: PROJECT_NAME,

  i18n: {
    defaultLocale: LOCALE,
    locales: [LOCALE],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: EDIT_URL,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: TITLE,
        hideOnScroll: true,
        logo: {
          alt: `${TITLE} Logo`,
          src: 'img/logo.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: GITHUB_ORG,
            position: 'right',
          },
          {
            href: LINKEDIN_URL,
            position: 'right',
          },
          {
            href: INSTAGRAM_URL,
            position: 'right',
          },
          {
            href: YOUTUBE_URL,
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Software Team`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },
    }),

  plugins: [
    async function() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themes: ['@docusaurus/theme-mermaid'],
};
