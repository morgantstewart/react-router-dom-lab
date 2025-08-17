import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes = [] }) => {
  if (mailboxes.length === 0) {
    return (
      <div>
        <h2>Mailboxes</h2>
        <p>No mailboxes found. <Link to="/new-mailbox">Create your first mailbox!</Link></p>
      </div>
    );
  }

  return (
    <div>
      <h2>Mailboxes</h2>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              Mailbox #{mailbox._id} - {mailbox.name || 'Unnamed Mailbox'}
            </Link>
            <div>
              <small>Owner: {mailbox.boxOwner || 'Unknown'} | Size: {mailbox.boxSize || 'Unknown'}</small>
            </div>
          </li>
        ))}
      </ul>
      <p><Link to="/new-mailbox">Add New Mailbox</Link></p>
    </div>
  );
};

export default MailboxList;
