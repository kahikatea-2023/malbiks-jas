import * as elements from 'typed-html'
import { Album } from '../db/schema'

function ResultItem({ img, artist, title, producer, format, releaseDate, price, availability  }: Album) {
  return (
    <div class="flex justify-between">
      <div class='flex'>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h3>{artist}</h3>
          <h4>{title}</h4>
          <p>
            [ {producer} / {format} {releaseDate} ]
          </p>
        </div>
      </div>
      <div class="flex flex-col place-self-end">
        <button>add to cart</button>
        {price}
        {availability}
      </div>
    </div>
  )
}

export default ResultItem
