class BoiteDeBonbons {
	constructor( bType1, bType2, bType1tout, bType2tout ) {
		this.bType1 = bType1;
		this.bType2 = bType2;
		this.bType1tout = bType1tout;
		this.bType2tout = bType2tout;
		this.compteur = this.bType1tout + this.bType2tout;
	}

	supprimer( nombre , type ) {
		if ( nombre <= 0 ) {
			alert( "Vous ne pouvez pas supprimer zéro ou une valeur négative!");
			return;
		} else {
			if ( type == 1 ) {
				if ( this.bType1tout < nombre) {
					alert( "Vous ne pouvez pas enlever plus que les bonbons existants de ce type dans le bac!");
					return;
				}
				this.bType1tout -= nombre;
				this.compteur -= nombre;
			}
			if ( type == 2 ) {
				if ( this.bType2tout < nombre) {
					alert( "Vous ne pouvez pas enlever plus que les bonbons existants de ce type dans le bac!");
					return;
				}
				this.bType2tout -= nombre;
				this.compteur -= nombre;
			} 
		}
	}

	ajouter( nombre , type ) {
		if ( nombre <= 0 ) {
			alert( "Vous ne pouvez pas ajouter zéro ou une valeur négative!");
			return;
		} else {
			if ( type == 1 ) {
				this.bType1tout += nombre;
				this.compteur += nombre;
			}
			if ( type == 2 ) {
				this.bType2tout += nombre;
				this.compteur += nombre;
			} 
		}
	}

}