
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  console.log('\nStarting About Page content migration...\n')

  const payload = await getPayload({ config })

  try {
    const current = await payload.findGlobal({
      slug: 'about-page',
    })

    // Reuse the existing Zimbabwe Explorer image in Media.
    const mediaResult = await payload.find({
      collection: 'media',
      where: {
        filename: {
          equals: 'zimbabwe-explorer.jpg',
        },
      },
      limit: 1,
    })

    const storyImage =
      current.ourStory?.image ||
      mediaResult.docs[0]?.id ||
      undefined

    const achievements =
      current.achievements?.length
        ? current.achievements
        : [
            {
              title: 'Recognised Excellence',
              description:
                'Trusted safari specialists focused on memorable service and quality experiences.',
            },
            {
              title: 'Best Price Promise',
              description:
                'Carefully designed journeys that offer strong value without compromising the experience.',
            },
            {
              title: 'Tailored Adventures',
              description:
                'Flexible journeys shaped around your interests, travel style and preferred pace.',
            },
            {
              title: 'Diverse Choices',
              description:
                'Wildlife, culture, scenery, food and adventure experiences across Southern Africa.',
            },
          ]

    const values =
      current.values?.length
        ? current.values
        : [
            {
              title: 'Eco Friendly',
              description:
                'We take responsibility for protecting Africa’s culture, communities and natural wonders.',
            },
            {
              title: 'Authenticity',
              description:
                'Every journey is designed to feel genuine, immersive and connected to local culture.',
            },
            {
              title: 'Safety',
              description:
                'Experienced guides, trusted partners and careful planning support every traveller.',
            },
          ]

    await payload.updateGlobal({
      slug: 'about-page',
      data: {
        hero: {
          ...current.hero,
          eyebrow:
            current.hero.eyebrow || 'About To Nations Tours',
          title:
            current.hero.title ||
            'Discover the heart of Southern Africa, where every journey becomes a story.',
          subtitle:
            current.hero.subtitle ||
            'We create carefully curated journeys across South Africa, Zimbabwe and Botswana, combining wildlife, culture, scenery, adventure and authentic local experiences.',
          tagline:
            current.hero.tagline ||
            'Authentic journeys. Meaningful memories.',
        },

        ourStory: {
          ...current.ourStory,
          heading:
            current.ourStory?.heading ||
            'More than visiting places. It is about creating memories.',
          content:
            current.ourStory?.content ||
            [
              'At To Nations Tours, we believe travel is about meaningful experiences, cultural connection and memories that last a lifetime.',
              'Our itineraries combine wildlife safaris, scenic landscapes, cultural encounters and authentic local experiences for solo travellers, couples, families and groups.',
              'We work with experienced guides, trusted local partners and quality accommodation providers to make every journey safe, comfortable and memorable.',
            ].join('\n\n'),
          image: storyImage,
          imageCaption:
            current.ourStory?.imageCaption || 'Southern Africa',
          imageHeading:
            current.ourStory?.imageHeading ||
            'Travel that feels personal.',
        },

        achievements,

        mission:
          current.mission ||
          'Our mission is to help travellers discover the wildlife, landscapes and cultures of Southern Africa through journeys that combine adventure, comfort and authentic local connection.',

        missionHeading:
          current.missionHeading ||
          'Inspiring unforgettable African adventures.',

        missionQuote:
          current.missionQuote ||
          'Every destination tells a story. Every journey creates a memory.',

        values,

        callToAction: {
          ...current.callToAction,
          eyebrow:
            current.callToAction?.eyebrow ||
            'Your Story Starts Here',
          heading:
            current.callToAction?.heading ||
            'Let us help you discover the extraordinary.',
          buttonText:
            current.callToAction?.buttonText ||
            'Plan My Journey',
          buttonLink:
            current.callToAction?.buttonLink || '/contact',
        },
      },
    })

    console.log('ABOUT PAGE MIGRATION COMPLETED')
    console.log(`Achievements: ${achievements.length}`)
    console.log(`Values: ${values.length}`)
    console.log(
      `Story image: ${storyImage ? 'Available' : 'Not found; can be selected in admin'}`,
    )
    console.log('Existing CMS content was preserved.')
  } finally {
    await payload.destroy()
    console.log('\nPayload connection closed.')
  }
}

main().catch((error) => {
  console.error('\nAbout Page migration failed:', error)
  process.exitCode = 1
})
