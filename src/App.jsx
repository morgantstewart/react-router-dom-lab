import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import { Route, Routes } from 'react-router-dom';





const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    setMailboxes(prevMailboxes => {
      const newMailbox = {
        ...formData,
        _id: prevMailboxes.length + 1
      };
      return [...prevMailboxes, newMailbox];
    });
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm onSubmit={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
};








export default App;