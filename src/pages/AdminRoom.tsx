import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
// import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";

import "../styles/room.scss";
import { database } from "../services/firebase";

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    // const { user } = useAuth();
    const params = useParams<RoomParams>();
    
    const roomId = params.id;

    const { title, questions } = useRoom(roomId);

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm("Do you want to delete this Question?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined>Close Room</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Room {title}</h1>
                    { questions.length > 0 && <span>{questions.length} Questions</span>}
                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question 
                            key={question.id}
                            content={question.content}
                            author={question.author}
                            >
                                <button 
                                 type="button"
                                 onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Delete Question" />
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}