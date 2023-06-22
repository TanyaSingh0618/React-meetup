import React, { useRef } from 'react'
import Card from '../Ui/Card';
import classes from './MeetupForm.module.css'

function MeetupForm(props) {
    const titleInput = useRef();
    const ImageInput = useRef();
    const AddressInput = useRef();
    const DescriptionInput = useRef();
    const SubmitHandler = (e) => {
        e.preventDefault();
        const EnterTitle = titleInput.current.value;
        const EnterImage = ImageInput.current.value;
        const EnterAddress = AddressInput.current.value;
        const EnterDescription = DescriptionInput.current.value;
        const MeetupData = {
            title: EnterTitle,
            image: EnterImage,
            address: EnterAddress,
            description: EnterDescription
        }
        props.onAddMeetup(MeetupData);

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={ImageInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id='address' ref={AddressInput} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea type='text' required id='description' rows='5' ref={DescriptionInput} />
                </div>
                <div className={classes.actions}>
                    <button> Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default MeetupForm