
import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { journeys } from '../src/data/journeys'

const destinationData = [
  {
    name: 'South Africa',
    slug: 'south-africa',
    country: 'south-africa',
    image: '/images/destinations/south-africa.jpg',
  },
  {
    name: 'Botswana',
    slug: 'botswana',
    country: 'botswana',
    image: '/images/destinations/botswana.jpg',
  },
  {
    name: 'Zimbabwe',
    slug: 'zimbabwe',
    country: 'zimbabwe',
    image: '/images/destinations/zimbabwe.jpg',
  },
  {
    name: 'Eswatini',
    slug: 'eswatini',
    country: 'eswatini',
    image: '/images/destinations/eswatini.jpg',
  },
  {
    name: 'Lesotho',
    slug: 'lesotho',
    country: 'lesotho',
    image: '/images/destinations/lesotho.jpg',
  },
] as const

const destinationMap: Record<string, string[]> = {
  'South Africa': ['south-africa'],
  Botswana: ['botswana'],
  Zimbabwe: ['zimbabwe'],
  'Southern Africa': [
    'south-africa',
    'eswatini',
    'lesotho',
  ],
}

type PayloadInstance = Awaited<ReturnType<typeof getPayload>>

async function uploadImage(
  payload: PayloadInstance,
  imagePath: string,
  alt: string,
): Promise<number> {
  const filename = path.basename(imagePath)

  const existing = await payload.find({
    collection: 'media',
    where: {
      filename: {
        equals: filename,
      },
    },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log(`Media already exists: ${filename}`)
    return existing.docs[0].id
  }

  const absolutePath = path.join(
    process.cwd(),
    'public',
    imagePath.replace(/^\/+/, ''),
  )

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Image not found: ${absolutePath}`)
  }

  const fileBuffer = fs.readFileSync(absolutePath)

  const media = await payload.create({
    collection: 'media',
    data: {
      alt,
    },
    file: {
      data: fileBuffer,
      mimetype: 'image/jpeg',
      name: filename,
      size: fileBuffer.length,
    },
  })

  console.log(`Uploaded image: ${filename}`)

  return media.id
}

async function main() {
  const payload = await getPayload({ config })

  try {
    console.log('\nStarting To Nations Tours content migration...\n')

    // 1. Upload destination images and create country records.
    const destinationIds: Record<string, number> = {}

    for (const destination of destinationData) {
      const imageId = await uploadImage(
        payload,
        destination.image,
        `${destination.name} destination`,
      )

      const existing = await payload.find({
        collection: 'destinations',
        where: {
          slug: {
            equals: destination.slug,
          },
        },
        limit: 1,
      })

      const data = {
        name: destination.name,
        slug: destination.slug,
        country: destination.country,
        destinationType: 'country' as const,
        shortDescription: 'Destination overview to be completed.',
        featuredImage: imageId,
        featured: false,
        status: 'draft' as const,
      }

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'destinations',
          id: existing.docs[0].id,
          data,
        })

        console.log(`Updated destination: ${destination.name}`)
      } else {
        await payload.create({
          collection: 'destinations',
          data,
        })

        console.log(`Created destination: ${destination.name}`)
      }

      // Retrieve the saved record to get its numeric ID.
      const savedDestination = await payload.find({
        collection: 'destinations',
        where: {
          slug: {
            equals: destination.slug,
          },
        },
        limit: 1,
      })

      const savedRecord = savedDestination.docs[0]

      if (!savedRecord) {
        throw new Error(
          `Could not retrieve destination: ${destination.name}`,
        )
      }

      destinationIds[destination.slug] = savedRecord.id
    }

    // 2. Upload package images and migrate all journeys.
    for (const journey of journeys) {
      const imageId = await uploadImage(
        payload,
        journey.image,
        `${journey.title} tour`,
      )

      const destinationSlugs = destinationMap[journey.destination]

      if (!destinationSlugs) {
        throw new Error(
          `No destination mapping for: ${journey.destination}`,
        )
      }

      const relatedDestinationIds = destinationSlugs.map((slug) => {
        const id = destinationIds[slug]

        if (id === undefined) {
          throw new Error(`Destination not found: ${slug}`)
        }

        return id
      })

      const data = {
        title: journey.title,
        slug: journey.slug,
        destinationLabel: journey.destination,
        destinations: relatedDestinationIds,
        location: journey.location,
        duration: journey.duration,
        nights: journey.nights,
        price: journey.price,
        childPrice: journey.childPrice,
        transportation: journey.transportation,
        tourType: journey.tourType,
        language: journey.language,
        fitnessLevel: journey.fitnessLevel,
        groupSize: journey.groupSize,
        minimumAge: journey.minimumAge,
        maximumAge: journey.maximumAge,
        featuredImage: imageId,
        overview: journey.overview,
        itineraryIntro: journey.itineraryIntro,
        highlights: journey.highlights.map((item) => ({
          item,
        })),
        itinerary: journey.itinerary.map((day) => ({
          day: day.day,
          title: day.title,
          description: day.description,
        })),
        includes: journey.includes.map((item) => ({
          item,
        })),
        excludes: journey.excludes.map((item) => ({
          item,
        })),
        faqs: (journey.faqs ?? []).map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        })),
        featured: false,
        status: 'draft' as const,
      }

      const existing = await payload.find({
        collection: 'packages',
        where: {
          slug: {
            equals: journey.slug,
          },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'packages',
          id: existing.docs[0].id,
          data,
        })

        console.log(`Updated package: ${journey.title}`)
      } else {
        await payload.create({
          collection: 'packages',
          data,
        })

        console.log(`Created package: ${journey.title}`)
      }
    }

    console.log('\nMigration completed successfully.')
    console.log(`Destinations processed: ${destinationData.length}`)
    console.log(`Packages processed: ${journeys.length}`)
    console.log('All imported records are drafts.')
  } finally {
    await payload.destroy()
  }
}

main().catch((error) => {
  console.error('\nMigration failed:', error)
  process.exit(1)
})
