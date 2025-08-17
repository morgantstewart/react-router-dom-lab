import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form
    setFormData({
      name: '',
      location: '',
      description: ''
    });
    // Navigate to mailboxes list
    navigate('/mailboxes');
  };

  return (
    <div>
      <h2>Create New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Mailbox Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>
        
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
