const Podcast = (props) => {
  const {
    episode: { title, duration, urls, channel },
  } = props;
  return (
    <div className="background">
      {/**background */}
      <div className="cover">
        {/**cover */}
        <img src={urls.image} alt="Podcast episode cover" />
        <p>{title}</p>
      </div>
      <div>
        {/**audio */}
        <audio controls src={urls.high_mp3}></audio>
      </div>

      <style jsx>{`
        :global(*) {
          margin: 0;
          padding: 0;
        }

        :global(body) {
          font-family: Arial;
        }

        .background {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.1)
          );
        }

        .cover {
          width: 160px;
        }

        .cover img {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

Podcast.getInitialProps = async ({ query }) => {
  const { id } = query; // podcast episode id
  const response = await fetch(
    `https://api.audioboom.com/audio_clips/${id}.mp3`
  );
  const { body } = await response.json();
  return { episode: body.audio_clip };
};

export default Podcast;
