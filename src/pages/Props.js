import Code from "./../components/Code";

const getImageUrl = function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}


const Avtar = ({ person, size = "100" }) => {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}


export default function Props() {
    return (
        <div>
            <Avtar
                person={{ name: 'Sandeep', imageId: 'YfeOqp2' }}
                size={null}
            />
            <Avtar
                person={{ name: 'kumar', imageId: 'YfeOqp2' }}
                size="200"
            />
            <Avtar
                person={{ name: 'Jangir', imageId: 'YfeOqp2' }}
                size="100"
            />
            <Code
                content="
                    The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used.
                "
            />
        </div>
    )
}