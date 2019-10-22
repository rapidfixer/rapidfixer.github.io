/*
(c) Copyright Weborama SA - France
All rights reserved

It is illegal to modify, disassemble, sell, copy or publish this software
or any part thereof. The use of this software is only permitted with the
prior and express written permission of Weborama SA - France.

for more information please contact: info@weborama.com
*/

/*function x17() {
    var x1cl, x1ey = x1bb.x1cj(), ad_data = {}, tag = weborama_display_tag;

x1ey.conf_admireusertrack = false;
	x1ey.conf_rtbtracker = false;
	x1ey.conf_admirecountry = 'RUS';
	///*/
	function x17() {
    var x1cl, x1ey = x1bb.x1cj();
    x1ey.x1ie = x1bb.x1nn(x1ey.x1ie,'wuid=&retargeting=&');
    x1ey.x1lp = '135';

    x1ey.conf_oba = false;

    x1ey.conf_admireusertrack = false;
    x1ey.conf_rtbtracker = false;
	
	     clearInterval(x1bb.x1bQ);
x1bb.x1bQ = setInterval(x1bb.x1cc.x1ce, 1000/40);


    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;
	
	

    try{
        adperfobj.imptrackers = new Array(

        );

        adperfobj.clicktrackers = (new Array(

        ).concat(adperfobj.clicktrackers));

        adperfobj.eventtrackers = (new Array(

        ).concat(adperfobj.eventtrackers));
    }catch(x1o){}

    x1ey.addTrackers(adperfobj);
    x1ey.addClicks(adperfobj);
	


    /*x1ey.addTrackers(tag);
    x1ey.addClicks(tag);
    x1ey.x1al(ad_data);*/


	
	
		x1cl = new x1bb.x1hW();
	x1cl.x1c (x1ey, 1605654, 'alt_banner_850x210.gif', 850, 210, '');
	x1ey.x1gG (x1cl);

	x1cl = new x1bb.x1ig();
	x1cl.x1c (x1ey, 1605658, 'banner_850x210.html', 850, 210);
	x1ey.x1gG (x1cl);

	x1cl = new x1bb.x1jr();
	x1cl.x1c(x1ey, 1605655, 'field_left_html', 500.zindex, false, 0, 0, '', 'layer_535x1440.html', 535, 1440);
	x1ey.x1gM(x1cl);

	x1cl = new x1bb.x1jr();
	x1cl.x1c(x1ey, 1605656, 'field_right_html', 500.zindex, false, 0, 0, '', 'layer_536x1440.html', 536, 1440);
	x1ey.x1gM(x1cl);

    
        x1ey.x1gQ();
    
    
}

x1L('screenad_core_' + adperf_version + '_scrambled.js');
