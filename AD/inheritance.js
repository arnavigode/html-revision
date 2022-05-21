function twoWheeler(brand, kmp) {
    this.brand=brand;
    this.kmp=kmp;
    this.getWheeles=function() {
      return "2 wheels"
    };
    this.getVehicleInfo=function() {
      return "Brand Name: " + this.brand + " Speed: " + this.kmp + " Type: 2   wheeler."
    };
   }
 
  function fourWheller(brand, kmp){
    this.brand=brand;
    this.kmp=kmp;
    this.getWheeles=function() {
      return "4 wheels"
    };
    this.getVehicleInfo=function() {
       return "Brand Name: " + this.brand + " Speed: " + this.kmp + " Type: 4 wheeler."
     };
   }
 
   fourWheller.fourWheller= new twoWheeler();
   fourWheller.prototype.constructor=fourWheller;
 
   var twoWheeler1 = new twoWheeler("Shine","125 kph");
   var fourWheller1 = new fourWheller("Audi","1000kph");
 
   console.log(twoWheeler1.getWheeles())
   console.log(fourWheller1.getWheeles())
 
   console.log(twoWheeler1.getVehicleInfo())
   console.log(fourWheller1.getVehicleInfo())