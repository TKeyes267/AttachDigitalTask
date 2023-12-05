import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Video from '../components/Video';
import Reports from '../components/Reports';
import ContactForm from '../components/ContactForm';

const IndexPage = () => {
  const {
    datoCmsHome: { seoMetaTags, title, subtitle, bannerparagraph },
  } = useStaticQuery(graphql`
    query IndexPageQuery {
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        title
        subtitle
        bannerparagraph
      }
    }
  `);

  return (
    <Layout seo={seoMetaTags}>
      <main>
        <Banner heading={title} subtitle={subtitle} body={bannerparagraph} />
        <Video />
        <Reports />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default IndexPage;
