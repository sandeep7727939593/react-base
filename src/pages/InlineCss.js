
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: '#ddd',
        color: 'black'
    }
};

const InlineCss = () => {

    return (
        <div style={person.theme}>
            <h1> {person.name}</h1>
            <img
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
            />
            <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );

}

export default InlineCss