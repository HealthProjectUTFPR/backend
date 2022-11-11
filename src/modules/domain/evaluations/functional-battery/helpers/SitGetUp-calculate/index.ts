import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentSitGetUp = ({
    age,
    sex,
    sitGetUpResult,
}:Partial<IFunctionalBattery>) => {
   if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (sitGetUpResult === 23){
            return 95;
        }
        if (sitGetUpResult === 22){
            return 90;
        }
        if (sitGetUpResult === 21){
            return 85;
        }
        if (sitGetUpResult === 20){
            return 80;
        }
        if (sitGetUpResult === 19){
            return 70;
        }
        if (sitGetUpResult === 18){
            return 65;
        }
        if (sitGetUpResult === 17){
            return 60;
        }
        if (sitGetUpResult === 16){
            return 45;
        }
        if (sitGetUpResult === 15){
            return 35;
        }
        if (sitGetUpResult === 14){
            return 25;
        }
        if (sitGetUpResult === 13){
            return 20;
        }
        if (sitGetUpResult === 12){
            return 15;
        }
        if (sitGetUpResult === 11){
            return 10;
        }
        if (sitGetUpResult === 9){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
    if (sitGetUpResult === 23){
        return 95;
    }
    if (sitGetUpResult === 21){
        return 90;
    }
    if (sitGetUpResult === 20){
        return 85;
    }
    if (sitGetUpResult === 19){
        return 80;
    }
    if (sitGetUpResult === 18){
        return 70;
    }
    if (sitGetUpResult === 17){
        return 65;
    }
    if (sitGetUpResult === 16){
        return 55;
    }
    if (sitGetUpResult === 15){
        return 50;
    }
    if (sitGetUpResult === 14){
        return 40;
    }
    if (sitGetUpResult === 13){
        return 30;
    }
    if (sitGetUpResult === 12){
        return 25;
    }
    if (sitGetUpResult === 11){
        return 15;
    }
    if (sitGetUpResult === 9){
        return 10;
    }
    if (sitGetUpResult === 8){
        return 5;
    }
    } 
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (sitGetUpResult === 21){
            return 95;
        }
        if (sitGetUpResult === 20){
            return 90;
        }
        if (sitGetUpResult === 19){
            return 85;
        }
        if (sitGetUpResult === 18){
            return 80;
        }
        if (sitGetUpResult === 17){
            return 70;
        }
        if (sitGetUpResult === 16){
            return 60;
        }
        if (sitGetUpResult === 15){
            return 55;
        }
        if (sitGetUpResult === 14){
            return 45;
        }
        if (sitGetUpResult === 13){
            return 35;
        }
        if (sitGetUpResult === 12){
            return 25;
        }
        if (sitGetUpResult === 11){
            return 20;
        }
        if (sitGetUpResult === 10){
            return 15;
        }
        if (sitGetUpResult === 9){
            return 10;
        }
        if (sitGetUpResult === 8){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (sitGetUpResult === 21){
            return 95;
        }
        if (sitGetUpResult === 20){
            return 90;
        }
        if (sitGetUpResult === 18){
            return 80;
        }
        if (sitGetUpResult === 17){
            return 70;
        }
        if (sitGetUpResult === 16){
            return 70;
        }
        if (sitGetUpResult === 15){
            return 55;
        }
        if (sitGetUpResult === 14){
            return 50;
        }
        if (sitGetUpResult === 13){
            return 40;
        }
        if (sitGetUpResult === 12){
            return 30;
        }
        if (sitGetUpResult === 11){
            return 25;
        }
        if (sitGetUpResult === 10){
            return 15;
        }
        if (sitGetUpResult === 8){
            return 10;
        }
        if (sitGetUpResult === 7){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (sitGetUpResult === 19){
            return 95;
        }
        if (sitGetUpResult === 17){
            return 90;
        }
        if (sitGetUpResult === 16){
            return 80;
        }
        if (sitGetUpResult === 15){
            return 75;
        }
        if (sitGetUpResult === 14){
            return 65;
        }
        if (sitGetUpResult === 13){
            return 55;
        }
        if (sitGetUpResult === 12){
            return 45;
        }
        if (sitGetUpResult === 11){
            return 35;
        }
        if (sitGetUpResult === 10){
            return 25;
        }
        if (sitGetUpResult === 9){
            return 20;
        }
        if (sitGetUpResult === 8){
            return 15;
        }
        if (sitGetUpResult === 7){
            return 10;
        }
        if (sitGetUpResult === 6){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 85 && age <= 89 ){
        if (sitGetUpResult === 19){
            return 95;
        }
        if (sitGetUpResult === 17){
            return 90;
        }
        if (sitGetUpResult === 16){
            return 85;
        }
        if (sitGetUpResult === 15){
            return 80;
        }
        if (sitGetUpResult === 14){
            return 75;
        }
        if (sitGetUpResult === 13){
            return 65;
        }
        if (sitGetUpResult === 12){
            return 55;
        }
        if (sitGetUpResult === 11){
            return 45;
        }
        if (sitGetUpResult === 10){
            return 40;
        }
        if (sitGetUpResult === 9){
            return 30;
        }
        if (sitGetUpResult === 8){
            return 25;
        }
        if (sitGetUpResult === 7){
            return 20;
        }
        if (sitGetUpResult === 6){
            return 15;
        }
        if (sitGetUpResult === 5){
            return 10;
        }
        if (sitGetUpResult === 4){
            return 5;
        }
    }
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (sitGetUpResult === 16){
            return 95;
        }
        if (sitGetUpResult === 15){
            return 90;
        }
        if (sitGetUpResult === 14){
            return 85;
        }
        if (sitGetUpResult === 13){
            return 80;
        }
        if (sitGetUpResult === 12){
            return 70;
        }
        if (sitGetUpResult === 11){
            return 60;
        }
        if (sitGetUpResult === 10){
            return 50;
        }
        if (sitGetUpResult === 9){
            return 40;
        }
        if (sitGetUpResult === 8){
            return 30;
        }
        if (sitGetUpResult === 7){
            return 20;
        }
        if (sitGetUpResult === 6){
            return 15;
        }
        if (sitGetUpResult === 5){
            return 10;
        }
        if (sitGetUpResult === 3){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (sitGetUpResult === 21){
            return 95;
        }
        if (sitGetUpResult === 20){
            return 90;
        }
        if (sitGetUpResult === 19){
            return 85;
        }
        if (sitGetUpResult === 18){
            return 80;
        }
        if (sitGetUpResult === 17){
            return 70;
        }
        if (sitGetUpResult === 16){
            return 60;
        }
        if (sitGetUpResult === 15){
            return 50;
        }
        if (sitGetUpResult === 14){
            return 40;
        }
        if (sitGetUpResult === 13){
            return 35;
        }
        if (sitGetUpResult === 12){
            return 25;
        }
        if (sitGetUpResult === 11){
            return 20;
        }
        if (sitGetUpResult === 10){
            return 15;
        }
        if (sitGetUpResult === 9){
            return 10;
        }
        if (sitGetUpResult === 8){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (sitGetUpResult === 19){
            return 95;
        }
        if (sitGetUpResult === 18){
            return 90;
        }
        if (sitGetUpResult === 17){
            return 85;
        }
        if (sitGetUpResult === 16){
            return 75;
        }
        if (sitGetUpResult === 15){
            return 65;
        }
        if (sitGetUpResult === 14){
            return 50;
        }
        if (sitGetUpResult === 13){
            return 40;
        }
        if (sitGetUpResult === 12){
            return 30;
        }
        if (sitGetUpResult === 11){
            return 20;
        }
        if (sitGetUpResult === 10){
            return 15;
        }
        if (sitGetUpResult === 9){
            return 10;
        }
        if (sitGetUpResult === 8){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (sitGetUpResult === 19){
            return 95;
        }
        if (sitGetUpResult === 18){
            return 90;
        }
        if (sitGetUpResult === 17){
            return 85;
        }
        if (sitGetUpResult === 16){
            return 80;
        }
        if (sitGetUpResult === 15){
            return 70;
        }
        if (sitGetUpResult === 14){
            return 60;
        }
        if (sitGetUpResult === 13){
            return 50;
        }
        if (sitGetUpResult === 12){
            return 40;
        }
        if (sitGetUpResult === 11){
            return 30;
        }
        if (sitGetUpResult === 10){
            return 20;
        }
        if (sitGetUpResult === 9){
            return 15;
        }
        if (sitGetUpResult === 8){
            return 10;
        }
        if (sitGetUpResult === 7){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=75 && age <=79 ){
        if (sitGetUpResult === 19){
            return 95;
        }
        if (sitGetUpResult === 17){
            return 90;
        }
        if (sitGetUpResult === 16){
            return 80;
        }
        if (sitGetUpResult === 15){
            return 75;
        }
        if (sitGetUpResult === 14){
            return 65;
        }
        if (sitGetUpResult === 13){
            return 55;
        }
        if (sitGetUpResult === 12){
            return 40;
        }
        if (sitGetUpResult === 11){
            return 30;
        }
        if (sitGetUpResult === 10){
            return 25;
        }
        if (sitGetUpResult === 9){
            return 15;
        }
        if (sitGetUpResult === 8){
            return 10;
        }
        if (sitGetUpResult === 6){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=80 && age <=84 ){
        if (sitGetUpResult === 18){
            return 95;
        }
        if (sitGetUpResult === 17){
            return 90;
        }
        if (sitGetUpResult === 16){
            return 85;
        }
        if (sitGetUpResult === 15){
            return 80;
        }
        if (sitGetUpResult === 14){
            return 75;
        }
        if (sitGetUpResult === 13){
            return 65;
        }
        if (sitGetUpResult === 12){
            return 55;
        }
        if (sitGetUpResult === 11){
            return 45;
        }
        if (sitGetUpResult === 10){
            return 35;
        }
        if (sitGetUpResult === 9){
            return 25;
        }
        if (sitGetUpResult === 8){
            return 20;
        }
        if (sitGetUpResult === 7){
            return 15;
        }
        if (sitGetUpResult === 6){
            return 10;
        } 
        if (sitGetUpResult === 4){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=85 && age <=89 ){
        if (sitGetUpResult === 17){
            return 95;
        }
        if (sitGetUpResult === 15){
            return 90;
        }
        if (sitGetUpResult === 14){
            return 80;
        }
        if (sitGetUpResult === 13){
            return 75;
        }
        if (sitGetUpResult === 12){
            return 65;
        }
        if (sitGetUpResult === 11){
            return 55;
        }
        if (sitGetUpResult === 10){
            return 45;
        }
        if (sitGetUpResult === 9){
            return 35;
        }
        if (sitGetUpResult === 8){
            return 25;
        }
        if (sitGetUpResult === 7){
            return 20;
        }
        if (sitGetUpResult === 6){
            return 15;
        }
        if (sitGetUpResult === 5){
            return 10;
        } 
        if (sitGetUpResult === 4){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >=90 && age <=94 ){
        if (sitGetUpResult === 16){
            return 95;
        }
        if (sitGetUpResult === 15){
            return 90;
        }
        if (sitGetUpResult === 13){
            return 85;
        }
        if (sitGetUpResult === 12){
            return 80;
        }
        if (sitGetUpResult === 11){
            return 70;
        }
        if (sitGetUpResult === 10){
            return 65;
        }
        if (sitGetUpResult === 9){
            return 55;
        }
        if (sitGetUpResult === 8){
            return 50;
        }
        if (sitGetUpResult === 7){
            return 40;
        }
        if (sitGetUpResult === 6){
            return 35;
        }
        if (sitGetUpResult === 5){
            return 30;
        }
        if (sitGetUpResult === 4){
            return 20;
        } 
        if (sitGetUpResult === 3){
            return 15;
        }
        if (sitGetUpResult === 1){
            return 10;
        }
        if (sitGetUpResult === 0){
            return 5;
        }
    }
}