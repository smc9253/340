// props below is a catch-all holder for all args --> parentheses instead of curly braces
function Welcome(props){
    return (
    <div>
        <h1>Hello, {props.name}</h1>
        <h5>age: {props.age}</h5>
    </div>
    )
  }

export default Welcome;