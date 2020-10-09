import React, { useEffect, useState } from 'react'
import './Chat.css'

import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 100))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        
        console.log(input)
    }

    return (
        <div className="chat">

            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at *time*</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined /> 
                    </IconButton>                    
                    <IconButton>
                        <AttachFile />
                    </IconButton>    
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>    
                </div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_receiver"}`}>
                    <span className='chat_name'>User</span>
                    Hello 
                    <span className='chat_timestamp'>00:00am</span>
                </p>
                <p className="chat_message">
                    World
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick={sendMessage} type='submit'> Send a message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat