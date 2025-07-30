
const Mumbai = () => {
    return (
       <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side: Contact Form */}
        <div className="bg-[#002B55] p-5 md:p-12 shadow-md rounded-3xl text-white">
          <h2 className="md:text-2xl font-bold md:font-semibold mb-4">Contact Us for Mumbai</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-[#FFFFFF1A] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-[#FFFFFF1A] rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full px-4 py-2 bg-[#FFFFFF1A] rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-2 bg-[#FFFFFF1A] rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side: Map */}
        <div className="w-full h-80 md:h-auto">
          <iframe
            title="Mumbai Location"
            src="https://www.google.com/maps?q=Mumbai+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
    );
};

export default Mumbai;