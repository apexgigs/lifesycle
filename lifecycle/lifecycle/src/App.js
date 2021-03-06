import React, {Component} from 'react';

class LifeCycle extends Component{
  constructor(){
    super();
    this.state = {
      items:[],
      isLoaded: false,
    };
  };
componentDidMount (){
  fetch("https://jsonplaceholder.typicode.com/users")
  then(response =>{
    return response.json();
  });
  then (date=>{
    console.log(data);
    this.setState({
      items: data,
      isLoaded: true,
    })
  });
};
}
  render (){
    var {isLoaded, items} = this.state;
    if(!isLoaded){
      return (
        <div>Loading....</div>
      )
    }
    else{
    return(
      <div>
      <ul>
        {items.map(el =>{
          return(
            <li key= {el.id}>
            Name {el.name} | UserName: {el.username} | {" "}
            <a herf={`https//${el.website}`}>Websites</a>
          </li>
        }
        }
      </ul>
      </div>

    );
  };


export default LifeCycle;
