import React, {useState} from 'react';


const Inquiries = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message_title: '',
    message: '',
    inquiry_type: 'general',
    agree_terms: false,
    agree_communications: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value, type, checked} = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('https://piw-express.onrender.com/api/inquiries', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
    });

    const data = await res.json().catch(() => ({}));
    console.log('Response:', res.status, data);

    if (res.ok) {
      setSubmitted(true);
      setForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message_title: '',
        message: '',
        inquiry_type: 'general',
        agree_terms: false,
        agree_communications: false,
      });
    } else {
      alert('Submission failed. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen">

      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white text-center">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact & Inquiries
          </h1>
          <p className="text-xl text-gray-700 max-w-xl mx-auto">
            Send us your inquiries or partnership interest. We’ll get back to you shortly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container max-w-3xl">
          {submitted ? (
            <div className="text-center">
              <p className="text-green-600 text-lg mb-4">
                Inquiry submitted successfully!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-lg"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={form.last_name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
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
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={form.phone_number}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
              </div>

              <input
                type="text"
                name="message_title"
                placeholder="Subject / Message Title"
                value={form.message_title}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />

              <select
                name="inquiry_type"
                value={form.inquiry_type}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              >
                <option value="general">General Inquiry</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="participation">Participation</option>
              </select>

              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />

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
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-lg font-semibold"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Inquiries;