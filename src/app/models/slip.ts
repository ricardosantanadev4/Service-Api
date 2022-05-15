export interface Slip {
    id: number;
    advice: string;
}

//  slip: Slip; consegue acessar os atributos da interface Slip
export interface Root {
    slip: Slip;
}