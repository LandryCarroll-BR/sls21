import { gql } from '@/__generated__';
import { GetContactPageQuery } from '@/__generated__/graphql';
import { FaustTemplate } from '@faustwp/core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  Container,
  Footer,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Header,
  Input,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from '@/components';

import Head from 'next/head';
import parse from 'html-react-parser';

const FormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  emailAddress: z.string(),
  phoneNumber: z.string(),
  occupation: z.string(),
  retirementStatus: z.string(),
  yearsToRetirement: z.number(),
  questions: z.string(),
});

const Template: FaustTemplate<GetContactPageQuery> = (props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  // Set data variables
  const { fullHead } = props.data.page.seo;
  const { nodes: menuItems } = props.data.primaryMenuItems;

  return (
    <>
      <Head>{parse(fullHead)}</Head>

      <Header menuItems={menuItems} />

      <main className="my-36">
        <Container>
          <div className="flex items-center justify-center"></div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-md">
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
                      <FormLabel>What's your retirement status?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="planning-to-retire" />
                            </FormControl>
                            <FormLabel className="font-normal">I'm preparing to retire</FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="already-retired" />
                            </FormControl>
                            <FormLabel className="font-normal">I'm already retired</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yearsToRetirement"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>How many years from now?</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                </Button>
              </div>
            </form>
          </Form>
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
  query GetContactPage($databaseId: ID!, $asPreview: Boolean = false) {
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
