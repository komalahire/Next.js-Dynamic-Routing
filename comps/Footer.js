import Link from 'next/link';

const Navbar = () => {
  return (
    <footer>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link legacyBehavior href="/"><a>Home</a></Link>
      <Link legacyBehavior href="/about"><a>About</a></Link>
      <Link  legacyBehavior href="/ninjas/"><a>Ninja Listing</a></Link>
    </footer>
);
}
 
export default Navbar;