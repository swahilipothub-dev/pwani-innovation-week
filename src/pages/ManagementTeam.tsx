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

interface ManagementTeamFormData {
  first_name: string;
  middle_name?: string;
  last_name: string;
  phone_number: string;
  email: string;
  gender: string;
  department: string;
  subcounty: string;
}

const initialFormState: ManagementTeamFormData = {
  first_name: '',
  middle_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  gender: '',
  department: '',
  subcounty: '',
};

const ManagementTeam = () => {
  const [formData, setFormData] = useState<ManagementTeamFormData>(initialFormState);

  const managementTeamMutation = useMutation({
    mutationFn: async (data: ManagementTeamFormData) => {
      const payload = {
        first_name: data.first_name.trim(),
        middle_name: data.middle_name?.trim() || undefined,
        last_name: data.last_name.trim(),
        phone_number: data.phone_number.trim(),
        email: data.email.trim(),
        gender: data.gender,
        department: data.department,
        subcounty: data.subcounty,
      } satisfies Record<string, string | undefined>;

      const response = await fetch(API_ENDPOINTS.MANAGEMENT_ATTENDEES, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit management team registration');
      }

      return response.json();
    },
    onSuccess: () => {
      setFormData(initialFormState);
    },
  });

  const handleInputChange = (field: keyof ManagementTeamFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    managementTeamMutation.mutate(formData);
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
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-blue-100/50 to-white text-center relative">
        <div className="section-container">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Management Team Registration
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Apply to join the management team and help deliver an unforgettable PIW 2025 experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                  Management Team Application
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Provide your details below to register for the management team
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {managementTeamMutation.isSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Registration Submitted Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for applying to join the management team. We'll get back to you shortly.
                    </p>
                    <Button
                      onClick={() => managementTeamMutation.reset()}
                      className="bg-blue-600 hover:bg-blue-700"
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

                    {managementTeamMutation.isError && (
                      <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">
                          {managementTeamMutation.error?.message || 'Failed to submit registration. Please try again.'}
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={!isFormValid || managementTeamMutation.isPending}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      {managementTeamMutation.isPending ? (
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

export default ManagementTeam;
