import Unit from "./Unit";
import {useState} from 'react';

function Weather({city, country, weather, deg, icon}) {
    const [unit, setUnit] = useState('C')
    const [degree, setDegree] = useState(deg);

    const handleUnitToggle = () => {
        if(unit === 'C') {
            setUnit('F');
            setDegree((degree * 9/5) + 32);
        } else {
            setUnit('C');
            setDegree(((degree - 32) * 5/9));
        }
    }


    return <>
        <p className="center">{city}, {country}</p>
        <p className="center">{weather}</p>
        <Unit deg={degree} unit={unit} onClick={handleUnitToggle} />
        <div className="icon"><img src={icon} alt="icon" className="spin"/></div>
    </>;
}

export default Weather;