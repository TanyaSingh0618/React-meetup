import React, { useContext } from 'react';
import classes from './Meetupitem.module.css';
import Card from '../Ui/Card';
import FavContext from '../../Store/context';

function MeetupItems(props) {
    const FavCTX = useContext(FavContext);
    const ItemFav = FavCTX.ItemFav(props.id);
    const toggleFavStatusHandler = () => {
        if (ItemFav) {
            FavCTX.removeFav(props.id);
        } else {
            FavCTX.addFav({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavStatusHandler}>{ItemFav ? 'Remove From Fav' : 'To Favorites'}</button>
                </div>
            </Card>

        </li>
    )
}

export default MeetupItems