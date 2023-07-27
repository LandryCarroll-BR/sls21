import { gql } from '@/__generated__';
import { GetPostQuery } from '@/__generated__/graphql';
import { FaustTemplate } from '@faustwp/core';
import { Header, Footer, RawHtml, SiteHead } from '@/components';

const Template: FaustTemplate<GetPostQuery> = (props) => {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  // Data from CMS
  const { fullHead } = props.data.post.seo;
  const { post, primaryMenuItems } = props.data;
  const { nodes: menuItems } = primaryMenuItems;
  const { content, title } = post;

  return (
    <>
      <SiteHead>
        <RawHtml html={fullHead} />
      </SiteHead>

      <Header menuItems={menuItems} />

      <main className="prose mx-auto my-36">
        <h1 className="text-center text-blue-600">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <Footer />
    </>
  );
};

Template.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Template.query = gql(`
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      seo {
        fullHead
      }
      author {
        node {
          name
        }
      }
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        menu {
          node {
            name
          }
        }
      }
    }
  }
`);

export default Template;
