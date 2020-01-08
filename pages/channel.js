import Link from 'next/link';

import Banner from '../components/Banner';

const Channel = (props) => {
  const { channel, audioClips, childChannels } = props;

  return (
    <>
      <Banner imageUrl={channel.urls.banner_image.original} />

      {childChannels.length > 0 && (
        <div className="series_container">
          <h2 className="series_title">Series</h2>
          <div className="series">
            {childChannels.map((childChannel) => {
              const {
                id,
                title,
                urls: {
                  logo_image: { original },
                },
              } = childChannel;
              return (
                <div className="serie" key={id}>
                  <img src={original} alt="Serie podcast cover" />
                  <h2 className="serie_title">{title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {audioClips.length > 0 && (
        <div className="episodes__container">
          <h2>Episodes</h2>
          <div className="episodes">
            {audioClips.map((audioClip) => {
              const { id, title } = audioClip;
              return (
                <Link href={`/podcast?id=${id}`} key={id}>
                  <a>
                    <div className="episode">
                      <h2 className="episode_title">{title}</h2>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <style jsx>{`
        :global(*) {
          margin: 0;
          padding: 0;
        }

        :global(html) {
          font-size: 10px;
        }

        :global(body) {
          font-family: Arial;
        }

        :global(a) {
          text-decoration: none;
          color: #000;
        }

        .banner {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 0.5em;
        }

        .banner__title {
          align-self: flex-end;
          opacity: 0.6;
        }

        .banner img {
          width: 160px;
        }

        .series_title {
          padding-left: 15px;
          font-size: 1.6rem;
        }

        .series {
          display: grid;
          grid-gap: 15px;
          padding: 1.5rem;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }

        .serie,
        .episode {
          display: block;
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
          margin-bottom: 0.5em;
        }

        .serie img,
        .episode img {
          width: 100%;
        }

        .serie_title,
        .episode_title {
          height: 48px;
          margin-top: 0.5rem;
          padding: 0 1rem;
        }

        .episodes h3 {
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

Channel.getInitialProps = async ({ query }) => {
  // get the channel wiht the channeld
  const { id } = query; // channelId

  const [
    channelResponse,
    audiosResponse,
    childChannelsResponse,
  ] = await Promise.all([
    fetch(`https://api.audioboom.com/channels/${id}`),
    fetch(`https://api.audioboom.com/channels/${id}/audio_clips`),
    fetch(`https://api.audioboom.com/channels/${id}/child_channels`),
  ]);

  const {
    body: { channel },
  } = await channelResponse.json();

  // get the channel's audio_clips
  const {
    body: { audio_clips },
  } = await audiosResponse.json();

  // get the channels childs
  const {
    body: { channels },
  } = await childChannelsResponse.json();

  return {
    channel,
    audioClips: audio_clips,
    childChannels: channels,
  };
};

export default Channel;
