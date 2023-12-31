import { gql } from '@/__generated__';
import { GetPageQuery } from '@/__generated__/graphql';
import { FaustTemplate } from '@faustwp/core';
import { Container, Footer, Header, RawHtml, SiteHead } from '@/components';

const Template: FaustTemplate<GetPageQuery> = (props) => {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  // Set data variables
  const { fullHead } = props.data.page.seo;
  const { nodes: menuItems } = props.data.primaryMenuItems;
  const { content } = props.data.page;

  return (
    <>
      <SiteHead>
        <RawHtml html={fullHead} />
      </SiteHead>

      <Header menuItems={menuItems} />

      <main className="px-16">
        <Container>
          <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
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
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      seo {
        fullHead
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
