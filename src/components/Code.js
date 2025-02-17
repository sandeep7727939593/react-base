import "./../css/Code.css"
const Code = ({content, html}) => {
    if (html) {
        return <div className="code-block" dangerouslySetInnerHTML={{__html:content}}></div>
    } else {
        return <div className="code-block" >{content}</div>
    }
    
}

export default Code;