import * as elements from 'typed-html'
import {Album} from '../db/schema'
import AlbumBigCard from './AlbumBigCard'

interface Props{
albums: Album[],
}

function NewReleasesList({albums}: Props) {
  
  return (
    <div class="p-2 bg-malbik-gray border-2 border-gray-400 rounded-md">
       {albums.map(album => <AlbumBigCard album={album}/>)}
      </div>
  )
}

export default NewReleasesList