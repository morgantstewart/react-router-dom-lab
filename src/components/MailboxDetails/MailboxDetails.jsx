import { useParams, Link } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return (
      <div>
        <h2>Mailbox not found</h2>
        <p>The mailbox you're looking for doesn't exist.</p>
        <Link to="/mailboxes">Back to Mailboxes</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <div>
        <h3>{selectedBox.name || 'Unnamed Mailbox'}</h3>
        <p><strong>Box Number:</strong> {selectedBox._id}</p>
        <p><strong>Location:</strong> {selectedBox.location || 'No location specified'}</p>
        <p><strong>Description:</strong> {selectedBox.description || 'No description available'}</p>
      </div>
      <div>
        <Link to="/mailboxes">Back to Mailboxes</Link>
      </div>
    </div>
  );
};

export default MailboxDetails;

