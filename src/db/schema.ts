import { InferModel } from 'drizzle-orm'
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const albums = sqliteTable('albums', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  artist: text('artist').notNull(),
  title: text('title').notNull(),
  img: text('img').notNull(),
  producer: text('producer').notNull(),
  format: text('format').notNull(),
  releaseDate: text('release_date').notNull(),
  price: integer('price').notNull(),
  description: text('description').notNull(),
  availability: text('availability'),
})

export type Album = InferModel<typeof albums>
