export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20">
      <div className="w-[80%] max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-white mb-6 text-lg">About</h4>
            <ul className="space-y-3">
              <li>
                <a href="#who-we-are" className="hover:text-white transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#beliefs" className="hover:text-white transition-colors">
                  Beliefs
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-white transition-colors">
                  Mission & Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white mb-6 text-lg">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <a href="#worship" className="hover:text-white transition-colors">
                  Sunday Worship
                </a>
              </li>
              <li>
                <a href="#bible-study" className="hover:text-white transition-colors">
                  Bible Study
                </a>
              </li>
              <li>
                <a href="#ministries" className="hover:text-white transition-colors">
                  Campus Ministries
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-6 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sermons" className="hover:text-white transition-colors">
                  Sermons
                </a>
              </li>
              <li>
                <a href="#daily-bread" className="hover:text-white transition-colors">
                  Daily Bread
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-white transition-colors">
                  Bible Study Materials
                </a>
              </li>
              <li>
                <a href="#member" className="hover:text-white transition-colors">
                  Member Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li>123 Main Street</li>
              <li>Los Angeles, CA 90001</li>
              <li className="pt-3">
                <a href="mailto:info@laubf.org" className="hover:text-white transition-colors">
                  info@laubf.org
                </a>
              </li>
              <li>
                <a href="tel:+13105551234" className="hover:text-white transition-colors">
                  (310) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 text-center">
          <p>© 2025 LA UBF. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}