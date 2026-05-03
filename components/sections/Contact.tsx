"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { SITE_CONTACT } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

type SelectOption = { value: string; label: string };

const SERVICE_OPTIONS: SelectOption[] = [
  { value: "Web development", label: "Web development" },
  { value: "Mobile apps", label: "Mobile apps" },
  { value: "Backend & APIs", label: "Backend & APIs" },
  { value: "Cloud & DevOps", label: "Cloud & DevOps" },
  { value: "AI / ML", label: "AI / ML" },
  { value: "Tech consulting", label: "Tech consulting" },
  { value: "Not sure yet", label: "Not sure yet" },
];

const BUDGET_OPTIONS: SelectOption[] = [
  { value: "Under ₹50 thousand", label: "Under ₹50 thousand" },
  { value: "₹50 thousand – ₹1 lakh", label: "₹50 thousand – ₹1 lakh" },
  { value: "₹1 lakh – ₹2 lakh", label: "₹1 lakh – ₹2 lakh" },
  { value: "₹2 lakh – ₹5 lakh", label: "₹2 lakh – ₹5 lakh" },
  { value: "₹5 lakh – ₹10 lakh", label: "₹5 lakh – ₹10 lakh" },
  { value: "₹10 lakh – ₹50 lakh", label: "₹10 lakh – ₹50 lakh" },
  { value: "₹50 lakh – ₹1 crore", label: "₹50 lakh – ₹1 crore" },
  { value: "Let's discuss", label: "Let's discuss" },
];

function FormSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select\u2026",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="form-select" ref={wrapRef}>
      <label htmlFor={id}>{label}</label>
      <button
        type="button"
        id={id}
        className={`form-select-trigger${open ? " is-open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={selected ? "form-select-value" : "form-select-ph"}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="form-select-chevron" aria-hidden>
          <Icon name="chevron-down" size={18} />
        </span>
      </button>
      {open ? (
        <ul className="form-select-menu" role="listbox">
          {options.map((o) => (
            <li key={o.value} role="none">
              <button
                type="button"
                role="option"
                aria-selected={value === o.value}
                className={`form-select-option${
                  value === o.value ? " is-active" : ""
                }`}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const [data, setData] = useState<FormState>(empty);
  const [errs, setErrs] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [thanksFirstName, setThanksFirstName] = useState<string>("");

  /** BFCache and some navigations restore the full JS heap; clear stale form state. */
  useEffect(() => {
    const reset = () => {
      setData(empty);
      setErrs({});
      setSubmitted(false);
      setThanksFirstName("");
    };
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) reset();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setData((d) => ({ ...d, [k]: v }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!data.name.trim()) e.name = "Please enter your name";
    if (!data.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Please enter a valid email";
    if (!data.message.trim() || data.message.trim().length < 10) {
      e.message = "Please tell us a little more (10+ chars)";
    }
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const { name, email, company, service, budget, message } = data;
    const first = name.trim().split(/\s+/)[0] || name.trim();
    setThanksFirstName(first);

    const to = SITE_CONTACT.email;
    const subject = `New project inquiry from ${name}`;
    const body = `Name: ${name}
Email: ${email}
Company: ${company.trim() || "Not provided"}
Service of interest: ${service || "Not selected"}
Budget range: ${budget || "Not selected"}

Project details:
${message}`;

    window.location.href = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setData(empty);
    setErrs({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="zen-section">
        <div
          className="contact-wrap"
          style={{
            gridTemplateColumns: "1fr",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          <div className="form-success">
            <div className="check">
              <Icon name="check" size={26} />
            </div>
            <h3>Thanks, {thanksFirstName} — one more step.</h3>
            <p>
              Your email app should open with a draft to{" "}
              <strong style={{ color: "var(--logo-accent-bright)" }}>
                {SITE_CONTACT.email}
              </strong>
              <br />
              Send that message to deliver your inquiry.
            </p>
            <p style={{ color: "var(--ink-3)", fontSize: 14, margin: 0 }}>
              If no window opened, copy your details and email us at{" "}
              {SITE_CONTACT.email}
            </p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setSubmitted(false);
                setThanksFirstName("");
                setData(empty);
                setErrs({});
              }}
            >
              Send another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="zen-section">
      <div className="contact-wrap">
        <div className="contact-info">
          <div className="zen-eyebrow">Contact</div>
          <h2 className="zen-h2">Start a project with Zensolt Consultants.</h2>
          <p
            style={{
              color: "var(--ink-2)",
              fontSize: 15,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Tell us about the problem you&apos;re solving. We&apos;ll come back
            to you within 1-2 business days with a Discovery Call slot, a rough
            plan, and a clear next step.
          </p>
          <ul className="contact-list">
            <li>
              <span className="ico">
                <Icon name="mail" size={16} />
              </span>
              <div>
                <div className="ttl">Email</div>
                <div className="val">
                  <a href={`mailto:${SITE_CONTACT.email}`}>
                    {SITE_CONTACT.email}
                  </a>
                </div>
              </div>
            </li>
            <li>
              <span className="ico">
                <Icon name="phone" size={16} />
              </span>
              <div>
                <div className="ttl">Phone</div>
                <div className="val">
                  <a href={`tel:${SITE_CONTACT.phone}`}>{SITE_CONTACT.phone}</a>
                </div>
              </div>
            </li>
            <li>
              <span className="ico">
                <Icon name="pin" size={16} />
              </span>
              <div>
                <div className="ttl">Location</div>
                <div className="val">{SITE_CONTACT.locationLine}</div>
              </div>
            </li>
          </ul>
        </div>
        <form className="form" onSubmit={submit} noValidate autoComplete="off">
          <div className="row2">
            <div>
              <label htmlFor="contact-name">Your name*</label>
              <input
                id="contact-name"
                className={errs.name ? "err" : ""}
                value={data.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="John Doe"
                name="zensolt-inquiry-name"
                autoComplete="off"
              />
              {errs.name && <div className="err-msg">{errs.name}</div>}
            </div>
            <div>
              <label htmlFor="contact-email">Email*</label>
              <input
                id="contact-email"
                className={errs.email ? "err" : ""}
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@company.com"
                name="zensolt-inquiry-email"
                autoComplete="off"
                type="email"
              />
              {errs.email && <div className="err-msg">{errs.email}</div>}
            </div>
          </div>
          <div className="row2">
            <div>
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                value={data.company}
                onChange={(e) => set("company", e.target.value)}
                placeholder="XYZ Pvt. Ltd."
                name="zensolt-inquiry-company"
                autoComplete="off"
              />
            </div>
            <FormSelect
              id="contact-service"
              label="Service of interest"
              value={data.service}
              onChange={(v) => set("service", v)}
              options={SERVICE_OPTIONS}
              placeholder="Select a service"
            />
          </div>
          <FormSelect
            id="contact-budget"
            label="Budget range (INR)"
            value={data.budget}
            onChange={(v) => set("budget", v)}
            options={BUDGET_OPTIONS}
            placeholder="Select a budget range"
          />
          <div>
            <label htmlFor="contact-message">Tell us about your project*</label>
            <textarea
              id="contact-message"
              className={errs.message ? "err" : ""}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="What our team should know about your project?"
              name="zensolt-inquiry-message"
              autoComplete="off"
            />
            {errs.message && <div className="err-msg">{errs.message}</div>}
          </div>
          <div className="submit-row" style={{ justifyContent: "end" }}>
            <button className="btn btn-primary w-full" type="submit">
              Send message <Icon name="arrow" size={14} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
