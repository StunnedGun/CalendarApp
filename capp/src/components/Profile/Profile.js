import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from '../Calendar/Calendar';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <>
            <div>You should see the Calendar here</div>
            <Calendar></Calendar>
        </>
    )
  );
};

export default Profile;