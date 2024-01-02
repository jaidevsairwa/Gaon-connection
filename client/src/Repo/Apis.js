import axios from "axios";

const Baseurl = import.meta.env.VITE_BASE_URL;

const Auth = {
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
  },
};

export const get_gardening = async (type, setResponse, setSingle) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}/api/hindi-the-changemakers?populate=*`,
        Auth
      );
      setResponse(res.data.data);
      setSingle(res.data?.data?.reverse()?.[0]);
    } else {
      const res = await axios.get(
        `${Baseurl}/api/the-changemakers?populate=*`,
        Auth
      );
      setResponse(res.data.data);
      setSingle(res.data?.data?.reverse()?.[0]);
    }
  } catch {}
};

export const getAdd1 = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/advertisement-banner-1?populate=*`,
      Auth
    );
    setResponse(response.data.data.attributes);
  } catch {}
};

export const getAdd2 = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/advertisement-banner-2?populate=*`,
      Auth
    );
    setResponse(response.data.data.attributes);
  } catch {}
};

export const getBlockAdd1 = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/advertisement-block-1?populate=*`,
      Auth
    );
    setResponse(response.data.data.attributes);
  } catch {}
};
export const getBlockAdd2 = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/advertisement-block-2?populate=*`,
      Auth
    );
    setResponse(response.data.data.attributes);
  } catch {}
};
export const getBlockAdd3 = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/advertisement-block-3?populate=*`,
      Auth
    );
    setResponse(response.data.data.attributes);
  } catch {}
};
export const getBlockAdd4 = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/advertisement-block-4?populate=*`,
      Auth
    );
    setResponse(response.data.data.attributes);
  } catch {}
};
export const getBlockAdd5 = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/advertisement-block-5?populate=*`,
      Auth
    );
    setResponse(response.data.data.attributes);
  } catch {}
};
export const getBlockAdd6 = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/advertisement-block-6?populate=*`,
      Auth
    );
    setResponse(response.data.data.attributes);
  } catch {}
};
export const get_Story = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}/api/stories?populate=*`, Auth);
    setResponse(response.data.data);
  } catch {}
};

export const getStory = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}/api/reel?populate=*`, Auth);
    setResponse(response.data.data.data);
  } catch { }
};

export const getSingleStory = async (setResponse, id) => {
  try {
    const response = await axios.get(
      `${Baseurl}/api/stories/${id}?populate=*`,
      Auth
    );
    setResponse(response.data.data);
  } catch {}
};

export const get_single_category = async (type, setResponse, id, setUser) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/hindi-category-datas/${id}?populate=*`,
        Auth
      );
      const usr = res.data.data.attributes.user_info.data.id;
      const userRes = await axios.get(
        `${Baseurl}/api/user-infos/${usr}?populate[personalPhoto]=*`,
        Auth
      );
      setUser(userRes.data.data);
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/categorydata/${id}?populate=*`,
        Auth
      );
      const usr = res.data.data.attributes.user_info.data.id;
      const userRes = await axios.get(
        `${Baseurl}/api/user-infos/${usr}?populate[personalPhoto]=*`,
        Auth
      );
      setUser(userRes.data.data);
      setResponse(res.data.data);
    }
  } catch {}
};

export const get_category = async (type, setResponse, id) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}/api/category-hindis/${id}?populate[category_data_hindis][populate]=*`,
        Auth
      );
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${Baseurl}/api/categories/${id}?populate[category_data][populate]=*`,
        Auth
      );
      setResponse(res.data.data);
    }
  } catch {}
};

export const get_all_category = async (type, setResponse) => {
  if (type === "hi") {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/category-hindis?populate[category_data_hindis][populate]=*`,
        Auth
      );
      setResponse(res.data.data);
    } catch {}
  } else {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/categories?populate[category_data][populate]=*`,
        Auth
      );
      setResponse(res.data.data);
    } catch {}
  }
};

export const getPdfs = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}/api/e-libraries?populate=*`, Auth);
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

export const getStoryCategory = async (setResponse) => {
  try {
    const res = await axios.get(
      `${Baseurl}/api/story-categories?populate=*`,
      Auth
    );
    setResponse(res.data.data);
  } catch {}
};

export const getAuthor = async (id, setresponse, setCate) => {
  try {
    const res = await axios(`${Baseurl}/api/user-infos/${id}?populate=*`, Auth);
    const cateD = Object.values(res.data.data.attributes);
    setresponse(res.data.data);
    setCate(cateD);
  } catch {}
};

export const get_post = async (id, setresponse) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/categorydata/${id}?populate=*`,
      Auth
    );
    if (res.length > 0) {
      setresponse(res.data.data);
    }
  } catch {
    const res = await axios.get(
      `${
        import.meta.env.VITE_BASE_URL
      }/api/hindi-category-datas/${id}?populate=*`,
      Auth
    );
    setresponse(res.data.data);
  }
};

export const get_image = async (type, setResponse) => {
  if (type === "gaon") {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/image-gaon-tv?populate=*`,
        Auth
      );
      setResponse(res?.data?.data?.attributes);
    } catch {}
  } else if (type === "radio") {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/image-gaon-radio?populate=*`,
        Auth
      );
      setResponse(res?.data?.data?.attributes);
    } catch {}
  } else if (type === "pod") {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/image-podcast?populate=*`,
        Auth
      );
      setResponse(res?.data?.data?.attributes);
    } catch {}
  }
};

export const get_videoName = async (setresponse) => {
  try {
    const res = await axios(`${Baseurl}/api/change-videos-name?populate=*`, Auth);
    setresponse(res.data.data.attributes)
  } catch { }
};

