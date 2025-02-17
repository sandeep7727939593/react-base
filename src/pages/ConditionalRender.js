import Code from "../components/Code";

const Item = ({isPacked, name}) => {
    return <li>{name} {isPacked && "Packed"}</li>
}


const ConditionalRender = () => {

    return  (
        <div>
            <h1>Conditionally returning JSX </h1>
            <ul>
                <Item 
                    isPacked={true}
                    name="Meggi"
                />
                <Item 
                    isPacked={true}
                    name="Milk"
                />
                <Item 
                    isPacked={false}
                    name="Cake"
                />
            </ul>
            <Code 
                content="Don’t put numbers on the left side of &&.

To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>."
                html={false}
            />
        </div>
    )
}


export default ConditionalRender;