interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
}

const CategoryCard = ({ icon, title, description }: CategoryCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex flex-col items-start text-left">
        <img
          src={icon}
          alt={`${title} icon`}
          className="h-20 w-20 mb-6 opacity-70 group-hover:opacity-100 transition-opacity"
        />
        <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
