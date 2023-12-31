# THE BETH STACK

## What is this?

The focus of this was to learn the technologies of the BETH stack in a short span of time with a set of specific goals in mind in a small team. We started on Thursday evening and finished Saturday at 3pm. Our shared goal was to use a website as a reference with a specific focus on the functionality. We focussed on the pulling of data from the Turso database with drizzle as our database requestor from the frontend. The frontend was made with TSX compenents and information was altered and requested and via HTMX calls through Elysia. The functionality we aimed for was the search, sorting and filtering, with a stretch for handling pagination. In this time we did well to get the search and sorting working (if a bit janky) and almost had filtering implemented. A super fun challenge.

_It may not be the BEST stack, but it is the BETH stack._

## [Bun](https://bun.sh/)

## [Elysia](https://elysiajs.com/)

## [Turso](https://turso.tech/)

## [HTMX](https://htmx.org/)

Also: [typed-html](https://github.com/nicojs/typed-html), [tailwind-css](https://tailwindcss.com/), [drizzle](https://orm.drizzle.team/), [hyperscript](https://hyperscript.org/) and [fly.io](https://fly.io/)

### ADDITIONAL STYLING OPTIONS:

#### [twind](https://twind.dev/): check out the [twind branch](https://github.com/ethanniser/the-beth-stack/tree/twind)

#### [unocss](https://unocss.dev/): check out the [unocss branch](https://github.com/ethanniser/the-beth-stack/tree/unocss)

_really you can use whatever you like the most_

### VIEW THE LIVE DEMO AT [the-beth-stack.fly.dev](https://the-beth-stack.fly.dev/)

## EACH STEP IN THE TUTORIAL IS [A BRANCH IN THIS REPO](https://github.com/ethanniser/the-beth-stack/branches)

### SO YOU CAN SEE THE CODE AT EACH STEP

# TO RUN LOCALLY

1. Clone this repo

2. Install [Bun](https://bun.sh)

3. Run `bun install` to install dependencies

4. Create a database with [Turso](https://turso.tech) and add the connection url and token to a `.env` file in the root of this project

5. Run `bun run db:push` to push the database schema to your database

6. Run `bun run db:seed` to seed the database

7. Run `bun run dev` to start the dev server

# TO DEPLOY TO FLY

1. Install the [Fly CLI](https://fly.io/docs/hands-on/install-flyctl/)

2. Run `fly launch`

3. Run `fly secrets set DATABASE_URL=<your url>` & `fly secrets set DATABASE_AUTH_TOKEN=<your token>`

4. Generate the tailwind css file with `bun run tw`

5. Run `fly deploy`
