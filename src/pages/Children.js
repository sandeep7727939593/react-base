const B = ({image}) => {
    return <img src={image} />
}

const A = ({children}) => {
    return <li>
        {children}
    </li>
}

const Children = () => {
    return <div>
        <h1>Children pass as Props</h1>
        <ol>
            <A>
                <B image="https://i.imgur.com/YfeOqp2s.jpg"/>
            </A>
            <A>
                <B image="https://i.imgur.com/YfeOqp2s.jpg"/>
            </A>
            <A>
                <B image="https://i.imgur.com/YfeOqp2s.jpg"/>
            </A>
        </ol>
    </div>
}

export default Children;