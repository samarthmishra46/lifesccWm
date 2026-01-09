import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#fff18a]  text-black py-12">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LIFESCC</h3>
              <p className="text-black">
                Doctor-guided weight management clinics across South India
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-black">
                <li>Bangalore</li>
                <li>Hyderabad</li>
                <li>Chennai</li>
                <li>Coimbatore</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-black mb-2">
                Book your free consultation today
              </p>
            </div>
          </div>

          <div className="border-t border-primary-600 pt-8 text-center text-black text-sm">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-accent-green" /> for your health journey
            </p>
            <p className="mt-2">© {new Date().getFullYear()} LIFESCC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
