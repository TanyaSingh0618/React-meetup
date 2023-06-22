import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavContext from '../../Store/context';


function MainNavigation() {
    const FavCTX = useContext(FavContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/New-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/Favorites'>My Favorites
                            <span className={classes.badge}>{FavCTX.totalFav}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation