export type City = {
    id : number , 
    name : string , 
    longitude : number , 
    latitude : number , 
    country_code : number , 
    timezone : string , 
    country : string 
    
}

export type Cities =City[]
export type info = {
    id : number , 
    name : string , 
    longitude : number , 
    latitude : number , 
    country_code : number , 
    timezone : string , 
    country : string 
    time : string , 
    temperature : number ,
    windspeed : number , 
    winddirection: number , 
}
export type allData = info[]