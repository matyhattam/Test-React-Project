import { useHistory } from "react-router-dom";

import NewMeetup from '../components/meetups/NewMeetup'

function NewMeetupsPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch('https://first-react-app-e8443-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetup onAddMeetup={addMeetupHandler}>

        </NewMeetup>
    </section>
}

export default NewMeetupsPage;
