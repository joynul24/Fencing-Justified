import logoImg from "../../assets/logo_img.png";

const ContactFooter = () => {
  return (
    <div className="bg-[#002B55] py-2 md:py-24 text-white rounded-3xl px-4">
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-7xl mx-auto">
        {/* box 1 */}
        <div className="md:w-1/2 lg:w-1/3 space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">
            Join Our JF Products
          </h3>
          <p className="text-sm md:text-base">
            We’ll tell you about store updates and discounts
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-[#FFFFFF1A] w-full sm:w-auto flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="btn rounded-full w-full sm:w-auto px-6 py-2 text-black font-semibold">
              Join Now
            </button>
          </div>
        </div>

        {/* box 2 */}
        <div className="md:w-1/2 lg:w-1/3">
          <nav>
            <h6 className="footer-title text-lg font-semibold mb-4">
              Information
            </h6>
            <div className="flex flex-col gap-3">
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Shop</a>
              <a className="link link-hover">Blog</a>
              <a className="link link-hover">Contact</a>
            </div>
          </nav>
        </div>

        {/* box 3 */}
        <div className="md:w-1/2 lg:w-1/3">
          <nav>
            <h6 className="footer-title text-lg font-semibold mb-4">Helpful</h6>
            <div className="flex flex-col gap-3">
              <a className="link link-hover">FAQs</a>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Shipping Policy</a>
            </div>
          </nav>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto my-20 px-4">
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
    {/* Logo & Branches */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
      <img className=" w-[50px] md:w-[130px]" src={logoImg} alt="Logo" />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold">Our Branches</h3>
        <p className="text-gray-200 text-sm sm:text-base">
          Coimbatore, Chennai, Hyderabad, Goa, Kochi
        </p>
      </div>
    </div>

    {/* Contact Button */}
    <div>
      <button className="btn-primary text-black px-6 py-2 rounded-md">
        Contact Us
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default ContactFooter;
