const B = ({name}) => {
    return <p>{name}</p>
}


const A = (props) => {
    return <li>
        <B {...props} />
    </li>
}

const Spread = () => {

    return <div>
        <h1>Forwarding props with the JSX spread syntax </h1>
        <ul>
            <A name="Sandeep" />
            <A name="Kumar" />
            <A name="Jangir" />
            <A name="Developer" />
        </ul>
    </div>
}


export default Spread;