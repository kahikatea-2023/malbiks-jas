import * as elements from 'typed-html'
import Nav from './Nav'
import NavText from './SearchResult'
import SearchBar from './SearchBar'

function Header() {
  const navText = 'test'
  return (
    <header class="mx-20">
      <div class="bg-malbik-red flex justify-between">
        <a href="/" class="align-start">
          <img
            src="https://www.marbecks.co.nz/_images/2023041301/marbecks-records/logo-print-726-128.png"
            alt="Malbiks logo"
          />
        </a>
        <NavText text={navText} />
      </div>
      <Nav />
    </header>
  )
}

export default Header
