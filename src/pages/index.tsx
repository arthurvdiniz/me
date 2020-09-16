import React from 'react'
import Head from 'next/head'

import DefaultLayout from '@/layouts/DefaultLayout'
import Typography, { TypographyVariant, TypographyComponent } from '@/components/Typography'
import LinkText, { LinkTextVariant } from '@/components/LinkText'
import Highlighted from '@/components/Highlighted'

import { Section } from '@/styled/pages/home'

export default function Home(): React.ReactElement {
  return (
    <DefaultLayout>
      <Head>
        <title>Arthur Diniz - Software Engineer</title>
        <meta name="description" content="a good description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Section>
        <Typography className="title" variant={TypographyVariant.Title}>
          Hello!
        </Typography>
        <Typography className="subtitle" variant={TypographyVariant.Subtitle} component={TypographyComponent.p}>
          I am <Highlighted>Arthur Diniz</Highlighted>,
          <br />a Software Engineer at{' '}
          <LinkText variant={LinkTextVariant.External} href="https://klivo.com" target="_blank" rel="noreferrer">
            Klivo
          </LinkText>
          .
        </Typography>
        <Typography className="about-me" variant={TypographyVariant.Subtitle} component={TypographyComponent.p}>
          I am focusing on learning backend concepts and web development. I enjoy expressing myself through{' '}
          <Highlighted>photography, art and code</Highlighted> that's why I created my{' '}
          <LinkText variant={LinkTextVariant.Internal} href="/lab">
            laboratory
          </LinkText>{' '}
          for experimental projects.
        </Typography>
      </Section>
    </DefaultLayout>
  )
}
