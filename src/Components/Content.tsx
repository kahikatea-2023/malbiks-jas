import * as elements from 'typed-html'
import SideBar from './SideBar'
import MainContent from './MainContent'
import { Album } from '../db/schema'

function Content({ albums }: { albums: Album[] }) {
  return (
    <div class="bg-white flex mx-20">
      <SideBar />
      <MainContent albums={albums} />
    </div>
  )
}

export default Content
