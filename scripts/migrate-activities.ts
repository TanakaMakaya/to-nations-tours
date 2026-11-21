
import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '../src/payload.config'

type ActivitySeed = {
  name: string;
  slug: string;
  category:
    | 'adventure'
    | 'wildlife'
    | 'cultural'
    | 'sightseeing'
    | 'outdoor'
    | 'relaxation';
  shortDescription?: string;
  image: string;
  cardSize: 'large' | 'small' | 'wide';
};

const activities: ActivitySeed[] = [
  {
    name: 'Safari Game Drives',
    slug: 'safari-game-drives',
    category: 'wildlife',
    shortDescription:
      'Search for elephants, lions, rhinos, buffalo and other remarkable wildlife.',
    image: 'safari-game-drive.jpg',
    cardSize: 'large',
  },
  {
    name: 'Bird Watching',
    slug: 'bird-watching',
    category: 'wildlife',
    image: 'bird-watching.jpg',
    cardSize: 'small',
  },
  {
    name: 'Victoria Falls Experience',
    slug: 'victoria-falls-experience',
    category: 'sightseeing',
    image: 'victoria-falls.jpg',
    cardSize: 'small',
  },
  {
    name: 'Boat Cruise',
    slug: 'boat-cruise',
    category: 'outdoor',
    shortDescription:
      'Relax on scenic river and lagoon cruises surrounded by wildlife and sunset views.',
    image: 'boat-cruise.jpg',
    cardSize: 'wide',
  },
  {
    name: 'Bush Breakfast',
    slug: 'bush-breakfast',
    category: 'cultural',
    shortDescription:
      'Enjoy a memorable breakfast experience surrounded by peaceful African landscapes.',
    image: 'bush-breakfast.jpeg',
    cardSize: 'large',
  },
  {
    name: 'Cango Caves',
    slug: 'cango-caves',
    category: 'sightseeing',
    image: 'cango-caves.jpg',
    cardSize: 'small',
  },
  {
    name: 'Canoeing & Kayaking',
    slug: 'canoeing-kayaking',
    category: 'adventure',
    image: 'canoeing.jpg',
    cardSize: 'small',
  },
  {
    name: 'Wine & Food Experiences',
    slug: 'wine-food-experiences',
    category: 'cultural',
    shortDescription:
      'Taste award-winning wines, regional cuisine and carefully selected local flavours.',
    image: 'wine-tasting.jpg',
    cardSize: 'wide',
  },
  {
    name: 'Hiking & Walking',
    slug: 'hiking-walking',
    category: 'outdoor',
    image: 'hiking.jpg',
    cardSize: 'small',
  },
  {
    name: 'Adventure Activities',
    slug: 'adventure-activities',
    category: 'adventure',
    image: 'adventure.jpg',
    cardSize: 'small',
  },
  {
    name: 'Mokoro Safari',
    slug: 'mokoro-safari',
    category: 'wildlife',
    shortDescription:
      'Glide through the peaceful Okavango Delta in a traditional mokoro canoe.',
    image: 'mokoro-safari.jpg',
    cardSize: 'large',
  },
]

type PayloadInstance = Awaited<ReturnType<typeof getPayload>>

async function uploadActivityImage(
  payload: PayloadInstance,
  filename: string,
  alt: string,
): Promise<number> {
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
    console.log(`  Image already exists: ${filename}`)
    return existing.docs[0].id
  }

  const imagePath = path.join(
    process.cwd(),
    'public',
    'activities',
    filename,
  )

  if (!fs.existsSync(imagePath)) {
    throw new Error(`Activity image not found: ${imagePath}`)
  }

  const buffer = fs.readFileSync(imagePath)

  const extension = path.extname(filename).toLowerCase()

  const mimetype =
    extension === '.png'
      ? 'image/png'
      : extension === '.webp'
        ? 'image/webp'
        : 'image/jpeg'

  const media = await payload.create({
    collection: 'media',
    data: {
      alt,
    },
    file: {
      data: buffer,
      mimetype,
      name: filename,
      size: buffer.length,
    },
  })

  console.log(`  Uploaded image: ${filename}`)

  return media.id
}

async function main() {
  console.log('\nStarting activity migration...\n')

  const payload = await getPayload({ config })

  try {
    let created = 0
    let updated = 0

    for (const [index, activity] of activities.entries()) {
      console.log(
        `\n[${index + 1}/${activities.length}] Processing ${activity.name}...`,
      )

      const imageId = await uploadActivityImage(
        payload,
        activity.image,
        activity.name,
      )

      const data = {
        name: activity.name,
        slug: activity.slug,
        category: activity.category,
        shortDescription: activity.shortDescription,
        featuredImage: imageId,
        cardSize: activity.cardSize,
        featured: false,
        status: 'draft' as const,
      }

      const existing = await payload.find({
        collection: 'activities',
        where: {
          slug: {
            equals: activity.slug,
          },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'activities',
          id: existing.docs[0].id,
          data,
        })

        updated++
        console.log(`  Updated activity: ${activity.name}`)
      } else {
        await payload.create({
          collection: 'activities',
          data,
        })

        created++
        console.log(`  Created activity: ${activity.name}`)
      }
    }

    console.log('\n================================')
    console.log('ACTIVITY MIGRATION COMPLETED')
    console.log('================================')
    console.log(`Total activities: ${activities.length}`)
    console.log(`Created: ${created}`)
    console.log(`Updated: ${updated}`)
    console.log('Status: All activities are drafts.')
  } finally {
    await payload.destroy()
    console.log('\nPayload connection closed.')
  }
}

main().catch((error) => {
  console.error('\nActivity migration failed:', error)
  process.exitCode = 1
})
