function getLeadForm(techStack) {
  return `<div id="get_trained" class="modal fade" role="dialog">
  <div class="modal-dialog">
	  <div class="modal-content">
		  <div class="modal-header">
			  <button type="button" class="close" data-dismiss="modal">x</button>
			  <h4 class="modal-title">Get Skilled</h4>
		  </div>
		  <div class="modal-body"> 
  <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
   <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
   <form action='https://crm.zoho.in/crm/WebToLeadForm' name=WebToLeads217508000007176196 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory217508000007176196()' accept-charset='UTF-8'>
  <input type='text' class="hide" name='xnQsjsdp' value='48a1f9c03dd46a45124498c2a83d038954bf37df69bacdc10cdbff64804d37f3'></input> 
  <input type='hidden' name='zc_gad' id='zc_gad' value=''></input> 
  <input type='text' class="hide" name='xmIwtLD' value='c840e33c1d03ffeb06c5301e6bc51b5e233e8ec215a320e3df259e246d3c77d9'></input> 
  <input type='text' class="hide" name='actionType' value='TGVhZHM='></input>
  <input type='text' class="hide" name='returnURL' value='https&#x3a;&#x2f;&#x2f;www.digital-lync.com&#x2f;thank-you.html' > </input>  
  <div class='zcwf_row'><div class='zcwf_col_lab'><label for='Last_Name'>Name<span class="red">*</span></label></div><div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80'></input><div class='zcwf_col_help'></div></div></div>
  <div class='zcwf_row'><div class='zcwf_col_lab'></div><div class='zcwf_col_fld'>
  
  <div class='zcwf_col_help'></div></div></div>
  <div class='zcwf_row'><div class='zcwf_col_lab'><label for='Phone'>Phone<span class="red">*</span></label></div><div class='zcwf_col_fld'>
  <div class="phnum">
  <input type='text' class="w70px" value="+91" autocomplete="off" id='LEADCF29' name='LEADCF29' maxlength='255'></input>
  <input type='text' id='Phone' name='Phone' maxlength='30'></input>
  </div>
  
  
  <div class='zcwf_col_help'></div></div></div>
  <div class='zcwf_row'><div class='zcwf_col_lab'><label for='Email'>Email<span class="red">*</span></label></div><div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></input><div class='zcwf_col_help'></div></div></div>
  <div class='zcwf_row'><div class='zcwf_col_lab'></div><div class='zcwf_col_fld'><select hidden class='zcwf_col_fld_slt' id='LEADCF8' name='LEADCF8'  >
	   <option ${
	   techStack === "-None-" ? "selected" : ""
	 } value='-None-'>-None-</option>
	   <option ${
	   techStack === "CloudOps" ? "selected" : ""
	 } value='CloudOps'>CloudOps</option>
	   <option ${
	   techStack === "Salesforce" ? "selected" : ""
	 } value='Salesforce'>Salesforce</option>
	   <option ${
	   techStack === "FullStack" ? "selected" : ""
	 } value='FullStack'>FullStack</option>
	   <option ${
	   techStack === "DataStack" ? "selected" : ""
	 } value='DataStack'>DataStack</option>
	   <option ${
	   techStack === "Business" ? "selected" : ""
	 } value='Business&#x20;stack'>Business stack</option>
	   <option ${
	   techStack === "ServiceNow" ? "selected" : ""
	 } value='ServiceNow'>ServiceNow</option>
	   <option ${
	   techStack === "Career Counselling" ? "selected" : ""
	 } value='Career&#x20;Counselling'>Career Counselling</option>
   </select>
   <div className="d-flex">
   <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit' title='Submit'>
   </div>
   <script>
   function validateEmail217508000007176196()
   {
	   var form = document.forms['WebToLeads217508000007176196'];
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
  
		  function checkMandatory217508000007176196() {
	   var mndFileds = new Array('Last Name','Email','Phone');
	   var fldLangVal = new Array('Name','Email','Phone');
	   for(i=0;i<mndFileds.length;i++) {
		   var fieldObj=document.forms['WebToLeads217508000007176196'][mndFileds[i]];
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
	   if(!validateEmail217508000007176196()){return false;}
	   document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
   }
  
  function tooltipShow217508000007176196(el){
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
  </script>
   <!-- Do not remove this --- Analytics Tracking code starts --><script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=c840e33c1d03ffeb06c5301e6bc51b5e233e8ec215a320e3df259e246d3c77d9gid48a1f9c03dd46a45124498c2a83d038954bf37df69bacdc10cdbff64804d37f3gid534cb20477b1d28b5f45f7cc241888c5gid4ee3a7e9ace6ab1be7c541b329164307&tw=096a715cbfc30dc79d6dc215bf71c5b4284d938378e51186a6daa9337f7519a8'></script><!-- Do not remove this --- Analytics Tracking code ends. --></form>
  
  </div>
		  </div>
	  </div>
  </div>
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
