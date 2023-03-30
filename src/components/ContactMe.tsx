import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

type Inputs = {
  name: String;
  email: String;
  subject: String;
  message: String;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pietro.sommaruga2001@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col items-center justify-end md:justify-center text-center xl:flex-row max-w-7xl  space-y-7 mx-auto lg:space-x-8">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contacts
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl md:text-3xl font-semibold text-center text-light-primary dark:text-dark-primary">
          I have got what you need.{" "}
          <span className="block md:inline xl:block underline decoration-[#F7AB0A]/50 mx-2">
            Lets Talk.
          </span>
        </h4>
      </div>

      <div className="space-y-2 md:space-y-5">
        <div className="flex items-center space-x-5">
          <PhoneIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
          <p className="text-md md:text-xl underline decoration-[#F7AB0A]/50 text-light-primary dark:text-dark-primary">
            +39 36639900290
          </p>
        </div>

        <div className="flex items-center space-x-5">
          <MapPinIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
          <p className="text-md md:text-xl underline decoration-[#F7AB0A]/50 text-light-primary dark:text-dark-primary">
            Milano, Italia
          </p>
        </div>

        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="h-5 w-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
          <p className="text-md md:text-xl underline decoration-[#F7AB0A]/50 text-light-primary dark:text-dark-primary">
            pietro.sommaruga2001@gmail.com
          </p>
        </div>

        <div className="flex items-center space-x-2 max-h-[24px]">
          <SocialIcon
            url="https://www.linkedin.com/in/pietro-sommaruga-187127236/"
            fgColor={"#F7AB0A"}
            bgColor={"transparent"}
            className="animate-pulse max-w-[40px] md:max-w-none ml-[-12px]"
          />
          <p className="text-md md:text-xl underline decoration-[#F7AB0A]/50 text-light-primary dark:text-dark-primary">
            Pietro Sommaruga
          </p>
        </div>

        <div className="flex items-center space-x-2 max-h-[24px]">
          <SocialIcon
            url="https://github.com/PietroSommaruga"
            fgColor={"#F7AB0A"}
            bgColor={"transparent"}
            className="animate-pulse max-w-[40px] md:max-w-none ml-[-12px]"
          />
          <p className="text-md md:text-xl underline decoration-[#F7AB0A]/50 text-light-primary dark:text-dark-primary">
            /PietroSommaruga
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto max-w-full pb-5"
      >
        <div className="flex space-x-2 justify-center">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput w-[44%] h-12 md:h-fit rounded-md "
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput w-[44%] h-12 md:h-fit rounded-md"
            type="email"
          />
        </div>

        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput w-[90%] h-12 md:h-fit mx-auto rounded-md"
          type="text"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput w-[90%] mx-auto rounded-md"
        />

        <button
          type="submit"
          className="bg-[#F7AB0A] md:py-5 rounded-md text-black font-bold text-lg w-[90%] h-12 md:h-fit mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
