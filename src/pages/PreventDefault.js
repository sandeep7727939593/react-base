const PreventDefault = () => {

    return <div>
        <h1>Prevent Default behavior</h1>
        <form onSubmit={(e) => {e.preventDefault();alert("submited")}}>
            <input ></input>
            <button>Send</button>
        </form>
    </div>

}

export default PreventDefault;