import { useContext } from "react";
import { useHistory } from "react-router-dom";

import IlustrattionImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";
import { AuthContext } from "../App";

import "../styles/auth.scss";

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useContext(AuthContext);

    async function handleCreateRoom() {
        if (!user) {
           await signInWithGoogle();
        }
        history.push("/rooms/new");
    }

    return (
        <div id="page-auth">
            <aside>
              <img src={IlustrattionImg} alt="Illustration symbolic questions and answers" />
              <strong>Create live Q&amp;A rooms</strong>
              <p>Ask your audience questions in real time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo Google" />
                        Create your room with Google
                    </button>
                    <div className="separator">Or enter a room</div>
                    <form>
                        <input 
                         type="text" 
                         placeholder="Enter room code"
                        />
                        <Button type="submit">
                            Entre in the room
                        </Button>
                    </form>
                    
                </div>
            </main>
        </div>
    );
}