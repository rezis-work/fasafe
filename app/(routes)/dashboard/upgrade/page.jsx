"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Upgrade = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Currently Our Expense tracker is For Free to use
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Feel free to give Us your Email and be the first outline To get Know
            latest features as well as Pricing Plan Also for donation U'll
            recive an Account number for support
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl flex justify-center">
          <button
            type="submit"
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
          >
            <span className="text-sm font-medium"> Get An Email Soon </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
