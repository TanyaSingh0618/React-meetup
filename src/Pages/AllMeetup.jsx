import React, { useEffect, useState } from 'react';
import MeetupList from '../Components/Meetups/MeetupList';
function AllMeetup() {
    const [IsLoading, setIsLoading] = useState(true);
    const [MeetupData, setMeetupData] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://reactmeetup24-default-rtdb.asia-southeast1.firebasedatabase.app/meetupsdata.json'
        ).then((res) => {
            return res.json()
        }).then((data) => {
            const meetups = [];
            for (const value in data) {
                const meetupp = {
                    id: value,
                    ...data[value]
                };
                meetups.push(meetupp);
            }
            setIsLoading(false);
            setMeetupData(meetups);
        })
    }, []);
    if (IsLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={MeetupData} />
        </section >
    )
}

export default AllMeetup