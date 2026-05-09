export const metadata = {
  title: "Privacy Policy | SkillSphere",
};

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-3xl px-4 py-14 pb-20">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: May 2026</p>

        <section className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
          <div>
            <h2 className="text-base font-semibold text-gray-900">1. Information We Collect</h2>
            <p className="mt-2">
              When you register, we collect your name, email address, and optional profile photo
              URL. If you sign in with Google, we receive your name, email, and avatar from
              Google&apos;s OAuth service.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">2. How We Use Your Information</h2>
            <p className="mt-2">
              We use your information to create and manage your account, display your profile, and
              personalize your learning experience. We do not sell your data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">3. Cookies &amp; Sessions</h2>
            <p className="mt-2">
              SkillSphere uses secure, HTTP-only session cookies to keep you logged in. These
              cookies do not track you across other websites and are deleted when you log out or
              your session expires.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">4. Data Storage</h2>
            <p className="mt-2">
              Your account data is stored securely in MongoDB. We apply industry-standard
              encryption and access controls to protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">5. Third-Party Services</h2>
            <p className="mt-2">
              We use Google OAuth for social sign-in. Your interactions with Google are governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-purple-600 hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">6. Your Rights</h2>
            <p className="mt-2">
              You may request deletion of your account and associated data at any time by
              contacting us. We will process such requests within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">7. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy occasionally. We will notify you of significant
              changes via email or a prominent notice on the platform.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">8. Contact Us</h2>
            <p className="mt-2">
              For privacy-related questions, contact us at{" "}
              <a href="mailto:support@skillsphere.com" className="text-purple-600 hover:underline">
                support@skillsphere.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;
