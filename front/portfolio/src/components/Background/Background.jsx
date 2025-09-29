import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Language/Language";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Background.css";

function Education() {
  const [toggleState, setToggleState] = useState(1);
  const { sentences } = useLanguage();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="training" id="background">
      <h2 className="training__title">{sentences.background} </h2>

      <span className="training__subtitle">
        {sentences.background_subtitle}
      </span>

      <div className="training__core container">
        <div className="training__core-tabs">
          <div
            className={
              toggleState === 1
                ? "training__core-tabs-button training__core-tabs-active button--flex"
                : "training__core-tabs-button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <MdOutlineRestaurantMenu />
            <p className="ml-2">{sentences.work_experience} </p>
          </div>
          <div
            className={
              toggleState === 2
                ? "training__core-tabs-button training__core-tabs-active"
                : "training__core-tabs-button"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap training__core-icons"></i>
            <p> {sentences.education} </p>
          </div>

          <div
            className={
              toggleState === 3
                ? "training__core-tabs-button training__core-tabs-active"
                : "training__core-tabs-button"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-smile training__core-icons"></i>
            <p>{sentences.skill}</p>
          </div>
        </div>

        <div className="training__core-data">
          {/* TODO: Refactorizar esto */}
          {/* JOB EXPERIENCE */}
          <div
            className={
              toggleState === 1
                ? "training__core-data-content training__core-data-content-active"
                : "training__core-data-content"
            }
          >
            {/* NEW ONE */}
            {sentences.works?.map((work, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="training__core-data-content-each">
                  <div>
                    {!isEven && (
                      <>
                        <h3 className="training__core-title">
                          {work?.position}
                        </h3>

                        <div className="company_name">
                          <FaRegBuilding className="icon_office" />
                          <p className="text-job">{work?.company}</p>
                        </div>

                        <div className="flex items-center">
                          <i className="uil uil-calendar-alt"></i>
                          <p className="text-range-date">{work?.date}</p>
                        </div>

                        <br />

                        <div>
                          <p>
                            {work?.description} <br />
                            {work?.description_2}
                          </p>
                        </div>

                        <br />

                        {work?.link && (
                          <Link to={work.link} className="button button--flex">
                            {sentences.see_more}
                          </Link>
                        )}
                      </>
                    )}
                  </div>

                  {/* Timeline in the middle */}
                  <div>
                    <span className="training__timeline-rounder"></span>
                    <span className="training__timeline-line"></span>
                  </div>

                  <div>
                    {isEven && (
                      <>
                        <h3 className="training__core-title">
                          {work?.position}
                        </h3>

                        <div className="company_name">
                          <FaRegBuilding className="icon_office" />
                          <p className="text-job">{work?.company}</p>
                        </div>

                        <div className="flex items-center">
                          <i className="uil uil-calendar-alt"></i>
                          <p className="text-range-date">{work?.date}</p>
                        </div>

                        <br />

                        <div>
                          <p>
                            {work?.description} <br />
                            {work?.description_2}
                          </p>
                        </div>

                        <br />

                        {work?.link && (
                          <Link to={work.link} className="button button--flex">
                            {sentences.see_more}
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* EDUCATION */}
          <div
            className={
              toggleState === 2
                ? "training__core-data-content training__core-data-content-active"
                : "training__core-data-content"
            }
          >
            <div className="training__core-data-content-each">
              <div>
                <h3 className="training__core-title">
                  {sentences.carrer_henry}
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">
                    {sentences.carrer_place_henry}
                  </span>
                </div>

                <br />
                <span className="training__core-subtitle">
                  {sentences.carrer_status_henry}
                </span>
                <div className="training__core-calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {sentences.carrer_date_henry}
                </div>
              </div>

              <div>
                <span className="training__timeline-rounder"></span>
                <span className="training__timeline-line"></span>
              </div>
            </div>

            <div className="training__core-data-content-each">
              <div></div>

              <div>
                <span className="training__timeline-rounder"></span>
                <span className="training__timeline-line"></span>
              </div>

              <div>
                <h3 className="training__core-title">
                  {sentences.carrer_zegel}
                </h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">
                    {sentences.carrer_place_zegel}
                  </span>
                </div>

                <br />
                <span className="training__core-subtitle">
                  {sentences.carrer_status_zegel}
                </span>
                <div className="training__core-calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {sentences.carrer_date_zegel}
                </div>
              </div>
            </div>

            <div className="training__core-data-content-each">
              <div>
                <h3 className="training__core-title">{sentences.carrer_upc}</h3>

                <div className="company_name">
                  <FaRegBuilding className="icon_office" />
                  <span className="text-job">{sentences.carrer_place_upc}</span>
                </div>

                <br />
                <span className="training__core-subtitle">
                  {sentences.carrer_status_upc}
                </span>

                <div className="training__core-calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {sentences.carrer_date_upc}
                </div>
              </div>

              <div>
                <span className="training__timeline-rounder"></span>
                <span className="training__timeline-line"></span>
              </div>
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div
            className={
              toggleState === 3
                ? "training__core-data-content training__core-data-content-active"
                : "training__core-data-content"
            }
          >
            <div className="training__core-data-content-each">
              <div>
                <h3 className="training__core-title">
                  <i className="uil uil-user"></i>
                  {sentences.skills_personal}
                </h3>
                <ul>
                  {sentences.skills_personal_all &&
                    sentences.skills_personal_all.map((skill, index) => {
                      return <li key={index}>{skill}</li>;
                    })}
                </ul>
              </div>

              <div>
                <span className="training__timeline-rounder"></span>
                <span className="training__timeline-line"></span>
              </div>
            </div>

            <div className="training__core-data-content-each">
              <div></div>

              <div>
                <span className="training__timeline-rounder"></span>
                <span className="training__timeline-line"></span>
              </div>

              <div>
                <h3 className="training__core-title">
                  <i className="uil uil-users-alt"></i>
                  {sentences.skills_team}
                </h3>
                <ul className="pl-5">
                  {sentences.skills_team_all &&
                    sentences.skills_team_all.map((skill, index) => {
                      return <li key={index}>{skill}</li>;
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
