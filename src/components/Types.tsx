export type fetchedData = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  summary: string;
  instructions: string;
  extendedIngredients: { id: number; original: string }[];
};

export type Suggestions = {
  imageType: string;
  id: number;
  title: string;
};
