import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [member, setMember] = useState([]);

  function handleRemove(id) {
    const filterMember = member.filter((m) => m.id !== id);
    setMember(filterMember);
  }

  function handleSubmit(e) {
    if (!name || !email) return;
    // we use it to can receive value when we use form for submit
    e.preventDefault();

    // Create fakeId
    const id = Date.now();

    // Create new obj to store member
    // const addMember = {name: name, email: email} but in ES6 we can write in short like below
    const addMember = { id, name, email };
    // const updateMember = [addMember] if we write in this way it means that it will overwrite when we add new member
    // We can use sprit operator to copy all the member as we know the old one in store in member
    const updateMember = [...member, addMember];
    setMember(updateMember);
    setName("");
    setEmail("");
  }

  return (
    <div className="container">
      <form>
        <h2>Login</h2>
        <div className="">
          <label htmlFor="name">Full Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            value={name}
          />
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <ul>
        {member.map(({ id, name, email }) => (
          <li key={id}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button onClick={() => handleRemove(id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
