import { ClipboardList } from "lucide-react";
import { buttonClasses } from "../../../utils/buttonStyles";
import {
  businessTypeOptions,
  locationsCountOptions,
  type PartnerFormState,
} from "../types";

interface QualifyingStepProps {
  formData: PartnerFormState;
  onChange: <K extends keyof PartnerFormState>(field: K, value: PartnerFormState[K]) => void;
  onNext: () => void;
}

export function QualifyingStep({ formData, onChange, onNext }: QualifyingStepProps) {
  const canAdvance = formData.businessType !== "";

  return (
    <div className="rounded-2xl border border-charcoal/8 bg-white p-8 shadow-soft sm:p-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange">
        <ClipboardList className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="mt-4 font-display text-2xl font-black text-charcoal sm:text-3xl">
        Let's Learn More About Your Business
      </h2>
      <p className="mt-2 font-body text-sm text-charcoal/60">
        This helps us provide you with the most relevant information.
      </p>

      <fieldset className="mt-8">
        <legend className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-wide text-charcoal">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
            1
          </span>
          What best describes you?
        </legend>
        <div className="mt-4 flex flex-col gap-2 pl-9">
          {businessTypeOptions.map((option) => {
            const isChecked = formData.businessType === option.value;
            return (
              <label
                key={option.value}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 font-body text-sm text-charcoal/80 transition-colors ${
                  isChecked
                    ? "border-orange bg-orange/5"
                    : "border-charcoal/10 hover:border-orange/40"
                }`}
              >
                <input
                  type="radio"
                  name="businessType"
                  value={option.value}
                  checked={isChecked}
                  onChange={() => onChange("businessType", option.value)}
                  className="sr-only"
                />
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    isChecked ? "border-orange" : "border-charcoal/20"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-orange transition-transform ${
                      isChecked ? "scale-100" : "scale-0"
                    }`}
                  />
                </span>
                {option.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8">
        <label
          htmlFor="locationsCount"
          className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-wide text-charcoal"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
            2
          </span>
          Approximately how many locations do you currently operate?
        </label>
        <select
          id="locationsCount"
          name="locationsCount"
          value={formData.locationsCount}
          onChange={(e) => onChange("locationsCount", e.target.value)}
          className="mt-4 ml-9 w-[calc(100%-2.25rem)] rounded-xl border border-charcoal/15 bg-cream px-4 py-3 font-body text-base text-charcoal outline-none focus:border-orange/40 focus:ring-2 focus:ring-orange/40"
        >
          <option value="">Select an option</option>
          {locationsCountOptions.map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!canAdvance}
        className={`mt-10 w-full ${buttonClasses("secondary", "md")} disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0`}
      >
        Next: Tell Us About Yourself &rarr;
      </button>
    </div>
  );
}
