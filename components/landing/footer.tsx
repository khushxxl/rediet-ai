import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-x-20">
          <div className="space-y-4">
            <Link href="/">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Rediet AI
              </h3>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs dark:text-gray-300">
              Your intelligent health and fitness companion powered by AI.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  target="_blank"
                  href="https://x.com/khushaal_04"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:khushaal.choithramani@gmail.com"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  Copyright Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Rediet AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
