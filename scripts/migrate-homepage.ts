
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  console.log('\nStarting homepage content migration...\n')

  const payload = await getPayload({ config })

  try {
    const current = await payload.findGlobal({
      slug: 'home-page',
    })

    // Preserve existing CMS values; only fill in missing content.
    const hero = {
      ...current.hero,
      eyebrow:
        current.hero.eyebrow ||
        'Authentic African Journeys · Meaningful memories',
      title: current.hero.title || 'Explore Southern Africa',
      accentText:
        current.hero.accentText || 'Like Never Before',
      subtitle:
        current.hero.subtitle ||
        'Discover unforgettable journeys across South Africa, Zimbabwe, and Botswana from breathtaking landscapes and rich culture to world-class safaris and iconic natural wonders.',
      buttonText: current.hero.buttonText || 'View Packages',
      buttonLink: current.hero.buttonLink || '/packages',
      secondaryButtonText:
        current.hero.secondaryButtonText || 'Plan My Journey',
      secondaryButtonLink:
        current.hero.secondaryButtonLink || '/contact',
    }

    const existingFeatures = current.whyChooseUs ?? []

    const whyChooseUs =
      existingFeatures.length > 0
        ? existingFeatures
        : [
            {
              title: 'Trusted Travel Experts',
              description:
                'We carefully plan every journey to ensure a safe, seamless and memorable travel experience.',
            },
            {
              title: 'Local Knowledge',
              description:
                'Our itineraries are built from real experience across South Africa, Zimbabwe and Botswana.',
            },
            {
              title: 'Tailor-Made Journeys',
              description:
                'Whether you’re travelling solo, with family or in a group, we create an itinerary that suits you.',
            },
            {
              title: 'Personal Service',
              description:
                'From your first enquiry until you return home, our team is with you every step of the journey.',
            },
          ]

    
    await payload.updateGlobal({
    slug: 'home-page',
    data: {
        hero,
        whyChooseUs,
        whyChooseUsSection: {
        heading:
            current.whyChooseUsSection?.heading ||
            'Every journey is crafted with care.',
        description:
            current.whyChooseUsSection?.description ||
            'At To Nations Tours, we believe travel should be authentic, effortless and unforgettable. Every itinerary is thoughtfully designed to showcase the very best of Southern Africa.',
        },
    },
    })

    console.log('Homepage content migration completed.')
    console.log('Hero content populated or preserved.')
    console.log(
      `Why Choose Us features: ${whyChooseUs.length}`,
    )
    console.log('Existing CMS content was preserved.')
  } finally {
    await payload.destroy()
    console.log('\nPayload connection closed.')
  }
}

main().catch((error) => {
  console.error('\nHomepage migration failed:', error)
  process.exitCode = 1
})
