import { useState } from "react";
import Form from "./components/Form";
import Ticket from "./components/Ticket";
import AvatarUpload from "./components/AvatarUpload";

function App() {
  const [ticketData, setTicketData] = useState(null);
  const [avatar, setAvatar] = useState(null); // State for uploaded avatar

  const handleFormSubmit = (data) => {
    // Include avatar in ticket data
    setTicketData({ ...data, avatar });
  };

  const handleAvatarUpload = (uploadedFile) => {
    setAvatar(uploadedFile); // Update avatar state with the uploaded file
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {!ticketData ? (
        <>
          {/* Avatar Upload Component */}
          <AvatarUpload onUpload={handleAvatarUpload} />

          {/* Form Component */}
          <Form onSubmit={handleFormSubmit} />
        </>
      ) : (
        // Ticket Component
        <Ticket ticket={ticketData} />
      )}
    </div>
  );
}

export default App;
