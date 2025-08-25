import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Pill, Trash2, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Supplement {
  id: string;
  name: string;
  type: 'vitamin' | 'mineral' | 'supplement';
  dosage: string;
  unit: string;
  timestamp: Date;
  notes?: string;
}

interface VitaminLoggerProps {
  supplements: Supplement[];
  onSupplementsUpdate: (supplements: Supplement[]) => void;
}

export function VitaminLogger({ supplements, onSupplementsUpdate }: VitaminLoggerProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newSupplement, setNewSupplement] = useState({
    name: '',
    type: 'vitamin' as 'vitamin' | 'mineral' | 'supplement',
    dosage: '',
    unit: 'mg',
    notes: ''
  });
  const { toast } = useToast();

  const commonSupplements = [
    { name: 'Vitamin D3', type: 'vitamin', unit: 'IU' },
    { name: 'Vitamin B12', type: 'vitamin', unit: 'mcg' },
    { name: 'Vitamin C', type: 'vitamin', unit: 'mg' },
    { name: 'Omega-3', type: 'supplement', unit: 'mg' },
    { name: 'Magnesium', type: 'mineral', unit: 'mg' },
    { name: 'Zinc', type: 'mineral', unit: 'mg' },
    { name: 'Iron', type: 'mineral', unit: 'mg' },
    { name: 'Calcium', type: 'mineral', unit: 'mg' },
    { name: 'Multivitamin', type: 'vitamin', unit: 'tablet' },
    { name: 'Probiotics', type: 'supplement', unit: 'billion CFU' }
  ];

  const addSupplement = () => {
    if (!newSupplement.name || !newSupplement.dosage) {
      toast({
        title: "Missing Information",
        description: "Please enter supplement name and dosage",
        variant: "destructive"
      });
      return;
    }

    const supplement: Supplement = {
      id: Date.now().toString(),
      name: newSupplement.name,
      type: newSupplement.type,
      dosage: newSupplement.dosage,
      unit: newSupplement.unit,
      timestamp: new Date(),
      notes: newSupplement.notes
    };

    onSupplementsUpdate([...supplements, supplement]);
    setNewSupplement({ name: '', type: 'vitamin', dosage: '', unit: 'mg', notes: '' });
    setIsAdding(false);
    
    toast({
      title: "Supplement Logged",
      description: `${supplement.name} has been added to your daily log`,
    });
  };

  const deleteSupplement = (id: string) => {
    onSupplementsUpdate(supplements.filter(s => s.id !== id));
    toast({
      title: "Supplement Removed",
      description: "Supplement has been removed from your log",
    });
  };

  const selectCommonSupplement = (supplement: any) => {
    setNewSupplement(prev => ({
      ...prev,
      name: supplement.name,
      type: supplement.type,
      unit: supplement.unit
    }));
  };

  const getTodaysSupplements = () => {
    const today = new Date().toDateString();
    return supplements.filter(s => s.timestamp.toDateString() === today);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'vitamin': return <Zap className="h-3 w-3" />;
      case 'mineral': return <Pill className="h-3 w-3" />;
      default: return <Pill className="h-3 w-3" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'vitamin': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'mineral': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-purple-100 text-purple-700 border-purple-200';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Vitamins & Supplements</CardTitle>
          <Button 
            size="sm" 
            onClick={() => setIsAdding(!isAdding)}
            className="bg-sage hover:bg-sage/90"
          >
            <Plus className="h-3 w-3 mr-1" />
            Add
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {isAdding && (
          <div className="border rounded-lg p-3 space-y-3 bg-muted/20">
            <div className="text-xs font-medium">Quick Add Common Supplements</div>
            <div className="grid grid-cols-2 gap-1">
              {commonSupplements.map((supplement, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="h-6 text-xs justify-start"
                  onClick={() => selectCommonSupplement(supplement)}
                >
                  {getTypeIcon(supplement.type)}
                  <span className="ml-1">{supplement.name}</span>
                </Button>
              ))}
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div>
                <Label className="text-xs">Supplement Name</Label>
                <Input
                  value={newSupplement.name}
                  onChange={(e) => setNewSupplement(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Vitamin D3"
                  className="h-8"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Label className="text-xs">Type</Label>
                  <Select 
                    value={newSupplement.type} 
                    onValueChange={(value: any) => setNewSupplement(prev => ({ ...prev, type: value }))}
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vitamin">Vitamin</SelectItem>
                      <SelectItem value="mineral">Mineral</SelectItem>
                      <SelectItem value="supplement">Supplement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-xs">Dosage</Label>
                  <Input
                    value={newSupplement.dosage}
                    onChange={(e) => setNewSupplement(prev => ({ ...prev, dosage: e.target.value }))}
                    placeholder="1000"
                    className="h-8"
                  />
                </div>
                
                <div>
                  <Label className="text-xs">Unit</Label>
                  <Select 
                    value={newSupplement.unit} 
                    onValueChange={(value) => setNewSupplement(prev => ({ ...prev, unit: value }))}
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mg">mg</SelectItem>
                      <SelectItem value="mcg">mcg</SelectItem>
                      <SelectItem value="IU">IU</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="tablet">tablet</SelectItem>
                      <SelectItem value="capsule">capsule</SelectItem>
                      <SelectItem value="billion CFU">billion CFU</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label className="text-xs">Notes (optional)</Label>
                <Input
                  value={newSupplement.notes}
                  onChange={(e) => setNewSupplement(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="With breakfast"
                  className="h-8"
                />
              </div>
              
              <div className="flex gap-2">
                <Button onClick={addSupplement} size="sm" className="flex-1 bg-sage hover:bg-sage/90">
                  Log Supplement
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsAdding(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <div>
          <div className="text-xs font-medium mb-2">Today's Supplements</div>
          {getTodaysSupplements().length === 0 ? (
            <p className="text-xs text-muted-foreground text-center py-3">
              No supplements logged today
            </p>
          ) : (
            <div className="space-y-2">
              {getTodaysSupplements().map((supplement) => (
                <div key={supplement.id} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center gap-2">
                    <Badge className={`text-xs ${getTypeColor(supplement.type)}`}>
                      {getTypeIcon(supplement.type)}
                      <span className="ml-1">{supplement.type}</span>
                    </Badge>
                    <div>
                      <div className="text-xs font-medium">{supplement.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {supplement.dosage} {supplement.unit}
                        {supplement.notes && ` • ${supplement.notes}`}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteSupplement(supplement.id)}
                    className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}