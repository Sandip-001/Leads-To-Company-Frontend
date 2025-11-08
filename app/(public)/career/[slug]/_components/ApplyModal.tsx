"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
  jobId: number;
  jobTitle: string;
}

export default function ApplyModal({
  open,
  onClose,
  jobId,
  jobTitle,
}: ApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    currentCtc: "",
    expectedCtc: "",
    noticePeriod: "",
    linkedin: "",
    portfolio: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Job Applied Successfully !")
    console.log("Submitting Application:", { jobId, jobTitle, ...formData });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Apply for <span className="text-blue-600">{jobTitle}</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <Label className="mb-2 block">Full Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <Label className="mb-2 block">Email Address</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label className="mb-2 block">Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <Label className="mb-2 block">Total Experience</Label>
            <Input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g. 3 years"
              required
            />
          </div>

          {/* CTC Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label className="mb-2 block">Current CTC</Label>
              <Input
                name="currentCtc"
                value={formData.currentCtc}
                onChange={handleChange}
                placeholder="e.g. ₹6 LPA"
                required
              />
            </div>
            <div>
              <Label className="mb-2 block">Expected CTC</Label>
              <Input
                name="expectedCtc"
                value={formData.expectedCtc}
                onChange={handleChange}
                placeholder="e.g. ₹8 LPA"
                required
              />
            </div>
          </div>

          {/* Notice Period */}
          <div>
            <Label className="mb-2 block">Notice Period (in days)</Label>
            <Input
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              placeholder="e.g. 30 days"
              required
            />
          </div>

          {/* LinkedIn */}
          <div>
            <Label className="mb-2 block">LinkedIn Profile</Label>
            <Input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/your-profile"
              required
            />
          </div>

          {/* Portfolio (Optional) */}
          <div>
            <Label className="mb-2 block">Portfolio Link (Optional)</Label>
            <Input
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <Label className="mb-2 block">Upload Resume</Label>
            <Input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Accepted formats: .pdf, .doc, .docx (Max 5MB)
            </p>
          </div>

          {/* Submit Button */}
          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 text-base"
            >
              Submit Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
