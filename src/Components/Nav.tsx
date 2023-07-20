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

  ]
  return (
    <header class=" ">
      <ul class='inline-flex w-full justify-start gap-4 px-4 bg-white'>
        {navItems.map(item => <li class='bg-white font-xl font-bold text-malbik-red'>{item}</li>)}
      </ul>
      <ul>
        <li>My Account</li>
        <li></li>
        <li></li>
      </ul>

      
    </header>
  )
}

export default Nav