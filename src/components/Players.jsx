import React from 'react'
import PlayerPill from "./PlayerPill";
import { useState, useEffect } from 'react';
import { player } from '../utils/usefetch';
import './Players.css'

const Players = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const data = await player();
            if (data.players.list.length > 0) {
                setPlayers(data.players.list);
            }
            
        }

        fetchPlayers()

    }, [])

    const fetchPlayers = async () => {
        const data = await player();
            setPlayers(data.players.list);
            
    }



    const DisplayPlayers = () => {
        if (players.length === 0) {
            return <div>Loading...</div>
        } else {
            return (
                <div className='playersContainer'>
                    <h1>Players</h1>
                    <div className="col">
                        {players.map((player) => (
                            <PlayerPill name={{name: player.name_raw}} />
                        ))}
                    </div>
                </div>
            )
        }
    }

  return (
    <div>
        <DisplayPlayers/>
    </div>
  )
}

export default Players