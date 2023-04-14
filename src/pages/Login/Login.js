import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authProvider } from "../../components/Contex/ContextProvider";
import useToken from "../../components/Hooks/useToken";

const Login = () => {
  const {signIn,LoginWithGoogle } = useContext(authProvider);

  // new this react-hooks-form (❁´◡`❁)
  const { register, handleSubmit, formState: {errors}  } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token]= useToken(loginUserEmail)
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  if (token) {
    navigate(from, {replace: true});
  }
  const handelLogin = data => {
    signIn(data.email, data.password).then(result => {
      setLoginError('')
      const user = result.uid;
      setLoginUserEmail(data.email);
    }).catch(error =>{
      console.log(error.name, error.message);
      setLoginError(error)
    })

  }
  const loginGoogle = () =>{
    LoginWithGoogle()
    .then(result=>{
      navigate(from , {replace: true})
     const user = result.uid;
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="flex h-[800px] justify-center items-center">
      <div className="w-96">
        <h1 className="text-xl text-center">Login</h1>
        <form className="" onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email",{required: "Email is Required"})}
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password",{required: "Password is Required", minLength: {value:6, message:"password kength must be 6 or longer"}})}
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            <label className="label">
              <span className="label-text-alt">Forget Password</span>
            </label>
          </div>
          <input className="btn btn-accent w-full" value="Login" type="submit" />
          <div>
            {loginError && <p className="text-red-600">{loginError.message}</p>}
          </div>
        </form>
        <p>New to Doctor portal <Link className="text-primary" to="/register">Register Now</Link></p>
        <div className="divider">OR</div>
        <button onClick={loginGoogle} className="btn btn-outline uppercase w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
