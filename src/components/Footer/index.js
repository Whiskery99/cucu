function getCurrentYear() {
    return new Date().getFullYear();
}

export default function Footer() {
    return (
        <footer className="w-full bg-[#111] border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and About Section */}
                    <div>
                        <a href="/" className="flex items-center mb-4">
                            <img src="./logos.png" className="h-10 w-auto mr-3" alt="Fratcht Logistics Logo" />
                            <span className="text-2xl font-bold text-white">Fratcht Logistics</span>
                        </a>
                        <p className="text-gray-400 text-sm leading-6">
                            Providing end-to-end logistics solutions to businesses worldwide, operating from over 45 locations.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-lg font-semibold text-[#fd961a] mb-4">Resources</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/" className="text-gray-300 hover:text-white transition">Fratcht Logistics</a>
                                </li>
                                <li>
                                    <a href="https://fratchtlogistics.com/" className="text-gray-300 hover:text-white transition">Deliveries</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-[#fd961a] mb-4">Follow Us</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition">Facebook</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-[#fd961a] mb-4">Contact Us</h2>
                        <p className="text-gray-400 text-sm mb-3">Manchester M14 5td 6 Wilmslow Road, Rusholme</p>
                        <p className="text-gray-400 text-sm mb-3">Phone: <span className="text-[#fd961a]"><a href="https://wa.me/+13044390475" target="_blank">+13044390475</a></span></p>
                        <p className="text-gray-400 text-sm">
                            Email: <a href="mailto:support@frachtlogistics.com" className="text-[#fd961a] hover:underline">support@frachtlogistics.com</a>
                        </p>
                    </div>
                </div>

                <hr className="my-10 border-gray-700" />

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <span>&copy; {getCurrentYear()} Fratcht Logistics™. All Rights Reserved.</span>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
