import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LIFESCC</h3>
              <p className="text-gray-400">
                Doctor-guided weight management clinics across South India
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Bangalore</li>
                <li>Hyderabad</li>
                <li>Chennai</li>
                <li>Coimbatore</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">
                Book your free consultation today
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> for your health journey
            </p>
            <p className="mt-2">© {new Date().getFullYear()} LIFESCC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
