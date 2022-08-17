type stepsType = {
  equipment: string[];
  ingredients: {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }[];
  number: number;
  step: string;
};

type analyzedInstructions = {
  name: string;
  steps: stepsType[];
};
type measuresTypes = {
  amount: number;
  unitShort: string;
  unitLong: string;
};

type extendedIngredientsType = {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: measuresTypes[];
  meta: string[];
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  unit: string;
};

export type fetchedData = {
  aggregateLikes: number;
  analyzedInstructions: analyzedInstructions[];
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: [];
  dairyFree: boolean;
  diets: string[];
  dishTypes: string[];
  extendedIngredients: extendedIngredientsType[];
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  license: string;
  lowFodmap: boolean;
  occasions: [];
  originalId: number | null;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
};
