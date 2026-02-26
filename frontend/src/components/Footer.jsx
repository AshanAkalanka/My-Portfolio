function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-100 via-white to-amber-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto text-center text-sm font-medium text-gray-700 dark:text-gray-400 transition-colors duration-300">
                © {new Date().getFullYear()} My Portfolio | All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
