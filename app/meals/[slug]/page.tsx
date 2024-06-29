import { getProductBySlug } from "@/lib/meals"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"



 
// export const metadata: Metadata = {
//   title: 'Meal details',
//   description: 'meal details.....',
// }

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
 
  // fetch data
  const mealDetail = await  getProductBySlug(params.slug)
 
 
  return {
    title: mealDetail.title,
  }
}


export default  async function MealDetails({params}:{params:any}){

    const mealDetail = await  getProductBySlug(params.slug)
    if(!mealDetail){
       return notFound()
    }


    return <div className="p-4">
            <div className="flex gap-4">
                <div className="h-64 w-64 relative">
                    <Image src={mealDetail?.image} alt="" fill/>
                </div>
                <div className="flex flex-col gap-4">
                   <div className="text-4xl font-bold">{mealDetail?.title}</div>
                   <div>
                     <i>by {mealDetail?.creator}</i>
                   </div>
                   <div>
                    {mealDetail?.summary}
                   </div>
                </div>
            </div>
            <div>
                  <h1>Instructions</h1>
                  <div>
                    {mealDetail?.instructions}
                  </div>
                </div>
    </div>
  }