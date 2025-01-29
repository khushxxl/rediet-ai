import Footer from "@/components/landing/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing or using Rediet AI's services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms,
              please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. AI Service Accuracy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI service provides recommendations and analysis with
              approximately 90% accuracy. While we strive for the highest
              possible accuracy, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
              <li>Results and recommendations may not be 100% accurate</li>
              <li>
                The service should not replace professional medical advice
              </li>
              <li>
                You should use your judgment when following AI recommendations
              </li>
              <li>Results may vary based on individual circumstances</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Use of Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              You agree to use our services only for lawful purposes and in
              accordance with these Terms. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. User Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              You retain ownership of any content you submit to our services. By
              submitting content, you grant us a worldwide, non-exclusive
              license to use, store, and display your content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our services are provided "as is" without any warranties. We are
              not liable for any damages arising from your use of our services
              or any inaccuracies in AI predictions and recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to modify these terms at any time. Continued
              use of our services after changes constitutes acceptance of the
              new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              For questions about these Terms of Service, please contact us at:
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
