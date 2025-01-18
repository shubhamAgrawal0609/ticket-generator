const Ticket = ({ ticket }) => {
    if (!ticket) return null;
  
    return (
      <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold">Congrats, {ticket.name}!</h2>
        <p className="mt-2">Your ticket is ready.</p>
        <p className="mt-2">We've emailed your ticket to {ticket.email}.</p>
        {ticket.avatar && (
          <div className="mt-4">
            <img src={ticket.avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover mx-auto" />
          </div>
        )}
        <div className="mt-4 p-4 bg-purple-800 rounded-md">
          <h3 className="text-lg font-semibold">Coding Conf</h3>
          <p>Jan 31, 2025 / Austin, TX</p>
          <p className="mt-2">GitHub: {ticket.github}</p>
        </div>
      </div>
    );
  };
  
  export default Ticket;
  