import React from 'react'

import { useState } from 'react';

const ReserveTable = () => {
  // const navigate = useNavigate();

  const [user, setUser] = useState({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      cpassword: "",
  }); 

  let name, value;

  const handleInput = (e) => {
      // console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value})
  }

  const submitHandler = async (event) => {
      event.preventDefault();
      console.log(user);

      const {name, email, phone, date, time, cpassword} = user;

     
  }

return (
  <>
    <section>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-slate-400 p-5 rounded-2xl w-fit flex flex-col gap-8">
          <h2 className="text-white text-3xl font-extrabold font-sans">
            Sign Up
          </h2>
          <form method="POST" className="flex flex-col gap-4">
            <div className="flex gap-5 text-xl">
              <label htmlFor="name">Name</label>
              <input
                className="px-3 py-1 rounded-lg"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInput}
                placeholder="Your Name"
              />
            </div>

            <div className="flex gap-5 text-xl">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-1 rounded-lg"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                placeholder="Your Email"
              />
            </div>

            <div className="flex gap-5 text-xl">
              <label htmlFor="phone">Phone</label>
              <input
                className="px-3 py-1 rounded-lg"
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
                placeholder="Your Phone Number"
              />
            </div>

            <div className="flex gap-5 text-xl">
              <label htmlFor="work">Date</label>
              <input
                className="px-3 py-1 rounded-lg"
                type="date"
                name="date"
                id="date"
                autoComplete="off"
                value={user.date}
                onChange={handleInput}
                // placeholder="Your Profession"
              />
            </div>

            <div className="flex gap-5 text-xl">
              <label htmlFor="password">Time</label>
              <input
                className="px-3 py-1 rounded-lg"
                type="time"
                name="time"
                id="time"
                autoComplete="off"
                value={user.time}
                onChange={handleInput}
                placeholder="Enter your Time"
              />
            </div>

            <div className="flex gap-5 text-xl">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                className="px-3 py-1 rounded-lg"
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInput}
                placeholder="Confirm your Password"
              />
            </div>

            {/* <button className="bg-blue-500 w-fit py-2 px-5 rounded-md flex self-center mt-4">Submit</button> */}

            <div className="bg-blue-500 w-fit py-2 px-5 rounded-md flex self-center mt-4">
              <input
                type="submit"
                name="signup"
                id="signup"
                value="Register"
                onClick={submitHandler}
              />
            </div>

            

          </form>
        </div>
      </div>
    </section>
  </>
);
}

export default ReserveTable