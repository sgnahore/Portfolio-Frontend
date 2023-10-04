import "./NavBar.css"

export function NavBar(): JSX.Element {

    return(
        <>
   <div className="header">
<div className="logo">Stephanie Gnahore</div>
<div className="nav-links">
  <a href="/projects">Projects</a>
  <a href="/more">More</a>
  <a href="/">Home</a>
</div>
</div>
        </>
    )
}
