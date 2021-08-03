import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";

import "../styles/room.scss";

export function Room() {
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={"-Mg7I8c9Mr2cxo7VqkfB"}/>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Room React</h1>
                    <span>4 Questions</span>
                </div>

                <form>
                    <textarea 
                     placeholder="What do you want to ask?"
                    />

                    <div className="form-footer">
                        <span>To submit a question, <button>please login</button>.</span>
                        <Button type="submit">Submit question</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}