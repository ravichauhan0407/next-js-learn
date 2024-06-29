'use client';
import { useFormStatus } from "react-dom"

export default function MealFormSubmit(){
   const formStatus= useFormStatus();
    
    return <button type="submit" className="theme-bg p-3 rounded" disabled={formStatus.pending}>{formStatus.pending?'Submitting':'Share Meal'}</button>
}