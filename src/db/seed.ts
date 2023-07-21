import { db } from './index'
import { albums } from './schema'
import {data} from "./data"

async function seed() {
  await db.insert(albums).values(data).returning().get()
  const rows = await db.select().from(albums).all()
  console.log(rows)
}

seed()