import { Link } from 'react-router-dom'  //輸入Link會自己跳出來

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/news">NEWS</Link></li>


      </ul>

    </div>
  )
}

export default Nav