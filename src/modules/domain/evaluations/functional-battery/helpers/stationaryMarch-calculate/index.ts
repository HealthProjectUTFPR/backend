import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentStationaryMarch = ({
    age,
    sex,
    result,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (result === 135){
            return 95;
        }
        if (result === 128){
            return 90;
        }
        if (result === 123){
            return 85;
        }
        if (result === 119){
            return 80;
        }
        if (result === 115){
            return 75;
        }
        if (result === 112){
            return 70;
        }
        if (result === 109){
            return 65;
        }
        if (result === 106){
            return 60;
        }
        if (result === 104){
            return 55;
        }
        if (result === 101){
            return 50;
        }
        if (result === 98){
            return 45;
        }
        if (result === 96){
            return 40;
        }
        if (result === 93){
            return 35;
        }
        if (result === 90){
            return 30;
        }
        if (result === 87){
            return 25;
        }
        if (result === 83){
            return 20;
        }
        if (result === 79){
            return 15;
        }
        if (result === 74){
            return 10;
        }
        if (result === 67){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
        if (result === 139){
            return 95;
        }
        if (result === 130){
            return 90;
        }
        if (result === 125){
            return 85;
        }
        if (result === 120){
            return 80;
        }
        if (result === 116){
            return 75;
        }
        if (result === 113){
            return 70;
        }
        if (result === 110){
            return 65;
        }
        if (result === 107){
            return 60;
        }
        if (result === 104){
            return 55;
        }
        if (result === 101){
            return 50;
        }
        if (result === 98){
            return 45;
        }
        if (result === 95){
            return 40;
        }
        if (result === 92){
            return 35;
        }
        if (result === 89){
            return 30;
        }
        if (result === 86){
            return 25;
        }
        if (result === 82){
            return 20;
        }
        if (result === 77){
            return 15;
        }
        if (result === 72){
            return 10;
        }
        if (result === 67){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (result === 133){
            return 95;
        }
        if (result === 124){
            return 90;
        }
        if (result === 119){
            return 85;
        }
        if (result === 114){
            return 80;
        }
        if (result === 110){
            return 75;
        }
        if (result === 107){
            return 70;
        }
        if (result === 104){
            return 65;
        }
        if (result === 101){
            return 60;
        }
        if (result === 98){
            return 55;
        }
        if (result === 95){
            return 50;
        }
        if (result === 92){
            return 45;
        }
        if (result === 89){
            return 40;
        }
        if (result === 86){
            return 35;
        }
        if (result === 83){
            return 30;
        }
        if (result === 80){
            return 25;
        }
        if (result === 76){
            return 20;
        }
        if (result === 71){
            return 15;
        }
        if (result === 66){
            return 10;
        }
        if (result === 57){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (result === 135){
            return 95;
        }
        if (result === 126){
            return 90;
        }
        if (result === 119){
            return 85;
        }
        if (result === 114){
            return 80;
        }
        if (result === 109){
            return 75;
        }
        if (result === 105){
            return 70;
        }
        if (result === 102){
            return 65;
        }
        if (result === 98){
            return 60;
        }
        if (result === 95){
            return 55;
        }
        if (result === 91){
            return 50;
        }
        if (result === 87){
            return 45;
        }
        if (result === 84){
            return 40;
        }
        if (result === 80){
            return 35;
        }
        if (result === 77){
            return 30;
        }
        if (result === 73){
            return 25;
        }
        if (result === 68){
            return 20;
        }
        if (result === 63){
            return 15;
        }
        if (result === 56){
            return 10;
        }
        if (result === 47){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (result === 126){
            return 95;
        }
        if (result === 118){
            return 90;
        }
        if (result === 112){
            return 85;
        }
        if (result === 107){
            return 80;
        }
        if (result === 103){
            return 75;
        }
        if (result === 99){
            return 70;
        }
        if (result === 96){
            return 65;
        }
        if (result === 93){
            return 60;
        }
        if (result === 90){
            return 55;
        }
        if (result === 87){
            return 50;
        }
        if (result === 84){
            return 45;
        }
        if (result === 81){
            return 40;
        }
        if (result === 78){
            return 35;
        }
        if (result === 75){
            return 30;
        }
        if (result === 71){
            return 25;
        }
        if (result === 67){
            return 20;
        }
        if (result === 62){
            return 15;
        }
        if (result === 56){
            return 10;
        }
        if (result === 48){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 85 && age <=89 ){
        if (result === 114){
            return 95;
        }
        if (result === 106){
            return 90;
        }
        if (result === 100){
            return 85;
        }
        if (result === 95){
            return 80;
        }
        if (result === 91){
            return 75;
        }
        if (result === 87){
            return 70;
        }
        if (result === 84){
            return 65;
        }
        if (result === 81){
            return 60;
        }
        if (result === 78){
            return 55;
        }
        if (result === 75){
            return 50;
        }
        if (result === 72){
            return 45;
        }
        if (result === 69){
            return 40;
        }
        if (result === 66){
            return 35;
        }
        if (result === 63){
            return 30;
        }
        if (result === 59){
            return 25;
        }
        if (result === 55){
            return 20;
        }
        if (result === 50){
            return 15;
        }
        if (result === 44){
            return 10;
        }
        if (result === 36){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (result === 112){
            return 95;
        }
        if (result === 102){
            return 90;
        }
        if (result === 96){
            return 85;
        }
        if (result === 91){
            return 80;
        }
        if (result === 86){
            return 75;
        }
        if (result === 83){
            return 70;
        }
        if (result === 79){
            return 65;
        }
        if (result === 76){
            return 60;
        }
        if (result === 72){
            return 55;
        }
        if (result === 69){
            return 50;
        }
        if (result === 66){
            return 45;
        }
        if (result === 62){
            return 40;
        }
        if (result === 59){
            return 35;
        }
        if (result === 55){
            return 30;
        }
        if (result === 52){
            return 25;
        }
        if (result === 47){
            return 20;
        }
        if (result === 42){
            return 15;
        }
        if (result === 36){
            return 10;
        }
        if (result === 26){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (result === 130){
            return 95;
        }
        if (result === 122){
            return 90;
        }
        if (result === 116){
            return 85;
        }
        if (result === 110){
            return 80;
        }
        if (result === 107){
            return 75;
        }
        if (result === 103){
            return 70;
        }
        if (result === 100){
            return 65;
        }
        if (result === 97){
            return 60;
        }
        if (result === 94){
            return 55;
        }
        if (result === 91){
            return 50;
        }
        if (result === 88){
            return 45;
        }
        if (result === 85){
            return 40;
        }
        if (result === 82){
            return 35;
        }
        if (result === 79){
            return 30;
        }
        if (result === 75){
            return 25;
        }
        if (result === 71){
            return 20;
        }
        if (result === 66){
            return 15;
        }
        if (result === 60){
            return 10;
        }
        if (result === 52){
            return 5;
        }
   } 
   if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (result === 133){
            return 95;
        }
        if (result === 123){
            return 90;
        }
        if (result === 117){
            return 85;
        }
        if (result === 112){
            return 80;
        }
        if (result === 107){
            return 75;
        }
        if (result === 104){
            return 70;
        }
        if (result === 100){
            return 65;
        }
        if (result === 96){
            return 60;
        }
        if (result === 93){
            return 55;
        }
        if (result === 90){
            return 50;
        }
        if (result === 87){
            return 45;
        }
        if (result === 84){
            return 40;
        }
        if (result === 80){
            return 35;
        }
        if (result === 76){
            return 30;
        }
        if (result === 73){
            return 25;
        }
        if (result === 68){
            return 20;
        }
        if (result === 63){
            return 15;
        }
        if (result === 57){
            return 10;
        }
        if (result === 47){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (result === 125){
            return 95;
        }
        if (result === 116){
            return 90;
        }
        if (result === 110){
            return 85;
        }
        if (result === 105){
            return 80;
        }
        if (result === 101){
            return 75;
        }
        if (result === 97){
            return 70;
        }
        if (result === 94){
            return 65;
        }
        if (result === 90){
            return 60;
        }
        if (result === 87){
            return 55;
        }
        if (result === 84){
            return 50;
        }
        if (result === 81){
            return 45;
        }
        if (result === 78){
            return 40;
        }
        if (result === 74){
            return 35;
        }
        if (result === 71){
            return 30;
        }
        if (result === 68){
            return 25;
        }
        if (result === 63){
            return 20;
        }
        if (result === 58){
            return 15;
        }
        if (result === 52){
            return 10;
        }
        if (result === 43){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 75 && age <=79 ){
        if (result === 123){
            return 95;
        }
        if (result === 115){
            return 90;
        }
        if (result === 109){
            return 85;
        }
        if (result === 104){
            return 80;
        }
        if (result === 100){
            return 75;
        }
        if (result === 96){
            return 70;
        }
        if (result === 93){
            return 65;
        }
        if (result === 90){
            return 60;
        }
        if (result === 87){
            return 55;
        }
        if (result === 84){
            return 50;
        }
        if (result === 81){
            return 45;
        }
        if (result === 78){
            return 40;
        }
        if (result === 75){
            return 35;
        }
        if (result === 72){
            return 30;
        }
        if (result === 68){
            return 25;
        }
        if (result === 64){
            return 20;
        }
        if (result === 59){
            return 15;
        }
        if (result === 53){
            return 10;
        }
        if (result === 45){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 80 && age <=84 ){
        if (result === 113){
            return 95;
        }
        if (result === 104){
            return 90;
        }
        if (result === 99){
            return 85;
        }
        if (result === 94){
            return 80;
        }
        if (result === 90){
            return 75;
        }
        if (result === 87){
            return 70;
        }
        if (result === 84){
            return 65;
        }
        if (result === 81){
            return 60;
        }
        if (result === 78){
            return 55;
        }
        if (result === 75){
            return 50;
        }
        if (result === 72){
            return 45;
        }
        if (result === 69){
            return 40;
        }
        if (result === 66){
            return 35;
        }
        if (result === 63){
            return 30;
        }
        if (result === 60){
            return 25;
        }
        if (result === 56){
            return 20;
        }
        if (result === 51){
            return 15;
        }
        if (result === 46){
            return 10;
        }
        if (result === 37){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 84 && age <=89 ){
        if (result === 106){
            return 95;
        }
        if (result === 98){
            return 90;
        }
        if (result === 93){
            return 85;
        }
        if (result === 88){
            return 80;
        }
        if (result === 85){
            return 75;
        }
        if (result === 81){
            return 70;
        }
        if (result === 79){
            return 65;
        }
        if (result === 76){
            return 60;
        }
        if (result === 73){
            return 55;
        }
        if (result === 70){
            return 50;
        }
        if (result === 67){
            return 45;
        }
        if (result === 64){
            return 40;
        }
        if (result === 61){
            return 35;
        }
        if (result === 59){
            return 30;
        }
        if (result === 55){
            return 25;
        }
        if (result === 52){
            return 20;
        }
        if (result === 47){
            return 15;
        }
        if (result === 42){
            return 10;
        }
        if (result === 29){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 90 && age <=94 ){
        if (result === 92){
            return 95;
        }
        if (result === 85){
            return 90;
        }
        if (result === 80){
            return 85;
        }
        if (result === 76){
            return 80;
        }
        if (result === 72){
            return 75;
        }
        if (result === 69){
            return 70;
        }
        if (result === 66){
            return 65;
        }
        if (result === 63){
            return 60;
        }
        if (result === 61){
            return 55;
        }
        if (result === 58){
            return 50;
        }
        if (result === 55){
            return 45;
        }
        if (result === 53){
            return 40;
        }
        if (result === 50){
            return 35;
        }
        if (result === 47){
            return 30;
        }
        if (result === 44){
            return 25;
        }
        if (result === 40){
            return 20;
        }
        if (result === 36){
            return 15;
        }
        if (result === 31){
            return 10;
        }
        if (result === 24){
            return 5;
        }
    }
}