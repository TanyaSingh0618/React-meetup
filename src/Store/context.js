import { createContext, useState } from 'react';

const FavContext = createContext({
    favKey: [],
    totalFav: 0,
    addFav: (item) => { },
    removeFav: (meetupId) => { },
    ItemFav: (meetupId) => { }
});

export function FavContextProvider(props) {
    const [userFav, setuserFav] = useState([]);

    function addFavHandler(item) {
        setuserFav((prevFav) => {
            return prevFav.concat(item);
        })
    }
    function removeFavHandler(meetupId) {
        setuserFav((prevFav) => {
            return prevFav.filter(meetup => meetup.id != meetupId);
        })
    }
    function ItemFavHandler(meetupId) {
        return userFav.some(meetup => meetup.id === meetupId);
    }
    const context = {
        favKey: userFav,
        totalFav: userFav.length,
        addFav: addFavHandler,
        removeFav: removeFavHandler,
        ItemFav: ItemFavHandler
    };
    return <FavContext.Provider value={context}>
        {props.children}
    </FavContext.Provider>
}

export default FavContext;