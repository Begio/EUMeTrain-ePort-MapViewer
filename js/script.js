var _0x4b66=['microday','micronight','dust','convection','radar','300hPa','500hPa','700hPa','850hPa','1000hPa','sgeored','value','sstream','sjet','scvared','scvablue','srvblack','srvwhite','sdivblue','sdivyellow','stemp','shr','stalt','stadv','somega','Cross\x20Section\x20active\x20-\x20Click\x20on\x20two\x20different\x20locations\x20of\x20the\x20map','btnCrossSection','className','blueButtonActive','blueButton','crosssectioniframe','clearLayers','removeLayer','#crosssectiondiv','hide','#floatingDivSatellite','show','btnSatelliteDiv','#floatingDivCrossSection','btnVariablesDiv','#floatingDivVariablesbody','btnSearchDiv','#floatingDivSearch','#dateCalentarSearch','glDatePicker','flatwhite','getMonth','getDate','val','getFullYear','checked','getUTCDate','&nbsp','\x20Time\x20','Z\x20&nbsp','getSouth','zoomend','btnGridblack','data/wms.png','imageOverlay','gridlayerw','data/satellites.jpg','data/satellites\x20(1).jpg','data/satellites\x20(2).jpg','_image','wv62layer','data/satellites\x20(3).jpg','data/satellites\x20(4).jpg','data/satellites\x20(5).jpg','data/satellites\x20(6).jpg','data/satellites\x20(8).jpg','data/satellites\x20(9).jpg','data/satellites\x20(10).jpg','data/observations.png','data/observations\x20(1).png','data/ecmwf.png','h300layer','data/ecmwf\x20(1).png','data/ecmwf\x20(2).png','st300layer','data/ecmwf\x20(3).png','jet300layer','cva300layer','data/ecmwf\x20(6).png','cva500layer','data/ecmwf\x20(7).png','rv300layer','data/ecmwf\x20(8).png','rv500layer','data/ecmwf\x20(9).png','data/ecmwf\x20(10).png','data/ecmwf\x20(11).png','data/ecmwf\x20(12).png','hrlayer','data/ecmwf\x20(13).png','t500layer','data/ecmwf\x20(14).png','data/ecmwf\x20(15).png','thetalayer','data/ecmwf\x20(17).png','data/ecmwf\x20(18).png','data/ecmwf\x20(19).png','data/ecmwf\x20(20).png','data/ecmwf\x20(21).png','thicknesslayer','data/ecmwf\x20(22).png','data/ecmwf\x20(4).png','data/ecmwf\x20(24).png','data/ecmwf\x20(25).png','data/ecmwf\x20(26).png','data/ecmwf\x20(27).png','#prev24','#prev6','#next6','#next24','setUTCHours','#mnbutton','slideToggle','#newcsbutton','#onewbutton','open','draggable','Zoom\x20disabled,\x20This\x20is\x20DEMO\x20version','getUTCFullYear','getUTCMonth','getUTCHours','getElementById','fecha','innerHTML','map','CRS','EPSG4326','setView','removeControl','zoomControl','disable','dragging','getBounds','getWest','getEast','getNorth','data/base.png','addTo','LayerGroup','icon','images/marker-icon-clip.png','polyline','red','und','click','log','latLngToContainerPoint','latlng','getSize','undefined','Marker','addLayer','bindPopup','<b>Latitude:\x20</b>','lat','toFixed','<b>Longitude:\x20</b>','lng','<br>DEMO\x20version,\x20unable\x20to\x20display\x20value','openPopup','setLatLng','DEMO\x20version,\x20unable\x20to\x20display\x20value','push','getLatLng','length','CRS:84[','#crosssectioniframe','attr','src','data/','.jpg','base','h300','cva300','cva500','rv500','pv15','div300','div1000','theta500','theta850','omega700','thickness','cape','mslp','blh','tcw','vis08','ir108','wv62','airmass','natural','micro24'];(function(_0x22a8fe,_0x348d8a){var _0x43bc42=function(_0x52fa61){while(--_0x52fa61){_0x22a8fe['push'](_0x22a8fe['shift']());}};_0x43bc42(++_0x348d8a);}(_0x4b66,0x141));var _0x1df4=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0x4b66[_0x2d8f05];return _0x4d74cb;};var bwest,bsouth,bcsouth,bnorth,beast;var crosssection=0x0;var crosssectiondiv=0x0,Satellitediv=0x0,Variablesdiv=0x0,Searchdiv=0x0;var CrossSectionVar='1';d=new Date();qdate=new Date();var ryear,rmonth,rday,rhour;function data_time(){year=d[_0x1df4('0x0')]();if(year<0xa){year='0'+year;}month=d[_0x1df4('0x1')]()+0x1;if(month<0xa){month='0'+month;}day=d['getUTCDate']();if(day<0xa){day='0'+day;}hour=d[_0x1df4('0x2')]();if(hour>=0x0&&hour<0x6){hour='00';run=0xc;rday=day;ryear=year;rmonth=month;rhour='00';}if(hour>=0x6&&hour<0xc){hour='06';run=0x12;rday=day;ryear=year;rmonth=month;rhour='06';}if(hour>=0xc&&hour<0x12){hour='12';run=0xc;rday=day;ryear=year;rmonth=month;rhour='12';}if(hour>=0x12&&hour<0x18){hour='18';run=0x12;rday=day;ryear=year;rmonth=month;rhour='18';}minute='00';document[_0x1df4('0x3')](_0x1df4('0x4'))[_0x1df4('0x5')]='&nbsp\x202018-06-14\x20Time\x2012:00Z\x20&nbsp';}var map=new L[(_0x1df4('0x6'))]('map',{'crs':L[_0x1df4('0x7')][_0x1df4('0x8')],'zoom':0x8,'keyboard':![],'doubleClickZoom':![]})[_0x1df4('0x9')]([49.8,-10.8],0x4);map[_0x1df4('0xa')](map[_0x1df4('0xb')]);map['scrollWheelZoom'][_0x1df4('0xc')]();map[_0x1df4('0xd')][_0x1df4('0xc')]();bwest=map[_0x1df4('0xe')]()[_0x1df4('0xf')]();bsouth=map[_0x1df4('0xe')]()['getSouth']();beast=map[_0x1df4('0xe')]()[_0x1df4('0x10')]();bnorth=map[_0x1df4('0xe')]()[_0x1df4('0x11')]();base=L['imageOverlay'](_0x1df4('0x12'),[[bsouth,bwest],[bnorth,beast]])[_0x1df4('0x13')](map);var marker1,marker2='0';var Layermarker=new L[(_0x1df4('0x14'))]();var Layerpoly=new L[(_0x1df4('0x14'))]();var clipIcon=L[_0x1df4('0x15')]({'iconUrl':_0x1df4('0x16'),'iconSize':[0x19,0x29],'iconAnchor':[0xb,0x28],'popupAnchor':[0x1,0x3]});var crossarray=new Array();var polyline=L[_0x1df4('0x17')](crossarray,{'color':_0x1df4('0x18')});var pointx;var platlng=_0x1df4('0x19');var sizex;var crossurl;map['on'](_0x1df4('0x1a'),onMapClick);function onMapClick(_0xd891e9){platlng=_0xd891e9['latlng'];console[_0x1df4('0x1b')](platlng);pointx=map[_0x1df4('0x1c')](_0xd891e9[_0x1df4('0x1d')]);sizex=map[_0x1df4('0x1e')]();CrossSectionSelect();}function CrossSectionSelect(){if(crosssection==0x0){var _0xd56a5d=new Array();var _0x285dac='';for(var _0x59a59b=0x0;_0x59a59b<_0xd56a5d['length'];_0x59a59b++){_0x285dac=_0x285dac+_0xd56a5d[_0x59a59b];}if(typeof marker1===_0x1df4('0x1f')){marker1=new L[(_0x1df4('0x20'))](platlng,{'draggable':!![],'icon':clipIcon});map[_0x1df4('0x21')](marker1);marker1[_0x1df4('0x22')](_0x1df4('0x23')+platlng[_0x1df4('0x24')][_0x1df4('0x25')](0x2)+'\x20'+_0x1df4('0x26')+platlng[_0x1df4('0x27')][_0x1df4('0x25')](0x2)+_0x1df4('0x28'))[_0x1df4('0x29')]();}else{marker1[_0x1df4('0x2a')](platlng);marker1[_0x1df4('0x22')](_0x1df4('0x23')+platlng['lat'][_0x1df4('0x25')](0x2)+'\x20'+'<b>Longitude:\x20</b>'+platlng[_0x1df4('0x27')][_0x1df4('0x25')](0x2)+_0x1df4('0x28'))['openPopup']();}}else{if(platlng!=_0x1df4('0x19')&&marker2=='0'){marker2=new L[(_0x1df4('0x20'))](platlng);marker2[_0x1df4('0x22')](_0x1df4('0x23')+platlng[_0x1df4('0x24')][_0x1df4('0x25')](0x2)+'\x20'+'<b>Longitude:\x20</b>'+platlng[_0x1df4('0x27')][_0x1df4('0x25')](0x2)+_0x1df4('0x2b'))[_0x1df4('0x29')]();crossarray[_0x1df4('0x2c')](marker2[_0x1df4('0x2d')]());Layermarker[_0x1df4('0x21')](marker2);map[_0x1df4('0x21')](Layermarker);}else if(platlng!=_0x1df4('0x19')&&marker2!='0'){marker2=new L[(_0x1df4('0x20'))](platlng);marker2['bindPopup'](_0x1df4('0x23')+platlng[_0x1df4('0x24')][_0x1df4('0x25')](0x2)+'\x20'+_0x1df4('0x26')+platlng['lng'][_0x1df4('0x25')](0x2)+_0x1df4('0x2b'))[_0x1df4('0x29')]();crossarray[_0x1df4('0x2c')](marker2[_0x1df4('0x2d')]());Layermarker[_0x1df4('0x21')](marker2);map[_0x1df4('0x21')](Layermarker);var _0x4a8dd8='';for(var _0x59a59b=0x0;_0x59a59b<crossarray[_0x1df4('0x2e')];_0x59a59b++){_0x4a8dd8=_0x4a8dd8+_0x1df4('0x2f')+crossarray[_0x59a59b][_0x1df4('0x27')][_0x1df4('0x25')](0x2)+';'+crossarray[_0x59a59b][_0x1df4('0x24')]['toFixed'](0x2)+']\x20';}polyline=L[_0x1df4('0x17')](crossarray,{'color':_0x1df4('0x18')})[_0x1df4('0x13')](map);Layerpoly['addLayer'](polyline);map[_0x1df4('0x21')](Layerpoly);$(_0x1df4('0x30'))[_0x1df4('0x31')](_0x1df4('0x32'),_0x1df4('0x33')+CrossSectionVar+_0x1df4('0x34'));crossurl=_0x1df4('0x33')+CrossSectionVar+_0x1df4('0x34');crosssectiondivopen();}}}var igrid=0x0,igridw=0x0;var ibase=document['getElementById'](_0x1df4('0x35'));var ih300=document[_0x1df4('0x3')](_0x1df4('0x36'));var ih500=document['getElementById']('h500');var ijet300=document[_0x1df4('0x3')]('jet300');var ist300=document[_0x1df4('0x3')]('st300');var icva300=document[_0x1df4('0x3')](_0x1df4('0x37'));var icva500=document['getElementById'](_0x1df4('0x38'));var irv300=document[_0x1df4('0x3')]('rv300');var irv500=document[_0x1df4('0x3')](_0x1df4('0x39'));var ipv15=document[_0x1df4('0x3')](_0x1df4('0x3a'));var idiv300=document[_0x1df4('0x3')](_0x1df4('0x3b'));var idiv1000=document['getElementById'](_0x1df4('0x3c'));var ihr=document['getElementById']('hr');var it500=document[_0x1df4('0x3')]('t500');var it850=document[_0x1df4('0x3')]('t850');var itadv700=document[_0x1df4('0x3')]('tadv700');var itheta500=document[_0x1df4('0x3')](_0x1df4('0x3d'));var itheta850=document[_0x1df4('0x3')](_0x1df4('0x3e'));var iomega700=document[_0x1df4('0x3')](_0x1df4('0x3f'));var itd=document[_0x1df4('0x3')]('td');var itfp=document['getElementById']('tfp');var ithickness=document[_0x1df4('0x3')](_0x1df4('0x40'));var icape=document[_0x1df4('0x3')](_0x1df4('0x41'));var isi=document[_0x1df4('0x3')]('si');var iwind=document[_0x1df4('0x3')]('wind');var imslp=document[_0x1df4('0x3')](_0x1df4('0x42'));var iblh=document['getElementById'](_0x1df4('0x43'));var itcw=document[_0x1df4('0x3')](_0x1df4('0x44'));var iwh=document[_0x1df4('0x3')]('wh');var ivis08=document[_0x1df4('0x3')](_0x1df4('0x45'));var iir108=document[_0x1df4('0x3')](_0x1df4('0x46'));var iwv62=document[_0x1df4('0x3')](_0x1df4('0x47'));var iairmass=document[_0x1df4('0x3')](_0x1df4('0x48'));var inatural=document[_0x1df4('0x3')](_0x1df4('0x49'));var ihrv=document['getElementById']('hrv');var imicro24=document[_0x1df4('0x3')](_0x1df4('0x4a'));var imicroday=document[_0x1df4('0x3')](_0x1df4('0x4b'));var imicronight=document[_0x1df4('0x3')](_0x1df4('0x4c'));var idust=document['getElementById'](_0x1df4('0x4d'));var iconvection=document[_0x1df4('0x3')](_0x1df4('0x4e'));var iradar=document['getElementById'](_0x1df4('0x4f'));var isynop=document[_0x1df4('0x3')]('synop');var jet;var grid,base;var vis08,ir108,wv62,airmass,natural,hrv,micro24,microday,microday,micronight,dust,convection;var radar,synop;var h300,h500,st300,jet300,cva300,cva500,rv300,rv500,pv15,div300,div1000,hr,t500,t850,tadv700,theta500,theta850;var omega700,tfp,thickness,cape,si,wind,w850,w10,t2,mslp,blh,tcw,wh;var sgeoredval=_0x1df4('0x50'),sgeoblueval=_0x1df4('0x51'),somegaval=_0x1df4('0x52'),sthval=_0x1df4('0x53'),sthaltval='500hPa',stadvval=_0x1df4('0x52'),stempval='850hPa',shrval=_0x1df4('0x52'),staltval=_0x1df4('0x51'),sdivblueval='300hPa',sdivyellowval=_0x1df4('0x54'),srvblackval=_0x1df4('0x50'),srvwhiteval=_0x1df4('0x51'),scvablueval=_0x1df4('0x51'),scvaredval=_0x1df4('0x50'),swindval=_0x1df4('0x50'),sjetval=_0x1df4('0x50'),sstreamval=_0x1df4('0x50');function variablechange(){sgeoredval=document[_0x1df4('0x3')](_0x1df4('0x55'))[_0x1df4('0x56')];sgeoblueval=document['getElementById']('sgeoblue')[_0x1df4('0x56')];sstreamval=document['getElementById'](_0x1df4('0x57'))['value'];sjetval=document[_0x1df4('0x3')](_0x1df4('0x58'))[_0x1df4('0x56')];swindval=document[_0x1df4('0x3')]('swind')[_0x1df4('0x56')];scvaredval=document['getElementById'](_0x1df4('0x59'))['value'];scvablueval=document[_0x1df4('0x3')](_0x1df4('0x5a'))[_0x1df4('0x56')];srvblackval=document[_0x1df4('0x3')](_0x1df4('0x5b'))['value'];srvwhiteval=document[_0x1df4('0x3')](_0x1df4('0x5c'))[_0x1df4('0x56')];sdivblueval=document['getElementById'](_0x1df4('0x5d'))['value'];sdivyellowval=document[_0x1df4('0x3')](_0x1df4('0x5e'))[_0x1df4('0x56')];stempval=document[_0x1df4('0x3')](_0x1df4('0x5f'))[_0x1df4('0x56')];shrval=document[_0x1df4('0x3')](_0x1df4('0x60'))[_0x1df4('0x56')];staltval=document[_0x1df4('0x3')](_0x1df4('0x61'))['value'];stadvval=document[_0x1df4('0x3')](_0x1df4('0x62'))['value'];sthval=document['getElementById']('sth')[_0x1df4('0x56')];sthaltval=document[_0x1df4('0x3')]('sthalt')[_0x1df4('0x56')];somegaval=document[_0x1df4('0x3')](_0x1df4('0x63'))[_0x1df4('0x56')];}function crosssectionactive(){if(crosssection==0x0){alert(_0x1df4('0x64'));platlng=_0x1df4('0x19');document[_0x1df4('0x3')](_0x1df4('0x65'))[_0x1df4('0x66')]=_0x1df4('0x67');crosssection=0x1;floatingDivCrossSectionopen();}else{document['getElementById'](_0x1df4('0x65'))[_0x1df4('0x66')]=_0x1df4('0x68');document[_0x1df4('0x3')](_0x1df4('0x69'))[_0x1df4('0x32')]='';crosssection=0x0;marker2='0';platlng=_0x1df4('0x19');crossarray=[];crossarray=new Array();Layerpoly[_0x1df4('0x6a')]();map[_0x1df4('0x6b')](Layerpoly);Layermarker[_0x1df4('0x6a')]();map[_0x1df4('0x6b')](Layermarker);crosssectiondivclose();floatingDivCrossSectionclose();}}function newcs(){document[_0x1df4('0x3')](_0x1df4('0x69'))[_0x1df4('0x32')]='';crosssection=0x1;marker2='0';platlng=_0x1df4('0x19');crossarray=[];crossarray=new Array();Layerpoly[_0x1df4('0x6a')]();map[_0x1df4('0x6b')](Layerpoly);Layermarker[_0x1df4('0x6a')]();map[_0x1df4('0x6b')](Layermarker);crosssectiondivclose();}function crosssectionchange(){CrossSectionSelect();}function crosssectiondivopen(){$(_0x1df4('0x6c'))['show']();}function crosssectiondivclose(){$(_0x1df4('0x6c'))[_0x1df4('0x6d')]();}function floatingDivSatelliteopen(){if(Satellitediv==0x0){document[_0x1df4('0x3')]('btnSatelliteDiv')[_0x1df4('0x66')]='blueButtonActive';Satellitediv=0x1;}$(_0x1df4('0x6e'))[_0x1df4('0x6f')]();}function floatingDivSatelliteclose(){if(Satellitediv==0x1){Satellitediv=0x0;};document[_0x1df4('0x3')](_0x1df4('0x70'))[_0x1df4('0x66')]=_0x1df4('0x68');$(_0x1df4('0x6e'))[_0x1df4('0x6d')]();}function floatingDivCrossSectionopen(){if(crosssectiondiv==0x0){document[_0x1df4('0x3')]('btnCrossSectionDiv')[_0x1df4('0x66')]=_0x1df4('0x67');crosssectiondiv=0x1;}$(_0x1df4('0x71'))[_0x1df4('0x6f')]();}function floatingDivCrossSectionclose(){if(crosssectiondiv==0x1){crosssectiondiv=0x0;};document[_0x1df4('0x3')]('btnCrossSectionDiv')[_0x1df4('0x66')]=_0x1df4('0x68');$('#floatingDivCrossSection')[_0x1df4('0x6d')]();}function floatingDivVariablesopen(){if(Variablesdiv==0x0){document[_0x1df4('0x3')](_0x1df4('0x72'))['className']=_0x1df4('0x67');Variablesdiv=0x1;}$(_0x1df4('0x73'))[_0x1df4('0x6f')]();}function floatingDivVariablesclose(){if(Variablesdiv==0x1){Variablesdiv=0x0;};document[_0x1df4('0x3')]('btnVariablesDiv')[_0x1df4('0x66')]=_0x1df4('0x68');$('#floatingDivVariablesbody')[_0x1df4('0x6d')]();}function floatingDivSearchopen(){if(Searchdiv==0x0){document[_0x1df4('0x3')](_0x1df4('0x74'))[_0x1df4('0x66')]=_0x1df4('0x67');Searchdiv=0x1;}$(_0x1df4('0x75'))[_0x1df4('0x6f')]();$(_0x1df4('0x76'))[_0x1df4('0x77')]({'showAlways':![],'cssName':_0x1df4('0x78'),'onClick':function(_0x1520ec,_0xc27601,_0x53ba41,_0x79d962){var _0x232693;var _0x3215d9;if(_0x53ba41[_0x1df4('0x79')]()+0x1<0xa){_0x232693='0'+(_0x53ba41[_0x1df4('0x79')]()+0x1);}else{_0x232693=_0x53ba41['getMonth']()+0x1;}if(_0x53ba41[_0x1df4('0x7a')]()<0xa){_0x3215d9='0'+_0x53ba41[_0x1df4('0x7a')]();}else{_0x3215d9=_0x53ba41[_0x1df4('0x7a')]();}_0x1520ec[_0x1df4('0x7b')](_0x53ba41[_0x1df4('0x7c')]()+'-'+_0x232693+'-'+_0x3215d9);}})['glDatePicker'](!![]);}function floatingDivSearchclose(){if(Searchdiv==0x1){Searchdiv=0x0;};document[_0x1df4('0x3')](_0x1df4('0x74'))[_0x1df4('0x66')]='blueButton';$(_0x1df4('0x75'))[_0x1df4('0x6d')]();}floatingDivSearchclose();floatingDivVariablesopen();floatingDivSatelliteopen();floatingDivCrossSectionclose();crosssectiondivclose();function updatelayer(){if(ivis08[_0x1df4('0x7d')]==!![]){map['removeLayer'](vis08);fvis08();}if(iir108[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](ir108);fir108();}if(iwv62[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](wv62);fwv62();}if(iairmass[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](airmass);fairmass();}if(inatural[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](natural);fnatural();}if(ihrv[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](hrv);fhrv();}if(imicro24[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](micro24);fmicro24();}if(imicroday[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](microday);fmicroday();}if(imicronight[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](micronight);fmicronight();}if(idust['checked']==!![]){map[_0x1df4('0x6b')](dust);fdust();}if(iconvection['checked']==!![]){map[_0x1df4('0x6b')](convection);fconvection();}if(ih300[_0x1df4('0x7d')]==!![]){map['removeLayer'](h300);fhred();}if(ih500[_0x1df4('0x7d')]==!![]){map['removeLayer'](h500);fhblue();}if(ijet300['checked']==!![]){map[_0x1df4('0x6b')](jet300);fjet();}if(ist300[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](st300);fstream();}if(icva300[_0x1df4('0x7d')]==!![]){map['removeLayer'](cva300);fcvared();}if(icva500['checked']==!![]){map[_0x1df4('0x6b')](cva500);fcvablue();}if(irv300[_0x1df4('0x7d')]==!![]){map['removeLayer'](rv300);frvblack();}if(irv500[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](rv500);frvwhite();}if(ipv15[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](pv15);fpv15();}if(idiv300[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](div300);fdivblue();}if(idiv1000[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](div1000);fdivyellow();}if(ihr[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](hr);fhr();}if(it500['checked']==!![]){map[_0x1df4('0x6b')](t500);ftalternate();}if(it850[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](t850);ftemp();}if(itadv700['checked']==!![]){map[_0x1df4('0x6b')](tadv700);ftadv();}if(itheta500[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](theta500);fthetaalternate();}if(itheta850[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](theta850);ftheta();}if(iomega700[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](omega700);fomega();}if(itd[_0x1df4('0x7d')]==!![]){map['removeLayer'](td);ftd();}if(itfp['checked']==!![]){map[_0x1df4('0x6b')](tfp);ftfp();}if(ithickness[_0x1df4('0x7d')]==!![]){map['removeLayer'](thickness);fthickness();}if(icape[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](cape);fcape();}if(isi['checked']==!![]){map[_0x1df4('0x6b')](si);fsi();}if(iwind[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](wind);fwind();}if(imslp[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](mslp);fmslp();}if(iblh[_0x1df4('0x7d')]==!![]){map['removeLayer'](blh);fblh();}if(itcw[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](tcw);ftcw();}if(iwh[_0x1df4('0x7d')]==!![]){map['removeLayer'](wh);fwh();}if(iradar[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](radar);fradar();}if(isynop[_0x1df4('0x7d')]==!![]){map[_0x1df4('0x6b')](synop);fsynop();}if(igrid==0x1){map[_0x1df4('0x6b')](grid);igrid=0x0;fgrid();}if(igridw==0x1){map[_0x1df4('0x6b')](gridw);igridw=0x0;fgridw();}}function data_time_var(){year=d[_0x1df4('0x0')]();if(year<0xa){year='0'+year;}month=d[_0x1df4('0x1')]()+0x1;if(month<0xa){month='0'+month;}day=d[_0x1df4('0x7e')]();if(day<0xa){day='0'+day;}hour=d[_0x1df4('0x2')]();if(hour>=0x0&&hour<0x6){hour='00';rhour='00';rday=day;ryear=year;rmonth=month;}if(hour>=0x6&&hour<0xc){hour='06';rhour='06';rday=day;ryear=year;rmonth=month;}if(hour>=0xc&&hour<0x12){hour='12';rhour='12';rday=day;ryear=year;rmonth=month;}if(hour>=0x12&&hour<0x18){hour='18';rhour='18';rday=day;ryear=year;rmonth=month;}minute='00';document[_0x1df4('0x3')](_0x1df4('0x4'))[_0x1df4('0x5')]=_0x1df4('0x7f')+year+'-'+month+'-'+day+_0x1df4('0x80')+hour+':'+minute+_0x1df4('0x81');updatelayer();}map['on']('moveend',function(_0x493e84){bwest=map[_0x1df4('0xe')]()[_0x1df4('0xf')]();bsouth=map[_0x1df4('0xe')]()[_0x1df4('0x82')]();beast=map[_0x1df4('0xe')]()[_0x1df4('0x10')]();bnorth=map[_0x1df4('0xe')]()[_0x1df4('0x11')]();updatelayer();});map['on'](_0x1df4('0x83'),function(_0x4ddf95){bwest=map[_0x1df4('0xe')]()[_0x1df4('0xf')]();bsouth=map[_0x1df4('0xe')]()[_0x1df4('0x82')]();beast=map[_0x1df4('0xe')]()['getEast']();bnorth=map[_0x1df4('0xe')]()[_0x1df4('0x11')]();updatelayer();});function fgrid(){if(igrid==0x0){imageGrid='data/wms.png';grid=L['imageOverlay'](imageGrid,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](grid);igrid=0x1;document[_0x1df4('0x3')]('btnGridblack')[_0x1df4('0x66')]=_0x1df4('0x67');}else{map[_0x1df4('0x6b')](grid);igrid=0x0;document[_0x1df4('0x3')](_0x1df4('0x84'))[_0x1df4('0x66')]=_0x1df4('0x68');}}function fgridw(){if(igridw==0x0){imageGridw=_0x1df4('0x85');gridw=L[_0x1df4('0x86')](imageGridw,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](gridw);igridw=0x1;gridw['_image']['id']=_0x1df4('0x87');document[_0x1df4('0x3')]('btnGridwhite')[_0x1df4('0x66')]=_0x1df4('0x67');}else{map[_0x1df4('0x6b')](gridw);igridw=0x0;document[_0x1df4('0x3')]('btnGridwhite')[_0x1df4('0x66')]=_0x1df4('0x68');}}function fvis08(){if(ivis08[_0x1df4('0x7d')]==!![]){imagevis08=_0x1df4('0x88');vis08=L['imageOverlay'](imagevis08,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](vis08);}else{map['removeLayer'](vis08);}}function fir108(){if(iir108[_0x1df4('0x7d')]==!![]){imageir108=_0x1df4('0x89');ir108=L[_0x1df4('0x86')](imageir108,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](ir108);}else{map[_0x1df4('0x6b')](ir108);}}function fwv62(){if(iwv62[_0x1df4('0x7d')]==!![]){imagewv62=_0x1df4('0x8a');wv62=L[_0x1df4('0x86')](imagewv62,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](wv62);wv62[_0x1df4('0x8b')]['id']=_0x1df4('0x8c');}else{map[_0x1df4('0x6b')](wv62);}}function fairmass(){if(iairmass[_0x1df4('0x7d')]==!![]){imageairmass=_0x1df4('0x8d');airmass=L[_0x1df4('0x86')](imageairmass,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](airmass);}else{map[_0x1df4('0x6b')](airmass);}}function fnatural(){if(inatural['checked']==!![]){imagenatural=_0x1df4('0x8e');natural=L[_0x1df4('0x86')](imagenatural,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](natural);}else{map[_0x1df4('0x6b')](natural);}}function fhrv(){if(ihrv[_0x1df4('0x7d')]==!![]){imagehrv=_0x1df4('0x8f');hrv=L[_0x1df4('0x86')](imagehrv,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](hrv);}else{map['removeLayer'](hrv);}}function fmicro24(){if(imicro24[_0x1df4('0x7d')]==!![]){imagemicro24=_0x1df4('0x90');micro24=L[_0x1df4('0x86')](imagemicro24,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](micro24);}else{map[_0x1df4('0x6b')](micro24);}}function fmicroday(){if(imicroday[_0x1df4('0x7d')]==!![]){imagemicroday='data/satellites\x20(7).jpg';microday=L[_0x1df4('0x86')](imagemicroday,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](microday);}else{map[_0x1df4('0x6b')](microday);}}function fmicronight(){if(imicronight['checked']==!![]){imagemicronight=_0x1df4('0x91');micronight=L[_0x1df4('0x86')](imagemicronight,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](micronight);}else{map[_0x1df4('0x6b')](micronight);}}function fdust(){if(idust[_0x1df4('0x7d')]==!![]){imagedust=_0x1df4('0x92');dust=L['imageOverlay'](imagedust,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](dust);}else{map['removeLayer'](dust);}}function fconvection(){if(iconvection['checked']==!![]){imageconvection=_0x1df4('0x93');convection=L['imageOverlay'](imageconvection,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](convection);}else{map['removeLayer'](convection);}}function fradar(){if(iradar['checked']==!![]){imageradar=_0x1df4('0x94');radar=L[_0x1df4('0x86')](imageradar,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](radar);}else{map[_0x1df4('0x6b')](radar);}}function fsynop(){if(isynop[_0x1df4('0x7d')]==!![]){imagesynop=_0x1df4('0x95');synop=L[_0x1df4('0x86')](imagesynop,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](synop);}else{map[_0x1df4('0x6b')](synop);}}function fhred(){if(ih300[_0x1df4('0x7d')]==!![]){imageh300=_0x1df4('0x96');h300=L[_0x1df4('0x86')](imageh300,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](h300);h300['_image']['id']=_0x1df4('0x97');}else{map['removeLayer'](h300);}}function fhblue(){if(ih500[_0x1df4('0x7d')]==!![]){imageh500=_0x1df4('0x98');h500=L[_0x1df4('0x86')](imageh500,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](h500);h500[_0x1df4('0x8b')]['id']='h500layer';}else{map['removeLayer'](h500);}}function fstream(){if(ist300[_0x1df4('0x7d')]==!![]){imagest300=_0x1df4('0x99');st300=L[_0x1df4('0x86')](imagest300,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](st300);st300[_0x1df4('0x8b')]['id']=_0x1df4('0x9a');}else{map[_0x1df4('0x6b')](st300);}}function fjet(){if(ijet300[_0x1df4('0x7d')]==!![]){imagejet300=_0x1df4('0x9b');jet300=L[_0x1df4('0x86')](imagejet300,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](jet300);jet300['_image']['id']=_0x1df4('0x9c');}else{map[_0x1df4('0x6b')](jet300);}}function fcvared(){if(icva300[_0x1df4('0x7d')]==!![]){imagecva300='data/ecmwf\x20(5).png';cva300=L[_0x1df4('0x86')](imagecva300,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](cva300);cva300[_0x1df4('0x8b')]['id']=_0x1df4('0x9d');}else{map['removeLayer'](cva300);}}function fcvablue(){if(icva500[_0x1df4('0x7d')]==!![]){imagecva500=_0x1df4('0x9e');cva500=L[_0x1df4('0x86')](imagecva500,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](cva500);cva500['_image']['id']=_0x1df4('0x9f');}else{map[_0x1df4('0x6b')](cva500);}}function frvblack(){if(irv300[_0x1df4('0x7d')]==!![]){imagerv300=_0x1df4('0xa0');rv300=L[_0x1df4('0x86')](imagerv300,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](rv300);rv300[_0x1df4('0x8b')]['id']=_0x1df4('0xa1');}else{map[_0x1df4('0x6b')](rv300);}}function frvwhite(){if(irv500[_0x1df4('0x7d')]==!![]){imagerv500=_0x1df4('0xa2');rv500=L['imageOverlay'](imagerv500,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](rv500);rv500[_0x1df4('0x8b')]['id']=_0x1df4('0xa3');}else{map[_0x1df4('0x6b')](rv500);}}function fpv15(){if(ipv15[_0x1df4('0x7d')]==!![]){imagepv15=_0x1df4('0xa4');pv15=L[_0x1df4('0x86')](imagepv15,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](pv15);}else{map[_0x1df4('0x6b')](pv15);}}function fdivblue(){if(idiv300[_0x1df4('0x7d')]==!![]){imagediv300=_0x1df4('0xa5');div300=L[_0x1df4('0x86')](imagediv300,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](div300);}else{map[_0x1df4('0x6b')](div300);}}function fdivyellow(){if(idiv1000[_0x1df4('0x7d')]==!![]){imagediv1000=_0x1df4('0xa6');div1000=L[_0x1df4('0x86')](imagediv1000,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](div1000);div1000[_0x1df4('0x8b')]['id']='div1000layer';}else{map['removeLayer'](div1000);}}function fhr(){if(ihr[_0x1df4('0x7d')]==!![]){imagehr=_0x1df4('0xa7');hr=L[_0x1df4('0x86')](imagehr,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](hr);hr[_0x1df4('0x8b')]['id']=_0x1df4('0xa8');}else{map[_0x1df4('0x6b')](hr);}}function ftalternate(){if(it500[_0x1df4('0x7d')]==!![]){imaget500=_0x1df4('0xa9');t500=L[_0x1df4('0x86')](imaget500,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](t500);t500['_image']['id']=_0x1df4('0xaa');}else{map[_0x1df4('0x6b')](t500);}}function ftemp(){if(it850[_0x1df4('0x7d')]==!![]){imaget850=_0x1df4('0xab');t850=L[_0x1df4('0x86')](imaget850,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](t850);}else{map[_0x1df4('0x6b')](t850);}}function ftadv(){if(itadv700[_0x1df4('0x7d')]==!![]){imagetadv700=_0x1df4('0xac');tadv700=L['imageOverlay'](imagetadv700,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](tadv700);}else{map['removeLayer'](tadv700);}}function fthetaalternate(){if(itheta500[_0x1df4('0x7d')]==!![]){imagetheta500='data/ecmwf\x20(16).png';theta500=L[_0x1df4('0x86')](imagetheta500,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](theta500);theta500['_image']['id']=_0x1df4('0xad');}else{map[_0x1df4('0x6b')](theta500);}}function ftheta(){if(itheta850[_0x1df4('0x7d')]==!![]){imagetheta850=_0x1df4('0xae');theta850=L['imageOverlay'](imagetheta850,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](theta850);}else{map[_0x1df4('0x6b')](theta850);}}function fomega(){if(iomega700[_0x1df4('0x7d')]==!![]){imageomega700=_0x1df4('0xaf');omega700=L[_0x1df4('0x86')](imageomega700,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](omega700);}else{map['removeLayer'](omega700);}}function ftd(){if(itd[_0x1df4('0x7d')]==!![]){imagetd=_0x1df4('0xb0');td=L[_0x1df4('0x86')](imagetd,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](td);td[_0x1df4('0x8b')]['id']='tdlayer';}else{map[_0x1df4('0x6b')](td);}}function ftfp(){if(itfp[_0x1df4('0x7d')]==!![]){imagetfp=_0x1df4('0xb1');tfp=L['imageOverlay'](imagetfp,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](tfp);}else{map[_0x1df4('0x6b')](tfp);}}function fthickness(){if(ithickness[_0x1df4('0x7d')]==!![]){imagethickness=_0x1df4('0xb2');thickness=L[_0x1df4('0x86')](imagethickness,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](thickness);thickness[_0x1df4('0x8b')]['id']=_0x1df4('0xb3');}else{map['removeLayer'](thickness);}}function fcape(){if(icape['checked']==!![]){imagecape=_0x1df4('0xb4');cape=L[_0x1df4('0x86')](imagecape,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](cape);}else{map[_0x1df4('0x6b')](cape);}}function fsi(){if(isi[_0x1df4('0x7d')]==!![]){imagesi='data/ecmwf\x20(23).png';si=L[_0x1df4('0x86')](imagesi,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](si);}else{map[_0x1df4('0x6b')](si);}}function fwind(){if(iwind['checked']==!![]){imagewind=_0x1df4('0xb5');wind=L[_0x1df4('0x86')](imagewind,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](wind);}else{map['removeLayer'](wind);}}function fmslp(){if(imslp[_0x1df4('0x7d')]==!![]){imagemslp=_0x1df4('0xb6');mslp=L[_0x1df4('0x86')](imagemslp,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](mslp);}else{map['removeLayer'](mslp);}}function fblh(){if(iblh[_0x1df4('0x7d')]==!![]){imageblh=_0x1df4('0xb7');blh=L[_0x1df4('0x86')](imageblh,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](blh);}else{map['removeLayer'](blh);}}function ftcw(){if(itcw[_0x1df4('0x7d')]==!![]){imagetcw=_0x1df4('0xb8');tcw=L['imageOverlay'](imagetcw,[[bsouth,bwest],[bnorth,beast]]);map['addLayer'](tcw);}else{map[_0x1df4('0x6b')](tcw);}}function fwh(){if(iwh['checked']==!![]){imagewh=_0x1df4('0xb9');wh=L['imageOverlay'](imagewh,[[bsouth,bwest],[bnorth,beast]]);map[_0x1df4('0x21')](wh);}else{map[_0x1df4('0x6b')](wh);}}function canvihora(_0x37668b){hh=_0x37668b[_0x1df4('0x56')];qdate['setUTCHours'](hh);}$(_0x1df4('0xba'))[_0x1df4('0x1a')](function(){});$(_0x1df4('0xbb'))[_0x1df4('0x1a')](function(){});$('#now')['click'](function(){});$(_0x1df4('0xbc'))[_0x1df4('0x1a')](function(){});$(_0x1df4('0xbd'))[_0x1df4('0x1a')](function(){});$('#query')['click'](function(){var _0x3cf9f4=$(_0x1df4('0x76'))[_0x1df4('0x7b')]();qdate=new Date(_0x3cf9f4);qdate[_0x1df4('0xbe')](hh);d=new Date(qdate['getTime']());data_time();data_time_var();});$(_0x1df4('0xbf'))[_0x1df4('0x1a')](function(){$(_0x1df4('0x6c'))[_0x1df4('0xc0')]();});$(_0x1df4('0xc1'))[_0x1df4('0x1a')](function(){newcs();});$(_0x1df4('0xc2'))[_0x1df4('0x1a')](function(){window[_0x1df4('0xc3')](crossurl);});$(function(){$(_0x1df4('0x71'))[_0x1df4('0xc4')]();});$(function(){$(_0x1df4('0x6e'))[_0x1df4('0xc4')]();});$(function(){$(_0x1df4('0x73'))[_0x1df4('0xc4')]();});$(function(){$(_0x1df4('0x6c'))[_0x1df4('0xc4')]();});function WhichButton(){alert(_0x1df4('0xc5'));}function dButton(){alert('This\x20is\x20DEMO\x20version,\x20can\x27t\x20query\x20previous\x20data');}