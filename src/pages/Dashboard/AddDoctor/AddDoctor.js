import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { data: appointmentSpecialty = [], isLoading } = useQuery({
    queryKey: ["appointmentSpecialty"],
    queryFn: () =>
      fetch("https://doctors-portal-server-alaminpk360.vercel.app/appointmentSpecialty").then((res) =>
        res.json()
      ),
  });

  // console.log(appointmentSpecialty);
  const handeleAddDoctor = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctorsInfo = {
            name: data.name,
            email: data.email,
            Img_url: imgData.data.url,
          };
          fetch("https://doctors-portal-server-alaminpk360.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctorsInfo),
          })
            .then((res) => res.json())
            .then((datas) => {
              if (datas.acknowledged) {
                toast.success(`${data.name} is added successfully`);
                navigate("/dashboard/managedoctors");
              }
              console.log(datas)
            })
            .catch(error => console.log(error.message))
        }
      });
  };
  return (
    <div className="w-96 p-9">
      <h1 className="text-4xl">Add Doctors</h1>

      <form className="" onSubmit={handleSubmit(handeleAddDoctor)}>
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
        <div>
          <label className="label">
            <span className="label-text">specialty</span>
          </label>
          <select className="select select-accent w-full max-w-xs">
            {appointmentSpecialty.map((data) => (
              <option key={data._id} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">image</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: true,
            })}
            id=""
          />
        </div>
        <input
          className="btn btn-accent w-full mt-5"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
