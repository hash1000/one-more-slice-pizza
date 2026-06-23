import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../lib/motion";
import { containerClasses } from "../../../lib/layout";

interface FormState {
  name: string;
  email: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

export function InterestForm() {
  const [fields, setFields] = useState<FormState>({ name: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log("Interest form submission:", fields);
    const existing = JSON.parse(localStorage.getItem("oms_interest") ?? "[]") as FormState[];
    localStorage.setItem("oms_interest", JSON.stringify([...existing, fields]));
    setSubmitted(true);
    setFields({ name: "", email: "" });
    setErrors({});
  };

  return (
    <section id="interest-form" className="relative overflow-hidden bg-cream-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[26rem] w-[26rem] rounded-full bg-orange/8 blur-[120px]" />

      <div className={containerClasses}>
        <div className="mx-auto max-w-2xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center font-display text-xs font-bold uppercase tracking-widest text-orange"
          >
            Stay in the Loop
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-center font-display text-4xl font-black leading-tight tracking-tight text-charcoal text-balance sm:text-5xl"
          >
            Register your interest.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 text-center font-body text-base leading-relaxed text-charcoal/60"
          >
            Be the first to hear about grand opening dates, exclusive offers, and franchise opportunities.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-orange/20 bg-orange/8 px-8 py-10 text-center"
                  role="alert"
                >
                  <span className="text-4xl" aria-hidden="true">🍕</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-charcoal">
                    Thanks for your interest!
                  </h3>
                  <p className="mt-2 font-body text-base text-charcoal/65">
                    We'll be in touch soon with updates on our opening.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-display text-sm font-semibold text-orange underline-offset-2 hover:underline"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5 rounded-2xl border border-charcoal/8 bg-white p-8 shadow-soft sm:p-10"
                >
                  <div>
                    <label htmlFor="name" className="mb-2 block font-display text-sm font-semibold text-charcoal">
                      Full Name <span className="text-orange" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={fields.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Your name"
                      className={`w-full rounded-xl border px-4 py-3 font-body text-base text-charcoal outline-none transition-shadow placeholder:text-charcoal/30 focus:ring-2 focus:ring-orange/40 ${
                        errors.name ? "border-tomato bg-tomato/5" : "border-charcoal/15 bg-cream focus:border-orange/40"
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-display text-sm font-semibold text-charcoal">
                      Email Address <span className="text-orange" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={fields.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl border px-4 py-3 font-body text-base text-charcoal outline-none transition-shadow placeholder:text-charcoal/30 focus:ring-2 focus:ring-orange/40 ${
                        errors.email ? "border-tomato bg-tomato/5" : "border-charcoal/15 bg-cream focus:border-orange/40"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-xl bg-orange px-6 py-3.5 font-display text-base font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
                  >
                    Submit Interest
                  </button>

                  <p className="text-center font-body text-xs text-charcoal/40">
                    No spam. We'll only reach out about One More Slice updates.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
