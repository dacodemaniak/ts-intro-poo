class Main {
    /**
     * Attributs : caractéristiques associées à une classe
     */
    whoami: string = 'Je suis un Main';

    /**
     * Comportements : la façon dont se comporte un objet de la classe
     */
    constructor() {
        this.whoami = 'Something else, but in the class';
        console.log('Hello, je suis le constructeur de Main');
    }
}

/**
 * Exécution de l'application
 */
const myobj: Main = new Main(); // Instanciation de la classe <=> Créer un objet à partir de la classe
myobj.whoami = 'Jean-Luc';
console.log(myobj.whoami);

const otherobj: Main = new Main();
// otherobj.whoami = 'Un autre objet Main';
console.log(otherobj.whoami);