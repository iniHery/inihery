import Head from "next/head";

const defaultProps = {
  title: "",
  description: "",
  image: "",
};

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const SEO = (props: Props) => {
  const {
    title = defaultProps.title,
    description = defaultProps.description,
    image = defaultProps.image,
  } = props;

  return (
    <Head>
      {/* Primary Meta Tags  */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="crypto index" />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
  );
};

export default SEO;
