import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentGetBack = ({
    age,
    sex,
    getBackResult,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (getBackResult === 4.5){
            return 95;
        }
        if (getBackResult === 2.7){
            return 90;
        }
        if (getBackResult === 1.6){
            return 85;
        }
        if (getBackResult === 0.6){
            return 80;
        }
        if (getBackResult === -0.2){
            return 75;
        }
        if (getBackResult === -0.9){
            return 70;
        }
        if (getBackResult === -1.5){
            return 65;
        }
        if (getBackResult === -2.2){
            return 60;
        }
        if (getBackResult === -2.8){
            return 55;
        }
        if (getBackResult === -3.4){
            return 50;
        }
        if (getBackResult === -4.0){
            return 45;
        }
        if (getBackResult === -4.6){
            return 40;
        }
        if (getBackResult === -5.3){
            return 35;
        }
        if (getBackResult === -5.9){
            return 30;
        }
        if (getBackResult === -6.6){
            return 25;
        }
        if (getBackResult === -7.4){
            return 20;
        }
        if (getBackResult === -8.4){
            return 15;
        }
        if (getBackResult === -9.5){
            return 10;
        }
        if (getBackResult === -11.3){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
        if (getBackResult === 3.9){
            return 95;
        }
        if (getBackResult === 2.2){
            return 90;
        }
        if (getBackResult === 1.0){
            return 85;
        }
        if (getBackResult === 0.0){
            return 80;
        }
        if (getBackResult === -0.8){
            return 75;
        }
        if (getBackResult === -1.6){
            return 70;
        }
        if (getBackResult === -2.2){
            return 65;
        }
        if (getBackResult === -2.9){
            return 60;
        }
        if (getBackResult === -3.5){
            return 55;
        }
        if (getBackResult === -4.1){
            return 50;
        }
        if (getBackResult === -4.7){
            return 45;
        }
        if (getBackResult === -5.3){
            return 40;
        }
        if (getBackResult === -6.0){
            return 35;
        }
        if (getBackResult === -6.6){
            return 30;
        }
        if (getBackResult === -7.4){
            return 25;
        }
        if (getBackResult === -8.2){
            return 20;
        }
        if (getBackResult === -9.2){
            return 15;
        }
        if (getBackResult === -10.4){
            return 10;
        }
        if (getBackResult === -12.1){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (getBackResult === 3.5){
            return 95;
        }
        if (getBackResult === 1.8){
            return 90;
        }
        if (getBackResult === 0.6){
            return 85;
        }
        if (getBackResult === -0.4){
            return 80;
        }
        if (getBackResult === -1.2){
            return 75;
        }
        if (getBackResult === -2.0){
            return 70;
        }
        if (getBackResult === -2.6){
            return 65;
        }
        if (getBackResult === -3.3){
            return 60;
        }
        if (getBackResult === -3.9){
            return 55;
        }
        if (getBackResult === -4.5){
            return 50;
        }
        if (getBackResult === -5.1){
            return 45;
        }
        if (getBackResult === -5.7){
            return 40;
        }
        if (getBackResult === -6.4){
            return 35;
        }
        if (getBackResult === -7.0){
            return 30;
        }
        if (getBackResult === -7.8){
            return 25;
        }
        if (getBackResult === -8.6){
            return 20;
        }
        if (getBackResult === -9.6){
            return 15;
        }
        if (getBackResult === -10.8){
            return 10;
        }
        if (getBackResult === -12.5){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (getBackResult === 2.8){
            return 95;
        }
        if (getBackResult === 0.9){
            return 90;
        }
        if (getBackResult === -0.3){
            return 85;
        }
        if (getBackResult === -1.3){
            return 80;
        }
        if (getBackResult === -2.2){
            return 75;
        }
        if (getBackResult === -2.9){
            return 70;
        }
        if (getBackResult === -3.6){
            return 65;
        }
        if (getBackResult === -4.3){
            return 60;
        }
        if (getBackResult === -4.9){
            return 55;
        }
        if (getBackResult === -5.6){
            return 50;
        }
        if (getBackResult === -6.3){
            return 45;
        }
        if (getBackResult === -6.9){
            return 40;
        }
        if (getBackResult === -7.6){
            return 35;
        }
        if (getBackResult === -8.3){
            return 30;
        }
        if (getBackResult === -9.0){
            return 25;
        }
        if (getBackResult === -9.9){
            return 20;
        }
        if (getBackResult === -10.9){
            return 15;
        }
        if (getBackResult === -12.1){
            return 10;
        }
        if (getBackResult === -14.0){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (getBackResult === 2.2){
            return 95;
        }
        if (getBackResult === 1.2){
            return 90;
        }
        if (getBackResult === -0.1){
            return 85;
        }
        if (getBackResult === -1.2){
            return 80;
        }
        if (getBackResult === -2.1){
            return 75;
        }
        if (getBackResult === -2.9){
            return 70;
        }
        if (getBackResult === -3.6){
            return 65;
        }
        if (getBackResult === -4.3){
            return 60;
        }
        if (getBackResult === -5.0){
            return 55;
        }
        if (getBackResult === -5.7){
            return 50;
        }
        if (getBackResult === -6.4){
            return 45;
        }
        if (getBackResult === -7.1){
            return 40;
        }
        if (getBackResult === -7.8){
            return 35;
        }
        if (getBackResult === -8.5){
            return 30;
        }
        if (getBackResult === -9.3){
            return 25;
        }
        if (getBackResult === -10.2){
            return 20;
        }
        if (getBackResult === -11.3){
            return 15;
        }
        if (getBackResult === -12.6){
            return 10;
        }
        if (getBackResult === -14.6){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 85 && age <=89 ){
        if (getBackResult === 1.7){
            return 95;
        }
        if (getBackResult === -0.1){
            return 90;
        }
        if (getBackResult === -1.2){
            return 85;
        }
        if (getBackResult === -2.2){
            return 80;
        }
        if (getBackResult === -3.0){
            return 75;
        }
        if (getBackResult === -3.7){
            return 70;
        }
        if (getBackResult === -4.3){
            return 65;
        }
        if (getBackResult === -5.0){
            return 60;
        }
        if (getBackResult === -5.6){
            return 55;
        }
        if (getBackResult === -6.2){
            return 50;
        }
        if (getBackResult === -6.8){
            return 45;
        }
        if (getBackResult === -7.4){
            return 40;
        }
        if (getBackResult === -8.1){
            return 35;
        }
        if (getBackResult === -8.7){
            return 30;
        }
        if (getBackResult === -9.4){
            return 25;
        }
        if (getBackResult === -10.2){
            return 20;
        }
        if (getBackResult === -11.2){
            return 15;
        }
        if (getBackResult === -12.3){
            return 10;
        }
        if (getBackResult === -14.1){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (getBackResult === 0.7){
            return 95;
        }
        if (getBackResult === -1.1){
            return 90;
        }
        if (getBackResult === -2.2){
            return 85;
        }
        if (getBackResult === -3.2){
            return 80;
        }
        if (getBackResult === -4.0){
            return 75;
        }
        if (getBackResult === -4.7){
            return 70;
        }
        if (getBackResult === -5.3){
            return 65;
        }
        if (getBackResult === -6.0){
            return 60;
        }
        if (getBackResult === -6.6){
            return 55;
        }
        if (getBackResult === -7.2){
            return 50;
        }
        if (getBackResult === -7.8){
            return 45;
        }
        if (getBackResult === -8.4){
            return 40;
        }
        if (getBackResult === -9.1){
            return 35;
        }
        if (getBackResult === -9.7){
            return 30;
        }
        if (getBackResult === -10.4){
            return 25;
        }
        if (getBackResult === -11.2){
            return 20;
        }
        if (getBackResult === -12.2){
            return 15;
        }
        if (getBackResult === -13.3){
            return 10;
        }
        if (getBackResult === -15.1){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (getBackResult === 5.0){
            return 95;
        }
        if (getBackResult === 3.8){
            return 90;
        }
        if (getBackResult === 2.9){
            return 85;
        }
        if (getBackResult === 2.2){
            return 80;
        }
        if (getBackResult === 1.6){
            return 75;
        }
        if (getBackResult === 1.1){
            return 70;
        }
        if (getBackResult === 0.7){
            return 65;
        }
        if (getBackResult === 0.2){
            return 60;
        }
        if (getBackResult === -0.2){
            return 55;
        }
        if (getBackResult === -0.7){
            return 50;
        }
        if (getBackResult === -1.2){
            return 45;
        }
        if (getBackResult === -1.6){
            return 40;
        }
        if (getBackResult === -2.1){
            return 35;
        }
        if (getBackResult === -2.5){
            return 30;
        }
        if (getBackResult === -3.0){
            return 25;
        }
        if (getBackResult === -3.6){
            return 20;
        }
        if (getBackResult === -4.3){
            return 15;
        }
        if (getBackResult === -5.2){
            return 10;
        }
        if (getBackResult === -6.4){
            return 5;
        }
   } 
   if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (getBackResult === 4.9){
            return 95;
        }
        if (getBackResult === 3.5){
            return 90;
        }
        if (getBackResult === 2.6){
            return 85;
        }
        if (getBackResult === 1.9){
            return 80;
        }
        if (getBackResult === 1.3){
            return 75;
        }
        if (getBackResult === 0.7){
            return 70;
        }
        if (getBackResult === 0.2){
            return 65;
        }
        if (getBackResult === -0.3){
            return 60;
        }
        if (getBackResult === -0.7){
            return 55;
        }
        if (getBackResult === -1.2){
            return 50;
        }
        if (getBackResult === -1.7){
            return 45;
        }
        if (getBackResult === -2.1){
            return 40;
        }
        if (getBackResult === -2.6){
            return 35;
        }
        if (getBackResult === -3.1){
            return 30;
        }
        if (getBackResult === -3.7){
            return 25;
        }
        if (getBackResult === -4.3){
            return 20;
        }
        if (getBackResult === -5.0){
            return 15;
        }
        if (getBackResult === -5.9){
            return 10;
        }
        if (getBackResult === -7.3){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (getBackResult === 4.5){
            return 95;
        }
        if (getBackResult === 3.2){
            return 90;
        }
        if (getBackResult === 2.3){
            return 85;
        }
        if (getBackResult === 1.5){
            return 80;
        }
        if (getBackResult === 0.8){
            return 75;
        }
        if (getBackResult === 0.3){
            return 70;
        }
        if (getBackResult === -0.2){
            return 65;
        }
        if (getBackResult === -0.8){
            return 60;
        }
        if (getBackResult === -1.2){
            return 55;
        }
        if (getBackResult === -1.7){
            return 50;
        }
        if (getBackResult === -2.2){
            return 45;
        }
        if (getBackResult === -2.6){
            return 40;
        }
        if (getBackResult === -3.2){
            return 35;
        }
        if (getBackResult === -3.7){
            return 30;
        }
        if (getBackResult === -4.2){
            return 25;
        }
        if (getBackResult === -4.9){
            return 20;
        }
        if (getBackResult === -5.7){
            return 15;
        }
        if (getBackResult === -6.6){
            return 10;
        }
        if (getBackResult === -7.9){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 75 && age <=79 ){
        if (getBackResult === 4.5){
            return 95;
        }
        if (getBackResult === 3.1){
            return 90;
        }
        if (getBackResult === 2.2){
            return 85;
        }
        if (getBackResult === 1.3){
            return 80;
        }
        if (getBackResult === 0.6){
            return 75;
        }
        if (getBackResult === 0.0){
            return 70;
        }
        if (getBackResult === -0.5){
            return 65;
        }
        if (getBackResult === -1.1){
            return 60;
        }
        if (getBackResult === -1.6){
            return 55;
        }
        if (getBackResult === -2.1){
            return 50;
        }
        if (getBackResult === -2.6){
            return 45;
        }
        if (getBackResult === -3.1){
            return 40;
        }
        if (getBackResult === -3.7){
            return 35;
        }
        if (getBackResult === -4.2){
            return 30;
        }
        if (getBackResult === -4.8){
            return 25;
        }
        if (getBackResult === -5.5){
            return 20;
        }
        if (getBackResult === -6.4){
            return 15;
        }
        if (getBackResult === -7.3){
            return 10;
        }
        if (getBackResult === -8.8){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 80 && age <=84 ){
        if (getBackResult === 4.3){
            return 95;
        }
        if (getBackResult === 2.8){
            return 90;
        }
        if (getBackResult === 1.8){
            return 85;
        }
        if (getBackResult === 0.9){
            return 80;
        }
        if (getBackResult === 0.2){
            return 75;
        }
        if (getBackResult === -0.4){
            return 70;
        }
        if (getBackResult === -1.0){
            return 65;
        }
        if (getBackResult === -1.6){
            return 60;
        }
        if (getBackResult === -2.1){
            return 55;
        }
        if (getBackResult === -2.6){
            return 50;
        }
        if (getBackResult === -3.1){
            return 45;
        }
        if (getBackResult === -3.7){
            return 40;
        }
        if (getBackResult === -4.2){
            return 35;
        }
        if (getBackResult === -4.8){
            return 30;
        }
        if (getBackResult === -5.4){
            return 25;
        }
        if (getBackResult === -6.1){
            return 20;
        }
        if (getBackResult === -7.0){
            return 15;
        }
        if (getBackResult === -8.0){
            return 10;
        }
        if (getBackResult === -9.5){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 85 && age <=89 ){
        if (getBackResult === 3.5){
            return 95;
        }
        if (getBackResult === 1.9){
            return 90;
        }
        if (getBackResult === 0.8){
            return 85;
        }
        if (getBackResult === -0.1){
            return 80;
        }
        if (getBackResult === -0.9){
            return 75;
        }
        if (getBackResult === -1.6){
            return 70;
        }
        if (getBackResult === -2.1){
            return 65;
        }
        if (getBackResult === -2.8){
            return 60;
        }
        if (getBackResult === -3.3){
            return 55;
        }
        if (getBackResult === -3.9){
            return 50;
        }
        if (getBackResult === -4.5){
            return 45;
        }
        if (getBackResult === -5.0){
            return 40;
        }
        if (getBackResult === -5.7){
            return 35;
        }
        if (getBackResult === -6.2){
            return 30;
        }
        if (getBackResult === -6.9){
            return 25;
        }
        if (getBackResult === -7.7){
            return 20;
        }
        if (getBackResult === -8.6){
            return 15;
        }
        if (getBackResult === -9.7){
            return 10;
        }
        if (getBackResult === -11.3){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 90 && age <=94 ){
        if (getBackResult === 3.9){
            return 95;
        }
        if (getBackResult === 2.2){
            return 90;
        }
        if (getBackResult === 0.9){
            return 85;
        }
        if (getBackResult === -0.1){
            return 80;
        }
        if (getBackResult === -1.0){
            return 75;
        }
        if (getBackResult === -1.8){
            return 70;
        }
        if (getBackResult === -2.5){
            return 65;
        }
        if (getBackResult === -3.2){
            return 60;
        }
        if (getBackResult === -3.8){
            return 55;
        }
        if (getBackResult === -4.5){
            return 50;
        }
        if (getBackResult === -5.2){
            return 45;
        }
        if (getBackResult === -5.8){
            return 40;
        }
        if (getBackResult === -6.5){
            return 35;
        }
        if (getBackResult === -7.2){
            return 30;
        }
        if (getBackResult === -8.0){
            return 25;
        }
        if (getBackResult === -8.9){
            return 20;
        }
        if (getBackResult === -9.9){
            return 15;
        }
        if (getBackResult === -11.2){
            return 10;
        }
        if (getBackResult === -13.0){
            return 5;
        }
    } 
}