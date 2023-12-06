import { FormEvent } from "react";
const Application = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <>
      <h1>Job Application Form</h1>
      <h1>Section 2</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job-Location</label>
          <select id="job-location">
            <option value="US">America</option>
            <option value="IN">India</option>
            <option value="UK">UK</option>
            <option value="SA">South Africa</option>
            <option value="AUS">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkbox" id="terms">
            I agree to the terms and conditions !!!
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
export default Application;
