const Setting = (props:{validate:()=>void}) => {
    return (
        <>
        <div className="setting-container">
            <span>Setting</span>
            <div>
                <button onClick={props.validate}>Submit</button>
            </div>
        </div>
        </>
    )
}

export default Setting