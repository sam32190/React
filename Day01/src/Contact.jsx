function Contact() {
  return (
    <>
      <h1> Welcome to contact us page </h1>
      <p>
        Thank you for your interest in Wipro’s services. Please provide the
        following information about your business needs to help us serve you
        better. This information will enable us to route your request to the
        appropriate person. You should receive a response within 48 hours.
      </p>

      <form>
        <label htmlFor="firstname"> Enter your name </label>
        <br />
        <input type="text" placeholder="First Name" id="firstname" />

        <br />
        <br />

        <label htmlFor="email"> Enter your email</label>
        <br />
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Email Address"
        />
        <br />
        <br />

        <label htmlFor="organization"> Enter your Organization </label>
        <br />
        <input type="text" id="organization" placeholder="Organization Name" />

        <br />
        <br />

        <label htmlFor="country">Choose your country</label>

        <br />

        <select name="Country" id="country">
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Bangladesh">Bangladesh</option>
        </select>
      </form>
    </>
  );
}

export default Contact;
