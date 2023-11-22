import { Col, Row } from "react-bootstrap";

function ProfileStaff(props) {
  const { staff } = props;

  return (
    <>
      {staff.length > 0 &&
        staff.map((staff) => {
          const fullName =
            (staff.title || "") +
            " " +
            staff.first_name +
            " " +
            staff.last_name;
          if (staff.role === "PHYSICIAN") {
            return (
              <Row key={staff.uid} className="my-3">
                <Col xs={5} md={2}>
                  <strong>Physician</strong>
                </Col>
                <Col className="fw-semibold">
                  <span>{fullName}</span>
                </Col>
              </Row>
            );
          }
        })}
      {staff.length > 0 &&
        staff.some((staff) => staff.role === "RADIOLOGIST") && (
          <Row className="my-3">
            <Col xs={5} md={2}>
              <strong>
                {staff.length > 1 ? "Radiologists" : "Radiologist"}
              </strong>
            </Col>
            <Col className="fw-semibold">
              {staff
                .filter((staff) => staff.role === "RADIOLOGIST")
                .map((radiologist, index) => (
                  <div key={index}>{`${radiologist.title || ""} ${
                    radiologist.first_name
                  } ${radiologist.last_name}`}</div>
                ))}
            </Col>
          </Row>
        )}
    </>
  );
}

export default ProfileStaff;
