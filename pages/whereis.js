import Reac from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

export default function Whereis() {
  // route pages
  const router = useRouter();

  // schema from form
  const schema = yup
    .object({
      email: yup.string().required().email(),
      datetime: yup.string().required(),
      location: yup.string().required().max(200),
    })
    .required();

  // for registering/storing valueus from form and handling submit
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // handle submit, log to console on submit
  const onSubmit = async (data) => {
	try {
        const res = await fetch(
            "http://api.geonames.org/searchJSON?q="+ String(data.location)+"&maxRows=10&username=dimagi"
        );
        const geodata = await res.json();
        console.log(geodata);
    } catch (err) {
        console.log(err);
    }

    alert("You have submited your new location!");
    router.push("/allEmployees");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="whereis_main">
        <h1>Submit Your Location</h1>

        <div className="box">
          <h6>Email</h6>
          <input
            placeholder="Enter your email"
            id="email"
            type="text"
            name="email"
            {...register("email")}
          />
          <h6>{errors.email?.message}</h6>
        </div>

        <div className="box">
          <h6>Date and Time</h6>
          <input
            placeholder="YYYY/MM/DD"
            id="datetime"
            type="datetime-local"
            name="datetime"
            {...register("datetime")}
          />
          <h6>{errors.datetime?.message}</h6>
        </div>

        <div className="box">
          <h6>Location</h6>
          <input
            placeholder="Enter your location"
            id="location"
            type="text"
            name="location"
            {...register("location")}
          />
          <h6>{errors.location?.message}</h6>
        </div>

        <button className="button_primary" type="submit">
          Submit
        </button>

        <div />

        <p>
          View all employees <a href="/allEmployees">VIEW</a>
        </p>
      </div>
    </form>
  );
}
