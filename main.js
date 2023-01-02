let tweetInput = document.querySelector(".tweet-input");
let tweetButton = document.querySelector(".seconed-tweet-btn");
let tweetsFeed = document.querySelector(".tweets-feed");
let tweets = document.querySelector(".tweets");
let tweetsContentArray = [];

tweetButton.addEventListener("click", function () {
  const inputValue = tweetInput.value;
  if (inputValue === "") {
    tweetInput.focus();
    return;
  } else {
    createTweet(inputValue, "Eman Alabsi");
  }
});

function createTweetElement(val, author) {
  //tweet time line container
  let tweetTimeline = document.createElement("div");
  tweetTimeline.className = "tweet-timeline";
  // tweets.prepend(tweetTimeline);

  //img of the profile
  let profileImg = document.createElement("img");
  profileImg.src = "/imgs/SelfPortrait3.jpeg";
  profileImg.alt = "profile-img";
  profileImg.className = "profile-img";
  tweetTimeline.append(profileImg);

  let tweeterDetails = document.createElement("div");
  tweeterDetails.className = "tweeter-details";

  let tweeterInfo = document.createElement("div");
  tweeterInfo.className = "tweeter-info";

  let tweeterUsername = document.createElement("a");
  tweeterUsername.className = "tweeter-username";

  let tweetAuthor = author;
  tweeterUsername.append(tweetAuthor);

  let tweeterNickname = document.createElement("span");
  tweeterNickname.className = "tweeter-nickname";

  let nicknameText = document.createTextNode("@emanalabsi . 1h");
  tweeterNickname.append(nicknameText);
  tweeterUsername.append(tweeterNickname);
  tweeterInfo.append(tweeterUsername);
  let dotsIcon = document.createElement("i");
  dotsIcon.className = "material-icons-outlined";
  let dotsIconText = document.createTextNode("more_horiz");
  dotsIcon.append(dotsIconText);
  tweeterInfo.append(dotsIcon);
  tweeterDetails.append(tweeterInfo);
  let tweetText = document.createElement("div");
  tweetText.className = "tweet-text";
  let tweetContent = document.createElement("p");
  tweetContent.className = "tweet-content";
  tweetContent.append(val);
  tweetText.append(tweetContent);
  tweeterDetails.append(tweetText);

  //tweet icons
  let tweetIcons = document.createElement("div");
  tweetIcons.className = "tweet-icons";
  let bubbleAnchor = document.createElement("button");
  let bubbleIcon = document.createElement("i");
  bubbleIcon.className = "material-icons-outlined";

  //1st icon
  let bubbleIconText = document.createTextNode("chat_bubble_outline");
  bubbleIcon.append(bubbleIconText);
  bubbleAnchor.append(bubbleIcon);
  tweetIcons.append(bubbleAnchor);

  //2nd icon
  let retweetAnchor = document.createElement("button");
  retweetAnchor.className = "retweet-btn";
  let retweetIcon = document.createElement("i");
  retweetIcon.className = "material-icons-outlined";
  let retweetIconText = document.createTextNode("restart_alt");
  retweetIcon.append(retweetIconText);
  retweetAnchor.append(retweetIcon);
  tweetIcons.append(retweetAnchor);

  //3rd icon
  let favAnchor = document.createElement("button");
  favAnchor.className = "like-btn";
  let favIcon = document.createElement("i");
  favIcon.className = "material-icons-outlined";
  let favIconText = document.createTextNode("favorite_border");
  favIcon.append(favIconText);
  favAnchor.append(favIcon);
  tweetIcons.append(favAnchor);

  //4th icon
  let uploadAnchor = document.createElement("button");

  let uploadIcon = document.createElement("i");

  uploadIcon.className = "material-icons-outlined";

  let uploadIconText = document.createTextNode("upload");

  uploadIcon.append(uploadIconText);
  uploadAnchor.append(uploadIcon);
  tweetIcons.append(uploadAnchor);
  tweeterDetails.append(tweetIcons);
  tweetTimeline.append(tweeterDetails);

  return tweetTimeline;
}

function createTweet(val, author) {
  const tweetElement = createTweetElement(val, author);

  console.log(tweetElement);

  // let tweetObj = { author: val };
  // tweetsContentArray.push(tweetObj);
  // localStorage.setItem(author, val);
  // console.log(tweetObj);
  // console.log(tweetsContentArray);
}

let retweetButtons = document.querySelectorAll(".retweet-btn");
for (let i = 0; i < retweetButtons.length; i++) {
  retweetButtons[i].addEventListener("click", function () {
    retweetButtons[i].classList.toggle("retweet-effect");
    let elemnts = document.getElementsByClassName("tweet-content");
    createTweet(elemnts[i].innerHTML, "Eman Alabsi");
  });
}

let likeButtons = document.querySelectorAll(".like-btn");
for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function () {
    likeButtons[i].classList.toggle("like-effect");
  });
}
