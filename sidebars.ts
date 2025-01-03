import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  whitepaper: [
    {
      type: 'category',
      label: 'License',
      items: [
        'license/overview',
        {
          type: 'category',
          label: 'v0.1',
          items: [
            'versions/v0/license',
            'versions/v0/parameters'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Whitepaper',
      items: [
        'whitepaper/executive_summary',
        'whitepaper/introduction',
        'whitepaper/aidamis',
        'whitepaper/mainstreamtoken_details',
        'whitepaper/ecosystem_overview',
        'whitepaper/community_engagement',
        'whitepaper/roadmap',
        'whitepaper/legal_disclaimer',
        'whitepaper/team',
        'whitepaper/conclusion',
        'whitepaper/appendices'
      ]
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'tutorial/encoder-decoder',
        'tutorial/buy-mt-tokens',
      ],
    },
  ],
};

export default sidebars;
