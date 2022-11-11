export interface IFunctionalBattery {
    sex: string;
    age: number;

    date: Date;
    sitGetUpResult: number;
    sitGetUpPercent: number;
    sitGetUpClassification: string;
    elbowFlexionResult: number;
    elbowFlexionPercent: number;
    elbowFlexionClassification: string;
    stationaryMarchResult: number;
    stationaryMarchPercent: number;
    stationaryMarchClassification: string;
    sitFeetResult: number;
    sitFeetPercent: number;
    sitFeetClassification: string;
    TUGResult: number;
    TUGPercent: number;
    TUGClassification: string;
    getBackResult: number;
    getBackPercent: number;
    getBackClassification: string;
}