export default function Header() {
    return (
        <header className="p-4 bg-gray-900 text-white w-x1">
            <h1 className="text-2xl font-bold mb-2">My Personal Website</h1>
            <nav>
                <a href="/" className="text-white mr-4 hover:underline">Home</a>
                <a href="/about" className="text-white mr-4 hover:underline">About</a>
                <a href="/contact" className="text-white hover:underline">Contact</a>
            </nav>
        </header>
    );
}