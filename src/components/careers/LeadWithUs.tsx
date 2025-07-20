"use client"

import type React from "react"

import { useState } from "react"

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    nationality: "",
    city: "",
    file: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({
      ...prev,
      file,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", formData)
      setSubmitMessage("Form submitted successfully!")

      // Reset form
      setFormData({
        name: "",
        gender: "",
        email: "",
        phone: "",
        nationality: "",
        city: "",
        file: null,
      })

      // Reset file input
      const fileInput = document.getElementById("file") as HTMLInputElement
      if (fileInput) fileInput.value = ""
    } catch (error) {
      setSubmitMessage("Error submitting form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8 pt-10 bg-black text-white rounded-b-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-white border-b border-[#084e2a] pb-3">Lead with us</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Gender Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-brand pb-2"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-white mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-0 border-b border-white text-white focus:outline-none focus:border-brand pb-2"
            >
              <option value="" className="bg-black">
                Select Gender
              </option>
              <option value="male" className="bg-black">
                Male
              </option>
              <option value="female" className="bg-black">
                Female
              </option>
              <option value="other" className="bg-black">
                Other
              </option>
            </select>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-brand pb-2"
            placeholder=""
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-white mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-brand pb-2"
            placeholder=""
          />
        </div>

        {/* Nationality and City Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nationality" className="block text-white mb-2">
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-brand pb-2"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-white mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-brand pb-2"
              placeholder=""
            />
          </div>
        </div>

        {/* File Upload and Submit Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-4">
          <div className="flex-1">
            <label htmlFor="file" className="block text-white mb-2">
              Choose File
            </label>
            <input type="file" id="file" name="file" onChange={handleFileChange} className="hidden" />
            <button
              type="button"
              onClick={() => document.getElementById("file")?.click()}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              Choose File {formData.file ? `- ${formData.file.name}` : ""}
            </button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-brand text-black px-8 py-2 font-semibold cursor-pointer min-w-[140px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "send"}
          </button>
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <div
            className={`text-center p-3 rounded ${
              submitMessage.includes("successfully") ? "text-green-400" : "text-red-400"
            }`}
          >
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  )
}
