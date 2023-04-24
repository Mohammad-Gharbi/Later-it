browser.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  if (changeInfo.status === "loading") {
    const articleUrl = changeInfo.url
    console.log(articleUrl)
    browser.browserAction.onClicked.addListener(() => {
      postData(articleUrl)
    })
  }
})

async function postData(articleUrl) {
  const rawResponse = await fetch("http://localhost:3000/api/addArticle", {
    method: "POST",
    body: JSON.stringify({ articleUrl }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return rawResponse
}
