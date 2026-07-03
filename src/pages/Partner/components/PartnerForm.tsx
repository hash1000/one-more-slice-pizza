import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { containerClasses } from "../../../utils/layout";
import { submitPartnerInquiry } from "../../../services/partnerApi";
import { initialFormState, type ContactFormErrors, type PartnerFormState } from "../types";
import { QualifyingStep } from "./QualifyingStep";
import { ContactStep } from "./ContactStep";
import { ThankYou } from "./ThankYou";

type Step = "qualifying" | "contact" | "submitted";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactStep(fields: PartnerFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!fields.firstName.trim()) errors.firstName = "First name is required.";
  if (!fields.lastName.trim()) errors.lastName = "Last name is required.";
  if (!fields.companyName.trim()) errors.companyName = "Company / business name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.phone.trim()) errors.phone = "Phone number is required.";
  if (!fields.city.trim()) errors.city = "City is required.";
  if (!fields.state.trim()) errors.state = "State is required.";
  return errors;
}

export function PartnerForm() {
  const [step, setStep] = useState<Step>("qualifying");
  const [formData, setFormData] = useState<PartnerFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = <K extends keyof PartnerFormState>(
    field: K,
    value: PartnerFormState[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateContactStep(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      if (!formData.businessType) {
        throw new Error("Missing business type");
      }
      await submitPartnerInquiry({
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        state: formData.state,
        additionalLocations:
          formData.additionalLocations.length > 0
            ? formData.additionalLocations.filter((loc) => loc.city.trim() || loc.state.trim())
            : undefined,
        businessType: formData.businessType,
        locationsCount: formData.locationsCount || undefined,
        hearAboutUs: formData.hearAboutUs || undefined,
        comments: formData.comments || undefined,
        honeypot: formData.honeypot || undefined,
      });
      setStep("submitted");
    } catch {
      setSubmitError(
        "Something went wrong submitting your information. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="partner-form" className="bg-cream-soft py-20 sm:py-28">
      <div className={containerClasses}>
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {step === "qualifying" && (
              <motion.div
                key="qualifying"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <QualifyingStep
                  formData={formData}
                  onChange={handleChange}
                  onNext={() => setStep("contact")}
                />
              </motion.div>
            )}
            {step === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ContactStep
                  formData={formData}
                  errors={errors}
                  submitting={submitting}
                  submitError={submitError}
                  onChange={handleChange}
                  onBack={() => setStep("qualifying")}
                  onSubmit={() => {
                    void handleSubmit();
                  }}
                />
              </motion.div>
            )}
            {step === "submitted" && (
              <motion.div
                key="submitted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ThankYou />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
