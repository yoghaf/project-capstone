import { createContext } from "react";
import { useState } from "react";

import supabase from "../config/supabaseClient";
const Context = createContext();

const Provider = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const [field, setField] = useState({
    created_at: new Date().toISOString(),
    name: "",
    "regist-start": "",
    "regist-end": "",
    image: null,
    description: "",
    province: "",
    city: "",
    location: "",
    "link-invite": "",
    poster: false,
    follow: false,
    payment: false,
    id_akun: "",
  });

  const CreateEvent = async (event) => {
    try {
      const { error } = await supabase.from("event").insert(event);
      if (error) {
        throw error;
      } else {
        return "Event created successfully!";
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const ImgEventUpload = async (field, eventImageName) => {
    try {
      const { error } = await supabase.storage.from("images").upload(eventImageName, field.event_img, {
        cacheControl: "3600",
        upsert: false,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);

      return;
    }
  };

  const fetchProvince = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_LOCATION_URL + "/provinsi");
      const data = await response.json();
      return data.data.list;
    } catch (error) {
      console.error("Error fetching province:", error);
    }
  };

  const fetchCities = async (id) => {
    try {
      const response = await fetch(process.env.REACT_APP_LOCATION_URL + "/kabupaten/" + id);
      const data = await response.json();
      return data.data.list;
    } catch (error) {
      console.error("Error fetching province:", error);
    }
  };

  return <Context.Provider value={{ token, CreateEvent, ImgEventUpload, setField, field, fetchCities, fetchProvince }}>{children}</Context.Provider>;
};
export { Context, Provider };
