export function extractYouTubeId(url) {
  // Regular expression to match YouTube video IDs
  const regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  // Check if the URL matches the regular expression
  const match = url.match(regExp);

  // If match is found, return the video ID, otherwise return undefined
  return match ? match[1] : undefined;
}
