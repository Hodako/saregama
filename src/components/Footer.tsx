const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">Our Mission</a></li>
            <li><a href="/team" className="hover:text-blue-400">Team</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="/tutorials" className="hover:text-blue-400">Tutorials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:text-blue-400">Privacy</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms</a></li>
            <li><a href="/cookies" className="hover:text-blue-400">Cookies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            <a href="#" className="hover:text-blue-400"><Github /></a>
          </div>
          <div className="mt-4">
            <p className="text-sm">Subscribe to our newsletter</p>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="mt-2 px-4 py-2 w-full rounded bg-gray-800 text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
