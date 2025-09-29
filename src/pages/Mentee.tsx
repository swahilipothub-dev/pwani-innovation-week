import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { API_ENDPOINTS } from '@/lib/config';
import { SUBCOUNTIES, MANAGEMENT_DEPARTMENTS } from '@/lib/attendees';

interface MenteeFormData {
  first_name: string;
  middle_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  gender: string;
  department: string;
  subcounty: string;
}

const initialFormState: MenteeFormData = {
  first_name: '',
  middle_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  gender: '',
  department: '',
  subcounty: '',
};

const Mentee = () => {
  const [formData, setFormData] = useState<MenteeFormData>(initialFormState);

  const menteeMutation = useMutation({
    mutationFn: async (data: MenteeFormData) => {
      const response = await fetch(API_ENDPOINTS.MENTEE_ATTENDEES, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit mentee registration');
      }

      return response.json();
    },
    onSuccess: () => {
      setFormData(initialFormState);
    },
  });

  const handleInputChange = (field: keyof MenteeFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    menteeMutation.mutate(formData);
  };

  const isFormValid =
    formData.first_name &&
    formData.last_name &&
    formData.email &&
    formData.phone_number &&
    formData.gender &&
    formData.department &&
    formData.subcounty;

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white text-center relative">
        <div className="section-container">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Mentee Registration
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Apply to join our mentee program and unlock new opportunities at PIW 2025.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                  Mentee Application
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Provide your details below to register as a mentee
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {menteeMutation.isSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Registration Submitted Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for applying to join the mentee program. We'll get back to you shortly.
                    </p>
                    <Button
                      onClick={() => menteeMutation.reset()}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first_name">First Name *</Label>
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
                        <Label htmlFor="last_name">Last Name *</Label>
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
                      <Label htmlFor="middle_name">Middle Name</Label>
                      <Input
                        id="middle_name"
                        type="text"
                        value={formData.middle_name}
                        onChange={(e) => handleInputChange('middle_name', e.target.value)}
                        placeholder="Enter your middle name (optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="phone_number">Phone Number *</Label>
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
                        <Label htmlFor="gender">Gender *</Label>
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
                        <Label htmlFor="department">Preferred Department *</Label>
                        <Select
                          value={formData.department}
                          onValueChange={(value) => handleInputChange('department', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            {MANAGEMENT_DEPARTMENTS.map(department => (
                              <SelectItem key={department} value={department}>
                                {department.replace(/\b\w/g, char => char.toUpperCase())}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subcounty">Subcounty *</Label>
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

                    {menteeMutation.isError && (
                      <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">
                          {menteeMutation.error?.message || 'Failed to submit registration. Please try again.'}
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={!isFormValid || menteeMutation.isPending}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      {menteeMutation.isPending ? (
                        <div className="flex items-center justify-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Submitting Registration...</span>
                        </div>
                      ) : (
                        'Submit Registration'
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
