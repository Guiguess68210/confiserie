describe("BoiteDeBonbons", function() {
    var boite; // La variable Boite
    var bonbonTypes = [ "des Chamallows" , "des fraises Tagada" , "des Carambars au caramel" , "des Oursons guimauve au chocolat" , "des Têtes brûlées" , "des Dragibus" ];
    var max = bonbonTypes.length - 1;
    var cType1; // Le type du premièr Bonbon
    var cType2; // Le type du second Bonbon
    var bType1tout; // La quantité du premièr Bonbon
    var bType2tout; // La quantité du second Bonbon
    var action; // ajouter = 1; supprimer = 2;
    var combien; // combien de bonbons on va ajouter / supprimer
    var quelType; // 1 ou 2 - quel type
    var quelTypeNom;
    var awaitedResult;

    // Avant chaque test, nous créons des valeurs fixes ou aléatoires pour les types de bonbons, leur quantité et leur valeur ajoutée/supprimée
    function beforeEach() {
        cType1 = Math.floor((Math.random() * max) + 1);
        cType2 = 0;
        while (cType2 === 0 || cType2 == cType1) {
            cType2 = Math.floor((Math.random() * max) + 1);
        }
        bType1tout = Math.floor((Math.random() * 300) + 1);
        bType2tout = Math.floor((Math.random() * 300) + 1);
        action = Math.floor((Math.random() * 2) + 1);
        quelType = Math.floor((Math.random() * 2) + 1);
        if (quelType == 1) {
            quelTypeNom = bonbonTypes[cType1];
            combien = Math.floor((Math.random() * bType1tout) + 1); // pas plus que l'existant
        } else {
            quelTypeNom = bonbonTypes[cType2];
            combien = Math.floor((Math.random() * bType2tout) + 1); // pas plus que l'existant
        }
        if (action == 1) {
            awaitedResult = bType1tout + bType2tout + combien;
        } else {
            awaitedResult = bType1tout + bType2tout - combien;
        }
    };
    
    beforeEach();
    it("Lorsqu'un employé retire 20 bonbons d'une boîte plastique de 510 bonbons (d'un seul type de bonbon), il devrait y avoir 490 bonbons qui restent dans la boîte.", function() {
        boite = new BoiteDeBonbons(cType1, cType2, 510 , 0); // TypeUn, TypeDeux, quantiteTypeUn, quantiteTypeDeux
        boite.supprimer(20 , 1); // supprimer( nombre , type )
        expect(boite.compteur).toEqual(490); // il devrait y avoir 490 bonbons qui restent dans la boîte
    });
    
    beforeEach();
    it("Quand un employé ajoute 600 bonbons à une boîte qui contient 4 bonbons (d'un seul type de bonbon), il devrait y avoir 604 bonbons dans la boîte.", function() {
        boite = new BoiteDeBonbons(cType1, cType2, 0 , 4); // TypeUn, TypeDeux, quantiteTypeUn, quantiteTypeDeux
        boite.ajouter(600 , 1); // ajouter( nombre , type )
        expect(boite.compteur).toEqual(604); // il devrait y avoir 604 bonbons qui restent dans la boîte
    });
    
    for (var i = 1; i <= 20; i++) {
        beforeEach();
        if (action == 1) { var motAction = "ajoute"; } else { var motAction = "retire"; };
        it("TEST ALÉATOIRE #" + i + ": Lorsqu'un " + motAction + " " + combien + " bonbons d'une boîte plastique de " + (bType1tout + bType2tout) + " bonbons (de type " + quelTypeNom + "), il devrait y avoir " + awaitedResult + " bonbons qui restent dans la boîte.", function() {
            boite = new BoiteDeBonbons(cType1, cType2, bType1tout , bType2tout);
            if (action == 1) {
                boite.ajouter(combien , quelType);
            } else {
                boite.supprimer(combien , quelType);
            }
            expect(boite.compteur).toEqual(awaitedResult);
        });
    };
    
});