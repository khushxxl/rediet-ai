import Footer from "@/components/landing/footer";

export default function Copyright() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Copyright Notice
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Copyright Protection
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              All content on this website, including but not limited to text,
              graphics, logos, images, audio clips, digital downloads, and data
              compilations, is the property of our company and is protected by
              international copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Use of Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300">You may not:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on the website & app
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Permission Requests
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you wish to use any content from our website for purposes not
              specified above, please contact us at:
              <br />
              <a
                href="mailto:khushaal.choithramani@gmail.com"
                className="text-blue-500 hover:text-blue-600"
              >
                khushaal.choithramani@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Copyright Infringement
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you believe that any content on our website infringes upon your
              copyright, please notify us immediately with detailed information
              about the alleged infringement.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
