
const EventPropagation = () => {

    return <div >
        <h2>With Propagation</h2>
        <div style={{
            border: "2px solid red"
        }}
            onClick={() => alert("outer clicked")}
        >
            <button
                onClick={() => alert("button clicked")}
            >
                click
            </button>
        </div>
        <h2>Without Propagation</h2>
        <div style={{
            border: "2px solid red"
        }}
            onClick={() => alert("outer clicked")}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    alert("button clicked")
                }}>
                click
            </button>
        </div>
    </div>
}

export default EventPropagation;