import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { API_ENDPOINTS } from '@/lib/config';
import { SUBCOUNTIES, MENTORS, COHORTS } from '@/lib/attendees';

interface MenteeFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  subcounty: string;
  mentor: string;
  cohort: string;
}

const initialFormState: MenteeFormData = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  gender: '',
  subcounty: '',
  mentor: '',
  cohort: '',
};

const Mentee = () => {
  const [formData, setFormData] = useState<MenteeFormData>(initialFormState);

  const menteeMutation = useMutation({
    mutationFn: async (data: MenteeFormData) => {
      const payload = {
        first_name: data.first_name.trim(),
        last_name: data.last_name.trim(),
        phone_number: data.phone_number.trim(),
        email: data.email.trim(),
        gender: data.gender,
        subcounty: data.subcounty,
        mentor: data.mentor,
        cohort: data.cohort,
      } satisfies Record<string, string>;

      const response = await fetch(API_ENDPOINTS.MENTEE_ATTENDEES, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit mentee application');
      }

      return response.json();
    },
    onSuccess: () => {
      // Reset form on success
      setFormData(initialFormState);
    },
  });

  const handleInputChange = (field: keyof MenteeFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    menteeMutation.mutate(formData);
  };

  const isFormValid =
    formData.first_name &&
    formData.last_name &&
    formData.email &&
    formData.phone_number &&
    formData.gender &&
    formData.subcounty &&
    formData.mentor &&
    formData.cohort;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="pt-24 pb-20 bg-gradient-to-br from-indigo-50 via-indigo-100/50 to-white text-center relative transition-colors duration-300 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
        <div className="section-container">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 dark:text-white">
            Mentee Registration
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 dark:text-gray-300">
            Join as a mentee and get guidance from experienced mentors at PIW 2025.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white transition-colors duration-300 dark:bg-slate-950">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">
                  Mentee Application
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill out the form below to apply as a mentee
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {menteeMutation.isSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6 dark:text-gray-300">
                      Thank you for your interest in becoming a mentee. We'll be in touch soon.
                    </p>
                    <Button 
                      onClick={() => menteeMutation.reset()}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first_name" className="dark:text-gray-200">First Name *</Label>
                        <Input
                          id="first_name"
                          type="text"
                          value={formData.first_name}
                          onChange={(e) => handleInputChange('first_name', e.target.value)}
                          required
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last_name" className="dark:text-gray-200">Last Name *</Label>
                        <Input
                          id="last_name"
                          type="text"
                          value={formData.last_name}
                          onChange={(e) => handleInputChange('last_name', e.target.value)}
                          required
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-gray-200">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone_number" className="dark:text-gray-200">Phone Number *</Label>
                      <Input
                        id="phone_number"
                        type="tel"
                        value={formData.phone_number}
                        onChange={(e) => handleInputChange('phone_number', e.target.value)}
                        required
                        placeholder="+254712345678"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="dark:text-gray-200">Gender *</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) => handleInputChange('gender', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subcounty" className="dark:text-gray-200">Subcounty *</Label>
                        <Select
                          value={formData.subcounty}
                          onValueChange={(value) => handleInputChange('subcounty', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select subcounty" />
                          </SelectTrigger>
                          <SelectContent>
                            {SUBCOUNTIES.map(subcounty => (
                              <SelectItem key={subcounty} value={subcounty}>
                                {subcounty.replace(/\b\w/g, char => char.toUpperCase())}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mentor" className="dark:text-gray-200">Case Manager(Mentor) *</Label>
                        <Select
                          value={formData.mentor}
                          onValueChange={(value) => handleInputChange('mentor', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your mentor" />
                          </SelectTrigger>
                          <SelectContent className="max-h-60">
                            {MENTORS.map(mentor => (
                              <SelectItem key={mentor} value={mentor}>
                                {mentor}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cohort" className="dark:text-gray-200">Cohort *</Label>
                        <Select
                          value={formData.cohort}
                          onValueChange={(value) => handleInputChange('cohort', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select cohort" />
                          </SelectTrigger>
                          <SelectContent>
                            {COHORTS.map(cohort => (
                              <SelectItem key={cohort} value={cohort}>
                                {cohort.replace(/\b\w/g, char => char.toUpperCase())}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {menteeMutation.isError && (
                      <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">
                          {menteeMutation.error?.message || 'Failed to submit application. Please try again.'}
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={!isFormValid || menteeMutation.isPending}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      {menteeMutation.isPending ? (
                        <div className="flex items-center justify-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Submitting Application...</span>
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentee;
