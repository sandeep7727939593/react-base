import { useImmer } from "use-immer";


const UseImmer = () => {

    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });
    const handleName = (e) => {
        updatePerson(data => {
            data.name = e.target.value
        })
    }
    const handleArt = (type, e) => {
        updatePerson(data => {
            data.artwork[type] = e.target.value
        })
    }
    return (
        <>
            <h1>Form using UseImmer </h1>
            <form>
                <label>Name : <input type="text" value={person.name} onChange={handleName} /> </label><br />
                <label>Title : <input type="text" value={person.artwork.title} onChange={(e) => handleArt('title', e)} /> </label><br />
                <label>City : <input type="text" value={person.artwork.city} onChange={(e) => handleArt('city', e)} /> </label><br />
                <label>Image : <input type="text" value={person.artwork.image} onChange={(e) => handleArt('image', e)} /> </label><br />
            </form>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    )
}

export default UseImmer