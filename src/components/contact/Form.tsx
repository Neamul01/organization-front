'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  phone: z.string().min(1, 'Phone number is required'),
  companyName: z.string().min(1, 'Company name is required'),
  source: z.string().min(1, 'Please select how you found us'),
  investment: z.string().min(1, 'Please select your anticipated investment'),
  projectDescription: z
    .string()
    .min(20, 'Please provide more details about your project'),
});

type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Prefer using a form? No worries!
          </h2>
          <p className="mb-8 text-gray-600">Talk a bit about your challenge.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName')}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName')}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="name@company.com"
              />
              <p className="mt-1 text-sm text-gray-500">
                We won&apos;t spam you, we promise.
              </p>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Mobile phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                What&apos;s your company name?
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                {...register('companyName')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Company name"
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="source"
                className="block text-sm font-medium text-gray-700"
              >
                How did you find out about Vinta?
                <span className="text-red-500">*</span>
              </label>
              <select
                id="source"
                {...register('source')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Please Select</option>
                <option value="google">Google Search</option>
                <option value="referral">Referral</option>
                <option value="social">Social Media</option>
                <option value="other">Other</option>
              </select>
              {errors.source && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.source.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="investment"
                className="block text-sm font-medium text-gray-700"
              >
                Select your anticipated monthly investment (USD) to help us
                customize the right solution for your needs.
                <span className="text-red-500">*</span>
              </label>
              <select
                id="investment"
                {...register('investment')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Please Select</option>
                <option value="10-20k">$10,000 - $20,000</option>
                <option value="20-50k">$20,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
              {errors.investment && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.investment.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Tell us more about your project
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDescription"
                {...register('projectDescription')}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Scope, timeline, industry, challenges..."
              />
              {errors.projectDescription && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.projectDescription.message}
                </p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-500">
                By sending this message, you agree to receive updates
                occasionally via email and WhatsApp. Don&apos;t worry! We
                won&apos;t flood your inbox! You can unsubscribe easily anytime
                if you feel it&apos;s too much.
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
              >
                Send us a message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
