import * as elements from "typed-html"
import { Album } from "../db/schema"
import ResultItem from "./ResultItem"

interface Props {
  results: Album[]
}

function SearchPage({results}: Props) {
  
  return(
    <div>
      <h2>Displaying items 1 to {results.length}</h2>
      <div class="flex justify-between bg-malbik-gray">Sort 
        <ul class="flex flex-row gap-2">
          <li>Artist</li>
          <li>Title</li>
          <li>Price</li>
          <li>Release Date</li>
          <li>Format</li>
          <li>Availability</li>
        </ul>
        <ul class="flex flex-row gap-2">Per Page:
          <li>10</li>
          <li>20</li>
          <li>40</li>
        </ul>
      </div>
      <section>
        {results.map((album, index) => <ResultItem album={album}/>)}
      </section>
    </div>
  )
}

export default SearchPage