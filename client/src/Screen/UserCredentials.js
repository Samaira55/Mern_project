import { GitHubSignFunction } from "../ServerMethod/Servermethods";

export default function UserCredentials(){
    return(
        <div className="UserCreadentialsBase">
            <div className="UserCreadentialsF">
                <div className="UserCreadentialsFFChild">
                    <button onClick={()=>GitHubSignFunction()} className="usercredentialButtons">Login with Github</button>
                </div>
                <div className="vl"></div>
                <div className="UserCreadentialsFSChild">
                    <input className="usercredentialInput" placeholder="Email" required/>
                    <input className="usercredentialInput" placeholder="Password" required/>
                    <button className="usercredentialButtons">Login</button>
                </div>
            </div>
        </div>
    )
}