module.exports = {
  'Opening Electron Application' :function(browser){
	browser
		.url()
    .window_handles(function(result){
      var handle=result.value[2];
      browser.switchWindow(handle);
    })
    //.waitForElementPresent('.btn.btn-primary.btn-large.f4.btn-block',5000)
   // 
    .useXpath()
    .setValue("//*[@id='user[login]']",'rakesh')
    .useCss()
    .click('.btn.btn-primary.btn-large.f4.btn-block')
   }
};

