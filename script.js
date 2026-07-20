// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Music player: swap the button for the official full-song embed on click.
// Using an official streaming embed (not a raw MP3) means the whole track plays
// and there is zero copyright/DMCA risk to the site.
(function () {
  var btn = document.getElementById("play-btn");
  var embed = document.getElementById("music-embed");
  if (!btn || !embed) return;

  // SoundCloud URL for "Stay" by Nextime. Update the track URL below if needed.
  var TRACK_URL = "https://soundcloud.com/nextimemusic/stay";

  btn.addEventListener("click", function () {
    var iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "166";
    iframe.allow = "autoplay";
    iframe.title = "Stay by Nextime";
    iframe.setAttribute("scrolling", "no");
    iframe.src =
      "https://w.soundcloud.com/player/?url=" +
      encodeURIComponent(TRACK_URL) +
      "&color=%233b82f6&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false";

    embed.innerHTML = "";
    embed.appendChild(iframe);
  });
})();
