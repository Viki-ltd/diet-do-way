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
    <div className="relative h-80 w-full overflow-hidden bg-sage/10">
      <div className="absolute inset-0 bg-sage/5" />
      
      <div className="relative w-full px-6 md:px-12 h-full flex items-center">
        <div className="text-center w-full space-y-6">
          {badge && (
            <Badge className="bg-sage text-white font-semibold px-6 py-2 text-sm">
              {badge}
            </Badge>
          )}
          <h1 className="text-5xl md:text-6xl font-bold text-sage mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-sage/80 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {stats && (
            <div className="flex justify-center gap-8 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-sage">{stat.value}</div>
                  <div className="text-sm text-sage/70">{stat.label}</div>
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