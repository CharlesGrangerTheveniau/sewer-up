import type { Cotes, Gender, Size  } from "./types";

interface BaseTableData {
    stature: number;
    tour_de_poitrine: number;
    tour_de_taille: number;
    tour_des_hanches: number;
    long_cote_pantalon: number;
}

export const BASE_MEASUREMENTS: Record<Gender, Partial<Record<Size, BaseTableData>>> = {
    "baby": {
        1: {
            stature: 56,
            tour_de_poitrine: 45,
            tour_de_taille: 42,
            tour_des_hanches: 46,
            long_cote_pantalon: 27.5
        },
        3: {
            stature: 62,
            tour_de_poitrine: 47,
            tour_de_taille: 44,
            tour_des_hanches: 48,
            long_cote_pantalon: 31
        },
        6: {
            stature: 68,
            tour_de_poitrine: 49,
            tour_de_taille: 46,
            tour_des_hanches: 50,
            long_cote_pantalon: 34.5
        },
        9: {
            stature: 74,
            tour_de_poitrine: 51,
            tour_de_taille: 48,
            tour_des_hanches: 52,
            long_cote_pantalon: 38
        },
        12: {
            stature: 80,
            tour_de_poitrine: 53,
            tour_de_taille: 50,
            tour_des_hanches: 54,
            long_cote_pantalon: 41.5
        },
        18: {
            stature: 86,
            tour_de_poitrine: 55,
            tour_de_taille: 52,
            tour_des_hanches: 56,
            long_cote_pantalon: 45
        }
    },
    "male": {
        24: {  // 2 years
            stature: 92,
            tour_de_poitrine: 56,
            tour_de_taille: 52.6,
            tour_des_hanches: 57.6,
            long_cote_pantalon: 49.4
        },
        36: {  // 3 years
            stature: 98,
            tour_de_poitrine: 57,
            tour_de_taille: 53.2,
            tour_des_hanches: 59.2,
            long_cote_pantalon: 53.8
        },
        48: {  // 4 years
            stature: 104,
            tour_de_poitrine: 58,
            tour_de_taille: 53.8,
            tour_des_hanches: 60.8,
            long_cote_pantalon: 58.2
        },
        60: {  // 5 years
            stature: 110,
            tour_de_poitrine: 59,
            tour_de_taille: 54.4,
            tour_des_hanches: 62.4,
            long_cote_pantalon: 62.6
        },
        72: {  // 6 years
            stature: 116,
            tour_de_poitrine: 60,
            tour_de_taille: 55,
            tour_des_hanches: 64,
            long_cote_pantalon: 67
        },
        84: {  // 7 years
            stature: 122,
            tour_de_poitrine: 63,
            tour_de_taille: 57.4,
            tour_des_hanches: 67,
            long_cote_pantalon: 71.2
        },
        96: {  // 8 years
            stature: 128,
            tour_de_poitrine: 66,
            tour_de_taille: 59.8,
            tour_des_hanches: 70,
            long_cote_pantalon: 75.4
        },
        108: {  // 9 years
            stature: 134,
            tour_de_poitrine: 69,
            tour_de_taille: 62.2,
            tour_des_hanches: 73,
            long_cote_pantalon: 79.6
        },
        120: {  // 10 years
            stature: 140,
            tour_de_poitrine: 72,
            tour_de_taille: 64.6,
            tour_des_hanches: 76,
            long_cote_pantalon: 83.4
        },
        132: {  // 11 years
            stature: 146,
            tour_de_poitrine: 75,
            tour_de_taille: 67,
            tour_des_hanches: 79,
            long_cote_pantalon: 87.2
        },
        144: {  // 12 years
            stature: 152,
            tour_de_poitrine: 78,
            tour_de_taille: 69.4,
            tour_des_hanches: 82,
            long_cote_pantalon: 91
        },
        156: {  // 13 years
            stature: 158,
            tour_de_poitrine: 81,
            tour_de_taille: 71.8,
            tour_des_hanches: 85,
            long_cote_pantalon: 94.8
        },
        168: {  // 14 years
            stature: 164,
            tour_de_poitrine: 84,
            tour_de_taille: 74.2,
            tour_des_hanches: 88,
            long_cote_pantalon: 98.6
        },
        180: {  // 15 years
            stature: 170,
            tour_de_poitrine: 87,
            tour_de_taille: 76.8,
            tour_des_hanches: 91,
            long_cote_pantalon: 102.4
        },
        192: {  // 16 years
            stature: 176,
            tour_de_poitrine: 90,
            tour_de_taille: 79,
            tour_des_hanches: 94,
            long_cote_pantalon: 106.2
        }
    },
    "female": {
        24: {  // 2 years
            stature: 92,
            tour_de_poitrine: 56,
            tour_de_taille: 52.6,
            tour_des_hanches: 57.6,
            long_cote_pantalon: 49.5
        },
        36: {  // 3 years
            stature: 98,
            tour_de_poitrine: 57,
            tour_de_taille: 53.2,
            tour_des_hanches: 59.2,
            long_cote_pantalon: 54
        },
        48: {  // 4 years
            stature: 104,
            tour_de_poitrine: 58,
            tour_de_taille: 53.8,
            tour_des_hanches: 60.8,
            long_cote_pantalon: 58.5
        },
        60: {  // 5 years
            stature: 110,
            tour_de_poitrine: 59,
            tour_de_taille: 54.4,
            tour_des_hanches: 62.4,
            long_cote_pantalon: 63
        },
        72: {  // 6 years
            stature: 116,
            tour_de_poitrine: 60,
            tour_de_taille: 55,
            tour_des_hanches: 64,
            long_cote_pantalon: 67.5
        },
        84: {  // 7 years
            stature: 122,
            tour_de_poitrine: 62,
            tour_de_taille: 56.5,
            tour_des_hanches: 66.5,
            long_cote_pantalon: 72
        },
        96: {  // 8 years
            stature: 128,
            tour_de_poitrine: 64,
            tour_de_taille: 58,
            tour_des_hanches: 69,
            long_cote_pantalon: 76.5
        },
        108: {  // 9 years
            stature: 134,
            tour_de_poitrine: 66,
            tour_de_taille: 59.5,
            tour_des_hanches: 71.5,
            long_cote_pantalon: 81
        },
        120: {  // 10 years
            stature: 140,
            tour_de_poitrine: 68,
            tour_de_taille: 61,
            tour_des_hanches: 74,
            long_cote_pantalon: 85.5
        },
        132: {  // 11 years
            stature: 146,
            tour_de_poitrine: 72,
            tour_de_taille: 63,
            tour_des_hanches: 78,
            long_cote_pantalon: 89.5
        },
        144: {  // 12 years
            stature: 152,
            tour_de_poitrine: 76,
            tour_de_taille: 65,
            tour_des_hanches: 82,
            long_cote_pantalon: 93.5
        },
        156: {  // 13 years
            stature: 158,
            tour_de_poitrine: 80,
            tour_de_taille: 67,
            tour_des_hanches: 86,
            long_cote_pantalon: 97.5
        },
        168: {  // 14 years
            stature: 164,
            tour_de_poitrine: 84,
            tour_de_taille: 69,
            tour_des_hanches: 90,
            long_cote_pantalon: 101.5
        },
        180: {  // 15 years
            stature: 170,
            tour_de_poitrine: 88,
            tour_de_taille: 71,
            tour_des_hanches: 94,
            long_cote_pantalon: 105.5
        },
        192: {  // 16 years
            stature: 176,
            tour_de_poitrine: 92,
            tour_de_taille: 73,
            tour_des_hanches: 98,
            long_cote_pantalon: 109.5
        }
    }
};

