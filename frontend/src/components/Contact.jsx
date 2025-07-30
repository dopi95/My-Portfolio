import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\d+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = true;
    if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const sendToTelegram = async () => {
    const botToken = '7622120987:AAECTaQR0ZoWfOAxLbW6SeKtWJjeiuf2Afk';
    const chatId = '2120123278';
    const text = `
📩 *New Contact Submission*
👤 *Name:* ${formData.fullName}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📝 *Message:* ${formData.message}
    `;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown'
      })
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await sendToTelegram();
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to send message to Telegram:', error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact <span className="blue-txt">Me</span></h2>

      {success && (
        <div className="success-banner slide-down">
          ✅ Message sent successfully!
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className={errors.fullName ? 'error' : ''}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'error' : ''}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
