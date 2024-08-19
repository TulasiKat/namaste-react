import { Component } from "react";

class UserClass extends Component{
    constructor(props){
        super(props)
        this.state = {count:0 , name : "" , avatar:""};
    }

    incrementNumber = () => {
        console.log("button clicked");
        this.setState({count:this.state.count+1});
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaysaini");
        const json = await data.json();
        console.log(json);
        this.setState({name:json.login , avatar:json.avatar_url});
        
    }


   render(){
    const {name, avatar} = this.state;
    return (
        <div className="user-card">
             <img src={avatar}/>
             <h2>{name}</h2>
             
             <p>{this.state.count}</p>

            <button onClick={this.incrementNumber}>Click here</button>
        </div>
     )
   }
}

export default UserClass;