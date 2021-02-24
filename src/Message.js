import React, {forwardRef} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';
const Message  =  forwardRef(({message, username}, ref) => {
    const isUser = username === message.user;
    console.log(isUser)
    console.log(message.username)
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography color="white"
                        variant='h5'
                        component='h2'>
                                   {message.user} :  {message.text}

                    </Typography>
                </CardContent>
            </Card>
            </div>
        
    )
})

export default Message
