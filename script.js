// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Music player: swap the button for the official full-song embed on click.
// Using an official streaming embed (not a raw MP3) means the whole track plays
// and there is zero copyright/DMCA risk to the site.
(function () {
  var btn = document.getElementById("play-btn");
  var embed = document.getElementById("music-embed");
  if (!btn || !embed) return;

  // YouTube video ID for "Stay" by Nextime. Update the ID below if needed.
  var VIDEO_ID = "Jyj51_p-jbs";

  btn.addEventListener("click", function () {
    var iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "220";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.title = "Stay by Nextime";
    iframe.setAttribute("frameborder", "0");
    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      VIDEO_ID +
      "?autoplay=1&rel=0&modestbranding=1";

    embed.innerHTML = "";
    embed.appendChild(iframe);
  });
})();
