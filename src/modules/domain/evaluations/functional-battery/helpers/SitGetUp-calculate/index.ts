import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentSitGetUp = ({
    age,
    sex,
    sitGetUp,
}:Partial<IFunctionalBattery>) => {
   if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (sitGetUp === 23){
            return 95;
        }
        if (sitGetUp === 22){
            return 90;
        }
        if (sitGetUp === 21){
            return 85;
        }
        if (sitGetUp === 20){
            return 80;
        }
        if (sitGetUp === 19){
            return 70;
        }
        if (sitGetUp === 18){
            return 65;
        }
        if (sitGetUp === 17){
            return 60;
        }
        if (sitGetUp === 16){
            return 45;
        }
        if (sitGetUp === 15){
            return 35;
        }
        if (sitGetUp === 14){
            return 25;
        }
        if (sitGetUp === 13){
            return 20;
        }
        if (sitGetUp === 12){
            return 15;
        }
        if (sitGetUp === 11){
            return 10;
        }
        if (sitGetUp === 9){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
    if (sitGetUp === 23){
        return 95;
    }
    if (sitGetUp === 21){
        return 90;
    }
    if (sitGetUp === 20){
        return 85;
    }
    if (sitGetUp === 19){
        return 80;
    }
    if (sitGetUp === 18){
        return 70;
    }
    if (sitGetUp === 17){
        return 65;
    }
    if (sitGetUp === 16){
        return 55;
    }
    if (sitGetUp === 15){
        return 50;
    }
    if (sitGetUp === 14){
        return 40;
    }
    if (sitGetUp === 13){
        return 30;
    }
    if (sitGetUp === 12){
        return 25;
    }
    if (sitGetUp === 11){
        return 15;
    }
    if (sitGetUp === 9){
        return 10;
    }
    if (sitGetUp === 8){
        return 5;
    }
    } 
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (sitGetUp === 21){
            return 95;
        }
        if (sitGetUp === 20){
            return 90;
        }
        if (sitGetUp === 19){
            return 85;
        }
        if (sitGetUp === 18){
            return 80;
        }
        if (sitGetUp === 17){
            return 70;
        }
        if (sitGetUp === 16){
            return 60;
        }
        if (sitGetUp === 15){
            return 55;
        }
        if (sitGetUp === 14){
            return 45;
        }
        if (sitGetUp === 13){
            return 35;
        }
        if (sitGetUp === 12){
            return 25;
        }
        if (sitGetUp === 11){
            return 20;
        }
        if (sitGetUp === 10){
            return 15;
        }
        if (sitGetUp === 9){
            return 10;
        }
        if (sitGetUp === 8){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (sitGetUp === 21){
            return 95;
        }
        if (sitGetUp === 20){
            return 90;
        }
        if (sitGetUp === 18){
            return 80;
        }
        if (sitGetUp === 17){
            return 70;
        }
        if (sitGetUp === 16){
            return 70;
        }
        if (sitGetUp === 15){
            return 55;
        }
        if (sitGetUp === 14){
            return 50;
        }
        if (sitGetUp === 13){
            return 40;
        }
        if (sitGetUp === 12){
            return 30;
        }
        if (sitGetUp === 11){
            return 25;
        }
        if (sitGetUp === 10){
            return 15;
        }
        if (sitGetUp === 8){
            return 10;
        }
        if (sitGetUp === 7){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (sitGetUp === 19){
            return 95;
        }
        if (sitGetUp === 17){
            return 90;
        }
        if (sitGetUp === 16){
            return 80;
        }
        if (sitGetUp === 15){
            return 75;
        }
        if (sitGetUp === 14){
            return 65;
        }
        if (sitGetUp === 13){
            return 55;
        }
        if (sitGetUp === 12){
            return 45;
        }
        if (sitGetUp === 11){
            return 35;
        }
        if (sitGetUp === 10){
            return 25;
        }
        if (sitGetUp === 9){
            return 20;
        }
        if (sitGetUp === 8){
            return 15;
        }
        if (sitGetUp === 7){
            return 10;
        }
        if (sitGetUp === 6){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 85 && age <= 89 ){
        if (sitGetUp === 19){
            return 95;
        }
        if (sitGetUp === 17){
            return 90;
        }
        if (sitGetUp === 16){
            return 85;
        }
        if (sitGetUp === 15){
            return 80;
        }
        if (sitGetUp === 14){
            return 75;
        }
        if (sitGetUp === 13){
            return 65;
        }
        if (sitGetUp === 12){
            return 55;
        }
        if (sitGetUp === 11){
            return 45;
        }
        if (sitGetUp === 10){
            return 40;
        }
        if (sitGetUp === 9){
            return 30;
        }
        if (sitGetUp === 8){
            return 25;
        }
        if (sitGetUp === 7){
            return 20;
        }
        if (sitGetUp === 6){
            return 15;
        }
        if (sitGetUp === 5){
            return 10;
        }
        if (sitGetUp === 4){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (sitGetUp === 16){
            return 95;
        }
        if (sitGetUp === 15){
            return 90;
        }
        if (sitGetUp === 14){
            return 85;
        }
        if (sitGetUp === 13){
            return 80;
        }
        if (sitGetUp === 12){
            return 70;
        }
        if (sitGetUp === 11){
            return 60;
        }
        if (sitGetUp === 10){
            return 50;
        }
        if (sitGetUp === 9){
            return 40;
        }
        if (sitGetUp === 8){
            return 30;
        }
        if (sitGetUp === 7){
            return 20;
        }
        if (sitGetUp === 6){
            return 15;
        }
        if (sitGetUp === 5){
            return 10;
        }
        if (sitGetUp === 3){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (sitGetUp === 21){
            return 95;
        }
        if (sitGetUp === 20){
            return 90;
        }
        if (sitGetUp === 19){
            return 85;
        }
        if (sitGetUp === 18){
            return 80;
        }
        if (sitGetUp === 17){
            return 70;
        }
        if (sitGetUp === 16){
            return 60;
        }
        if (sitGetUp === 15){
            return 50;
        }
        if (sitGetUp === 14){
            return 40;
        }
        if (sitGetUp === 13){
            return 35;
        }
        if (sitGetUp === 12){
            return 25;
        }
        if (sitGetUp === 11){
            return 20;
        }
        if (sitGetUp === 10){
            return 15;
        }
        if (sitGetUp === 9){
            return 10;
        }
        if (sitGetUp === 8){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (sitGetUp === 19){
            return 95;
        }
        if (sitGetUp === 18){
            return 90;
        }
        if (sitGetUp === 17){
            return 85;
        }
        if (sitGetUp === 16){
            return 75;
        }
        if (sitGetUp === 15){
            return 65;
        }
        if (sitGetUp === 14){
            return 50;
        }
        if (sitGetUp === 13){
            return 40;
        }
        if (sitGetUp === 12){
            return 30;
        }
        if (sitGetUp === 11){
            return 20;
        }
        if (sitGetUp === 10){
            return 15;
        }
        if (sitGetUp === 9){
            return 10;
        }
        if (sitGetUp === 8){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (sitGetUp === 19){
            return 95;
        }
        if (sitGetUp === 18){
            return 90;
        }
        if (sitGetUp === 17){
            return 85;
        }
        if (sitGetUp === 16){
            return 80;
        }
        if (sitGetUp === 15){
            return 70;
        }
        if (sitGetUp === 14){
            return 60;
        }
        if (sitGetUp === 13){
            return 50;
        }
        if (sitGetUp === 12){
            return 40;
        }
        if (sitGetUp === 11){
            return 30;
        }
        if (sitGetUp === 10){
            return 20;
        }
        if (sitGetUp === 9){
            return 15;
        }
        if (sitGetUp === 8){
            return 10;
        }
        if (sitGetUp === 7){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=75 && age <=79 ){
        if (sitGetUp === 19){
            return 95;
        }
        if (sitGetUp === 17){
            return 90;
        }
        if (sitGetUp === 16){
            return 80;
        }
        if (sitGetUp === 15){
            return 75;
        }
        if (sitGetUp === 14){
            return 65;
        }
        if (sitGetUp === 13){
            return 55;
        }
        if (sitGetUp === 12){
            return 40;
        }
        if (sitGetUp === 11){
            return 30;
        }
        if (sitGetUp === 10){
            return 25;
        }
        if (sitGetUp === 9){
            return 15;
        }
        if (sitGetUp === 8){
            return 10;
        }
        if (sitGetUp === 6){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=80 && age <=84 ){
        if (sitGetUp === 18){
            return 95;
        }
        if (sitGetUp === 17){
            return 90;
        }
        if (sitGetUp === 16){
            return 85;
        }
        if (sitGetUp === 15){
            return 80;
        }
        if (sitGetUp === 14){
            return 75;
        }
        if (sitGetUp === 13){
            return 65;
        }
        if (sitGetUp === 12){
            return 55;
        }
        if (sitGetUp === 11){
            return 45;
        }
        if (sitGetUp === 10){
            return 35;
        }
        if (sitGetUp === 9){
            return 25;
        }
        if (sitGetUp === 8){
            return 20;
        }
        if (sitGetUp === 7){
            return 15;
        }
        if (sitGetUp === 6){
            return 10;
        } 
        if (sitGetUp === 4){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=85 && age <=89 ){
        if (sitGetUp === 17){
            return 95;
        }
        if (sitGetUp === 15){
            return 90;
        }
        if (sitGetUp === 14){
            return 80;
        }
        if (sitGetUp === 13){
            return 75;
        }
        if (sitGetUp === 12){
            return 65;
        }
        if (sitGetUp === 11){
            return 55;
        }
        if (sitGetUp === 10){
            return 45;
        }
        if (sitGetUp === 9){
            return 35;
        }
        if (sitGetUp === 8){
            return 25;
        }
        if (sitGetUp === 7){
            return 20;
        }
        if (sitGetUp === 6){
            return 15;
        }
        if (sitGetUp === 5){
            return 10;
        } 
        if (sitGetUp === 4){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=90 && age <=94 ){
        if (sitGetUp === 16){
            return 95;
        }
        if (sitGetUp === 15){
            return 90;
        }
        if (sitGetUp === 13){
            return 85;
        }
        if (sitGetUp === 12){
            return 80;
        }
        if (sitGetUp === 11){
            return 70;
        }
        if (sitGetUp === 10){
            return 65;
        }
        if (sitGetUp === 9){
            return 55;
        }
        if (sitGetUp === 8){
            return 50;
        }
        if (sitGetUp === 7){
            return 40;
        }
        if (sitGetUp === 6){
            return 35;
        }
        if (sitGetUp === 5){
            return 30;
        }
        if (sitGetUp === 4){
            return 20;
        } 
        if (sitGetUp === 3){
            return 15;
        }
        if (sitGetUp === 1){
            return 10;
        }
        if (sitGetUp === 0){
            return 5;
        }
    }
}