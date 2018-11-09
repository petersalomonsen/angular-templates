import { Component } from '@angular/core';

import { LineChartConfig } from './linechart.component';

@Component({
    moduleId: "app/chart/",
    selector: "measurestation-app",
    templateUrl: "showchart.component.html"
})
export class ShowChartComponent {
    datapoints : number[][] = [[1497246992000,12.87374,0.05017102,0.3952883,0],[1497247592000,12.89699,0.04895154,0.2221563,0],[1497248192000,13.19042,0.04504382,0.1484422,0],[1497248792000,13.51967,0.04125854,0.09351172,0],[1497249392000,13.82572,0.03637573,0.05714061,0],[1497249992000,13.92595,0.03600939,0.03882421,0],[1497250592000,14.14433,0.03515625,0.02393281,0],[1497251192000,13.43737,0.03515625,0.01464844,0],[1497251792000,13.08931,0.03381483,0.006340632,0],[1497252392000,13.3157,0.0350343,0.004882813,0],[1497252992000,13.0616,0.03137097,0.003667963,0],[1497253592000,13.34434,0.03112658,0.003667963,0],[1497254192000,13.43199,0.03259535,0.00121485,0],[1497254792000,13.55547,0.03357044,0.002672669,0],[1497255392000,13.0616,0.03478992,0.01416718,0],[1497255992000,12.61429,0.03112658,0.07152735,0],[1497256592000,12.32091,0.03015149,0.08007813,0],[1497257192000,12.27977,0.0299071,0.08007813,0],[1497257792000,12.39179,0.03137097,0.1751501,0],[1497258392000,12.15293,0.1851707,8.595547,0],[1497258992000,12.05917,0.5350392,10.22803,1.058842],[1497259592000,12.0779,0.6013171,10.05959,1.009979],[1497260192000,12.0779,0.5412585,6.42209,0.6574041],[1497260792000,12.03676,0.5188001,4.663993,0.6387017],[1497261392000,11.83104,0.5948485,7.357975,0.9762992],[1497261992000,11.83104,0.521122,4.781115,0.695038],[1497262592000,11.76659,0.4476344,3.205078,0.5762508],[1497263192000,11.72545,0.4599609,4.494287,0.7012508],[1497263792000,11.72626,0.5449219,5.83585,0.9163083],[1497264392000,11.82647,0.4925563,3.266886,0.6637939],[1497264992000,11.79366,0.5585849,6.853639,0.8423736],[1497265592000,11.81692,0.5560338,2.75614,0.8087937],[1497266192000,11.78829,0.4852296,1.023054,0.4450684],[1497266792000,11.58781,0.7361998,9.622363,1.137394],[1497267392000,11.64688,0.7536634,2.759346,0.9800765],[1497267992000,11.62898,0.8535117,3.92129,0.8298467],[1497268592000,11.67015,1.085078,4.918534,1.167346],[1497269192000,11.79366,1.263546,2.04196,1.090038],[1497269792000,11.88134,1.419673,1.360497,0.853851],[1497270392000,12.0818,1.582517,0.5788398,0.6850213],[1497270992000,12.24648,1.719849,0.2776008,0.5350582],[1497271592000,12.24648,1.85498,0.168707,0.4323848],[1497272192000,12.05745,1.958737,0.0986375,0.384949],[1497272792000,12.12297,2.025872,0.06642498,0.3651736],[1497273392000,12.16753,2.075073,0.04737499,0.3375975],[1497273992000,12.18348,2.077268,0.03027344,0.3000488],[1497274592000,12.03676,2.060059,0.01610626,0.2826051],[1497275192000,12.16023,2.03479,0.01489141,0.25],[1497275792000,12.24257,2.008546,0.009765625,0.2199707],[1497276392000,12.17812,1.962771,0.008550775,0.2012268],[1497276992000,12.0314,1.91382,0.005616405,0.1901248],[1497277592000,12.06001,1.863893,0.00121485,0.180115],[1497278192000,12.14234,1.813722,0.003667963,0.1699826],[1497278792000,12.40718,1.766239,0.003667963,0.1550293],[1497279392000,12.34276,1.727669,0.005125782,0.1474726],[1497279992000,12.16023,1.668702,0.003667963,0.1375002],[1497280592000,12.1137,1.61023,0.004401555,0.1337949],[1497281192000,11.93122,1.571166,0.00121485,0.1262148],[1497281792000,11.83104,1.504883,0.003667963,0.1200564],[1497282392000,11.83104,1.463991,0.004401555,0.1149902],[1497282992000,11.7487,1.407595,0.003667963,0.1124998],[1497283592000,11.7487,1.358644,0.003667963,0.1062561],[1497284192000,11.6843,1.304809,0.003667963,0.10249],[1497284792000,11.58412,1.25403,0.00121485,0.1000369],[1497285392000,11.54295,1.197385,0,0.0951541],[1497285992000,11.50182,1.155151,0,0.0949707],[1497286592000,11.50182,1.109863,0.004401555,0.08496094],[1497287192000,11.41951,1.066161,0.00121485,0.08623653],[1497287792000,11.46602,1.01599,0,0.07883986],[1497288392000,11.54295,0.9812049,0.003667963,0.08386874],[1497288992000,11.54295,0.9399414,0,0.08110958],[1497289592000,11.50182,0.9000243,0,0.08007813],[1497290192000,11.35512,0.8651124,0.00145782,0.07634942],[1497290792000,11.39889,0.8337415,0.00121485,0.07128321],[1497291392000,11.44107,0.8013954,0.00121485,0.07758769],[1497291992000,11.42317,0.7698976,0.004882813,0.07758769],[1497292592000,11.39991,0.7438977,0.003667963,0.07000761],[1497293192000,11.25856,0.7188734,0.006097662,0.07006836],[1497293792000,11.25856,0.6927516,0.04001565,0.07128321],[1497294392000,11.21739,0.6723608,1.298066,0.09624629],[1497294992000,11.24066,0.7022679,2.232384,0.2187932],[1497295592000,11.28183,0.69739,1.705055,0.2700195],[1497296192000,11.28183,0.7348633,3.426561,0.3874149],[1497296792000,11.25856,0.8664489,6.719852,0.7822403],[1497297392000,11.31305,0.8072533,2.602919,0.8862246],[1497297992000,11.25958,0.7764881,3.093878,1.06753],[1497298592000,11.21739,0.8239709,5.643038,1.603513],[1497299192000,11.11259,1.102903,10.83657,3.774798],[1497299792000,11.13686,0.9201711,3.185393,3.39531],[1497300392000,11.13686,0.7862587,1.496416,2.308708],[1497300992000,11.07242,0.7049562,0.7699966,1.583831],[1497301592000,11.03125,0.6702882,0.6674914,1.260058],[1497302192000,11.07319,0.6687024,0.6762646,1.064989],[1497302792000,11.01515,0.6798095,0.8899515,0.9474607],[1497303392000,11.01515,0.7451123,2.966282,1.141243],[1497303992000,11.14401,0.7762437,1.431349,1.311273],[1497304592000,11.11537,0.7752687,0.7224917,1.169945],[1497305192000,11.13866,0.7835705,0.5662401,1.002576],[1497305792000,11.09746,0.7900391,0.4474988,0.8775384],[1497306392000,11.11537,0.7961413,0.3187708,0.7638611],[1497306992000,11.11537,0.8116444,0.2487548,0.683783],[1497307592000,11.16192,0.824829,0.2025037,0.6186582],[1497308192000,11.26216,0.8325171,0.1525159,0.5349121],[1497308792000,11.30333,0.8450929,0.1225009,0.4975096],[1497309392000,11.34349,0.8522922,0.1112622,0.4437928],[1497309992000,11.34166,0.8651124,0.08501438,0.4188297],[1497310592000,11.40527,0.8713366,0.07375939,0.3800662],[1497311192000,11.38738,0.877439,0.06500244,0.3451541],[1497311792000,11.42317,0.8814686,0.0550156,0.3286191],[1497312392000,11.44644,0.885132,0.04875017,0.305115],[1497312992000,11.46434,0.877439,0.0449905,0.2836972],[1497313592000,11.48761,0.8786634,0.04000854,0.2712344],[1497314192000,11.50551,0.867307,0.02999878,0.2625855],[1497314792000,11.48224,0.8675563,0.02999878,0.2424434],[1497315392000,11.58781,0.8624291,0.02501682,0.2374998],[1497315992000,11.58781,0.8497313,0.02123423,0.2287656],[1497316592000,11.61108,0.8389906,0.01999661,0.2236994],[1497317192000,11.62898,0.8324,0.01623694,0.2099609],[1497317792000,11.62898,0.8201905,0.01500706,0.2038025],[1497318392000,11.65225,0.8060289,0.009986841,0.198859],[1497318992000,11.67015,0.8026149,0.0137465,0.1950684],[1497319592000,11.75249,0.7847899,0.01000217,0.1887266],[1497320192000,11.70596,0.7736829,0.009986841,0.1825681],[1497320792000,11.75249,0.7597656,0.01000217,0.1699826],[1497321392000,11.72815,0.7512195,0.01000217,0.1737732],[1497321992000,11.6843,0.7401124,0.01000977,0.1725584],[1497322592000,11.76742,0.7237563,0.01000217,0.1662539],[1497323192000,11.83104,0.7111804,0.006242511,0.1650391],[1497323792000,11.97237,0.7050781,0.006250104,0.1561215],[1497324392000,12.20137,0.6872532,0.008764545,0.1562441],[1497324992000,12.32484,0.6788344,0.006227179,0.1550293],[1497325592000,12.48952,0.6650391,0.008764545,0.1548459],[1497326192000,12.48952,0.6549071,0.004981958,0.1548459],[1497326792000,12.48952,0.6450195,0.005004883,0.1499631],[1497327392000,12.51277,0.636107,0.001237628,0.1499023],[1497327992000,12.58971,0.6237805,0.003759662,0.1438047],[1497328592000,12.54854,0.6126686,0.001245221,0.140076],[1497329192000,12.40718,0.6049805,0,0.1411682],[1497329792000,12.30611,0.5950929,0.003736737,0.1399533],[1497330392000,12.23609,0.5849609,0.001245221,0.1399533],[1497330992000,12.13588,0.5750734,0.003759662,0.1362246],[1497331592000,12.24707,0.5677516,0.003759662,0.1311584],[1497332192000,12.51277,0.5548095,0.001245221,0.1299435],[1497332792000,12.73647,0.5412585,0,0.1300662]];

