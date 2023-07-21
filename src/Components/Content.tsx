import * as elements from 'typed-html'
import SideBar from './SideBar'
import MainContent from './MainContent'
import { Album } from '../db/schema'
import SearchPage from './SearchPage'
import SearchBar from './SearchBar'

function Content({ albums }: { albums: Album[] }) {
  return (
    <div class="bg-white flex mx-20">
      <SideBar />
      <MainContent albums={albums} />
      <SearchPage />
    </div>
  )
}

export default Content
