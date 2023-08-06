function milesToKm(miles){
    const km = miles * 1.60934;
    return km;
}
const johnsMiles = 600;
const johnsKm = milesToKm(johnsMiles);
console.log(johnsKm);