import { useContext } from "react";
import { Link } from "react-router-dom";

import IlustrattionImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { AuthContext } from "../App";

import "../styles/auth.scss";

export function NewRoom() {
    const { user } = useContext(AuthContext);

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
                    <h1>{user?.name}</h1>
                    <h2>Create new room</h2>
                    <form>
                        <input 
                         type="text" 
                         placeholder="Name room"
                        />
                        <Button type="submit">
                            Create room
                        </Button>
                    </form>
                    <p>You want to enter an existing room? <Link to="/">Click here!</Link></p>
                </div>
            </main>
        </div>
    );
}