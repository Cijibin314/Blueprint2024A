const api_key = "sk-qLwq65e4bc5dc81e24444"
async function getData(id){
    return fetch(`https://perenual.com/api/species/details/${id}?key=${api_key}`).then(
        (res)=>{return res.json()}
    )
}
class Plant{
    constructor(plantName){
        this.name = plantName
        // sets id
        this.id=100
        for(let i = 1; i < 31; i++){
            for(let name of myNamesToIds[i]){
                if(name === plantName){
                    this.id = i
                }
            }
        }
        if(this.id === 100){
            this.id=30
        }
    }
    evaluateScore(){
        const data = getData(this.id)
        console.log(data)
    }
}
function getId(plantName){
    let id=100
        for(let i = 1; i < 31; i++){
            for(let name of myNamesToIds[i]){
                if(name === plantName){
                    id = i
                }
            }
        }
        if(id === 100){
            id=30
        }
    return id
}
let listOfScores = []
async function evaluateScore(id){
    console.log("input id:    " + id)
    
    const data = await getData(id);
    let score = 0;
    // checks
    if(data["watering"] === "Frequent"){
        score--;
    }
    if(data["watering"] === "Infrequent"){
        score++;
    }
    score += data["attracts"].length
    score -= data["pruning_month"].length / 4
    const propogation = data["propogation"]
    try{
        for(const method of propogation){
            switch(method){
                case "Cutting":
                    score--;
                    break;
                case "Layering Propagation":
                    score += 0.5;
                    break;
                case "Seed Propogation":
                    score += 1;
                    break;
            }
        }
    }catch(e){}
    console.log(score)
    score += 1
    score -= 1
    return score;
    
}
async function evaluateScoreFinal(name){
    const result = await evaluateScore(getId(name))
    console.log(result)
    setTimeout(()=>{console.log(result)},5000)
    return result
}
function getMainData(){
    return fetch(`https://perenual.com/api/species-list?key=${api_key}`).then((res)=>{
        return res.json()
    })
}
async function getAllData(){
    const result = await getMainData()
    const obj = await result["data"]
    return obj
}
let myNamesToIds = {}
async function fillObj(){
    const data = await getAllData()
    for(let i = 0; i < 30;i++){
        const plantData = data[i]
        let names = []
        for(const name of plantData["other_name"]){
            names.push(name)
        }
        for(const name of plantData["scientific_name"]){
            names.push(name)
        }
        names.push(plantData["common_name"])
        myNamesToIds[i + 1] = names
    }
}
setTimeout(()=>{fillObj()},200)
