import * as elements from 'typed-html'
import SideBar from './SideBar'
import MainContent from './MainContent'
import SearchPage from './SearchPage'
import { Album } from '../db/schema'

interface Props {
  albums: Album[]
  page: string
}

function Content({albums, page}: Props ) {
  return (
    <div class="bg-white flex mx-20">
      <SideBar />
      {page === "home" ? <MainContent /> : <SearchPage results={albums}/>}
    </div>
  )
}

export default Content
