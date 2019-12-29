import React from 'react'
import styled from 'styled-components'

import { GlobalStyles } from './components/global-styles.js'
import { PageContainer } from './components/page-container.js'
import { SiteHeader } from './components/site-header.js'
import { Copy, H1, H2 } from './components/typography'

const Section = styled.div`
  margin: 24px 64px;
`

export const App = () => {
  return (
    <PageContainer>
      <GlobalStyles />

      <SiteHeader />
      <div>
        <H1>The Organizer's Company</H1>
        img of clean home here
      </div>

      <Section>
        <H2>Our Mission</H2>
        <p>
          Help families get the most out of their homes by giving them the
          proper tools and helping them find an organization strategy that works
          best for their lifestyle.
        </p>
      </Section>

      <Section>
        <H2>The Rules of Organization</H2>
        <ol>
          <li>
            <Copy>Everything should have a place.</Copy>
          </li>
          <li>
            <Copy>
              Every place should be easy to remember, readily accessible and
              feel natural to return its items there.
            </Copy>
          </li>
          <li>
            <Copy>
              Your organizational system should be just barely complex enough
              that you no longer feel like you are living in chaos but simple
              and easy enough that you will actually adhere to it.
            </Copy>
          </li>
          <li>
            <Copy>
              Realize you need a lot less than you think you do and to not fall
              prey for our consumerist nature.
            </Copy>
          </li>
          <li>
            <Copy>
              Realize that every possession we have carries with it a place in
              our mind, a cognitive overhead. The more we have the more we have
              to remember, upkeep, clean, find and use. And on the contrast, the
              less we have(to an extent) the more free we are.
            </Copy>
          </li>
          <li>
            <Copy>
              Have what you use, what brings more joy than sorry and what is
              necessary. Nothing more.
            </Copy>
          </li>
        </ol>
      </Section>

      <Section>
        <H2>Services and Prices</H2>
        <ul>
          <li>
            <Copy>
              <b>Initial Consultation: </b>
              (FREE) One of our trained organizers will spend 45-60 minutes
              assesing your organizational needs and help you make a plan on how
              best to tackle each room.
            </Copy>
          </li>
          <li>
            <Copy>
              <b>Guided Organization and Space Utilization: </b>
              ($30/hr) One of our trained organizers will help you organize your
              houses room by room. They will help you make the most of your
              storage spaces and find additional storage spaces you didn't think
              existed.
            </Copy>
          </li>
          <li>
            <Copy>
              <b>Space Creation: </b>
              (Contact us to request a quote) Our experts will help design
              custom shelves and other storage systems that will best fit your
              needs and then build it for you.
            </Copy>
          </li>
        </ul>
      </Section>

      <Section>
        <H2>FAQs</H2>
        <ul>
          <li>
            <Copy>
              <b>How does your guided organization process work?</b>
              One of our organizers will come into your home and work with your
              for usually 1-2 hours once a week until we've met your
              organization needs. Each visit they will go room by room with you
              and teach you some organizational skills. As they work with you to
              start organizing it they will help you set goals and make a plan.
              At the end of the apointment they will leave you with some
              'homework' to work on until they come back next week.
            </Copy>
          </li>
          <li>
            <Copy>
              <b>
                What do you do to help younger children keep things organized?
              </b>
              We will help you create storage spaces for your child's things
              that are easy for them to access and use. We also will make photo
              labels to make it easy for them to remember where things go.
            </Copy>
          </li>
          <li>
            <Copy>
              <b>
                What makes you different than other organizational services?
              </b>
              Instead of primarily focusing on making your house look nice and
              'staged' we focus on making your spaces usable and your
              possessions easily accessible.
            </Copy>
          </li>
          <li>
            <Copy>
              <b></b>
            </Copy>
          </li>
          <li>
            <Copy>
              <b></b>
            </Copy>
          </li>
        </ul>
      </Section>

      <Section>
        <H2>About the Founder</H2>
        pic here
        <Copy>
          Calvin spent a year and a half living on a small sailboat to better
          learn the principles of minimalizim. The boat he was living on didn't
          have standing room but he learned how to make the most out of all
          spaces and even with all of his belongings and the ship's equipment he
          still always had space to spare. He now lives with his wife in a 28ft
          RV that they remodeled. You will often hear them say how much they
          love living in their tiny home and how while they may be in a small
          space they never run out of storage space.
        </Copy>
      </Section>
    </PageContainer>
  )
}
