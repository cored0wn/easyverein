[<img src="https://img.shields.io/npm/v/easyverein">](https://www.npmjs.com/package/easyverein)

# Node API Library for easyVerein®  
 <img src="https://easyverein.com/static/logo.png" alt="easyVerein® Logo" height="100">

This is a typed Node.js API Library for the **easyVerein® web service**.  
Since the API is still in [early development](https://easyverein.com/api/v1/), only a few methods are implemented.  

This library is **inofficial** and therefore is **not developed or supported by** [easyVerein®](https://easyverein.com/) and [SD Software-Design GmbH](https://software-design.de/).

## Installation
```bash
yarn add easyverein
```
or
```bash
npm install easyverein
```

## Getting started

### Set the API token globally
```typescript
  import { setApiToken } from 'easyverein';

  setApiToken('token');
```
### Get the organization

```typescript
  import { getOrganization } from 'easyverein';

  const org = await getOrganization();

  console.log(`
    Our Organization is ${org.name}. Let's use the primary color ${org.primaryColor}
    and secondary color ${org.secondaryColor} to theme some things.`
  );
```
### Members
You can specify the parameter `query: string[]` to restrict the fields returned by the API.
Without that parameter, a lot of fields will be populated by default. (~ 23.5 KB per returned member item)  
You can check the type `Member` to see which fields can be populated.

```typescript
  import { getMembers, getMember } from 'easyverein';

  // Get all members with a small set of attributes
  const members = await getMembers(
    ['id', 'contactDetails{name,dateOfBirth}', 'membershipNumber', 'memberGroups', 'joinDate']
  );

  members.forEach(m => console.log(m.contactDetails.name))


  // Get a specific member with two attributes
  const member = await getMember('123', ['contactDetails{name}', 'membershipNumber']);

  console.log(`Hello ${member.contactDetails.name}, your membership number is ${member.membershipNumber}.`);
```

### Contact Details
Contact details can be referenced to a member id, but don't have to.  
If you need all kind of contacts (e.g. Companies and Supplier), you can get them with this method.  
If you only want to get the details of your real members, it's better to use the `getMembers` method and include the contact details in the query.  
  
You can specify the parameter `query: string[]` to restrict the fields returned by the API.
Without that parameter, a lot of fields will be populated by default. (~ 12 KB per returned contact item)  
You can check the type `ContactDetail` to see which fields can be populated.

```typescript
  import { getContactDetails } from 'easyverein';

  // Get all members with a small set of attributes
  const contacts = await client.getContactDetails(
    ['salutation', 'firstName', 'familyName', 'mobilePhone', 'referencedMemberPK']
  );

  // Get a specific contact with two attributes
  const contact = await client.getContactDetails('123', ['salutation', 'familyName']);
  console.log(`Hello ${contact.salutation} ${contact.familyName}!`);
```

## Developing and debugging this libary
To start working, run the `watch:build` task using [`npm`](https://docs.npmjs.com/getting-started/what-is-npm) or [`yarn`](https://yarnpkg.com/).

```sh
npm run watch:build
```

In another terminal tab/window, run the `watch:test` task while passing the api token as environment variable:

```sh
EASYVEREIN_TOKEN=123456acd43534dfe npm run watch:test
```

These watch tasks make development much faster and more interactive. 

## Author & License
MIT License. Built with ❤️ by Frédéric Bolvin, [f-bit software](https://f-bit.software).  
