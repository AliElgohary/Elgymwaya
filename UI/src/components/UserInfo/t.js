
<Col md={6} xs={12} className={style.UserInfoBox}>
      <h2>User Information</h2>
      {currentUser && (
        <div>
          <Image
            src={currentUser.profile_picture || userImage}
            className={style.userImage}
            roundedCircle
          />
          <span className="text-dark fw-bold">{currentUser.full_name}</span>
        </div>
      )}
      {currentUser && (
        <div id="body-info" className={style.bodyInfo}>
          <h5 className={style.infoHead}>Body Info</h5>
          <div id="age" className="my-2">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            <span className={style.infoSpan}>Age: {currentUser.age}</span>
          </div>
          <div id="height" className="my-2">
            <FontAwesomeIcon icon={faRuler} className="me-2" />
            <span className={style.infoSpan}>Height: {currentUser.height}</span>
          </div>
          <div id="weight">
            <FontAwesomeIcon icon={faWeightScale} className="me-2" />
            <span className={style.infoSpan}>Weight: {currentUser.weight}</span>
          </div>
        </div>
      )}
      {currentUser && (
        <div id="contact-info">
          <h5 className={style.infoHead}>Contact Info</h5>
          <div id="phone" className="my-2">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            <span className={style.infoSpan}>
              Phone: {currentUser.phone_number}
            </span>
          </div>
          <div id="email">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            <span className={style.infoSpan}>Email: {currentUser.email}</span>
          </div>
        </div>
      )}
      {currentUser && (
        <div id="registration-info">
          <h5 className={style.infoHead}>Registration Info</h5>
          <div id="registration-date">
            <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
            <span className={style.infoSpan}>
              {/* //TODO:registrationDate */}
              Registration Date: {currentUser.registrationDate}
            </span>
          </div>
        </div>
      )}
    </Col>