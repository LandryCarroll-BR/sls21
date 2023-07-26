/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  ": types.HeaderGeneralSettingsFragmentFragmentDoc,
    "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  ": types.PrimaryMenuItemFragmentFragmentDoc,
    "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetExamplePageDocument,
    "\n  query GetArchive($uri: String!, $databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n    }\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetArchiveDocument,
    "\n  query GetContactPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      contact {\n        heroSection {\n          heading\n          body\n        }\n      }\n      seo {\n        fullHead\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetContactPageDocument,
    "\n  query GetHomePage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n      home {\n        heroSection {\n          headingRepeater {\n            text\n            isAccented\n          }\n          body\n          cta {\n            ... on Page {\n              title\n              uri\n            }\n          }\n        }\n        introSection {\n          heading\n          body\n          featuredList {\n            heading\n            body\n            image {\n              sourceUrl\n            }\n          }\n        }\n        testimonialsSection {\n          heading\n          body\n          testimonialList {\n            name\n            quote\n            location\n          }\n        }\n        ctaSection {\n          heading\n          body\n          link {\n            ... on Page {\n              uri\n              title\n            }\n          }\n        }\n        blogSection {\n          heading\n          body\n          featuredPosts {\n            ... on Post {\n              id\n              title\n              excerpt\n              author {\n                node {\n                  name\n                }\n              }\n              date\n              uri\n              featuredImage {\n                node {\n                  sourceUrl\n                }\n              }\n            }\n          }\n        }\n        contactSection {\n          phoneNumber\n          emailAddress\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageDocument,
    "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetPageDocument,
    "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      seo {\n        fullHead\n      }\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetPostDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  "): (typeof documents)["\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetArchive($uri: String!, $databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n    }\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArchive($uri: String!, $databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n    }\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContactPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      contact {\n        heroSection {\n          heading\n          body\n        }\n      }\n      seo {\n        fullHead\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContactPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      contact {\n        heroSection {\n          heading\n          body\n        }\n      }\n      seo {\n        fullHead\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetHomePage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n      home {\n        heroSection {\n          headingRepeater {\n            text\n            isAccented\n          }\n          body\n          cta {\n            ... on Page {\n              title\n              uri\n            }\n          }\n        }\n        introSection {\n          heading\n          body\n          featuredList {\n            heading\n            body\n            image {\n              sourceUrl\n            }\n          }\n        }\n        testimonialsSection {\n          heading\n          body\n          testimonialList {\n            name\n            quote\n            location\n          }\n        }\n        ctaSection {\n          heading\n          body\n          link {\n            ... on Page {\n              uri\n              title\n            }\n          }\n        }\n        blogSection {\n          heading\n          body\n          featuredPosts {\n            ... on Post {\n              id\n              title\n              excerpt\n              author {\n                node {\n                  name\n                }\n              }\n              date\n              uri\n              featuredImage {\n                node {\n                  sourceUrl\n                }\n              }\n            }\n          }\n        }\n        contactSection {\n          phoneNumber\n          emailAddress\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetHomePage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n      home {\n        heroSection {\n          headingRepeater {\n            text\n            isAccented\n          }\n          body\n          cta {\n            ... on Page {\n              title\n              uri\n            }\n          }\n        }\n        introSection {\n          heading\n          body\n          featuredList {\n            heading\n            body\n            image {\n              sourceUrl\n            }\n          }\n        }\n        testimonialsSection {\n          heading\n          body\n          testimonialList {\n            name\n            quote\n            location\n          }\n        }\n        ctaSection {\n          heading\n          body\n          link {\n            ... on Page {\n              uri\n              title\n            }\n          }\n        }\n        blogSection {\n          heading\n          body\n          featuredPosts {\n            ... on Post {\n              id\n              title\n              excerpt\n              author {\n                node {\n                  name\n                }\n              }\n              date\n              uri\n              featuredImage {\n                node {\n                  sourceUrl\n                }\n              }\n            }\n          }\n        }\n        contactSection {\n          phoneNumber\n          emailAddress\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      seo {\n        fullHead\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      seo {\n        fullHead\n      }\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      seo {\n        fullHead\n      }\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;