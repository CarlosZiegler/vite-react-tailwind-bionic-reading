import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import {
  BellRinging,
  Fingerprint,
  Key,
  Settings,
  TwoFA,
  DatabaseImport,
  Receipt2,
} from 'tabler-icons-react'

import { FCC } from '../../types'
import { HeaderAction, HeaderActionProps } from '../Header'

const links = [
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/about',
    label: 'Features',
  },
  {
    link: '#2',
    label: 'Support',
    links: [
      {
        link: '/faq',
        label: 'FAQ',
      },
      {
        link: '/demo',
        label: 'Book a demo',
      },
      {
        link: '/forums',
        label: 'Forums',
      },
    ],
  },
]

export const Layout: FCC = () => {
  return (
    <AppShell
      padding="md"
      header={<HeaderAction links={links} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
        body: {
          height: '100vh',
        },
      })}
    >
      <Outlet />
    </AppShell>
  )
}
