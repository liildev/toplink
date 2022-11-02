import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { reset } from "../http";
import { toast } from "react-hot-toast";
import Input from "../components/UI/Input";
import Loader from "../components/UI/Loader";

export default function Reset() {
  const { id, token } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState({ psw: "", confirmpsw: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password.psw === "" || password.confirmpsw === "") {
        return toast.error("Please fill in fields", {
          duration: 3000,
          position: "bottom-center",
        });
      }

      if (password.psw === password.confirmpsw) {
        setLoading(true)
        let data = await reset(password.confirmpsw, id, token);

        if (data) {
          toast.success(data, {
            duration: 5000,
            position: "top-center",
          });
          navigate("/sign-in");
        }
      } else {
        return toast.error("Password not match", {
          duration: 5000,
          position: "bottom-center",
        });
      }
    } catch (e) {
      toast.error(e.response.data.message, {
        duration: 3000,
        position: "bottom-center",
      });
    } finally {
      setLoading(false)
    }
  };

  return (
    <section className="w-full h-[70vh] pt-32  flex items-center justify-center">
      <form className="flex flex-col">
        <h1 className="text-4xl font-body text-violet-800 mb-10">
          Parolni o'zgartirish
        </h1>

        <Input
          type="password"
          placeholder="Password"
          title="Password"
          onChange={(e) => setPassword({ ...password, psw: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Confirm password"
          title="Confirdm password"
          onChange={(e) =>
            setPassword({ ...password, confirmpsw: e.target.value })
          }
        />

        <button
          disabled={loading}
          className="w-full bg-violet-800 text-white px-8 py-3 rounded-xl"
          onClick={handleSubmit}
        >
          {loading ? <Loader /> : "Tasdiqlash"}
        </button>

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm">Accountingiz mavjudmi?</p>

          <Link
            to={"/sign-in"}
            className="text-violet-800 mr-5 font-medium hover:underline"
          >
            Kirish
          </Link>
        </div>
      </form>
    </section>
  );
}
