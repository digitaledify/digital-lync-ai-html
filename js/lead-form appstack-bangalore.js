function getLeadForm(techStack) {
  return ` 
   
<form id='webform217508000035000202' action='https://crm.zoho.in/crm/WebToLeadForm' name=WebToLeads217508000035000202 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory217508000035000202()' accept-charset='UTF-8'>
 <input type='text' style='display:none;' name='xnQsjsdp' value='c32ebf8b5f86e6285d9c856d93e0eab7bdc4854d36dbbfef9c411601842390e6'></input> 
 <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
 <input type='text' style='display:none;' name='xmIwtLD' value='b9a497d02d7f1a53f80e31fb4d46886d404c81af00c84a6eed007ce6b62783ee61571cdccb868bc2b8491af4ca6d2005'></input> 
 <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
 <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;www.digital-lync.com&#x2f;thank-you.html' > </input>
	 <!-- Do not remove this code. -->
	 <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'></input>
	 <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'></input>
	 <!-- Do not remove this code. -->
 
<div class='zcwf_title' style='max-width: 600px;color: black; font-family:Arial;'>APPSTACK-BANGALORE</div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Last_Name'>Last Name<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row wfrm_fld_dpNn'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='LEADCF29'>CC</label></div><div class='zcwf_col_fld'><input type='text' id='LEADCF29' name='LEADCF29' maxlength='255' value='91'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Phone'>Phone<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Phone' name='Phone' maxlength='30'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Email'>Email<span style='color:red;'>*</span></label></div><div class='zcwf_col_fld'><input type='text' ftype='email' autocomplete='false' id='Email' name='Email' crmlabel='' maxlength='100'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab'></div><div class='zcwf_col_fld'><input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit' title='Submit'><input type='reset' class='zcwf_button' name='reset' value='Reset' title='Reset'></div></div>
	<script>
	function validateEmail217508000035000202()
	{
		var form = document.forms['WebToLeads217508000035000202'];
		var emailFld = form.querySelectorAll('[ftype=email]');
		var i;
		for (i = 0; i < emailFld.length; i++)
		{
			var emailVal = emailFld[i].value;
			if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
			{
				var atpos=emailVal.indexOf('@');
				var dotpos=emailVal.lastIndexOf('.');
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
				{
					alert('Please enter a valid email address. ');
					emailFld[i].focus();
					return false;
				}
			}
		}
		return true;
	}

	function checkMandatory217508000035000202() {
		var mndFileds = new Array('Last Name','Email','Phone');
		var fldLangVal = new Array('Last\x20Name','Email','Phone');
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads217508000035000202'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		trackVisitor217508000035000202();
		if(!validateEmail217508000035000202()){return false;}
		
	var urlparams = new URLSearchParams( window.location.search);
	if(urlparams.has('service') && (urlparams.get('service')==='smarturl')){
		var webform = document.getElementById('webform217508000035000202');
		 var service =  urlparams.get('service'); 
		var smarturlfield = document.createElement('input');
		smarturlfield.setAttribute('type','hidden');
		smarturlfield.setAttribute('value',service);
		smarturlfield.setAttribute('name','service');
		webform.appendChild(smarturlfield); 
	}

		document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
	}

function tooltipShow217508000035000202(el){
	var tooltip = el.nextElementSibling;
	var tooltipDisplay = tooltip.style.display;
	if(tooltipDisplay == 'none'){
		var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
		for(i=0; i<allTooltip.length; i++){
			allTooltip[i].style.display='none';
		}
		tooltip.style.display = 'block';
	}else{
		tooltip.style.display='none';
	}
}
</script><script type='text/javascript' id='VisitorTracking'>var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq8d18959c180f3384841af21d3ba1667e37422b2ccc93650bfa7bdda1aaaaf250', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor217508000035000202(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads217508000035000202']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads217508000035000202']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads217508000035000202']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}</script>
	<!-- Do not remove this --- Analytics Tracking code starts --><script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=87b6e88898c32821c6bd82b854f8b169bb8f5c86480028383a4602aae95c8ebb273728005be189f3308a30058468064bgid8b2b191725fdc879efdf78ec71f1ae268a03243c01ecbeea60a6b0fc33e59bdcgid0ff1d963e383c0c032ef98c8966108fcebab27bdae358781081c30af6aab44aegid55efa3f521a38b85833b39bf3da6a79cba62bb2348051d4405f4a044d507abc8&tw=b9b9cec3dfe0540b12bc04963fe7b4b97f53bcb28de424089a88f3a5ef3e7525'></script><!-- Do not remove this --- Analytics Tracking code ends. --></form>
</div>
`;
}

function injectLeadForm() {
  // Element with data-leads-form attribute will be replaced with the lead form
  const leadForm = document.querySelector("div[data-leadform]");
  const techStack = leadForm.getAttribute("data-leadform");
  leadForm.innerHTML = getLeadForm(techStack);
}

document.addEventListener("DOMContentLoaded", injectLeadForm);
