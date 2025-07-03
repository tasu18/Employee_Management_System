import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#1C1C1C] text-white font-sans">
      <div className="border border-[#4CAF50] rounded-2xl p-8 w-[340px] shadow-lg bg-[#2E2E2E]">
        <h2 className="text-center text-2xl font-semibold text-[#4CAF50] mb-6">Employee Login</h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center space-y-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent border border-[#4CAF50] text-white placeholder-gray-400 py-2 px-4 rounded-full outline-none focus:ring-2 focus:ring-[#4CAF50]"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-transparent border border-[#4CAF50] text-white placeholder-gray-400 py-2 px-4 rounded-full outline-none focus:ring-2 focus:ring-[#4CAF50]"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full bg-[#4CAF50] hover:bg-[#43a047] transition text-white py-2 px-4 rounded-full font-medium"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
