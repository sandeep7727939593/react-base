const B = ({image, alt}) => {
    return <img src={image} alt={alt} />
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
                <B image="https://i.imgur.com/YfeOqp2s.jpg" alt="first pic"/>
            </A>
            <A>
                <B image="https://i.imgur.com/YfeOqp2s.jpg" alt="second pic"/>
            </A>
            <A>
                <B image="https://i.imgur.com/YfeOqp2s.jpg" alt="third pic"/>
            </A>
        </ol>
    </div>
}

export default Children;