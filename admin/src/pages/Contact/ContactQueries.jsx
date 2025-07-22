// import React, { useState, useEffect, useContext } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import './ContactQueries.css';

// const ContactQueries = () => {
//   const { url, token } = useContext(StoreContext);
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editContact, setEditContact] = useState(null);

//   // Fetch contact queries
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get(`${url}/api/contact`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         console.log('Fetched contacts:', response.data);
//         setContacts(response.data.data || []);
//       } catch (error) {
//         console.error('Error fetching contacts:', error.response?.data || error.message);
//         setError(error.response?.data?.message || 'Failed to load contact queries.');
//         toast.error(error.response?.data?.message || 'Failed to load contact queries', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           style: { background: '#ff4d4d', color: '#fff' }
//         });
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchContacts();
//   }, [url, token]);

//   // Handle status/response update
//   const handleUpdate = async (contactId, status, response) => {
//     try {
//       const res = await axios.put(
//         `${url}/api/contact/${contactId}`,
//         { status, response },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log('Updated contact:', res.data);
//       setContacts(contacts.map(c => (c._id === contactId ? res.data.data : c)));
//       setEditContact(null);
//       toast.success('Contact query updated successfully!', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         style: { background: '#10b981', color: '#fff' }
//       });
//     } catch (error) {
//       console.error('Error updating contact:', error.response?.data || error.message);
//       toast.error(error.response?.data?.message || 'Failed to update contact query', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         style: { background: '#ff4d4d', color: '#fff' }
//       });
//     }
//   };

//   // Handle delete
//   const handleDelete = async (contactId) => {
//     if (!window.confirm('Are you sure you want to delete this contact query?')) return;
//     try {
//       await axios.delete(`${url}/api/contact/${contactId}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log('Deleted contact:', contactId);
//       setContacts(contacts.filter(c => c._id !== contactId));
//       toast.success('Contact query deleted successfully!', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         style: { background: '#10b981', color: '#fff' }
//       });
//     } catch (error) {
//       console.error('Error deleting contact:', error.response?.data || error.message);
//       toast.error(error.response?.data?.message || 'Failed to delete contact query', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         style: { background: '#ff4d4d', color: '#fff' }
//       });
//     }
//   };

//   return (
//     <div className="foodie-contact-queries">
//       <h2>Contact Queries</h2>
//       {error && <div className="error-message">{error}</div>}
//       {loading ? (
//         <div className="loading">
//           <div className="spinner"></div>
//           Loading queries...
//         </div>
//       ) : (
//         <div className="contact-queries-list">
//           {contacts.length > 0 ? (
//             contacts.map(contact => (
//               <div key={contact._id} className="contact-query-item">
//                 <div className="contact-query-details">
//                   <p><strong>Name:</strong> {contact.name}</p>
//                   <p><strong>Email:</strong> {contact.email}</p>
//                   <p><strong>Message:</strong> {contact.message}</p>
//                   <p><strong>Status:</strong> {contact.status}</p>
//                   <p><strong>Response:</strong> {contact.response || 'No response yet'}</p>
//                   <p><strong>Submitted:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
//                 </div>
//                 <div className="contact-query-actions">
//                   <button
//                     className="action-button edit"
//                     onClick={() => setEditContact(contact)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="action-button delete"
//                     onClick={() => handleDelete(contact._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//                 {editContact?._id === contact._id && (
//                   <div className="edit-contact-form">
//                     <select
//                       value={editContact.status}
//                       onChange={(e) => setEditContact({ ...editContact, status: e.target.value })}
//                     >
//                       <option value="Pending">Pending</option>
//                       <option value="Resolved">Resolved</option>
//                     </select>
//                     <textarea
//                       value={editContact.response}
//                       onChange={(e) => setEditContact({ ...editContact, response: e.target.value })}
//                       placeholder="Enter response"
//                     ></textarea>
//                     <div className="edit-form-actions">
//                       <button
//                         className="action-button save"
//                         onClick={() => handleUpdate(contact._id, editContact.status, editContact.response)}
//                       >
//                         Save
//                       </button>
//                       <button
//                         className="action-button cancel"
//                         onClick={() => setEditContact(null)}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <div className="no-queries">No contact queries yet.</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactQueries;

















"use client"

import { useState, useEffect, useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import axios from "axios"
import { toast } from "react-toastify"
import "./ContactQueries.css"

const ContactQueries = () => {
  const { url, token } = useContext(StoreContext)
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editContact, setEditContact] = useState(null)

  // Fetch contact queries
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${url}/api/contact`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        console.log("Fetched contacts:", response.data)
        setContacts(response.data.data || [])
      } catch (error) {
        console.error("Error fetching contacts:", error.response?.data || error.message)
        setError(error.response?.data?.message || "Failed to load contact queries.")
        toast.error(error.response?.data?.message || "Failed to load contact queries", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { background: "#ff4d4d", color: "#fff" },
        })
      } finally {
        setLoading(false)
      }
    }
    fetchContacts()
  }, [url, token])

  // Handle status/response update
  const handleUpdate = async (contactId, status, response) => {
    try {
      const res = await axios.put(
        `${url}/api/contact/${contactId}`,
        { status, response },
        { headers: { Authorization: `Bearer ${token}` } },
      )
      console.log("Updated contact:", res.data)
      setContacts(contacts.map((c) => (c._id === contactId ? res.data.data : c)))
      setEditContact(null)
      toast.success("Contact query updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { background: "#10b981", color: "#fff" },
      })
    } catch (error) {
      console.error("Error updating contact:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Failed to update contact query", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { background: "#ff4d4d", color: "#fff" },
      })
    }
  }

  // Handle delete
  const handleDelete = async (contactId) => {
    if (!window.confirm("Are you sure you want to delete this contact query?")) return
    try {
      await axios.delete(`${url}/api/contact/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log("Deleted contact:", contactId)
      setContacts(contacts.filter((c) => c._id !== contactId))
      toast.success("Contact query deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { background: "#10b981", color: "#fff" },
      })
    } catch (error) {
      console.error("Error deleting contact:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Failed to delete contact query", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { background: "#ff4d4d", color: "#fff" },
      })
    }
  }

  return (
    <div className="contact-queries">
      <div className="contact-queries-header">
        <h1>Contact Queries</h1>
        <p>Manage customer inquiries and support requests</p>
      </div>

      <div className="contact-queries-container">
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            Loading queries...
          </div>
        ) : (
          <div className="contact-queries-list">
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <div key={contact._id} className="contact-query-item">
                  <div className="contact-query-details">
                    <div className="contact-detail-row">
                      <p className="contact-detail-label">Name:</p>
                      <p className="contact-detail-value">{contact.name}</p>
                    </div>
                    <div className="contact-detail-row">
                      <p className="contact-detail-label">Email:</p>
                      <p className="contact-detail-value">{contact.email}</p>
                    </div>
                    <div className="contact-detail-row">
                      <p className="contact-detail-label">Message:</p>
                      <p className="contact-detail-value">{contact.message}</p>
                    </div>
                    <div className="contact-detail-row">
                      <p className="contact-detail-label">Status:</p>
                      <span className={`contact-status ${contact.status.toLowerCase()}`}>{contact.status}</span>
                    </div>
                    <div className="contact-detail-row">
                      <p className="contact-detail-label">Response:</p>
                      <p className="contact-detail-value">{contact.response || "No response yet"}</p>
                    </div>
                    <div className="contact-detail-row">
                      <p className="contact-detail-label">Submitted:</p>
                      <p className="contact-detail-value">{new Date(contact.createdAt).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="contact-query-actions">
                    <button className="action-button edit" onClick={() => setEditContact(contact)}>
                      Edit
                    </button>
                    <button className="action-button delete" onClick={() => handleDelete(contact._id)}>
                      Delete
                    </button>
                  </div>

                  {editContact?._id === contact._id && (
                    <div className="edit-contact-form">
                      <div className="edit-form-group">
                        <label>Status</label>
                        <select
                          value={editContact.status}
                          onChange={(e) => setEditContact({ ...editContact, status: e.target.value })}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                      </div>
                      <div className="edit-form-group">
                        <label>Response</label>
                        <textarea
                          value={editContact.response}
                          onChange={(e) => setEditContact({ ...editContact, response: e.target.value })}
                          placeholder="Enter response"
                        />
                      </div>
                      <div className="edit-form-actions">
                        <button
                          className="action-button save"
                          onClick={() => handleUpdate(contact._id, editContact.status, editContact.response)}
                        >
                          Save
                        </button>
                        <button className="action-button cancel" onClick={() => setEditContact(null)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-queries">No contact queries yet.</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactQueries
