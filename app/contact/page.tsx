import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-700 pt-20">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Get in Touch</h1>
        <p className="text-slate-600 mb-8">
          Have a question or ready to start your real estate journey? We're here to help.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
