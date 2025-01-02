let domain = "https://openstax.org/";

let domainExtensions = ["org", "com", "net", "edu", "co", "gov", "in", "biz"];
let use = ["Non-Profit Organization", "Commercial Businesses", "Network-related Entities", "Education institutions", ".com alternative", "Government", "India", "Businesses"];


for(let i = 0; i < domainExtensions.length; i++){
    if(domain.includes(`${domainExtensions[i]}`)){
        console.log(domain.indexOf(domainExtensions[i]));
        console.log(`The domain belongs to ${use[i]}`);
    }
}