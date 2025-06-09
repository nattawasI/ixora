import Link from 'next/link'

type CategoryCardProps = {
  title: string
  description: string
  href: string
}

const CategoryCard = ({ title, description, href }: CategoryCardProps) => {
  return (
    <div className="relative aspect-[3/4] p-7">
      <Link href={href} className="absolute inset-0" />
      {/* <Image {...image} alt={title} fill className="object-cover object-center" /> */}
      <div className="absolute right-0 bottom-0 left-0 space-y-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
        <button className="text-sm text-blue-500">Learn More →</button>
      </div>
    </div>
  )
}

export default CategoryCard
