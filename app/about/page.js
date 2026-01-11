export const metadata = {
  title: "About Us | LilURL",
  description: "LilURL is a fast, minimal, and reliable URL shortening platform.",
};

export default function AboutPage() {
  return (
    <section className=" px-6 py-0">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6">
          About LilURL
        </h1>

        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
          LilURL is a modern URL shortening platform built to simplify the way
          you share links. We focus on speed, reliability, and a clean user
          experience, so you can shorten links in seconds without distractions.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Our mission is to remove the friction from link sharing. Long,
              complex URLs are hard to remember and unpleasant to share. LilURL
              transforms them into short, clean links that work everywhere.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              We envision a web where sharing information is effortless.
              LilURL aims to become a trusted link management platform that
              balances simplicity with powerful features.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            What LilURL Offers
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Instant Shortening</h3>
              <p className="text-gray-600 text-sm">
                Convert long URLs into short links instantly with no delays.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Custom Short URLs</h3>
              <p className="text-gray-600 text-sm">
                Create personalized short links that are easy to remember.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Secure Redirects</h3>
              <p className="text-gray-600 text-sm">
                All links are handled securely to ensure safe redirection.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Clean Interface</h3>
              <p className="text-gray-600 text-sm">
                A distraction-free UI focused on usability and clarity.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600 text-sm">
                Built using modern technologies for speed and reliability.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Scalable Platform</h3>
              <p className="text-gray-600 text-sm">
                Designed to grow with increasing users and traffic.
              </p>
            </div>
          </div>
        </div>


        {/* Footer */}
        <div className="border-t pt-1 text-center text-gray-500">
          © {new Date().getFullYear()} LilURL. Built with simplicity in mind.
        </div>
      </div>
    </section>
  );
}

