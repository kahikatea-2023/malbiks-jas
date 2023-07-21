import * as elements from 'typed-html'

interface Props {
  text: string
}

function NavText(props: Props) {
  return (
    <div class='flex pr-2 pb-1'>      
      <p class='self-end font-bold text-2xl text-white'>{props.text}</p>
    </div>
  )
}

export default NavText