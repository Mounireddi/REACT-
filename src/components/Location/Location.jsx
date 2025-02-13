import "./Location.css";

const location =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7771.346412970271!2d78.2415452!3d14.4450926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI2JzQyLjMiTiA3OMKwMTQnMzAuMSJF!5e0!3m2!1sen!2sin!4v1700000000000";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src={location}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
