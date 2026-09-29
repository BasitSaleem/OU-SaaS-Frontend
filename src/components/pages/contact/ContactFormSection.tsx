"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/common-components/Reveal";
import { CONTAINER } from "@/styles/sectionClasses";
import { CONTACT_TOPICS } from "@/constant/contactData";

const ContactFormSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState("Account & Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastPayload, setLastPayload] = useState("");
  const [copiedPayload, setCopiedPayload] = useState(false);

  const currentTopicObj = CONTACT_TOPICS.find((t) => t.value === selectedTopic) || CONTACT_TOPICS[0];
  const currentRecipient = currentTopicObj.recipient;

  // Listen for topic pick custom event or hash change
  useEffect(() => {
    const handlePickTopic = (e: CustomEvent<{ topic: string }>) => {
      if (e.detail?.topic) {
        setSelectedTopic(e.detail.topic);
      }
    };
    window.addEventListener("pickContactTopic", handlePickTopic as EventListener);
    return () => window.removeEventListener("pickContactTopic", handlePickTopic as EventListener);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Enter your name.";
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    if (message.trim().length < 10) {
      newErrors.message = "Write a short message.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const payload = `${message.trim()}\n\n${name.trim()}\n${email.trim()}${company.trim() ? `\n${company.trim()}` : ""}`;
    setLastPayload(payload);

    const mailtoHref = `mailto:${currentRecipient}?subject=${encodeURIComponent(`${selectedTopic} | ${name.trim()}`)}&body=${encodeURIComponent(payload)}`;

    try {
      window.location.href = mailtoHref;
    } catch {
      // Ignore
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setErrors({});
    setIsSubmitted(false);
  };

  const handleCopyPayload = async () => {
    try {
      await navigator.clipboard.writeText(lastPayload);
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 1800);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact-form" className="pb-[clamp(88px,11vw,140px)] scroll-mt-[100px]" aria-labelledby="cform-title">
      <div className={CONTAINER}>
        <Reveal mode="rise">
          <div className="grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-[clamp(28px,5vw,72px)] rounded-[28px] border border-[#e4e4e0] bg-white p-[clamp(28px,4.5vw,56px)] shadow-[0_1px_2px_rgba(11,11,11,0.04),0_30px_70px_-40px_rgba(11,11,11,0.25)] max-[1000px]:grid-cols-1">
            <div className="cform__head">
              <h2 id="cform-title" className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0b0b0b] [text-wrap:balance]">
                Send us a message
              </h2>
            </div>

            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {/* Topic Selector */}
                  <fieldset className="m-0 border-0 p-0">
                    <legend className="mb-2.5 p-0 text-[14px] font-medium text-[#3d3d3d]">Topic</legend>
                    <div className="flex flex-wrap gap-2">
                      {CONTACT_TOPICS.map((topic) => {
                        const isOn = selectedTopic === topic.value;
                        return (
                          <label key={topic.value} className="relative cursor-pointer">
                            <input
                              type="radio"
                              name="topic"
                              value={topic.value}
                              checked={isOn}
                              onChange={() => setSelectedTopic(topic.value)}
                              className="absolute h-px w-px opacity-0"
                            />
                            <span
                              className={`inline-flex h-[38px] items-center rounded-full border px-4 text-[14px] font-medium transition-all duration-180 ${
                                isOn
                                  ? "border-[#0b0b0b] bg-[#0b0b0b] text-[#f7f7f5] scale-[1.03]"
                                  : "border-[#e4e4e0] bg-[#f7f7f5] text-[#3d3d3d] hover:border-[#cfcfca] hover:text-[#0b0b0b]"
                              }`}
                            >
                              {topic.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                    <p className="mt-2.5 inline-flex items-center gap-1.5 text-[13px] text-[#6b6b6b]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Goes to <strong className="font-medium text-[#0b0b0b]">{currentRecipient}</strong>
                    </p>
                  </fieldset>

                  {/* Form Row: Name & Email */}
                  <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
                    <div className="flex flex-col gap-1.75">
                      <div className="flex items-baseline justify-between gap-2.5">
                        <label htmlFor="cf-name" className="text-[14px] font-medium text-[#3d3d3d]">Name</label>
                      </div>
                      <input
                        id="cf-name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`h-[52px] w-full rounded-[14px] border bg-[#f7f7f5] px-4 font-sans text-[16px] text-[#0b0b0b] transition-all duration-180 placeholder:text-[#9a9a97] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0b0b0b]/6 ${
                          errors.name ? "border-[#f95c5b] focus:border-[#f95c5b]" : "border-[#e4e4e0] hover:border-[#d4d4cf] focus:border-[#0b0b0b]"
                        }`}
                      />
                      {errors.name && <span className="text-[13px] text-[#c2413f]">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1.75">
                      <div className="flex items-baseline justify-between gap-2.5">
                        <label htmlFor="cf-email" className="text-[14px] font-medium text-[#3d3d3d]">Email</label>
                      </div>
                      <input
                        id="cf-email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`h-[52px] w-full rounded-[14px] border bg-[#f7f7f5] px-4 font-sans text-[16px] text-[#0b0b0b] transition-all duration-180 placeholder:text-[#9a9a97] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0b0b0b]/6 ${
                          errors.email ? "border-[#f95c5b] focus:border-[#f95c5b]" : "border-[#e4e4e0] hover:border-[#d4d4cf] focus:border-[#0b0b0b]"
                        }`}
                      />
                      {errors.email && <span className="text-[13px] text-[#c2413f]">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Company Field */}
                  <div className="flex flex-col gap-1.75">
                    <div className="flex items-baseline justify-between gap-2.5">
                      <label htmlFor="cf-company" className="text-[14px] font-medium text-[#3d3d3d]">Company</label>
                      <span className="text-[12.5px] text-[#9a9a97]">Optional</span>
                    </div>
                    <input
                      id="cf-company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Services Inc."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="h-[52px] w-full rounded-[14px] border border-[#e4e4e0] bg-[#f7f7f5] px-4 font-sans text-[16px] text-[#0b0b0b] transition-all duration-180 placeholder:text-[#9a9a97] hover:border-[#d4d4cf] focus:border-[#0b0b0b] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0b0b0b]/6"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1.75">
                    <div className="flex items-baseline justify-between gap-2.5">
                      <label htmlFor="cf-message" className="text-[14px] font-medium text-[#3d3d3d]">Message</label>
                      <span className="text-[12.5px] tabular-nums text-[#9a9a97]">{message.length}/1000</span>
                    </div>
                    <textarea
                      id="cf-message"
                      rows={5}
                      maxLength={1000}
                      placeholder="How can we help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`min-h-[140px] w-full resize-y rounded-[14px] border bg-[#f7f7f5] p-4 font-sans text-[16px] leading-[1.55] text-[#0b0b0b] transition-all duration-180 placeholder:text-[#9a9a97] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0b0b0b]/6 ${
                        errors.message ? "border-[#f95c5b] focus:border-[#f95c5b]" : "border-[#e4e4e0] hover:border-[#d4d4cf] focus:border-[#0b0b0b]"
                      }`}
                    />
                    {errors.message && <span className="text-[13px] text-[#c2413f]">{errors.message}</span>}
                  </div>

                  {/* Submit Action */}
                  <div className="mt-1 flex justify-end max-[760px]:justify-stretch">
                    <button
                      type="submit"
                      className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#0b0b0b] px-[28px] text-[16px] font-semibold text-[#f7f7f5] transition-all duration-180 hover:bg-[#1a1a1a] hover:shadow-[0_2px_4px_rgba(11,11,11,0.04),0_12px_32px_-8px_rgba(11,11,11,0.1)] active:scale-[0.97] max-[760px]:w-full"
                    >
                      <span>Send message</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-400 ease-out group-hover:translate-x-0.75 group-hover:-translate-y-0.75 group-hover:-rotate-6">
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Screen */
                <div className="animate-[done-in_600ms_var(--ease-out)_both] flex flex-col items-start gap-2.5 py-2">
                  <span className="mb-1.5 grid h-[56px] w-[56px] place-items-center rounded-full bg-[#e5fff9] text-[#09786a] animate-[check-pop_700ms_cubic-bezier(0.34,1.56,0.64,1)_150ms_both]">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#0b0b0b]">Almost there</h3>
                  <p className="text-[15.5px] text-[#6b6b6b]">
                    We opened your email app with your message addressed to <strong className="font-medium text-[#0b0b0b]">{currentRecipient}</strong>.
                  </p>
                  <p className="text-[14px] text-[#6b6b6b]">
                    Press send there to finish. If nothing opened, copy your message and email it to <strong className="font-medium text-[#0b0b0b]">{currentRecipient}</strong>.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={handleCopyPayload}
                      className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full border border-[#e4e4e0] bg-[#f7f7f5] px-5 text-[14.5px] font-semibold text-[#0b0b0b] transition-colors duration-180 hover:border-[#0b0b0b] hover:bg-white"
                    >
                      <span>{copiedPayload ? "Copied" : "Copy message"}</span>
                      {copiedPayload ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#0b0b0b] px-5 text-[14.5px] font-semibold text-[#f7f7f5] transition-colors duration-180 hover:bg-[#1a1a1a]"
                    >
                      <span>Write another message</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactFormSection;
