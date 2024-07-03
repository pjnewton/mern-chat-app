import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-centerminw-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-heading backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semi-bold text-center text-gray-300'>
          Sign Up <span className='text-blue-400'> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='johndoe'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
            />
          </div>

          <GenderCheckBox />

          <a
            href='#'
            className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block'
          >
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 hover:bg-blue-400 hover:border-blue-400 hover:text-slate-100'>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// STARTER CODE FOR THIS PAGE
// import GenderCheckBox from './GenderCheckBox';

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-centerminw-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-heading backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semi-bold text-center text-gray-300'>
//           Sign Up <span className='text-blue-400'> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input
//               type='text'
//               placeholder='John Doe'
//               className='w-full input input-bordered h-10'
//             />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input
//               type='text'
//               placeholder='johndoe'
//               className='w-full input input-bordered h-10'
//             />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               type='password'
//               placeholder='Enter Password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input
//               type='password'
//               placeholder='Confirm Password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           <GenderCheckBox />

//           <a
//             href='#'
//             className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block'
//           >
//             Already have an account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2 hover:bg-blue-400 hover:border-blue-400 hover:text-slate-100'>
//               SignUp
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
