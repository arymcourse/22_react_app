const Nav = () => {
  const ListItems = [
    { name: "Home", url: "/" },
    { name: "News", url: "/" },
    { name: "Popular", url: "/" },
    { name: "Trending", url: "/" },
    { name: "Categories", url: "/" },
  ];


  return (
    <nav className="navigation">
      <ul className="navigationList">
        {ListItems.map(({ name, url }, i) => <li key={`${name}${i}`}><a href={url}>{name}</a></li>)}
      </ul>
    </nav>
  )
}

export default Nav;