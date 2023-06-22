import React, { useContext } from 'react';
import FavContext from '../Store/context';
import MeetupList from '../Components/Meetups/MeetupList';

function Favorites() {
    const FavCTX = useContext(FavContext);
    let content;
    if (FavCTX.totalFav === 0) {
        content = <h1>EMPTY NO FAV HERE</h1>
    } else {
        content = <MeetupList meetups={FavCTX} />
    }
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites