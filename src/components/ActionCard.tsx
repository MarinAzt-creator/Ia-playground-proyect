type ActionCardProps = {
  icon: string
  title: string
  description: string
  onClick: () => void
}

function ActionCard({
  icon,
  title,
  description,
  onClick,
}: ActionCardProps) {
  return (
    <button className="action-card" onClick={onClick}>
      <span className="action-icon">{icon}</span>

      <strong>{title}</strong>

      <span>{description}</span>
    </button>
  )
}

export default ActionCard