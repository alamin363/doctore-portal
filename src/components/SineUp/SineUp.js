import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../Contex/ContextProvider";
import useToken from "../Hooks/useToken";

const SineUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updataUser, LoginWithGoogle } = useContext(authProvider);
  const [singUpError, setSingUperror] = useState("");
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const singUpHandaler = (data) => {
    setSingUperror("")
    createUser(data.email, data.password)
      .then((result) => {
        const user = result?.user;
        toast.success("user create successfully");
        const userInfo = {
          displayName: data?.name || "undefined",
        };
        updataUser(userInfo)
          .then(() => {
            saveUser(data?.name, data?.email);
          })
          .catch((err) => {console.log(err)});
      })
      .catch((error) => {
        console.log(error) 
        setSingUperror(error.message)
      });
  };

  const loginGoogle = () => {
    LoginWithGoogle()
      .then((result) => {
        const user = result.uid;
      })
      .catch((error) => console.log(error));
  };
  const saveUser = async (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-alaminpk360.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreateUserEmail(email);
      });
  };

  return (
    <div className="flex h-[800px] justify-center items-center">
      <div className="w-96">
        <h1 className="text-xl text-center">Register Now</h1>
        <form className="" onSubmit={handleSubmit(singUpHandaler)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: true,
              })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: { value: 6, message: "You are must be 6 carecters" },
                pattern: {
                  value: /^(?=.*[A-Za-z])/,
                  message: "Minimum eight characters, at least one letter",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-5"
            value="sign Up"
            type="submit"
          />
          <div>{singUpError && <p>{singUpError.message}</p>}</div>
        </form>
        <p>
          already have a account
          <Link className="text-primary" to="/login">
            Login Now
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={loginGoogle}
          className="btn btn-outline uppercase w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SineUp;
