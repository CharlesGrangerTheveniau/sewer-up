export interface Corsage {
    stature: number;                    // Stature
    tour_de_poitrine: {                 // Tour de poitrine
        total: number;
        demi: number;                   // 1/2
        quart: number;                  // 1/4
    };
    tour_de_taille: {                   // Tour de taille
        total: number;
        demi: number;                   // 1/2
        quart: number;                  // 1/4
    };
    longueur_taille_dos: {              // Longueur taille dos
        total: number;
        demi: number;                   // 1/2
        demi_plus_un: number;           // 1/2 + 1
    };
    longueur_taille_devant: {           // Longueur taille devant
        total: number;
        moins_un: number;               // -1cm
    };
    encolure: {                         // Encolure
        total: number;
        sixieme: number;                // 1/6
        sixieme_plus_075: number;       // 1/6 + 0.75
        sixieme_plus_050: number;       // 1/6 + 0.50
    };
    longueur_epaule: number;            // Longueur d'épaule
    carrure_devant: {                   // Carrure devant
        total: number;
        demi: number;                   // 1/2
    };
    carrure_dos: {                      // Carrure dos
        total: number;
        demi: number;                   // 1/2
    };
    longueur_epaule_coude: number;      // Longueur épaule coude
    longueur_epaule_poignet: number;    // Longueur épaule poignet
    contour_bras: number;               // Contour bras
    passage_de_la_main: number;         // Passage de la main
    contour_tete: number;               // Contour tête
    hauteur_tete: number;               // Hauteur tête
}

export interface Pantalon {
    tour_de_taille: {                   // Tour de taille
        total: number;
        quart_plus_un: number;          // 1/4 taille + 1cm
        huitieme: number;               // 1/8 de taille
        seizieme: number;               // 1/16 de taille
    };
    hauteur_taille_genou: number;       // Hauteur taille-genou
    hauteur_taille_sol: number;         // Hauteur taille-sol
    hauteur_interieur_jambe: number;    // Hauteur intérieur jambe
    montant: {                          // Montant
        total: number;
        plus_un: number;                // Montant + 1cm
    };
    largeur_bas_pantalon: number;       // Largeur bas de pantalon
    passage_du_pied: number;            // Passage du pied
    longueur_du_pied: number;           // Longueur du pied
    hauteur_du_bassin: number;          // Hauteur du bassin
    contour_bassin: number;             // Contour bassin
}

export interface Cotes {
    corsage: Corsage;
    pantalon: Pantalon;
}


export type Gender = "baby" | "male" | "female";

export interface Measurements {
    gender: Gender,
    size: Size,
    measurements: Cotes,
}

export type Size = 1 | 3 | 6 | 9 | 12 | 18 | 24 | 36 | 48 | 60 | 72 | 84 | 96 | 108 | 120 | 132 | 144 | 156 | 168 | 180 | 192;

export const potentialSizes = [1, 3, 6, 9, 12, 18, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192]
