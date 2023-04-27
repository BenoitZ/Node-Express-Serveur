const fs = require('fs');

     
    if (/*fs.existsSync('./monDossier') ||*/ fs.existsSync('./monDossier/Node.txt')) {
        
        fs.unlink('./monDossier/Node.txt',(Error) => {   
            if (Error) {            
                console.log(Error);
            }
            else{
                console.log('Fichier supprimé');
            }     
            });
    
    //     fs.rmdir('./monDossier', (Error) => {     //-> si le dossier existe déja il l'effa
    //      if (Error) {
    //          console.error(Error);
    //      } else {
    //          console.log('Dossier supprimer');
    //      }
     
    // })
   }
   else{

    // fs.mkdir('./monDossier', (Error) => {  

    //         if (Error) {
    //             console.error(Error);

    //         } else {
    //             console.log('Dossier créé');
    //         }
    //         const fs = require('fs');
    //      });

    fs.writeFile('./monDossier/Node.txt', 'Du contenu ajouté avec Node', function(Error) {   
       if (Error) {            
           console.log(Error);
       }
       else{
           console.log('Fichier créé !');
       }     
       });
    }





        // fs.readFile('./monDossier/Node.txt', (Error, Data) => {     //pour que node lise un fichier
        //     if (Error) {            
        //         console.log(Error);
        //     }
        //     else{
        //         console.log(Data.toString);
        //     }     
        //     });

