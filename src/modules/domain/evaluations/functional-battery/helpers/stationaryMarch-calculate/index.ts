import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentStationaryMarch= ({
    age,
    sex,
    stationaryMarchResult,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Homem' && age >= 60 && age <=64 ){
        if (stationaryMarchResult === 135){
            return 95;
        }
        if (stationaryMarchResult === 128){
            return 90;
        }
        if (stationaryMarchResult === 123){
            return 85;
        }
        if (stationaryMarchResult === 119){
            return 80;
        }
        if (stationaryMarchResult === 115){
            return 75;
        }
        if (stationaryMarchResult === 112){
            return 70;
        }
        if (stationaryMarchResult === 109){
            return 65;
        }
        if (stationaryMarchResult === 106){
            return 60;
        }
        if (stationaryMarchResult === 104){
            return 55;
        }
        if (stationaryMarchResult === 101){
            return 50;
        }
        if (stationaryMarchResult === 98){
            return 45;
        }
        if (stationaryMarchResult === 96){
            return 40;
        }
        if (stationaryMarchResult === 93){
            return 35;
        }
        if (stationaryMarchResult === 90){
            return 30;
        }
        if (stationaryMarchResult === 87){
            return 25;
        }
        if (stationaryMarchResult === 83){
            return 20;
        }
        if (stationaryMarchResult === 79){
            return 15;
        }
        if (stationaryMarchResult === 74){
            return 10;
        }
        if (stationaryMarchResult === 67){
            return 5;
        }
   } 
   if (sex === 'Homem' && age >= 65 && age <=69 ){
        if (stationaryMarchResult === 139){
            return 95;
        }
        if (stationaryMarchResult === 130){
            return 90;
        }
        if (stationaryMarchResult === 125){
            return 85;
        }
        if (stationaryMarchResult === 120){
            return 80;
        }
        if (stationaryMarchResult === 116){
            return 75;
        }
        if (stationaryMarchResult === 113){
            return 70;
        }
        if (stationaryMarchResult === 110){
            return 65;
        }
        if (stationaryMarchResult === 107){
            return 60;
        }
        if (stationaryMarchResult === 104){
            return 55;
        }
        if (stationaryMarchResult === 101){
            return 50;
        }
        if (stationaryMarchResult === 98){
            return 45;
        }
        if (stationaryMarchResult === 95){
            return 40;
        }
        if (stationaryMarchResult === 92){
            return 35;
        }
        if (stationaryMarchResult === 89){
            return 30;
        }
        if (stationaryMarchResult === 86){
            return 25;
        }
        if (stationaryMarchResult === 82){
            return 20;
        }
        if (stationaryMarchResult === 77){
            return 15;
        }
        if (stationaryMarchResult === 72){
            return 10;
        }
        if (stationaryMarchResult === 67){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 70 && age <=74 ){
        if (stationaryMarchResult === 133){
            return 95;
        }
        if (stationaryMarchResult === 124){
            return 90;
        }
        if (stationaryMarchResult === 119){
            return 85;
        }
        if (stationaryMarchResult === 114){
            return 80;
        }
        if (stationaryMarchResult === 110){
            return 75;
        }
        if (stationaryMarchResult === 107){
            return 70;
        }
        if (stationaryMarchResult === 104){
            return 65;
        }
        if (stationaryMarchResult === 101){
            return 60;
        }
        if (stationaryMarchResult === 98){
            return 55;
        }
        if (stationaryMarchResult === 95){
            return 50;
        }
        if (stationaryMarchResult === 92){
            return 45;
        }
        if (stationaryMarchResult === 89){
            return 40;
        }
        if (stationaryMarchResult === 86){
            return 35;
        }
        if (stationaryMarchResult === 83){
            return 30;
        }
        if (stationaryMarchResult === 80){
            return 25;
        }
        if (stationaryMarchResult === 76){
            return 20;
        }
        if (stationaryMarchResult === 71){
            return 15;
        }
        if (stationaryMarchResult === 66){
            return 10;
        }
        if (stationaryMarchResult === 57){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 75 && age <=79 ){
        if (stationaryMarchResult === 135){
            return 95;
        }
        if (stationaryMarchResult === 126){
            return 90;
        }
        if (stationaryMarchResult === 119){
            return 85;
        }
        if (stationaryMarchResult === 114){
            return 80;
        }
        if (stationaryMarchResult === 109){
            return 75;
        }
        if (stationaryMarchResult === 105){
            return 70;
        }
        if (stationaryMarchResult === 102){
            return 65;
        }
        if (stationaryMarchResult === 98){
            return 60;
        }
        if (stationaryMarchResult === 95){
            return 55;
        }
        if (stationaryMarchResult === 91){
            return 50;
        }
        if (stationaryMarchResult === 87){
            return 45;
        }
        if (stationaryMarchResult === 84){
            return 40;
        }
        if (stationaryMarchResult === 80){
            return 35;
        }
        if (stationaryMarchResult === 77){
            return 30;
        }
        if (stationaryMarchResult === 73){
            return 25;
        }
        if (stationaryMarchResult === 68){
            return 20;
        }
        if (stationaryMarchResult === 63){
            return 15;
        }
        if (stationaryMarchResult === 56){
            return 10;
        }
        if (stationaryMarchResult === 47){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 80 && age <=84 ){
        if (stationaryMarchResult === 126){
            return 95;
        }
        if (stationaryMarchResult === 118){
            return 90;
        }
        if (stationaryMarchResult === 112){
            return 85;
        }
        if (stationaryMarchResult === 107){
            return 80;
        }
        if (stationaryMarchResult === 103){
            return 75;
        }
        if (stationaryMarchResult === 99){
            return 70;
        }
        if (stationaryMarchResult === 96){
            return 65;
        }
        if (stationaryMarchResult === 93){
            return 60;
        }
        if (stationaryMarchResult === 90){
            return 55;
        }
        if (stationaryMarchResult === 87){
            return 50;
        }
        if (stationaryMarchResult === 84){
            return 45;
        }
        if (stationaryMarchResult === 81){
            return 40;
        }
        if (stationaryMarchResult === 78){
            return 35;
        }
        if (stationaryMarchResult === 75){
            return 30;
        }
        if (stationaryMarchResult === 71){
            return 25;
        }
        if (stationaryMarchResult === 67){
            return 20;
        }
        if (stationaryMarchResult === 62){
            return 15;
        }
        if (stationaryMarchResult === 56){
            return 10;
        }
        if (stationaryMarchResult === 48){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 85 && age <=89 ){
        if (stationaryMarchResult === 114){
            return 95;
        }
        if (stationaryMarchResult === 106){
            return 90;
        }
        if (stationaryMarchResult === 100){
            return 85;
        }
        if (stationaryMarchResult === 95){
            return 80;
        }
        if (stationaryMarchResult === 91){
            return 75;
        }
        if (stationaryMarchResult === 87){
            return 70;
        }
        if (stationaryMarchResult === 84){
            return 65;
        }
        if (stationaryMarchResult === 81){
            return 60;
        }
        if (stationaryMarchResult === 78){
            return 55;
        }
        if (stationaryMarchResult === 75){
            return 50;
        }
        if (stationaryMarchResult === 72){
            return 45;
        }
        if (stationaryMarchResult === 69){
            return 40;
        }
        if (stationaryMarchResult === 66){
            return 35;
        }
        if (stationaryMarchResult === 63){
            return 30;
        }
        if (stationaryMarchResult === 59){
            return 25;
        }
        if (stationaryMarchResult === 55){
            return 20;
        }
        if (stationaryMarchResult === 50){
            return 15;
        }
        if (stationaryMarchResult === 44){
            return 10;
        }
        if (stationaryMarchResult === 36){
            return 5;
        }
    } 
    if (sex === 'Homem' && age >= 90 && age <=94 ){
        if (stationaryMarchResult === 112){
            return 95;
        }
        if (stationaryMarchResult === 102){
            return 90;
        }
        if (stationaryMarchResult === 96){
            return 85;
        }
        if (stationaryMarchResult === 91){
            return 80;
        }
        if (stationaryMarchResult === 86){
            return 75;
        }
        if (stationaryMarchResult === 83){
            return 70;
        }
        if (stationaryMarchResult === 79){
            return 65;
        }
        if (stationaryMarchResult === 76){
            return 60;
        }
        if (stationaryMarchResult === 72){
            return 55;
        }
        if (stationaryMarchResult === 69){
            return 50;
        }
        if (stationaryMarchResult === 66){
            return 45;
        }
        if (stationaryMarchResult === 62){
            return 40;
        }
        if (stationaryMarchResult === 59){
            return 35;
        }
        if (stationaryMarchResult === 55){
            return 30;
        }
        if (stationaryMarchResult === 52){
            return 25;
        }
        if (stationaryMarchResult === 47){
            return 20;
        }
        if (stationaryMarchResult === 42){
            return 15;
        }
        if (stationaryMarchResult === 36){
            return 10;
        }
        if (stationaryMarchResult === 26){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 60 && age <=64 ){
        if (stationaryMarchResult === 130){
            return 95;
        }
        if (stationaryMarchResult === 122){
            return 90;
        }
        if (stationaryMarchResult === 116){
            return 85;
        }
        if (stationaryMarchResult === 110){
            return 80;
        }
        if (stationaryMarchResult === 107){
            return 75;
        }
        if (stationaryMarchResult === 103){
            return 70;
        }
        if (stationaryMarchResult === 100){
            return 65;
        }
        if (stationaryMarchResult === 97){
            return 60;
        }
        if (stationaryMarchResult === 94){
            return 55;
        }
        if (stationaryMarchResult === 91){
            return 50;
        }
        if (stationaryMarchResult === 88){
            return 45;
        }
        if (stationaryMarchResult === 85){
            return 40;
        }
        if (stationaryMarchResult === 82){
            return 35;
        }
        if (stationaryMarchResult === 79){
            return 30;
        }
        if (stationaryMarchResult === 75){
            return 25;
        }
        if (stationaryMarchResult === 71){
            return 20;
        }
        if (stationaryMarchResult === 66){
            return 15;
        }
        if (stationaryMarchResult === 60){
            return 10;
        }
        if (stationaryMarchResult === 52){
            return 5;
        }
   } 
   if (sex === 'Mulher' && age >= 65 && age <=69 ){
        if (stationaryMarchResult === 133){
            return 95;
        }
        if (stationaryMarchResult === 123){
            return 90;
        }
        if (stationaryMarchResult === 117){
            return 85;
        }
        if (stationaryMarchResult === 112){
            return 80;
        }
        if (stationaryMarchResult === 107){
            return 75;
        }
        if (stationaryMarchResult === 104){
            return 70;
        }
        if (stationaryMarchResult === 100){
            return 65;
        }
        if (stationaryMarchResult === 96){
            return 60;
        }
        if (stationaryMarchResult === 93){
            return 55;
        }
        if (stationaryMarchResult === 90){
            return 50;
        }
        if (stationaryMarchResult === 87){
            return 45;
        }
        if (stationaryMarchResult === 84){
            return 40;
        }
        if (stationaryMarchResult === 80){
            return 35;
        }
        if (stationaryMarchResult === 76){
            return 30;
        }
        if (stationaryMarchResult === 73){
            return 25;
        }
        if (stationaryMarchResult === 68){
            return 20;
        }
        if (stationaryMarchResult === 63){
            return 15;
        }
        if (stationaryMarchResult === 57){
            return 10;
        }
        if (stationaryMarchResult === 47){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 70 && age <=74 ){
        if (stationaryMarchResult === 125){
            return 95;
        }
        if (stationaryMarchResult === 116){
            return 90;
        }
        if (stationaryMarchResult === 110){
            return 85;
        }
        if (stationaryMarchResult === 105){
            return 80;
        }
        if (stationaryMarchResult === 101){
            return 75;
        }
        if (stationaryMarchResult === 97){
            return 70;
        }
        if (stationaryMarchResult === 94){
            return 65;
        }
        if (stationaryMarchResult === 90){
            return 60;
        }
        if (stationaryMarchResult === 87){
            return 55;
        }
        if (stationaryMarchResult === 84){
            return 50;
        }
        if (stationaryMarchResult === 81){
            return 45;
        }
        if (stationaryMarchResult === 78){
            return 40;
        }
        if (stationaryMarchResult === 74){
            return 35;
        }
        if (stationaryMarchResult === 71){
            return 30;
        }
        if (stationaryMarchResult === 68){
            return 25;
        }
        if (stationaryMarchResult === 63){
            return 20;
        }
        if (stationaryMarchResult === 58){
            return 15;
        }
        if (stationaryMarchResult === 52){
            return 10;
        }
        if (stationaryMarchResult === 43){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 75 && age <=79 ){
        if (stationaryMarchResult === 123){
            return 95;
        }
        if (stationaryMarchResult === 115){
            return 90;
        }
        if (stationaryMarchResult === 109){
            return 85;
        }
        if (stationaryMarchResult === 104){
            return 80;
        }
        if (stationaryMarchResult === 100){
            return 75;
        }
        if (stationaryMarchResult === 96){
            return 70;
        }
        if (stationaryMarchResult === 93){
            return 65;
        }
        if (stationaryMarchResult === 90){
            return 60;
        }
        if (stationaryMarchResult === 87){
            return 55;
        }
        if (stationaryMarchResult === 84){
            return 50;
        }
        if (stationaryMarchResult === 81){
            return 45;
        }
        if (stationaryMarchResult === 78){
            return 40;
        }
        if (stationaryMarchResult === 75){
            return 35;
        }
        if (stationaryMarchResult === 72){
            return 30;
        }
        if (stationaryMarchResult === 68){
            return 25;
        }
        if (stationaryMarchResult === 64){
            return 20;
        }
        if (stationaryMarchResult === 59){
            return 15;
        }
        if (stationaryMarchResult === 53){
            return 10;
        }
        if (stationaryMarchResult === 45){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 80 && age <=84 ){
        if (stationaryMarchResult === 113){
            return 95;
        }
        if (stationaryMarchResult === 104){
            return 90;
        }
        if (stationaryMarchResult === 99){
            return 85;
        }
        if (stationaryMarchResult === 94){
            return 80;
        }
        if (stationaryMarchResult === 90){
            return 75;
        }
        if (stationaryMarchResult === 87){
            return 70;
        }
        if (stationaryMarchResult === 84){
            return 65;
        }
        if (stationaryMarchResult === 81){
            return 60;
        }
        if (stationaryMarchResult === 78){
            return 55;
        }
        if (stationaryMarchResult === 75){
            return 50;
        }
        if (stationaryMarchResult === 72){
            return 45;
        }
        if (stationaryMarchResult === 69){
            return 40;
        }
        if (stationaryMarchResult === 66){
            return 35;
        }
        if (stationaryMarchResult === 63){
            return 30;
        }
        if (stationaryMarchResult === 60){
            return 25;
        }
        if (stationaryMarchResult === 56){
            return 20;
        }
        if (stationaryMarchResult === 51){
            return 15;
        }
        if (stationaryMarchResult === 46){
            return 10;
        }
        if (stationaryMarchResult === 37){
            return 5;
        }
    } 
    if (sex === 'Mulher' && age >= 84 && age <=89 ){
        if (stationaryMarchResult === 106){
            return 95;
        }
        if (stationaryMarchResult === 98){
            return 90;
        }
        if (stationaryMarchResult === 93){
            return 85;
        }
        if (stationaryMarchResult === 88){
            return 80;
        }
        if (stationaryMarchResult === 85){
            return 75;
        }
        if (stationaryMarchResult === 81){
            return 70;
        }
        if (stationaryMarchResult === 79){
            return 65;
        }
        if (stationaryMarchResult === 76){
            return 60;
        }
        if (stationaryMarchResult === 73){
            return 55;
        }
        if (stationaryMarchResult === 70){
            return 50;
        }
        if (stationaryMarchResult === 67){
            return 45;
        }
        if (stationaryMarchResult === 64){
            return 40;
        }
        if (stationaryMarchResult === 61){
            return 35;
        }
        if (stationaryMarchResult === 59){
            return 30;
        }
        if (stationaryMarchResult === 55){
            return 25;
        }
        if (stationaryMarchResult === 52){
            return 20;
        }
        if (stationaryMarchResult === 47){
            return 15;
        }
        if (stationaryMarchResult === 42){
            return 10;
        }
        if (stationaryMarchResult === 29){
            return 5;
        }
    }
    if (sex === 'Mulher' && age >= 90 && age <=94 ){
        if (stationaryMarchResult === 92){
            return 95;
        }
        if (stationaryMarchResult === 85){
            return 90;
        }
        if (stationaryMarchResult === 80){
            return 85;
        }
        if (stationaryMarchResult === 76){
            return 80;
        }
        if (stationaryMarchResult === 72){
            return 75;
        }
        if (stationaryMarchResult === 69){
            return 70;
        }
        if (stationaryMarchResult === 66){
            return 65;
        }
        if (stationaryMarchResult === 63){
            return 60;
        }
        if (stationaryMarchResult === 61){
            return 55;
        }
        if (stationaryMarchResult === 58){
            return 50;
        }
        if (stationaryMarchResult === 55){
            return 45;
        }
        if (stationaryMarchResult === 53){
            return 40;
        }
        if (stationaryMarchResult === 50){
            return 35;
        }
        if (stationaryMarchResult === 47){
            return 30;
        }
        if (stationaryMarchResult === 44){
            return 25;
        }
        if (stationaryMarchResult === 40){
            return 20;
        }
        if (stationaryMarchResult === 36){
            return 15;
        }
        if (stationaryMarchResult === 31){
            return 10;
        }
        if (stationaryMarchResult === 24){
            return 5;
        }
    }
}