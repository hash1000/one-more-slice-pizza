import { buttonClasses } from "../../../utils/buttonStyles";
import { hearAboutUsOptions, usStates, type ContactFormErrors, type PartnerFormState } from "../types";

interface ContactStepProps {
  formData: PartnerFormState;
  errors: ContactFormErrors;
  submitting: boolean;
  submitError: string | null;
  onChange: <K extends keyof PartnerFormState>(field: K, value: PartnerFormState[K]) => void;
  onBack: () => void;
  onSubmit: () => void;
}

function fieldClasses(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-3 font-body text-base text-charcoal outline-none transition-shadow placeholder:text-charcoal/30 focus:ring-2 focus:ring-orange/40 ${
    hasError ? "border-tomato bg-tomato/5" : "border-charcoal/15 bg-cream focus:border-orange/40"
  }`;
}

export function ContactStep({
  formData,
  errors,
  submitting,
  submitError,
  onChange,
  onBack,
  onSubmit,
}: ContactStepProps) {
  return (
    <div className="rounded-2xl border border-charcoal/8 bg-white p-8 shadow-soft sm:p-10">
      <h2 className="font-display text-2xl font-black text-charcoal sm:text-3xl">
        Tell Us About Yourself
      </h2>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="mt-8 flex flex-col gap-5"
      >
        {/* Honeypot field — hidden from real users, bots may fill it */}
        <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => onChange("honeypot", e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block font-display text-sm font-semibold text-charcoal">
              First Name <span className="text-orange" aria-hidden="true">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              className={fieldClasses(!!errors.firstName)}
            />
            {errors.firstName && (
              <p id="firstName-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 block font-display text-sm font-semibold text-charcoal">
              Last Name <span className="text-orange" aria-hidden="true">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              className={fieldClasses(!!errors.lastName)}
            />
            {errors.lastName && (
              <p id="lastName-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="mb-2 block font-display text-sm font-semibold text-charcoal">
            Company / Business Name <span className="text-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            value={formData.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
            className={fieldClasses(!!errors.companyName)}
          />
          {errors.companyName && (
            <p id="companyName-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
              {errors.companyName}
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
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses(!!errors.email)}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block font-display text-sm font-semibold text-charcoal">
            Phone Number <span className="text-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClasses(!!errors.phone)}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="city" className="mb-2 block font-display text-sm font-semibold text-charcoal">
              City <span className="text-orange" aria-hidden="true">*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              value={formData.city}
              onChange={(e) => onChange("city", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.city}
              aria-describedby={errors.city ? "city-error" : undefined}
              className={fieldClasses(!!errors.city)}
            />
            {errors.city && (
              <p id="city-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
                {errors.city}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="state" className="mb-2 block font-display text-sm font-semibold text-charcoal">
              State <span className="text-orange" aria-hidden="true">*</span>
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={(e) => onChange("state", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.state}
              aria-describedby={errors.state ? "state-error" : undefined}
              className={fieldClasses(!!errors.state)}
            >
              <option value="">Select State</option>
              {usStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p id="state-error" role="alert" className="mt-1.5 font-body text-xs text-tomato">
                {errors.state}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="hearAboutUs" className="mb-2 block font-display text-sm font-semibold text-charcoal">
            How Did You Hear About Us?
          </label>
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={(e) => onChange("hearAboutUs", e.target.value)}
            className={fieldClasses(false)}
          >
            <option value="">Select an option</option>
            {hearAboutUsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="comments" className="mb-2 block font-display text-sm font-semibold text-charcoal">
            Comments / Additional Information
          </label>
          <textarea
            id="comments"
            name="comments"
            rows={4}
            value={formData.comments}
            onChange={(e) => onChange("comments", e.target.value)}
            placeholder="Tell us more about your goals..."
            className={fieldClasses(false)}
          />
        </div>

        {submitError && (
          <p role="alert" className="font-body text-sm text-tomato">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full ${buttonClasses("dark", "md")} disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>

        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="font-body text-sm font-semibold text-charcoal/60 underline-offset-2 hover:underline disabled:cursor-not-allowed"
        >
          Back
        </button>

        <p className="flex items-center gap-2 font-body text-xs text-charcoal/50">
          <span aria-hidden="true">🔒</span>
          Your information is secure and will only be used by One More Slice team members.
        </p>
      </form>
    </div>
  );
}
