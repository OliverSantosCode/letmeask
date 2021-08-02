import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";

import IlustrattionImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";

import "../styles/auth.scss";

export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        
        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRooms = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/rooms/${firebaseRooms.key}`);
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
                    <h2>Create new room</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                         type="text" 
                         placeholder="Name room"
                         onChange={event => setNewRoom(event.target.value)}
                         value={newRoom}
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