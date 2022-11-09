import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentSitFeet = ({
    age,
    sex,
    result,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (result === 8.5){
            return 95;
        }
        if (result === 6.7){
            return 90;
        }
        if (result === 5.6){
            return 85;
        }
        if (result === 4.6){
            return 80;
        }
        if (result === 3.8){
            return 75;
        }
        if (result === 3.1){
            return 70;
        }
        if (result === 2.5){
            return 65;
        }
        if (result === 1.8){
            return 60;
        }
        if (result === 1.2){
            return 55;
        }
        if (result === 0.6){
            return 50;
        }
        if (result === 0.0){
            return 45;
        }
        if (result === -0.6){
            return 40;
        }
        if (result === -1.3){
            return 35;
        }
        if (result === -1.9){
            return 30;
        }
        if (result === -2.6){
            return 25;
        }
        if (result === -3.4){
            return 20;
        }
        if (result === -4.4){
            return 15;
        }
        if (result === -5.5){
            return 10;
        }
        if (result === -7.3){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
        if (result === 7.5){
            return 95;
        }
        if (result === 5.9){
            return 90;
        }
        if (result === 4.8){
            return 85;
        }
        if (result === 3.9){
            return 80;
        }
        if (result === 3.1){
            return 75;
        }
        if (result === 2.4){
            return 70;
        }
        if (result === 1.8){
            return 65;
        }
        if (result === 1.1){
            return 60;
        }
        if (result === 0.6){
            return 55;
        }
        if (result === 0.0){
            return 50;
        }
        if (result === -0.6){
            return 45;
        }
        if (result === -1.1){
            return 40;
        }
        if (result === -1.8){
            return 35;
        }
        if (result === -2.4){
            return 30;
        }
        if (result === -3.1){
            return 25;
        }
        if (result === -3.9){
            return 20;
        }
        if (result === -4.8){
            return 15;
        }
        if (result === -5.9){
            return 10;
        }
        if (result === -7.5){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (result === 7.5){
            return 95;
        }
        if (result === 5.8){
            return 90;
        }
        if (result === 4.7){
            return 85;
        }
        if (result === 3.8){
            return 80;
        }
        if (result === 3.0){
            return 75;
        }
        if (result === 2.4){
            return 70;
        }
        if (result === 1.8){
            return 65;
        }
        if (result === 1.1){
            return 60;
        }
        if (result === 0.6){
            return 55;
        }
        if (result === 0.0){
            return 50;
        }
        if (result === -0.6){
            return 45;
        }
        if (result === -1.2){
            return 40;
        }
        if (result === -1.8){
            return 35;
        }
        if (result === -2.4){
            return 30;
        }
        if (result === -3.1){
            return 25;
        }
        if (result === -3.9){
            return 20;
        }
        if (result === -4.8){
            return 15;
        }
        if (result === -5.9){
            return 10;
        }
        if (result === -7.6){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (result === 6.6){
            return 95;
        }
        if (result === 4.9){
            return 90;
        }
        if (result === 3.8){
            return 85;
        }
        if (result === 2.8){
            return 80;
        }
        if (result === 2.0){
            return 75;
        }
        if (result === 1.3){
            return 70;
        }
        if (result === 0.7){
            return 65;
        }
        if (result === 0.1){
            return 60;
        }
        if (result === -0.5){
            return 55;
        }
        if (result === -1.1){
            return 50;
        }
        if (result === -1.7){
            return 45;
        }
        if (result === -2.3){
            return 40;
        }
        if (result === -2.9){
            return 35;
        }
        if (result === -3.5){
            return 30;
        }
        if (result === -4.2){
            return 25;
        }
        if (result === -5.0){
            return 20;
        }
        if (result === -6.0){
            return 15;
        }
        if (result === -7.1){
            return 10;
        }
        if (result === -8.8){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (result === 6.2){
            return 95;
        }
        if (result === 4.4){
            return 90;
        }
        if (result === 3.2){
            return 85;
        }
        if (result === 2.2){
            return 80;
        }
        if (result === 1.4){
            return 75;
        }
        if (result === 0.6){
            return 70;
        }
        if (result === 0.0){
            return 65;
        }
        if (result === -0.8){
            return 60;
        }
        if (result === -1.4){
            return 55;
        }
        if (result === -2.0){
            return 50;
        }
        if (result === -2.6){
            return 45;
        }
        if (result === -3.2){
            return 40;
        }
        if (result === -4.0){
            return 35;
        }
        if (result === -4.6){
            return 30;
        }
        if (result === -5.3){
            return 25;
        }
        if (result === -6.2){
            return 20;
        }
        if (result === -7.2){
            return 15;
        }
        if (result === -8.4){
            return 10;
        }
        if (result === -10.2){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 85 && age <=89 ){
        if (result === 4.5){
            return 95;
        }
        if (result === 3.0){
            return 90;
        }
        if (result === 2.0){
            return 85;
        }
        if (result === 1.1){
            return 80;
        }
        if (result === 0.4){
            return 75;
        }
        if (result === -0.2){
            return 70;
        }
        if (result === -0.8){
            return 65;
        }
        if (result === -1.3){
            return 60;
        }
        if (result === -1.9){
            return 55;
        }
        if (result === -2.4){
            return 50;
        }
        if (result === -2.9){
            return 45;
        }
        if (result === -3.5){
            return 40;
        }
        if (result === -4.0){
            return 35;
        }
        if (result === -4.6){
            return 30;
        }
        if (result === -5.3){
            return 25;
        }
        if (result === -5.9){
            return 20;
        }
        if (result === -6.8){
            return 15;
        }
        if (result === -7.8){
            return 10;
        }
        if (result === -9.3){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (result === 3.5){
            return 95;
        }
        if (result === 1.9){
            return 90;
        }
        if (result === 0.9){
            return 85;
        }
        if (result === 0.0){
            return 80;
        }
        if (result === -0.7){
            return 75;
        }
        if (result === -1.4){
            return 70;
        }
        if (result === -1.9){
            return 65;
        }
        if (result === -2.5){
            return 60;
        }
        if (result === -3.0){
            return 55;
        }
        if (result === -3.6){
            return 50;
        }
        if (result === -4.2){
            return 45;
        }
        if (result === -4.7){
            return 40;
        }
        if (result === -5.3){
            return 35;
        }
        if (result === -5.8){
            return 30;
        }
        if (result === -6.5){
            return 25;
        }
        if (result === -7.2){
            return 20;
        }
        if (result === -8.1){
            return 15;
        }
        if (result === -9.1){
            return 10;
        }
        if (result === -10.7){
            return 5;
        }
    }  
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (result === 8.7){
            return 95;
        }
        if (result === 7.2){
            return 90;
        }
        if (result === 6.3){
            return 85;
        }
        if (result === 5.5){
            return 80;
        }
        if (result === 4.8){
            return 75;
        }
        if (result === 4.2){
            return 70;
        }
        if (result === 3.7){
            return 65;
        }
        if (result === 3.1){
            return 60;
        }
        if (result === 2.6){
            return 55;
        }
        if (result === 2.1){
            return 50;
        }
        if (result === 1.6){
            return 45;
        }
        if (result === 1.1){
            return 40;
        }
        if (result === 0.5){
            return 35;
        }
        if (result === 0.0){
            return 30;
        }
        if (result === -0.6){
            return 25;
        }
        if (result === -1.3){
            return 20;
        }
        if (result === -2.1){
            return 15;
        }
        if (result === -3.0){
            return 10;
        }
        if (result === -4.0){
            return 5;
        }
   } 
   if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (result === 7.9){
            return 95;
        }
        if (result === 6.6){
            return 90;
        }
        if (result === 5.7){
            return 85;
        }
        if (result === 5.0){
            return 80;
        }
        if (result === 4.4){
            return 75;
        }
        if (result === 3.9){
            return 70;
        }
        if (result === 3.4){
            return 65;
        }
        if (result === 2.9){
            return 60;
        }
        if (result === 2.5){
            return 55;
        }
        if (result === 2.0){
            return 50;
        }
        if (result === 1.5){
            return 45;
        }
        if (result === 1.1){
            return 40;
        }
        if (result === 0.6){
            return 35;
        }
        if (result === 0.1){
            return 30;
        }
        if (result === -0.4){
            return 25;
        }
        if (result === -1.0){
            return 20;
        }
        if (result === -1.7){
            return 15;
        }
        if (result === -2.6){
            return 10;
        }
        if (result === -3.9){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (result === 7.5){
            return 95;
        }
        if (result === 6.1){
            return 90;
        }
        if (result === 5.2){
            return 85;
        }
        if (result === 4.5){
            return 80;
        }
        if (result === 3.9){
            return 75;
        }
        if (result === 3.3){
            return 70;
        }
        if (result === 2.8){
            return 65;
        }
        if (result === 2.3){
            return 60;
        }
        if (result === 1.9){
            return 55;
        }
        if (result === 1.4){
            return 50;
        }
        if (result === 0.9){
            return 45;
        }
        if (result === 0.5){
            return 40;
        }
        if (result === 0.0){
            return 35;
        }
        if (result === -0.5){
            return 30;
        }
        if (result === -1.1){
            return 25;
        }
        if (result === -1.7){
            return 20;
        }
        if (result === -2.4){
            return 15;
        }
        if (result === -3.3){
            return 10;
        }
        if (result === -4.7){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 75 && age <=79 ){
        if (result === 7.4){
            return 95;
        }
        if (result === 6.1){
            return 90;
        }
        if (result === 5.2){
            return 85;
        }
        if (result === 4.4){
            return 80;
        }
        if (result === 3.7){
            return 75;
        }
        if (result === 3.2){
            return 70;
        }
        if (result === 2.7){
            return 65;
        }
        if (result === 2.1){
            return 60;
        }
        if (result === 1.7){
            return 55;
        }
        if (result === 1.2){
            return 50;
        }
        if (result === 0.7){
            return 45;
        }
        if (result === 0.2){
            return 40;
        }
        if (result === -0.3){
            return 35;
        }
        if (result === -0.8){
            return 30;
        }
        if (result === -1.3){
            return 25;
        }
        if (result === -2.0){
            return 20;
        }
        if (result === -2.8){
            return 15;
        }
        if (result === -3.7){
            return 10;
        }
        if (result === -5.0){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 80 && age <=84 ){
        if (result === 6.6){
            return 95;
        }
        if (result === 5.2){
            return 90;
        }
        if (result === 4.3){
            return 85;
        }
        if (result === 3.6){
            return 80;
        }
        if (result === 3.0){
            return 75;
        }
        if (result === 2.4){
            return 70;
        }
        if (result === 1.9){
            return 65;
        }
        if (result === 1.4){
            return 60;
        }
        if (result === 1.0){
            return 55;
        }
        if (result === 0.5){
            return 50;
        }
        if (result === 0.0){
            return 45;
        }
        if (result === -0.4){
            return 40;
        }
        if (result === -0.9){
            return 35;
        }
        if (result === -1.4){
            return 30;
        }
        if (result === -2.0){
            return 25;
        }
        if (result === -2.6){
            return 20;
        }
        if (result === -3.3){
            return 15;
        }
        if (result === -4.2){
            return 10;
        }
        if (result === -5.0){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 85 && age <=89 ){
        if (result === 6.0){
            return 95;
        }
        if (result === 4.6){
            return 90;
        }
        if (result === 3.7){
            return 85;
        }
        if (result === 3.0){
            return 80;
        }
        if (result === 2.4){
            return 75;
        }
        if (result === 1.8){
            return 70;
        }
        if (result === 1.3){
            return 65;
        }
        if (result === 0.8){
            return 60;
        }
        if (result === 0.4){
            return 55;
        }
        if (result === -0.1){
            return 50;
        }
        if (result === -0.6){
            return 45;
        }
        if (result === -1.0){
            return 40;
        }
        if (result === -1.5){
            return 35;
        }
        if (result === -2.0){
            return 30;
        }
        if (result === -2.6){
            return 25;
        }
        if (result === -3.2){
            return 20;
        }
        if (result === -3.9){
            return 15;
        }
        if (result === -4.8){
            return 10;
        }
        if (result === -6.3){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 90 && age <=94 ){
        if (result === 4.9){
            return 95;
        }
        if (result === 3.4){
            return 90;
        }
        if (result === 2.5){
            return 85;
        }
        if (result === 1.7){
            return 80;
        }
        if (result === 1.0){
            return 75;
        }
        if (result === 0.4){
            return 70;
        }
        if (result === -0.1){
            return 65;
        }
        if (result === -0.7){
            return 60;
        }
        if (result === -1.2){
            return 55;
        }
        if (result === -1.7){
            return 50;
        }
        if (result === -2.2){
            return 45;
        }
        if (result === -2.7){
            return 40;
        }
        if (result === -3.3){
            return 35;
        }
        if (result === -3.8){
            return 30;
        }
        if (result === -4.4){
            return 25;
        }
        if (result === -5.1){
            return 20;
        }
        if (result === -5.9){
            return 15;
        }
        if (result === -6.8){
            return 10;
        }
        if (result === -7.9){
            return 5;
        }
    } 
}