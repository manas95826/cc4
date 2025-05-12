export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About Code Cubicle 4</h1>
      
      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Code Cubicle 4, where innovation meets technology! This premier hackathon event brings together
          the brightest minds in tech to create groundbreaking solutions that can change the world.
        </p>
        <p className="text-lg text-gray-700">
          Join us for an exciting two-phase competition: First, participate in our online round on June 29th, and if selected,
          showcase your skills at the grand finale at Microsoft Office, Hyderabad on July 5th!
        </p>
      </section>

      {/* Event Details Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Online Round</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>📅 Date: June 29th, 2024</li>
              <li>🌐 Format: Online</li>
              <li>⏰ Duration: 24 hours</li>
              <li>🎯 Purpose: Initial screening and selection</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Final Round</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>📅 Date: July 5th, 2024</li>
              <li>📍 Venue: Microsoft Office, Hyderabad</li>
              <li>🏆 Grand Finale Event</li>
              <li>🤝 Networking with Industry Experts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Theme</h2>
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Building the Future</h3>
          <p className="text-lg text-gray-700">
            This year's theme focuses on sustainable technology and innovative solutions for tomorrow's challenges.
            Projects can span various domains including:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Web3 & Blockchain</li>
            <li>Green Technology</li>
            <li>Healthcare Innovation</li>
            <li>Smart Cities</li>
          </ul>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Prizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-400">
            <h3 className="text-2xl font-bold mb-4">🥇 First Place</h3>
            <p className="text-gray-700">$5,000 + Microsoft Internship Opportunity</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h3 className="text-2xl font-bold mb-4">🥈 Second Place</h3>
            <p className="text-gray-700">$3,000 + Microsoft Swag</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-amber-600">
            <h3 className="text-2xl font-bold mb-4">🥉 Third Place</h3>
            <p className="text-gray-700">$1,000 + Microsoft Swag</p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Rules & Guidelines</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <ul className="space-y-4 text-lg text-gray-700">
            <li>• Teams can have 2-4 members</li>
            <li>• All code must be written during the hackathon</li>
            <li>• Use of open-source libraries is allowed</li>
            <li>• Projects must be submitted by the deadline</li>
            <li>• All team members must be registered participants</li>
            <li>• Selected teams must be available for the final round in Hyderabad</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">What happens if my team gets selected?</h3>
            <p className="text-gray-700">Selected teams will be invited to the final round at Microsoft Office, Hyderabad on July 5th. Travel arrangements and accommodation details will be provided to selected participants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Is the online round mandatory?</h3>
            <p className="text-gray-700">Yes, all participants must compete in the online round on June 29th to be considered for the final round in Hyderabad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">What should I bring for the final round?</h3>
            <p className="text-gray-700">For the final round in Hyderabad, bring your laptop, chargers, and any necessary hardware. Microsoft will provide the workspace and necessary resources.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">What if I don't have a team?</h3>
            <p className="text-gray-700">No worries! We'll help you find team members during our team formation session before the online round begins.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 