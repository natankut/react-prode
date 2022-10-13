import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="container" style={{padding:'20px 20px 0 20px',display:'flex', flexDirection:'column', rowGap:'20px'}}>
        <Link to="/sign-in" >Logueate</Link>
        <Link to="/sign-up">Registrate</Link>
    </div>
  )
}

export default Header