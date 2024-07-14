import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./contactFormcode";
import { BACKEND_URL } from "../config";
import { cn } from "../utils/cn";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function SignupFormDemo() {
  const navigate = useNavigate();
  
  const [projectDet, setDet] = useState({
    firstName: "",
    lastName: "",
    email: "",
    details: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/contactForproject/projectDet`, projectDet);
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      setSuccessMessage("Form submitted successfully!");
      setErrorMessage(""); // Clear any previous error message
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redirect after 2 seconds
      console.log("success");
    } catch (e) {
      setErrorMessage("Please provide a unique email address.");
      console.log("Error posting: " + e);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input backdrop-blur-xl bg-black bg-opacity-70">
        <h2 className="font-bold text-xl text-white">
          Welcome !!
        </h2>
        <p className="text-sm max-w-sm mt-2 text-gray-300">
          Share your email here and I will reach out to you.
        </p>

        {successMessage && (
          <div className="mb-4 text-green-500 font-semibold">
            {successMessage}
          </div>
        )}
        
        {errorMessage && (
          <div className="mb-4 text-red-500 font-semibold">
            {errorMessage}
          </div>
        )}

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={projectDet.firstName}
                onChange={(e) => setDet({ ...projectDet, firstName: e.target.value })}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={projectDet.lastName}
                onChange={(e) => setDet({ ...projectDet, lastName: e.target.value })}
              />
            </LabelInputContainer>
          </div>
        
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="email@gmail.com"
              type="email"
              value={projectDet.email}
              onChange={(e) => setDet({ ...projectDet, email: e.target.value })}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="details">Project Details</Label>
            <Input
              id="details"
              placeholder="Enter details"
              type="text"
              value={projectDet.details}
              onChange={(e) => setDet({ ...projectDet, details: e.target.value })}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
            type="submit"
          >
            Submit
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
