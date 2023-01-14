export interface CategoryType {
  id: string
  title: string
  color: string
}

export interface MealType {
  id: string
  categoryIds: string[]
  title: string
  affordability: string
  complexity: string
  imageUrl: string
  duration: number
  ingredients: string[]
  steps: string[]
  isGlutenFree: boolean
  isVegan: boolean
  isVegetarian: boolean
  isLactoseFree: boolean
}
