// class is a blueprint which is use to create instances(object ber korar machine)
// object- real instance


// class lekhli boro Alphabet likte hoy

class Ride{
    rider: string;
    distance: number;

    constructor(rider:string, distance:number){
        this.rider = rider
        this.distance = distance
    }

    calculateOil(){
        return this.distance * 0.2
    }

}
//  class hocche pura object er bluePrint 

const ride1=new Ride("Liam",20)
// console.log(ride1)
// console.log(ride1.calculateOil())


// const ride2 = new Ride("siam",100)
// console.log(ride2)
// console.log(ride2.calculateOil())


// type Guard

function printId(id:number | string){
  if(typeof id=== "string"){
    console.log(id.toUpperCase())

  }
  else{
    console.log(id.toFixed(2))
  }
}

printId("abcd")
printId(30)