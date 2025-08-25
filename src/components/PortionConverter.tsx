import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PortionConverterProps {
  value: number;
  onChange: (value: number) => void;
  foodType?: string;
}

// Conversion tables (approximate values)
const conversions = {
  // Liquids (ml)
  liquid: {
    'ml': 1,
    'tsp': 5,
    'tbsp': 15,
    'cup': 240,
    'oz': 30
  },
  // Solids (grams)
  solid: {
    'g': 1,
    'tsp': 4,
    'tbsp': 12,
    'cup': 120,
    'oz': 28
  },
  // Rice/grains (grams)
  grain: {
    'g': 1,
    'tsp': 3,
    'tbsp': 9,
    'cup': 185,
    'oz': 28
  },
  // Sugar/powder (grams)
  powder: {
    'g': 1,
    'tsp': 4,
    'tbsp': 12,
    'cup': 125,
    'oz': 28
  }
};

export function PortionConverter({ value, onChange, foodType = 'solid' }: PortionConverterProps) {
  const [unit, setUnit] = useState('g');
  const [displayValue, setDisplayValue] = useState(value.toString());

  const getConversionTable = () => {
    const type = foodType.toLowerCase();
    if (type.includes('milk') || type.includes('juice') || type.includes('oil') || type.includes('water')) {
      return conversions.liquid;
    }
    if (type.includes('rice') || type.includes('grain') || type.includes('oat')) {
      return conversions.grain;
    }
    if (type.includes('sugar') || type.includes('flour') || type.includes('powder')) {
      return conversions.powder;
    }
    return conversions.solid;
  };

  const convertToGrams = (inputValue: number, fromUnit: string) => {
    const table = getConversionTable();
    return inputValue * (table[fromUnit as keyof typeof table] || 1);
  };

  const convertFromGrams = (grams: number, toUnit: string) => {
    const table = getConversionTable();
    return grams / (table[toUnit as keyof typeof table] || 1);
  };

  const handleValueChange = (newValue: string) => {
    setDisplayValue(newValue);
    const numValue = parseFloat(newValue) || 0;
    const gramsValue = convertToGrams(numValue, unit);
    onChange(gramsValue);
  };

  const handleUnitChange = (newUnit: string) => {
    const gramsValue = convertToGrams(parseFloat(displayValue) || 0, unit);
    const newDisplayValue = convertFromGrams(gramsValue, newUnit);
    setUnit(newUnit);
    setDisplayValue(newDisplayValue.toFixed(1));
  };

  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <Input
          type="number"
          value={displayValue}
          onChange={(e) => handleValueChange(e.target.value)}
          placeholder="Amount"
          className="h-8"
          step="0.1"
        />
      </div>
      <div className="w-20">
        <Select value={unit} onValueChange={handleUnitChange}>
          <SelectTrigger className="h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="g">g</SelectItem>
            <SelectItem value="tsp">tsp</SelectItem>
            <SelectItem value="tbsp">tbsp</SelectItem>
            <SelectItem value="cup">cup</SelectItem>
            <SelectItem value="oz">oz</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}