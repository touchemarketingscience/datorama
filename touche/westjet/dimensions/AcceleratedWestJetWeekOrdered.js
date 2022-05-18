var weekOffset = {
	'Wed': -5,
	'Thu': -6,
	'Fri': 0,
	'Sat': -1,
	'Sun': -2,
	'Mon': -3,
	'Tue': -4
};

var dayOfWeek = FORMATDATE([Day], 'EEE');

var startOfWeek = DATEADD('d', weekOffset[dayOfWeek], [Day])
var startOfWeekFormatted = FORMATDATE(startOfWeek, 'MMM dd');

var endOfWeek = DATEADD('d', 6, startOfWeek)
var endOfWeekFormatted = FORMATDATE(endOfWeek, 'MMM dd');


var year = FORMATDATE([Day],'yyyy')
var start_of_year = year + '-' + '01-01'
var first_day_of_year = PARSEDATE(start_of_year,'yyyy-MM-dd')

var weekDiff = DATEDIFF('ww', first_day_of_year,startOfWeek)

if (weekDiff > 9) {
	return '[' + weekDiff + '] ' + startOfWeekFormatted + ' - ' + endOfWeekFormatted
} else {
	return '[0' + weekDiff + '] ' + startOfWeekFormatted + ' - ' + endOfWeekFormatted
}
