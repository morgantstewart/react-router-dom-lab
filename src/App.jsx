import '/src/components/NavBar/NavBar.jsx';
import '/src/components/MailboxForm/MailboxForm.jsx';
import '/src/components/MailboxList/MailboxList.jsx';
import '/src/components/MailboxDetails/MailboxDetails.jsx';
import { Route, Routes } from 'react-router';

const App = () => {
  return <h1>Hello world!</h1>;
};


      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
       <Route path="/mailboxes" element={<MailboxList />} />
         <Route path="/new-mailbox" element={<MailboxForm />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>


export default App;
