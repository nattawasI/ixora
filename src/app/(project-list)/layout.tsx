export default function ProjectListLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="px-4 max-lg:pt-5 max-lg:pb-6 lg:px-10">{children}</div>
}
