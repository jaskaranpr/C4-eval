import {
  GET_RESULT,
  GET_EXPLICIT,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DEC,
  SORT_BY_TITLE_ASC,
  SORT_BY_QUALITY_ASC,
  SORT_BY_QUALITY_DEC,
  SORT_BY_TITLE_DEC,
} from "./actionTypes";

const init = {
  data: [
    {
      id: 1,
      title: "Linkbuzz",
      url: "https://weather.com",
      description:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      author: "Jenkins, Blanda and Ferry",
      creation_date: "1616250019000",
      explicit: true,
      quality: 53,
    },
  ],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_RESULT: {
      return {
        ...store,
        data: payload.data.filter((v) => {
          return v.title.toLowerCase().startsWith(payload.res);
        }),
      };
    }
    case SORT_BY_TITLE_ASC: {
      return {
        ...store,
        data: [
          ...store.data.sort((a, b) => {
            var nameA = a.title.toUpperCase();
            var nameB = b.title.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          }),
        ],
      };
    }
    case SORT_BY_TITLE_DEC: {
      return {
        ...store,
        data: [
          ...store.data.sort((a, b) => {
            var nameA = a.title.toUpperCase();
            var nameB = b.title.toUpperCase();
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
          }),
        ],
      };
    }
    case SORT_BY_QUALITY_ASC: {
      return {
        ...store,
        data: [...store.data.sort((a, b) => a.quality - b.quality)],
      };
    }
    case SORT_BY_QUALITY_DEC: {
      return {
        ...store,
        data: [...store.data.sort((a, b) => b.quality - a.quality)],
      };
    }
    case GET_EXPLICIT: {
      return {
        ...store,
        data: [...store.data.filter((s) => s.explicit)],
      };
    }
    case SORT_BY_DATE_ASC: {
      return {
        ...store,
        data: [...store.data.sort((a, b) => a.creation_date - b.creation_date)],
      };
    }
    case SORT_BY_DATE_DEC: {
      return {
        ...store,
        data: [...store.data.sort((a, b) => b.creation_date - a.creation_date)],
      };
    }
    default:
      return store;
  }
};
