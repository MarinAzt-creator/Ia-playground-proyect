type HeaderProps = {
  name: string
}

function Header({ name }: HeaderProps) {
  return (
    <header className="topbar">
      <div>
        <p className="breadcrumb">WORKSPACE / DASHBOARD</p>
        <h1>Good evening, {name}.</h1>
      </div>

      <button className="new-button">
        + New experiment
      </button>
    </header>
  )
}

export default Header