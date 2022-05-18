if ([WestJet_Site] == 'SA360')
	return 'Search'

if ([WestJet_Strategy_Cleaned] == 'AW')  return 'Awareness'
if ([WestJet_Strategy_Cleaned] == 'CN')  return 'Consideration'
if ([WestJet_Strategy_Cleaned] == 'CO')  return 'Conversion'


return '"' + [WestJet_Strategy_Cleaned] + '"' + ' | S: ' + [WestJet_Source] + ' | P: ' + [Media_Buy_Name]
