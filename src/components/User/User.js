

const User = (props) => {
   const {name , designation, experience} = props.user;
    return (
       <div className="user-card">
            <img src="user avatar image"/>
            <h2>{name}</h2>
            <h3>{designation}</h3>
            <h3>{experience} of experience</h3>
       </div>
    )
    }
    
    export default User;