"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/common-components/Reveal";
import RecaptchaField from "@/components/common-components/RecaptchaField";
import { submitLeadAction } from "@/actions/submitLead";
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
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaResetKey, setRecaptchaResetKey] = useState(0);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;
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
    if (!recaptchaToken) {
      setSubmitError("Please complete the reCAPTCHA challenge.");
      return;
    }

    setSubmitError("");
    setIsSending(true);
    try {
      const result = await submitLeadAction(
        { name: name.trim(), email: email.trim(), company: company.trim(), message: message.trim(), topic: selectedTopic },
        recaptchaToken
      );
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      // A reCAPTCHA token can only be verified once, so the visitor needs a fresh one for any retry.
      setRecaptchaToken(null);
      setRecaptchaResetKey((k) => k + 1);
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setErrors({});
    setSubmitError("");
    setIsSubmitted(false);
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

                  <RecaptchaField onChange={setRecaptchaToken} resetKey={recaptchaResetKey} />

                  {submitError && (
                    <p role="alert" className="text-[14px] text-[#c2413f]">
                      {submitError}
                    </p>
                  )}

                  {/* Submit Action */}
                  <div className="mt-1 flex justify-end max-[760px]:justify-stretch">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#0b0b0b] px-[28px] text-[16px] font-semibold text-[#f7f7f5] transition-all duration-180 hover:bg-[#1a1a1a] hover:shadow-[0_2px_4px_rgba(11,11,11,0.04),0_12px_32px_-8px_rgba(11,11,11,0.1)] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 max-[760px]:w-full"
                    >
                      <span>{isSending ? "Sending…" : "Send message"}</span>
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
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#0b0b0b]">Message sent</h3>
                  <p className="text-[15.5px] text-[#6b6b6b]">
                    Thanks, {name.trim().split(/\s+/)[0]}. We&apos;ve received your message about{" "}
                    <strong className="font-medium text-[#0b0b0b]">{selectedTopic}</strong>.
                  </p>
                  <p className="text-[14px] text-[#6b6b6b]">
                    Our team will reply to <strong className="font-medium text-[#0b0b0b]">{email.trim()}</strong> soon.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
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
