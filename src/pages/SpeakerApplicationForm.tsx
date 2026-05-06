import React, {useState} from 'react';
import {Briefcase, Globe, Users} from 'lucide-react';

const Speakers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    first_name: '',
    last_name: '',
    middle_name: '',
    gender: 'male',
    country: '',
    location: 'kenya - coast',
    thematic_area: 'Youth Agency',
    session_type: 'Panel Discussions',
    session_title: '',
    session_description: '',
    target_audience: 'beginners',
    target_type: 'non-technical',
    audience_engagement: 'Q and A',
    agree_terms: false,
    agree_communications: false,
    delivery_type: 'physical'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value, type, checked} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://piw-express.onrender.com/api/speakers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      if (res.ok) setSubmitted(true);
      else alert('Submission failed');
    } catch (err) {
      alert('Network error');
    }
  };

  const categories = ['All', 'Keynote Speakers', 'Panel Experts', 'Workshop Leaders'];

  const speakers: any[] = [];

  const audienceTypes = [
    {
      title: 'Youth',
      description: 'The essential cog in the PIW machine as partners and not mere beneficiaries. The event is youth-driven and interventions are geared towards building a resilient and youthful workforce.',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      stats: '60% of participants'
    },
    {
      title: 'Public & Private Sector',
      description: 'The vital enablers and investors of a re-imagined Pwani. Providing a platform for collaboration, knowledge sharing, and identifying strategic investment opportunities.',
      icon: Briefcase,
      color: 'from-green-500 to-green-600',
      stats: '25% of participants'
    },
    {
      title: 'Community Leaders',
      description: 'Coastal communities as stewards of natural resources. With deliberate discussions on aquaculture, cultural tourism and agriculture to unlock new economic pathways.',
      icon: Globe,
      color: 'from-orange-500 to-orange-600',
      stats: '15% of participants'
    }
  ];

  const filteredSpeakers = selectedCategory === 'All'
    ? speakers
    : speakers.filter(speaker => speaker.category === selectedCategory);

  const getOptions = (field: string) => {
    const options: Record<string, string[]> = {
      gender: ['male', 'female'],
      location: ['kenya - coast', 'kenya - others', 'other'],
      thematic_area: ['Sustainable Coastal', 'Youth Agency', 'Digital Track'],
      session_type: ['Keynote Address', 'Panel Discussions', 'Workshops', 'Masterclass'],
      target_audience: ['experience', 'beginners', 'amateur'],
      target_type: ['technical', 'non-technical'],
      audience_engagement: ['Q and A', 'Demo', 'Presentations', 'Skit'],
      delivery_type: ['physical', 'virtual - live', 'virtual - prerecorded']
    };
    return options[field] || [];
  };

  return (
    <div className="min-h-screen">
      {/* Other sections omitted for brevity */}

      {/* Speaker Application Form */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Apply to Speak</h2>
          {submitted ? (
            <div className="text-center text-green-600 font-semibold">
              Thank you! Your application has been received.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              {['first_name', 'middle_name', 'last_name', 'email', 'phone_number', 'country', 'session_title'].map(field => (
                <input
                  key={field}
                  name={field}
                  type="text"
                  placeholder={field.replace('_', ' ').toUpperCase()}
                  className="border p-3 rounded"
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  required={field !== 'middle_name'}
                />
              ))}

              <textarea
                name="session_description"
                placeholder="Session Description"
                className="border p-3 rounded"
                value={formData.session_description}
                onChange={handleChange}
                required
              />

              {['gender', 'location', 'thematic_area', 'session_type', 'target_audience', 'target_type', 'audience_engagement', 'delivery_type'].map(select => (
                <select
                  key={select}
                  name={select}
                  className="border p-3 rounded"
                  value={(formData as any)[select]}
                  onChange={handleChange}
                  required
                >
                  <option disabled value="">Select {select.replace('_', ' ')}</option>
                  {getOptions(select).map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ))}

              <label className="flex items-center gap-2">
                <input type="checkbox" name="agree_terms" checked={formData.agree_terms} onChange={handleChange}
                       required/>
                I agree to the terms
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" name="agree_communications" checked={formData.agree_communications}
                       onChange={handleChange} required/>
                I agree to receive communications
              </label>

              <button type="submit" className="bg-[#F97316] text-white py-3 px-6 rounded hover:shadow-lg">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

export default Speakers;
