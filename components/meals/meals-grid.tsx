import { MealCard } from "./meal-card";

export function MealsGrid({meals}:{meals:[]}){
    
     return  <div className="grid grid-cols-3 gap-4">
           {meals?.map((item:any,index)=><MealCard key={index} {...item}/>)}
     </div>
}


