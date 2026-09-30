import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId:'5b1tc31r',
  dataset: 'production',
  apiVersion: '2026-03-01',
  useCdn: true, // true لسرعة التحميل
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)