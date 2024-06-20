'use client'
import Button from "@/app/components/Button/Button";
import InputField from "@/app/components/InputField/InputField";
import { register } from "module";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  async function submitForm(data: FormData) {
    await fetch('/api/contact-form-submission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <div className="text-tinyBlack-base">
      <h1 className="text-3xl text-center my-4 text-white">
        Contact
        <span className="text-tinyOrange-base pl-2">Tiny Sun</span>
      </h1>
      <form
      onSubmit={handleSubmit(submitForm)}
        className="
      flex flex-col 
      items-center 
      w-[95%] max-w-[50rem] 
      m-auto 
      border-2 border-white 
      rounded-lg 
      p-2"
      >
        <InputField labelName="Name" id="name" register={register}/>
        <InputField labelName="Email*" id="email" required register={register}/>
        <textarea
          required
          placeholder="Your Message..."
          className="
                w-[90%] mt-2 rounded-lg p-2 h-[13rem] 
                text-tinyBlack-base
                mb-2
                focus:outline-tinyPink-dark "
                {...register('message')}
        />
        <Button type="tertiary" >
          Submit
        </Button>
      </form>
    </div>
  );
}
