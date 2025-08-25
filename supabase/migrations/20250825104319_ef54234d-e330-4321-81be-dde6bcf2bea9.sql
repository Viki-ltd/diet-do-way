-- Add columns for custom targets and standard meals to user_profiles table
ALTER TABLE public.user_profiles 
ADD COLUMN custom_calories_target integer,
ADD COLUMN custom_protein_target integer,
ADD COLUMN custom_carbs_target integer,
ADD COLUMN custom_fat_target integer,
ADD COLUMN custom_fiber_target integer,
ADD COLUMN standard_meals jsonb DEFAULT '[]'::jsonb;

-- Add restaurant vs home cooked indicator to food_entries table
ALTER TABLE public.food_entries 
ADD COLUMN preparation_type text DEFAULT 'home' CHECK (preparation_type IN ('home', 'restaurant'));

-- Add comprehensive micronutrients to food_entries table
ALTER TABLE public.food_entries 
ADD COLUMN vitamin_a numeric DEFAULT 0,
ADD COLUMN vitamin_c numeric DEFAULT 0,
ADD COLUMN vitamin_d numeric DEFAULT 0,
ADD COLUMN vitamin_e numeric DEFAULT 0,
ADD COLUMN vitamin_k numeric DEFAULT 0,
ADD COLUMN vitamin_b1 numeric DEFAULT 0,
ADD COLUMN vitamin_b2 numeric DEFAULT 0,
ADD COLUMN vitamin_b3 numeric DEFAULT 0,
ADD COLUMN vitamin_b6 numeric DEFAULT 0,
ADD COLUMN vitamin_b12 numeric DEFAULT 0,
ADD COLUMN folate numeric DEFAULT 0,
ADD COLUMN calcium numeric DEFAULT 0,
ADD COLUMN iron numeric DEFAULT 0,
ADD COLUMN magnesium numeric DEFAULT 0,
ADD COLUMN phosphorus numeric DEFAULT 0,
ADD COLUMN potassium numeric DEFAULT 0,
ADD COLUMN zinc numeric DEFAULT 0;