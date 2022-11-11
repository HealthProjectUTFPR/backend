import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateStationaryMarchClassification = ({
    stationaryMarchPercent,
}:Partial<IFunctionalBattery>) => {
    if(stationaryMarchPercent > 70){
        return 'ÓTIMO'
    } else if (stationaryMarchPercent > 54 ){
        return 'BOM'
    } else if (stationaryMarchPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}