import * as elements from 'typed-html'
import { Album } from '../db/schema'

interface Props {
  album: Album
}

function ResultItem({ album }: Props) {
  return (
    <div class="flex justify-between">
      <div class='flex'>
        <div>
          <img src={album.img} alt="" />
        </div>
        <div>
          <h3>{album.artist}</h3>
          <h4>{album.title}</h4>
          <p>
            [ {album.producer} / {album.format} {album.releaseDate} ]
          </p>
        </div>
      </div>
      <div class="flex flex-col place-self-end">
        <button>add to cart</button>
        {album.price}
        {album.availability}
      </div>
    </div>
  )
}

export default ResultItem
