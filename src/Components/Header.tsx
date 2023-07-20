import * as elements from 'typed-html'
import Nav from './Nav'
import NavText from './SearchResult'
import SearchBar from './SearchBar'

function Header() {
  return (
    <header class="flex w-full align-top mx-auto px-4 bg-malbik-red">
      <a href="/">
        <img
          src="https://www.marbecks.co.nz/_images/2023041301/marbecks-records/logo-print-726-128.png"
          alt="Malbiks logo"
        />
      </a>
      <NavText text={'Test'} />
      <div>
        <Nav/>
        <SearchBar />
        </div>
    </header>
  )
}

export default Header