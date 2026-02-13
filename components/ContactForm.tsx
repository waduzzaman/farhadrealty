"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: ContactFormValues) => {
    console.log(data)
    // TODO: handle form submission (API call, email, etc.)
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="font-serif text-4xl font-bold mb-6 text-slate-900">Get In Touch</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you are looking to buy, sell, or invest, I am here to provide 
              expert guidance every step of the way. Reach out today for a consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-full">
                  <Phone className="text-amber-500" />
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-slate-600">+1 (416) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-full">
                  <Mail className="text-amber-500" />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-slate-600">info@farhadrealty.ca</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-full">
                  <MapPin className="text-amber-500" />
                </div>
                <div>
                  <p className="font-bold">Office</p>
                  <p className="text-slate-600">Bay St, Toronto, ON M5G 2N2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="John Doe" {...form.register("name")} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="john@example.com" {...form.register("email")} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input placeholder="(416) 000-0000" {...form.register("phone")} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="How can I help you?"
                  className="min-h-37.5"
                  {...form.register("message")}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 font-bold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
