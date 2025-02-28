function Registration() {
  return (
    <>
      <form>
        <label htmlFor="firstname">Enter your First Name </label>
        <br />
        <input type="text" id="firstname" />
        <br />
        <br />
        <label htmlFor="lastname">Enter your Last Name </label>
        <br />
        <input type="text" id="lastname" />
        <br />
        <br />
        <label htmlFor="gender">Enter your gender </label>
        <br />
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <br />
        <br />
        <label htmlFor="password">Enter your password</label>
        <br />
        <input type="password" id="password" />
        <br />
        <br />
        <label htmlFor="city">Choose your city</label>
        <br />
        <select name="City" id="city">
          <option value="Delhi">Delhi</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Mumbai">Mumbai</option>
        </select>
        <br />
        <br />
        <label htmlFor="country">Choose your country</label>
        <br />
        <select name="Country" id="country">
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Bangladesh">Bangladesh</option>
        </select>
        <br />
        <br />
        <button onClick={() => alert("Registration done successfully")}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Registration;
