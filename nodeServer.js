const http = require('http'); //on importe le module http
const fs = require('fs');     //on importe le module fs


const server = http.createServer((Requeste, Response) => {    //le callback a besoin de 2 parametres : requet et response
    console.log("Server created successfully");             // on utilise la methode createServer de l'objet global http
    
    let fichier = "";
    // console.log(Requeste.method);
    // console.log(Requeste.url);
    Response.setHeader("content-type", "text/html; charset=utf8");
    if (Requeste.url === '/' || Requeste.url === '/home' && Requeste.method === 'GET') {
        // console.log("Vous étes sur la home page"); 
        // Response.write('<p>Vous êtes sur la home page</p>');  
        fichier = "./HTML/index.html";
    } 
    else if(Requeste.url === '/profil' && Requeste.method === 'GET'){
        // console.log("Vous étes sur la page profil"); 
        // Response.write("<p>Vous êtes sur la page profil</p>");  
        fichier = "./HTML/profil.html";
    }
    else if(Requeste.url === '/contact' && Requeste.method === 'GET'){
        // console.log("Vous étes sur la page contact");  
        // Response.write("<p>Vous êtes sur la page contact</p>");  
        fichier = "./HTML/contact.html";
    }
    else if(Requeste.url === '/product' && Requeste.method === 'GET'){
        // console.log("Vous étes sur la page contact");  
        // Response.write("<p>Vous êtes sur la page contact</p>");  
        fichier = "./HTML/product.html";
    }
    else {
        // console.log("404 page non valide");
        // Response.write("404 page non valide");
        fichier = "./HTML/404.html";
    }
        fs.readFile(fichier, (Error, Data) => {     //pour que node lise un fichier
            if (Error) {            
                console.log(Error);
                Response.end();
            }
            else{
                Response.write(Data);
                Response.end();
            }     
            });
        });               


server.listen(8889, "localhost", ()=>{             //On se connecte au serveur 
    console.log("Server listening on port 8889");  // on utilise des methodes (ou verbes http) pour communiquer avec le serveur
});


