import sql from 'better-sqlite3'

const db = new sql('meals.db')


export async function getMeals(){
    await new  Promise((resolve,reject)=>setTimeout(resolve,200));
    return  db.prepare('SELECT * FROM meals').all()
}


export async function getProductBySlug(slug){
    await new  Promise((resolve,reject)=>setTimeout(resolve,200));
    return  db.prepare(`SELECT * FROM meals where slug = ?`).get(slug)
}