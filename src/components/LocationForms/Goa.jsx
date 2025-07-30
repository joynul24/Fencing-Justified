
const Goa = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side: Contact Form */}
        <div className="bg-[#002B55] p-5 md:p-12 shadow-md rounded-3xl text-white">
          <h2 className="md:text-2xl font-bold md:font-semibold mb-4">Contact Us for Goa</h2>
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
            title="Goa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383198.5!2d74.1240!3d15.2993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8f3df2b0ccf23%3A0x0!2sGoa%2C%20India!5e0!3m2!1sen!2sbd!4v1621337012345!5m2!1sen!2sbd"
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

export default Goa;