import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import default_profile_picture from "../assets/default_profile_picture.png";
import { API_URL, MODE } from "../constants.js";
import { useAuth } from "../contexts/AuthContext";

function EditProfile(props) {
  const { profile_image_url, bio } = props.profile;
  const { roleColor } = props;
  const { role } = props;
  const { setData } = props;
  const { signin, user } = useAuth();

  const [isEditing, setIsEditing] = React.useState(false);
  const [newBio, setNewBio] = React.useState(bio);
  const [profileImage, setProfileImage] = React.useState();
  const [previewImageURL, setPreviewImageURL] =
    React.useState(profile_image_url);
  const navigate = useNavigate();
  const [uploading, setUploading] = React.useState(false);
  const bioFormRef = React.useRef(null);

  const [showEmailUpdate, setShowEmailUpdate] = React.useState(false);
  const [newEmail, setNewEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const [password, setPassword] = React.useState("");

  const allowBioEdit = role === "Physician" || role === "Radiologist";

  const handleEmailUpdate = () => {
    // Validate and send the new email to the API
    // Reset the state and close the form after update
    if (!newEmail || !password) {
      setEmailError("Email and password are required.");
      return;
    }
    setEmailError("");

    // API request to update email using PUT method
    fetch(API_URL + "/api/user/email", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
      body: JSON.stringify({
        email: newEmail,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Handle successful response
        if (data.success) {
          // Update the profile state
          setData((prev) => ({
            ...prev,
            profile: {
              ...prev.profile,
              email: newEmail,
            },
          }));

          // Sign in to refresh auth context
          signin(newEmail, password);

          alert(data.msg);
          setShowEmailUpdate(false);
          setNewEmail(""); // Optionally reset the email state
          setPassword(""); // Optionally reset the password state
        } else {
          setEmailError(data.errors[0].msg || "Failed to update email.");
          setPassword("");
        }
      })
      .catch((error) => {
        // Handle network errors or other unexpected errors
        setEmailError(error.message);
        setPassword("");
      });
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      setPreviewImageURL(null);
    }
  };

  const handleBioInput = (e) => {
    setNewBio(e.target.value);
  };

  React.useEffect(() => {
    if (profileImage) {
      const url = URL.createObjectURL(profileImage);
      setPreviewImageURL(url);

      return () => URL.revokeObjectURL(previewImageURL);
    }
  }, [profileImage]);

  React.useEffect(() => {
    // Only Physicians and Radiologists can edit right now
    if (allowBioEdit && isEditing) {
      // Dynamically adjust the bio form textarea's height based on its content
      bioFormRef.current.style.height = "auto";
      bioFormRef.current.style.height = `${bioFormRef.current.scrollHeight}px`;
    }
  }, [isEditing]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Only update bio if profile image is not being updated
    if (profile_image_url === previewImageURL) {
      fetch(`${API_URL}/api/user/profile`, {
        method: "PUT",
        body: JSON.stringify({
          profile_image_url,
          bio: newBio,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.accessToken,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert("Saved profile successfully!");
            setTimeout(() => navigate(0), 500);
          }
        })
        .catch((error) => {
          console.log("Error getting image URL: ", error);
          setUploading(false);
        })
        .finally(() => setUploading(false));
    } else if (previewImageURL) {
      // Update both profile image and bio
      const file_name = uuid();
      const storage = getStorage();
      const storageRef = ref(storage, `${MODE}/${file_name}`);

      const uploadTask = uploadBytesResumable(storageRef, profileImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          switch (snapshot.state) {
            case "running":
              setUploading(true);
              break;
            case "error":
            case "canceled":
              setUploading(false);
              break;
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await fetch(`${API_URL}/api/user/profile`, {
                method: "PUT",
                body: JSON.stringify({
                  profile_image_url: downloadURL,
                  bio: newBio,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + user.accessToken,
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.success) {
                    alert("Saved profile successfully!");
                    setTimeout(() => navigate(0), 500);
                  }
                });
            })
            .catch((error) => {
              console.log("Error getting image URL: ", error);
              setUploading(false);
            })
            .finally(() => setUploading(false));
        }
      );
    }
  };

  return (
    <Container fluid className="p-0">
      {isEditing && (
        <h2 className="my-5" style={{ color: "#0d6efd" }}>
          Editing profile
        </h2>
      )}
      <Card className="p-4" style={{ backgroundColor: "#adb5bd" }}>
        <Card.Title className="mb-3">
          <div
            className={`d-flex align-items-center ${
              isEditing ? "justify-content-normal" : "justify-content-between"
            }`}
          >
            <img
              src={
                previewImageURL || profile_image_url || default_profile_picture
              }
              alt="User Profile"
              className="me-3"
            />
            {isEditing ? (
              <div className="d-flex align-self-end">
                <input
                  id="fileInput"
                  type="file"
                  onChange={handleChange}
                  onClick={(e) => (e.target.value = null)}
                  style={{ border: "none", display: "none" }}
                />
                <label
                  className="btn"
                  style={{ backgroundColor: "#0dcaf0", color: "#fff" }}
                  htmlFor="fileInput"
                >
                  Change Picture
                </label>
              </div>
            ) : (
              <Button
                style={{ border: roleColor, backgroundColor: roleColor }}
                onClick={() => setIsEditing((prev) => !prev)}
              >
                Edit Profile
              </Button>
            )}
          </div>
        </Card.Title>
        {allowBioEdit && (
          <Card.Body className="rounded" style={{ backgroundColor: "#fff" }}>
            {isEditing ? (
              <Form.Control
                as="textarea"
                value={newBio}
                onChange={handleBioInput}
                ref={bioFormRef}
                rows={12}
              />
            ) : (
              <Card.Text style={{ color: "#68717a", whiteSpace: "pre-wrap" }}>
                {bio || ""}
              </Card.Text>
            )}
          </Card.Body>
        )}
      </Card>
      {isEditing && (
        <Row className="my-5 text-center">
          <Col xs={12}>
            <Button
              className="mx-2"
              style={{ border: "#6c757d", backgroundColor: "#6c757d" }}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button
              className="mx-2"
              style={{ border: roleColor, backgroundColor: roleColor }}
              onClick={handleSaveProfile}
            >
              Save Changes{" "}
              {uploading && (
                <Spinner size="sm" className="mx-2" animation="border" />
              )}
            </Button>
          </Col>
        </Row>
      )}
      {isEditing && (role === "Patient" || role === "Physician") && (
        <Row>
          <Col xs={12}>
            <Button onClick={() => setShowEmailUpdate(true)}>
              Update Email
            </Button>
          </Col>
        </Row>
      )}

      {showEmailUpdate && (
        <Row>
          <Col xs={12}>
            <h2 className="my-4" style={{ color: "#0d6efd" }}>
              Change Email
            </h2>
            <p className="mb-4">
              To update your email, please provide your new email and current
              password.
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>New Email</Form.Label>
                <Form.Control
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter your new email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password to confirm"
                />

                {emailError && <div className="text-danger">{emailError}</div>}
              </Form.Group>
              <Button onClick={handleEmailUpdate}>Confirm</Button>
              <Button
                className="ms-4"
                variant="secondary"
                onClick={() => setShowEmailUpdate(false)}
              >
                Cancel
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default EditProfile;
