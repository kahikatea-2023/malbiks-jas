import * as elements from 'typed-html'
import SideBar from './SideBar'
import NewReleases from './NewReleases'
import { Album } from '../db/schema'

interface Props{
  data: Album[]
}

function MainContent({data}:Props) {
  return (
    <div class="bg-white flex mx-20">
      <SideBar />
      <div class="bg-white ml-2 mb-2 flex flex-col gap-2 w-full border-2 border-gray-400 rounded-md p-2">
        <div class="p-2 bg-malbik-gray border-2 border-gray-400 rounded-md">
          <h1 class="text-malbik-red font-bold text-2xl">
            Our Classical Selection
          </h1>
          <p>
            We are the last true classical music stockist in the country, with
            thousands of CDs and DVDs in stock and knowledgeable staff to advise
            and recommend.
          </p>
          <h1 class="text-malbik-red font-bold text-xl">
            FREE DELIVERY within NZ for orders over $100
          </h1>
        </div>
        <div class="border-2 border-gray-400 rounded-md overflow-clip">
          <img
            class=""
            src="https://www.marbecks.co.nz/_ads/2023/2023-04/2023-04-H-long-L.jpg"
            alt=""
          />
        </div>
        <NewReleases albums={data} />
      </div>
    </div>
  )
}

export default MainContent
