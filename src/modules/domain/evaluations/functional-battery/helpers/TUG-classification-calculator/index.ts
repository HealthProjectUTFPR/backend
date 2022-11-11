import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateTUGClassification = ({
    TUGPercent,
}:Partial<IFunctionalBattery>) => {
    if(TUGPercent > 70){
        return 'ÓTIMO'
    } else if (TUGPercent > 54 ){
        return 'BOM'
    } else if (TUGPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}