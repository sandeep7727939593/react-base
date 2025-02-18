const Alert = ({message, name}) => {
    return <button onClick={() => alert(message)}>
        {name}
    </button>
}

const EventHandler = () => {

    return <div>
        <Alert
            name ="Play Movie"
            message="Movie playing"
        />
        <Alert
            name ="Stop Movie"
            message="Movie stoping"
        />
    </div>
}
export default EventHandler; 