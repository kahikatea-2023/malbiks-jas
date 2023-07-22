import * as elements from 'typed-html'
import { Album } from '../db/schema'
import ResultItem from './ResultItem'
import SideBar from './SideBar'

interface Props {
  results: Album[]
  query: Record<string, unknown>
}

function SearchPage({ results, query }: Props) {

  function handleSort(){

  }

  return (
    <div class="bg-white flex mx-20">
      <SideBar />
      <div class='w-full'>
        <h2>Displaying items 1 to {results.length}</h2>
        <div class="flex justify-between bg-malbik-gray">
          Sort
          <ul class="flex flex-row gap-2">
            <li>
              <a href={`/search?q=${query}&sort=artist`}>Artist</a>
            </li>
            <li>
              <a href={`/search?q=${query}&sort=title`}>Title</a>
            </li>
            <li>
              <button>Price</button>
            </li>
            <li>
              <button>Release Date</button>
            </li>
            <li>
              <button>Format</button>
            </li>
            <li>
              <button>Availability</button>
            </li>
          </ul>
          <ul class="flex flex-row gap-2 pr-2">
            Per Page:
            <li>10</li>
            <li>20</li>
            <li>40</li>
          </ul>
        </div>
        <section class=''>
          {results.map((album) => (
            <ResultItem {...album} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default SearchPage
