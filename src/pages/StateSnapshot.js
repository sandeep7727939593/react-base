import { useState } from "react";
import Code from "../components/Code";

const StateSnapshot = () => {
    const [number, setNumber] = useState(0);
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 2000);
    }

    return <div>
        <h1>
            State as a Snapshot
        </h1>
        <h3>Count example </h3>
        <h3>{number}</h3>
        <button onClick={
            () => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }
        }>
            +3 click
        </button>
        <Code
            content='Setting state only changes it for the next render.
        During the first render, number was 0.
        This is why, in that render’s onClick handler,
        the value of number is still 0 even after setNumber(number + 1) was called:'
        />
        <Code
            content={"<button onClick={() => {setNumber(number + 1);setNumber(number + 1);setNumber(number + 1);}}>+3</button>"}
        />

        <p>Here is what this button’s click handler tells React to do:</p>

        <div class="box">
            <p><strong>setNumber(number + 1)</strong>: number is <strong>0</strong>, so <strong>setNumber(0 + 1)</strong>.<br />
                React prepares to change number to <strong>1</strong> on the next render.</p>

            <p><strong>setNumber(number + 1)</strong>: number is <strong>0</strong>, so <strong>setNumber(0 + 1)</strong>.<br />
                React prepares to change number to <strong>1</strong> on the next render.</p>

            <p><strong>setNumber(number + 1)</strong>: number is <strong>0</strong>, so <strong>setNumber(0 + 1)</strong>.<br />
                React prepares to change number to <strong>1</strong> on the next render.</p>
        </div>

        <h2>Why This Happens</h2>
        <p>In React, state updates are asynchronous and batched. So, if you call <code>setNumber</code> multiple times in one click event, React doesn’t update the value immediately. Instead, it batches all updates and applies the last one. This is why each <code>setNumber</code> call still sees the old value (<code>0</code>), leading to <code>1</code> instead of incrementing by 3.</p>

        <h2>Solution</h2>
        <p>To fix this, use the updater function instead of directly using the state value:</p>

        <pre>
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
        </pre>

        <p>This way, React uses the latest state value for each update, resulting in the expected final value of <code>3</code>.</p>
        <h2>State over time </h2>
        <button onClick={() => {
            setNumber(number + 5)
            alert(number)
        }}>+5 click one time with alert</button><br />
        <button onClick={() => {
            setNumber(number + 5)
            setTimeout(() => { alert(number) }, 5000)

        }}>+5 click one time with alert with 5 second delay</button>
        <p><strong>A state variable’s value never changes within a render</strong>, even if its event handler’s code is asynchronous. Inside that render’s onClick, the value of number continues to be 0 even after setNumber(number + 5) was called. Its value was “fixed” when React “took the snapshot” of the UI by calling your component.</p>
        <br />
        <form onSubmit={handleSubmit}>
            <label>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label><br />
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            /><br />
            <button type="submit">Send</button>
        </form>

    </div>
}

export default StateSnapshot;