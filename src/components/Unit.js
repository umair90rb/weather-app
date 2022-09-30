
function Unit({deg, unit, onClick}) {
    

    return <>
        <p className="center">{deg}° <a className='center link' onClick={onClick}>{unit}</a></p>
    </>;
}

export default Unit;