    lastUpdate : Date = new Date();

    title : string = "H"+String.fromCharCode(0xf8)+"vringen test site"
    legendItems: any[] = [
        {name: "Field 1",description: "Bluegrey w/Leca & Multiblokk",color: "#0D47A1"},
        {name: "Field 2",description: "Reference w/black roofing",color: "#F44336"},
        {name: "Field 3",description: "Reference w/Bluegreen sedum roofing",color: "#43A047"}

    ];

    lineChartConfig : LineChartConfig = {
        leftUnit: String.fromCharCode(0x00B0)+"C",
        rightUnit: "mm",
        lines: [
            {
                    color: "#FFC107",
                    columnIndex: 0,
                    scaleIndex: 0,
                    unit: String.fromCharCode(0x00B0)+"C",
                    numberformat: '1.2-2'
            },
            {
                    color: this.legendItems[0].color,
                    columnIndex: 1,
                    scaleIndex: 1,
                    unit: "mm",
                    numberformat: '1.2-2'
            },
            {
                    color: this.legendItems[1].color,
                    columnIndex: 2,
                    scaleIndex: 1,
                    unit: "mm",
                    numberformat: '1.2-2'
            },
            {
                    color: this.legendItems[2].color,
                    columnIndex: 3,
                    scaleIndex: 1,
                    unit: "mm",
                    numberformat: '1.2-2'
            }
        ]
    };

    constructor() {
        
    }


}