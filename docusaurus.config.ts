import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mainstream Token',
  tagline: 'With An Experimental Token-Based Rights Management Protocol',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
//  url: 'https://mainstreamtoken.com', // Replace with your GitHub username
//  baseUrl: '/', // Replace with your repository name

  url: 'https://mainstreamtoken.com', // Replace with your GitHub username
  baseUrl: '/', // Replace with your repository name

  deploymentBranch: 'gh-pages', // The branch GitHub Pages uses
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mainstreamorganization', // Usually your GitHub org/user name.
  projectName: 'mainstreamtoken.com', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mainstreamorganization/mainstreamtoken.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
	  routeBasePath: 'news',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './news',
          editUrl:
            'https://github.com/mainstreamorganization/mainstreamtoken.com/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
//      defaultMode: 'dark',
//      disableSwitch: false,
//      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Mainstream Token',
      logo: {
        alt: 'Mainstream Token Logo',
        src: 'img/mnstrmlogo.png',
      },
      items: [
        {
          to: '/docs/whitepaper/table_of_contents',
          label: 'Whitepaper',
          position: 'left',
        },
        {
          to: '/docs/license/overview',
          type: 'dropdown',
          label: 'License',
          position: 'left',
          items: [
            {
              label: 'License v0.1',
              to: '/docs/versions/v0/license',
            },
            {
              label: 'License Parameters v0.1',
              to: '/docs/versions/v0/parameters',
            },
            {
              label: 'Tutorial',
              to: '/docs/tutorial/encoder-decoder',
            },
          ],
        },
        {to: '/news', label: 'News', position: 'left'},
        {
          href: 'https://github.com/mainstreamorganization/mainstreamtoken.com',
          label: 'GitHub',
          position: 'right',
        },
         {
          type: 'dropdown',
          label: 'Apps',
          position: 'left',
          items: [
            {
              label: 'MTL Generator',
              to: '/app/encoder',
            },
            {
              label: 'MTL Decoder',
              to: '/app/decoder',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Contact',
          position: 'left',
          items: [
            {
              label: 'Contact Us',
              to: '/contact/us',
            },
            {
              label: 'Community Guidelines',
              to: '/contact/community-guidelines',
            },
            {
              label: 'Legal Disclaimer',
              to: '/contact/legal/disclaimer',
            },
            {
              label: 'Terms of Use',
              to: '/contact/legal/terms',
            },
            {
              label: 'Privacy Policy',
              to: '/contact/legal/privacy',
            },
            {
              label: 'Cookie Policy',
              to: '/contact/legal/cookies',
            }
          ]
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Mainstream Token',
          items: [
            {
              label: 'Experimental digital rights management through blockchain technology.',
              to: '#',
              style: { whiteSpace: 'normal', maxWidth: '360px' }
            },
          ],
        },
        {
          title: 'Cloud Tags',
          items: [
            {
              label: '#MainstreamToken',
              to: '/news/tags/mainstreamtoken',
            },
            {
              label: '#MTLProtocol',
              to: '/news/tags/mtlprotocol',
            },
             {
              label: '#DigitalRights',
              to: '/news/tags/digitalrights',
            },
             {
              label: '#Blockchain',
              to: '/news/tags/blockchain',
            },
             {
              label: '#AI',
              to: '/news/tags/ai',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Whitepaper',
              to: '/docs/whitepaper/table_of_contents',
            },
            {
              label: 'Tokenomics',
              to: '/docs/tokenomics/distribution',
            },
             {
              label: 'License v0.1',
              to: '/docs/versions/v0/license',
            },
             {
              label: 'Tutorial',
              to: '/docs/tutorial/encoder-decoder',
            },
            {
              label: 'How To Buy $MAIN',
              to: '/docs/tutorial/buy-mt-tokens',
            },
            {
              label: 'News',
              to: '/news',
            },
             {
              label: 'MTL Generator',
              to: '/app/encoder',
            },
             {
              label: 'MTL Decoder',
              to: '/app/decoder',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mainstreamorganization/mainstreamtoken',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/mainstreamorganization/mainstreamtoken/discussions',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/mainstreamtoken',
            },
            {
              label: 'X',
              href: 'https://x.com/mnstrmtoken',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@mainstreamtoken',
            },
            {
              label: 'Aidamis',
              href: 'https://aidamis.com',
            },
          ],
        },
        {
          title: 'Legal & Contact',
          items: [
            {
              label: 'Contact Us',
              to: '/contact/us',
            },
            {
              label: 'Community Guidelines',
              to: '/contact/community-guidelines',
            },
            {
              label: 'Legal Disclaimer',
              to: '/contact/legal/disclaimer',
            },
            {
              label: 'Terms of Use',
              to: '/contact/legal/terms',
            },
            {
              label: 'Privacy Policy',
              to: '/contact/legal/privacy',
            },
            {
              label: 'Cookie Policy',
              to: '/contact/legal/cookies',
            }
          ],
        },
      ],
      copyright: `<span style="color: #444;">© ${new Date().getFullYear()} Mainstream Token. All Rights Reserved. CA : HT9C48yRmS2kiUYJfLcDX7JidtcKBupe3DE2GDyQr3i3.</span>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
