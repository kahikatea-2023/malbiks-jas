import * as elements from 'typed-html'
import SideBar from './SideBar'
import MainContent from './MainContent'

function Content() {
  return (
    <div class="bg-white flex mx-20">
      <SideBar />
      <MainContent />
    </div>
  )
}

export default Content
