import axios from "axios";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_API_KEY

  export async function FetchPhotos(query) {
  
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page: 1,
      per_page: 20,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return res.data;
}
export async function FetchVideos(query){
    const res=    await axios.get("https://api.pexels.com/v1/videos/search",
        {
            params:{
                query,
                per_page:15
            },
            headers :{
                Authorization : PEXELS_KEY
            }

        }

    )
    return res.data   
}
