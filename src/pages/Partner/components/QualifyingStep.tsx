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
    <div className="rounded-2xl bg-white p-8 sm:p-12">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
        <fieldset>
          <legend className="flex items-center gap-3 font-display text-base font-bold text-charcoal">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange text-base font-bold text-white">
              1
            </span>
            What best describes you?
          </legend>
          <div className="mt-5 flex flex-col gap-3.5">
            {businessTypeOptions.map((option) => {
              const isChecked = formData.businessType === option.value;
              return (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 font-body text-sm text-charcoal/80"
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
                      isChecked ? "border-orange" : "border-charcoal/30"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full bg-orange transition-transform ${
                        isChecked ? "scale-100" : "scale-0"
                      }`}
                    />
                  </span>
                  <span>{option.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="flex flex-col">
          <label
            htmlFor="locationsCount"
            className="flex items-start gap-3 font-display text-base font-bold text-charcoal"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange text-base font-bold text-white">
              2
            </span>
            <span>Approximately how many locations do you currently operate?</span>
          </label>
          <div className="relative mt-5">
            <select
              id="locationsCount"
              name="locationsCount"
              value={formData.locationsCount}
              onChange={(e) => onChange("locationsCount", e.target.value)}
              className="w-full appearance-none rounded-xl border border-orange/30 bg-white p-3.5 font-body text-sm text-charcoal outline-none transition-colors focus:border-orange focus:ring-4 focus:ring-orange/10"
            >
              <option value="">Select an option</option>
              {locationsCountOptions.map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-charcoal/40"
              viewBox="0 0 12 8"
              fill="none"
              aria-hidden="true"
            >
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <button
            type="button"
            onClick={onNext}
            disabled={!canAdvance}
            className={`mt-8 w-full ${buttonClasses("secondary", "md")} disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 sm:mt-auto`}
          >
            Next: Tell Us About Yourself &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
