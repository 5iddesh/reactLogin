export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("succesfull");
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let userData = { name, email, password };

    e.target.name.value = e.target.email.value = e.target.password.value = "";
    alert("registration successfull!");
    console.log(userData);
    // fetch("",{
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     "Content-type": "application/json",
    //     "Accept": "application/json"
    //   }
    // })
  };
  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <h1>Welcome to Jammy</h1>
      <label htmlFor="name">
        Full Name
        <input name="name" id="name" placeholder="John Doe" required />
      </label>
      <label htmlFor="email">
        Email
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Enter your Email here"
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </label>
      <div className="btn-parent">
        <button type="submit" className="submit-btn">
          Create account
        </button>
      </div>
    </form>
  );
}
