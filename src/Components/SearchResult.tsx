import * as elements from 'typed-html'

interface Props {
  text: string
}

function NavText(props: Props) {
  return (
    <p>{props.text}</p>
  )
}

export default NavText