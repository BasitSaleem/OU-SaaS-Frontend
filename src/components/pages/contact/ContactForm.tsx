"use client";

import { useRef } from "react";
import InputField from "@/components/inputField/InputField";
import SelectField from "@/components/inputField/SelectField";
import TextArea from "@/components/inputField/TextArea";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CONTACT_TOPIC_OPTIONS } from "@/constant/contactData";

const ContactForm: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(cardRef, 240);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const first = String(data.get("firstName") ?? "").trim();
    const last = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`${topic} - ${first} ${last}`);
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:accounts@ownersuniverse.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      ref={cardRef}
      style={reveal.style}
      className={`${reveal.className} relative overflow-hidden rounded-3xl border border-g200 bg-white p-[clamp(28px,3.5vw,44px)] before:absolute before:top-[-40%] before:right-[-20%] before:h-[340px] before:w-[340px] before:rounded-full before:bg-[radial-gradient(circle,rgba(121,92,245,.06)_0%,transparent_70%)] before:content-[''] before:pointer-events-none`}
    >
      <form onSubmit={handleSubmit} className="relative z-[1]">
        <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
          <InputField id="cf-first" name="firstName" label="First name" placeholder="Your first name" required />
          <InputField id="cf-last" name="lastName" label="Last name" placeholder="Your last name" required />
        </div>
        <InputField id="cf-email" name="email" label="Email address" type="email" placeholder="you@example.com" required />
        <SelectField id="cf-topic" name="topic" label="What can we help with?" options={CONTACT_TOPIC_OPTIONS} />
        <TextArea id="cf-message" name="message" label="Message" placeholder="Tell us what's going on..." required />

        <button
          type="submit"
          className="group mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-purple py-[15px] font-heading text-[15px] font-semibold text-white transition-[background,box-shadow,transform] duration-200 ease-[var(--ease)] active:scale-[0.98] hover:bg-purple-d hover:shadow-[0_6px_20px_var(--purple-glow)]"
        >
          Send Message
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-200 ease-[var(--ease)] group-hover:translate-x-[3px]"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
        <p className="relative z-[1] mt-3 text-center text-xs text-g400">
          We typically respond within 24 hours during business hours.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
