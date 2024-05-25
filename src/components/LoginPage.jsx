import  { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#221034] to-[#00717C]">
      <div className="py-8 px-16 rounded-lg shadow-lg bg-white">
        <h2 className="mb-2 text-3xl font-bold text-[#221034] text-center">SnapStash</h2>
        <p className="mb-6  text-[#221034] text-center">Please Login </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#221034]">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00717C]"
              placeholder='Enter Your Email'
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#221034]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00717C]"
              placeholder='Enter Your Password'
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#00717C] rounded-md hover:bg-[#005a63] transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-[#221034]">
          Don't have an account?{' '}
          <Link to={"/signup"} className="font-medium text-[#00717C] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;