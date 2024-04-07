export default function CreateContact({
  contact,
  createHandler,
  createContact,
}) {
  const { name, desc, number } = contact;
  return (
    <form className="w-50 m-auto mt-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Enter contact name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={createHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Enter contact number
        </label>
        <input
          type="number"
          className="form-control"
          id="number"
          name="number"
          value={number}
          onChange={createHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Enter contact description
        </label>
        <textarea
          className="form-control"
          id="desc"
          name="desc"
          value={desc}
          onChange={createHandler}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={createContact}>
        Create
      </button>
    </form>
  );
}