export function generateMeasurements(age: Size, gender: Gender = "baby", customBase?: BaseTableData): Cotes {
    console.log('generating measurements for ', age, gender, customBase)
    const baseData = BASE_MEASUREMENTS[gender][age];
    
    if (!baseData) {
        throw new Error(`No base measurements found for age ${age} and gender ${gender}`);
    }

    const base = {
        ...baseData,
        ...customBase
    };

    // Helper function to round to 1 decimal place
    const round = (num: number) => Math.round(num * 10) / 10;

    return {
        corsage: {
            stature: round(base.stature),
            tour_de_poitrine: {
                total: round(base.tour_de_poitrine),
                demi: round(base.tour_de_poitrine / 2),
                quart: round(base.tour_de_poitrine / 4)
            },
            tour_de_taille: {
                total: round(base.tour_de_taille),
                demi: round(base.tour_de_taille / 2),
                quart: round(base.tour_de_taille / 4)
            },
            longueur_taille_dos: {
                total: round(base.stature / 4),
                demi: round(base.stature / 8),
                demi_plus_un: round((base.stature / 8) + 1)
            },
            longueur_taille_devant: {
                total: round((base.stature / 4) - 1),
                moins_un: round((base.stature / 4) - 2)
            },
            encolure: {
                total: round(base.tour_de_poitrine / 3),
                sixieme: round(base.tour_de_poitrine / 18),
                sixieme_plus_075: round((base.tour_de_poitrine / 18) + 0.75),
                sixieme_plus_050: round((base.tour_de_poitrine / 18) + 0.50)
            },
            longueur_epaule: round(base.stature / 9),
            carrure_devant: {
                total: round(base.tour_de_poitrine / 3),
                demi: round(base.tour_de_poitrine / 6)
            },
            carrure_dos: {
                total: round((base.tour_de_poitrine / 3) + 1),
                demi: round((base.tour_de_poitrine / 6) + 0.5)
            },
            longueur_epaule_coude: round(base.stature / 4),
            longueur_epaule_poignet: round(base.stature / 3),
            contour_bras: round(base.tour_de_poitrine / 4),
            passage_de_la_main: round((base.tour_de_poitrine / 4) - 2),
            contour_tete: round(base.stature * 0.625),
            hauteur_tete: round(base.stature / 5)
        },
        pantalon: {
            tour_de_taille: {
                total: round(base.tour_de_taille),
                quart_plus_un: round((base.tour_de_taille / 4) + 1),
                huitieme: round(base.tour_de_taille / 8),
                seizieme: round(base.tour_de_taille / 16)
            },
            hauteur_taille_genou: round(base.long_cote_pantalon * 0.66),
            hauteur_taille_sol: round(base.long_cote_pantalon),
            hauteur_interieur_jambe: round(base.long_cote_pantalon / 2),
            montant: {
                total: round(base.long_cote_pantalon - (base.long_cote_pantalon / 2)),
                plus_un: round(base.long_cote_pantalon - (base.long_cote_pantalon / 2)) + 1
            },
            largeur_bas_pantalon: round(base.tour_des_hanches / 4),
            passage_du_pied: round((base.tour_des_hanches / 4) - 1),
            longueur_du_pied: round(base.stature / 7),
            hauteur_du_bassin: round(base.stature / 5),
            contour_bassin: round(base.tour_des_hanches)
        }
    }
}
/* export const oneMonthBaby: Measurements = {
    gender: Gender.baby,
    age: Sizes["1M"],
    measurements: {
        corsage: {
            stature: 56,                    // From table
            tour_de_poitrine: {             // From table: 45cm
                total: 45,
                demi: 22.5,                 // 45/2
                quart: 11.25                // 45/4
            },
            tour_de_taille: {               // From table: 42cm
                total: 42,
                demi: 21,                   // 42/2
                quart: 10.5                 // 42/4
            },
            longueur_taille_dos: {          // Typically ~1/4 of stature
                total: 14,
                demi: 7,
                demi_plus_un: 8
            },
            longueur_taille_devant: {       // Slightly shorter than back
                total: 13,
                moins_un: 12
            },
            encolure: {                     // Typically ~1/3 of chest
                total: 15,
                sixieme: 2.5,
                sixieme_plus_075: 3.25,
                sixieme_plus_050: 3
            },
            longueur_epaule: 6,            // ~1/9 of stature // to review
            carrure_devant: {               // ~1/3 of chest
                total: 15,
                demi: 7.5
            },
            carrure_dos: {                  // Slightly larger than front
                total: 16,
                demi: 8
            },
            longueur_epaule_coude: 13,     // ~1/4 of stature
            longueur_epaule_poignet: 20,   // ~1/3 of stature
            contour_bras: 12,              // ~1/4 of chest
            passage_de_la_main: 10,        // Slightly smaller than arm
            contour_tete: 35,              // Standard for 1M
            hauteur_tete: 12               // ~1/5 of stature
        },
        pantalon: {
            tour_de_taille: {               // From table: 42cm
                total: 42,
                quart_plus_un: 11.5,        // (42/4) + 1
                huitieme: 5.25,             // 42/8
                seizieme: 2.625             // 42/16
            },
            hauteur_taille_genou: 17,       // ~2/3 of side length
            hauteur_taille_sol: 27.5,       // From table
            hauteur_interieur_jambe: 13,    // ~1/2 of side length
            montant: {                      // ~1/3 of hip measurement
                total: 15,
                plus_un: 16
            },
            largeur_bas_pantalon: 11,      // ~1/4 of hip
            passage_du_pied: 10,           // Slightly smaller than pant bottom
            longueur_du_pied: 8,           // ~1/7 of stature
            hauteur_du_bassin: 12,         // ~1/5 of stature
            contour_bassin: 46             // From table
        }
    } */