function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-mark">✦</span>
        <span>AI Playground</span>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-label">WORKSPACE</p>

        <a href="#" className="nav-item active">
          <span>⌂</span>
          Dashboard
        </a>

        <a href="#" className="nav-item">
          <span>✦</span>
          Prompt Lab
        </a>

        <a href="#" className="nav-item">
          <span>💡</span>
          Idea Generator
        </a>

        <a href="#" className="nav-item">
          <span>◫</span>
          Text Analyzer
        </a>

        <a href="#" className="nav-item">
          <span>◉</span>
          AI Chat
        </a>

        <p className="nav-label">EXPLORE</p>

        <a href="#" className="nav-item">
          <span>◇</span>
          Experiments
        </a>

        <a href="#" className="nav-item">
          <span>▣</span>
          Analytics
        </a>
      </nav>

      <div className="sidebar-footer">
        <div className="user-card">
          <div className="avatar">M</div>

          <div>
            <strong>Marin</strong>
            <span>Free plan</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar