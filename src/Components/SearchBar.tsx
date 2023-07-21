import * as elements from 'typed-html'

function SearchBar() {
  return (

    <div class='my-1 mr-1'>
      <input type="text" name="" id="" class='shadow-lg border-2 border-gray-400 rounded-sm' />
      <button class='bg-gray-400 text-white px-2 py-1'>Search</button>
      <button class='bg-gray-400 text-white px-2 py-1'>Advanced</button>
    </div>
  )
}

export default SearchBar