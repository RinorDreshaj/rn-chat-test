import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat'

export default class Chat extends React.Component {
    state = {
        messages: []
    }

    onSend(message) {
        this.setState({
            messages: this.state.messages.concat(message)
        })
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }
}