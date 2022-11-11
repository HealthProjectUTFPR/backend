import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentTug = ({
    age,
    sex,
    TUGResult,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (TUGResult === 3.0){
            return 90;
        }
        if (TUGResult === 3.3){
            return 85;
        }
        if (TUGResult === 3.6){
            return 80;
        }
        if (TUGResult === 3.8){
            return 75;
        }
        if (TUGResult === 4.0){
            return 70;
        }
        if (TUGResult === 4.2){
            return 65;
        }
        if (TUGResult === 4.4){
            return 60;
        }
        if (TUGResult === 4.5){
            return 55;
        }
        if (TUGResult === 4.7){
            return 50;
        }
        if (TUGResult === 4.9){
            return 45;
        }
        if (TUGResult === 5.0){
            return 40;
        }
        if (TUGResult === 5.2){
            return 35;
        }
        if (TUGResult === 5.4){
            return 30;
        }
        if (TUGResult === 5.6){
            return 25;
        }
        if (TUGResult === 5.8){
            return 20;
        }
        if (TUGResult === 6.1){
            return 15;
        }
        if (TUGResult === 6.4){
            return 10;
        }
        if (TUGResult === 6.8){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
        if (TUGResult === 3.1){
            return 95;
        }
        if (TUGResult === 3.6){
            return 90;
        }
        if (TUGResult === 3.9){
            return 85;
        }
        if (TUGResult === 4.1){
            return 80;
        }
        if (TUGResult === 4.3){
            return 75;
        }
        if (TUGResult === 4.5){
            return 70;
        }
        if (TUGResult === 4.6){
            return 65;
        }
        if (TUGResult === 4.8){
            return 60;
        }
        if (TUGResult === 4.9){
            return 55;
        }
        if (TUGResult === 5.1){
            return 50;
        }
        if (TUGResult === 5.3){
            return 45;
        }
        if (TUGResult === 5.4){
            return 40;
        }
        if (TUGResult === 5.6){
            return 35;
        }
        if (TUGResult === 5.7){
            return 30;
        }
        if (TUGResult === 5.9){
            return 25;
        }
        if (TUGResult === 6.1){
            return 20;
        }
        if (TUGResult === 6.3){
            return 15;
        }
        if (TUGResult === 6.6){
            return 10;
        }
        if (TUGResult === 7.1){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (TUGResult === 3.2){
            return 95;
        }
        if (TUGResult === 3.6){
            return 90;
        }
        if (TUGResult === 3.9){
            return 85;
        }
        if (TUGResult === 4.2){
            return 80;
        }
        if (TUGResult === 4.4){
            return 75;
        }
        if (TUGResult === 4.6){
            return 70;
        }
        if (TUGResult === 4.8){
            return 65;
        }
        if (TUGResult === 5.0){
            return 60;
        }
        if (TUGResult === 5.1){
            return 55;
        }
        if (TUGResult === 5.3){
            return 50;
        }
        if (TUGResult === 5.5){
            return 45;
        }
        if (TUGResult === 5.6){
            return 40;
        }
        if (TUGResult === 5.8){
            return 35;
        }
        if (TUGResult === 6.0){
            return 30;
        }
        if (TUGResult === 6.2){
            return 25;
        }
        if (TUGResult === 6.4){
            return 20;
        }
        if (TUGResult === 6.7){
            return 15;
        }
        if (TUGResult === 7.0){
            return 10;
        }
        if (TUGResult === 7.4){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (TUGResult === 3.3){
            return 95;
        }
        if (TUGResult === 3.5){
            return 90;
        }
        if (TUGResult === 3.9){
            return 85;
        }
        if (TUGResult === 4.3){
            return 80;
        }
        if (TUGResult === 4.6){
            return 75;
        }
        if (TUGResult === 4.9){
            return 70;
        }
        if (TUGResult === 5.2){
            return 65;
        }
        if (TUGResult === 5.4){
            return 60;
        }
        if (TUGResult === 5.7){
            return 55;
        }
        if (TUGResult === 5.9){
            return 50;
        }
        if (TUGResult === 6.1){
            return 45;
        }
        if (TUGResult === 6.4){
            return 40;
        }
        if (TUGResult === 6.6){
            return 35;
        }
        if (TUGResult === 6.9){
            return 30;
        }
        if (TUGResult === 7.2){
            return 25;
        }
        if (TUGResult === 7.5){
            return 20;
        }
        if (TUGResult === 7.9){
            return 15;
        }
        if (TUGResult === 8.3){
            return 10;
        }
        if (TUGResult === 9.0){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (TUGResult === 4.0){
            return 95;
        }
        if (TUGResult === 4.1){
            return 90;
        }
        if (TUGResult === 4.5){
            return 85;
        }
        if (TUGResult === 4.9){
            return 80;
        }
        if (TUGResult === 5.2){
            return 75;
        }
        if (TUGResult === 5.5){
            return 70;
        }
        if (TUGResult === 5.7){
            return 65;
        }
        if (TUGResult === 6.0){
            return 60;
        }
        if (TUGResult === 6.2){
            return 55;
        }
        if (TUGResult === 6.4){
            return 50;
        }
        if (TUGResult === 6.6){
            return 45;
        }
        if (TUGResult === 6.9){
            return 40;
        }
        if (TUGResult === 7.1){
            return 35;
        }
        if (TUGResult === 7.3){
            return 30;
        }
        if (TUGResult === 7.6){
            return 25;
        }
        if (TUGResult === 7.9){
            return 20;
        }
        if (TUGResult === 8.3){
            return 15;
        }
        if (TUGResult === 8.7){
            return 10;
        }
        if (TUGResult === 9.4){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 85 && age <=89 ){
        if (TUGResult === 4.0){
            return 95;
        }
        if (TUGResult === 4.3){
            return 90;
        }
        if (TUGResult === 4.5){
            return 85;
        }
        if (TUGResult === 5.0){
            return 80;
        }
        if (TUGResult === 5.5){
            return 75;
        }
        if (TUGResult === 5.8){
            return 70;
        }
        if (TUGResult === 6.2){
            return 65;
        }
        if (TUGResult === 6.5){
            return 60;
        }
        if (TUGResult === 6.9){
            return 55;
        }
        if (TUGResult === 7.2){
            return 50;
        }
        if (TUGResult === 7.5){
            return 45;
        }
        if (TUGResult === 7.9){
            return 40;
        }
        if (TUGResult === 8.2){
            return 35;
        }
        if (TUGResult === 8.6){
            return 30;
        }
        if (TUGResult === 8.9){
            return 25;
        }
        if (TUGResult === 9.47){
            return 20;
        }
        if (TUGResult === 9.9){
            return 15;
        }
        if (TUGResult === 10.5){
            return 10;
        }
        if (TUGResult === 11.5){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (TUGResult === 4.3){
            return 95;
        }
        if (TUGResult === 4.5){
            return 90;
        }
        if (TUGResult === 5.1){
            return 85;
        }
        if (TUGResult === 5.7){
            return 80;
        }
        if (TUGResult === 6.2){
            return 75;
        }
        if (TUGResult === 6.6){
            return 70;
        }
        if (TUGResult === 7.0){
            return 65;
        }
        if (TUGResult === 7.4){
            return 60;
        }
        if (TUGResult === 7.7){
            return 55;
        }
        if (TUGResult === 8.1){
            return 50;
        }
        if (TUGResult === 8.5){
            return 45;
        }
        if (TUGResult === 8.8){
            return 40;
        }
        if (TUGResult === 9.2){
            return 35;
        }
        if (TUGResult === 9.6){
            return 30;
        }
        if (TUGResult === 10.0){
            return 25;
        }
        if (TUGResult === 10.5){
            return 20;
        }
        if (TUGResult === 11.1){
            return 15;
        }
        if (TUGResult === 11.8){
            return 10;
        }
        if (TUGResult === 12.9){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (TUGResult === 3.2){
            return 95;
        }
        if (TUGResult === 3.7){
            return 90;
        }
        if (TUGResult === 4.0){
            return 85;
        }
        if (TUGResult === 4.2){
            return 80;
        }
        if (TUGResult === 4.4){
            return 75;
        }
        if (TUGResult === 4.6){
            return 70;
        }
        if (TUGResult === 4.7){
            return 65;
        }
        if (TUGResult === 4.9){
            return 60;
        }
        if (TUGResult === 5.0){
            return 55;
        }
        if (TUGResult === 5.2){
            return 50;
        }
        if (TUGResult === 5.4){
            return 45;
        }
        if (TUGResult === 5.5){
            return 40;
        }
        if (TUGResult === 5.7){
            return 35;
        }
        if (TUGResult === 5.8){
            return 30;
        }
        if (TUGResult === 6.0){
            return 25;
        }
        if (TUGResult === 6.2){
            return 20;
        }
        if (TUGResult === 6.4){
            return 15;
        }
        if (TUGResult === 6.7){
            return 10;
        }
        if (TUGResult === 7.2){
            return 5;
        }
   } 
   if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (TUGResult === 3.6){
            return 95;
        }
        if (TUGResult === 4.1){
            return 90;
        }
        if (TUGResult === 4.4){
            return 85;
        }
        if (TUGResult === 4.6){
            return 80;
        }
        if (TUGResult === 4.8){
            return 75;
        }
        if (TUGResult === 5.0){
            return 70;
        }
        if (TUGResult === 5.1){
            return 65;
        }
        if (TUGResult === 5.3){
            return 60;
        }
        if (TUGResult === 5.4){
            return 55;
        }
        if (TUGResult === 5.6){
            return 50;
        }
        if (TUGResult === 5.8){
            return 45;
        }
        if (TUGResult === 5.9){
            return 40;
        }
        if (TUGResult === 6.1){
            return 35;
        }
        if (TUGResult === 6.2){
            return 30;
        }
        if (TUGResult === 6.4){
            return 25;
        }
        if (TUGResult === 6.6){
            return 20;
        }
        if (TUGResult === 6.8){
            return 15;
        }
        if (TUGResult === 7.1){
            return 10;
        }
        if (TUGResult === 7.6){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (TUGResult === 3.8){
            return 95;
        }
        if (TUGResult === 4.0){
            return 90;
        }
        if (TUGResult === 4.3){
            return 85;
        }
        if (TUGResult === 4.7){
            return 80;
        }
        if (TUGResult === 4.9){
            return 75;
        }
        if (TUGResult === 5.2){
            return 70;
        }
        if (TUGResult === 5.4){
            return 65;
        }
        if (TUGResult === 5.6){
            return 60;
        }
        if (TUGResult === 5.8){
            return 55;
        }
        if (TUGResult === 6.0){
            return 50;
        }
        if (TUGResult === 6.2){
            return 45;
        }
        if (TUGResult === 6.4){
            return 40;
        }
        if (TUGResult === 6.6){
            return 35;
        }
        if (TUGResult === 6.8){
            return 30;
        }
        if (TUGResult === 7.1){
            return 25;
        }
        if (TUGResult === 7.3){
            return 20;
        }
        if (TUGResult === 7.7){
            return 15;
        }
        if (TUGResult === 8.0){
            return 10;
        }
        if (TUGResult === 8.6){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 75 && age <=79 ){
        if (TUGResult === 4.0){
            return 95;
        }
        if (TUGResult === 4.3){
            return 90;
        }
        if (TUGResult === 4.6){
            return 85;
        }
        if (TUGResult === 5.0){
            return 80;
        }
        if (TUGResult === 5.2){
            return 75;
        }
        if (TUGResult === 5.5){
            return 70;
        }
        if (TUGResult === 5.7){
            return 65;
        }
        if (TUGResult === 5.9){
            return 60;
        }
        if (TUGResult === 6.1){
            return 55;
        }
        if (TUGResult === 6.3){
            return 50;
        }
        if (TUGResult === 6.5){
            return 45;
        }
        if (TUGResult === 6.7){
            return 40;
        }
        if (TUGResult === 6.9){
            return 35;
        }
        if (TUGResult === 7.1){
            return 30;
        }
        if (TUGResult === 7.4){
            return 25;
        }
        if (TUGResult === 7.6){
            return 20;
        }
        if (TUGResult === 8.0){
            return 15;
        }
        if (TUGResult === 8.3){
            return 10;
        }
        if (TUGResult === 8.9){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 80 && age <=84 ){
        if (TUGResult === 4.0){
            return 95;
        }
        if (TUGResult === 4.4){
            return 90;
        }
        if (TUGResult === 4.9){
            return 85;
        }
        if (TUGResult === 5.4){
            return 80;
        }
        if (TUGResult === 5.7){
            return 75;
        }
        if (TUGResult === 6.1){
            return 70;
        }
        if (TUGResult === 6.3){
            return 65;
        }
        if (TUGResult === 6.7){
            return 60;
        }
        if (TUGResult === 6.9){
            return 55;
        }
        if (TUGResult === 7.2){
            return 50;
        }
        if (TUGResult === 7.5){
            return 45;
        }
        if (TUGResult === 7.8){
            return 40;
        }
        if (TUGResult === 8.1){
            return 35;
        }
        if (TUGResult === 8.3){
            return 30;
        }
        if (TUGResult === 8.7){
            return 25;
        }
        if (TUGResult === 9.0){
            return 20;
        }
        if (TUGResult === 9.5){
            return 15;
        }
        if (TUGResult === 10.0){
            return 10;
        }
        if (TUGResult === 10.8){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 85 && age <=89 ){
        if (TUGResult === 4.5){
            return 95;
        }
        if (TUGResult === 4.7){
            return 90;
        }
        if (TUGResult === 5.3){
            return 85;
        }
        if (TUGResult === 5.8){
            return 80;
        }
        if (TUGResult === 6.2){
            return 75;
        }
        if (TUGResult === 6.6){
            return 70;
        }
        if (TUGResult === 6.9){
            return 65;
        }
        if (TUGResult === 7.3){
            return 60;
        }
        if (TUGResult === 7.6){
            return 55;
        }
        if (TUGResult === 7.9){
            return 50;
        }
        if (TUGResult === 8.2){
            return 45;
        }
        if (TUGResult === 8.5){
            return 40;
        }
        if (TUGResult === 8.9){
            return 35;
        }
        if (TUGResult === 9.2){
            return 30;
        }
        if (TUGResult === 9.6){
            return 25;
        }
        if (TUGResult === 10.0){
            return 20;
        }
        if (TUGResult === 10.5){
            return 15;
        }
        if (TUGResult === 11.1){
            return 10;
        }
        if (TUGResult === 12.0){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 90 && age <=94 ){
        if (TUGResult === 5.0){
            return 95;
        }
        if (TUGResult === 5.3){
            return 90;
        }
        if (TUGResult === 6.1){
            return 85;
        }
        if (TUGResult === 6.7){
            return 80;
        }
        if (TUGResult === 7.3){
            return 75;
        }
        if (TUGResult === 7.7){
            return 70;
        }
        if (TUGResult === 8.2){
            return 65;
        }
        if (TUGResult === 8.6){
            return 60;
        }
        if (TUGResult === 9.0){
            return 55;
        }
        if (TUGResult === 9.4){
            return 50;
        }
        if (TUGResult === 9.8){
            return 45;
        }
        if (TUGResult === 10.2){
            return 40;
        }
        if (TUGResult === 10.6){
            return 35;
        }
        if (TUGResult === 11.1){
            return 30;
        }
        if (TUGResult === 11.5){
            return 25;
        }
        if (TUGResult === 12.1){
            return 20;
        }
        if (TUGResult === 12.7){
            return 15;
        }
        if (TUGResult === 13.5){
            return 10;
        }
        if (TUGResult === 14.6){
            return 5;
        }
    } 
}