import { stringify } from "query-string";
import { fetchUtils } from "ra-core";

/**

 * getList          => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * getOne           => GET http://my.api.url/posts/123
 * getManyReference => GET http://my.api.url/posts?author_id=345
 * getMany          => GET http://my.api.url/posts/123, GET http://my.api.url/posts/456, GET http://my.api.url/posts/789
 * create           => POST http://my.api.url/posts/123
 * update           => PUT http://my.api.url/posts/123
 * updateMany       => PUT http://my.api.url/posts/123, PUT http://my.api.url/posts/456, PUT http://my.api.url/posts/789
 * delete           => DELETE http://my.api.url/posts/123
 */
export default (apiUrl, httpClient = fetchUtils.fetchJson) => ({
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => {
      return {
        data: json.data.map((e, i) => {
          return {
            id: e._id,
            ...e,
          };
        }),
        total: json.total,
      };
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: {
        id: json.data._id,
        ...json.data,
      },
    })),

  getMany: (resource, params) => {
    const query = {
      id: params.ids.map((e, i) => (typeof e === "object" ? e._id : e)),
    };
    const url = `${apiUrl}/${resource}?${stringify(query, {
      arrayFormat: "comma",
    })}`;
    return httpClient(url).then(({ json }) => ({ data: json.data }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      [params.target]: params.id,
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => {
      return {
        data: json.data.map((e, i) => {
          return {
            id: e._id,
            ...e,
          };
        }),
        total: json.total,
      };
    });
  },

  update: async (resource, params) => {
    if (params.data.accountType === "MINISTRY") {
      delete params.data.investorName;
      params.data.desc = null;
      params.data.website = null;
      params.data.fax = null;
    }
    if (
      params.data["attachment"] &&
      params.data["attachment"].rawFile.lastModified
    ) {
      const data = new FormData();
      data.append("file", params.data["attachment"].rawFile);
      const result = await httpClient(`${apiUrl}/${resource}/upload`, {
        method: "POST",
        body: data,
      });
      params.data["attachment"] = {
        attachment: `${apiUrl}/${resource}/${JSON.parse(result.body).path}`,
        rawFile: {
          path: JSON.parse(result.body).path,
        },
        title: JSON.parse(result.body).filename,
      };
    }
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: { ...params.data, id: json._id } }));
  },
  // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
  updateMany: (resource, params) => {
    if (params.data.accountType === "MINISTRY") {
      delete params.data.investorName;
      params.data.desc = null;
      params.data.website = null;
      params.data.fax = null;
    }
    return Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data),
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json._id) }));
  },
  create: async (resource, params) => {
    if (params.data.accountType === "MINISTRY") {
      delete params.data.investorName;
      params.data.desc = null;
      params.data.website = null;
      params.data.fax = null;
    }
    if (params.data["attachment"]) {
      const data = new FormData();
      data.append("file", params.data["attachment"].rawFile);
      const result = await httpClient(`${apiUrl}/${resource}/upload`, {
        method: "POST",
        body: data,
      });
      params.data["attachment"] = {
        attachment: `${apiUrl}/${resource}/${JSON.parse(result.body).path}`,
        rawFile: {
          path: JSON.parse(result.body).path,
        },
        title: JSON.parse(result.body).filename,
      };
    }
    return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json._id },
    }));
  },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json.id) })),
});
