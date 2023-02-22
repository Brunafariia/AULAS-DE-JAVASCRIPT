// Estruturasa de seleção


let lang = "en" // pt, es e en

/*
Comentado a outra forma de fazer 
if(lang === "pt"){
    console.log("Olá mundo!");
} else if(lang === "es"){
    console.log("¡Hola mundo!");
} else if(lang === "en"){
    console.log("Hello World!");
} else{
    console.log("Não há suporte para essa línguagem");
} 
*/

switch(lang){
    case "pt":
        console.log("Olá mundo!");
        break
    case "es":
        console.log("¡Hola mundo!");
        break
    case "en":
        console.log("Hello World!");
        break
    default:
        console.log("Não há suporte para essa línguagem " + lang);
        break
}
