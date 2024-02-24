import chalk from 'chalk';
import inquirer from 'inquirer';
let ans = await inquirer.prompt({
    type: "list",
    name: "user",
    message: "Select Currency to convert Pakiatani Rupee:",
    choices: [
        "Dollar",
        "Indian Rupee",
        "Japneess Yen",
        "Kuwaiti Dinnar",
        "New zeeland Dolllar",
        "Qatari Riyal",
        "Russain Ruble",
        "SaudiRiyal",
        "South Africa Rand",
        "Sri Lankan Rupee",
        "Tajikistan Soman",
    ]
});
let amount = await inquirer.prompt({
    type: "number",
    name: "amount",
    message: "Enter an Amount:",
});
if (ans.user === "Dollar") {
    let dolar = amount.amount * 279.73;
    let answer = "Your currency is convert in to Pakistani Rupee is :";
    let PKR = `\n Currency Rate ${chalk.green("@279.73")}`;
    console.log(PKR, "\n", answer, dolar);
}
else if (ans.user === "SaudiRiyal") {
    let dolar1 = amount.amount * 74.70;
    let answer11 = "your currency is convter in to Pakistani Rupee is :";
    let PKR = "Currency Rate @74.70";
    console.log(PKR, "\n", answer11, dolar1, "\n And the rate of SaudiRiyal is", 74.70);
}
else if (ans.user === "Sri Lankan Rupee") {
    let dolar1 = amount.amount * 0.90;
    let answer11 = "your currency is convter in to Pakistani Rupee is :";
    let PKR = "Currency Rate @0.90";
    console.log(PKR, "\n", answer11, dolar1);
}
else if (ans.user === "Tajikistan Soman") {
    let dolar1 = amount.amount * 25.52;
    let answer11 = "your currency is convter in to Pakistani Rupee is :";
    let PKR = "Currency Rate @25.52";
    console.log(PKR, "\n", answer11, dolar1);
}
else if (ans.user === "South Africa Rand") {
    let dolar1 = amount.amount * 14.59;
    let answer11 = "your currency is convter in to Pakistani Rupee is :";
    let PKR = "Currency Rate @14.59";
    console.log(PKR, "\n", answer11, dolar1);
}
else if (ans.user === "Russain Ruble") {
    let dolar1 = amount.amount * 3.00;
    let answer11 = "your currency is convter in to Pakistani Rupee is :";
    let PKR = "Currency Rate @3.00";
    console.log(PKR, "\n", answer11, dolar1);
}
else if (ans.user === "Qatari Riyal") {
    let dolar1 = amount.amount * 76.95;
    let answer11 = "your currency is convter in to Pakistani Rupee is :";
    let PKR = "Currency Rate @76.95";
    console.log(PKR, "\n", answer11, dolar1);
}
else if (ans.user === "New zeeland Dolllar") {
    let dolar1 = amount.amount * 173.70;
    let answer11 = "your currency is convter in to Pakistani Rupee is :";
    let PKR = "Currency Rate @173.70";
    console.log(PKR, "\n", answer11, dolar1);
}
else if (ans.user === "Kuwaiti Dinnar") {
    let dolar1 = amount.amount * 910.35;
    let answer11 = "your currency is convter in to Pakistani Rupeeis :";
    let PKR = "Currency Rate @910.35";
    console.log(PKR, "\n", answer11, dolar1);
}
else if (ans.user === "Japneess Yen") {
    let dolar1 = amount.amount * 1.86;
    let answer11 = "your currency is convter in to Pakistani Rupee is :";
    let PKR = "Currency Rate @1.86";
    console.log(PKR, "\n", answer11, dolar1);
}
