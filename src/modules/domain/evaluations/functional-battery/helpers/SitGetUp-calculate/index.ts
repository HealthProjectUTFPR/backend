import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentSitGetUp = ({
    age,
    sex,
    result,
}:Partial<IFunctionalBattery>) => {
   if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (result === 23){
            return 95;
        }
        if (result === 22){
            return 90;
        }
        if (result === 21){
            return 85;
        }
        if (result === 20){
            return 80;
        }
        if (result === 19){
            return 70;
        }
        if (result === 18){
            return 65;
        }
        if (result === 17){
            return 60;
        }
        if (result === 16){
            return 45;
        }
        if (result === 15){
            return 35;
        }
        if (result === 14){
            return 25;
        }
        if (result === 13){
            return 20;
        }
        if (result === 12){
            return 15;
        }
        if (result === 11){
            return 10;
        }
        if (result === 9){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
    if (result === 23){
        return 95;
    }
    if (result === 21){
        return 90;
    }
    if (result === 20){
        return 85;
    }
    if (result === 19){
        return 80;
    }
    if (result === 18){
        return 70;
    }
    if (result === 17){
        return 65;
    }
    if (result === 16){
        return 55;
    }
    if (result === 15){
        return 50;
    }
    if (result === 14){
        return 40;
    }
    if (result === 13){
        return 30;
    }
    if (result === 12){
        return 25;
    }
    if (result === 11){
        return 15;
    }
    if (result === 9){
        return 10;
    }
    if (result === 8){
        return 5;
    }
    } 
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (result === 21){
            return 95;
        }
        if (result === 20){
            return 90;
        }
        if (result === 19){
            return 85;
        }
        if (result === 18){
            return 80;
        }
        if (result === 17){
            return 70;
        }
        if (result === 16){
            return 60;
        }
        if (result === 15){
            return 55;
        }
        if (result === 14){
            return 45;
        }
        if (result === 13){
            return 35;
        }
        if (result === 12){
            return 25;
        }
        if (result === 11){
            return 20;
        }
        if (result === 10){
            return 15;
        }
        if (result === 9){
            return 10;
        }
        if (result === 8){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (result === 21){
            return 95;
        }
        if (result === 20){
            return 90;
        }
        if (result === 18){
            return 80;
        }
        if (result === 17){
            return 70;
        }
        if (result === 16){
            return 70;
        }
        if (result === 15){
            return 55;
        }
        if (result === 14){
            return 50;
        }
        if (result === 13){
            return 40;
        }
        if (result === 12){
            return 30;
        }
        if (result === 11){
            return 25;
        }
        if (result === 10){
            return 15;
        }
        if (result === 8){
            return 10;
        }
        if (result === 7){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (result === 19){
            return 95;
        }
        if (result === 17){
            return 90;
        }
        if (result === 16){
            return 80;
        }
        if (result === 15){
            return 75;
        }
        if (result === 14){
            return 65;
        }
        if (result === 13){
            return 55;
        }
        if (result === 12){
            return 45;
        }
        if (result === 11){
            return 35;
        }
        if (result === 10){
            return 25;
        }
        if (result === 9){
            return 20;
        }
        if (result === 8){
            return 15;
        }
        if (result === 7){
            return 10;
        }
        if (result === 6){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 85 && age <= 89 ){
        if (result === 19){
            return 95;
        }
        if (result === 17){
            return 90;
        }
        if (result === 16){
            return 85;
        }
        if (result === 15){
            return 80;
        }
        if (result === 14){
            return 75;
        }
        if (result === 13){
            return 65;
        }
        if (result === 12){
            return 55;
        }
        if (result === 11){
            return 45;
        }
        if (result === 10){
            return 40;
        }
        if (result === 9){
            return 30;
        }
        if (result === 8){
            return 25;
        }
        if (result === 7){
            return 20;
        }
        if (result === 6){
            return 15;
        }
        if (result === 5){
            return 10;
        }
        if (result === 4){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (result === 16){
            return 95;
        }
        if (result === 15){
            return 90;
        }
        if (result === 14){
            return 85;
        }
        if (result === 13){
            return 80;
        }
        if (result === 12){
            return 70;
        }
        if (result === 11){
            return 60;
        }
        if (result === 10){
            return 50;
        }
        if (result === 9){
            return 40;
        }
        if (result === 8){
            return 30;
        }
        if (result === 7){
            return 20;
        }
        if (result === 6){
            return 15;
        }
        if (result === 5){
            return 10;
        }
        if (result === 3){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (result === 21){
            return 95;
        }
        if (result === 20){
            return 90;
        }
        if (result === 19){
            return 85;
        }
        if (result === 18){
            return 80;
        }
        if (result === 17){
            return 70;
        }
        if (result === 16){
            return 60;
        }
        if (result === 15){
            return 50;
        }
        if (result === 14){
            return 40;
        }
        if (result === 13){
            return 35;
        }
        if (result === 12){
            return 25;
        }
        if (result === 11){
            return 20;
        }
        if (result === 10){
            return 15;
        }
        if (result === 9){
            return 10;
        }
        if (result === 8){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (result === 19){
            return 95;
        }
        if (result === 18){
            return 90;
        }
        if (result === 17){
            return 85;
        }
        if (result === 16){
            return 75;
        }
        if (result === 15){
            return 65;
        }
        if (result === 14){
            return 50;
        }
        if (result === 13){
            return 40;
        }
        if (result === 12){
            return 30;
        }
        if (result === 11){
            return 20;
        }
        if (result === 10){
            return 15;
        }
        if (result === 9){
            return 10;
        }
        if (result === 8){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (result === 19){
            return 95;
        }
        if (result === 18){
            return 90;
        }
        if (result === 17){
            return 85;
        }
        if (result === 16){
            return 80;
        }
        if (result === 15){
            return 70;
        }
        if (result === 14){
            return 60;
        }
        if (result === 13){
            return 50;
        }
        if (result === 12){
            return 40;
        }
        if (result === 11){
            return 30;
        }
        if (result === 10){
            return 20;
        }
        if (result === 9){
            return 15;
        }
        if (result === 8){
            return 10;
        }
        if (result === 7){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=75 && age <=79 ){
        if (result === 19){
            return 95;
        }
        if (result === 17){
            return 90;
        }
        if (result === 16){
            return 80;
        }
        if (result === 15){
            return 75;
        }
        if (result === 14){
            return 65;
        }
        if (result === 13){
            return 55;
        }
        if (result === 12){
            return 40;
        }
        if (result === 11){
            return 30;
        }
        if (result === 10){
            return 25;
        }
        if (result === 9){
            return 15;
        }
        if (result === 8){
            return 10;
        }
        if (result === 6){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=80 && age <=84 ){
        if (result === 18){
            return 95;
        }
        if (result === 17){
            return 90;
        }
        if (result === 16){
            return 85;
        }
        if (result === 15){
            return 80;
        }
        if (result === 14){
            return 75;
        }
        if (result === 13){
            return 65;
        }
        if (result === 12){
            return 55;
        }
        if (result === 11){
            return 45;
        }
        if (result === 10){
            return 35;
        }
        if (result === 9){
            return 25;
        }
        if (result === 8){
            return 20;
        }
        if (result === 7){
            return 15;
        }
        if (result === 6){
            return 10;
        } 
        if (result === 4){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=85 && age <=89 ){
        if (result === 17){
            return 95;
        }
        if (result === 15){
            return 90;
        }
        if (result === 14){
            return 80;
        }
        if (result === 13){
            return 75;
        }
        if (result === 12){
            return 65;
        }
        if (result === 11){
            return 55;
        }
        if (result === 10){
            return 45;
        }
        if (result === 9){
            return 35;
        }
        if (result === 8){
            return 25;
        }
        if (result === 7){
            return 20;
        }
        if (result === 6){
            return 15;
        }
        if (result === 5){
            return 10;
        } 
        if (result === 4){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=90 && age <=94 ){
        if (result === 16){
            return 95;
        }
        if (result === 15){
            return 90;
        }
        if (result === 13){
            return 85;
        }
        if (result === 12){
            return 80;
        }
        if (result === 11){
            return 70;
        }
        if (result === 10){
            return 65;
        }
        if (result === 9){
            return 55;
        }
        if (result === 8){
            return 50;
        }
        if (result === 7){
            return 40;
        }
        if (result === 6){
            return 35;
        }
        if (result === 5){
            return 30;
        }
        if (result === 4){
            return 20;
        } 
        if (result === 3){
            return 15;
        }
        if (result === 1){
            return 10;
        }
        if (result === 0){
            return 5;
        }
    }
}