"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
export function ContactUs() {
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
    <div className="ContactUs max-w-2xl mx-auto p-8 pt-10 bg-brand text-white ">
      <h1 className="text-3xl font-bold text-center mb-8 text-white border-b border-gray-400 pb-3">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Gender Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-0 border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white pb-2"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-0 border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white pb-2"
              placeholder="Name"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-0 border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white pb-2"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-0 border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white pb-2"
            placeholder="Phone"
          />
        </div>

        <div>
          <textarea
            rows={4}
            required
            className="w-full bg-transparent border-0 border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white pb-2"
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black gap-1 flex items-center text-white px-5 py-3 font-semibold cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          
          <div>Send</div>
            <Image
              src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/arrow_send.png"
              alt="Send arrow icon" // Meaningful alt text
              width={50}
              height={50} // Assuming square aspect ratio (adjust if needed)
              className="w-[50px] h-auto" // Maintain aspect ratio
              quality={60} // Optimal for small icons
              loading="lazy" // Lazy load if non-critical
            />
       
       
        </button>

      </form>
    </div>
  )
}
