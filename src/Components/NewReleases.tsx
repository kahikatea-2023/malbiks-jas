import * as elements from 'typed-html'
import { Album } from '../db/schema'

interface Props {
  albums: Album[]
}

function NewReleases({ albums }: Props) {
  return (
    <div class="p-2">
      <h1 class="text-malbik-red font-bold text-xl">New & Upcoming Releases</h1>
      <div class="flex flex-wrap p-5">
        {albums.map((album) => (
          <div class="bg-malbik-gray border-2 m-2 border-gray-400 rounded-md p-3 flex flex-col items-center">
            <img class="w-15" src={`${album.img}`} alt={`${album.title}`} />
            <h1 class="text-malbik-red">{album.title}</h1>
            <p>{album.artist}</p>
            <p>${album.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewReleases
