
import {useDispatch, useSelector} from 'react-redux'
import { setName, setEmail, setPassword, setConfirmPassword } from '../features/auth/signUpSlice';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const { name, email, password, confirmPassword } = useSelector((state) => state.signUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#221034] to-[#00717C]">
      <div className="py-8 px-16 rounded-lg shadow-lg bg-white">
      <h2 className="mb-2 text-3xl font-bold text-[#221034] text-center">SnapStash</h2>
        <p className="mb-6  text-[#221034] text-center">Please Sign Up </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block mb- text-sm font-medium text-[#221034]">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00717C]"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-[#221034]">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
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
              value={confirmPassword}
              onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
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
    </div>
  );
};

export default SignUpPage;