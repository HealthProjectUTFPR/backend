import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentGetBack = ({
    age,
    sex,
    getBack,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (getBack === 4.5){
            return 95;
        }
        if (getBack === 2.7){
            return 90;
        }
        if (getBack === 1.6){
            return 85;
        }
        if (getBack === 0.6){
            return 80;
        }
        if (getBack === -0.2){
            return 75;
        }
        if (getBack === -0.9){
            return 70;
        }
        if (getBack === -1.5){
            return 65;
        }
        if (getBack === -2.2){
            return 60;
        }
        if (getBack === -2.8){
            return 55;
        }
        if (getBack === -3.4){
            return 50;
        }
        if (getBack === -4.0){
            return 45;
        }
        if (getBack === -4.6){
            return 40;
        }
        if (getBack === -5.3){
            return 35;
        }
        if (getBack === -5.9){
            return 30;
        }
        if (getBack === -6.6){
            return 25;
        }
        if (getBack === -7.4){
            return 20;
        }
        if (getBack === -8.4){
            return 15;
        }
        if (getBack === -9.5){
            return 10;
        }
        if (getBack === -11.3){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
        if (getBack === 3.9){
            return 95;
        }
        if (getBack === 2.2){
            return 90;
        }
        if (getBack === 1.0){
            return 85;
        }
        if (getBack === 0.0){
            return 80;
        }
        if (getBack === -0.8){
            return 75;
        }
        if (getBack === -1.6){
            return 70;
        }
        if (getBack === -2.2){
            return 65;
        }
        if (getBack === -2.9){
            return 60;
        }
        if (getBack === -3.5){
            return 55;
        }
        if (getBack === -4.1){
            return 50;
        }
        if (getBack === -4.7){
            return 45;
        }
        if (getBack === -5.3){
            return 40;
        }
        if (getBack === -6.0){
            return 35;
        }
        if (getBack === -6.6){
            return 30;
        }
        if (getBack === -7.4){
            return 25;
        }
        if (getBack === -8.2){
            return 20;
        }
        if (getBack === -9.2){
            return 15;
        }
        if (getBack === -10.4){
            return 10;
        }
        if (getBack === -12.1){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (getBack === 3.5){
            return 95;
        }
        if (getBack === 1.8){
            return 90;
        }
        if (getBack === 0.6){
            return 85;
        }
        if (getBack === -0.4){
            return 80;
        }
        if (getBack === -1.2){
            return 75;
        }
        if (getBack === -2.0){
            return 70;
        }
        if (getBack === -2.6){
            return 65;
        }
        if (getBack === -3.3){
            return 60;
        }
        if (getBack === -3.9){
            return 55;
        }
        if (getBack === -4.5){
            return 50;
        }
        if (getBack === -5.1){
            return 45;
        }
        if (getBack === -5.7){
            return 40;
        }
        if (getBack === -6.4){
            return 35;
        }
        if (getBack === -7.0){
            return 30;
        }
        if (getBack === -7.8){
            return 25;
        }
        if (getBack === -8.6){
            return 20;
        }
        if (getBack === -9.6){
            return 15;
        }
        if (getBack === -10.8){
            return 10;
        }
        if (getBack === -12.5){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (getBack === 2.8){
            return 95;
        }
        if (getBack === 0.9){
            return 90;
        }
        if (getBack === -0.3){
            return 85;
        }
        if (getBack === -1.3){
            return 80;
        }
        if (getBack === -2.2){
            return 75;
        }
        if (getBack === -2.9){
            return 70;
        }
        if (getBack === -3.6){
            return 65;
        }
        if (getBack === -4.3){
            return 60;
        }
        if (getBack === -4.9){
            return 55;
        }
        if (getBack === -5.6){
            return 50;
        }
        if (getBack === -6.3){
            return 45;
        }
        if (getBack === -6.9){
            return 40;
        }
        if (getBack === -7.6){
            return 35;
        }
        if (getBack === -8.3){
            return 30;
        }
        if (getBack === -9.0){
            return 25;
        }
        if (getBack === -9.9){
            return 20;
        }
        if (getBack === -10.9){
            return 15;
        }
        if (getBack === -12.1){
            return 10;
        }
        if (getBack === -14.0){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (getBack === 2.2){
            return 95;
        }
        if (getBack === 1.2){
            return 90;
        }
        if (getBack === -0.1){
            return 85;
        }
        if (getBack === -1.2){
            return 80;
        }
        if (getBack === -2.1){
            return 75;
        }
        if (getBack === -2.9){
            return 70;
        }
        if (getBack === -3.6){
            return 65;
        }
        if (getBack === -4.3){
            return 60;
        }
        if (getBack === -5.0){
            return 55;
        }
        if (getBack === -5.7){
            return 50;
        }
        if (getBack === -6.4){
            return 45;
        }
        if (getBack === -7.1){
            return 40;
        }
        if (getBack === -7.8){
            return 35;
        }
        if (getBack === -8.5){
            return 30;
        }
        if (getBack === -9.3){
            return 25;
        }
        if (getBack === -10.2){
            return 20;
        }
        if (getBack === -11.3){
            return 15;
        }
        if (getBack === -12.6){
            return 10;
        }
        if (getBack === -14.6){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 85 && age <=89 ){
        if (getBack === 1.7){
            return 95;
        }
        if (getBack === -0.1){
            return 90;
        }
        if (getBack === -1.2){
            return 85;
        }
        if (getBack === -2.2){
            return 80;
        }
        if (getBack === -3.0){
            return 75;
        }
        if (getBack === -3.7){
            return 70;
        }
        if (getBack === -4.3){
            return 65;
        }
        if (getBack === -5.0){
            return 60;
        }
        if (getBack === -5.6){
            return 55;
        }
        if (getBack === -6.2){
            return 50;
        }
        if (getBack === -6.8){
            return 45;
        }
        if (getBack === -7.4){
            return 40;
        }
        if (getBack === -8.1){
            return 35;
        }
        if (getBack === -8.7){
            return 30;
        }
        if (getBack === -9.4){
            return 25;
        }
        if (getBack === -10.2){
            return 20;
        }
        if (getBack === -11.2){
            return 15;
        }
        if (getBack === -12.3){
            return 10;
        }
        if (getBack === -14.1){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (getBack === 0.7){
            return 95;
        }
        if (getBack === -1.1){
            return 90;
        }
        if (getBack === -2.2){
            return 85;
        }
        if (getBack === -3.2){
            return 80;
        }
        if (getBack === -4.0){
            return 75;
        }
        if (getBack === -4.7){
            return 70;
        }
        if (getBack === -5.3){
            return 65;
        }
        if (getBack === -6.0){
            return 60;
        }
        if (getBack === -6.6){
            return 55;
        }
        if (getBack === -7.2){
            return 50;
        }
        if (getBack === -7.8){
            return 45;
        }
        if (getBack === -8.4){
            return 40;
        }
        if (getBack === -9.1){
            return 35;
        }
        if (getBack === -9.7){
            return 30;
        }
        if (getBack === -10.4){
            return 25;
        }
        if (getBack === -11.2){
            return 20;
        }
        if (getBack === -12.2){
            return 15;
        }
        if (getBack === -13.3){
            return 10;
        }
        if (getBack === -15.1){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (getBack === 5.0){
            return 95;
        }
        if (getBack === 3.8){
            return 90;
        }
        if (getBack === 2.9){
            return 85;
        }
        if (getBack === 2.2){
            return 80;
        }
        if (getBack === 1.6){
            return 75;
        }
        if (getBack === 1.1){
            return 70;
        }
        if (getBack === 0.7){
            return 65;
        }
        if (getBack === 0.2){
            return 60;
        }
        if (getBack === -0.2){
            return 55;
        }
        if (getBack === -0.7){
            return 50;
        }
        if (getBack === -1.2){
            return 45;
        }
        if (getBack === -1.6){
            return 40;
        }
        if (getBack === -2.1){
            return 35;
        }
        if (getBack === -2.5){
            return 30;
        }
        if (getBack === -3.0){
            return 25;
        }
        if (getBack === -3.6){
            return 20;
        }
        if (getBack === -4.3){
            return 15;
        }
        if (getBack === -5.2){
            return 10;
        }
        if (getBack === -6.4){
            return 5;
        }
   } 
   if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (getBack === 4.9){
            return 95;
        }
        if (getBack === 3.5){
            return 90;
        }
        if (getBack === 2.6){
            return 85;
        }
        if (getBack === 1.9){
            return 80;
        }
        if (getBack === 1.3){
            return 75;
        }
        if (getBack === 0.7){
            return 70;
        }
        if (getBack === 0.2){
            return 65;
        }
        if (getBack === -0.3){
            return 60;
        }
        if (getBack === -0.7){
            return 55;
        }
        if (getBack === -1.2){
            return 50;
        }
        if (getBack === -1.7){
            return 45;
        }
        if (getBack === -2.1){
            return 40;
        }
        if (getBack === -2.6){
            return 35;
        }
        if (getBack === -3.1){
            return 30;
        }
        if (getBack === -3.7){
            return 25;
        }
        if (getBack === -4.3){
            return 20;
        }
        if (getBack === -5.0){
            return 15;
        }
        if (getBack === -5.9){
            return 10;
        }
        if (getBack === -7.3){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (getBack === 4.5){
            return 95;
        }
        if (getBack === 3.2){
            return 90;
        }
        if (getBack === 2.3){
            return 85;
        }
        if (getBack === 1.5){
            return 80;
        }
        if (getBack === 0.8){
            return 75;
        }
        if (getBack === 0.3){
            return 70;
        }
        if (getBack === -0.2){
            return 65;
        }
        if (getBack === -0.8){
            return 60;
        }
        if (getBack === -1.2){
            return 55;
        }
        if (getBack === -1.7){
            return 50;
        }
        if (getBack === -2.2){
            return 45;
        }
        if (getBack === -2.6){
            return 40;
        }
        if (getBack === -3.2){
            return 35;
        }
        if (getBack === -3.7){
            return 30;
        }
        if (getBack === -4.2){
            return 25;
        }
        if (getBack === -4.9){
            return 20;
        }
        if (getBack === -5.7){
            return 15;
        }
        if (getBack === -6.6){
            return 10;
        }
        if (getBack === -7.9){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 75 && age <=79 ){
        if (getBack === 4.5){
            return 95;
        }
        if (getBack === 3.1){
            return 90;
        }
        if (getBack === 2.2){
            return 85;
        }
        if (getBack === 1.3){
            return 80;
        }
        if (getBack === 0.6){
            return 75;
        }
        if (getBack === 0.0){
            return 70;
        }
        if (getBack === -0.5){
            return 65;
        }
        if (getBack === -1.1){
            return 60;
        }
        if (getBack === -1.6){
            return 55;
        }
        if (getBack === -2.1){
            return 50;
        }
        if (getBack === -2.6){
            return 45;
        }
        if (getBack === -3.1){
            return 40;
        }
        if (getBack === -3.7){
            return 35;
        }
        if (getBack === -4.2){
            return 30;
        }
        if (getBack === -4.8){
            return 25;
        }
        if (getBack === -5.5){
            return 20;
        }
        if (getBack === -6.4){
            return 15;
        }
        if (getBack === -7.3){
            return 10;
        }
        if (getBack === -8.8){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 80 && age <=84 ){
        if (getBack === 4.3){
            return 95;
        }
        if (getBack === 2.8){
            return 90;
        }
        if (getBack === 1.8){
            return 85;
        }
        if (getBack === 0.9){
            return 80;
        }
        if (getBack === 0.2){
            return 75;
        }
        if (getBack === -0.4){
            return 70;
        }
        if (getBack === -1.0){
            return 65;
        }
        if (getBack === -1.6){
            return 60;
        }
        if (getBack === -2.1){
            return 55;
        }
        if (getBack === -2.6){
            return 50;
        }
        if (getBack === -3.1){
            return 45;
        }
        if (getBack === -3.7){
            return 40;
        }
        if (getBack === -4.2){
            return 35;
        }
        if (getBack === -4.8){
            return 30;
        }
        if (getBack === -5.4){
            return 25;
        }
        if (getBack === -6.1){
            return 20;
        }
        if (getBack === -7.0){
            return 15;
        }
        if (getBack === -8.0){
            return 10;
        }
        if (getBack === -9.5){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 85 && age <=89 ){
        if (getBack === 3.5){
            return 95;
        }
        if (getBack === 1.9){
            return 90;
        }
        if (getBack === 0.8){
            return 85;
        }
        if (getBack === -0.1){
            return 80;
        }
        if (getBack === -0.9){
            return 75;
        }
        if (getBack === -1.6){
            return 70;
        }
        if (getBack === -2.1){
            return 65;
        }
        if (getBack === -2.8){
            return 60;
        }
        if (getBack === -3.3){
            return 55;
        }
        if (getBack === -3.9){
            return 50;
        }
        if (getBack === -4.5){
            return 45;
        }
        if (getBack === -5.0){
            return 40;
        }
        if (getBack === -5.7){
            return 35;
        }
        if (getBack === -6.2){
            return 30;
        }
        if (getBack === -6.9){
            return 25;
        }
        if (getBack === -7.7){
            return 20;
        }
        if (getBack === -8.6){
            return 15;
        }
        if (getBack === -9.7){
            return 10;
        }
        if (getBack === -11.3){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 90 && age <=94 ){
        if (getBack === 3.9){
            return 95;
        }
        if (getBack === 2.2){
            return 90;
        }
        if (getBack === 0.9){
            return 85;
        }
        if (getBack === -0.1){
            return 80;
        }
        if (getBack === -1.0){
            return 75;
        }
        if (getBack === -1.8){
            return 70;
        }
        if (getBack === -2.5){
            return 65;
        }
        if (getBack === -3.2){
            return 60;
        }
        if (getBack === -3.8){
            return 55;
        }
        if (getBack === -4.5){
            return 50;
        }
        if (getBack === -5.2){
            return 45;
        }
        if (getBack === -5.8){
            return 40;
        }
        if (getBack === -6.5){
            return 35;
        }
        if (getBack === -7.2){
            return 30;
        }
        if (getBack === -8.0){
            return 25;
        }
        if (getBack === -8.9){
            return 20;
        }
        if (getBack === -9.9){
            return 15;
        }
        if (getBack === -11.2){
            return 10;
        }
        if (getBack === -13.0){
            return 5;
        }
    } 
}