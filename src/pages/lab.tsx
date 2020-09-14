import React from 'react'
import Head from 'next/head'

import DefaultLayout from '@/layouts/DefaultLayout'
import Typography, { TypographyVariant } from '@/components/Typography'
import Highlighted from '@/components/Highlighted'

import { Section } from '@/styled/pages/lab'

export default function Home(): React.ReactElement {
  return (
    <DefaultLayout>
      <Head>
        <title>LAB | Arthur Diniz - Software Engineer</title>
        <meta name="description" content="a good description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Section>
        <Typography className="title" variant={TypographyVariant.Title}>
          LAB
        </Typography>
        <Typography className="subtitle" variant={TypographyVariant.Subtitle}>
          <Highlighted>under construction!</Highlighted>
        </Typography>
      </Section>
    </DefaultLayout>
  )
}
