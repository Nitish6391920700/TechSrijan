import React from "react";
import classes from "./SingleEventPage.module.css";
import Button from "../common/Button/Button";
import { useParams } from "react-router-dom";
import { eventsData } from "../../assets/eventsData";

const SingleEventPage = () => {
  const { eventId } = useParams();
  const requiredEvent = eventsData.find((event) => event.id === +eventId);

  const {
    name,
    image,
    description,
    rules,
    note,
    prizes,
    team,
    fees,
    contactInfo,
    location,
    date,
    link,
    onSpot,
    disqualification,
  } = requiredEvent;

  return (
    <div className={classes.singleEvent}>
      <div className={classes.singleEventCard}>
        {/* Left Column */}
        <div className={classes.col1}>
          <img className={classes.eventPoster} src={image} alt={name} />
          {link ? (
            <Button
              className={classes.registerButton}
              hrefLink={link}
              label="Register"
            />
          ) : onSpot ? (
            <p className={classes.soon}>Registration will be taken on spot!</p>
          ) : (
            <p className={classes.soon}>Registration will be open soon.</p>
          )}
        </div>

        {/* Right Column */}
        <div className={classes.col2}>
          <h1 className={classes.eventHeading}>{name}</h1>
          <div className={classes.subheading}>
            <h2 className={classes.heading}>Event Details</h2>
            <div className={classes.tableContainer}>
              <table className={classes.detailsTable}>
                <tbody>
                  <tr>
                    <th>Description</th>
                    <td>{description}</td>
                  </tr>
                  <tr>
                    <th>Team</th>
                    <td>{team}</td>
                  </tr>
                  <tr>
                    <th>Fees</th>
                    <td>{fees}</td>
                  </tr>
                  {prizes && (
                    <tr>
                      <th>Prizes</th>
                      <td>
                        <ul className={classes.list}>
                          {prizes?.map((prize, i) => (
                            <li key={i}>{prize}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                  {rules && (
                    <tr>
                      <th>Rules</th>
                      <td>
                        <ul className={classes.list}>
                          {rules?.map((rule, i) => (
                            <li key={i}>{rule}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                  {disqualification && (
                    <tr>
                      <th>Disqualification</th>
                      <td>
                        <ul className={classes.list}>
                          {disqualification?.map((rule, i) => (
                            <li key={i}>{rule}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                  <tr>
                    <th>Location</th>
                    <td>{location}</td>
                  </tr>
                  <tr>
                    <th>Date and Timing</th>
                    <td>{date}</td>
                  </tr>
                  <tr>
                    <th>Contact Info</th>
                    <td>
                      {contactInfo?.map((contact, i) => (
                        <p key={i}>{contact}</p>
                      ))}
                    </td>
                  </tr>
                  {note && (
                    <tr>
                      <th>Note</th>
                      <td>
                        <ul className={classes.list}>
                          {note?.map((noteItem, i) => (
                            <li key={i}>{noteItem}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEventPage;
