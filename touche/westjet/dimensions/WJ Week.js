// ---------------------------------------------------------------------
// Dimension Name: WJ Week
// Data Type: Text
// ---------------------------------------------------------------------

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
	
return startOfWeekFormatted + ' - ' + endOfWeekFormatted
