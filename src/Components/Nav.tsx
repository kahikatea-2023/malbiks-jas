import { like } from 'drizzle-orm'
import * as elements from 'typed-html'
import SearchBar from './SearchBar'

function Nav() {
  const navItems = [
    "Classical",
    "Pop & Jazz",
    "DVD",
    "Vinyl",
    "Contact Us",
  ]
  const endNavItems = [
    "My Account",
    "Cart",
    "Checkout"
  ]
  return (
    <div class="flex justify-between bg-white">
      <ul class='inline-flex '>
        {navItems.map(item => <li class='px-5 py-2 font-xl font-bold text-malbik-red hover:bg-red-100 hover:text-black'>{item}</li>)}
      </ul>
      <div class='flex'>        
        <ul class='inline-flex'>
          {endNavItems.map(item => <li class='bg-white px-5 my-auto hover:text-malbik-red'>{item}</li>)}
        </ul>
        <SearchBar/>
      </div>    
    </div>
  )
}

export default Nav