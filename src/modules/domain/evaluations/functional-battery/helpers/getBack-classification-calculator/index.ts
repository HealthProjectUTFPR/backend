import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateGetBackClassification = ({
    getBackPercent,
}:Partial<IFunctionalBattery>) => {
    if(getBackPercent > 70){
        return 'ÓTIMO'
    } else if (getBackPercent > 54 ){
        return 'BOM'
    } else if (getBackPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}