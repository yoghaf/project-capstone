import React, { useEffect, useState } from "react";
import CardEvent from "../../components/Card";
import supabase from "../../config/supabaseClient";
import Loading from "../../components/Loading";

function RegisteredEvent() {
  const [eventData, setEventData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const idAkun = JSON.parse(sessionStorage.getItem("token"));
    const idUser = idAkun.user.id;

    const fetchEventData = async () => {
      try {
        setIsLoading(true);

        const { data: eventData, error: eventError } = await supabase.from("event").select();

        if (eventError) {
          setFetchError("Could not fetch the events");
          console.log(eventError);
          setIsLoading(false);
          return;
        }

        if (eventData) {
          const { data: daftarData, error: daftarError } = await supabase.from("daftar").select();

          if (daftarError) {
            setFetchError("Could not fetch the events");
            console.log(daftarError);
            setIsLoading(false);
            return;
          }

          const filterData = daftarData.filter((item) => item.id_akun === idUser);
          const eventId = filterData.map((item) => item.id_event);
          const filterEventData = eventId && eventData.filter((item) => eventId.includes(item.id_event));
          setEventData(filterEventData);
          setIsLoading(false);
        }
      } catch (error) {
        setFetchError("Could not fetch the events");
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="tittle-page">Registered Event</h1>
        </div>
      </div>

      <div className="row">
        <div className="row row-gap-5">
          {fetchError && <p>{fetchError}</p>}
          {isLoading ? (
            <Loading />
          ) : (
            eventData.map((item) => (
              <div key={item.id_event} className="col-lg-4 col-md-6 col-sm-12">
                <CardEvent image={item.image} title={item.name} description={item.description} link={`/dashboard/event/${item.id_event}`} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisteredEvent;
