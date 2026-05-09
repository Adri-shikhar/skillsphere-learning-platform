export const metadata = {
  title: "Terms & Conditions | SkillSphere",
};

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-3xl px-4 py-14 pb-20">
        <h1 className="text-3xl font-bold text-gray-900">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: May 2026</p>

        <section className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
          <div>
            <h2 className="text-base font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using SkillSphere, you agree to be bound by these Terms &amp;
              Conditions. If you do not agree, please do not use the platform.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">2. Use of the Platform</h2>
            <p className="mt-2">
              SkillSphere grants you a limited, non-exclusive, non-transferable license to access
              and use the platform for personal, non-commercial learning purposes. You may not
              resell, reproduce, or redistribute any course content without explicit permission.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">3. User Accounts</h2>
            <p className="mt-2">
              You are responsible for maintaining the confidentiality of your account credentials.
              Any activity that occurs under your account is your responsibility. Notify us
              immediately if you suspect unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">4. Course Content</h2>
            <p className="mt-2">
              All course content on SkillSphere is provided for educational purposes. While we
              strive for accuracy, we do not guarantee that all information is current or
              error-free. Instructors are responsible for the content they publish.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">5. Intellectual Property</h2>
            <p className="mt-2">
              All materials, logos, and content on SkillSphere are the intellectual property of
              SkillSphere or their respective owners. Unauthorized use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">6. Termination</h2>
            <p className="mt-2">
              We reserve the right to suspend or terminate your account at any time for violation
              of these terms or for any conduct we deem harmful to the platform or its users.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">7. Changes to Terms</h2>
            <p className="mt-2">
              We may update these Terms &amp; Conditions from time to time. Continued use of the
              platform after changes constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900">8. Contact</h2>
            <p className="mt-2">
              Questions about these terms? Reach us at{" "}
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

export default TermsPage;
