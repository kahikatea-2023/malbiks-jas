import * as elements from 'typed-html'
import { Album } from '../db/schema'

function SearchPage({ searchResult }: { searchResult: Album[] }) {
  // results: Album[]

  return (
    <div id="searchResults">
      <div class="flex flex-row flex-wrap p-5">
        {/* {searchResult.map((album) => (
          <div class="w-1/5 bg-malbik-gray border-2 m-2 border-gray-400 rounded-md p-3 flex flex-col items-center">
            <img class="w-15" src={`${album.img}`} alt={`${album.title}`} />
            <h1 class="text-malbik-red">{album.title}</h1>
            <p>{album.artist}</p>
            <p>${album.price}</p>
          </div>
        ))} */}
        search Result
      </div>
    </div>
  )
}
export default SearchPage
