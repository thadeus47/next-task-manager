import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/add" className="hover:underline">
            Add Task
          </Link>
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;