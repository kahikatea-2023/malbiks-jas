import { InferModel } from 'drizzle-orm'
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const albums = sqliteTable('albums', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  artist: text('artist').notNull(),
  releaseDate: text('release_date').notNull(),
  price: real('price').notNull(),
  format: text('format').notNull(),
  availability: text('availability'),
  img: text('img').notNull(),
  description: text('description').notNull(),
})

export type Album = InferModel<typeof albums>
