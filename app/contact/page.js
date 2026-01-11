export const metadata = {
  title: "Contact Us | LilURL",
  description: "Get in touch with the LilURL team for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-0">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
          Have questions, feedback, or suggestions? We would love to hear from
          you. Reach out to the LilURL team and we will get back to you as soon
          as possible.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Whether you are facing an issue, have a feature request, or just
              want to share your thoughts, feel free to contact us through the
              details provided.
            </p>

            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> support@lilurl.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> Mumbai, India
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Support Note */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold mb-1">Support & Feedback</h2>
          <p className="text-gray-600 mb-3">
            We value user feedback and use it to continuously improve LilURL.
            Your suggestions help us enhance performance, usability, and
            overall reliability.
          </p>
          <p className="text-gray-600">
            If you encounter any broken links or unexpected behavior, please
            report it so we can fix it quickly.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t pt-1 text-center text-gray-500">
          © {new Date().getFullYear()} LilURL. We are always here to help.
        </div>
      </div>
    </section>
  );
}
