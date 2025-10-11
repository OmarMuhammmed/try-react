interface IMessage  {
    message: string;
    id : number;
}


function Greeting(props: IMessage) {
  return <h2>{props.message + ", " + props.id}</h2>;  
}

export default Greeting;