import axios from "axios";

const Baseurl = import.meta.env.VITE_BASE_URL;

const Auth = {
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
  },
};

// Daily_News

export const Daily_News_In_Hindi = async (setResponse, setSingle) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/hindi-kisaan-connections?populate=*`,
      Auth
    );
    setResponse(res.data.data);
    setSingle(res.data.data?.reverse()?.slice(0, 1)?.[0]);
  } catch {}
};

export const Daily_News_English = async (setResponse, setSingle) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/kisaan-connections?populate=*&`,
      Auth
    );
    setResponse(res.data.data);
    setSingle(res.data.data?.reverse()?.slice(0, 1)?.[0]);
  } catch {}
};

export const Single_News = async (type, id, setResponse) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}api/hindi-daily-lives/${id}?populate=*`,
        Auth
      );
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${Baseurl}api/kisaan-connections/${id}?populate=*&`,
        Auth
      );
      setResponse(res.data.data);
    }
  } catch {}
};

// Challanges
export const get_challenges = async (type, setResponse, setSingle) => {
  try {
    if (type === "hi") {
      const res = await axios.get(`${Baseurl}api/hindi-teacher-connections?populate=*&`, Auth);
      setResponse(res.data.data);
      setSingle(res.data.data?.reverse()?.slice(0, 1)?.[0]);
    } else {
      const res = await axios.get(`${Baseurl}api/teacher-connections?populate=*&`, Auth);
      setResponse(res.data.data);
      setSingle(res.data.data?.reverse()?.slice(0, 1)?.[0]);
    }
  } catch {}
};

export const single_challenges = async (type, id, setResponse) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}api/hindi-teacher-connections/${id}?populate=*`,
        Auth
      );
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${Baseurl}api/teacher-connections/${id}?populate=*&`,
        Auth
      );
      setResponse(res.data.data);
    }
  } catch {}
};

// social
export const get_social = async (type, setResponse, setSingle) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}api/hindi-aamdani-bhadayes?populate=**`,
        Auth
      );
      setResponse(res.data.data);
      setSingle(res.data?.data?.reverse()?.[0]?.attributes);
    } else {
      const res = await axios.get(
        `${Baseurl}api/aamdani-bhadayes?populate=*`,
        Auth
      );
      setResponse(res.data.data);
      setSingle(res.data?.data?.reverse()?.[0]?.attributes);
    }
  } catch {}
};

export const single_social = async (type, id, setResponse) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}api/hindi-aamdani-bhadayes/${id}?populate=*`,
        Auth
      );
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${Baseurl}api/aamdani-bhadayes/${id}?populate=*`,
        Auth
        );
      setResponse(res.data.data);
    }
  } catch {}
};

// Gardening
export const get_gardening = async (type, setResponse, setSingle) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}api/hindi-the-changemakers?populate=**`,
        Auth
      );
      setResponse(res.data.data);
      setSingle(res.data?.data?.reverse()?.[0]);
    } else {
      const res = await axios.get(
        `${Baseurl}api/the-changemakers?populate=*`,
        Auth
      );
      setResponse(res.data.data);
      setSingle(res.data?.data?.reverse()?.[0]);
    }
  } catch {}
};

export const single_gardening = async (type, id, setResponse) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}api/hindi-the-changemakers/${id}?populate=*`,
        Auth
      );
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${Baseurl}api/the-changemakers/${id}?populate=*`,
        Auth
      );
      setResponse(res.data.data);
    }
  } catch {}
};

// Ads
export const getAdd1 = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/advertisement-banner-1?populate=*`, Auth);
    setResponse(response.data.data);
  } catch { }
};

export const getAdd2 = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/advertisement-banner-2?populate=*`, Auth);
    setResponse(response.data.data);
  } catch { }
};

export const getBlockAdd1 = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/advertisement-block-1?populate=*`, Auth);
    setResponse(response.data.data);
  } catch { }
};
export const getBlockAdd2 = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/advertisement-block-2?populate=*`, Auth);
    setResponse(response.data.data);
  } catch { }
};
export const getBlockAdd3 = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/advertisement-block-3?populate=*`, Auth);
    setResponse(response.data.data);
  } catch { }
};
export const getBlockAdd4 = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/advertisement-block-4?populate=*`, Auth);
    setResponse(response.data.data);
  } catch { }
};
export const getBlockAdd5 = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/advertisement-block-5?populate=*`, Auth);
    setResponse(response.data.data);
  } catch { }
};
export const getBlockAdd6 = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/advertisement-block-6?populate=*`, Auth);
    setResponse(response.data.data);
  } catch { }
};
export const getStory = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/stories?populate=*`, Auth);
    setResponse(response.data.data);
  } catch {}
};

export const getSingleStory = async (setResponse, id) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/stories/${id}?populate=*`,
      Auth
    );
    setResponse(response.data.data);
  } catch { }
};

export const get_single_category = async (type, setResponse, id) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/category-Hindis?populate=*`,
        Auth
      );
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL
        }api/categorydata/${id}?populate=*`,
        Auth
      );
      console.log(res.data.data);
      setResponse(res.data.data);
    }
  } catch { }
};

export const get_category = async (type, setResponse, id) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${Baseurl}api/category-Hindis/${id}?populate=*`,
        Auth
      );
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${Baseurl}api/categories/${id}?populate[category_data][populate]=*`,
        Auth
      );
      console.log(res.data.data.attributes);
      setResponse(res.data.data);

    }
  } catch { }
};

export const get_all_category = async (type, setResponse) => {
  try {
    if (type === "hi") {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL
        }api/category-hindis?populate[category_data_hindis][populate]=*`,
        Auth
      );
      setResponse(res.data.data);
    } else {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL
        }api/categories?populate[category_data][populate]=*`,
        Auth
      );
      setResponse(res.data.data);
    }
  } catch { }
};

export const getPdfs = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}api/e-libraries?populate=*`, Auth);
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

export const getStoryCategory = async (setResponse) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/story-categories?populate=*`,
      Auth
    );
    setResponse(res.data.data);
  } catch { }
};
