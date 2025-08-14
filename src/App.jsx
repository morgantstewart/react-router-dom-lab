import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import { Route, Routes } from 'react-router-dom';





const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [mailboxes, setMailboxes] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const addBox = (formData) => {
    setMailboxes(prevMailboxes => [...prevMailboxes, formData]);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  );
};








export default App;