'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API or email service here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2200);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-10">
        <div className="uppercase tracking-[2px] text-xs font-semibold text-amber-600 mb-2">GET IN TOUCH</div>
        <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-gray-600">Have questions about materials, delivery, or pricing? We're here to help.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="font-semibold mb-2">Gardena</h3>
            <a href="tel:2135968052" className="text-lg font-medium text-blue-800 hover:underline block">(213) 596-8052</a>
            <a href="https://maps.app.goo.gl/f3UpakANB1yujrvw6" target="_blank" className="text-sm text-gray-600 hover:text-blue-800">
              15934 S. Figueroa St, Gardena, CA 92048
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Escondido</h3>
            <a href="tel:6198781531" className="text-lg font-medium text-blue-800 hover:underline block">(619) 878-1531</a>
            <a href="https://maps.app.goo.gl/WYB8jTGqSxikUSvw7" target="_blank" className="text-sm text-gray-600 hover:text-blue-800">
              530 N Spruce St, Escondido, CA 92025
            </a>
          </div>

          <div className="pt-4 border-t">
            <div className="text-sm text-gray-600">Hours</div>
            <div className="mt-1 text-sm">
              Mon – Fri: 6:00 AM – 4:00 PM<br />
              Sat: 7:00 AM – 11:00 AM<br />
              Sun: Closed
            </div>
          </div>

          <div className="pt-4">
            <a 
              href="http://Customer.gosuppli.com/rscg/auth/login" 
              target="_blank"
              className="text-sm inline-block rounded-full bg-amber-500 px-5 py-2 font-semibold text-white hover:bg-amber-600"
            >
              Pay Now (Gardena)
            </a>
            <a 
              href="http://Customer.gosuppli.com/rsgfsd/auth/login" 
              target="_blank"
              className="ml-3 text-sm inline-block rounded-full bg-amber-500 px-5 py-2 font-semibold text-white hover:bg-amber-600"
            >
              Pay Now (Escondido)
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="rounded-2xl border bg-green-50 border-green-200 p-8 text-center">
              <div className="text-2xl mb-2">✓</div>
              <div className="font-semibold text-lg">Thank you!</div>
              <p className="text-green-700">Your message has been received. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-500 resize-y"
                />
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto rounded-full bg-blue-800 hover:bg-blue-900 transition px-8 py-3 text-white font-semibold"
              >
                Submit Form
              </button>

              <p className="text-xs text-gray-500">
                This is a demo form. In production it can be connected to email, Slack, or a CRM.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
