import React, { useState , useEffect} from "react";
import "./TermsAndConditions.css"; // Importing CSS file
import { useLocation } from "react-router-dom";

const TermsPrivacy = () => {
  const [activeTab, setActiveTab] = useState("terms");
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="termsContainer">
      <div className="termstabs">
        <button
          className={activeTab === "terms" ? "active" : ""}
          onClick={() => setActiveTab("terms")}
        >
          Terms & Conditions
        </button>
        <button
          className={activeTab === "privacy" ? "active" : ""}
          onClick={() => setActiveTab("privacy")}
        >
          Privacy Policy
        </button>
        <button
          className={activeTab === "legal" ? "active" : ""}
          onClick={() => setActiveTab("legal")}
        >
          Legal Considerations
        </button>
      </div>
      <div className="termscontent">
        <p>
          Certainly! Below is an updated version of the Terms and Conditions and
          Privacy Policy specifically tailored for your Ambigo Ambulance
          Services, with a focus on the fact that you also run a mobile
          application (in addition to the website). This version incorporates
          language to reflect app-specific considerations, such as app usage,
          permissions, and mobile device-related terms.
        </p>
        <h2>Effective Date: [ / /2025]</h2>
        {activeTab === "terms" && (
          <div>
            <h3>1. Introduction</h3>
            <p>
              Welcome to Ambigo Health Care Pvt Ltd ("Ambigo", "we", "our",
              "us"). These Terms and Conditions ("Terms") govern your use of our
              website www.ambigo.in (the "Site") and mobile application (the
              "App"), as well as the ambulance and emergency medical services
              (the "Service") provided by Ambigo Health Care Pvt Ltd. By
              accessing or using our Site, App, or Service, you agree to comply
              with and be bound by these Terms. If you do not agree with these
              Terms, please refrain from using our Site, App, or Service.
            </p>
            <h3>2. Use of the Service</h3>
            <p>
              <h4>a. Eligibility:</h4> You must be at least 18 years old or the
              age of majority in your jurisdiction to use our Service. By using
              the Site, App, or Service, you represent that you are of legal age
              and have the authority to enter into these Terms.
            </p>
            <p>
              <h4>b. Lawful Use:</h4>You agree to use the Site, App, and Service
              only for lawful purposes and in accordance with these Terms. You
              must not:
              <ul>
                <li>
                  Use the Site or App for any fraudulent or illegal activity.
                </li>
                <li>
                  Harm, abuse, or defraud any individuals, including emergency
                  personnel or patients.
                </li>
                <li>
                  Engage in activity that could damage, disable, or impair the
                  Site or App’s functionality.
                </li>
              </ul>
            </p>
            <p>
              <h4>c. Service Availability:</h4>
              While **Ambigo Ambulance Services** strives to provide reliable
              and timely emergency services, availability is subject to
              operational capacity, location, and external factors such as
              weather conditions. If we are unable to fulfill a service request,
              we recommend contacting local emergency authorities.
            </p>
            <h3>3. Account Registration and Mobile App Usage</h3>
            <p>
              <h4>a. Account Creation: </h4> To use certain features of the Site
              or App, such as requesting services or booking ambulance rides,
              you may be required to create an account. You agree to provide
              accurate and up-to-date information during the registration
              process. You are responsible for maintaining the confidentiality
              of your account and password.
            </p>
            <p>
              <h4>b. Mobile App Permissions: </h4>By using the App, you may
              grant us access to certain permissions on your mobile device,
              including:
              <ul>
                <li>
                  <h4>Location Access: </h4>To accurately determine your
                  location for ambulance dispatch.
                </li>
                <li>
                  <h4>Push Notifications: </h4>To send you alerts, service
                  updates, and reminders.
                </li>
                <li>
                  <h4>Camera and Microphone Access: </h4>
                  If required for specific services like photo documentation or
                  voice instructions.
                </li>
              </ul>
            </p>
            <p>
              <h4>c. App Updates: </h4>
              We may periodically update the App to improve its functionality.
              You agree to install these updates when prompted.
            </p>
            <h3>4. Pricing and Payment</h3>
            <p>
              <h4>a. Service Fee: </h4>
              Charges for ambulance services depend on the type of service
              requested, distance, urgency, and other relevant factors. You will
              be notified of applicable fees at the time of booking, either on
              the Site, App, or via a service confirmation.
            </p>
            <p>
              <h4>b. Payment Methods: </h4>
              Payments can be made through various channels, including
              credit/debit cards, UPI, and other online payment systems.
              Payments must be made promptly following service delivery.
            </p>
            <p>
              <h4>c. Refunds: </h4>
              Refunds will only be granted if the service was not provided as
              agreed or due to technical errors. Refund requests must be made
              within [insert time frame] after the service is completed.
            </p>
            <h3>5. Intellectual Property Rights: </h3>
            <p>
              All content, features, and functionality of the Site and App,
              including but not limited to text, graphics, logos, and software,
              are owned by Ambigo Health Care Pvt Ltd and are protected by
              copyright, trademark, and other intellectual property laws. You
              may not copy, modify, distribute, or use any part of the Site or
              App without our prior written consent.
            </p>
            <h3>6. Limitation of Liability: </h3>
            <p>
              To the maximum extent permitted by law, Ambigo Health Care Pvt Ltd
              will not be liable for any indirect, incidental, special, or
              consequential damages, including but not limited to loss of
              profits, data, or personal injury, arising out of your use or
              inability to use our Site, App, or Service.
            </p>
            <h3>7. Termination</h3>
            <p>
              We may suspend or terminate your access to the Site, App, or
              Service if we determine that you have violated these Terms or if
              your actions negatively affect the functionality or security of
              our Service.
            </p>
            <h3>8. Changes to the Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. If we make
              significant changes, we will notify you via email or in-app
              notifications. Your continued use of the Site, App, or Service
              after any changes to these Terms constitutes your acceptance of
              the updated Terms.
            </p>
            <h3>9. Governing Law</h3>
            <p>
              These Terms are governed by the laws of India. Any disputes
              arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts in [Anantapur].
            </p>
            <h3>10. Contact Us</h3>
            <p>
              <h4>Email: </h4>ambigo.in@gmail.com
            </p>
            <p>
              <h4>Website: </h4>www.ambigo.in
            </p>
            <p>
              <h4>Phone: </h4>+91 98667 92496
            </p>
          </div>
        )}
        {activeTab === "privacy" && (
          <div>
            <h3>1. Introduction</h3>
            <p>
              At Ambigo Health Care Pvt Ltd ("Ambigo", "we", "our", "us"), we
              take your privacy seriously. This Privacy Policy outlines how we
              collect, use, and protect your personal information when you use
              our website{" "}
              <a href="www.ambigo.in" style={{ color: "orange" }}>
                ambigo
              </a>
              , mobile application (the "App"), or ambulance services (the
              "Service"). By using our Site, App, or Service, you consent to the
              practices described in this policy.
            </p>
            <h3>2. Information We Collect</h3>
            <p>
              <h4>a. Personal Information: </h4>
              We collect personal information you provide directly to us,
              including:
              <h5>Account Information: </h5> Name, contact details, medical
              history, payment information.
              <h5>Service Requests: </h5>Location data, emergency contact
              information, and health details required to provide the ambulance
              service.
            </p>
            <p>
              <h4>b. Usage Information:</h4>We automatically collect information
              about your usage of our Site and App, such as:
              <h5> Device information: </h5> IP address, device type, operating
              system, and browser type.
              <h5>App usage: </h5>Features accessed, time spent on the App, and
              crash data.
            </p>
            <p>
              <h4>c. Location Data: </h4>
              When you use the App, we may collect and process location data to
              determine your position for dispatching ambulance services. You
              may manage location settings through your device preferences.
            </p>
            <p>
              <h4>d. Cookies and Tracking: </h4>
              We use cookies and similar tracking technologies to personalize
              your experience on the Site and App and analyze trends.
            </p>
            <h3>3. How We Use Your Information</h3>
            <p>
              We use the information we collect to:
              <ul>
                <li>Provide ambulance and emergency medical services.</li>
                <li>Process your bookings, payment, and service requests.</li>
                <li>
                  Communicate with you regarding service updates, notifications,
                  and reminders.
                </li>
                <li>
                  Improve our Site, App, and services by analyzing usage
                  patterns.
                </li>
                <li>
                  Comply with legal obligations, enforce our terms, and protect
                  against fraud.
                </li>
              </ul>
            </p>
            <h3>4. Sharing Your Information</h3>
            <p>
              We do not sell your personal information. However, we may share
              your information in the following situations:
            </p>
            <p>
              <h4>Service Providers: </h4>
              We may share your data with third-party vendors who assist us in
              providing our services, including payment processors, hosting
              providers, and medical personnel.
            </p>
            <p>
              <h4>Legal Compliance: </h4>
              We may disclose your information if required by law, or in
              response to a legal request, such as a subpoena or court order.
            </p>
            <p>
              <h4>Business Transfers: </h4>
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of the transaction.
            </p>
            <h3>5. Data Security</h3>
            <p>
              We use industry-standard security measures to protect your
              personal data, including encryption, access controls, and secure
              servers. However, no method of transmitting data over the internet
              or storing data is 100% secure, and we cannot guarantee the
              absolute security of your data.
            </p>
            <h3>6. Your Rights and Choices</h3>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <p>
              <h4>a. Access and Correct: </h4>You can access and update your
              personal information via your account settings in the App or by
              contacting us.
            </p>
            <p>
              <h4>b. Opt-out</h4>You can opt-out of receiving marketing emails
              or notifications by following the unsubscribe instructions in the
              communication.
            </p>
            <p>
              <h4>c. Cookie Preferences</h4>
              You can control cookie preferences through your device or browser
              settings.
            </p>
            <h3>7. Data Retention</h3>
            <p>
              We retain your personal information only as long as necessary to
              provide services, fulfill legal obligations, or resolve disputes.
              After this period, we will securely delete or anonymize your data.
            </p>
            <h3>8. Children's Privacy</h3>
            <p>
              Our Site and App are not intended for children under the age of
              13, and we do not knowingly collect personal information from
              minors. If you believe we have collected data from a child, please
              contact us immediately.
            </p>
            <h3>9. International Data Transfers</h3>
            <p>
              If you are located outside of India, please be aware that your
              data may be transferred, processed, and stored in India. By using
              our services, you consent to the transfer of your data to India.
            </p>
            <h3>10. Changes to the Privacy Policy</h3>
            <p>
              We may update this Privacy Policy periodically. If we make
              significant changes, we will notify you via email or in-app
              notifications. Your continued use of the Site, App, or Service
              after any changes constitutes your acceptance of the updated
              Privacy Policy.
            </p>
            <h3>11. Contact Us</h3>
            <p>
              For any questions regarding this Privacy Policy or how we handle
              your personal information, please contact us at:{" "}
            </p>
            <p>
              <h4>Email: </h4>ambigo.in@gmail.com
              <h4>Website: </h4>www.ambigo.in
              <h4>Phone: </h4>+91 98667 92496
            </p>
          </div>
        )}
        {activeTab === "legal" && (
          <div>
            <p>
              To determine whether it's possible to allow children under 18
              years old to use your startup "Ambigo" ambulance services, you
              need to consider several factors:
            </p>
            <h3>1. Legal Considerations:</h3>
            <p>
              <h3>a. Age of Consent:</h3>In many jurisdictions, people under 18
              (minors) are considered unable to make binding legal decisions on
              their own. As such, minors typically need parental or guardian
              consent to engage in services like ambulance transport. You might
              need to have a parent or legal guardian sign a consent form or
              agreement before allowing minors to use the service.
              <h3>b. Healthcare Regulations: </h3>
              Ambulance services often operate under health and safety
              regulations, which can include specific rules for minors.
              Depending on your location, there may be additional regulations
              regarding transporting minors in medical situations, particularly
              if a child is unaccompanied.
            </p>
            <h3>2. Insurance and Liability:</h3>
            <p>
              <h4>a. Liability Coverage: </h4>If minors are using your ambulance
              services, your business might need to adjust its insurance
              policies to cover situations involving minors. Insurance companies
              often have specific terms about minors using services, and it’s
              important to ensure you have appropriate coverage for medical and
              transportation risks.
              <h4>b. Parental Permission: </h4>Some insurance policies may
              require written consent from a parent or guardian for coverage to
              apply to minors.
            </p>
            <h3>3. Operational Considerations: </h3>
            <p>
              <h4>a. Unaccompanied Minors: </h4>If children under 18 are using
              your ambulance services, it's important to consider if they will
              be accompanied by an adult. If minors need to use the service
              without an adult, you will need a process to ensure their safety,
              which might involve extra precautions or coordination with their
              guardians.
              <h4>b. Medical Protocols: </h4>Different medical protocols may
              apply when treating minors. It's crucial that your staff is
              trained in pediatric emergency care and knows how to handle the
              specific needs of younger patients.
            </p>
            <h3>4. Ethical and Social Responsibility: </h3>
            <p>
              <h4>a. Parental Trust: </h4>
              If you're offering ambulance services to children, parents may
              want to know that their child’s safety and well-being will be
              prioritized. You may want to establish trust-building policies,
              such as offering real-time tracking or communication during the
              service.
              <h4>b. Awareness and Transparency: </h4>
              Clearly communicate to parents what your service offers, how you
              ensure the safety of minors, and what legal protections are in
              place for both the children and their guardians.
            </p>
            <h3>5. Local Laws and Regulations: </h3>
            <p>
              <h4>a. Local Ambulance Regulations: </h4>The rules governing
              ambulance services vary by country, state, or region. You will
              need to check your specific local laws and regulations regarding
              emergency medical transport for minors. In some places, there may
              be special permissions or additional paperwork required.
            </p>
            <h3>Conclusion: </h3>
            <p>
              While it's generally possible for minors to use ambulance
              services, you will need to ensure that your startup complies with
              legal, insurance, and operational regulations regarding minors. A
              system that includes parental or guardian consent, as well as
              specialized medical protocols, would be essential. Consulting with
              a legal expert or insurance provider will help ensure that your
              business operates within the law and provides safe services for
              children under 18.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsPrivacy;
