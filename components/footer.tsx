export default function Footer() {
  return (
    <footer className="bg-card border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4">DSC BVCOE</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Fostering innovation and technical excellence through community-driven learning.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/events" className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-foreground/60 hover:text-cyan-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="https://x.com/dsc_bvp" className="text-foreground/60 hover:text-cyan-400 transition-colors text-sm">
                Twitter
              </a>
              <a href="https://www.youtube.com/@dscbvp4633" className="text-foreground/60 hover:text-cyan-400 transition-colors text-sm">
                Youtube
              </a>
              <a href="https://www.instagram.com/gdscbvp?igsh=MXF3aW5tbzByMnRraQ==" className="text-foreground/60 hover:text-cyan-400 transition-colors text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/10 pt-8 text-center text-foreground/60 flex items-center justify-center gap-2 flex-wrap">
          <span>© 2025 Developer Student Club BVCOE | Built by SPIDERMAN</span>
        </div>
      </div>
    </footer>
  )
}
