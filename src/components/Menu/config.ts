import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.yogurtfinance.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.yogurtfinance.com/'
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: 'https://www.yogurtfinance.com/nests'
  },
  // {
  //   label: 'Lottery',
  // //  icon: 'TicketIcon',
  //   href: 'https://www.yogurtfinance.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
  //    {
  //      label: 'PancakeSwap',
  //      href: 'https://pancakeswap.info/token/0x2efe591e96ad36aa3bb769d486afd713ce2f91b4',
  //    },
  //    {
  //      label: 'CoinGecko',
  //      href: 'https://www.coingecko.com/en/coins/yogurt-finance',
  //    },
  //    {
  //      label: 'CoinMarketCap',
  //      href: 'https://coinmarketcap.com/currencies/yogurt-finance/',
  //    },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xd585be33109c1adfa6c0b1edae603eaf1e9bb979',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/yogurtfinance/",
      },
      {
        label: "Docs",
        href: "https://yogurtfinance.gitbook.io/yogurt-finance/"
      },
      {
        label: "RoadMap",
        href: "https://yogurtfinance.gitbook.io/yogurt-finance/roadmap"
      },
    ],
  },

]

export default config
