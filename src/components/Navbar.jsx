const Navbar = () => {
  const link = [
    { name: "Hero", path: "#hero" },
    { name: "Skills", path: "#skills" },
    { name: "Project", path: "#project" },
  ];
  return (
    <nav className="grid grid-cols-2">
      <div>LOGO</div>

      <div>
        {link.map((links, index) => (
          <div className=" grid grid-cols-2" key={index}>
            <a href={links.path}>{links.name}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
