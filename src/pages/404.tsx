import React from 'react'
import Head from 'next/head'

import DefaultLayout from '@/layouts/DefaultLayout'
import Typography, { TypographyVariant } from '@/components/Typography'
import Highlighted from '@/components/Highlighted'
import LinkText, { LinkTextVariant } from '@/components/LinkText'

import { Section } from '@/styled/pages/404'

export default function NotFound(): React.ReactElement {
  return (
    <DefaultLayout>
      <Head>
        <title>404 | Arthur Diniz - Software Engineer</title>
        <meta name="description" content="a good description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Section>
        <Typography className="title" variant={TypographyVariant.Title}>
          404
        </Typography>
        <Typography className="subtitle" variant={TypographyVariant.Subtitle}>
          Ops... <Highlighted>page not found</Highlighted>
        </Typography>
        <Typography className="subtitle" variant={TypographyVariant.Subtitle}>
          back to{' '}
          <LinkText variant={LinkTextVariant.Internal} href="/">
            home
          </LinkText>
          .
        </Typography>
      </Section>
    </DefaultLayout>
  )
}
