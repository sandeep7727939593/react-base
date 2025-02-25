import { useState } from "react";
import Code from "../components/Code";
import Clock from "../components/Clock";

const RenderandCommit = () => {
    const [time, setTime] = useState('');
    
    setTimeout(function(){
        const now = new Date();
        const date = now.getHours() + ' : ' + now.getMinutes() + ' : ' + now.getSeconds();
        setTime(date)
    }, 1000)
    return <div>
        <h1>Render and Commit</h1>
        <ol>
            <li>Triggering a render (delivering the guest’s order to the kitchen)</li>
            <li>Rendering the component (preparing the order in the kitchen)</li>
            <li>Committing to the DOM (placing the order on the table)</li>
        </ol>
        <h2>Step 1: Trigger a render</h2>
        <Code
            content={"There are two reasons for a component to render:<br /> 1. It’s the component’s initial render. <br /> 2. The component’s (or one of its ancestors’) state has been updated."}
            html={true}
        />
        <Clock
            time={time}
        />
    </div>
}

export default RenderandCommit;