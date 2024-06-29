import { MealsGrid } from "@/components/meals/meals-grid";
import {getMeals } from '@/lib/meals'

export default async function Meals(){

    const meals= await getMeals()

    return    <main className="flex flex-col  justify-between px-24 gap-10">
                <a href="/meals/share">
                 <h1 className="text-4xl theme-bg w-max p-2 rounded-md "> Share your favorite meal</h1>
                 </a>
            <MealsGrid meals={meals}/>
    </main>
}