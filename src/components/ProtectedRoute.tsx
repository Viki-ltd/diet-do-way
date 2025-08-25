import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-earth flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-fresh-green/20 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Leaf className="w-8 h-8 text-fresh-green animate-pulse" />
              <span className="text-xl font-bold text-fresh-green">Loading...</span>
              <Leaf className="w-8 h-8 text-fresh-green animate-pulse" />
            </div>
            <p className="text-center text-muted-foreground">
              Connecting to your natural marketplace
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};