import React from 'react'
import Head from 'next/head'

import DefaultLayout from '@/layouts/DefaultLayout'
import Typography, { TypographyVariant } from '@/components/Typography'
import Link, { LinkVariant } from '@/components/Link'

export default function Home(): React.ReactElement {
  return (
    <DefaultLayout>
      <Head>
        <title>Arthur Diniz - Software Engineer</title>
        <meta name="description" content="a good description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Typography variant={TypographyVariant.Title}>Hello!</Typography>
      <Typography variant={TypographyVariant.Subtitle}>
        I am Arthur Diniz,
        <br />a Software Engineer at{' '}
        <Link variant={LinkVariant.External} href="https://klivo.com" target="_blank">
          Klivo
        </Link>
      </Typography>
      <Typography variant={TypographyVariant.Subtitle}>Focusing in learn Software Architeture</Typography>
    </DefaultLayout>
  )
}
