import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateSitGetUpClassification = ({
    sitGetUpPercent,
}:Partial<IFunctionalBattery>) => {
    if(sitGetUpPercent > 70){
        return 'ÓTIMO'
    } else if (sitGetUpPercent > 54 ){
        return 'BOM'
    } else if (sitGetUpPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}