import logo from '../assets/icons/cloud-hail.svg';

function Header() {
    return <div className="header">
        <h1>Free C<img src={logo} alt="Cloud Logo" width={80} height={80} />de Camp</h1>
        <h1>Weather App</h1>
    </div>;
}

export default Header;