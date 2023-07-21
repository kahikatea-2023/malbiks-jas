import * as elements from 'typed-html'
import { Album } from '../db/schema'

function NewReleases({ albums }: { albums: Album[] }) {
  return (
    <div class="p-2 bg-malbik-gray border-2 border-gray-400 rounded-md">
      <h1 class="text-malbik-red font-bold text-xl">
        Outstanding New Releases
      </h1>
      <div class="flex" id="">
        {albums.map((album) => (
          <div class="w-1/4">
            <p>{album.title}</p>
            <p>{album.artist}</p>
            <p>{album.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewReleases
