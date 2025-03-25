import "./index.scss";

function BookingPage() {
  return (
    <div className="booking-page">
      <div className="booking-content">
        <h1 className="booking-content__title">Booking</h1>
        <div className="booking-content__body">
          <h2>Please review before booking: </h2>

          <h3>Appointment Cancellations and Rescheduling</h3>

          <p>
            Your appointment time(s) are reserved specifically for you. If you
            cancel a session with less than 24 hours notice, or do not show for
            a scheduled appointment, you will still be charged the full price of
            the session. If you have prepaid for the session, you will not be
            refunded.
          </p>

          <p>
            If you must cancel or reschedule, please text/call/email immediately
            at 484-929-3680 or ladyfascia@myofascialawakening.com. If you have
            symptoms of an active infection (e.g. sore throat, cough, fever),
            please notify us as soon as possible to reschedule.
          </p>

          {/* <h3>On Call Birth Doula Commitment</h3> */}

          <p>
            As a birth doula, I am occasionally on call for clients in labor.
            While I do my best to schedule sessions accordingly, there is a rare
            chance that I may need to reschedule or end a session early if I am
            called to attend a birth. If this occurs, you will be notified as
            soon as possible in the event of a schedule change. If a session is
            interrupted due to an urgent birth call, you will receive either: a
            rescheduled appointment at your earliest convenience, or a pro-rated
            refund for any unused session time. I appreciate your understanding
            and flexibility, as this policy ensures I can continue supporting
            birthing clients while also providing you with the highest level of
            care. By booking a session, you acknowledge and accept this rare
            possibility.
          </p>
          <p>
            Please text/call/email at 484-929-3680 or
            ladyfascia@myofascialawakening.com with any questions or concerns.
          </p>
          <p>I look forward to working together.</p>
        </div>

        {
          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=35210616&ref=embedded_csp"
            title="Schedule Appointment"
            width="100%"
            height="800"
            frameBorder="0"
          ></iframe>
        }

        {/* <h2>Massage Book POC</h2>
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
        </div> */}
      </div>
    </div>
  );
}

export default BookingPage;
