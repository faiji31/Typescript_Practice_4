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

// printId("abcd")
// printId(30)

type TDriver = {driverName:string};
type TAdmin = {role:string}

const Driver: TDriver ={driverName: "Jubaer"}
const admin: TAdmin ={role:"AdminName"}
function checkUser(user: TDriver | TAdmin){
    if("role" in user){
        console.log(admin.role)
    }
    else{
        console.log(Driver.driverName)
    }
}

// checkUser(Driver)


// Instance off

class Car{
    drive(){
    console.log("this is drive")
    }
}

class Bike{ 
    Ride(){
    console.log("this is bike")
    }
}

function operator(vechile: Car | Bike ){
    if(vechile instanceof Car){
        vechile.drive()
    }
    else{
        vechile.Ride()
    }
}
// operator(new Car())
// operator(new Bike())

// Access Modifier

class Drivers{
    name: string;
   private nid: string;
protected earnings: number;

    constructor(name:string,nid:string, earnings: number){
        this.name = name
        this.earnings = earnings
        this.nid = nid
    }

}
 const driver1 = new Drivers("Faiji","nid123",20000)

 console.log(driver1.name)

//  inheritance
 class ProDriver extends Drivers{
    certifiteDriver(){
        console.log("He is a Pro driver")
    }
    constructor(){

   
    super("siam","nid12333",10000)
    this.earnings = 340000;

 }
}

const nextDriver = new ProDriver()

console.log(nextDriver)


// getter and setter 

class Wallet {
    private _balance:number = 0;

    get balance(){
     return this._balance
    }

    set deposit(amount:number){
        if (amount>0){
            this._balance += amount;
        }
    }
}


const wlt = new Wallet();


wlt.deposit = 302;
console.log(wlt.balance)


// Polymorpisum > Bohurupi

class specialVecicle{
    calculateFare(distance:number):number{
        return distance * 10
    }
}

class specialCar extends specialVecicle{
  calculateFare(distance: number): number {
      return distance * 500 
  }
}


class PathaoBike extends specialVecicle{
 calculateFare(distance: number): number {
     return distance *200
 }
}

const instance1 = new specialVecicle()
const instance2 = new specialCar()
const instance3 = new PathaoBike()


console.log(instance1.calculateFare(12))
console.log(instance2.calculateFare(12))
console.log(instance3.calculateFare(12))
