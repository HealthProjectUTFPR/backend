import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentSitFeet = ({
    age,
    sex,
    sitFeetResult,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (sitFeetResult === 8.5){
            return 95;
        }
        if (sitFeetResult === 6.7){
            return 90;
        }
        if (sitFeetResult === 5.6){
            return 85;
        }
        if (sitFeetResult === 4.6){
            return 80;
        }
        if (sitFeetResult === 3.8){
            return 75;
        }
        if (sitFeetResult === 3.1){
            return 70;
        }
        if (sitFeetResult === 2.5){
            return 65;
        }
        if (sitFeetResult === 1.8){
            return 60;
        }
        if (sitFeetResult === 1.2){
            return 55;
        }
        if (sitFeetResult === 0.6){
            return 50;
        }
        if (sitFeetResult === 0.0){
            return 45;
        }
        if (sitFeetResult === -0.6){
            return 40;
        }
        if (sitFeetResult === -1.3){
            return 35;
        }
        if (sitFeetResult === -1.9){
            return 30;
        }
        if (sitFeetResult === -2.6){
            return 25;
        }
        if (sitFeetResult === -3.4){
            return 20;
        }
        if (sitFeetResult === -4.4){
            return 15;
        }
        if (sitFeetResult === -5.5){
            return 10;
        }
        if (sitFeetResult === -7.3){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
        if (sitFeetResult === 7.5){
            return 95;
        }
        if (sitFeetResult === 5.9){
            return 90;
        }
        if (sitFeetResult === 4.8){
            return 85;
        }
        if (sitFeetResult === 3.9){
            return 80;
        }
        if (sitFeetResult === 3.1){
            return 75;
        }
        if (sitFeetResult === 2.4){
            return 70;
        }
        if (sitFeetResult === 1.8){
            return 65;
        }
        if (sitFeetResult === 1.1){
            return 60;
        }
        if (sitFeetResult === 0.6){
            return 55;
        }
        if (sitFeetResult === 0.0){
            return 50;
        }
        if (sitFeetResult === -0.6){
            return 45;
        }
        if (sitFeetResult === -1.1){
            return 40;
        }
        if (sitFeetResult === -1.8){
            return 35;
        }
        if (sitFeetResult === -2.4){
            return 30;
        }
        if (sitFeetResult === -3.1){
            return 25;
        }
        if (sitFeetResult === -3.9){
            return 20;
        }
        if (sitFeetResult === -4.8){
            return 15;
        }
        if (sitFeetResult === -5.9){
            return 10;
        }
        if (sitFeetResult === -7.5){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (sitFeetResult === 7.5){
            return 95;
        }
        if (sitFeetResult === 5.8){
            return 90;
        }
        if (sitFeetResult === 4.7){
            return 85;
        }
        if (sitFeetResult === 3.8){
            return 80;
        }
        if (sitFeetResult === 3.0){
            return 75;
        }
        if (sitFeetResult === 2.4){
            return 70;
        }
        if (sitFeetResult === 1.8){
            return 65;
        }
        if (sitFeetResult === 1.1){
            return 60;
        }
        if (sitFeetResult === 0.6){
            return 55;
        }
        if (sitFeetResult === 0.0){
            return 50;
        }
        if (sitFeetResult === -0.6){
            return 45;
        }
        if (sitFeetResult === -1.2){
            return 40;
        }
        if (sitFeetResult === -1.8){
            return 35;
        }
        if (sitFeetResult === -2.4){
            return 30;
        }
        if (sitFeetResult === -3.1){
            return 25;
        }
        if (sitFeetResult === -3.9){
            return 20;
        }
        if (sitFeetResult === -4.8){
            return 15;
        }
        if (sitFeetResult === -5.9){
            return 10;
        }
        if (sitFeetResult === -7.6){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (sitFeetResult === 6.6){
            return 95;
        }
        if (sitFeetResult === 4.9){
            return 90;
        }
        if (sitFeetResult === 3.8){
            return 85;
        }
        if (sitFeetResult === 2.8){
            return 80;
        }
        if (sitFeetResult === 2.0){
            return 75;
        }
        if (sitFeetResult === 1.3){
            return 70;
        }
        if (sitFeetResult === 0.7){
            return 65;
        }
        if (sitFeetResult === 0.1){
            return 60;
        }
        if (sitFeetResult === -0.5){
            return 55;
        }
        if (sitFeetResult === -1.1){
            return 50;
        }
        if (sitFeetResult === -1.7){
            return 45;
        }
        if (sitFeetResult === -2.3){
            return 40;
        }
        if (sitFeetResult === -2.9){
            return 35;
        }
        if (sitFeetResult === -3.5){
            return 30;
        }
        if (sitFeetResult === -4.2){
            return 25;
        }
        if (sitFeetResult === -5.0){
            return 20;
        }
        if (sitFeetResult === -6.0){
            return 15;
        }
        if (sitFeetResult === -7.1){
            return 10;
        }
        if (sitFeetResult === -8.8){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (sitFeetResult === 6.2){
            return 95;
        }
        if (sitFeetResult === 4.4){
            return 90;
        }
        if (sitFeetResult === 3.2){
            return 85;
        }
        if (sitFeetResult === 2.2){
            return 80;
        }
        if (sitFeetResult === 1.4){
            return 75;
        }
        if (sitFeetResult === 0.6){
            return 70;
        }
        if (sitFeetResult === 0.0){
            return 65;
        }
        if (sitFeetResult === -0.8){
            return 60;
        }
        if (sitFeetResult === -1.4){
            return 55;
        }
        if (sitFeetResult === -2.0){
            return 50;
        }
        if (sitFeetResult === -2.6){
            return 45;
        }
        if (sitFeetResult === -3.2){
            return 40;
        }
        if (sitFeetResult === -4.0){
            return 35;
        }
        if (sitFeetResult === -4.6){
            return 30;
        }
        if (sitFeetResult === -5.3){
            return 25;
        }
        if (sitFeetResult === -6.2){
            return 20;
        }
        if (sitFeetResult === -7.2){
            return 15;
        }
        if (sitFeetResult === -8.4){
            return 10;
        }
        if (sitFeetResult === -10.2){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 85 && age <=89 ){
        if (sitFeetResult === 4.5){
            return 95;
        }
        if (sitFeetResult === 3.0){
            return 90;
        }
        if (sitFeetResult === 2.0){
            return 85;
        }
        if (sitFeetResult === 1.1){
            return 80;
        }
        if (sitFeetResult === 0.4){
            return 75;
        }
        if (sitFeetResult === -0.2){
            return 70;
        }
        if (sitFeetResult === -0.8){
            return 65;
        }
        if (sitFeetResult === -1.3){
            return 60;
        }
        if (sitFeetResult === -1.9){
            return 55;
        }
        if (sitFeetResult === -2.4){
            return 50;
        }
        if (sitFeetResult === -2.9){
            return 45;
        }
        if (sitFeetResult === -3.5){
            return 40;
        }
        if (sitFeetResult === -4.0){
            return 35;
        }
        if (sitFeetResult === -4.6){
            return 30;
        }
        if (sitFeetResult === -5.3){
            return 25;
        }
        if (sitFeetResult === -5.9){
            return 20;
        }
        if (sitFeetResult === -6.8){
            return 15;
        }
        if (sitFeetResult === -7.8){
            return 10;
        }
        if (sitFeetResult === -9.3){
            return 5;
        }
    }  
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (sitFeetResult === 3.5){
            return 95;
        }
        if (sitFeetResult === 1.9){
            return 90;
        }
        if (sitFeetResult === 0.9){
            return 85;
        }
        if (sitFeetResult === 0.0){
            return 80;
        }
        if (sitFeetResult === -0.7){
            return 75;
        }
        if (sitFeetResult === -1.4){
            return 70;
        }
        if (sitFeetResult === -1.9){
            return 65;
        }
        if (sitFeetResult === -2.5){
            return 60;
        }
        if (sitFeetResult === -3.0){
            return 55;
        }
        if (sitFeetResult === -3.6){
            return 50;
        }
        if (sitFeetResult === -4.2){
            return 45;
        }
        if (sitFeetResult === -4.7){
            return 40;
        }
        if (sitFeetResult === -5.3){
            return 35;
        }
        if (sitFeetResult === -5.8){
            return 30;
        }
        if (sitFeetResult === -6.5){
            return 25;
        }
        if (sitFeetResult === -7.2){
            return 20;
        }
        if (sitFeetResult === -8.1){
            return 15;
        }
        if (sitFeetResult === -9.1){
            return 10;
        }
        if (sitFeetResult === -10.7){
            return 5;
        }
    }  
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (sitFeetResult === 8.7){
            return 95;
        }
        if (sitFeetResult === 7.2){
            return 90;
        }
        if (sitFeetResult === 6.3){
            return 85;
        }
        if (sitFeetResult === 5.5){
            return 80;
        }
        if (sitFeetResult === 4.8){
            return 75;
        }
        if (sitFeetResult === 4.2){
            return 70;
        }
        if (sitFeetResult === 3.7){
            return 65;
        }
        if (sitFeetResult === 3.1){
            return 60;
        }
        if (sitFeetResult === 2.6){
            return 55;
        }
        if (sitFeetResult === 2.1){
            return 50;
        }
        if (sitFeetResult === 1.6){
            return 45;
        }
        if (sitFeetResult === 1.1){
            return 40;
        }
        if (sitFeetResult === 0.5){
            return 35;
        }
        if (sitFeetResult === 0.0){
            return 30;
        }
        if (sitFeetResult === -0.6){
            return 25;
        }
        if (sitFeetResult === -1.3){
            return 20;
        }
        if (sitFeetResult === -2.1){
            return 15;
        }
        if (sitFeetResult === -3.0){
            return 10;
        }
        if (sitFeetResult === -4.0){
            return 5;
        }
   } 
   if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (sitFeetResult === 7.9){
            return 95;
        }
        if (sitFeetResult === 6.6){
            return 90;
        }
        if (sitFeetResult === 5.7){
            return 85;
        }
        if (sitFeetResult === 5.0){
            return 80;
        }
        if (sitFeetResult === 4.4){
            return 75;
        }
        if (sitFeetResult === 3.9){
            return 70;
        }
        if (sitFeetResult === 3.4){
            return 65;
        }
        if (sitFeetResult === 2.9){
            return 60;
        }
        if (sitFeetResult === 2.5){
            return 55;
        }
        if (sitFeetResult === 2.0){
            return 50;
        }
        if (sitFeetResult === 1.5){
            return 45;
        }
        if (sitFeetResult === 1.1){
            return 40;
        }
        if (sitFeetResult === 0.6){
            return 35;
        }
        if (sitFeetResult === 0.1){
            return 30;
        }
        if (sitFeetResult === -0.4){
            return 25;
        }
        if (sitFeetResult === -1.0){
            return 20;
        }
        if (sitFeetResult === -1.7){
            return 15;
        }
        if (sitFeetResult === -2.6){
            return 10;
        }
        if (sitFeetResult === -3.9){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (sitFeetResult === 7.5){
            return 95;
        }
        if (sitFeetResult === 6.1){
            return 90;
        }
        if (sitFeetResult === 5.2){
            return 85;
        }
        if (sitFeetResult === 4.5){
            return 80;
        }
        if (sitFeetResult === 3.9){
            return 75;
        }
        if (sitFeetResult === 3.3){
            return 70;
        }
        if (sitFeetResult === 2.8){
            return 65;
        }
        if (sitFeetResult === 2.3){
            return 60;
        }
        if (sitFeetResult === 1.9){
            return 55;
        }
        if (sitFeetResult === 1.4){
            return 50;
        }
        if (sitFeetResult === 0.9){
            return 45;
        }
        if (sitFeetResult === 0.5){
            return 40;
        }
        if (sitFeetResult === 0.0){
            return 35;
        }
        if (sitFeetResult === -0.5){
            return 30;
        }
        if (sitFeetResult === -1.1){
            return 25;
        }
        if (sitFeetResult === -1.7){
            return 20;
        }
        if (sitFeetResult === -2.4){
            return 15;
        }
        if (sitFeetResult === -3.3){
            return 10;
        }
        if (sitFeetResult === -4.7){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 75 && age <=79 ){
        if (sitFeetResult === 7.4){
            return 95;
        }
        if (sitFeetResult === 6.1){
            return 90;
        }
        if (sitFeetResult === 5.2){
            return 85;
        }
        if (sitFeetResult === 4.4){
            return 80;
        }
        if (sitFeetResult === 3.7){
            return 75;
        }
        if (sitFeetResult === 3.2){
            return 70;
        }
        if (sitFeetResult === 2.7){
            return 65;
        }
        if (sitFeetResult === 2.1){
            return 60;
        }
        if (sitFeetResult === 1.7){
            return 55;
        }
        if (sitFeetResult === 1.2){
            return 50;
        }
        if (sitFeetResult === 0.7){
            return 45;
        }
        if (sitFeetResult === 0.2){
            return 40;
        }
        if (sitFeetResult === -0.3){
            return 35;
        }
        if (sitFeetResult === -0.8){
            return 30;
        }
        if (sitFeetResult === -1.3){
            return 25;
        }
        if (sitFeetResult === -2.0){
            return 20;
        }
        if (sitFeetResult === -2.8){
            return 15;
        }
        if (sitFeetResult === -3.7){
            return 10;
        }
        if (sitFeetResult === -5.0){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 80 && age <=84 ){
        if (sitFeetResult === 6.6){
            return 95;
        }
        if (sitFeetResult === 5.2){
            return 90;
        }
        if (sitFeetResult === 4.3){
            return 85;
        }
        if (sitFeetResult === 3.6){
            return 80;
        }
        if (sitFeetResult === 3.0){
            return 75;
        }
        if (sitFeetResult === 2.4){
            return 70;
        }
        if (sitFeetResult === 1.9){
            return 65;
        }
        if (sitFeetResult === 1.4){
            return 60;
        }
        if (sitFeetResult === 1.0){
            return 55;
        }
        if (sitFeetResult === 0.5){
            return 50;
        }
        if (sitFeetResult === 0.0){
            return 45;
        }
        if (sitFeetResult === -0.4){
            return 40;
        }
        if (sitFeetResult === -0.9){
            return 35;
        }
        if (sitFeetResult === -1.4){
            return 30;
        }
        if (sitFeetResult === -2.0){
            return 25;
        }
        if (sitFeetResult === -2.6){
            return 20;
        }
        if (sitFeetResult === -3.3){
            return 15;
        }
        if (sitFeetResult === -4.2){
            return 10;
        }
        if (sitFeetResult === -5.0){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 85 && age <=89 ){
        if (sitFeetResult === 6.0){
            return 95;
        }
        if (sitFeetResult === 4.6){
            return 90;
        }
        if (sitFeetResult === 3.7){
            return 85;
        }
        if (sitFeetResult === 3.0){
            return 80;
        }
        if (sitFeetResult === 2.4){
            return 75;
        }
        if (sitFeetResult === 1.8){
            return 70;
        }
        if (sitFeetResult === 1.3){
            return 65;
        }
        if (sitFeetResult === 0.8){
            return 60;
        }
        if (sitFeetResult === 0.4){
            return 55;
        }
        if (sitFeetResult === -0.1){
            return 50;
        }
        if (sitFeetResult === -0.6){
            return 45;
        }
        if (sitFeetResult === -1.0){
            return 40;
        }
        if (sitFeetResult === -1.5){
            return 35;
        }
        if (sitFeetResult === -2.0){
            return 30;
        }
        if (sitFeetResult === -2.6){
            return 25;
        }
        if (sitFeetResult === -3.2){
            return 20;
        }
        if (sitFeetResult === -3.9){
            return 15;
        }
        if (sitFeetResult === -4.8){
            return 10;
        }
        if (sitFeetResult === -6.3){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 90 && age <=94 ){
        if (sitFeetResult === 4.9){
            return 95;
        }
        if (sitFeetResult === 3.4){
            return 90;
        }
        if (sitFeetResult === 2.5){
            return 85;
        }
        if (sitFeetResult === 1.7){
            return 80;
        }
        if (sitFeetResult === 1.0){
            return 75;
        }
        if (sitFeetResult === 0.4){
            return 70;
        }
        if (sitFeetResult === -0.1){
            return 65;
        }
        if (sitFeetResult === -0.7){
            return 60;
        }
        if (sitFeetResult === -1.2){
            return 55;
        }
        if (sitFeetResult === -1.7){
            return 50;
        }
        if (sitFeetResult === -2.2){
            return 45;
        }
        if (sitFeetResult === -2.7){
            return 40;
        }
        if (sitFeetResult === -3.3){
            return 35;
        }
        if (sitFeetResult === -3.8){
            return 30;
        }
        if (sitFeetResult === -4.4){
            return 25;
        }
        if (sitFeetResult === -5.1){
            return 20;
        }
        if (sitFeetResult === -5.9){
            return 15;
        }
        if (sitFeetResult === -6.8){
            return 10;
        }
        if (sitFeetResult === -7.9){
            return 5;
        }
    } 
}