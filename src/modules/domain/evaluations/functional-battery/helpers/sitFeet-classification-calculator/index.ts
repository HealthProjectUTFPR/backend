import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateSitFeetClassification = ({
    sitFeetPercent,
}:Partial<IFunctionalBattery>) => {
    if(sitFeetPercent > 70){
        return 'ÓTIMO'
    } else if (sitFeetPercent > 54 ){
        return 'BOM'
    } else if (sitFeetPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}