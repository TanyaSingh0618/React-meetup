import React from 'react'
import classes from './MeetupList.module.css';
import MeetupItems from './MeetupItems';

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItems
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />
            ))}
        </ul>
    )
}

export default MeetupList