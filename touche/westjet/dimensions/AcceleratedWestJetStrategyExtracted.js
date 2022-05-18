if ([WestJet_Source] == 'CM360' && [WestJet_Site] == 'Facebook') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'CM360' && [WestJet_Site] == 'Pinterest') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'CM360' && [WestJet_Site] == 'Snapchat') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'CM360' && [WestJet_Site] == 'TikTok') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'CM360' && [WestJet_Site] == 'Twitter') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'Facebook') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'Pinterest') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'Snapchat') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'TikTok') 
	return EXTRACT([Media_Buy_Name], '_', 8)

if ([WestJet_Source] == 'Twitter') 
	return EXTRACT([Media_Buy_Name], '_', 8)

return EXTRACT([Media_Buy_Name], '_', 7)
