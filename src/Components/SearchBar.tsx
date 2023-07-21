import * as elements from 'typed-html'

function SearchBar() {
  return (
    <form
      action="/search"
      class="my-1 mr-1"
      hx-get="/search"
      hx-target="#searchResults"
      hx-swap="outerHTML"
    >
      <input
        type="text"
        name=""
        id="search-input"
        class="shadow-lg border-2 border-gray-400 rounded-sm"
      />
      <button class="bg-gray-400 text-white px-2 py-1">Search</button>
      <button class="bg-gray-400 text-white px-2 py-1">Advanced</button>
    </form>
  )
}

export default SearchBar
