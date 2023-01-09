import React from "react"
import { useEffect, useState } from "react"
import { json } from "stream/consumers";

const Home = () => {

    const [quests, setQuests] = useState<[]>();

    useEffect(() => {
        const fetchQuests = async() => {
            const response = await fetch('http://localhost:4000/api/quests');
            const json = await response.json();

            if(response.ok) {
                setQuests(json);
                console.log(quests)
            }
        }

        fetchQuests();
    }, [])

    return (
        <div className="home">
            <div className="quests">
                {quests && quests.map((quest: any) => (
                    <p key={quest.qid}>{quest.questTitle}</p>
                ))}
            </div>
        </div>
    )
}

export default Home