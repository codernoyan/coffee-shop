import { AuthContext } from "contexts/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loading from "ui/Loading";

export default function Register() {
  // get auth information from via context api
  const { createUser, updateUserProfile, googleLogin, loading, setLoading } = useContext(AuthContext);
  // contrlled form using react hook form
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  // handle register form
  const handleRegister = (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    // create a user with firebase
    createUser(email, password)
      .then((result) => {
        setLoading(true);
        const user = result.user;
        console.log(user);
        // update profile
        updateUserProfile(name)
          .then(() => {
            setLoading(false);
            navigate('/');
            toast.success('Register Successfull');
          })
          .catch((err) => {
            console.error(err);
            toast.error(err.message);
          })
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
  };

  const handleGoogleRegistration = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Register with Google successful');
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        navigate('/register');
        console.error(error);
        toast.error(error.message);
      })
  };

  if (loading) {
    return <Loading />
  }

  return (
    <section className="mt-4 w-full md:w-1/2 mx-auto">
      <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleSubmit(handleRegister)} className="w-full max-w-md">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize">Register</h1>
          {/* Name */}
          <div className="relative flex items-center mt-8">
            <input {...register("name", {
              required: "Name is required"
            })}
              type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-4 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" />
          </div>
          {errors.name && <p className="mt-1 text-red-500 font-semibold">{errors.name?.message}</p>}
          {/* email */}
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input {...register("email", {
              required: "Email is required"
            })}
              type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
          </div>
          {errors.email && <p className="mt-1 text-red-500 font-semibold">{errors.email?.message}</p>}
          {/* password */}
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input {...register("password", {
              required: "Password is Required",
              minLength: { value: 6, message: "Password must be 6 characters or longer" }
            })}
              type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
          </div>
          {errors.password && <p className="mt-1 text-red-500 font-semibold">{errors.password?.message}</p>}
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-700 rounded-md hover:bg-slate-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Register
            </button>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>
          </div>
        </form>
        <div>
          <button onClick={handleGoogleRegistration} className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 w-full">
            <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
              <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
              <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
              <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
              <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
            </svg>
            <span className="mx-2">Register with Google</span>
          </button>
          <div className="mt-6 text-center ">
            <span>Already have an account?</span>
            <Link to="/login" className="text-sm underline text-slate-700 hover:underline dark:text-slate-700 font-medium">
              Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}