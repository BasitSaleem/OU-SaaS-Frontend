export interface ContactStep {
  step: string;
  title: string;
  desc: string;
}

export const CONTACT_STEPS_TITLE = "What happens after you reach out.";
export const CONTACT_STEPS_SUB =
  "No ticket queues, no automated loops — just a straight line to the right person.";

export const CONTACT_STEPS: ContactStep[] = [
  {
    step: "01",
    title: "We route your message",
    desc: "Your note goes straight to the team that owns it — account, Pulse, or Inventory — no generic inbox.",
  },
  {
    step: "02",
    title: "A real person responds",
    desc: "Within 24 hours during business hours, someone who actually knows the product replies.",
  },
  {
    step: "03",
    title: "We follow through",
    desc: "If it needs a fix, a call, or a follow-up, we stay on it until you're taken care of.",
  },
];
