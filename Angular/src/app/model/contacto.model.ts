/* export interface ContactoIf {
    code: "int",
    status: "string",
    copyright: "string",
    attributionText: "string",
    attributionHTML: "string",
    data: {
      offset: "int",
      limit: "int",
      total: "int",
      count: "int",
      results: [
        {
          id: "int",
          name: "string",
          description: "string",
          modified: "Date",
          resourceURI: "string",
          urls: [
            {
              type: "string",
              url: "string"
            }
          ],
          thumbnail: {
            path: "string",
            extension: "string"
          },
          comics: {
            available: "int",
            returned: "int",
            collectionURI: "string",
            items: [
              {
                resourceURI: "string",
                name: "string"
              }
            ]
          },
          stories: {
            available: "int",
            returned: "int",
            collectionURI: "string",
            items: [
              {
                resourceURI: "string",
                name: "string",
                type: "string"
              }
            ]
          },
          events: {
            available: "int",
            returned: "int",
            collectionURI: "string",
            items: [
              {
                resourceURI: "string",
                name: "string"
              }
            ]
          },
          series: {
            available: "int",
            returned: "int",
            collectionURI: "string",
            items: [
              {
                resourceURI: "string",
                name: "string"
              }
            ]
          }
        }
      ]
    },
    etag: "string"
  } */

export interface ContactoIf {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: string,
        city: string,
        state: string,
        postcode: string | number,
        coordinates: {
            latitude: string,
            longitude: string
        },
        timezone: {
            offset: string,
            description: string
        }
    },
    email: string,
    login: {
        uuid: string,
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string
    },
    dob: {
        date: string,
        age: number
    },
    registered: {
        date: string,
        age: number
    },
    phone: string,
    cell: string,
    id: {
        name: string,
        value: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    nat: string
}