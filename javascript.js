const chalk = require('chalk');

var moment = require('moment');
var string = ""
var day = moment().format("dddd");
console.log(chalk.green.underline(day));
var time = moment().format("hh");
if (time >= 12 && time <17 )
{
    string = 'Good Afternoon!';
}
else if (time >= 17 )
{
    string = 'Good Evening!';
}
else if (time >=0 && time <12)
{
    string = 'Good Morning!';
}
console.log(chalk.underline.red(string));