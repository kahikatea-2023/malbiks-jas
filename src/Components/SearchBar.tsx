import * as elements from 'typed-html'
import SearchPage from './SearchPage'

function SearchBar() {
  return (
    <form
      hx-get="/search"
      hx-target="next div"
      hx-swap="outerHTML"
      class="form my-1 mr-1"
    >
      <input type="text" id="search-input" class='shadow-lg border-2 border-gray-400 rounded-sm' />
      <button class="bg-gray-400 text-white px-2 py-1">Search</button>
      <button class="bg-gray-400 text-white px-2 py-1">Advanced</button>
    </form>
  )
}

export default SearchBar
