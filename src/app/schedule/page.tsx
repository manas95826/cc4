export default function Schedule() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Event Schedule</h1>

      {/* Online Round - June 29th */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Online Round - June 29th, 2024</h2>
        <div className="space-y-6">
          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              9:00 AM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Virtual Check-in</h3>
              <p className="text-gray-700">Join the virtual platform and verify your setup</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              10:00 AM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Opening Ceremony</h3>
              <p className="text-gray-700">Welcome speech and event overview via live stream</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              11:00 AM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Problem Statement Release</h3>
              <p className="text-gray-700">Hackathon challenges and guidelines announced</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              12:00 PM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Hacking Begins!</h3>
              <p className="text-gray-700">Start building your amazing projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Round - July 5th */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Final Round - July 5th, 2024</h2>
        <div className="space-y-6">
          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              9:00 AM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Registration at Microsoft Office</h3>
              <p className="text-gray-700">Check-in and setup at the venue</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              10:00 AM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Welcome Address</h3>
              <p className="text-gray-700">Opening remarks by Microsoft representatives</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              11:00 AM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Project Presentations</h3>
              <p className="text-gray-700">Selected teams present their solutions</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              2:00 PM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Judging Session</h3>
              <p className="text-gray-700">Evaluation by industry experts</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-6 min-w-[120px] text-center">
              4:00 PM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Awards Ceremony</h3>
              <p className="text-gray-700">Announcement of winners and closing remarks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Activities */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Additional Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Online Round Activities</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Virtual Networking Sessions</li>
              <li>• Live Q&A with Mentors</li>
              <li>• Technical Workshops</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Final Round Activities</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Microsoft Office Tour</li>
              <li>• Networking with Industry Leaders</li>
              <li>• Career Opportunities Session</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 