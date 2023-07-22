import { db } from './index'
import { albums } from './schema'
import {seedData} from "./data"

async function seed() {
  await db.insert(albums).values(seedData()).returning().get()
  const rows = await db.select().from(albums).all()
}

seed()