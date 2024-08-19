import User from "../User/User";
import UserClass from "../UserClass/UserClass";

const About = () => {
    const userObj = {name:"Tulasi", designation:"Software Developer", experience:"2 years"};
    return (
        <>
         <h1>this is about us page</h1>
         <User user = {userObj}/>
         <UserClass user = {userObj}/>
        </>
    )

}

export default About;