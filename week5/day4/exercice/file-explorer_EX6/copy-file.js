const fs = require('fs');
// Lire le contenu du fichier source.txt
fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier source :', err);
        return;
    }
    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture dans destination.txt :', err);
        } else {
            console.log('Le contenu a été copié avec succès de source.txt vers destination.txt');
        }
    });
});
