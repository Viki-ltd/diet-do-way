import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  nutritionData?: any;
}

interface NutritionChatProps {
  onNutritionAdded: (nutrition: any) => void;
}

export function NutritionChat({ onNutritionAdded }: NutritionChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: "🤖 AI-Powered Nutrition Assistant (Please consult your doctor for medical advice)\n\nHi! I can help you track nutrition. Tell me what you ate or upload a photo! I can also suggest foods to meet your remaining macro targets.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { toast } = useToast();

  const extractNutritionFromText = async (text: string) => {
    // Mock NLP extraction - in production this would call an AI service
    const nutrition = {
      name: text.slice(0, 50) + (text.length > 50 ? "..." : ""),
      calories: Math.floor(Math.random() * 400) + 200,
      protein: Math.floor(Math.random() * 30) + 10,
      carbs: Math.floor(Math.random() * 40) + 15,
      fat: Math.floor(Math.random() * 20) + 5,
      fiber: Math.floor(Math.random() * 8) + 2,
      sugar: Math.floor(Math.random() * 15) + 2,
      sodium: Math.floor(Math.random() * 500) + 100,
      serving: "1 portion",
      mealType: "snack" as const
    };
    
    return nutrition;
  };

  const analyzeImage = async (file: File) => {
    // Mock image analysis - in production this would use AI vision
    const foods = [
      "Grilled chicken breast with vegetables",
      "Caesar salad with croutons",
      "Salmon with rice and broccoli",
      "Pasta with marinara sauce",
      "Greek yogurt with berries"
    ];
    
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    return {
      name: randomFood,
      calories: Math.floor(Math.random() * 500) + 300,
      protein: Math.floor(Math.random() * 35) + 15,
      carbs: Math.floor(Math.random() * 50) + 20,
      fat: Math.floor(Math.random() * 25) + 8,
      fiber: Math.floor(Math.random() * 10) + 3,
      sugar: Math.floor(Math.random() * 12) + 3,
      sodium: Math.floor(Math.random() * 600) + 200,
      serving: "1 serving",
      mealType: "lunch" as const
    };
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() && !selectedImage) return;

    setIsLoading(true);
    
    try {
      let nutrition;
      let userMessage = inputText;
      
      if (selectedImage) {
        userMessage = `[Image uploaded: ${selectedImage.name}]`;
        nutrition = await analyzeImage(selectedImage);
        setSelectedImage(null);
      } else {
        nutrition = await extractNutritionFromText(inputText);
      }

      // Add user message
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: userMessage,
        timestamp: new Date()
      };

      // Add bot response
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `I found: ${nutrition.name}\n📊 ${nutrition.calories} calories, ${nutrition.protein}g protein, ${nutrition.carbs}g carbs, ${nutrition.fat}g fat`,
        timestamp: new Date(),
        nutritionData: nutrition
      };

      setMessages(prev => [...prev, userMsg, botMsg]);
      setInputText("");
      
      // Pass nutrition data to parent
      onNutritionAdded(nutrition);
      
      toast({
        title: "Nutrition Added",
        description: `Added ${nutrition.name} to your log`,
      });

    } catch (error) {
      console.error('Error processing message:', error);
      toast({
        title: "Error",
        description: "Failed to process your request",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedImage(file);
        toast({
          title: "Image Selected",
          description: "Click send to analyze your meal photo",
        });
      } else {
        toast({
          title: "Invalid File",
          description: "Please select an image file",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Card className="h-96 flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-sage flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          Nutrition Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-2 mb-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-2 rounded-lg text-xs ${
                  message.type === 'user'
                    ? 'bg-sage text-white'
                    : 'bg-muted text-foreground'
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
                {message.nutritionData && (
                  <div className="mt-2 pt-2 border-t border-current/20">
                    <div className="font-medium">Nutrition Details:</div>
                    <div>Serving: {message.nutritionData.serving}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="space-y-2">
          {selectedImage && (
            <div className="flex items-center gap-2 p-2 bg-muted rounded text-xs">
              <ImageIcon className="h-3 w-3" />
              <span>{selectedImage.name}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedImage(null)}
                className="h-4 w-4 p-0 ml-auto"
              >
                ×
              </Button>
            </div>
          )}
          
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tell me what you ate..."
                className="pr-20 text-xs"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 flex gap-1">
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0" type="button">
                    <Upload className="h-3 w-3" />
                  </Button>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || (!inputText.trim() && !selectedImage)}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                >
                  {isLoading ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <Send className="h-3 w-3" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}