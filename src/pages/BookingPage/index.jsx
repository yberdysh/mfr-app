import "./index.scss";

function BookingPage() {
  return (
    <div className="booking-page">
      <div className="booking-content">
        <h1 className="booking-content__title">Booking</h1>
        <div className="booking-content__body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <h2>Acuity POC</h2>
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=35210616&ref=embedded_csp"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>

        <h2>Massage Book POC</h2>
        <iframe
          src="https://www.massagebook.com/therapists/myofascial-awakening/widget/services"
          frameborder="0"
          width="100%"
          height="800"
        ></iframe>

        <h2>Simple Practice POC</h2>
        <div class="spwidget-button-wrapper">
          <a
            href="https://yevgeniya-costa.clientsecure.me"
            class="spwidget-button"
            data-spwidget-scope-id="0e58566b-7cf9-4f76-b11d-d86f74aff4a2"
            data-spwidget-scope-uri="yevgeniya-costa"
            data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
            data-spwidget-scope-global
            data-spwidget-autobind
          >
            Request Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
