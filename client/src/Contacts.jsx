export default function Contacts({
  contacts,
  editContactHandler,
  deleteContact,
}) {
  return (
    <table className="table table-striped table-hover mt-5">
      <thead>
        <tr>
          <th>T/r</th>
          <th>Name</th>
          <th>Number</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, idx) => (
          <tr key={contact._id}>
            <th>{idx + 1}</th>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
            <td>{contact.desc}</td>
            <td className="d-flex">
              <button
                className="btn btn-outline-success btn-sm me-1"
                onClick={() => editContactHandler(contact._id)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger btn-sm ms-1"
                onClick={() => deleteContact(contact._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
