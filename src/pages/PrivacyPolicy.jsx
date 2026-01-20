export default function PrivacyPolicy() {
  return (
    <main className="bg-white">

      {/* ================= CONTENT ================= */}
      <section className="max-w-[1100px] mx-auto px-16 pt-24 pb-32">

        <h1 className="text-[44px] font-semibold mb-2">
          Privacy <span className="font-light">Policy</span>
        </h1>

        <p className="text-sm text-gray-400 mb-12">
          Last updated November 28, 2022
        </p>

        {/* SECTION */}
        <div className="space-y-10 text-sm text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-lg font-semibold mb-3">
              What information do we collect?
            </h2>

            <p className="font-medium mb-2">
              Personal information you disclose to us
            </p>

            <p className="mb-4">
              <strong>In Short:</strong> We collect personal information that you provide to us.
            </p>

            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you register
              on the Services, express an interest in obtaining information about us or our products
              and Services, when you participate in activities on the Services, or otherwise when
              you contact us.
            </p>

            <p className="mb-3">
              The personal information we collect may include the following:
            </p>

            <ul className="list-disc ml-6 space-y-1">
              <li>names</li>
              <li>email addresses</li>
              <li>usernames</li>
              <li>passwords</li>
              <li>debit/credit card numbers</li>
              <li>billing addresses</li>
              <li>phone numbers</li>
            </ul>

            <p className="mt-4">
              <strong>Sensitive Information:</strong> We do not process sensitive information.
            </p>
          </div>

          <div>
            <p className="mb-4">
              <strong>Payment Data:</strong> We may collect data necessary to process your payment if
              you make purchases, such as your payment instrument number (such as a credit card number),
              and the security code associated with your payment instrument. All payment data is stored
              by Stripe.
            </p>

            <p>
              <strong>Social Media Login Data:</strong> We may provide you with the option to register
              with us using your existing social media account details, like your Facebook, Twitter,
              or other social media account.
            </p>
          </div>

          <div>
            <p>
              All personal information that you provide to us must be true, complete, and accurate,
              and you must notify us of any changes to such personal information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">
              Information automatically collected
            </h2>

            <p className="mb-4">
              <strong>In Short:</strong> Some information — such as your Internet Protocol (IP)
              address and/or browser and device characteristics — is collected automatically when
              you visit our Services.
            </p>

            <p className="mb-4">
              We automatically collect certain information when you visit, use, or navigate the
              Services. This information does not reveal your specific identity but may include device
              and usage information, such as your IP address, browser type, operating system, and
              language preferences.
            </p>

            <p>
              Like many businesses, we also collect information through cookies and similar technologies.
            </p>
          </div>

          <div>
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Log and Usage Data:</strong> Service-related, diagnostic, usage, and performance
                information our servers automatically collect when you access or use our Services.
              </li>
              <li>
                <strong>Device Data:</strong> Information about your computer, phone, tablet, or other
                device you use to access the Services.
              </li>
              <li>
                <strong>Location Data:</strong> Information about your device’s location, which can be
                either precise or imprecise.
              </li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
