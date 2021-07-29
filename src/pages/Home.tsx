import IlustrattionImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export function Home() {
    return (
        <div id="page-auth">
            <aside>
              <img src={IlustrattionImg} alt="Illustration symbolic questions and answers" />
              <strong>Create live Q&amp;A rooms</strong>
              <p>Ask your audience questions in real time</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Logo Google" />
                        Create your room with Google
                    </button>
                    <div>Or enter a room</div>
                    <form>
                        <input 
                         type="text" 
                         placeholder="Enter room code"
                        />
                        <button type="submit">
                            Entre in the room
                        </button>
                    </form>
                    
                </div>
            </main>
        </div>
    );
}