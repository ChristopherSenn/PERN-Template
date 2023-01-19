import React from "react";
import { useNavigate } from "react-router-dom";
import { loginCall } from "src/api/auth/calls/login-call";
import { Icon, IconKeys } from "src/components/icon";

export function LoginView(): React.ReactElement {
    const [username, setUsername] = React.useState("username");
    const [password, setPassword] = React.useState("12345678");
    const [errorMessage, setErrorMessage] = React.useState("");

    const navigate = useNavigate();

    async function login() {
        loginCall({username, password})
            .then(async (user) => {
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/");
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
            });
        
    }

    return(
        <>
            Login View

            <div>
                Username
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
                Password
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>{errorMessage}</div>
            <button onClick={login}>Login</button>

            {<Icon icon={IconKeys.arrowRight} />}
            {<Icon icon={IconKeys.astronaut} />}
        </>
    );
}
