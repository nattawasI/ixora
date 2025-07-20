const BlockItem = ({ label, children }: { label: string; children?: React.ReactElement }) => {
  return (
    <div className="flex gap-x-5">
      <div className="typo-body-2 text-blue w-20 shrink-0">{label}</div>
      <div className="typo-body-2 flex-1 whitespace-pre-line">{children}</div>
    </div>
  )
}

export { BlockItem }
