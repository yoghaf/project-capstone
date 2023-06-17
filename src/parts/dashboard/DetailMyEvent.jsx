import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "../../assets/style/detail.css";
import "../../assets/style/myevent.css";
import supabase from "../../config/supabaseClient";

function DetailMyEvent() {
  const [fetchError, setFetchError] = useState(null);

  const [event, setEvent] = useState(null);
  const [participants, setParticipants] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchEvent = async () => {
      const { data, error } = await supabase.from("event").select().eq("id_event", id);

      if (error) {
        setFetchError("Could not fetch the events");
        setEvent(null);
        console.log(error);
      }
      if (data) {
        setEvent(data);

        setFetchError(null);
      }

      const peserta = await supabase.from("daftar").select().eq("id_event", id);
      if (peserta) {
        setParticipants(peserta.data);
        setFetchError(null);
      }
    };

    fetchEvent();
  }, [id]);

  return (
    <>
      <div className="col box-space">
        <div className="box">
          {fetchError && <p>fetchError</p>}
          {event && (
            <div className="col">
              <div className="row title-layout box-space-h">
                <h1 className="event-title">
                  <Link className="back-button" to="/dashboard/myevent"></Link>
                  {event[0].name}
                </h1>
              </div>
              <div className="row box-space-h">
                <div className="date-image">
                  <p className="text date">Registration {event[0]["regist-start"]}</p>
                </div>
                <div className="date-image">
                  <p className="text date">Date Event {event[0]["event-start"]}</p>
                </div>
                <div className="location-image">
                  <p className="text date">
                    {event[0]["location"]}, Kota {event[0]["city"]}
                  </p>
                </div>
              </div>
              <div className="row" style={{ padding: "25px 68px" }}>
                <p className="text" style={{ fontSize: "16px" }}>
                  {event[0].description}
                </p>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <ol className="list-ol">
                    <p className="text">Langkah Sebelum Mendaftar</p>
                    <li>
                      <p className="text">bukti share poster</p>
                    </li>
                    <li>
                      <p className="text">bukti install aplikasi</p>
                    </li>
                  </ol>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <ol className="list-ol">
                    <p className="text">Langkah Setelah Mendaftar</p>
                    <li>
                      <p className="text">bergabung dengan grup sosial media</p>
                    </li>
                  </ol>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <p className="text" id="textLink">
                    Link Media Social
                  </p>
                  <p className="text" id="link">
                    {event[0]["link-invite"]}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <h1 className="event-title">Daftar Peserta</h1>

      <center>
        <div className="container-table">
          <Table bordered hover style={{ fontFamily: "Bold" }}>
            <tbody>
              <tr className="header" style={{ fontFamily: "Bold" }}>
                <th>NAMA</th>
                <th>EMAIL</th>
                <th>NO.TELP</th>
                <th>DOMISILI</th>
                {!event?(
                  <></>
                )
                :(<>
                  {event[0]["poster"]?(
                      <th className="bukti_gambar">POSTER</th>
                    )
                    :(
                      <></>
                    )
                  }
                  {
                    event[0]["follow"]?(
                      <th className="bukti_gambar">FOLLOW</th>
                    )
                    :(
                      <></>
                    )
                  }
                  {
                    event[0]["payment"]?(
                      <th className="bukti_gambar">PEMBAYARAN</th>
                    )
                    :(
                      <></>
                    )
                  }
                  </>
                )

                }
              </tr>
              {!participants ? (
                <p>Belum ada peserta yang mendaftar</p>
              ) : (
                participants.map((participant, i) => {
                  return (
                    <tr className="rowparticipant">
                      <td align="left">{participant.name}</td>
                      <td>{participant.email}</td>
                      <td>{participant.notelp}</td>
                      <td>{participant.domicile}</td>
                      {
                        event[0]["poster"]?(
                          <td className="bukti_gambar"><img alt="poster" src={participant["poster_img_url"]}></img></td>
                        )
                        :(
                          <></>
                        )
                      }
                      {
                        event[0]["follow"]?(
                          <td className="bukti_gambar"><img alt="follow" src={participant["follow_img_url"]}></img></td>
                        )
                        :(
                          <></>
                        )
                      }
                      {
                        event[0]["payment"]?(
                          <td className="bukti_gambar"><img alt="payment" src={participant["payment_img_url"]}></img></td>
                        )
                        :(
                          <></>
                        )
                      }
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </center>
    </>
  );
}

export default DetailMyEvent;
