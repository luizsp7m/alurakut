const { SiteClient } = require('datocms-client');

export default async function teste(request, response) {
  if (request.method === 'POST') {
    const TOKEN = process.env.NEXT_PUBLIC_FULL_ACCESS;
    const client = new SiteClient(TOKEN);

    const record = await client.items.create({
      itemType: "967764",
      ...request.body,
    });

    response.json({
      community: record,
    });

    return;
  }
}