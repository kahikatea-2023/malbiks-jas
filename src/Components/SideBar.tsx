import * as elements from 'typed-html'

function Sidebar() {
  return (
    <div class='flex flex-col ml-2 bg-white'>
      <p class='bg-malbik-gray font-bold'>Classical</p>
      <ul class='flex flex-col'>
        <li>CD</li>
        <li>DVD</li>
        <li>Blu-Ray</li>
        <li>Chart</li>
        <li>Best Versions</li>
        <li>Boxed Sets</li>
        <li>Naxos 2023</li>
        <li>releases</li>
        <li>Classical Award</li>
        <li>Winners</li>
        <li>Marbecks</li>
        <li>Collectables</li>
        <li>Gift Vouchers</li>
        <li>Accessories</li>
        <li>Storage</li>
      </ul>
      <p class='bg-malbik-gray'>Info</p>
      <ul>
        <li>Info / Help</li>
        <li>Newsletters</li>
        <li>About Us</li>
        <li>Privacy</li>
      </ul>
      {/* TODO: add filter box conditional? */}
    </div>
  )
}

export default Sidebar
