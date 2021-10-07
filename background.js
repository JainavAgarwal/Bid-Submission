chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://rhbauction.procure247.com/eauction/bidder/bidding-hall/1515/1/4C2824FD5B1319796E4AC02688606B8E147AF88B";
    chrome.tabs.create({ url: newURL });
  });