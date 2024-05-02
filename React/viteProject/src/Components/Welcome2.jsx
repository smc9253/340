//so this is an external component!

const Welcome2 = ({name, job, myStyle}) => {
    //we are not doing any state or instantitation, so let's render!
    return(
        <section className={myStyle}>
            <h1>Hi, {name}</h1>
            <p>You do: {job}</p>
            
        </section>
    )
}

export default Welcome2;