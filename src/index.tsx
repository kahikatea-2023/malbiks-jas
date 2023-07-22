import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'
import { db } from './db'
import { Album, albums } from './db/schema'
import { desc, eq, like } from 'drizzle-orm'
import Header from './Components/Header'
import Nav from './Components/Nav'
import MainContent from './Components/MainContent'
import Content from './Components/Content'
import NewReleasesList from './Components/NewReleasesList'
import SearchPage from './Components/SearchPage'
import { log } from 'console'

const app = new Elysia()
  .use(html())
  .get('/', async ({ html }) => {
    const data = await db
      .select()
      .from(albums)
      .orderBy(desc(albums.releaseDate))
      .limit(14)
      .all()

    return html(
      <BaseHtml>
        <div>
          <body class="bg-malbik-gray">
            <Header />
            <MainContent data={data} />
          </body>
        </div>
      </BaseHtml>
    )
  })
  // .get('/newestReleases', async () => {
  //   const newestAlbums = await db
  //     .select()
  //     .from(albums)
  //

  //   return <NewReleasesList albums={newestAlbums} />
  // })
  .get('/search', async ({ query }) => {
    const searchQuery = query.q as Record<string, unknown>
    const sortQuery = query.sort
    let data = [] as Album[]

    data = await db
      .select()
      .from(albums)
      .where(like(albums.title || albums.artist, `%${searchQuery}%`))
      .all()
    
    switch (sortQuery) {
      case 'artist':
        data = await db
          .select()
          .from(albums)
          .where(like(albums.title || albums.artist, `%${searchQuery}%`))
          .orderBy(albums.artist)
          .all()
        break
        case 'title':
          data = await db
          .select()
          .from(albums)
          .where(like(albums.title || albums.artist, `%${searchQuery}%`))
          .orderBy(albums.title)
          .all()
      default:
        break
    }

    return (
      <BaseHtml>
        <div>
          <body class="bg-malbik-gray">
            
            <SearchPage query={query.q} results={data} />
          </body>
        </div>
      </BaseHtml>
    )
  })
  // .get('/todos', async () => {
  //   const data = await db.select().from(todos).all()
  //   return <div class="flex  w-full "></div>
  // })
  // .post(
  //   '/todos/toggle/:id',
  //   async ({ params }) => {
  //     const oldTodo = await db
  //       .select()
  //       .from(todos)
  //       .where(eq(todos.id, params.id))
  //       .get()
  //     const newTodo = await db
  //       .update(todos)
  //       .set({ completed: !oldTodo.completed })
  //       .where(eq(todos.id, params.id))
  //       .returning()
  //       .get()
  //     return <TodoItem {...newTodo} />
  //   },
  //   {
  //     params: t.Object({
  //       id: t.Numeric(),
  //     }),
  //   }
  // )
  .get('/styles.css', () => Bun.file('./tailwind-gen/styles.css'))
  .listen(3000)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Malbiks</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <link href="/styles.css" rel="stylesheet">
</head>

${children}
`

// function TodoItem({ content, completed, id }: Todo) {
//   return (
//     <div class="flex flex-row space-x-3">
//       <p>{content}</p>
//       <input
//         type="checkbox"
//         checked={completed}
//         hx-post={`/todos/toggle/${id}`}
//         hx-swap="outerHTML"
//         hx-target="closest div"
//       />
//       <button
//         class="text-red-500"
//         hx-delete={`/todos/${id}`}
//         hx-swap="outerHTML"
//         hx-target="closest div"
//       >
//         X
//       </button>
//     </div>
//   )
// }

// function TodoList({ todos }: { todos: Todo[] }) {
//   return (
//     <div>
//       {todos.map((todo) => (
//         <TodoItem {...todo} />
//       ))}
//       <TodoForm />
//     </div>
//   )
// }

// function TodoForm() {
//   return (
//     <form
//       class="flex flex-row space-x-3"
//       hx-post="/todos"
//       hx-swap="beforebegin"
//       _="on submit target.reset()"
//     >
//       <input type="text" name="content" class="border border-black" />
//       <button type="submit">Add</button>
//     </form>
//   )
// }
