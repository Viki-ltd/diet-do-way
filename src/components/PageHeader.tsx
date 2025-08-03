import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  stats?: { label: string; value: string }[];
}

const PageHeader = ({ title, description, imageUrl, badge, stats }: PageHeaderProps) => {
  return (
    <div className="relative h-64 overflow-hidden bg-gradient-to-r from-fresh-green to-sage">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-fresh-green/90 to-sage/90" />
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-center w-full space-y-4">
          {badge && (
            <Badge className="bg-warm-orange text-natural-beige font-semibold px-4 py-2">
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
          
          {stats && (
            <div className="flex justify-center gap-8 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;