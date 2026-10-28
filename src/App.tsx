import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ActionCard from './components/ActionCard'
import PromptLab from './pages/PromptLab'

function App() {
  const [selectedTool, setSelectedTool] = useState('Dashboard')


  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Header name="Miguel" />

        <section className="welcome-section">
          <div>
            <p className="eyebrow">AI PLAYGROUND</p>
            <h2>Build. Experiment. Discover.</h2>
            <p className="welcome-text">
              A space to explore ideas, test prompts, and experiment with AI.
            </p>
          </div>
        </section>

        <section className="selected-tool">
          <p>Selected tool</p>
          <strong>{selectedTool}</strong>
        </section>
        {selectedTool === 'Prompt Lab' && <PromptLab />}

        <section className="quick-actions">
          <div className="section-heading">
            <h3>Quick actions</h3>
            <span>Start experimenting</span>
          </div>

          <div className="action-grid">
          <ActionCard
          icon="✦"
          title="Prompt Lab"
          description="Test and refine prompts"
          onClick={() => setSelectedTool('Prompt Lab')}
          />

         <ActionCard
         icon="💡"
         title="Generate an idea"
         description="Turn a thought into something new"
         onClick={() => setSelectedTool('Idea Generator')}
         />

         <ActionCard
         icon="◫"
         title="Analyze text"
         description="Explore and understand text"
         onClick={() => setSelectedTool('Text Analyzer')}
         />

         <ActionCard
         icon="◉"
         title="Start AI chat"
         description="Have a conversation with AI"
         onClick={() => setSelectedTool('AI Chat')}
         />
        </div>
        </section>

        <section className="recent-section">
          <div className="section-heading">
            <h3>Recent activity</h3>
            <span>Nothing here yet</span>
          </div>

          <div className="empty-state">
            <span className="empty-icon">◇</span>
            <h3>Your experiments will appear here</h3>
            <p>
              Start using the tools above and your activity will show up here.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
