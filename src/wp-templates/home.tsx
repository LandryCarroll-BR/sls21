import { gql } from '@/__generated__';
import { GetHomePageQuery } from '@/__generated__/graphql';
import { FaustTemplate } from '@faustwp/core';
import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';
import { ArrowDownIcon, PhoneIcon } from '@heroicons/react/24/solid';

import {
  Button,
  ButtonLink,
  Container,
  FeaturedPostCard,
  Footer,
  Header,
  Modal,
  YoutubeEmbed,
} from '@/components';

import MailIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import backgroundImage from '@/images/background-features.jpg';
import Head from 'next/head';
import Image from 'next/image';

const Template: FaustTemplate<GetHomePageQuery> = (props) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  // Data from CMS
  const { nodes: menuItems } = props.data.primaryMenuItems;
  const { fullHead } = props.data.page.seo;

  const {
    heroSection,
    introSection,
    testimonialsSection,
    ctaSection,
    blogSection,
    contactSection,
  } = props.data.page.home;

  interface heroHeading extends React.HTMLAttributes<HTMLHeadingElement> {
    isAccented: boolean;
    text: string;
  }

  const HeroHeading: React.FC<heroHeading> = ({ isAccented, text }) => {
    if (isAccented) {
      return (
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-200"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">{text} </span>
        </span>
      );
    } else {
      return <span className="text-slate-900">{text} </span>;
    }
  };

  return (
    <>
      <Head>{}</Head>

      <Header menuItems={menuItems} />

      <main className="">
        {/* Hero Section */}
        <section className="relative border-b-2 border-blue-100">
          <Container className="relative z-30 mx-auto pb-36 pt-28">
            <h1 className="font-display mx-auto max-w-4xl justify-center text-center text-5xl font-medium tracking-tight sm:text-7xl">
              {heroSection.headingRepeater.map((content, index) => (
                <HeroHeading key={index} isAccented={content.isAccented} text={content.text} />
              ))}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg tracking-tight text-slate-900">
              {heroSection.body}
            </p>

            <div className="mt-10 flex justify-center space-x-6">
              <ButtonLink className="" href="mailto: john@sls21.com">
                Schedule a call
              </ButtonLink>
              <Button className="" onClick={() => setShowVideoModal(true)} variant="outline">
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
                >
                  <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                </svg>
                <span className="ml-3">Watch video</span>
              </Button>

              <Modal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)}>
                <YoutubeEmbed
                  embedId="P5VnQfX1-m8"
                  className="h-full w-full"
                  autoplay={true}
                  iframeClassName="w-full h-full rounded-xl"
                />
              </Modal>
            </div>
          </Container>

          {/* <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-r from-blue-600 from-[25%]  to-blue-500 p-0"></div> */}

          {/* <Image
            src={heroImage}
            layout="fill"
            className="absolute inset-0 z-10 object-cover object-[380px]"
            alt="hero-image"
          /> */}

          <ButtonLink
            variant="reset"
            href="#features"
            className="absolute bottom-0 right-1/2 z-40 -mb-7 -mr-6 h-12 w-12 animate-bounce rounded-full border-2 border-blue-100 bg-blue-600 !p-0"
          >
            <ArrowDownIcon className="h-8 w-8 fill-blue-100" />
          </ButtonLink>
        </section>

        {/* Primary Features */}
        <section
          id="features"
          aria-labelledby="features-title"
          className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
        >
          <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-[44%] -translate-y-[53%]">
            <Image
              src={backgroundImage}
              alt=""
              layout="fill"
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>

          <Container className="relative">
            <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
              <h2
                id="features-title"
                className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                {introSection.heading}
              </h2>
              <p className="mt-6 text-lg tracking-tight text-blue-100">{introSection.body}</p>
            </div>
            <Tab.Group
              as="div"
              className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
              vertical={tabOrientation === 'vertical'}
            >
              {({ selectedIndex }) => (
                <>
                  <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                    <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-x-0 lg:space-y-1 lg:whitespace-normal">
                      {introSection.featuredList.map((feature, featureIndex) => (
                        <div
                          key={feature.heading + featureIndex}
                          className={cn(
                            'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                            {
                              'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10':
                                selectedIndex === featureIndex,
                              'hover:bg-white/10 lg:hover:bg-white/5':
                                selectedIndex !== featureIndex,
                            }
                          )}
                        >
                          <h3>
                            <Tab
                              className={cn(
                                'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                                {
                                  'text-blue-600 lg:text-white': selectedIndex === featureIndex,
                                  'text-blue-100 hover:text-white lg:text-white':
                                    selectedIndex !== featureIndex,
                                }
                              )}
                            >
                              <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                              {feature.heading}
                            </Tab>
                          </h3>
                          <p
                            className={cn('mt-2 hidden text-sm lg:block', {
                              'text-white': selectedIndex === featureIndex,
                              'text-blue-100 group-hover:text-white':
                                selectedIndex !== featureIndex,
                            })}
                          >
                            {feature.body}
                          </p>
                        </div>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels className="lg:col-span-7">
                    {introSection.featuredList.map((feature) => (
                      <Tab.Panel key={feature.heading} unmount={false}>
                        <div className="relative sm:px-6 lg:hidden">
                          <div className="absolute -inset-x-4 -bottom-[4.25rem] -top-[6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                          <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                            {feature.heading}
                          </p>
                        </div>
                        <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                          <Image
                            src={feature.image.sourceUrl}
                            layout="fill"
                            alt={feature.heading}
                          />
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </>
              )}
            </Tab.Group>
          </Container>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          aria-labelledby="testimonials-title"
          className="bg-slate-50 py-20 sm:py-32"
        >
          <Container>
            <div className="mx-auto max-w-2xl md:text-center">
              <h2
                id="testimonials-title"
                className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
              >
                {testimonialsSection.heading}
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                {testimonialsSection.body}
              </p>
            </div>
            <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
              {testimonialsSection.testimonialList.map((testimonial, index) => (
                <li key={testimonial.name + index}>
                  <figure className="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <svg
                      aria-hidden="true"
                      width={105}
                      height={78}
                      className="absolute left-6 top-6 fill-slate-100"
                    >
                      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                    </svg>
                    <blockquote className="relative mb-6">
                      <p className="text-lg tracking-tight text-slate-900">{testimonial.quote}</p>
                    </blockquote>
                    <figcaption className="relative mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          {testimonial.name}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">{testimonial.location}</div>
                      </div>
                      {/* <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                        <Image />
                      </div> */}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Call To Action */}
        <section id="get-started-today" className="relative overflow-hidden bg-blue-600 py-32">
          <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-[50%] -translate-y-[50%]">
            <Image
              src={backgroundImage}
              alt=""
              layout="fill"
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                {ctaSection.heading}
              </h2>
              <p className="mt-4 text-lg tracking-tight text-white">{ctaSection.body}</p>
              <ButtonLink href="mailto: john@sls21.com" color="white" className="mr-6 mt-10">
                Contact Us
              </ButtonLink>
              {/* <ButtonLink href="/register" color="white" className="mt-10">
            Download Free E-Book
          </ButtonLink> */}
            </div>
          </Container>
        </section>

        {/* Featured Posts */}
        <section
          id={'blog'}
          className="relative bg-gray-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24"
        >
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Helpful Resources
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                For more information on our process, or how we can help you invest, check out some
                of the articles below.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {blogSection?.featuredPosts?.map((post) => (
                <FeaturedPostCard key={JSON.stringify(post)} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white" id="contact">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Contact Info
                </h2>
                <div className="mt-3">
                  <p className="text-lg text-gray-500">
                    We would love to hear from you. Call us or send us an email using the info
                    below!
                  </p>
                </div>
                <div className="mt-9">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>{contactSection.phoneNumber}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <MailIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>{contactSection.emailAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
  query GetHomePage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      seo {
        fullHead
      }
      home {
        heroSection {
          headingRepeater {
            text
            isAccented
          }
          body
          cta {
            ... on Page {
              title
              uri
            }
          }
        }
        introSection {
          heading
          body
          featuredList {
            heading
            body
            image {
              sourceUrl
            }
          }
        }
        testimonialsSection {
          heading
          body
          testimonialList {
            name
            quote
            location
          }
        }
        ctaSection {
          heading
          body
          link {
            ... on Page {
              uri
              title
            }
          }
        }
        blogSection {
          heading
          body
          featuredPosts {
            ... on Post {
              id
              title
              excerpt
              author {
                node {
                  name
                }
              }
              date
              uri
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
        contactSection {
          phoneNumber
          emailAddress
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
