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

const ride1=new Ride("Liam",20)
console.log(ride1)
console.log(ride1.calculateOil())