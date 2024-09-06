"use client";
import { useState } from "react";
import Image from "next/image";
import { useToast } from "@/components/hooks/use-toast";

export default function Contact() {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isloading, setIsloading] = useState(false);
  const { toast } = useToast();

  let name, value;
  const postUserData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...UserData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setIsloading(true);
      event.preventDefault();
      const { name, email, subject, message } = UserData;

      if (name && email && message) {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        });

        if (res.ok) {
          setUserData({ name: "", email: "", subject: "", message: "" });
          toast({
            title: "Success",
            description: "Message sent successfully",
            duration: 3000,
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Message not sent : Please try again",
            duration: 3000,
          });
        }
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong",
        duration: 3000,
      });
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section id="contact" className="py-10 px-6 md:px-12">
      <h2 className="text-center text-3xl font-bold mt-5">Contact Us</h2>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <Image
          src="/assets/contact.svg"
          width={500}
          height={300}
          alt="Contact to Ashutosh Gaurav"
          className="hidden md:block"
        />

        <form onSubmit={submitData} className="w-full max-w-lg space-y-2">
          <input
            required
            type="text"
            name="name"
            placeholder="Enter Your Name*"
            value={UserData.name}
            onChange={postUserData}
            className="w-full p-3 text-black bg-blue-100 rounded-lg outline-none"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Your Email*"
            value={UserData.email}
            onChange={postUserData}
            className="w-full p-3 text-black bg-blue-100 rounded-lg outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject..."
            value={UserData.subject}
            onChange={postUserData}
            className="w-full p-3 text-black bg-blue-100 rounded-lg outline-none"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Write Message Here*..."
            value={UserData.message}
            onChange={postUserData}
            className="w-full p-3 text-black bg-blue-100 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
            disabled={isloading}
          >
            {isloading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
