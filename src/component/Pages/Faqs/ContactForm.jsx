import React, { useState } from "react";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name field should not be empty.";
    if (!formData.email) newErrors.email = "Email field should not be empty.";
    if (!formData.message)
      newErrors.message = "Message field should not be empty.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setToastMessage("Thank you . We will get back to you");
    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div>
      {/* <button className={styles.knowmorebtn} onClick={toggleModal}>
        Know More
      </button> */}
      <div className={styles.supportContainer}>
        <h2>Still Have Questions?</h2>
        <p>
          If you didn’t find the answer you’re looking for, our support team is
          here to help!
        </p>
        <button
          className={`${styles.knowmorebtn} inline-flex items-center z-10 shadow-sm justify-center gap-2 whitespace-nowrap text-[15px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#3985ED] text-primary-foreground hover:bg-blue-600 h-11 rounded-sm px-8`}
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:rha:"
          data-state="closed"
          onClick={toggleModal} // Add your onClick handler here
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail mr-2 h-4 w-4"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          Contact Support
        </button>
      </div>
      {isOpen && (
        <div className={styles.modaloverlay}>
          <div className={styles.modalcontainer}>
            <button className={styles.closebtn} onClick={toggleModal}>
              &times;
            </button>
            <h2>Contact Support</h2>
            <p>
              Fill out this form and we’ll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div className={styles.formgroup}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className={styles.formgroup}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>
              <div className={styles.formgroup}>
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className={styles.error}>{errors.message}</p>
                )}
              </div>
              <button type="submit" className={styles.submitbtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
    </div>
  );
};

export default ContactForm;
