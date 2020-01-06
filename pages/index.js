import fetch from 'isomorphic-unfetch';

const Home = (props) => {
  const { channels } = props;
  return (
    <>
      <header>Podcast</header>
      <div className="channels">
        {channels.map((channel) => {
          const {
            id,
            title,
            urls: {
              logo_image: { original },
            },
          } = channel;
          return (
            <div className="channel" key={id}>
              <img src={original} alt="Podcast cover" />
              <h2 className="channel_title">{title}</h2>
            </div>
          );
        })}
      </div>
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

        header {
          padding: 1.5rem;
          background: #8756ca;
          color: #fff;
          font-size: 1.6rem;
        }

        .channels {
          display: grid;
          grid-gap: 1.5rem;
          padding: 1.5rem;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }

        .channel {
          display: block;
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
          margin-bottom: 0.5em;
        }

        .channel img {
          width: 100%;
        }

        .channel_title {
          margin-top: 0.5rem;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch(
    'https://api.audioboom.com/channels/recommended?api_version=2'
  );
  const data = await response.json();

  return { channels: data.body };
};

export default Home;
