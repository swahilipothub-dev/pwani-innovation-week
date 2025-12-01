import React, { useState } from 'react';

const API_BASE = 'https://piw-express.onrender.com';

const Vendors = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    agree_terms: false,
    agree_communications: false,
    business_name: '',
    business_address: '',
    business_description: '',
    is_registered: false,
    business_phone: '',
    business_email: '',
    vendor_type: 'food',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () =>
    setForm({
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      agree_terms: false,
      agree_communications: false,
      business_name: '',
      business_address: '',
      business_description: '',
      is_registered: false,
      business_phone: '',
      business_email: '',
      vendor_type: 'food',
    });

  const isMissing = (name: string) => missingFields.includes(name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setServerMessage(null);
    setMissingFields([]);
    setFieldErrors({});
    try {
      const res = await fetch(`${API_BASE}/api/vendors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      console.log('API Response Status:', res.status);
      console.log('API Response Body:', data);

      const success =
        res.ok &&
        (
          data?.success === true ||
          data?._id ||
          data?.data?._id
        );

      if (!success) {
        const message =
          data?.message ||
          data?.error ||
          (typeof data === 'string' ? data : 'Submission failed');
        console.error('Submission error:', message);
        setError(message);

        if (data?.errors?.missing_fields) {
          console.warn('Missing fields:', data.errors.missing_fields);
          setMissingFields(data.errors.missing_fields);
        }

        const perField: Record<string, string> = {};
        if (data?.errors?.vendor_type) {
          console.warn('Vendor type error:', data.errors.vendor_type);
          perField.vendor_type = data.errors.vendor_type;
        }
        setFieldErrors(perField);

        setSubmitting(false);
        return;
      }

      console.log('Vendor created successfully:', data);
      setServerMessage(data?.message || 'Vendor created successfully');
      setSubmitted(true);
      resetForm();
    } catch (err: any) {
      console.error('Network or unexpected error:', err);
      setError(err?.message || 'Network error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white text-center">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Vendor Application</h1>
          <p className="text-xl text-gray-700 max-w-xl mx-auto">
            Register your business to participate in PIW 2025 as a vendor.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container max-w-3xl">
          {submitted ? (
            <div className="text-center">
              {serverMessage && (
                <p className="text-green-600 text-lg mb-4">{serverMessage}</p>
              )}
              <button
                onClick={() => {
                  setSubmitted(false);
                  setServerMessage(null);
                }}
                className="mt-4 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-lg"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="w-full rounded-md border border-red-300 bg-red-50 px-4 py-3 text-red-700 space-y-2">
                  <div>{error}</div>
                  {missingFields.length > 0 && (
                    <ul className="list-disc list-inside">
                      {missingFields.map((f) => (
                        <li key={f}>{f} is required</li>
                      ))}
                    </ul>
                  )}
                  {Object.keys(fieldErrors).length > 0 && (
                    <ul className="list-disc list-inside">
                      {Object.entries(fieldErrors).map(([k, v]) => (
                        <li key={k}>
                          {k}: {v}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                  aria-invalid={isMissing('first_name')}
                  className={`border px-4 py-2 rounded-lg ${
                    isMissing('first_name') ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={form.last_name}
                  onChange={handleChange}
                  required
                  aria-invalid={isMissing('last_name')}
                  className={`border px-4 py-2 rounded-lg ${
                    isMissing('last_name') ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-invalid={isMissing('email')}
                  className={`border px-4 py-2 rounded-lg ${
                    isMissing('email') ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={form.phone_number}
                  onChange={handleChange}
                  required
                  aria-invalid={isMissing('phone_number')}
                  className={`border px-4 py-2 rounded-lg ${
                    isMissing('phone_number') ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              <input
                type="text"
                name="business_name"
                placeholder="Business Name"
                value={form.business_name}
                onChange={handleChange}
                required
                aria-invalid={isMissing('business_name')}
                className={`w-full border px-4 py-2 rounded-lg ${
                  isMissing('business_name') ? 'border-red-500' : 'border-gray-300'
                }`}
              />

              <input
                type="text"
                name="business_address"
                placeholder="Business Address"
                value={form.business_address}
                onChange={handleChange}
                required
                aria-invalid={isMissing('business_address')}
                className={`w-full border px-4 py-2 rounded-lg ${
                  isMissing('business_address') ? 'border-red-500' : 'border-gray-300'
                }`}
              />

              <textarea
                name="business_description"
                placeholder="Business Description"
                value={form.business_description}
                onChange={handleChange}
                required
                rows={3}
                aria-invalid={isMissing('business_description')}
                className={`w-full border px-4 py-2 rounded-lg ${
                  isMissing('business_description') ? 'border-red-500' : 'border-gray-300'
                }`}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="business_phone"
                  placeholder="Business Phone"
                  value={form.business_phone}
                  onChange={handleChange}
                  required
                  aria-invalid={isMissing('business_phone')}
                  className={`border px-4 py-2 rounded-lg ${
                    isMissing('business_phone') ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <input
                  type="email"
                  name="business_email"
                  placeholder="Business Email"
                  value={form.business_email}
                  onChange={handleChange}
                  required
                  aria-invalid={isMissing('business_email')}
                  className={`border px-4 py-2 rounded-lg ${
                    isMissing('business_email') ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              <div>
                <select
                  name="vendor_type"
                  value={form.vendor_type}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fieldErrors.vendor_type}
                  className={`w-full border px-4 py-2 rounded-lg ${
                    fieldErrors.vendor_type ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="food">food</option>
                  <option value="drinks">drinks</option>
                  <option value="food and drinks">food and drinks</option>
                </select>
                {fieldErrors.vendor_type && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.vendor_type}</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="is_registered"
                  checked={form.is_registered}
                  onChange={handleChange}
                />
                <label className="text-sm text-gray-700">Business is officially registered</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree_terms"
                  checked={form.agree_terms}
                  onChange={handleChange}
                  required
                />
                <label className="text-sm text-gray-700">I agree to the terms and conditions</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree_communications"
                  checked={form.agree_communications}
                  onChange={handleChange}
                  required
                />
                <label className="text-sm text-gray-700">I agree to receive communications</label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-60 text-white py-3 rounded-lg font-semibold"
              >
                {submitting ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Vendors;