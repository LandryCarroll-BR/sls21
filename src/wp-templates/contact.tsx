import { GetContactPageQuery } from '@/__generated__/graphql';
import { FaustTemplate } from '@faustwp/core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Logo,
  RadioGroup,
  RadioGroupItem,
  RawHtml,
  SvgSpinner,
  Textarea,
} from '@/components';

import backgroundImage from '@/images/background-features.jpg';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { gql } from '@/__generated__';
import { gql as apolloGql, useMutation } from '@apollo/client';
import { useState } from 'react';

const SUBMIT_FORM = apolloGql`
  mutation SubmitForm($databaseId: ID!, $fieldValues: [FormFieldValuesInput]!) {
    submitGfForm(input: { id: $databaseId, fieldValues: $fieldValues }) {
      confirmation {
        message
      }
      errors {
        id
        message
      }
    }
  }
`;

const FormSchema = z.object({
  firstName: z.string().max(30, 'Must be shorter than 30 characters'),
  lastName: z.string().max(30, 'Must be shorter than 30 characters'),
  age: z.string().max(3, 'Invalid age'),
  emailAddress: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  phoneNumber: z
    .string()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, 'Invalid number'),
  occupation: z.string().max(40, 'Must be shorter than 40 characterss'),
  retirementStatus: z.string().max(30, 'Must be shorter than 30 characters'),
  yearsToRetirement: z.string().max(3, 'Invalid age'),
  questions: z.string().max(120, 'Must be shorter than 120 characters'),
});

const Template: FaustTemplate<GetContactPageQuery> = (props) => {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const [mutateFunction, { data, loading, error }] = useMutation(SUBMIT_FORM);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onFormSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    try {
      let response = await mutateFunction({
        variables: {
          databaseId: 1,
          fieldValues: [
            {
              id: 1,
              nameValues: {
                first: data.firstName,
                last: data.lastName,
              },
            },
            {
              id: 3,
              value: data.age,
            },
            {
              id: 4,
              value: data.occupation,
            },
            {
              id: 5,
              emailValues: {
                value: data.emailAddress,
              },
            },
            {
              id: 6,
              value: data.phoneNumber,
            },
            {
              id: 10,
              value: data.retirementStatus,
            },
            {
              id: 11,
              value: data.questions,
            },
          ],
        },
      });

      const confirmationMessage = response?.data?.submitGfForm?.confirmation?.message;

      setConfirmationMessage(confirmationMessage);
    } catch (error) {
      console.error(error);
    }
  }

  // Listen for update to input state (used for conditional rendering)
  const retirementStatus = form.watch('retirementStatus');

  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  // Data from CMS
  const { fullHead } = props.data.page.seo;
  const { heroSection } = props.data.page.contact;

  return (
    <>
      <Head>
        <RawHtml html={fullHead} />
      </Head>

      <div className="relative flex min-h-screen justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 md:flex-none md:px-28 lg:justify-center">
          <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            <div className="flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-10 w-auto" />
              </Link>
            </div>
            <h1 className="mt-12 text-xl font-semibold text-gray-900">{heroSection.heading}</h1>

            <p className="mb-8 mt-2 text-sm text-gray-700">{heroSection.body}</p>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: confirmationMessage ? 1 : 0,
                height: confirmationMessage ? 'auto' : 0,
              }}
              className="prose"
              dangerouslySetInnerHTML={{ __html: confirmationMessage }}
            ></motion.div>

            <motion.div
              initial={{ opacity: 1, height: 'auto' }}
              animate={{
                opacity: confirmationMessage ? 0 : 1,
                height: confirmationMessage ? 0 : 'auto',
              }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onFormSubmit)} className="">
                  <div className="flex w-full flex-col items-start justify-center gap-6">
                    <div className="grid w-full grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem className="col-span-1 w-full">
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                          <FormItem className="col-span-3 w-full">
                            <FormLabel>Occupation</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="emailAddress"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="retirementStatus"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>What&apos;s your retirement status?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex space-x-2"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="planning-to-retire" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  I&apos;m preparing to retire
                                </FormLabel>
                              </FormItem>

                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="already-retired" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  I&apos;m already retired
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={retirementStatus}
                      variants={{
                        'planning-to-retire': {
                          opacity: 1,
                          height: 'auto',
                        },
                      }}
                    >
                      <FormField
                        control={form.control}
                        name="yearsToRetirement"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>How many years until you retire?</FormLabel>
                            <FormControl>
                              <div className="grid grid-cols-4 gap-3">
                                <Input
                                  className="col-span-1"
                                  type="number"
                                  placeholder=""
                                  {...field}
                                />
                                <div className="col-span-3"></div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <FormField
                      control={form.control}
                      name="questions"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Questions For Us?</FormLabel>
                          <FormControl>
                            <Textarea placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="ml-auto">
                      Submit
                      <motion.div
                        className="-mr-3 ml-3"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{
                          opacity: loading ? 1 : 0,
                          width: loading ? 'auto' : 0,
                        }}
                      >
                        <SvgSpinner />
                      </motion.div>
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </main>
        </div>

        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt=""
            unoptimized
          />
        </div>
      </div>
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
  query GetContactPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      contact {
        heroSection {
          heading
          body
        }
      }
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
