import Footer from "@/components/landing/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We collect information that you provide directly to us, including
              when you create an account, use our services, or communicate with
              us. This may include:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
              <li>Name and contact information</li>
              <li>Health and fitness data</li>
              <li>Information from Apple Health (with your permission)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
              <li>Provide and improve our services</li>
              <li>Personalize your experience</li>
              <li>Communicate with you</li>
              <li>Analyze usage patterns</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              <a
                href="mailto:khushaal.choithramani@gmail.com"
                className="text-blue-500 hover:text-blue-600"
              >
                khushaal.choithramani@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
