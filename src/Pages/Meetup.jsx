import React from 'react'
import MeetupForm from '../Components/Meetups/MeetupForm';
import { useHistory } from 'react-router-dom';

function Meetup() {
    const history = useHistory();
    const meetupHandlerdata = (MeetupData) => {
        fetch('https://reactmeetup24-default-rtdb.asia-southeast1.firebasedatabase.app/meetupsdata.json',
            {
                method: 'POST',
                body: JSON.stringify(MeetupData),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        })
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <MeetupForm onAddMeetup={meetupHandlerdata} />
        </section>
    )
}

export default Meetup