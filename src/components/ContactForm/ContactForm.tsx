import "react-toastify/dist/ReactToastify.css";
import { useForm } from "@/hooks/useForm";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "./ContactForm.css";

export const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form: any = useRef();
  const {
    onChange,
    user_name,
    user_tel,
    user_email,
    message,
    resetForm,
    isValidEmail,
  } = useForm({
    user_name: "",
    user_email: "",
    user_tel: "",
    message: "",
  });
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (user_name.trim().length <= 2 || !isValidEmail(user_email)) {
      return toast.warning(
        "You must fill in the email and name fields correctly"
      );
    }
    setLoading(true);
    emailjs
      .sendForm(
        "service_il7e4f6",
        "template_i929s0s",
        form.current as any,
        "nszf59HRKL-tLfLlD"
      )
      .then(
        () => {
          setLoading(false);

          toast.success("👌 Message sent! I will respond as soon as possible");
        },
        () => {
          toast.error(
            "😲 Oops! The message could not be sent, please contact us at frandepaulo23@gmail.com."
          );
        }
      );
    resetForm();
  };
  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} />

      <form ref={form} onSubmit={sendEmail}>
        {/* <label htmlFor="outlined-basic"></label> */}
        <div>
          <input
            className="input-field w-full p-2 mb-4"
            type="text"
            name="user_name"
            id="outlined-basic"
            placeholder="Name *"
            value={user_name}
            onChange={onChange}
            style={{
              borderBottom:
                user_name.trim().length <= 2
                  ? "1px solid red"
                  : "1px solid rgb(10, 180, 180)",
            }}
          />
        </div>
        <div className="flex gap-4">
          <input
            className="input-field p-2 w-full"
            type="email"
            placeholder="Email *"
            name="user_email"
            value={user_email}
            onChange={onChange}
            style={{
              borderBottom: !isValidEmail(user_email)
                ? "1px solid red"
                : "1px solid rgb(10, 180, 180)",
            }}
          />
          <input
            className="input-field p-2 w-full"
            type="number"
            placeholder="Tel (optional)"
            name="user_tel"
            value={user_tel}
            onChange={onChange}
          />
        </div>

        <textarea
          className="input-text w-full p-4 mt-4 h-52"
          placeholder="Share your thoughts..."
          value={message}
          onChange={onChange}
          name="message"
          id="custom-input"
        />

        {loading ? (
          <button className="button text-gray-100" disabled>
            Sending...
          </button>
        ) : (
          <button className="button text-gray-100" type="submit">
            Send Message
          </button>
        )}
      </form>
    </div>
  );
};
