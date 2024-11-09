import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import auth from "../../firebase";
import { useState } from "react";


export default function Login() {

    const [users, setUser] = useState(null)

    console.log(users)
    const handleLoginWothGoogle=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user)
            
        }).catch(error => {
            console.log('ERROR',error);
            setUser(null);
        })
    }
  return (
    <div>
      <button onClick={handleLoginWothGoogle} className="btn btn-primary">Login With Google</button>

      {users && (
                <div>
                    <h1>Name: {users.displayName}</h1>
                    <p>Email: {users.email}</p>
                </div>
            )}
    </div>
  )
}
