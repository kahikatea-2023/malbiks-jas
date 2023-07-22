import * as elements from 'typed-html'
import { Album } from '../db/schema'

function ResultItem({ img, artist, title, producer, format, releaseDate, price, availability  }: Album) {
  return (
    <div class="flex justify-between py-1">
      <div class='flex'>
        <div>
          <img src={img} alt="" />
        </div>
        <div class='ml-2'>
          <h3>{artist}</h3>
          <h4>{title}</h4>
          <p>
            [ {producer} / {format} {releaseDate} ]
          </p>
        </div>
      </div>
      <div class="flex flex-col place-self-end pr-2">
        <button>add to cart</button>
        {price}
        {availability}
      </div>
    </div>
  )
}

export default ResultItem
