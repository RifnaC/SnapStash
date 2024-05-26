import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/signUpSlice';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPswd, setConfirmPswd] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.status);
  const userError = useSelector((state) => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password, confirmPswd }))
      .then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          navigate('/login');
        } else {
          console.error(result.error.message);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#221034] to-[#00717C]">
      <div className="py-8 px-16 rounded-lg shadow-lg bg-white">
        <h2 className="mb-2 text-3xl font-bold text-[#221034] text-center">SnapStash</h2>
        <p className="mb-6  text-[#221034] text-center">Please Sign Up </p>
        {userStatus === 'failed' && <p className="text-danger">{userError}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block mb- text-sm font-medium text-[#221034]">
              Name
            </label>


            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00717C]"
              required />

          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-[#221034]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00717C]"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-[#221034]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00717C]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-[#221034]">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirm password"
              value={confirmPswd}
              onChange={(e) => setConfirmPswd(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00717C]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#00717C] rounded-md hover:bg-[#005a63] transition-colors duration-300 mb-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-[#221034]">
          Already have an account?{' '}
          <Link to={"/login"} className="font-medium text-[#00717C] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div >

  );
}

export default SignUpPage;
