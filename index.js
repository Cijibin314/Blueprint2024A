// before changes
async function getData(id){
    return fetch(`https://perenual.com/api/species/details/${id}?key=sk-XLdE65e4881903b474433`).then(
        (res)=>{return res.json()}
    )
}
/*const myVar = getData(1)
console.log(myVar["care_level"])*/
//console.log((await getData(1))["care_level"])

class Plant{
    constructor(plantName){
        
            this.name = plantName
        // finds id
        this.id=100
        //for(let i = 0; i < 1; i++){
            getData(5).then((result)=>{
                console.log(result)
                if((result["common_name"] === plantName) || (result["scientific_name"] === plantName)){
                    this.id = 5
                }
            })
            // busy work
            /*for(let i = 0; i < 1000; i++){
                const l = Math.sqrt(i + 12 * 15) 
            }*/
        //}
        if(this.id === 100){
            this.id = 0
        }
        console.log(this.id)
        
    }
}


function getMainData(){
    return fetch("https://perenual.com/api/species-list?key=sk-XLdE65e4881903b474433").then(
        (res)=>{return res.json()}
    )
}
