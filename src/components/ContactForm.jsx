"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { z } from "zod"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
      message: "",
    }
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form submitted:", data)
      reset()
      alert("Message sent successfully!")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="text-pink-400">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Reach out, and Send Your Business to the Moon with Chatminds!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Let&apos;s Chat</CardTitle>
              <p className="text-gray-400">
                Let&apos;s align our minds! Reach out and let Us take your business to the Next-Level.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      {...register("lastName")}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                      placeholder="Last Name"
                      aria-label="Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Input
                      {...register("firstName")}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                      placeholder="First Name"
                      aria-label="First Name"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm">{errors.firstName.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    {...register("email")}
                    type="email"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                    placeholder="Email"
                    aria-label="Email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    {...register("phone")}
                    type="tel"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm">{errors.phone.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Textarea
                    {...register("message")}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 min-h-[150px]"
                    placeholder="Message"
                    aria-label="Message"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send it to the moon"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-white overflow-hidden">
            <CardContent className="p-0 h-full">
              <div className="relative h-full min-h-[400px] md:min-h-[600px]">
                <img
                  src="/src/assets/image.png"
                  alt="Contact support illustration"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}